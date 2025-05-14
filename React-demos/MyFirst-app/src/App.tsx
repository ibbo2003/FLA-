import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList';
import Counter from './components/Counter'
import Greet from './components/Greet'
import ToggleSwitch from './components/ToggleSwitch';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile name='Shadab' age={22} qualifications={['alimiyat','10th','12th']} />
      <UserProfile name='Shadab' age={22} qualifications={['alimiyat','10th','12th']} />
      <UserProfile name='Shadab' age={22} qualifications={['alimiyat','10th','12th']} />


    </>
  )
}

export default App;
