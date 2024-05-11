import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    additionalNotes,
    donatorName,
    pickupLocation,
    expiredDateTime,
    quantity,
  } = food;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[26rem]"
            src={foodImage}
            alt=""
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              {foodName}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              Quantity: {quantity} person
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">
              Expired Date: {expiredDateTime}
            </h3>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Request Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
