import React from "react";

import CircleIcon from "./CircleIcon";

const StepsDesktop = ({ step }) => {
  return (
    <div className="flex flex-col gap-4 justify-center mt-8 px-4">
      <div className="flex flex-row gap-4 items-center">
        <CircleIcon value={1} active={step === 1 ? true : false} />
        <div className="flex flex-col">
          <p className="text-Cool-gray">STEP 1</p>
          <p className="text-White">YOUR INFO</p>
        </div>
      </div>

      <CircleIcon value={2} active={step === 2 ? true : false} />
      <CircleIcon value={3} active={step === 3 ? true : false} />
      <CircleIcon value={4} active={step === 4 ? true : false} />
    </div>
  );
};

export default StepsDesktop;
