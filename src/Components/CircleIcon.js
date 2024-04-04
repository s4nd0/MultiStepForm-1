import React from "react";

const CircleIcon = ({ value, active }) => {
  return (
    <span
      className={`rounded-full w-8 h-8 flex justify-center items-center border border-Light-gray text-White font-medium ${
        active && "text-Marine-Blue bg-Light-blue border-Light-blue"
      }`}
    >
      <p className={`${active ? "text-Marine-Blue" : "text-White"}`}>{value}</p>
    </span>
  );
};

export default CircleIcon;
