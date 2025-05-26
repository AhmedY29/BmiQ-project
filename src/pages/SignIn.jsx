import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();
  const [formSignIn, setFormSignIn] = useState({
    email: "",
    password: "",
  });
  const user = JSON.parse(localStorage.getItem("User-Account"));
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormSignIn({ ...formSignIn, [name]: value });
  };
  const handleSignIn = () => {
    if (
      formSignIn.email.toLowerCase() !== user.email &&
      formSignIn.password !== user.password
    ) {
      toast.error("Email Or Password Invalid");
      return;
    }

    toast.success("Sign In Successfully We Will Redirect You To Hone Page ...");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <section className="signin-section w-full flex justify-center">
      <div className="signin-content flex flex-col my-5 lg:flex-row lg:my-0 justify-center items-center w-[80%]">
        <div className="form bg-[#f9f9f9] m-3 p-4 rounded-2xl flex flex-col gap-3 lg:w-[50%]">
          <h1 className="font-bold text-2xl">Sign In</h1>

          <div className="form-group flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border border-black rounded-lg p-2"
              type="text"
              id="email"
              name="email"
              onChange={handleChangeInput}
              placeholder="Enter Your Email "
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border border-black rounded-lg p-2"
              type="password"
              id="password"
              name="password"
              onChange={handleChangeInput}
              placeholder="Enter Your Password "
            />
          </div>
          <div className="form-group flex gap-2">
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              id="check-me"
            />
            <label htmlFor="check-me">Check Me</label>
          </div>
          <button
            onClick={handleSignIn}
            className="uppercase py-3 px-2 my-5 bg-black hover:bg-[#333] rounded-xl text-white cursor-pointer transition-all duration-150"
          >
            Sign In
          </button>
          <h1>
            Don't You have an account?{" "}
            <Link
              to={"/signup"}
              className="text-blue-400 hover:underline transition-all duration-150"
            >
              Sign Up
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
