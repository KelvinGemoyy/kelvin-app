import React from 'react'
type Props = {
  params: {
     productId: string;
  };
};


export default function Product( {params}: Props ) {
  return (
    <div>
        <h1>Welcome To Product {params.productId}</h1>
    </div>
  )
}
