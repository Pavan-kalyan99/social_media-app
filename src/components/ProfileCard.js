import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Auth";
import { Link } from "react-router-dom";
import PostCreate from "./PostCreate";
import { useDispatch } from 'react-redux';
import { openModal } from "../redux/ModalSlice";

const ProfileCard = () => {
  const [auth] = useAuth();
  const [pro, setprofileImg] = useState();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  
  const handle = () => {
    setOpen(!open);
  };
  const closed = () => {
    setOpen(false);
  };

  const profile = async () => {
    try {
      const { data } = await axios.get("/users/user-profile");
      setprofileImg(data?.image?.url);
      console.log("userImage:", data?.image?.url);
    } catch (error) {
      console.log(error, "profile error");
    }
  };
  useEffect(() => {
    profile();
  });

  return (
    <>
      <div className="card  bg-primary text-primary-content m-1 overflow-hidden">
        <div className="card-body">
          <div className="avatar ">
            <div className="w-full rounded-full">
              {pro ? (
                <>
                  <Link to="/dashboard/updateUser">
                    <img src={pro} />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard/updateUser">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </Link>
                </>
              )}
            </div>
          </div>
          <h2 className="card-title">Name:{auth?.user?.firstName}</h2>
          <p>Views {auth?.user?.views.length}</p>
          <p>friends {auth?.user?.friends.length}</p>
          <div className="card-actions justify-start">Add location</div>

          <button className="btn-primary"
          // onClick={handle}
          onClick={() => dispatch(openModal())}
           >
            Upload a post
          </button>
          {/* {open ? (
            <div className="w-full ">
              <h1 onClick={closed}>X</h1>
               <PostCreate /> 
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>

      <div className="card  bg-primary text-primary-content m-1">
        <div className="card-body">
          <h2 className="card-title">Social Profile</h2>

          <p>Instagram</p>
          <p>Telegram</p>
          <p>Facebok</p>
          <div className="card-actions justify-start">Add lcation</div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
{
  /* <h1> ProfileCard</h1>
     
     <h1>Last Name:{auth?.user?.lastName}</h1> */
}
{
  /* <p>token:{auth?.token}</p> */
}
