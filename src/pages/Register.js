import React from 'react'
import axios from 'axios'
import {  NavLink } from 'react-router-dom'
import LayOut from '../Layout/LayOut'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onChange",});

  const data=async(d)=>{

    console.log("data is:",d)
    try{
const res=await axios.post('/auth/register',d)
if(res && res.data.success){
  toast.success(res.data && res.data.message)
  setTimeout(()=>navigate('/login'),5000)

  //console.log("successfully registred...")
}
else{
  toast.error(res.data.message)
  //console.log("error in registeration...")
}
    }
    catch(error){
     console.log(error)
    }
  }

  return (
    <LayOut>
      <div className='form-container mt-5'>   
      <h1 className=''>Register Page</h1>
         <form   onSubmit={handleSubmit(data)} autoComplete='off'>
      
         <div className="label">
    <span className="label-text">What is your First Name?</span>
  </div>

      <input {...register('firstName')} className="input input-bordered w-full max-w-xs" type='text' required placeholder='Firstname'/>

      <div className="label">
    <span className="label-text">What is your last Name</span>
  </div>
      <input {...register('lastName', { required: true })} className="input input-bordered w-full max-w-xs" type='text' placeholder='lastName'/>
      {errors.lastName && <p className='text-red-900'>Last name is required.</p>}

      <div className="label">
    <span className="label-text">Email Address</span>
  </div>
      <input  {...register('email', { required: true })} className="input input-bordered w-full max-w-xs" type='email' placeholder='Email Address'/>
      {errors.email && <p className='text-red-900'>Email is required.</p>}

      <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input  {...register('password', { required: true })} className="input input-bordered w-full max-w-xs" type='password' minLength='5' placeholder='Password'/>
      {errors.password && <p className='text-red-900'>password is required.</p>} 
<div>
<input type="submit" className='btn btn-primary m-1'/>&nbsp;&nbsp;
      <NavLink to='/login'>Already  Registered Login </NavLink>
</div>
 
   

    </form>
    </div>

    </LayOut>
  )
}

export default Register


    {/* <div className='form-container'>
     <h1>Register Page</h1>
     <form>
     <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">What is your name?</span>
  </div>
  <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
 
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email Address</span>
  </div>
  <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required/>
</label>
 Password" className="input input-bordered w-full max-w-xs" required/>
</label>
<button type="submit" className='btn btn-primary'>Register</button>&nbsp;&nbsp;
<NavLink to='/login'>Already  Registered Login </NavLink>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="password" placeholder="Enter

     </form>


    </div> */}