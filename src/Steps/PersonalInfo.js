import React, { useState } from "react";

const PersonalInfo = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  error,
  setError,
}) => {
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
          <div className="flex flex-row justify-between items-center">
            <span className="text-Marine-Blue text-sm font-medium">Name</span>
            <p className="text-Strawberry-red text-xs font-bold">
              {error && !name.length > 0 && "This field is required"}
            </p>
          </div>
          <input
            className={`border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2 ${
              error && !name.length > 0 && "border-Strawberry-red"
            }`}
            type="text"
            placeholder="e.g. Stephen King"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className="flex flex-col mt-4">
          <div className="flex flex-row justify-between items-center">
            <span className="text-Marine-Blue text-sm font-medium">
              Email Address
            </span>
            <p className="text-Strawberry-red text-xs font-bold">
              {error && !email.includes("@") && "Invalid email address"}
            </p>
          </div>
          <input
            className={`border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2 ${
              error && !email.includes("@") && "border-Strawberry-red"
            }`}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="flex flex-col mt-4">
          <div className="flex flex-row justify-between items-center">
            <span className="text-Marine-Blue text-sm font-medium">
              Phone Number
            </span>
            <p className="text-Strawberry-red text-xs font-bold">
              {error && !phone.length > 0 && "This field is required"}
            </p>
          </div>
          <input
            className={`border text-Marine-Blue border-Light-gray rounded font-medium px-4 py-2 ${
              error && !phone.length > 0 && "border-Strawberry-red"
            }`}
            type="number"
            placeholder="e.g. +1 234 567 890"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label>
      </form>
    </div>
  );
};

export default PersonalInfo;
