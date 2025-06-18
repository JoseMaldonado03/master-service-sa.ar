import classes from './styles.module.css'

export default function PostItContainer(props: React.PropsWithChildren) {
  return <div className={classes.container}>{props.children}</div>
}
