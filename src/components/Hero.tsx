import { products } from '@/data/products'
import { site, waLink } from '@/data/site'

const ring = 'Oversized Tees · Graphic Prints · Plain Essentials · Rs 899 to Rs 2,000 · AR Clothing · '

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="stage">
        <svg className="ring" viewBox="0 0 400 400" aria-hidden>
          <defs>
            <path id="rp" d="M200,200 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0" />
          </defs>
          <circle className="ring-line" cx="200" cy="200" r="196" pathLength={1} />
          <g className="ring-text">
            <text>
              <textPath href="#rp" textLength="1074" lengthAdjust="spacing">{ring}</textPath>
            </text>
          </g>
        </svg>
        <img className="mark" src="/logo-full.png" alt="AR Clothing" />
      </div>
      <div className="hero-copy">
        <h1>
          Oversized tees,
          <br />
          Rs 899 to Rs 2,000.
        </h1>
        <div className="hero-side">
          <p>{products.length} designs — graphic prints and plain essentials. Sizes S to XL.</p>
          <div className="cta">
            <a className="btn red" href="#shop">Shop the collection</a>
            <a className="btn ghost" href={waLink('Assalam o Alaikum AR Clothing!')} target="_blank" rel="noreferrer">
              WhatsApp {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
