import React from 'react'

const NavBar = () => {
  return (
    <div>
      {/* <!-- Navigation Bar --> */}
<nav className="bg-blue-500 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold"><a className='text-green-600'>Med</a><a className='text-blue-800'>Opt</a></h1>
        <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
            <li><a href="#" className="hover:text-blue-200">Services</a></li>
            <li><a href="#" className="hover:text-blue-200">Contact</a></li>
        </ul>
    </div>
</nav>
    </div>
  )
}

export default NavBar
