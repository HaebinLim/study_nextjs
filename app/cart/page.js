import Hi from './data'

export default function Cart() {
  return (
    <div>
      <h1 className="title">Cart</h1>
      {Hi()}
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
} 

function CartItem() {
  return (
    <div className="cart-item">
      <h2>상품명</h2>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}