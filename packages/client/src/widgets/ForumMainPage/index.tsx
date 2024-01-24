import ForumContainer from "../../features/ForumContainer"
import Title from "../../shared/title"
import styles from "./styles.module.scss"

export default function ForumMainPage () {
  return (
    <div className={styles.forum}>
      <Title label="Форум" class={styles.forum__title}/>
      <ForumContainer />
    </div>
  )
}
