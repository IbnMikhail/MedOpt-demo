import './App.css';
import Dashboard from './assets/pages/Dashboard';
import { Outlet, Link } from 'react-router-dom';

function App() {
  

  return (
    <div>
      
      <Dashboard />
    <div>
      <Outlet />
    </div>
     
    </div>
  )
}

export default App
