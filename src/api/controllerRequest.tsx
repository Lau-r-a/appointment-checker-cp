import CurRequestState from "../models/enums/curRequestState"
import { GetAllRequest } from "./serviceApi"

function ControllerRequest(requestState: CurRequestState): Promise<any> {
  switch (requestState) {
    case CurRequestState.CREATE: {
      return GetAllRequest() //TODO Implement correct function
    }
    case CurRequestState.DELETE: {
      return GetAllRequest() //TODO Implement correct function
    }
    case CurRequestState.GET: {
      return GetAllRequest() //TODO Implement correct function
    }
    case CurRequestState.GETALL: {
      return GetAllRequest()
    }
  }
}

export default ControllerRequest