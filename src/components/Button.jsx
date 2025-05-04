import React from 'react'
import PropTypes from 'prop-types'

const Button = ( { text, onClick }) => {
    const handleClick = () => {
        onClick()
    }
    
  return (
    <button onClick={handleClick} className='bg-[#3252DF] text-white font-bold py-2 px-4 rounded-xl hover:bg-[#152C5B] transition duration-300 ease-in-out'>
        {text}
        <span className='ml-2'>→</span>
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

export default Button