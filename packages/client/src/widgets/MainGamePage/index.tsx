import Button from "../../shared/button";
import Imagine from "../../shared/imagine";
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"
import path from "../../shared/constants";

export default function MainGamePage () {
  return (
    <main className={styles.game__main}>
        <Imagine src="../src/images/Волк.jpg" class={styles.game__img} />
        <nav className={styles.game__nav}>
          <Button class={styles.game__button} label="Начать игру"/>

          <ul className={styles.game__list}>
            <li className={styles.game__li}>
              <Link to={path.LiderBoard} className={styles.game__link}>Посмотреть список лидеров</Link>
            </li>
            <li className={styles.game__li}>
              <Link to={path.Forum} className={styles.game__link}>Почитать форум</Link>
            </li>
            <li className={styles.game__li}>
              {/*logout будет */}
              <Link to={"#"} className={styles.game__link}>Выйти из аккаунта</Link>
            </li>
          </ul>
        </nav>
      </main>
  )
}
