'use client'

import { useState } from "react";

export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
  let [수량, 수량변경] = useState([0, 0, 0]);
  return (
    <div>
      <h1 className="title">상품 목록</h1>{
        상품.map((a, i) => {
          return (
            <div className="product-item" key={i}>
              <img src={`/food${i}.png`} alt={a} />
              <h2>{a} $40</h2>
              <div className="flex gap-x-[5px] justify-center">
                <span>{수량[i]}</span>
                <button type="button" className="px-[5px] border" onClick={()=>{ 
                  let copy = [...수량];
                  copy[i]++
                  수량변경(copy)
                }}>+</button>
                <button type="button" className="px-[5px] border" onClick={()=>{    
                  let copy = [...수량];
                  copy[i]--
                  수량변경(copy) 
                }}>-</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}