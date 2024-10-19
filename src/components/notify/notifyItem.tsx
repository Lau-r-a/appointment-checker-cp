import Notification from "../../models/notification"
import { CurNotifyStateEnum } from "../../models"
interface Props {
  setState: React.Dispatch<React.SetStateAction<CurNotifyStateEnum>>
}

function NotifyItem(item: Notification, props: Props) {
  return(
    <div>
      <div>
        <p>ItemID:</p>
        <p>{item.id}</p>  
      </div>
      <div>
        <p>AgendaID:</p>
        <p>{item.drLibParams.agendaIds}</p>  
      </div>
      <div>
        <p>InsuranceSector:</p>
        <p>{item.drLibParams.insuranceSector}</p>  
      </div>
      <div>
        <p>PracticeIds:</p>
        <p>{item.drLibParams.practiceIds}</p>  
      </div>
      <div>
        <p>Telehealth:</p>
        <p>{item.drLibParams.telehealth}</p>  
      </div>
      <div>
        <p>VisitMotiveIds:</p>
        <p>{item.drLibParams.visitMotiveIds}</p>  
      </div>
      <button
        onClick = {props.setState(CurNotifyStateEnum.DELETE)}
      >
        Delete item
      </button>
    </div>
  )
}

export default NotifyItem