import React from "react";

const CircleIcon = ({ value, active }) => {
  return (
    <span
      className={`rounded-full w-8 h-8 flex justify-center items-center border border-Light-gray text-White font-medium ${
        active && "text-Marine-Blue bg-Pastel-blue border-Pastel-blue"
      }`}
    >
      <p className="">{value}</p>
    </span>
  );
};

export default CircleIcon;
