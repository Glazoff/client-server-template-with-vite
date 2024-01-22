import styles from './style.module.scss';

interface Props {
  variant?: string
  label: string
  class?: string
}

export default function Button (props: Props) {
  return (
    <button className={props.class + " " + (props.variant === "blue" ? styles.button : `${styles.button_blue} ${styles.button}`)}>{props.label}</button>
  )
}
