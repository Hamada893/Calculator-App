import "./Button.css"

export default function Button({className, value, onClick}) {
  return (
    <div className={className} onClick={onClick}>
        {value}
    </div>
  )
}

