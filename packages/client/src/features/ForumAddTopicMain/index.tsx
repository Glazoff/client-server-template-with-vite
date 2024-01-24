import { useNavigate } from 'react-router-dom';
import Button from "../../shared/button"
import styles from "./styles.module.scss"
import path from '../../App/Router/constants';
import Input from '../../shared/input';

export default function ForumAddTopicMain () {
  const navigate = useNavigate();

  return (
    <main className={styles.add__main}>
      <Input
        label="Название топика"
        classLabel={styles.add__label}
        classInput={styles.add__input}
      />

      <div className={styles.add__btns}>
        <Button 
          variant="blue" 
          label="На главную форума" 
          onClick={() => {
            navigate(`${path.Forum}`);
          }}/>
        <Button label="Создать топик"/>
      </div>
    </main>
  )
}
