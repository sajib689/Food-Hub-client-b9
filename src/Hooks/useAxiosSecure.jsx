import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
   })
const useAxiosSecure = () => {
    const{logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res =>{
            return res
        }, err => {
            if(err.response.status === 401 || err.response.status === 403){
                logOut()
                .then(() => {
                    navigate('/')
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
        }
    )
    },[logOut,navigate])
    return axiosSecure;
};

export default useAxiosSecure;