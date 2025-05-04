import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useNavigate } from 'react-router'

const HomeCard = ({ title, content, image, index }) => {
  const navigate = useNavigate()

  return (
    <div className='w-full flex flex-col lg:flex-row gap-6 items-center justify-center px-4 py-6'>
      {index % 2 !== 0 ? (
        // Image right, Text left
        <>
          {/* Text Section */}
          <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <div className='w-full max-w-md flex flex-col justify-center items-start border-l-2 border-[#152C5B] pl-6 sm:pl-10'>
              <p className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#152C5B]'>{title}</p>
              <p className='text-sm sm:text-base text-gray-400 my-4'>{content}</p>
              <Button
                className='w-24'
                text="Explore"
                onClick={() => navigate('/rooms')}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className='w-full lg:w-1/2'>
            <img
              className='w-full h-auto object-cover shadow-md'
              src={image}
              alt="card"
            />
          </div>
        </>
      ) : (
        <>
          {/* Image Section */}
          <div className='w-full lg:w-1/2'>
            <img
              className='w-full h-auto object-cover shadow-md'
              src={image}
              alt="card"
            />
          </div>

          {/* Text Section */}
          <div className='w-full lg:w-1/2 flex justify-center items-center'>
            <div className='w-full max-w-md flex flex-col justify-center items-start border-r-2 border-[#152C5B] pr-6 sm:pl-10'>
              <p className='font-bold text-xl sm:text-2xl lg:text-3xl text-[#152C5B]'>{title}</p>
              <p className='text-sm sm:text-base text-gray-400 my-4'>{content}</p>
              <Button
                className='w-24'
                text="Explore"
                onClick={() => navigate('/rooms')}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default HomeCard
