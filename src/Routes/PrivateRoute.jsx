import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import Loader from './../Components/Loader';
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading) {
        return <Loader/>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;