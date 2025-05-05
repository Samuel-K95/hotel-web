import React from 'react'
import { useParams, useNavigate } from 'react-router'
import Button from '../components/Button'

const data = {
    gym: {
        image1: "../src/assets/images/gym.png",
        image2: "../src/assets/images/gym2.png",
        image3: "../src/assets/images/gym3.png",
        about_the_place: "At Luxury Hotels, we understand that wellness is a key part of every guest's experience. Our state-of-the-art fitness center is designed to meet the needs of both casual exercisers and dedicated fitness enthusiasts. Equipped with modern cardio machines, free weights, resistance training equipment, and yoga mats, our gym offers a clean, spacious, and energizing environment.\nWe’ve gone beyond just equipment—our gym space is enhanced with natural lighting, soothing music, and climate control to ensure maximum comfort. Guests also have access to personal training sessions, stretching areas, and complimentary water and towels. Whether you prefer a morning run on the treadmill or a quiet evening yoga session, our facility is open 24/7 to accommodate your schedule and support your well-being throughout your stay.",
        visit: "Come and enjoy the best gym experience in town!"
    },
    pool: {
        image1: "../src/assets/images/Pool.png",
        image2: "../src/assets/images/pool2.png",
        image3: "../src/assets/images/pool3.png",
        about_the_place: "Our luxurious pool area offers a peaceful escape for guests looking to unwind and soak up the sun. Whether you're swimming laps or lounging by the pool with a drink in hand, our sparkling water and elegant setting will make your stay unforgettable.\nThe area also includes comfortable sunbeds, poolside service, and a kids' splash zone to ensure fun for the whole family.\nOur poolside bar offers a curated menu of refreshing beverages and light snacks, and the tranquil atmosphere is perfect for relaxing after a busy day. We also host poolside yoga sessions and aqua fitness classes to add a unique twist to your wellness routine.",
        visit: "Relax, refresh, and make a splash!"
    },
    restaurant: {
        image1: "../src/assets/images/restaurant.png",
        image2: "../src/assets/images/restaurant2.png",
        image3: "../src/assets/images/restaurant3.png",
        about_the_place: "Delight in world-class cuisine at our in-house restaurant. From gourmet breakfasts to elegant dinners, our chefs craft every dish with care and creativity using the freshest local ingredients.\nThe elegant dining area and personalized service create a warm, welcoming atmosphere for romantic dinners, business meals, or family gatherings.\nWe offer an extensive wine list, vegetarian and vegan options, and themed dining nights that celebrate global cuisines. Whether you're in the mood for a hearty brunch or a candlelit dinner, our restaurant is the perfect setting to savor memorable meals.",
        visit: "Taste the luxury on your plate!"
    }
}

const FacilityDetails = () => {
    let { id } = useParams()
    let curr_data = data[id] || {}

    let navigate = useNavigate()
    const handleClick = () => {
        navigate('/rooms')
    }

    return (
        <div>
            <section className='w-full'>
                <div className='w-full items-start m-5'>
                    <div className='w-full sm:w-1/2 flex flex-col sm:flex-row items-start sm:items-center justify-between pl-4 sm:pl-10 mb-10 sm:mb-20'>
                        <p className='text-[#152C5B] font-semibold'><span className='text-gray-400 font-normal'> Facilities / </span> Facility Details </p>
                        <div className='font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#152C5B]'>{id[0].toUpperCase() + id.slice(1)} Details</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-center gap-4 px-4 h-auto lg:h-[400px]'>
                        {/* Left Image */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center h-[250px] sm:h-[300px] lg:h-full">
                            <img
                                src={curr_data.image1}
                                alt={id}
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </div>

                        {/* Right Two Images Stacked */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-4 h-[250px] sm:h-[300px] lg:h-full">
                            <img
                                src={curr_data.image2}
                                alt={id}
                                className="w-full h-1/2 rounded-2xl object-cover"
                            />
                            <img
                                src={curr_data.image3}
                                alt={id}
                                className="w-full h-1/2 rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                    <div className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row items-center justify-center mt-10 gap-8 px-4'>
                        <div className='w-full lg:w-1/2'>
                            <p className='font-bold text-md sm:text-lg lg:text-xl text-[#152C5B] px-2'>About This Place</p>
                            {curr_data.about_the_place?.split('\n').map((para, idx) => (
                                <p key={idx} className='text-sm sm:text-base text-gray-400 my-2 px-2'>{para}</p>
                            ))}
                        </div>

                        <div className='w-full lg:w-2/5 h-auto flex flex-col items-center justify-center mt-6 lg:mt-10 border p-6 rounded-lg shadow'>
                            <p className='font-semibold text-[#152C5B]'>Start Booking</p>
                            <div><i>"{curr_data.visit}"</i></div>
                            <p className='text-sm sm:text-base text-gray-400 my-4 text-center'>
                                Explore our rooms and find the perfect one for you! We have a variety of rooms to suit your needs, from cozy singles to spacious suites.
                            </p>
                            <Button text={"Explore Rooms"} onClick={handleClick} key={1} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FacilityDetails;
