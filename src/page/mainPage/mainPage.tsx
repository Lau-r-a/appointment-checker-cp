import { 
  AllNotifyItems, 
  CreateNotify,
  DeleteNotify, 
  CheckNotify } from "../../components"
import { CurNotifyStateEnum } from "../../models"
import useNotifyStore from "../../stores/notifyStateStore"

function MainPage() {

  const { notifyState } = useNotifyStore()
  const mainBodyCSS: React.CSSProperties = {
    position: "absolute",
    border: "1px solid red",
    marginTop: "100px",
    marginLeft: "2.5vw",
    width: "95vw",
  }
  switch (notifyState) {
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