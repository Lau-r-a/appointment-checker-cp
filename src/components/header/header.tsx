import React from "react"
import { LucyColors } from "../../lucyStyling"

function Header() {
  const headerBodyCSS: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    fontSize: "175%",
    fontFamily: "Helvetica",
    color: LucyColors.blush,
    backgroundColor: LucyColors.englishViolet,
    borderBottom: `1px solid ${LucyColors.eggplant}`
  }
  const headerLeftCSS: React.CSSProperties = {
    margin: "5px",
  }
  const headerRightCSS: React.CSSProperties = {
    margin: "5px",
  }
  return(
    <div 
      style={headerBodyCSS}
    >
      <div>
        <div 
          style={headerLeftCSS}
        >
          Header
        </div>
        <div 
          style={headerRightCSS}
        >

        </div>
      </div>
    </div>
  )
}

export default Header