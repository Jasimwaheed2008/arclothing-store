import { useEffect, useState } from 'react'
import { Product } from '@/data/products'
import { pkr, waLink } from '@/data/site'
import { orderText, useCart } from '@/lib/cart'
import { WhatsAppIcon } from './Sections'

export default function ProductModal({ p, onClose }: { p: Product; onClose: () => void }) {
  const { add, setOpen, method } = useCart()
  const [size, setSize] = useState('M')
  const [added, setAdded] = useState(false)
  const off = p.mrp ? Math.round(100 - (p.price / p.mrp) * 100) : 0

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', k)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const addToCart = () => {
    add(p.id, size)
    setAdded(true)
    setTimeout(() => {
      onClose()
      setOpen(true)
    }, 450)
  }

  return (
    <div className="ov" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}>
        <div className="m-pic">
          {p.mrp && <span className="ribbon sale">{off}% OFF</span>}
          <img src={p.image} alt={p.name} />
        </div>
        <div className="m-info">
          <button className="x" onClick={onClose} aria-label="Close">×</button>
          <small className="crumb">{p.category}</small>
          <h2>{p.name}</h2>
          <div className="m-price">
            {p.mrp && <s className="mrp">{pkr(p.mrp)}</s>}
            {pkr(p.price)}
          </div>
          <p className="desc">{p.description}</p>
          <dl className="spec">
            <div><dt>Fabric</dt><dd>{p.fabric}</dd></div>
            <div><dt>Colour</dt><dd>{p.color}</dd></div>
          </dl>
          <div>
            <div className="lbl">Size</div>
            <div className="sizes">
              {p.sizes.map((s) => (
                <button key={s} className="size" aria-pressed={size === s} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className="m-actions">
            <button className={'btn red' + (added ? ' done' : '')} onClick={addToCart}>
              {added ? 'Added' : 'Add to cart'}
            </button>
            <a
              className="btn ghost"
              target="_blank"
              rel="noreferrer"
              href={waLink(orderText([{ id: p.id, size, qty: 1 }], method))}
            >
              <WhatsAppIcon /> Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
