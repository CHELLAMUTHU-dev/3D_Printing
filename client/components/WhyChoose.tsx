import React from 'react'

const WhyChoose = () => {
  return (
    <div className=" bg-white-100 py-10 pb-30">
      <h1 className="text-4xl font-bold mt-5 mb-13 px-10 text-gray-800">Why Choose Us</h1>
      <div className="  sm:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-20 justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] max-w-[280px]">
            <img src="/quality.png" alt="Quality" className="w-15 h-15 rounded-lg mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-center">High Quality</h3>
            <p className="text-center mt-2">Our 3D printing services use the latest technology to ensure high-quality results for every project.</p>
        </div>
        <div className='hidden md:inline-block'>    
            <img src="/greater-than.png" alt="process" className="w-20 h-25 rounded-lg mx-auto" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] max-w-[280px]">
            <img src="/thunderbolt.png" alt="Speed" className="w-15 h-15 rounded-lg mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-center">Fast Turnaround</h3>
            <p className="text-center mt-2">We understand the importance of time, which is why we offer fast turnaround times without compromising on quality.</p>
        </div>
        <div className='hidden md:block'>
            <img src="/greater-than.png" alt="process" className="w-20 h-25 rounded-lg mx-auto" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] max-w-[280px]">
            <img src="/support.png" alt="Support" className="w-15 h-15 rounded-lg mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-center">Excellent Support</h3>
            <p className="text-center mt-2">Our dedicated support team is here to assist you every step of the way, ensuring a smooth and successful 3D printing experience.</p>
        </div>
        <div className='hidden md:block'>
            <img src="/greater-than.png" alt="process" className="w-20 h-25 rounded-lg mx-auto" />
        </div>
         <div className="bg-white p-6 rounded-lg shadow-md min-w-[250px] max-w-[280px]">
            <img src="/clock.png" alt="Instant Quoting Engine" className="w-15 h-15 rounded-lg mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-center">Instant Quoting Engine</h3>
            <p className="text-center mt-2">Our instant quoting engine provides real-time pricing and delivery estimates, making it easy to get a quote for your 3D printing project.</p>
            </div>   
      </div>
    </div>
  )
}

export default WhyChoose
