import React from 'react'
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import ContactItem from '../components/ContactItem'

// Zod Schema
const contactSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  mail: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10'>
        { /* backgroud should be actual integrated map */}
      <section className='w-[70%] flex items-center text-center h-[50vh] justify-center text-sm md:text-md lg:text-xl m-10 rounded-3xl p-10' style={{ backgroundColor: 'rgba(50, 82, 223, 0.2)' }}>
        <p className='font-bold text-2xl sm:text-3xl lg:text-5xl text-[#152C5B]'>Contact-Us</p>
      </section>

      <section className='w-[70%] flex flex-col lg:flex-row gap-10'>
        {/* Contact Details */}
        <div className='lg:w-1/2 flex flex-col gap-10'>
          <p className='font-bold text-3xl sm:text-4xl text-[#152C5B]'>Get In Touch</p>
          <p className='text-sm sm:text-base text-gray-400 w-[90%]'>
            We're here to help make your stay perfect. Reach out with any questions about reservations, special requests, or to learn more about our amenities.
          </p>
          <div className='w-full flex flex-col gap-10 mt-10'>
            <ContactItem icon={<MapPin className="h-10 w-10 text-[#3252DF]" />} title={"Location"} content={"123 Oceanview Drive, Coastal Haven, CH 10001"} />
            <ContactItem icon={<Phone className="h-10 w-10 text-[#3252DF]" />} title={"Phone"} content={"+1 (555) 123-4567"} />
            <ContactItem icon={<Mail className="h-10 w-10 text-[#3252DF]" />} title={"Email"} content={"reservations@luxuryhotels.com"} />
            <ContactItem icon={<Clock className="h-10 w-10 text-[#3252DF]" />} title={"Front Desk Hours"} content={"24 hours, 7 days a week"} />
          </div>
          { /* Intagrate map */}
          <p className='font-bold text-3xl sm:text-4xl text-[#152C5B]'>Find Us</p>
        </div>

        {/* Form */}
        <div className='lg:w-1/2 flex items-center justify-center border-2 rounded-3xl'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] flex flex-col gap-5 py-10'>
            <p className='font-bold text-3xl sm:text-4xl text-[#152C5B]'>Send a Message</p>

            <input
              placeholder='Your Name'
              className='border-2 border-gray-300 rounded-lg p-2'
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className='text-red-500 text-sm'>{errors.firstName.message}</p>
            )}

            <input
              type="email"
              placeholder='Your Email'
              className='border-2 border-gray-300 rounded-lg p-2'
              {...register("mail")}
            />
            {errors.mail && (
              <p className='text-red-500 text-sm'>{errors.mail.message}</p>
            )}

            <textarea
              rows={10}
              placeholder='Your Message'
              className='border-2 border-gray-300 rounded-lg p-2'
              {...register("message")}
            />
            {errors.message && (
              <p className='text-red-500 text-sm'>{errors.message.message}</p>
            )}

            <button type='submit' className='bg-[#3252DF] text-white font-bold py-2 px-4 rounded-lg'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
