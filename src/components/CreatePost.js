// import axios from 'axios';
// import React from 'react'
// import { useForm } from 'react-hook-form';

// const CreatePost = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();

//       const data=async(d)=>{
//         console.log("Create data is:",d)

//         try{
//               const res=await axios.post('/posts/create-post',d);
//               console.log("create post data",res)
//                 // if(res && res.data.success){
//                 //     console.log(res.data && res.data.message)
//                 // }
              
//         }
//         catch(error){
//             console.log(error)
//         }
//       }
//   return (
//     <div>
//         <h1>Crate Post </h1>
//         <form   onSubmit={handleSubmit(data)} autoComplete='off'>
   
//    <div className="label">
//  <span className="label-text">Description</span>
//   </div>
//    <input  {...register('des', { required: true })} className="input input-bordered w-full max-w-xs" type='text' placeholder='decription'/>
//    {errors.des && <p className='text-red-900'>description is required.</p>}

// <div>
//     <input  {...register('file', { required: true })} className="input input-bordered w-full max-w-xs" type='file'/>
//     {errors.file && <p className='text-red-900'>image is required.</p>}

// </div>
// <div>
// <input type="submit" className='btn btn-primary'/>&nbsp;&nbsp;
// </div>


// </form>
//     </div>
//   )
// }

// export default CreatePost
