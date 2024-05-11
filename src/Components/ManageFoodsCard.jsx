import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
AOS.init();

const ManageFoodsCard = ({food,refetch}) => {
    const {_id,foodName,donatorName,donatorEmail,quantity,pickupLocation,} = food
    const handleDelete = (_id) => {
        axios.delete(`http://localhost:3000/foods/${_id}`, _id)
        .then(res => {
            console.log(res.data)
            refetch()
        })
    };
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
        <td className="p-3">
          <p>{foodName}</p>
        </td>
        <td className="p-3">
          <p>{donatorName}</p>
        </td>
        <td className="p-3">
          <p>{donatorEmail}</p>
        </td>
        <td className="p-3">
          <p>{quantity} person</p>
        </td>
        <td className="p-3 ">
          <p>{pickupLocation}</p>
        </td>
       
        <td className="p-3 ">
          <button onClick={() => handleDelete(_id)} className="btn bg-warning text-white">Delete</button>
          
        </td>
        <td className="p-3">
        <Link to={`/update/${_id}`} className="btn bg-success text-white">Update</Link>
        </td>
      </tr>
    );
};

export default ManageFoodsCard;