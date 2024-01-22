import styles from "./style.module.scss"

interface Props {
  label: string
  class?: string
}

export default function Title (props: Props) {
  return (
    <h1 className={styles.title + " " + props.class}>{props.label}</h1>
  )
}
