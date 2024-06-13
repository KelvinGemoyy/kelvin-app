import React from 'react';
import { notFound } from 'next/navigation';

export default function DetailReview({params}: any) {
    if (parseInt(params.reviewId) > 10 || parseInt(params.productId) > 10) {
        notFound();
    }
  return (
    <div>
        <h1>This is the product {params.productId} and review {params.reviewId}</h1>
    </div>
  )
}
