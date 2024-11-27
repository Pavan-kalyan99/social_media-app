import React from 'react'

const FriendsCard = () => {
  return (
    <div className='lg:w-1/4 sm:w-full top-32 bg-slate-500  inset-y-10  right-0 fixed'>
    <div
        class="w-full bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5  flex-col justify-around shadow-md hidden lg:flex"
    >
        <p class="text-lg font-bold font-sans">Friend Request</p>
        <div class="py-1">
            <p class="text-gray-400 text-sm">
            Friends Suggestion
            </p>
        </div>
        <div class="flex justify-between">
            <div class="text-sm flex gap-2">
                <button
                    class="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
                >
                    glee
                </button>
                <button
                    class="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out"
                >
                    download
                </button>
            </div>
        </div>
    </div>



</div>
  //   <div className="card  bg-primary text-primary-content m-1">
  //   <div className="card-body">
  //     <h2 className="card-title">Friend Request</h2>
  
  //     <p>Friends Suggestion</p>
     
  //     <div className="card-actions justify-start">
  //      Add friends
  //     </div>
  //   </div>
  // </div>
  
  )
}

export default FriendsCard
