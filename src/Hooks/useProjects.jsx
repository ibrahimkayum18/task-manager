import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProjects = () => {
    const axiosPublic = useAxiosPublic();
    const {data: projects = [], refetch} = useQuery({
        queryKey:['all-projects'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/projects`)
            return res.data;
        }
    })
    return [projects, refetch]
};

export default useProjects;