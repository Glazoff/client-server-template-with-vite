import styles from "./style.module.scss"

interface Props {
  class: string,
  label: string
}

export default function Button (props: Props) {
  return (
    <button className={props.class + " " + styles.button}>{props.label}</button>
  )
}
