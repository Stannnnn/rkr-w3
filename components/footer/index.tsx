'use client'

import { blizzardLink, githubReadMeLink } from '@/constants'
import { FooterContainer, Link } from './styled'

export default function Footer() {
  return (
    <FooterContainer>
      <p>This is a non-profit project developed and maintained by Aches</p>
      <p>
        Warcraft is ©2024 by{' '}
        <Link href={blizzardLink} target="_blank" rel="noopener noreferrer">
          Blizzard Entertainment
        </Link>
      </p>
      <p>
        This website is an open-source project created by Melisa, learn{' '}
        <Link href={githubReadMeLink} target="_blank" rel="noopener noreferrer">
          how to contribute
        </Link>
      </p>
    </FooterContainer>
  )
}
