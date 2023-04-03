import React, { useState,createContext } from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'

export const store = createContext()

const Login=()=>{
const [data,setData]=useState("")
const [data2,setData2]=useState(true)

let obj={}

function storeLoginDetails(){
    const name=document.getElementById("loginMail").value
    const password=document.getElementById("password").value
    obj={
        name:name,
        password:password
    }
       
    fetch("http://localhost:5050/login",{
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((res)=>{
          setData(res)
          setData2(!data2)
       })
        .catch((err)=>console.log(err))
        
    }
 console.log(data);

 return(
  <>
    <div className='loginPage'>
    <center>
    <form action='' className='loginForm'>
    <label>
        enter mail
    </label>
    <input type='email' placeholder='Enter mail' id='loginMail'/>
    <label>password</label>
    <input type='password' placeholder='password' id='password' required/>
    <br/>
{/* <Link to="/page">  */}
<button type='submit'onClick={storeLoginDetails}>Login IN</button>
{/* </Link> */}
</form>
</center>

</div>
{data}
<store.Provider value={[data2]}>
    <Page/>
</store.Provider>

</>)
}
export default Login