import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";


const DonarRequest = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const [request, setRequest] = useState([])
    useEffect(() => {
        axiosSecure.get(`/equest?donatorEmail=${user?.email}`)
        .then(res => {
            setRequest(res.data)
        })
    },[user?.email,axiosSecure])
    console.log(request)
    return (
        <div>
            
        </div>
    );
};

export default DonarRequest;