import Button from "../../shared/button";
import Imagine from "../../shared/imagine";
import LinkItem from "../../shared/link";
import path from "../../App/Router/constants";
import styles from "./styles.module.scss"

export default function MainGamePage () {
  return (
    <main className={styles.game__main}>
        <Imagine src="../src/images/Волк.jpg" class={styles.game__img} />
        <nav className={styles.game__nav}>
          {/*компонент кнопки все равно будет, так что я подумал, что пусть будет и тут кастомная кнопка */}
          <Button class={styles.game__button} label="Начать игру"/>

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
        </nav>
      </main>
  )
}
