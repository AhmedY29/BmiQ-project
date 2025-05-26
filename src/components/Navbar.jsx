import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const [openLogout, setOpenLogout] = useState(false);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("User-Account"));

  console.log(openLogout);
  return (
    <nav className="nav-section flex justify-center w-full py-5 sticky top-0 bg-[#faeadb] text-black">
      <div className="nav-content w-[80%] flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Link
            className="opacity-85 hover:opacity-100 transition-all duration-150"
            to={"/"}
          >
            <h1 className="text-2xl font-bold">BmiQ</h1>
          </Link>
          <ul className="flex gap-5">
            <Link
              className="opacity-65 hover:opacity-100 transition-all duration-150"
              to={"/"}
            >
              <li>Home</li>
            </Link>
            <Link
              className="opacity-65 hover:opacity-100 transition-all duration-150"
              to={"/"}
            >
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className={` ${!user ? "flex" : "hidden"} gap-2`}>
          <button
            onClick={() => navigate("/signup")}
            className="bg-black text-white hover:bg-[#393838] rounded-xl hover:shadow cursor-pointer p-2 transition-all duration-150"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="border-1 border-black text-black hover:bg-black hover:text-white rounded-xl hover:shadow cursor-pointer p-2 transition-all duration-150"
          >
            Sign In
          </button>
        </div>
        <div className={`welcome relative ${!user ? "hidden" : ""}`}>
          <h1
            onClick={() => setOpenLogout(!openLogout)}
            className="cursor-pointer"
          >
            Welcome, Ahmed
          </h1>
          <ul
            className={`${
              !openLogout ? "hidden " : ""
            }bg-white text-black fixed py-2 w-[80%]`}
          >
            <li>
              <button
                onClick={() => {
                  toast.success("Logout Successfully"),
                    localStorage.clear(),
                    setOpenLogout(false);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
