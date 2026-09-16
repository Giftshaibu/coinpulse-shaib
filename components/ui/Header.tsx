import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.svg'

const Header = () => {
  return (
    <header className="main-container inner">
      <Link href="/" aria-label="CoinPulse home">
        <Image src={logo} alt="CoinPulse logo" width={132} height={40} priority />
      </Link>

      <nav>
        <Link href="/" className="nav-link is-home">
          Home
        </Link>
        <p>Search Modal</p>
        <Link href="/coins" className="nav-link">
          All coins
        </Link>
      </nav>
    </header>
  )
}

export default Header