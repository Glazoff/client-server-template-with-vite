interface Props {
  classInput: string
  classLabel: string
  label?: string
}

export default function Input (props: Props) {
  return (
    <label className={props.classLabel}>
      {props.label}
      <input className={props.classInput}/>
    </label>
  )
}
