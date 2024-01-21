import { Link } from 'react-router-dom'
import path from '../../shared/constants'

export default function ForumMainPage () {
  return (
    <>
      <h1>Страница Форума</h1>
      <Link to={path.AddTopicPage}>Adding Topic Page</Link>&nbsp;&nbsp;
      <Link to={path.TopicPage}>Topic Page</Link>&nbsp;&nbsp;
    </>
  )
}
