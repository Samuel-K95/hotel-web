import React from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({icon, title, content}) => {
  return (
    <div className='w-full flex items-center justify-start gap-5'>
        <div className='w-14 h-14 rounded-full flex items-center justify-center p-4' style={{ backgroundColor: 'rgba(50, 82, 223, 0.2)' }}>
            {icon}
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-[#152C5B] font-semibold'>{title}</p>
            <p className='text-gray-400'>{content}</p>
        </div>
    </div>
  )
}

ContactItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default ContactItem