import React from 'react'

const Divide = () => {
  return (
    <>
   <h1 className='text-center m-1 p-1 text-2xl font-bold'>Top Features</h1>
<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 justify-items-center items-center">
  <div className='bg-orange-200 w-full h-32 m-2 p-1 flex justify-center items-center hover:bg-blue-400 duration-10 rounded transition-colors'>
    <h1>Personalize your profile and express yourself</h1>
  </div>
  <div className='bg-yellow-200 w-full h-32 m-2 p-1 flex justify-center items-center hover:bg-green-400 duration-10 rounded transition-colors'>
    <h1>Share and explore diverse content</h1>
  </div>
  <div className='bg-pink-200 w-full h-32 m-2 p-1 flex justify-center items-center hover:bg-purple-400 duration-10 rounded transition-colors'>
    <h1>Connect with others instantly with messages</h1>
  </div>
  <div className='bg-blue-200 w-full h-32 m-2 p-1 flex justify-center items-center hover:bg-yellow-400 duration-10 rounded transition-colors'>
    <h1>Share and explore diverse content</h1>
  </div>
</div>





  </>
  )
}

export default Divide
{/* <h1 className='text-center font-semibold'>Top Features</h1>
<div className="flex flex-col w-full lg:flex-row">
<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center  m-1">Personalize your profile and express yourself</div> 
<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-1">Share and explore diverse content</div> 

<div className="divider lg:divider-horizontal"></div> 
<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-1">Connect with others instantly with messages</div> 
<div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center m-1">Share and explore diverse content</div>

</div> */}
