import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "Blog Dashboard",
  }
}

export default function Dashboard() {
  return (
    <div>
        <h1>Welcome To Dashboard Page</h1>
    </div>
  )
}
