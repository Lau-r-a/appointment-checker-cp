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
    margin: "5px",
  }
  const headerRightCSS: React.CSSProperties = {
    float: "right",
    margin: "5px",
  }

  const { notifyState, setNotifyState } = useNotifyStore()

  switch (notifyState) {
    case CurNotifyStateEnum.ALLITEMS:
      return(
        <div 
          style={headerBodyCSS}
        >
          <div 
            style={headerLeftCSS}
          >
            Header
          </div>
          <div 
            style={headerRightCSS}
          >
            <button
              onClick={() => 
                setNotifyState(CurNotifyStateEnum.CREATE)
              }
            >
              Create Notification
            </button>
          </div>
        </div>
      )
    case CurNotifyStateEnum.CREATE:
      return(
        <div 
          style={headerBodyCSS}
        >
          <div 
            style={headerLeftCSS}
          >
            Header
          </div>
          <div 
            style={headerRightCSS}
          >
            <button
              onClick={() => 
                setNotifyState(CurNotifyStateEnum.ALLITEMS)
              }
            >
              Break creation
            </button>
        </div>
      </div>
    )
  }
}

export default Header