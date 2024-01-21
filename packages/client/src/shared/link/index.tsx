import { Link } from 'react-router-dom'
interface Props {
  path: string
  class: string
  label: string
}

export default function LinkItem (props: Props) {
  return (
    <Link to={props.path} className={props.class}>{props.label}</Link>
  )
}
