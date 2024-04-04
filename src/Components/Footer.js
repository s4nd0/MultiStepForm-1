import React from "react";

const Footer = ({ step, setStep, setConfirmed }) => {
  const handleIncreaseStep = () => {
    if (step < 4) setStep((previousStep) => (previousStep = previousStep + 1));
  };

  const handleDecreaseStep = () => {
    if (step > 1) setStep((previousStep) => (previousStep = previousStep - 1));
  };

  const handleConfirm = () => {
    if (step === 4) {
      setConfirmed(true);
    }
  };

  return (
    <div className="flex flex-row justify-between items-center p-4 bg-White">
      <div>
        {step > 1 && (
          <button
            onClick={handleDecreaseStep}
            className="text-Cool-gray font-medium hover:opacity-50"
          >
            Go back
          </button>
        )}
      </div>
      <div>
        {step !== 4 ? (
          <button
            onClick={handleIncreaseStep}
            className="text-White bg-Marine-Blue hover:opacity-70 py-2 px-4 rounded-md font-medium"
          >
            Next Step
          </button>
        ) : (
          <button
            onClick={handleConfirm}
            className="text-White bg-Purplish-blue hover:opacity-50 py-2 px-4 rounded-md font-medium"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
