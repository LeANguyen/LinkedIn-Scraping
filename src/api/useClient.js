import { create } from "apisauce";

const useClient = () => {
  const api = create({
    // 192.168.5.102 - Home
    // 10.247.201.219 - School
    baseURL: "http://0.0.0.0:5000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  return { api };
};

export default useClient;
