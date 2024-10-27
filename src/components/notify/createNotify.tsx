import React from "react"
import { LucyColors } from "../../lucyStyling"
import useNotifyStore from "../../stores/notifyStateStore"
import { CurNotifyStateEnum } from "../../models"
function CreateNotify() {
  const createNotifyCSS: React.CSSProperties = {
    textAlign: "center",
    background: LucyColors.eggplant,
    borderRadius: "1rem",
    paddingTop: "1vh",
    paddingBottom: "1vh",
  }
  const createNotifyInputFieldCSS: React.CSSProperties = {
    backgroundColor: LucyColors.eggplantTwo,
    border: `1px solid ${LucyColors.apricot}`,
    borderRadius: "0.25rem",
    color: LucyColors.apricot
  }

  const { setNotifyState } = useNotifyStore()

  const buttonClicked = () => {
    setNotifyState(CurNotifyStateEnum.ALLITEMS)
  }

  return(
    <div 
      style={createNotifyCSS}
    >
      <p>
        ItemID
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <p>
        AgendaID
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <p>
        InsuranceSector
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <p>
        PracticeIDs
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <p>
        Telehealth
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <p>
        VisitMotiveIDs
      </p>
      <input
        style={createNotifyInputFieldCSS}
      >
      </input>
      <div
        style={{marginTop: "2.5vh"}}
      >
        <button
          onClick={buttonClicked}
        >
          Done
        </button>
        <button
          onClick={buttonClicked}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default CreateNotify