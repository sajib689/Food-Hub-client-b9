import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('http://localhost:3000/foods')
        .then((res) =>
            res.json(),
          ),
      })
     let foods = []
     if(data){
        foods = data.sort((a,b) => b.quantity - a.quantity)
     }
    return (
        <div>
        <div className="container mb-24 px-6 py-10 mx-auto text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> Featured Foods</h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p>Embark on a journey of culinary excellence with our exquisite selection <br /> of featured foods, promising a delightful fusion of flavors and culinary artistry.</p>
        </div>
        <div className="max-w-6xl mb-24 px-10 py-10 mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-6">
            {
                foods.map(food => <FeaturedCard key={food._id} food={food}></FeaturedCard>)
            }
        </div>
      </div>
    );
};

export default Featured;