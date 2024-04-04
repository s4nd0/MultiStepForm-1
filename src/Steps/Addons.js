import React, { useState } from "react";

// images
import Checkmark from "../images/icon-checkmark.svg";

const Addons = ({
  isMonthly,
  onlineService,
  setOnlineService,
  largerStorage,
  setLargerStorage,
  customizableProfile,
  setCustomizableProfile,
}) => {
  return (
    <div>
      <h2 className="text-Marine-Blue font-bold text-2xl mb-2">Pick add-ons</h2>
      <p className="text-Cool-gray">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row my-6">
        <div
          className={`flex flex-row justify-between items-center px-4 py-4 border border-Light-gray rounded-lg ${
            onlineService
              ? "border-Purplish-blue bg-Magnolia-1"
              : "border-Light-gray"
          }`}
          onClick={() =>
            setOnlineService((previousOnlineService) => !previousOnlineService)
          }
        >
          <div
            className={`w-5 flex items-center justify-center box-border h-5 border border-Light-gray rounded mr-4 ${
              onlineService ? "bg-Purplish-blue" : "bg-White"
            }`}
          >
            <img className="w-3/5 h-3/5" src={Checkmark} alt="checkmark-icon" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-Marine-Blue font-medium">Online service</h3>
            <p className="text-sm text-Cool-gray">
              Access to multiplayer games
            </p>
          </div>
          <p className="text-sm text-Purplish-blue ">
            {isMonthly ? "+$1/mo" : "+$10/yr"}
          </p>
        </div>
        <div
          className={`flex flex-row justify-between items-center px-4 py-4 border border-Light-gray rounded-lg ${
            largerStorage
              ? "border-Purplish-blue bg-Magnolia-1"
              : "border-Light-gray"
          }`}
          onClick={() =>
            setLargerStorage((previousLargerStorage) => !previousLargerStorage)
          }
        >
          <div
            className={`w-5 flex items-center justify-center box-border h-5 border border-Light-gray rounded mr-4 ${
              largerStorage ? "bg-Purplish-blue" : "bg-White"
            }`}
          >
            <img className="w-3/5 h-3/5" src={Checkmark} alt="checkmark-icon" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-Marine-Blue font-medium">Larger Storage</h3>
            <p className="text-sm text-Cool-gray">Extra 1TB of cloud save</p>
          </div>
          <p className="text-sm text-Purplish-blue ">
            {isMonthly ? "+$2/mo" : "+$20/yr"}
          </p>
        </div>
        <div
          className={`flex flex-row justify-between items-center px-4 py-4 border border-Light-gray rounded-lg ${
            customizableProfile
              ? "border-Purplish-blue bg-Magnolia-1"
              : "border-Light-gray"
          }`}
          onClick={() =>
            setCustomizableProfile(
              (previousCustomizableProfile) => !previousCustomizableProfile
            )
          }
        >
          <div
            className={`w-5 flex items-center justify-center box-border h-5 border border-Light-gray rounded mr-4 ${
              customizableProfile ? "bg-Purplish-blue" : "bg-White"
            }`}
          >
            <img className="w-3/5 h-3/5" src={Checkmark} alt="checkmark-icon" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-Marine-Blue font-medium">
              Customizable profile
            </h3>
            <p className="text-sm text-Cool-gray">
              Custom theme on your profile
            </p>
          </div>
          <p className="text-sm text-Purplish-blue ">
            {isMonthly ? "+$2/mo" : "+$20/yr"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Addons;
