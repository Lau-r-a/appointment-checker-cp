import React from "react"
import NotifyItem from "./notifyItem"
import { LucyColors } from "../../lucyStyling"

function AllNotifyItems() {
  const allBodyCSS: React.CSSProperties = {
    textAlign: "center",
    background: LucyColors.eggplant,
    borderRadius: "1rem",
    paddingTop: "1vh",
    paddingBottom: "1vh",
  }
  const tableBodyCSS: React.CSSProperties = {
    display: "table",
    columnWidth: "100%",
    marginLeft: "2.5vw",
    width: "90vw",
    background: LucyColors.eggplantTwo,
    borderRadius: "1rem",
  }
  const tableItemCSS: React.CSSProperties = {
    textAlign: "center",
  }
  return(
    <div
      style={allBodyCSS}
    >
      <h1>
        NOTIFICATION OVERVIEW
      </h1>
      <div 
        style={tableBodyCSS}
      >
        <div
          style={tableItemCSS}
        >
          <NotifyItem id={"666"} drLibParams={{
            visitMotiveIds: 0,
            agendaIds: 0,
            practiceIds: 0,
            insuranceSector: "999",
            telehealth: false
          }}
          />
        </div>
      </div>
    </div>
  )
}

export default AllNotifyItems