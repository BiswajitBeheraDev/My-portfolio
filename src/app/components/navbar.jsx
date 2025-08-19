"use client"
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav className="w-full bg-blue-600 shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50 sticky-top">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-500 font-bold">Home</Link>
          <Link href="/projects" className="hover:text-blue-500 font-bold">Projects</Link>
          <Link href="/Contact" className="hover:text-blue-500 font-bold">Contact</Link>
        </div>
      </nav>
    </div>
  )
}
