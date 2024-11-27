import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/ModalSlice";
import "../components/CompoStyles.css";
//import { useForm } from 'react-hook-form';

// const PostCreate = () => {
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
//    <input  {...register('description', { required: true })} className="input input-bordered w-full max-w-xs" type='text' placeholder='decription'/>
//    {errors.description && <p className='text-red-900'>description is required.</p>}

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

// export default PostCreate

// const PostCreate = () => {
//   const [description,setDes]=useState(' ');
//   const [image,setImage]=useState([]);

// const handleImage=(e)=>{
//   const file=e.target.files[0];
//   setFileToBase(file);
//   console.log(file)
// }
// const setFileToBase=(file)=>{
//     const reader=new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend=()=>{
//       setImage(reader.result)
//     }
// }

//   const submitForm=async(e)=>{
//     e.preventDefault();
//     try{
//   const {data}=await axios.post('/posts/create-post',description,image)
//   console.log("created post data:",data)
//     }
//     catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={submitForm}>

//         <input type='text' onChange={(e)=>setDes(e.target.value)} value={description} placeholder='description'/>
//         <input type='file' onChange={handleImage} name='image'/>
//         <img src={image} alt=''/>
//         <input type='submit' className='btn btn-success text-center'/>
//       </form>

//     </div>
//   )
// }
// export default PostCreate

const PostCreate = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  console.log("it is opened..");
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(closeModal());
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async () => {
    if (!description) {
      toast.error("Description is required.");
      return;
    }

    if (!image) {
      toast.error("Image is required.");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      const { data } = await axios.post("/posts/create-post", formData);
      console.log("created post data:", data);
      if (data?.success) {
        toast.success(data.message);
        console.log("successfully created your post.");
      } else {
        toast.error(data.message);
        console.log("error in creating a post...");
      }
    } catch (error) {
      toast.error(error.message);
      console.log("catch error::", error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <>
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">Hello!</h3> 
    {/* <p className="py-4">Press ESC key or click the button below to close</p> 
    <div className="modal-action">
      <form method="dialog" onSubmit={handleUpload}>
      <input
        placeholder="Enter image description"
        value={description}
        onChange={handleDescriptionChange}
        type="text"
        className="input input-bordered input-warning w-full max-w-xs input-lg m-1"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input file-input-bordered file-input-primary w-full max-w-xs"
      />

      <button onClick={handleUpload} className="btn btn-accent">
        Upload Image
      </button>
        <button className="btn">submit</button>
        <button className="btn">Close</button>

      </form>
    </div>
  </div>
</dialog> */}

      {/*  */}
      <div className="modal-overlay">
        <div className="modal-content" ref={modalRef}>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-cyan-500 text-2xl ">Create Post</h1>
            <input
              placeholder="Enter image description"
              value={description}
              onChange={handleDescriptionChange}
              type="text"
              className="input input-bordered input-warning w-full max-w-xs input-lg m-1 text-purple-950"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <button onClick={handleUpload} className="btn btn-accent m-1">
              Upload
            </button>
            {/* <button onClick={() => dispatch(closeModal())} className="btn btn-secondary mt-2">
            Cancel
          </button> */}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default PostCreate;
