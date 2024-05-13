import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { motion } from "framer-motion";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Featured = () => {
  const axiosSecure = useAxiosSecure();
  const { isPending, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/foods`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  if (isPending) {
    return <Loader />;
  }

  let foods = [];
  if (data) {
    foods = data.sort((a, b) => b.quantity - a.quantity);
  }

  return (
    <div>
      <div
        data-aos="fade-up-right"
        className="container mb-12  px-6 py-10 mx-auto text-center"
      >
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> Featured Foods
        </h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
        <p>
          Embark on a journey of culinary excellence with our exquisite
          selection <br /> of featured foods, promising a delightful fusion of
          flavors and culinary artistry.
        </p>
      </div>
      <div
        data-aos="fade-up-right"
        className="max-w-6xl px-10 py-10 mx-auto grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-6"
      >
        {foods.slice(0, 6).map((food) => (
          <motion.div
            key={food._id}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <FeaturedCard food={food} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center mb-24 ">
      <Link to='/allfood' className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Show All
      </Link>
      </div>
    </div>
  );
};

export default Featured;
