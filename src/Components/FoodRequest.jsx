import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import FoodRequestCard from "./FoodRequestCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import Nodata from "./Nodata";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const FoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/request?requestUserEmail=${user?.email}`).then((res) => {
      setData(res.data);
    });
  }, [user?.email, axiosSecure]);
  if(data.length === 0) return <Nodata/>
  return (
    <div>
      <Helmet>
        <title>Food Hub | Food Request</title>
      </Helmet>
      <div data-aos="fade-right" className="container max-w-6xl p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          My Food Request
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Donar Name</th>
                <th className="p-3">Pickup Location</th>
                <th className="p-3">Expire Date</th>
                <th className="p-3">Request Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((food) => (
                <FoodRequestCard key={food._id} food={food}></FoodRequestCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodRequest;
