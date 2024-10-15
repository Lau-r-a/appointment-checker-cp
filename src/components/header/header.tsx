import { LucyColors } from "../../lucyStyling"
import { CurNotifyStateEnum } from "../../models"

interface Props {
  state: CurNotifyStateEnum,
  setState: React.Dispatch<React.SetStateAction<CurNotifyStateEnum>>
}

function Header(props: Props) {
  const headerBodyCSS: React.CSSProperties = {
    position: "fixed",
    display: "table",
    columnCount: "2",
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
  switch (props.state) {
    case CurNotifyStateEnum.ALLITEMS:
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
              Create Notification
            </div>
          </div>
        </div>
      )
    case CurNotifyStateEnum.CREATE:
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
}

export default Header