import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../view/pages/About';
import Home from '../view/pages/Home';


const Rules = () => {
  return (
    <BrowserRouter>
         <Routes>
          
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>}/>



        </Routes>
    </BrowserRouter>
  );
}

export default Rules