import { db } from '@/db'
import { Product, productsTable } from '@/db/schema'
import { vectorize } from '@/lib/vectorize'
// import { Index } from '@upstash/vector'
import { sql } from 'drizzle-orm'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import index from "../../db/pinnocone"

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export type CoreProduct = {
  id: string;
  name: string;
  imageId: string;
  price: number;
  description: string | null;
};



const Page = async ({ searchParams }: PageProps) => {
  const query = searchParams.query

  if (Array.isArray(query) || !query) {
    return redirect('/')
  }

  let products: CoreProduct[] = await db
    .select()
    .from(productsTable)
    .where(
      sql`to_tsvector('simple', lower(${productsTable.name} || ' ' || ${productsTable.description
        })) @@ to_tsquery('simple', lower(${query
          .trim()
          .split(' ')
          .join(' & ')}))`
    )
    .limit(3)

  if (products.length < 3) {
    // search products by semantic similarity
    console.log("query:", query);
    const vector = await vectorize(query)
   // console.log("vector data:", vector);

    const res = await index.namespace("ns1").query({
      topK: 10,
      vector,
      includeMetadata: true,
    })

   // console.log("res:", res);

    const matches = res.matches || [];
    //console.log("matches:", matches);

    const transformedMatches: CoreProduct[] = matches
      .filter((existingProduct) => {
        // Ensure metadata is defined
        const metadata = existingProduct.metadata;
        if (!metadata) {
          return false;
        }

        // Checking if the product already exists in the list or if its score is below 0.9
        if (
          products.some((product) => product.id === metadata.id) ||
          (existingProduct.score !== undefined && existingProduct.score < 0.5)
        ) {
          return false;
        } else {
          return true;
        }
      })
      .map((match) => {
        // Ensure metadata is defined
        const metadata = match.metadata;
        if (!metadata) {
          throw new Error('Metadata is undefined');
        }

        return {
          id: String(metadata.id),  // Ensure the type matches CoreProduct
          name: String(metadata.name),
          imageId: String(metadata.imageId),
          price: Number(metadata.price),
          description: String(metadata.description)
        };
      });


    products = [...products, ...transformedMatches];

  }

  if (products.length === 0) {
    return (
      <div className='text-center py-4 bg-white shadow-md rounded-b-md'>
        <X className='mx-auto h-8 w-8 text-gray-400' />
        <h3 className='mt-2 text-sm font-semibold text-gray-900'>No results</h3>
        <p className='mt-1 text-sm mx-auto max-w-prose text-gray-500'>
          Sorry, we couldn&apos;t find any matches for{' '}
          <span className='text-green-600 font-medium'>{query}</span>.
        </p>
      </div>
    )
  }

  return (
    <ul className='py-4 divide-y divide-zinc-100 bg-white shadow-md rounded-b-md'>
      {products.slice(0, 3).map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <li className='mx-auto py-4 px-8 flex space-x-4'>
            <div className='relative flex items-center bg-zinc-100 rounded-lg h-40 w-40'>
              <Image
                loading='eager'
                fill
                alt='product-image'
                src={`/${product.imageId}`}
              />
            </div>

            <div className='w-full flex-1 space-y-2 py-1'>
              <h1 className='text-lg font-medium text-gray-900'>
                {product.name}
              </h1>

              <p className='prose prose-sm text-gray-500 line-clamp-3'>
                {product.description}
              </p>

              <p className='text-base font-medium text-gray-900'>
                ${product.price.toFixed(2)}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Page
