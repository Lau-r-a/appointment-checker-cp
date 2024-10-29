import { CurNotifyStateEnum } from "../../models"
import useNotifyStore from "../../stores/notifyStateStore"
import { Button, LucyColors } from "../../lucyStyling"

function DeleteNotify() {
  const deleteNotifyCSS: React.CSSProperties = {
    textAlign: "center",
    background: LucyColors.eggplant,
    borderRadius: "1rem",
    paddingTop: "1vh",
    paddingBottom: "1vh",
  }
  
  const { setNotifyState } = useNotifyStore()

  const buttonClicked = () => {
    setNotifyState(CurNotifyStateEnum.ALLITEMS)
  }
  return(
    <div
      style={deleteNotifyCSS}
    >
      <h1>
        Are you shure to delete the item?
      </h1>
      <Button
        onClick={buttonClicked}
      >
        yes
      </Button>
      <Button
        onClick={buttonClicked}
      >
        no
      </Button>
    </div>
  )
}

export default DeleteNotify