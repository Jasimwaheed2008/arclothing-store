import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import { products } from '@/data/products'
import { pkr, waLink, easypaisa, PaymentMethod } from '@/data/site'

export type Line = { id: number; size: string; qty: number }

type Ctx = {
  lines: Line[]
  count: number
  total: number
  open: boolean
  paymentOpen: boolean
  bump: number
  method: PaymentMethod
  setOpen: (v: boolean) => void
  setPaymentOpen: (v: boolean) => void
  setMethod: (m: PaymentMethod) => void
  add: (id: number, size: string) => void
  setQty: (id: number, size: string, qty: number) => void
}

const CartCtx = createContext<Ctx>(null as unknown as Ctx)
export const useCart = () => useContext(CartCtx)
const KEY = 'ar-clothing-cart-v1'
const price = (id: number) => products.find((p) => p.id === id)?.price ?? 0

export function orderText(lines: Line[], method: PaymentMethod = 'cod') {
  const rows = lines.map((l, i) => {
    const p = products.find((x) => x.id === l.id)!
    return `${i + 1}. ${p.name} - Size ${l.size} x${l.qty} - ${pkr(p.price * l.qty)}`
  })
  const total = lines.reduce((s, l) => s + price(l.id) * l.qty, 0)
  const pay =
    method === 'cod'
      ? 'Payment: Cash on Delivery'
      : `Payment: Easypaisa advance (${easypaisa.accountName}). ${easypaisa.note}`
  return `Assalam o Alaikum AR Clothing! Mujhe ye order karna hai:\n\n${rows.join('\n')}\n\nTotal: ${pkr(total)}\n\n${pay}`
}

export const orderLink = (lines: Line[], method: PaymentMethod = 'cod') => waLink(orderText(lines, method))

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([])
  const [open, setOpen] = useState(false)
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [method, setMethod] = useState<PaymentMethod>('cod')
  const [bump, setBump] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const saved: Line[] = JSON.parse(localStorage.getItem(KEY) || '[]')
      setLines(saved.filter((l) => products.some((p) => p.id === l.id)))
    } catch {}
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(KEY, JSON.stringify(lines))
    } catch {}
  }, [lines, ready])

  const value = useMemo<Ctx>(
    () => ({
      lines,
      open,
      paymentOpen,
      bump,
      method,
      setOpen,
      setPaymentOpen,
      setMethod,
      count: lines.reduce((s, l) => s + l.qty, 0),
      total: lines.reduce((s, l) => s + price(l.id) * l.qty, 0),
      add: (id, size) => {
        setLines((ls) => {
          const f = ls.find((x) => x.id === id && x.size === size)
          return f ? ls.map((x) => (x === f ? { ...x, qty: x.qty + 1 } : x)) : [...ls, { id, size, qty: 1 }]
        })
        setBump((b) => b + 1)
      },
      setQty: (id, size, qty) =>
        setLines((ls) =>
          qty <= 0
            ? ls.filter((x) => !(x.id === id && x.size === size))
            : ls.map((x) => (x.id === id && x.size === size ? { ...x, qty } : x))
        ),
    }),
    [lines, open, paymentOpen, method, bump]
  )
  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}
