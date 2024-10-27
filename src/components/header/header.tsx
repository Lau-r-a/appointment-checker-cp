import { LucyColors } from "../../lucyStyling"
import { CurNotifyStateEnum } from "../../models"
import useNotifyStore from "../../stores/notifyStateStore"

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
    float: "left",
    margin: "20px",
  }
  const headerRightCSS: React.CSSProperties = {
    float: "right",
    margin: "20px",
  }

  const { notifyState, setNotifyState } = useNotifyStore()

    return(
      <div 
        style={headerBodyCSS}
      >
        <div 
          style={headerLeftCSS}
        >
          Appointment-Checker
        </div>
        <div 
          style={headerRightCSS}
        >
          {notifyState == CurNotifyStateEnum.ALLITEMS ? <button
            onClick={() => 
              setNotifyState(CurNotifyStateEnum.CREATE)
            }
          >
            Create Notification
          </button>
          : ""}
        </div>
      </div>
    )
}

export default Header