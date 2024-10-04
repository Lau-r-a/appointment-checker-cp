import { LucyColors } from "../../lucyStyling"

function Footer() {
  const footerBodyCSS: React.CSSProperties = {
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    fontSize: "125%",
    color: LucyColors.eggplant,
  }
  const footerCentralCSS: React.CSSProperties = {
    maxWidth: "fitContent",
    marginRight: "auto",
    marginLeft: "auto",
    margin: "5px",
  }
  return(
    <div 
      style={footerBodyCSS}
    >
      <div>
        <div 
          style={footerCentralCSS}
        >
          2024 Appointment Checker
        </div>
      </div>
    </div>
  )
}

export default Footer