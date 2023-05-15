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

/*
  서버 컴포넌트
  자바스크립트 기능 넣을 수 없음
  useState, useEffect 사용불가
  장점 로딩속도 빠름, 검색엔진 노출
  큰 페이지에 사용
*/
function CartItem() {
  return (
    <div className="cart-item">
      <h2>상품명</h2>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

/*
  클라이언트 컴포넌트
  파일 상단에 'use client'
  자바스크립트 기능, useState, useEffect 사용가능
  로딩속도 느림, hydration 필요(자바스크립트로 html을 다시 읽고 분석하는 일)
  js기능 필요한 곳에 사용
*/