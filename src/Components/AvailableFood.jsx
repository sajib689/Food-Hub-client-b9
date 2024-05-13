import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";
import Loader from './Loader';
import useAxiosSecure from "../Hooks/useAxiosSecure";


const AvailableFood = () => {
  const axiosSecure = useAxiosSecure()
    const { isPending, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
          try{
            const res = await axiosSecure.get(`/foods`)
            return res.data
          } catch (err){
            if(err) {
              console.log(err)
            }
          }
        }
      })
      
      if (isPending) return <Loader/>
    

    const foodsFilter = data.filter(food => food.status === 'available');
  
  
    return (
        <div>
        <div className="container max-w-6xl mb-3  px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our  Available Foods</h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

        </div>
        <div className="max-w-6xl mb-24 px-10 py-10 mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-6">
            {
                foodsFilter.map(food => <FeaturedCard key={food._id} food={food}></FeaturedCard>)
            }
        </div>
      </div>
    );
};

export default AvailableFood;