import { FaInstagram } from 'react-icons/fa6'

import classes from './styles.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      © {new Date().getFullYear()} MasterServiceSa.ar.
      <FaInstagram />
    </footer>
  )
}
