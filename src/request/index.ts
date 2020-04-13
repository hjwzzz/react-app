import Axios, { AxiosRequestConfig } from "axios";
// import { useState, useCallback, useEffect } from "react";

Axios.defaults.headers.post["Content-Type"] = "application/json";

Axios.defaults.baseURL = "http://23.105.194.254:3000/";

const request = async ({
  url,
  data,
  params,
  method = "get",
}: AxiosRequestConfig) =>
  await Axios.request({
    url,
    data,
    method,
    params,
  });

// const instance = Axios.create({
//   baseURL: "/",
//   timeout: 1000,
// });

// export const useFatchData = <T extends any[] = [], E = null>(
//   apiUrl: string
// ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<E | null>(null);
//   const fetchData = useCallback(
//     (apiUrl: string) => {
//       async function getData() {
//         setData(await instance.get(apiUrl));
//       }
//       setLoading(true);
//       getData()
//         .catch(setError)
//         .finally(() => {
//           setLoading(false);
//         });
//     },
//     [apiUrl]
//   );

//   useEffect(() => {
//     fetchData(apiUrl);
//   }, [apiUrl]);

//   return {
//     loading,
//     data,
//     error,
//     refresh: fetchData,
//   };
// };

export default request;
