import React from 'react'

import foodImg from './img/health_img.jpg';
import creImg from './img/creative_img.jpg';
import techImg from './img/tech_image.jpg';
const TopFeatures = () => {
  return (
    <>
    <h1 className='text-purple-600 text-3xl m-1 p-1 text-center'>Explore Insights, Tips, and More </h1>
    
    <div className='container-fluid grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 justify-items-center items-center m-1 '>
  <div className="card-wrapper">
    <div className="card w-full md:w-1/2 lg:w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <figure><img src={techImg} alt="Tech" className='w-full' /></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold mb-2">Tech Tips </h2>
        <p className="text-gray-700">Navigating new features with ease, ensuring a smooth social experience.</p>
        {/* <div className="card-actions mt-4">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Buy Now</button>
        </div> */}
      </div>
    </div>
  </div>
  <div className="card-wrapper">
    <div className="card w-full md:w-1/2 lg:w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <figure><img src={creImg} className='w-full' alt="Create" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold mb-2">Creative Corner</h2>
        <p className="text-gray-700">Showcase your creativity or discover the talents within our community.</p>
        {/* <div className="card-actions mt-4">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Buy Now</button>
        </div> */}
      </div>
    </div>
  </div>
  <div className="card-wrapper">
    <div className="card w-full md:w-1/2 lg:w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <figure><img src={foodImg} className='w-full' alt="Food" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold mb-2">Health Hacks</h2>
        <p className="text-gray-700">Learn health and wellness tips shared by community members</p>
        {/* <div className="card-actions mt-4">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Buy Now</button>
        </div> */}
      </div>
    </div>
  </div>
  <div className="card-wrapper">
    <div className="card w-full md:w-1/2 lg:w-full bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold mb-2">Travel Tales  </h2>
        <p className="text-gray-700">Discover breathtaking destinations through our community's travel stories</p>
        {/* <div className="card-actions mt-4">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Buy Now</button>
        </div> */}
      </div>
    </div>
  </div>

  {/* Repeat the same structure for other cards */}
</div>


</>
  )
}

export default TopFeatures
