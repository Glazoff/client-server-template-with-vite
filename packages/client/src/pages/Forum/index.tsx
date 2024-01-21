import { Link } from 'react-router-dom'

export default function Forum () {
  return (
    <>
      <h1>Страница Форума</h1>
      <Link to="/add-topic">Adding Topic Page</Link>&nbsp;&nbsp;
      <Link to="/topic">Topic Page</Link>&nbsp;&nbsp;
    </>
  )
}
