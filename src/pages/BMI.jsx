import React, { useState } from "react";

function BMI() {
  const [heightValue, setHeightValue] = useState(140);
  const [weightValue, setWeightValue] = useState(100);
  const [BMITitle, setBMITitle] = useState("");

  let BMI = weightValue / (heightValue / 100) ** 2;
  function handleBMITitle() {}

  handleBMITitle();
  return (
    <section className="signin-section w-full flex justify-center h-[80vh]">
      <div className="flex flex-col my-5 lg:flex-row lg:my-0 justify-center items-center w-[80%]">
        <div className="form bg-[#f9f9f9] m-3 p-4 rounded-2xl flex flex-col items-center gap-3 w-[80%] lg:w-[50%]">
          <h1 className="text-2xl font-bold">Calc BMI</h1>
          <div className="form-group flex flex-col w-[80%]">
            <label htmlFor="heightValue">Height: {heightValue}</label>
            <input
              type="range"
              name=""
              id="heightValue"
              value={heightValue}
              max={300}
              onChange={(e) => {
                setHeightValue(e.target.value);
              }}
            />
          </div>

          <div className="form-group flex flex-col w-[80%]">
            <label htmlFor="heightValue">Weight: {weightValue}</label>
            <input
              type="range"
              name=""
              id="heightValue"
              value={weightValue}
              max={300}
              onChange={(e) => {
                setWeightValue(e.target.value);
              }}
            />
          </div>
          <h1>{BMI}</h1>
          <div>
            <h1>
              {BMI <= 18.4 ? (
                <>
                  <h1 className="bg-red-400 p-5 rounded-xl text-white font-bold">
                    Underweight
                  </h1>
                </>
              ) : BMI > 18.5 && BMI < 24.9 ? (
                <h1 className="bg-green-400 p-5 rounded-xl text-white font-bold">
                  Normal
                </h1>
              ) : BMI > 25 && BMI < 39.9 ? (
                <h1 className="bg-yellow-400 p-5 rounded-xl text-white font-bold">
                  Overweight
                </h1>
              ) : BMI >= 40 ? (
                <h1 className="bg-red-400 p-5 rounded-xl text-white font-bold">
                  Obese
                </h1>
              ) : (
                ""
              )}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BMI;
