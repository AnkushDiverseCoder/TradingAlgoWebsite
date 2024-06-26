
const About = () => {
    return (
        <section >
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2 ">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome Components</h1>
                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Copy &amp; paste components</h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <video className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-2xl" muted controls autoPlay>
                            <source src="About.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <hr className="my-12 border-gray-200 dark:border-gray-700" />

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9" />
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M3 18v-6a9 9 0 0118 0v6" />
                                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                    <p className="leading-relaxed">Files</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                                    <p className="leading-relaxed">Places</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </section>

    )
}

export default About