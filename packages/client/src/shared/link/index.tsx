import styles from "./styles.module.scss"

interface Props {
  s: "s"
}

export default function Link (props: Props) {
  return (
    <link className={styles.s} href={props.s}></link>
  )
}
