import React from 'react'

export default function Product( {params}: any ) {
  return (
    <div>
        <h1>Welcome To Product {params.productId}</h1>
    </div>
  )
}
