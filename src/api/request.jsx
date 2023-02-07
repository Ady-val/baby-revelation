import axios from "axios";

const baseURL = 'http://localhost:8080'
// const baseURL = 'https://'
const dev = process.env.REACT_APP_DEPLOYMENT_ENV

/**
 * It returns an axios instance with a baseURL of the API
 * @returns An axios instance with a baseURL of the baseURL constant.
 */
export const request = () => {
  const id = window.localStorage.getItem("id")
  const token = window.localStorage.getItem("token")
  const customAxios = axios.create({
    baseURL, 
    credentials: "include",
    headers: { 
      "user": id,
      token
    }
  });
  
  customAxios.interceptors.response.use((config) => {
    return config
  }, (err) => {

    if (err.response) {
      const { licenseExpired, noToken } = err.response.data
    
      if (licenseExpired) {
        window.localStorage.setItem("rol", 'user')
        window.location.reload(false);
      }
  
      if (noToken) {
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token")
        window.location.reload(false);
      }
    }

    return err
  });

  return customAxios
}