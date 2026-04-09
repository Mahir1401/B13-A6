import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Steps from './Components/Steps'
import Transform from './Components/Transform'

const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}

const modelsPromise = getModels()

function App() {

  return (
    <>
    <Navbar></Navbar>

    <Banner></Banner>

    <Models modelsPromise= {modelsPromise}></Models>

    <Steps></Steps>

    <Pricing></Pricing>

    <Transform></Transform>

    <Footer></Footer>
    </>
  )
}

export default App
