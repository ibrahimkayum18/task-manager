import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-manager-server-xi-pied.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
