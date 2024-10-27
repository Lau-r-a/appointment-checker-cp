import { CurNotifyStateEnum } from "../../models"
import useNotifyStore from "../../stores/notifyStateStore"

function DeleteNotify() {
  
  const { setNotifyState } = useNotifyStore()

  const buttonClicked = () => {
    setNotifyState(CurNotifyStateEnum.ALLITEMS)
  }
  return(
    <div>
      <h1>
        Are you shure to delete the item?
      </h1>
      <button
        onClick={buttonClicked}
      >
        yes
      </button>
      <button
        onClick={buttonClicked}
      >
        no
      </button>
    </div>
  )
}

export default DeleteNotify