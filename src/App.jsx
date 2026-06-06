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
import MensBanner from './Components/Banners/MensBanner'
import Womenbanner from './Components/Banners/Womenbanner'
import KidsBanner from './Components/Banners/KidsBanner'
import Mcategories from './Components/Mcategories'
const App = () => {
  return (
    <>
    <Router>     <Navbar/>

      <Routes>
        <Route path='/' element={  <>  <Mainsection/>
        <Mcategories/>
{/* <MensBanner/> */}
{/* <Carrdm/> */}
{/* <Womenbanner/><Carrdm/> */}
{/* <KidsBanner/> */}
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

// import React from 'react'
// import Banner from './Components/Banners/KidsBanner'
// import Categories from './Components/Categories'

// const App = () => {
//   return (
//     <>
//       <Categories/>
//     </>
//   )
// }

// export default App
