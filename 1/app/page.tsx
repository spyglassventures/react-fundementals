import React from 'react'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

const UsersPage = () => {
  return (
    <div>
      <main>
        <h1> Main</h1>
        <Link href='/users'>Users</Link>
        <ProductCard />
      </main >
    </div >
  )
}

export default UsersPage
