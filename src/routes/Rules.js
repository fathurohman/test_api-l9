import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from '../view/pages/About';
import Login from '../view/pages/auth/Login';
import Register from '../view/pages/auth/Register';
import Home from '../view/pages/Home';


const Rules = () => {
  return (
    <BrowserRouter>
         <Routes>

          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>

            <Route index element={<Home/>} />
            <Route path='about' element={<About/>}/>



        </Routes>
    </BrowserRouter>
  );
}

export default Rules