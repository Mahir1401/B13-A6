import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Steps from './Components/Steps'
import Transform from './Components/Transform'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelsPromise = getModels()

function App() {

  const [activeTab,setActiveTab] = useState("Products")
  const[carts,setCart] = useState([])

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input onClick={()=>setActiveTab("Products")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked />
        <input onClick={()=>setActiveTab("Cart")} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" />
      </div>

      {activeTab === "Products" && <Models modelsPromise={modelsPromise} carts={carts} setCart={setCart}></Models>}

      {activeTab === "Cart" && <Cart carts={carts}></Cart>}

      <Steps></Steps>

      <Pricing></Pricing>

      <Transform></Transform>

      <Footer></Footer>
    </>
  )
}

export default App
