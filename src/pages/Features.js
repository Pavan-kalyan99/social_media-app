import React from 'react'
//import { FaUserCheck } from "react-icons/fa";


const Features = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-4 '>
        <div className='bg-gray-300  '>
        {/* <div className='user'> <FaUserCheck/></div>    */}
            
  
 
        
<h1 className='text-center font-semibold'>User Profile</h1>  

<p className='m-1'>Personalize your profile and express yourself </p>
        </div>
        <div className='bg-gray-300'> 
         <h1 className='text-center font-semibold'>Content sharing</h1>
         <p className='m-1'>Share and explore diverse content </p>
     </div>
     <div className='bg-gray-300 '> 
     <h1 className='text-center font-semibold'>Instant Updates</h1>

<p className='m-1'>Connect with others instantly with messages. </p>
</div>
      
    </div>
{/* <div className="grid grid-cols- gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div> */}
</>
  )
}

export default Features
