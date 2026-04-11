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
import ProductTitle from './Components/ProductTitle'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelsPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCart] = useState([])

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <ProductTitle></ProductTitle>

      <div className="tabs tabs-box justify-center bg-transparent">
        <input onClick={() => setActiveTab("Products")} aria-label="Products" type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "Products"
            ? "text-white bg-gradient-to-r from-purple-700 to-purple-500"
            : "text-black bg-white"
          }`}

          aria-label="Products" defaultChecked />
        <input onClick={() => setActiveTab("Cart")} aria-label={`Cart(${carts.length})`} type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab === "Cart"
            ? "text-white bg-gradient-to-r from-purple-700 to-purple-500"
            : "text-black bg-white"
        }`} />
      </div>

      {activeTab === "Products" && <Models modelsPromise={modelsPromise} carts={carts} setCart={setCart}></Models>}

      {activeTab === "Cart" && <Cart carts={carts} setCart={setCart}></Cart>}

      <Steps></Steps>

      <Pricing></Pricing>

      <Transform></Transform>

      <Footer></Footer>
    </>
  )
}

export default App
