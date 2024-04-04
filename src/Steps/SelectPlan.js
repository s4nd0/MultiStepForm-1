import React from "react";

// styles
import "./CheckBoxStyles.css";

// images
import Arcade from "../images/icon-arcade.svg";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";

const SelectPlan = ({
  isMonthly,
  setIsMonthly,
  selectedPlan,
  setSelectedPlan,
}) => {
  const handleIsMonthly = () => {
    setIsMonthly((previousIsMonthly) => !previousIsMonthly);
  };

  const handleSelect = (option) => {
    setSelectedPlan(option);
  };

  return (
    <div>
      <h2 className="text-Marine-Blue font-bold text-2xl mb-2">
        Select your plan
      </h2>
      <p className="text-Cool-gray">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row my-6">
        <div
          onClick={() => handleSelect(1)}
          className={`flex flex-row items-start sm:flex-col gap-4 px-4 py-3 border rounded-lg cursor-pointer ${
            selectedPlan === 1
              ? "border-Purplish-blue bg-Magnolia-1"
              : "bg-White border-Light-gray"
          }`}
        >
          <img className="mt-1" src={Arcade} alt="arcade-icon" />
          <div>
            <h3 className="text-Marine-Blue font-bold text-lg">Arcade</h3>
            <p className="text-Cool-gray">{isMonthly ? "$9/mo" : "$90/yr"}</p>
            {!isMonthly && (
              <p className="text-Marine-Blue text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          onClick={() => handleSelect(2)}
          className={`flex flex-row items-start sm:flex-col gap-4 px-4 py-3 border rounded-lg cursor-pointer ${
            selectedPlan === 2
              ? "border-Purplish-blue bg-Magnolia-1"
              : "bg-White border-Light-gray"
          }`}
        >
          <img className="mt-1" src={Advanced} alt="advanced-icon" />
          <div>
            <h3 className="text-Marine-Blue font-bold text-lg">Advanced</h3>
            <p className="text-Cool-gray">{isMonthly ? "$12/mo" : "$120/yr"}</p>
            {!isMonthly && (
              <p className="text-Marine-Blue text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </div>
        <div
          onClick={() => handleSelect(3)}
          className={`flex flex-row items-start sm:flex-col gap-4 px-4 py-3 border rounded-lg cursor-pointer ${
            selectedPlan === 3
              ? "border-Purplish-blue bg-Magnolia-1"
              : "bg-White border-Light-gray"
          }`}
        >
          <img className="mt-1" src={Pro} alt="pro-icon" />
          <div>
            <h3 className="text-Marine-Blue font-bold text-lg">Pro</h3>
            <p className="text-Cool-gray">{isMonthly ? "$15/mo" : "$150/yr"}</p>
            {!isMonthly && (
              <p className="text-Marine-Blue text-sm font-medium">
                2 months free
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-Alabaster-1 rounded-lg py-4 flex flex-row justify-center items-center">
        <p
          className={`font-bold text-sm ${
            isMonthly ? "text-Marine-Blue" : "text-Cool-gray"
          }`}
        >
          Monthly
        </p>
        <label className="switch mx-6">
          <input
            type="checkbox"
            onChange={handleIsMonthly}
            checked={!isMonthly}
          />
          <span className="slider round"></span>
        </label>
        <p
          className={`font-bold text-sm ${
            !isMonthly ? "text-Marine-Blue" : "text-Cool-gray"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
