"use client"
import { useRouter } from 'next/navigation'
import React from 'react'



export default function orderProduct() {
        const router = useRouter()
        const handleCLick = () => {
        console.log("Placing Your Order")
        router.push("/")
    };
  return (
    <>
        <h1>Order Product</h1>
        <button onClick={handleCLick}> Place Order</button>
    </>
  )
}
