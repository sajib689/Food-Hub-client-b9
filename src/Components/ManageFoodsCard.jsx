import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import Swal from "sweetalert2";
AOS.init();

const ManageFoodsCard = ({food,refetch}) => {
    const {_id,foodName,donatorName,donatorEmail,quantity,pickupLocation,} = food
    const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your food has been deleted.",
            icon: "success"
          }) 
          axios.delete(`https://assignment-eleven-servertwo-sajib689-sajib689s-projects.vercel.app/foods/${_id}`, _id)
          .then(res => {
              
              refetch()
          })
        }
       
      });
       
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
        <Link to={`/updateFood/${_id}`} className="btn bg-success text-white">Update</Link>
        </td>
      </tr>
    );
};

export default ManageFoodsCard;