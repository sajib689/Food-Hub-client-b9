import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import Loader from './../Components/Loader';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading) {
        return <Loader/>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoute;