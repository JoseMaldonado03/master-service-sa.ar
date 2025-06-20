
'use client'

import classes from './styles.module.css'

  interface PostItProps {
  title?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function PostIt(props: PostItProps) {
  return (
    <div className={classes.postit} onClick={props.onClick}>
      {props.title && <h3 className={classes.title}>{props.title}</h3>}
    </div>
  );
}

