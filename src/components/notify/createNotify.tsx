import React from "react"
import { Button, LucyColors } from "../../lucyStyling"
import useNotifyStore from "../../stores/notifyStateStore"
import { CurNotifyStateEnum } from "../../models"
import { Input } from "../../lucyStyling"
function CreateNotify() {
  const createNotifyCSS: React.CSSProperties = {
    textAlign: "center",
    background: LucyColors.eggplant,
    borderRadius: "1rem",
    paddingTop: "1vh",
    paddingBottom: "1vh",
  }

  const errMessage: React.CSSProperties = {
    color: LucyColors.blush,
    fontWeight: "bold"
  }

  const { setNotifyState } = useNotifyStore()

  const buttonClicked = () => {
    setNotifyState(CurNotifyStateEnum.ALLITEMS)
  }

  return(
    <div 
      style={createNotifyCSS}
    >
      <p>Custom name</p>
      <Input />
      <p>
        Custom description
      </p>
      <Input />
      <p>
        URL
      </p>
      <Input />
      <p
        style={errMessage}
      >URL IS INVALID!      
      </p>
      <div
        style={{marginTop: "2.5vh"}}
      >
        <Button
          onClick={buttonClicked}
        >
          Done
        </Button>
        <Button
          onClick={buttonClicked}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default CreateNotify