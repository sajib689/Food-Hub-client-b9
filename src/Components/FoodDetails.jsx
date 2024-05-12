import { useLoaderData } from "react-router-dom";
import Modal from "react-modal";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const food = useLoaderData();
  const {user} = useContext(AuthContext)
  const {
    _id,
    foodImage,
    foodName,
    additionalNotes,
    donatorName,
    pickupLocation,
    donatorEmail,
    expiredDateTime,
    quantity,
  } = food;
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString(undefined, options);
  const handleFoodRequest = e => {
    e.preventDefault()
    const form = e.target
    const requestDate = form.requestDate.value 
    const foodName = form.foodName.value
    const requestUserEmail = user?.email
    const pickupLocation = form.pickupLocation.value
    const expiredDateTime = form.expiredDateTime.value
    const donatorName = form.donatorName.value
    const donatorEmail = form.donatorEmail.value
    if(requestUserEmail === donatorEmail) return alert('You have no permisson for this action')
    const request = {
      foodName,
      donatorName,
      donatorEmail,
      requestUserEmail,
      requestDate,
      pickupLocation,
      expiredDateTime
    }
    axios.post('http://localhost:3000/request', request)
    .then( res => {
      if(res.data) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Food Request Send",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
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
              <button
                onClick={openModal}
                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Request Food
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="relative h-[80vh] flex flex-col items-center max-w-lg gap-4 p-6 rounded-md  sm:py-8 sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                    </svg>
                  </button>
                  <img className="rounded" src={foodImage} alt="" />
                  <form onSubmit={handleFoodRequest}>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Food Name:
                      <input name="foodName" value={foodName} type="text" className="grow" />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Food ID:
                      <input value={_id} type="text" className="grow" />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Donator Email:
                      <input
                      name="donatorEmail"
                        value={donatorEmail}
                        type="text"
                        className="grow"
                      />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Donator Name:
                      <input name="donatorName" value={donatorName} type="text" className="grow" />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Request Date:
                      <input name="requestDate" value={today} type="text" className="grow" />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Pickup Location:
                      <input
                      name="pickupLocation"
                        value={pickupLocation}
                        type="text"
                        className="grow"
                      />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Expire Date:
                      <input
                      name="expiredDateTime"
                        value={expiredDateTime}
                        type="text"
                        className="grow"
                      />
                    </label>
                    <label className="mb-2 input input-bordered flex items-center gap-2">
                      Additional Notes:
                      <input
                        defaultValue={additionalNotes}
                        type="text"
                        className="grow"
                      />
                    </label>
                    <button className="w-full mt-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Request Now
                  </button>
                  </form>

                 
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
