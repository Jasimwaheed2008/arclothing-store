import { useEffect } from 'react'
import { easypaisa } from '@/data/site'
import { useCart } from '@/lib/cart'

export default function PaymentModal() {
  const { paymentOpen, setPaymentOpen } = useCart()
  useEffect(() => {
    if (!paymentOpen) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setPaymentOpen(false)
    document.addEventListener('keydown', k)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', k)
      document.body.style.overflow = prev
    }
  }, [paymentOpen, setPaymentOpen])

  if (!paymentOpen) return null
  return (
    <div className="ov" onClick={() => setPaymentOpen(false)}>
      <div className="pay-modal" role="dialog" aria-modal="true" aria-label="Easypaisa payment details" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={() => setPaymentOpen(false)} aria-label="Close">×</button>
        <span className="pay-tag">Advance Payment · Easypaisa</span>
        <h2>Pay with Easypaisa</h2>
        <div className="pay-qr">
          <img src={easypaisa.qrImage} alt="Easypaisa QR code" />
        </div>
        <div className="pay-name">{easypaisa.accountName}</div>
        <p className="pay-note">{easypaisa.note}</p>
        <p className="pay-note">Cash on Delivery bhi available hai — checkout ke waqt cart mein option choose kar lein.</p>
      </div>
    </div>
  )
}
