"use client"
import { headers } from "next/dist/client/components/headers";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [productItems, setProductItems] = useState([])
  const titleInputeRef = useRef();
  const priceInputeRef = useRef();

  async function addProductHandler(e) {
    e.preventDefault();
    const title = titleInputeRef.current.value;
    const price = priceInputeRef.current.value;
    
    const reqBody = {title, price}
    const response = await fetch('/api/product', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type' : 'application/json'
      }
    })

    const responseData = await response.json()
    console.log(responseData);
  }

  async function showProductHandler(){
    const response = await fetch('/api/product')
    const responseData = await response.json();
    setProductItems(responseData.products)
  }
  return (
    <main className="w-2/6 items-center justify-center p-8">
      <form onSubmit={addProductHandler}>
        <div className="pb-3">
          <input type="text" placeholder="Title" ref={titleInputeRef} />
        </div>
        <div className="pb-3">
          <input type="text" placeholder="Price" ref={priceInputeRef} />
        </div>
        <button>Add</button>
      </form>
      <div>
        <button onClick={showProductHandler}>Show Products</button>
        <ul>
          {productItems.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
