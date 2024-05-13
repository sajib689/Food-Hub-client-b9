import { useQuery } from "@tanstack/react-query";
import FeaturedCard from "./FeaturedCard";
import Loader from "./Loader";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { RiLayoutGridFill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import Nodata from "./Nodata";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const AvailableFood = () => {
  const axiosSecure = useAxiosSecure();
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [layout, setLayout] = useState(3);
  const [storeFood, setStoreFood] = useState([]);
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

  useEffect(() => {
    if (data) {
      const foodsFilter = data.filter((food) => food.status === "available");
      setStoreFood(foodsFilter);
    }
  }, [data]);

  const handleSearch = async () => {
    try {
      const res = await axiosSecure.get(`/foods?foodName=${query}`);
      setSearchResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeLayout = () => {
    setLayout(2);
  };

  const sortData = (data, d) => {
    const sortDate = [...data].sort((a, b) => {
      const dateA = new Date(a[d]);
      const dateB = new Date(b[d]);
      return dateA - dateB;
    });
    return sortDate;
  };

  const handleSortDate = (e) => {
    const selectData = e.target.value;
    const foodSort = sortData(storeFood, selectData);
    setStoreFood(foodSort);
  };

  if (isPending) return <Loader />;

  if (!data || storeFood.length === 0) return <Nodata />;

  return (
    <div>
      <Helmet>
        <title>Food Hub | Available Food</title>
      </Helmet>
      <div className="flex flex-col lg:flex md:flex justify-between items-center ">
        <div
         data-aos="fade-down-right"
          className="ms-[110px] container max-w-6xl mb-3  px-6 py-10 mx-auto"
        >
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our Available Foods
          </h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          {/* search filed add */}
          <div className="w-[300px] mt-4">
            <label className="  flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="grow focus:outline-none"
                placeholder="Search"
              />
              <button
                onClick={handleSearch}
                className="btn bg-blue-500 text-white hover:bg-blue-600"
              >
                Search
              </button>
            </label>
          </div>
          {/* end searchFiled */}
        </div>
        <div className="me-24 flex justify-center items-center">
          <div className="me-3">
            <select
              onChange={handleSortDate}
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select One
              </option>
              <option value="expiredDateTime"> Food Expire Date </option>
            </select>
          </div>
          <div>
            <button
              onClick={handleChangeLayout}
              className="text-[2rem] hidden lg:block md:block"
            >
              <RiLayoutGridFill />
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`max-w-6xl mb-24 px-10 py-10 mx-auto grid grid-cols lg:grid-cols-${layout} md:grid-cols-${layout} gap-6`}
      >
        {searchResult.length > 0
          ? searchResult.map((food) => (
              <FeaturedCard key={food._id} food={food}></FeaturedCard>
            ))
          : storeFood.map((food) => (
              <FeaturedCard key={food._id} food={food}></FeaturedCard>
            ))}
      </div>
    </div>
  );
};

export default AvailableFood;
