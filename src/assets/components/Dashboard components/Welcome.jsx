import { Link } from "react-router-dom"

const welcome = () => {
  return (
    <div>
      {/* <!-- Welcome Section --> */}
      <section className="bg-gray-900 text-white py-20 ">
        <div className="relative">
                    <video autoplay loop muted playinline className='absolute inset-0 object-cover w-full h-full '><source src="https://pikbest.com/video/4k-style-blue-particle-floating-flashing-video-stage-background_3065413.html" type="video/mp4"/></video> 
          <div className="container relative mx-auto text-center">
              <h2 className="text-4xl font-semibold mb-4">Welcome to <a className='text-green-600'>Med</a><a className='text-blue-800'>Opt</a></h2>
              <p className="text-lg mb-8">Your Medical Optimizer for Affordable and Effective Healthcare.</p>
              <a href={`/SignUp/1`} className="bg-white text-blue-900 hover:bg-blue-700 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">Get Started</a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default welcome
