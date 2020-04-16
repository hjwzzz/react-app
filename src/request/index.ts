import Axios, { AxiosRequestConfig } from 'axios'

Axios.defaults.headers.post['Content-Type'] = 'application/json'

Axios.defaults.baseURL = `${process.env.REACT_APP_REQUEST_URL}`

const request = async <T>({ url, data, params, method = 'get' }: AxiosRequestConfig) =>
  await Axios.request<T>({
    url,
    data,
    method,
    params,
  })

export default request
