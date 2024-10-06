import { AllNotify } from "../../components"
import React from "react"

function MainPage() {
  const mainBodyCSS: React.CSSProperties = {
    position: "absolute",
    border: "1px solid red",
    marginTop: "7vh",
    marginLeft: "2.5vw",
    width: "95vw",
  }
  return(
    <div
      style={mainBodyCSS}
    >
      {<AllNotify />}
    </div>
  )
}

export default MainPage