import Lottie from "lottie-react";
import bannerImg from '../../public/banner.json'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div  data-aos="fade-right" className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Food Sharing and Surplus <br /> Reduction{" "}
                <span className="text-blue-500 ">Platform</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Join our platform to share surplus food and reduce waste.
                Connect with others in your community and make a positive
                impact.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div data-aos="zoom-in-up" className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            
             <Lottie className="md:h-[80vh]" animationData={bannerImg} loop={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
