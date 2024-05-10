import { useContext } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";
AOS.init();
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handlePostSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourist_spot_name = form.tourist_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const image = form.image.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const email = user?.email;
    const name = user?.displayName;
    const spots = {
      email,
      name,
      image,
      tourist_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
    };
    fetch("https://assignment-10-mocha.vercel.app/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spots),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Spot Add Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  // bg-white dark:bg-gray-800
  return (
    <section
      data-aos="fade-down-right"
      className="p-6 dark:bg-gray-100 dark:text-gray-900"
    >
      <form onSubmit={handlePostSpot} className="container mx-auto space-y-8">
        <fieldset className="p-6 rounded-lg shadow-md ">
          <legend className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Tourist Spot Information
          </legend>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label
                htmlFor="tourist_spot_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Tourist Spot Name
              </label>
              <input
                id="tourist_spot_name"
                name="tourist_spot_name"
                type="text"
                placeholder="Tourist Spot Name"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="country_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Country
              </label>
              <select name="country_name" className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Country
                </option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Thailand'>Thailand</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Malaysia'>Malaysia</option>
                <option value='Vietnam'>Vietnam</option>
                <option value='Cambodia'>Cambodia</option>
              </select>
              {/* <input
                id="country_name"
                name="country_name"
                type="text"
                placeholder="Country"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              /> */}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Location"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="short_description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Short Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                placeholder="Short Description"
                className="w-full h-20 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              ></textarea>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="average_cost"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Average Cost
              </label>
              <input
                id="average_cost"
                name="average_cost"
                type="text"
                placeholder="Average Cost"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="seasonality"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Seasonality
              </label>
              <input
                id="seasonality"
                name="seasonality"
                type="text"
                placeholder="Seasonality"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="travel_time"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Travel Time
              </label>
              <input
                id="travel_time"
                name="travel_time"
                type="text"
                placeholder="Travel Time"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="total_visitors_per_year"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Total Visitors Per Year
              </label>
              <input
                id="total_visitors_per_year"
                name="total_visitors_per_year"
                type="text"
                placeholder="Total Visitors Per Year"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                name="image"
                type="text"
                placeholder="Photo URL"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-[#fc5a34] text-white rounded-md hover:bg-[#fc5a34] focus:outline-none focus:ring focus:ring-violet-600 focus:ring-opacity-50"
            >
              Add
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddFood;