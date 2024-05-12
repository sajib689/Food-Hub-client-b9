


const FoodRequestCard = ({food}) => {
    const {donatorName,pickupLocation,expiredDateTime,requestDate} = food
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{donatorName}</p>
        </td>
        <td className="p-3">
          <p>{pickupLocation}</p>
        </td>
        <td className="p-3">
          <p>{expiredDateTime}</p>
        </td>
        <td className="p-3">
          <p>{requestDate} </p>
        </td>
       
      </tr>
    );
};

export default FoodRequestCard;