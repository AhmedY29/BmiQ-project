import React from "react";
import { useNavigate } from "react-router";

function HomeHero() {
  const navigate = useNavigate();
  return (
    <div className="hero-section w-full h-[90vh] flex justify-center">
      <div className="hero-content flex flex-col my-5 lg:flex-row lg:my-0 justify-between items-center w-[80%]">
        <div className="text  flex-1/2">
          <h1 className="text-5xl font-bold">
            Your First Step Toward Better Health Starts Here
          </h1>
          <button
            onClick={() => navigate("/bmi")}
            className="uppercase py-3 px-2 my-5 bg-black rounded-xl text-white cursor-pointer"
          >
            Calc Now
          </button>
        </div>
        <div className="img flex-1/2">
          <img
            src="https://img.freepik.com/free-vector/body-mass-index-weight-control-with-bmi-healthy-unhealthy-lifestyle-flat-vector-illustration-fitness-indicator-before-after-diet-overall-health-body-fat-scale-concept_88138-795.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
