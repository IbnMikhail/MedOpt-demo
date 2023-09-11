import React from 'react';
import NavBar from '../components/Dashboard components/NavBar';
import Welcome from '../components/Dashboard components/Welcome';
import Features from '../components/Dashboard components/Features';
import Footer from '../components/Dashboard components/Footer';

const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-300 font-sans">

      <NavBar />
      <Welcome />
      <Features />
      <Footer />
</div>
    </div>
  )
}

export default Dashboard
