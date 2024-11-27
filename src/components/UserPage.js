import React, { useEffect } from "react";
import LayOut from "../Layout/LayOut";
import ProfileCard from "./ProfileCard";
import GetAllPost from "./GetAllPost";
import PostCreate from "./PostCreate";
import FriendsCard from "./FriendsCard";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/Auth";
const UserPage = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      setTimeout(() => navigate("/dashboard/user"), 1000);
    } else {
      setTimeout(() => navigate("/"), 1000);
    }
  }, [auth]);

  return (
    <LayOut>
      {/* <h1>This is User Page</h1> */}
      <div className="flex h-screen">
     
          {/* <PostCreate /> */}
        

        <div className="lg:w-1/4 fixed top-32 bg-slate-500 inset-y-0 left-0 overflow-y-auto hidden lg:flex">
          {/* Left Sidebar Content Goes Here */}
          <div className="p-2">
            <ProfileCard />
            {/* <h1 className="bg-blue-400 text-lg font-bold">Sidebar</h1> */}
            {/* <div className='text-center'>
                            <div>

                                <h1>Profile page</h1>
                            </div>
                            <div>
                                <p>Likes</p>
                                <p>comments</p>
                            </div>
                        </div> */}
            {/* <ul className="mt-4">
                            <li className="py-2">Link 1</li>
                            <li className="py-2">Link 2</li>
                            <li className="py-2">Link 3</li>
                        </ul> */}
          </div>
        </div>
        <FriendsCard />
        <div className="sm:w-full lg:w-2/4 top-32 bg-red-400 overflow-y-auto absolute lg:right-1/4">
          {/* Main Content Goes Here */}
          <GetAllPost />
        </div>
      </div>
    </LayOut>
  );
};

export default UserPage;
//
//  <div
// id="con"
// className=" w-full  h-ful grid bg-slate-600 lg:[grid-cols-8] sm:[grid-col-1]  gap-1 m-1  "
// >
// {/* left */}
// <div
//   id="left"
//   className="bg-pink-200  lg:[col-start-1 col-end-3]  h-full  sm:[col-start-1 col-end-8] rounded-lg"
// >
//   <div className="">
//     <ProfileCard />
//     <h1>One</h1>
//   </div>
// </div>
// {/* Center */}
// <div
//   id="center"
//   className="bg-pink-200 col-start-2 col-end-6 h-full    sm:[col-start-1 col-end-8]"
// >
//   <PostCreate />
//   <h1>Two</h1>
//   <GetAllPost />
// </div>
// {/* right */}
// <div
//   id="right"
//   className="bg-pink-200  col-start-6 col-end-9 h-full     sm:[col-start-1 col-end-8]"
// >
//   {/* row-span-2 sm:row-span-12 */}
//   {/* <h1>Three</h1> */}
//   <FriendsCard />
// </div>
// </div>
