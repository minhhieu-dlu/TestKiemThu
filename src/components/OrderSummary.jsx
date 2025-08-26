export default function OrderSummary({subtotal, shipping, discount, total, onApplyCoupon}){
  return (
    <div className="card sticky top-6">
      <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Shipping</span><span>{shipping>0?`$${shipping.toFixed(2)}`:'Free'}</span></div>
        <div className="flex justify-between"><span>Discount</span><span className="text-emerald-600">- ${discount.toFixed(2)}</span></div>
        <hr/>
        <div className="flex justify-between font-semibold text-lg"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>
      <form onSubmit={onApplyCoupon} className="mt-3 flex gap-2">
        <input name="code" placeholder="Coupon code (SAVE10)" className="flex-1 border rounded px-3 py-2"/>
        <button className="btn" type="submit">Apply</button>
      </form>
      <p className="text-xs text-gray-500 mt-2">Free shipping on orders over $300.</p>
      <button className="btn w-full mt-3">Checkout</button>
    </div>
  )
}
