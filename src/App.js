//import logo from './logo.svg';
import "./App.css";
import React from "react";

import PageNotFound from "./pages/PageNotfound";
import { Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";

import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./routes/Private";
import UpdateUser from "./components/UpdateUser";
import { Suspense } from "react";
import PacmanLoader from "react-spinners/ClipLoader";
import PostCreate from "./components/PostCreate";

const Home = React.lazy(() => import("./pages/Home"));
//import Home from './pages/Home';
const App = () => {
  return (
    <div className="App">
      {/* <h1 className='text-center'>Hi</h1> */}
      {/* <h1 className='font-bold text-3xl bg-red-400'>hi pavan </h1> */}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <PacmanLoader
                    color="#36d7b7"
                    size={50}
                    margin="2"
                    speedMultiplier={1}
                  />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        {/* <Route path="/" element={<Home/>} /> */}

        <Route path="/user" element={<UserPage />} />
        {/* user */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        {/* private */}
        <Route path="/dashboard" element={<PrivateRoute />} >
        <Route path="user" element={<UserPage />} />
        <Route path="updateuser" element={<UpdateUser />} />
        </Route>
      </Routes>
      <PostCreate/>

    </div>
  );
};

export default App;
