import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Component/Shop/Shop';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  const increaseCart =(product)=>{
    setCart([...cart, product])
    console.log(setCart)
  }
  return (
    <div  className='container bg-primary'>
      <Header></Header>
      <Shop increaseCart={increaseCart}></Shop>
    </div>
  );
}

export default App;
