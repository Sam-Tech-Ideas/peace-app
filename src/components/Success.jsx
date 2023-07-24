import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="flex justify-center items-center flex-col py-24">
        <h1 className="text-2xl font-bold text-center">
            Thank you for your message. We will get back to you soon.
        </h1>

        <p className="text-xl">
            <Link to="/">Go back to the homepage </Link>
        </p>
    </div>
  )
}

export default Success