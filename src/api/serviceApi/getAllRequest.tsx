import axios from "axios";

function GetAllRequest(): Promise<any> {
  const promise = axios.get('http://localhost:8080')
  const dataPromise = promise.then((response) => response.data)
  return dataPromise
}

export default GetAllRequest