import Lottie from "lottie-react";
import contactImg from "../../public/dd.json";
import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
const Contact = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="grid mt-24 mb-12 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <Lottie
          className="md:h-[60vh]"
          animationData={contactImg}
          loop={true}
        />
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
       {
        user ?
        <button
        type="submit"
        className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-500 text-white dark:bg-blue-500 dark:text-gray-50"
      >
        Send Message
      </button>
      :
      <button
      type="submit"
      className="disabled w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-500 text-white dark:bg-blue-500 dark:text-gray-50"
    >
      Send Message
    </button>
       }
      </form>
    </div>
  );
};

export default Contact;
