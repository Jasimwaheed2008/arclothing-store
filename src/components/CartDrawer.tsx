import { useEffect } from 'react'
import { products } from '@/data/products'
import { pkr, paymentMethods } from '@/data/site'
import { orderLink, useCart } from '@/lib/cart'
import { WhatsAppIcon } from './Sections'

export default function CartDrawer() {
  const { lines, open, setOpen, setQty, total, count, method, setMethod } = useCart()
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [open, setOpen])

  return (
    <>
      <div className={'dr-ov' + (open ? ' on' : '')} onClick={() => setOpen(false)} />
      <aside className={'drawer' + (open ? ' on' : '')} aria-label="Cart" aria-hidden={!open}>
        <div className="dr-head">
          <h2>Your cart ({count})</h2>
          <button className="x" onClick={() => setOpen(false)} aria-label="Close cart">×</button>
        </div>
        <div className="dr-body">
          {lines.length === 0 ? (
            <p className="empty">Cart is empty. Pick a tee from the collection and it will show up here.</p>
          ) : (
            lines.map((l) => {
              const p = products.find((x) => x.id === l.id)!
              return (
                <div className="line" key={l.id + l.size}>
                  <img src={p.image} alt="" />
                  <div>
                    <h3>{p.name}</h3>
                    <small>Size {l.size} · {pkr(p.price)}</small>
                    <div className="qty">
                      <button onClick={() => setQty(l.id, l.size, l.qty - 1)} aria-label="Decrease">−</button>
                      <span>{l.qty}</span>
                      <button onClick={() => setQty(l.id, l.size, l.qty + 1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <strong>{pkr(p.price * l.qty)}</strong>
                </div>
              )
            })
          )}
        </div>
        {lines.length > 0 && (
          <div className="dr-foot">
            <div className="paymethods">
              <div className="lbl">Payment method</div>
              <div className="pm-opts">
                {paymentMethods.map((m) => (
                  <button
                    key={m.id}
                    className="pm-opt"
                    aria-pressed={method === m.id}
                    onClick={() => setMethod(m.id)}
                  >
                    <span className="pm-label">{m.label}</span>
                    <span className="pm-desc">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="tot"><span>Total</span><strong>{pkr(total)}</strong></div>
            <a className="btn red" href={orderLink(lines, method)} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Send order on WhatsApp
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
