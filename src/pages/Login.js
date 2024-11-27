import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {  NavLink } from 'react-router-dom'

import LayOut from '../Layout/LayOut'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useAuth } from '../context/Auth';

const Login = () => {
  const navigate=useNavigate();
  const [auth,setAuth] =useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onChange",});

  const data=async(d)=>{

    console.log("data is:",d)
    try{
       const res=await axios.post('/auth/login',d)
      if(res && res.data.success){
    console.log(res.data && res.data.message)

   // console.log(" User data: ",res.data.user)
    //console.log(" JWT Token: ",res.data.token)

  toast.success(res.data && res.data.message)
  setAuth({...auth,
    user:res.data.user,
  token:res.data.token,});
                                                     //localStorage
  localStorage.setItem('auth',JSON.stringify(res.data));
  
  const data=localStorage.getItem('auth');
  if(data){

    setTimeout(()=>navigate('/dashboard/user'),1000)
  }
  
  console.log("successfully login...")
}
else{
console.log(res.data.message)
  //toast.error(res.data.message)
  setTimeout(()=>navigate('/'),5000)

  console.log("error in login ...")
}
    }
    catch(error){
  toast.error("Invalid Email or password")

     console.log(error)
    }
  }

  return (
  <LayOut>

        <div className='form-container'>   
      <h1>Login Page</h1>
         <form   onSubmit={handleSubmit(data)} autoComplete='off'>
   
      <div className="label">
    <span className="label-text">Email Address</span>
  </div>
      <input  {...register('email', { required: true })} className="input input-bordered w-full max-w-xs" type='email' placeholder='Email Address'/>
      {errors.email && <p className='text-red-900'>Email is required.</p>}

      <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input  {...register('password', { required: true })} className="input input-bordered w-full max-w-xs" type='password' minLength='6' placeholder='Password'/>
      {errors.password && <p className='text-red-900'>password is required.</p>} 
<div>
<input type="submit" className='btn btn-primary m-1'/>&nbsp;&nbsp;
<div>

      <NavLink to='/login'>Create New Account </NavLink>&nbsp;&nbsp;
</div>
      <NavLink to='/forget-password'>Forget-Password</NavLink>

</div>
 </form>
 </div>
  </LayOut>
  )
}

export default Login
