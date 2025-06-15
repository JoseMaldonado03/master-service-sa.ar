import classes from './styles.module.css';

export default function Presentation(){
    return(
        <div className={classes.container}>
            <h1 className={classes.title}> 
                Master Service
            </h1>
            <p className={classes.subtitle}>
                Control de Plagas
            </p>
        </div>
    )
}