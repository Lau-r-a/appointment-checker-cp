import axios, { AxiosError, AxiosResponse } from "axios";

interface Response {
  data: any;
}
const api = axios.create({
  baseURL: 'http://localhost:8080'
})

function GetAllRequest(): AxiosResponse<Response, any> {
  api.get<Response>('/users').then(response => {
    return (response.data);
  }).catch(err => {
    return (err)
  })
}

export default GetAllRequest