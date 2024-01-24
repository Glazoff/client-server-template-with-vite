import { useNavigate } from "react-router-dom"
import path from "../../App/Router/constants"
import Button from "../../shared/button"
import styles from "./styles.module.scss"

export default function ForumFooter () {
  const navigate = useNavigate()

  return (
    <footer className={styles.forum__footer}>
      <input className={styles.forum__search}></input>
      <div className={styles.forum__btns}>
        <Button 
          variant="blue" 
          class={styles.forum__link} 
          label="На главную форума"
          onClick={() => {
            navigate(`${path.Forum}`)
          }} 
          />
        <Button class={styles.forum__btn} label="Отправить"/>
      </div>
    </footer>
  )
}
