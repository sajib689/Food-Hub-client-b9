

const Team = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our <span className="text-blue-500">Team</span></h1>
    
            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                Welcome to our amazing team dedicated to reducing food waste and promoting food sharing!
            </p>
    
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row">
                        <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
    
                        <div className="mt-4 sm:mx-4 sm:mt-0">
                            <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">[Executive Name]</h1>
    
                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">[Position]</p>
                        </div>
                    </div>
    
                    <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">[Brief Description]</p>
    
                    <div className="flex mt-4 -mx-2">
                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                
                            </svg>
                        </a>
    
                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                
                            </svg>
                        </a>
    
                        <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                               
                            </svg>
                        </a>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    
    );
};

export default Team;