import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

 
    var obj={}
    
    function getInfomo(e){
      const name=document.getElementById('name').value;
      const email=document.getElementById('mail').value;
      const password=document.getElementById('password').value;
      obj={
        name:name,
        email:email,
        password:password
      }
      console.log(obj);
  
     
      fetch("http://localhost:5050/register",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then((res)=>res.json())
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    
    }

    
      return (
        <div className='mainCOntainer'>
        <div id='title'>
          <h1 className='facebook'>facebook</h1>
          <h2>Facebook helps you connect and share with the people in your life.</h2>
        </div>
    <div id='registerForm'>
        <form action='' method='post' align='center'>
          <label htmlFor='name'>  Name: </label>
          <br></br>
          <input type='text' id='name' placeholder='Enter Name' required/>
          <br></br>
    
          <label htmlFor='phone'>  Phone: </label>
          <br></br>
          <input type='number' id='phone' placeholder='Enter Phone' />
          <br></br>
    
          <label htmlFor='mail'>  E-mail: </label>
          <br></br>
          <input type='email'  id='mail' placeholder='Enter E-Mail' required/>
          <br></br>
    
          <label htmlFor='password'>  Password: </label>
          <br></br>
          <input type='password' id='password' placeholder='Password' required/>    </form>
          {/* <button  onClick={getInfomo} type='submit'>Submit</button> */}
     <Link to='/login'>
         <button onClick={getInfomo} type='submit' className='submit'>Sign UP</button>
         </Link>
         </div>
          </div>)
}

export default Register