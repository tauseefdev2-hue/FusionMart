import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductCard from './Components/ProductCard'
import Mainsection from './Components/Mainsection'
import BasicTabs from './Components/ProductTabs'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import  Carousel from './Components/ImgL'
import Productdetailpage from './Components/Productdetailpage'
import Carrdm from './Components/Carrdm'
const App = () => {
  return (
    <>
    <Router>     <Navbar/>

      <Routes>
        <Route path='/' element={  <>  <Mainsection/>

<Carrdm/></>}/>
        <Route path='/product/:id' element={<Productdetailpage/>}/>
      </Routes>
{/* <Carousel/> */}
{/* <Productdetailpage/> */}
    <Footer/>    </Router>

    {/* <BasicTabs/> */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
    {/* <ProductCard/> */}
    {/* <ProductCard/> */}  
      {/*
    {/* <ProductCard/> */}
    {/* <ProductCard/> */}
    {/* <ProductCard/> */}
    {/* <ProductCard/></div> */}
     
    </>
  )
}

export default App
