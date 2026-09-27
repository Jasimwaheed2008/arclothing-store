import { useEffect, useState } from 'react'
import { useCart } from '@/lib/cart'

export default function Header() {
  const { count, bump, setOpen, setPaymentOpen } = useCart()
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'hdr' + (solid ? ' solid' : '')}>
      <a href="#top" className="brand" aria-label="AR Clothing home">
        <img src="/logo-full.png" alt="AR Clothing" />
      </a>
      <nav className="links" aria-label="Main">
        <a href="#shop">Shop</a>
        <a href="#how">How to order</a>
        <button className="navlink" onClick={() => setPaymentOpen(true)}>Payment</button>
        <a href="#contact">Contact</a>
      </nav>
      <button className="cartbtn" onClick={() => setOpen(true)} aria-label={`Open cart, ${count} items`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 7h12l1 13H5L6 7z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
        Cart
        <span key={bump} className={'badge' + (bump ? ' pop' : '')}>{count}</span>
      </button>
    </header>
  )
}
