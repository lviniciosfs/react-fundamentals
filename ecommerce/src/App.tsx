import { Route, Routes } from 'react-router'
import './App.css'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/tracking/TrackingPage'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  let [cart, setCart] = useState<Array<any>>([]);

  const loadCart = async () => {
    const r = await axios.get('/api/cart-items?expand=product');
    setCart(r.data);
  }
  
  useEffect(() => {
    loadCart();
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>}/>
      <Route path='checkout' element={<CheckoutPage cart={cart}/>}/>
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>
  )
}

export default App
