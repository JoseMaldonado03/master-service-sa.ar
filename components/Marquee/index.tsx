import classes from './styles.module.css'

export default function Marquee() {
  return (
    <div className={classes.marqueeContainer}>
      <p className={classes.marqueeText}>
        ¡Bienvenido a Master Service! Control de plagas profesional 🐜
      </p>
    </div>
  )
}
