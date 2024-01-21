interface Props {
  src: string
  class: string
}

export default function Imagine (props: Props) {
  return (
    <img src={props.src} className={props.class}/>
  )
}
