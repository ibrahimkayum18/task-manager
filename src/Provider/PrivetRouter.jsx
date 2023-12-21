import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import Loading from "../Components/Loading";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        toast.error("You Didn't Log In, Please Log in First")
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRouter;