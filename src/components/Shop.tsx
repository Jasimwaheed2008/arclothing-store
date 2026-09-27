import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { categories, Product, products } from '@/data/products'
import { pkr } from '@/data/site'

type Cat = (typeof categories)[number]

function Card({ p, i, onOpen }: { p: Product; i: number; onOpen: (p: Product) => void }) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const key = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(p)
    }
  }
  return (
    <article
      ref={ref}
      className={'card' + (seen ? ' seen' : '')}
      style={{ ['--i' as string]: i % 4 }}
      role="button"
      tabIndex={0}
      aria-label={`${p.name}, ${pkr(p.price)}. View details`}
      onClick={() => onOpen(p)}
      onKeyDown={key}
    >
      <div className="pic">
        {p.mrp ? (
          <span className="ribbon sale">{Math.round(100 - (p.price / p.mrp) * 100)}% OFF</span>
        ) : (
          p.category === 'Graphic Tee' && <span className="ribbon">Printed</span>
        )}
        <img src={p.image} alt={p.name} loading="lazy" />
        <span className="qv">Quick view</span>
      </div>
      <div className="meta">
        <div>
          <h3>{p.name}</h3>
          <small>{p.category} · {p.fabric}</small>
        </div>
        <span className="price">
          {p.mrp && <s className="mrp">{pkr(p.mrp)}</s>}
          {pkr(p.price)}
        </span>
      </div>
    </article>
  )
}

export default function Shop({ onOpen }: { onOpen: (p: Product) => void }) {
  const [cat, setCat] = useState<Cat>('All')
  const [sort, setSort] = useState('default')
  const list = useMemo(() => {
    const l = products.filter((p) => cat === 'All' || p.category === cat)
    if (sort === 'low') return [...l].sort((a, b) => a.price - b.price)
    if (sort === 'high') return [...l].sort((a, b) => b.price - a.price)
    return l
  }, [cat, sort])

  return (
    <section className="shop wrap" id="shop">
      <div className="shop-head">
        <div>
          <h2>The collection</h2>
          <p className="sub">{list.length} shirts · Prices in PKR</p>
        </div>
        <div className="tools">
          {categories.map((c) => (
            <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
          <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by price">
            <option value="default">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>
      <div className="grid" key={cat + sort}>
        {list.map((p, i) => (
          <Card key={p.id} p={p} i={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
