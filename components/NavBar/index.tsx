'use client'

import { type PropsWithChildren, useState } from 'react'
import classes from './styles.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '@/public/assets/LOGO.png'
import Image from 'next/image'

export default function NavBar({ children }: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <button
          className={classes.hamburguesa}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
        <Image className={classes.logo} src={Logo} alt="" />
      </div>
      <nav data-mobile-open={menuOpen} className={classes.navBar}>
        {children}
      </nav>
    </div>
  )
}
