import LinkItem from "../../shared/link";
import path from "../../App/Router/constants";
import styles from "./styles.module.scss"

export default function GameMainPageNav () {
  return (
    <nav className={styles.game__nav}>
      <LinkItem path={path.Profile} variant="blue" label="Профиль"/>
      <LinkItem path={path.LiderBoard} label="Доска лидеров"/>
      <LinkItem path={path.Forum} variant="blue" label="Форум"/>
      <LinkItem path={"#"} label="Как играть?"/>
    </nav>
  )
}
