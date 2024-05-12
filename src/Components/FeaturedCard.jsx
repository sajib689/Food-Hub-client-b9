import { Link } from "react-router-dom";

const FeaturedCard = ({ food }) => {
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
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {foodName}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {additionalNotes}
        </p>
      </div>
      
      <img
        className="object-cover w-full h-48 mt-2"
        src={foodImage}
        alt={foodImage}
      />
      <div className="mb-3 mt-2">
        <h1 className="font-bold m-1">Quantity: {quantity}</h1>
        <h1 className="font-[400] m-1">Location: {pickupLocation}</h1>
        <h1 className="font-[400] m-1">Expired Date: {expiredDateTime}</h1>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-blue-600">
        <div className="avatar">
          <div className="w-12">
            <img className="rounded-full" src={donatorImage} />
          </div>
          <h1 className="text-white">{donatorName}</h1>
        </div>
        <Link to={`/foodDetails/${_id}`} className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none hover:text-black">
          View Details
        </Link>
      </div>
      
    </div>
  );
};

export default FeaturedCard;
