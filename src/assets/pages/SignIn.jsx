import React from 'react';
import './SignIn.css'


const signIn = () => {
  return (
    <div className="SignIn-background bg-no-repeat bg-cover mx-auto">
      <div className="flex items-center justify-center h-screen">
    <div className="bg-gray-100 shadow-md rounded px-8 py-8 w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Into <a className='text-green-600'>Med</a><a className='text-blue-800'>Opt</a></h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
            </div>
        </form>
    </div>
</div>
    </div>
  )
}

export default signIn
