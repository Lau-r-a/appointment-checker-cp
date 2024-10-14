import React from "react"
import { LucyColors } from "../../lucyStyling"
function CreateNotify() {
  const createNotifyCSS: React.CSSProperties = {
    textAlign: "center",
    background: LucyColors.eggplant,
    borderRadius: "1rem",
    paddingTop: "1vh",
    paddingBottom: "1vh",
  }
  return(
    <div 
      style={createNotifyCSS}
    >
      CreateNotify
    </div>
  )
}

export default CreateNotify