import { AxiosError, AxiosResponse } from "axios"
import CurRequestState from "../models/enums/curRequestState"
import { GetAllRequest } from "./requests"

function ControllerRequest(requestState: CurRequestState): Promise<AxiosResponse<any, any>> {
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