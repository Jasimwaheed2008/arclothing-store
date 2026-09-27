import { easypaisa, site, waLink } from '@/data/site'
import { useCart } from '@/lib/cart'

export const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.05L2 22l5.1-1.55A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.3 14.98l-.3-.19-3.02.92.95-2.94-.2-.31A8.1 8.1 0 0 1 12.04 3.8zM8.6 7.6c-.2 0-.5.07-.75.35-.26.28-1 1-1 2.45s1.03 2.85 1.17 3.05c.15.2 2.02 3.2 5 4.35 2.47.97 2.97.78 3.5.73.54-.05 1.73-.7 1.97-1.38.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.56-.35-.3-.15-1.73-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18-.24-.57-.49-.5-.66-.5z" />
  </svg>
)

const tick = ['Graphic Tees', 'Plain Essentials', 'Oversized Fit', 'Rs 899 to Rs 2,000', 'Order on WhatsApp', 'Easypaisa Accepted']

export function Marquee() {
  const half = (k: string) => (
    <div className="marq-half" key={k} aria-hidden={k === 'b'}>
      {tick.map((t) => (
        <span key={t}>{t}<i /></span>
      ))}
    </div>
  )
  return (
    <div className="marq" role="presentation">
      <div className="marq-track">{[half('a'), half('b')]}</div>
    </div>
  )
}

export function HowToOrder() {
  const steps = [
    ['Pick your tee', 'Choose a design and your size, S to XL.'],
    ['Send it on WhatsApp', `Tap Order on WhatsApp. Your selection goes straight to ${site.phoneDisplay}.`],
    ['Choose Cash on Delivery or Easypaisa', 'Pay cash when your order arrives, or send advance payment via Easypaisa and share the screenshot on WhatsApp.'],
  ]
  return (
    <section className="how wrap" id="how">
      <h2>How to order</h2>
      <ol className="steps">
        {steps.map(([t, d], i) => (
          <li className="step" key={t}>
            <b>{i + 1}</b>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function PaymentStrip() {
  const { setPaymentOpen } = useCart()
  return (
    <section className="paystrip wrap">
      <div className="paystrip-in">
        <div className="paystrip-qr" onClick={() => setPaymentOpen(true)} role="button" tabIndex={0} aria-label="View Easypaisa payment details">
          <img src={easypaisa.qrImage} alt="Easypaisa QR" />
        </div>
        <div>
          <span className="pay-tag">Cash on Delivery or Easypaisa</span>
          <h2>Pay however suits you</h2>
          <p>Cash on Delivery — pay when it arrives. Or scan the code for Easypaisa advance payment, then confirm your order on WhatsApp.</p>
          <button className="btn red" onClick={() => setPaymentOpen(true)}>View Easypaisa details</button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="ftr" id="contact">
      <div className="wrap ftr-in">
        <img src="/logo-full.png" alt="AR Clothing" className="ftr-logo" />
        <div className="ftr-contact">
          <h2>Talk to us</h2>
          <span className="phone">{site.phoneDisplay}</span>
          <div className="cta">
            <a className="btn red" href={waLink('Assalam o Alaikum AR Clothing!')} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} AR Clothing. All prices in PKR.</p>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink('Assalam o Alaikum AR Clothing!')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden>
        <path d="M12.04 2a9.9 9.9 0 0 0-8.45 15.05L2 22l5.1-1.55A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.3 14.98l-.3-.19-3.02.92.95-2.94-.2-.31A8.1 8.1 0 0 1 12.04 3.8zM8.6 7.6c-.2 0-.5.07-.75.35-.26.28-1 1-1 2.45s1.03 2.85 1.17 3.05c.15.2 2.02 3.2 5 4.35 2.47.97 2.97.78 3.5.73.54-.05 1.73-.7 1.97-1.38.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.56-.35-.3-.15-1.73-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.15-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18-.24-.57-.49-.5-.66-.5z" />
      </svg>
    </a>
  )
}
