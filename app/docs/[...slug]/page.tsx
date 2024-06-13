import React from 'react'

export default function Documents({params}: {
    params: {slug: string[]}
} ) {
    {
        if(params.slug.length === 2) {
            return <h1>
                Lihat Docs Untuk Feature {params.slug[0]} - {params.slug[1]}
            </h1>
        } else if (params.slug.length === 1) {
            return <h1>
                Lihat Docs Untuk Feature  {params.slug[0]}
            </h1>
        }
    }
  return (
    <div>
        <h1>Welcome To Document Slug </h1>
    </div>
  )
}
