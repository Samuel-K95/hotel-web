import React from 'react'
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import HomeCard from '../components/HomeCard';
import { TbSquareArrowLeftFilled } from "react-icons/tb";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { useState } from 'react';
import { useEffect } from 'react';  




const cardData = [
    {title: "Luxury redefined", content:"Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.", image:"./src/assets/images/card_img1.png"},
    {title: "Leave your worries in the sand", content:"We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.", image:"./src/assets/images/card_img2.png"},
]


const testimonials = [
    {name: "John Doe", Review: "Calm, Serene, Retro – What a way to relax and enjoy", place: "UK"},
    {name: "Jane Smith", Review: "The best hotel experience I've ever had!", place: "USA"},
    {name: "Alice Johnson", Review: "A hidden gem with stunning views and top-notch service!", place: "Canada"},
    {name: "Bob Brown", Review: "A perfect getaway for couples and families alike!", place: "Australia"},
]

const HomePage = () => {
    const navigate = useNavigate()
    let index = 0;
    const [data, setData] = useState(testimonials[index])

    const handleleftclick = () =>{
        index -= 1
        if (index < 0){
            index = testimonials.length - 1
        }
        setData(testimonials[index])
    }

    const handlerightclick = () =>{
        index += 1
        if (index > testimonials.length - 1){
            index = 0
        }

        setData(testimonials[index])
    }

  return (
    <div className='flex flex-col gap-10'>
        <section className='w-full flex flex-col lg:flex-row justify-center items-center px-4 py-8'>
        {/* Left Text Section */}
            <div className='w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0'>
                <div className='w-full max-w-md'>
                <p className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#152C5B]'>Welcome To</p>
                <p className='font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#152C5B]'>Luxury Hotels</p>
                <p className='text-sm sm:text-base text-gray-400 my-4'>
                    We provide what you need to enjoy your holiday with family. Time to make another memorable moment.
                </p>
                <Button
                    className='w-32 sm:w-40'
                    text='Explore'
                    onClick={() => navigate('/rooms')}
                />
                </div>
            </div>

            {/* Right Image Section */}
            <div className='w-full lg:w-1/2 flex items-end justify-center'>
                <div className='w-[90%] sm:w-[80%] h-[250px] sm:h-[300px] lg:h-[60vh] overflow-hidden rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-[100px] lg:rounded-tl-[200px]'>
                <img
                    className="object-cover w-full h-full"
                    src="./src/assets/images/home-hero.png"
                    alt="home hero"
                />
                </div>
            </div>
        </section>

        <section>
            <div className='w-full flex flex-col items-center justify-center text-sm md:text-md lg:text-xl'>
                All our room types are including complementary breakfast!
                <div className='w-[80%] flex flex-col gap-10 mt-8'>
                    {cardData.map((data, index) => (
                        <HomeCard key={index} title={data.title} content={data.content} image={data.image} index={index} />
                    ))}
                </div>
            </div>
        </section>


        <section>
            <div className='w-full flex items-center text-center justify-center text-sm md:text-md lg:text-xl'>
                <div className='w-[50%]  flex flex-col gap-10'>
                    <p className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#152C5B]'>Testimonials</p>
                    <div className='w-full flex flex-col gap-5'>
                        <p>
                            "{data.Review}"
                        </p>
                        <p>{data.name}, {data.place}</p>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <TbSquareArrowLeftFilled onClick={handleleftclick} className='text-4xl text-[#3252DF] cursor-pointer' />
                            <TbSquareArrowRightFilled onClick={handlerightclick} className='text-4xl text-[#3252DF] cursor-pointer ' />
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    </div>
  )
}

export default HomePage;
