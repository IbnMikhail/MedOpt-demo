import { useState } from 'react';
import './App.css';
import SignIn from './assets/pages/SignIn';
import Dashboard from './assets/pages/Dashboard';
import SignUp from './assets/pages/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
      <SignIn />
      <Dashboard />
      
    </>
  )
}

export default App
