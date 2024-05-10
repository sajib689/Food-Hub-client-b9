import { useContext } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
AOS.init();
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handlePostSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const food_image = form.food_image.value 
    const food_name = form.food_name.value
    const quantity = form.quantity.value
    const pickup_location = form.pickup_location.value
    const expired_date_time = form.expired_date.value
    const additional_notes = form.additional_notes.value 
    const donatorImage = user?.photoURL
    const donatorName = user?.displayName
    const donatorEmail = user?.email
    const foods = {
        donatorImage,
        donatorName,
        donatorEmail,
        food_image,
        food_name,
        quantity,
        pickup_location,
        expired_date_time,
        additional_notes,
        
    }
    axios.post('http://localhost:3000/foods', foods)
    .then( res => {
        console.log(res.data)
    })
  };
  // bg-white dark:bg-gray-800
  return (
    <section
      data-aos="fade-down-right"
      className="max-w-6xl mx-auto p-6 dark:bg-gray-100 dark:text-gray-900"
    >
      <form onSubmit={handlePostSpot} className="container mx-auto space-y-8">
        <fieldset className="p-6 rounded-lg shadow-md">
          <legend className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Food Information
          </legend>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="space-y-2">
              <label
                htmlFor="food_image"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Food Image
              </label>
              <input
                id="food_image"
                name="food_image"
                type="text"
                placeholder="Food Image URL"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="food_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Food Name
              </label>
              <input
                id="food_name"
                name="food_name"
                type="text"
                placeholder="Food Name"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                placeholder="Quantity"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="pickup_location"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Pickup Location
              </label>
              <input
                id="pickup_location"
                name="pickup_location"
                type="text"
                placeholder="Pickup Location"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="expired_date_time"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Expired Date and Time
              </label>
              <input
                id="expired_date_time"
                name="expired_date_time"
                type="datetime-local"
                className="w-full h-10 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="additional_notes"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Additional Notes
              </label>
              <textarea
                id="additional_notes"
                name="additional_notes"
                placeholder="Additional Notes"
                className="w-full h-20 rounded-md border-gray-300 focus:border-violet-600 focus:ring focus:ring-violet-600 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-700"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-600 focus:ring-opacity-50"
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