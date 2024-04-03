import React from "react";
import CircleIcon from "./CircleIcon";

const StepsMobile = ({ step }) => {
  return (
    <div className="flex flex-row gap-4 justify-center mt-8">
      <CircleIcon value={1} active={step === 1 ? true : false} />
      <CircleIcon value={2} active={step === 2 ? true : false} />
      <CircleIcon value={3} active={step === 3 ? true : false} />
      <CircleIcon value={4} active={step === 4 ? true : false} />
    </div>
  );
};

export default StepsMobile;
