import { Link } from 'react-router-dom'
import Logo from "../../features/logo/Logo"
import Button from "../../features/button/Button"
import styles from "./style.module.scss"
import Imagine from "../../features/imagine/Imagine"

export default function GameMainPage () {
  return (
    <div className={styles.game}>
      <main className={styles.game__main}>
        <Imagine src="../src/images/Волк.jpg" class={styles.game__img} />
        <nav className={styles.game__nav}>
          <Button class={styles.game__button} label="Начать игру"/>

          <ul className={styles.game__list}>
            <li className={styles.game__li}>
              <Link to={"/lider-board"} className={styles.game__link}>Посмотреть список лидеров</Link>
            </li>
            <li className={styles.game__li}>
              <Link to={"/forum"} className={styles.game__link}>Почитать форум</Link>
            </li>
            <li className={styles.game__li}>
              {/*logout будет */}
              <Link to={"#"} className={styles.game__link}>Выйти из аккаунта</Link>
            </li>
          </ul>
        </nav>
      </main>

      <footer className={styles.game__footer}>
        <Logo />
      </footer>
    </div>
  )
}
