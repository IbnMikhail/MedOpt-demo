import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
      <div className="SignUp-background bg-no-repeat w-full">
        <div className="min-h-screen flex items-center justify-center">
         <div className="bg-gray-100 p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-6">Create a <a className='text-green-600'>Med</a><a className='text-blue-800'>Opt</a> Account</h2>
            <form>
                <div className="mb-4">
                    <label for="fullName" className="block text-gray-700 font-medium">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required
                           className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="mb-4">
                    <label for="email" className="block text-gray-700 font-medium">Email</label>
                    <input type="email" id="email" name="email" required
                           className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="mb-4">
                    <label for="password" className="block text-gray-700 font-medium">Password</label>
                    <input type="password" id="password" name="password" required
                           className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="mb-6">
                    <label for="confirmPassword" className="block text-gray-700 font-medium">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required
                           className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400"/>
                </div>
                <button type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Sign Up
                </button>
            </form>
            <p className="mt-4 text-center">
                Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in here</a>
            </p>
         </div>
    </div>
</div>
    )
}

export default SignUp
