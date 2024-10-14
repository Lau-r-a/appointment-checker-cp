import { 
  AllNotifyItems, 
  CreateNotify,
  DeleteNotify, 
  CheckNotify } from "../../components"
import { CurNotifyStateEnum } from "../../models"

function MainPage({state}: CurNotifyStateEnum) {
  const mainBodyCSS: React.CSSProperties = {
    position: "absolute",
    border: "1px solid red",
    marginTop: "7vh",
    marginLeft: "2.5vw",
    width: "95vw",
  }
  switch (state) {
    case CurNotifyStateEnum.ALLITEMS:
      return(
        <>
          <div
          style={mainBodyCSS}
        >
          <AllNotifyItems />
        </div>
        </>
      )
    case CurNotifyStateEnum.CREATE:
      return(
        <>
          <div
          style={mainBodyCSS}
        >
          <CreateNotify />
        </div>
        </>
      )
    case CurNotifyStateEnum.CHECK:
      return(
        <>
          <div
          style={mainBodyCSS}
        >
          <CheckNotify />
        </div>
        </>
      )
    case CurNotifyStateEnum.DELETE:
      return(
        <>
          <div
          style={mainBodyCSS}
        >
          <DeleteNotify />
        </div>
        </>
      )
  }
}

export default MainPage