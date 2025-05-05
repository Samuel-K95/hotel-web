import React from 'react';
import HomeCard from '../components/HomeCard';


const facilityData = [
    {
      title: "Stay Fit, Anytime",
      content: "Our state-of-the-art gym is equipped with the latest fitness machines and free weights. Whether you're keeping up with your routine or starting fresh, we provide the perfect environment to stay active during your stay.",
      image: "./src/assets/images/gym.png",
      nav_destination: "/facilities/gym"
    },
    {
        title: "Unwind at the Pool",
        content: "Step into a sanctuary of calm and relaxation. Our pool offers a variety of treatments including massages, facials, and hydrotherapy sessions to help you refresh both mind and body.",
        image: "./src/assets/images/Pool.png",
        nav_destination: "/facilities/pool"
    },
    {
      title: "Dine in Style",
      content: "Savor gourmet meals prepared by world-class chefs at our in-house restaurant. From local flavors to international cuisine, every dish is a culinary experience waiting to be enjoyed.",
      image: "./src/assets/images/restaurant.png",
      nav_destination: "/facilities/restaurant"
    }
  ];
  

const Facilities = () => {
    
  return (
    <div className='w-full flex flex-col'>
        <section className='flex flex-col lg:flex-row items-center justify-center px-4 py-10'>
        {/* Text Section */}
        <div className='w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0'>
            <div className='w-full max-w-md'>
            <p className='font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#152C5B]'>
                Everything You Need for the Perfect Stay
            </p>
            <p className='text-sm sm:text-base text-gray-400 my-4'>
                Whether you're here for relaxation or adventure, our hotel offers a full range of facilities to make your experience seamless. Enjoy our modern fitness center, serene spa, rooftop lounge, high-speed Wi-Fi, and 24/7 concierge service—all designed to keep you comfortable, connected, and cared for throughout your stay.
            </p>
            </div>
        </div>

        {/* Image Circle */}
        <div className='w-72 h-72 sm:w-96 sm:h-96 flex flex-col overflow-hidden rounded-full shadow-lg'>
            <div className='flex-1 overflow-hidden'>
            <img
                src='src/assets/images/gym.png'
                alt='gym'
                className='w-full h-full object-cover rounded-t-full'
            />
            </div>
            <div className='flex-1 overflow-hidden'>
            <img
                src='src/assets/images/restaurant.png'
                alt='restaurant'
                className='w-full h-full object-cover rounded-b-full'
            />
            </div>
        </div>
        </section>

        <section>
            <div className='w-full flex flex-col items-center justify-center py-10 font-bold text-[#152C5B]'>
                Our Facilities Include
                <div className='w-[80%] flex flex-col gap-10 mt-8'>
                    {facilityData.map((data, index) => (
                        <HomeCard key={index} title={data.title} content={data.content} image={data.image} index={index} nav_destination={data.nav_destination} />
                    ))}
                </div>
            </div>

        </section>
    </div>
  );
};

export default Facilities;
