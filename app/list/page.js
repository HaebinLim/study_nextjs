export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h1 className="title">상품 목록</h1>{
        상품.map((a, i) => {
          return (
            <div className="product-item" key={i}>
              <h2>{a}</h2>
              <img src={`/food${i}.png`} alt={a} />
            </div>
          )
        })
      }
    </div>
  )
}
