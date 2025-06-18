'use client'

import classes from './styles.module.css'

interface PostItProps {
  title?: string
}

export default function PostIt(props: React.PropsWithChildren<PostItProps>) {
  return (
    <div className={classes.postit} onClick={() => alert(props.children)}>
      {props.title && <h3 className={classes.title}>{props.title}</h3>}
    </div>
  )
}
