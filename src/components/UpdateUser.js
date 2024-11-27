import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import LayOut from '../Layout/LayOut'
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/Auth';

import toast from 'react-hot-toast';

const UpdateUser = () => {
    const [auth,setAuth] =useAuth();
    const [image, setImage] = useState(null);
    const [pro,setprofileImg]=useState();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({mode: "onChange",});
//----------------------------------------//
 //userDetails update
const data=async(d)=>{
  console.log("data is:",d)
  try{
     const res=await axios.put('/users/update-user',d)
    if(res && res.data.success){
  console.log(res.data && res.data.message)
toast.success(res.data && res.data.message)
setAuth({...auth,
  user:res.data.user,
token:res.data.token,});
                                                   //localStorage
localStorage.setItem('auth',JSON.stringify(res.data));
console.log("successfully updated...")
}
else{
console.log(res.data.message)
//toast.error(res.data.message)
console.log("error in login ...")
}}
  catch(error){
toast.error("Unable to update..")
   console.log(error)
  }
}

//@ getting profile Image
const profileImage=async()=>{
  try{
    const {data}=await axios.get('/users/user-profile');
    setprofileImg(data?.image?.url)
    console.log("userImage:",data?.image?.url)
 }
 catch(error){
   console.log(error,"profile error")
 }
}
useEffect(()=>{
  profileImage();
})







//upload image
const handleImageChange = (event) => {
  const selectedImage = event.target.files[0];
  setImage(selectedImage);
};
const handleUpload = async() => {
  const formData = new FormData();
  formData.append('image', image);
 // formData.append('description', description);

  try{
const {data}=await axios.post('/users/user-profile',formData)
console.log("profile image is updated:",data)
  }
  catch(error){
    console.log(error)
  }

};


  return (

      <>
      <LayOut>
        <div className='top-20 absolute max-w-[1200px] overflow-scroll grid mx-auto lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-2  m-1'>

      
        <div className=''>

        {/* <h1>Update user details</h1> */}
        <div className="stats shadow">
  
  <div className="stat">
 
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full  ring ring-primary">
        <div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content rounded-full w-16">
   
{/* {
pro ?<>
  <img src={pro} alt='' /> 
  </>:<>
  <Link>
  <label htmlFor="my_modal_6" className="">
    <span className="text-xl">ADD</span>
    </label>
    </Link>
  </>
} */}
  <Link>
  <label htmlFor="my_modal_6" className="">
    <img src={pro} alt=''/>
    {/* <span className="text-xl">ADD</span> */}
    </label>
    </Link>
  

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box bg-slate-500">
    <h3 className="font-bold text-lg ">Upload Profile</h3>

    <input type="file" accept="image/*" onChange={handleImageChange} className='file-input file-input-bordered file-input-primary w-full max-w-xs'/>
    <button onClick={handleUpload} className='py-4 btn btn- text-red-400 text-center '>Upload Image</button>

    {/* <p className="py-4">This modal works with a hidden checkbox!</p> */}
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>


  </div>
</div>        
 </div>
      </div>

    </div>
    <div className="stat-value">{auth?.user?.firstName}</div>
    <div className="stat-value">{auth?.user?.lastName}</div>

    <div className="stat-title">{auth?.user?.email}</div>
    <div className="stat-desc text-secondary">{auth?.user?.profession}</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>


    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">{auth?.user?.views.length}K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
</div>
<div className="stat">
    <div className="stat-figure text-secondary">
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

        </div>

         <form   onSubmit={handleSubmit(data)} autoComplete='off'>
          <h1 className='text-start text-secondary'>Update user details</h1>

         <input {...register('firstName')} className="input input-bordered w-full max-w-xs" type='text' required placeholder='First Name'/><br/>
         <input {...register('lastName')} className="input input-bordered w-full max-w-xs" type='text' required placeholder='Last Name'/>
         <input {...register('location')} className="input input-bordered w-full max-w-xs" type='text' required placeholder='Your location'/>
         <input {...register('profession')} className="input input-bordered w-full max-w-xs" type='text' required placeholder='profession'/>



<div>
<input type="submit" className='btn btn-primary'/>&nbsp;&nbsp;
<div>

</div>

</div>
 </form>


        </div>

      </LayOut>
      </>
  
  )
}

export default UpdateUser
