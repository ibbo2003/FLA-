import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList';
import Counter from './components/Counter'
import Greet from './components/Greet'
import ToggleSwitch from './components/ToggleSwitch';
import UserProfile from './components/UserProfile';
import MovieCard from './components/MovieCard';
import off from './assets/off.jpg'
import MovieCardList from './components/MovieCardList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieCardList/>
    </>
  )
}

export default App;
