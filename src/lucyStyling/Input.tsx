import LucyColors from "./LucyColors"

function Input() {
  const inputFieldCSS: React.CSSProperties = {
    backgroundColor: LucyColors.eggplantTwo,
    border: `1px solid ${LucyColors.apricot}`,
    borderRadius: "0.25rem",
    color: LucyColors.apricot
  }

  return(
    <input 
    style={inputFieldCSS}
    >
    </input>
  )
}

export default Input