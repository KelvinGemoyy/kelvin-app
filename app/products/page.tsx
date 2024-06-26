import React from 'react'
import Link from 'next/link'

export default function Product() {
  const productId = 70;
  return (
    <div>
      <Link href="/">Back</Link>
        <h1>Welcome To Product Page</h1>
        <ul>
           <Link href={`/products/1`}><li>Product 1</li></Link>
           <Link href={`/products/2`}><li>Product 2</li></Link>
           <Link href={`/products/3`}><li>Product 3</li></Link>
           <Link href={`/products/${productId}`}><li>Product {productId}</li></Link>
        </ul>
    </div>
  )
}
