import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ManageFoodsCard from "./ManageFoodsCard";


const ManageFoods = () => {
    const {user} = useContext(AuthContext)
    const { isPending, data,refetch } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
          fetch(`http://localhost:3000/foods?email=${user?.email}`)
        .then((res) =>
            res.json(),
          ),
      }
    )
    if (isPending) {
        return <Loader/>
      }
    console.log(data)
   
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">My List</h2>
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
              <th className="p-3">Country Name</th>
              <th className="p-3">Tourist Spot Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Travel Time</th>
              <th className="p-3">Total Visitors</th>
              <th className="p-3">Average Cost</th>
              <th className="p-3">Delete</th>
              <th className="p-3">Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food) => (
              <ManageFoodsCard
                key={food._id}
                food={food}
                refetch={refetch}
              ></ManageFoodsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageFoods;