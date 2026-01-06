import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <header className="flex justify-around p-6 bg-gray-100">
        <Link href="/privacy-policy" className="font-semibold text-xl text-gray-700 hover:underline no-underline">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="font-semibold text-xl text-gray-700 hover:underline no-underline">Terms and Conditions</Link>
        <Link href="/community-guidelines" className="font-semibold text-xl text-gray-700 hover:underline no-underline">Community Guidelines</Link>
      </header>
      <h1 className="text-[240px] font-black text-center mt-8">Lynx</h1>
    </div>
  )
}

export default Home