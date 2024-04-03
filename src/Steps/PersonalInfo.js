import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="text-Marine-Blue font-bold text-2xl mb-2">
        Personal info
      </h2>
      <p className="text-Cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <form className="mt-4">
        <label className="flex flex-col">
          <span className="text-Marine-Blue text-sm font-medium">Name</span>
          <input
            className="border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2"
            type="text"
            placeholder="e.g. Stephen King"
          />
        </label>
        <label className="flex flex-col mt-4">
          <span className="text-Marine-Blue text-sm font-medium">
            Email Address
          </span>
          <input
            className="border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label className="flex flex-col mt-4">
          <span className="text-Marine-Blue text-sm font-medium">
            Phone Number
          </span>
          <input
            className="border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2"
            type="number"
            placeholder="e.g. +1 234 567 890"
          />
        </label>
      </form>
    </div>
  );
};

export default PersonalInfo;
