'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Container, NavLinks, NavLink, StyledNav } from './styled'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const pathname = usePathname()
  const [isAtTopPage, setIsAtTopPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsAtTopPage(scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const shouldShowTransparentNav = isAtTopPage && pathname === '/'

  return (
    <StyledNav hasTransparentStyle={shouldShowTransparentNav}>
      <Container>
        <Image
          alt="brand logo"
          height={54}
          src={
            shouldShowTransparentNav
              ? '/brand-icon-white.png'
              : '/brand-icon-primary.png'
          }
          width={54}
        />
        <NavLinks>
          <NavLink selected={pathname === '/'}>
            <Link href="/">Home</Link>
          </NavLink>
          <NavLink selected={pathname === '/how-to-play'}>
            <Link href="/how-to-play">How To Play</Link>
          </NavLink>
          <NavLink selected={pathname === '/challenges'}>
            <Link href="/challenges">Challenges</Link>
          </NavLink>
          <NavLink selected={pathname === '/leaderboard'}>
            <Link href="/leaderboard">Leaderboard</Link>
          </NavLink>
        </NavLinks>
      </Container>
    </StyledNav>
  )
}
