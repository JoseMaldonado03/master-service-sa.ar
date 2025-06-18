import classes from './styles.module.css'
import Image from 'next/image'
import Fumigador from '@/public/assets/fumigador.png'

export default function Presentation() {
  return (
    <div className={classes.container}>
      <Image className={classes.fumigador} src={Fumigador} alt="Fumigador" />
      <div className={classes.text}>
        <h1 className={classes.title}>
          CONTROL DE PLAGAS <br /> PROFESIONAL
        </h1>
        <h2 className={classes.subtitle}>
          Ofrecemos servicios de fumigación para <br />
          hogares, empresas y más...
        </h2>
      </div>
    </div>
  )
}
