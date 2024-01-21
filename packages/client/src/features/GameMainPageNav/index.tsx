import LinkItem from "../../shared/link";
import styles from "./styles.module.scss"
import path from "../../App/Router/constants";

export default function GameMainPageNav () {
  return (
    <ul className={styles.game__list}>
      <li className={styles.game__li}>
        <LinkItem path={path.LiderBoard} class={styles.game__link} label="Посмотреть список лидеров" />
      </li>
      <li className={styles.game__li}>
        <LinkItem path={path.Forum} class={styles.game__link} label="Почитать форум" />
      </li>
      <li className={styles.game__li}>
        {/*logout будет */}
        <LinkItem path={"#"} class={styles.game__link} label="Выйти из аккаунта" />
      </li>
    </ul>
  )
}
