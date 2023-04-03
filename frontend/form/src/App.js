import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Component/Login'
import Register from './Component/Register'
import Response from './Component/Response';
import Rejected from './Component/Rejected';
import Page from './Component/Page';


const App=()=>{


    
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Register />} />
      <Route path='/login' element={<Login />} />
     <Route path='/response' element={<Response/>}/>
     <Route path='/rejected' element={<Rejected/>}/>
     <Route path='/page' element={<Page/>}/>

    </Routes>
    </BrowserRouter>
{/* {data ? <Register data={data} fun={setData}/> : <Login/>}   */}
    </>
  )
}
export default App