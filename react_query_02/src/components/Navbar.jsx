import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-12 w-screen p-2 text-indigo-600 '>
        <ul className='flex gap-6 font-bold'>
            <Link to="/">Home</Link>
            <Link to="/rqsuperheroes">RQSuperheroes</Link>
            <Link to="/superheroes">Superheroes</Link>
        </ul>
    </div>
  )
}

export default Navbar