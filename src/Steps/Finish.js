import React from "react";

const Finish = ({
  setStep,
  isMonthly,
  selectedPlan,
  onlineService,
  largerStorage,
  customizableProfile,
}) => {
  const handlePlanPrice = (selectedPlan, isMonthly) => {
    if (selectedPlan === 1) {
      return isMonthly ? "$9/mo" : "$90/yr";
    }
    if (selectedPlan === 2) {
      return isMonthly ? "$12/mo" : "$120/yr";
    }
    if (selectedPlan === 3) {
      return isMonthly ? "$15/mo" : "$150/yr";
    }
  };

  const handleTotalPrice = () => {
    let planPrice = 0;
    if (selectedPlan === 1) {
      planPrice = isMonthly ? 9 : 90;
    }
    if (selectedPlan === 2) {
      planPrice = isMonthly ? 12 : 120;
    }
    if (selectedPlan === 3) {
      planPrice = isMonthly ? 15 : 150;
    }
    if (onlineService) {
      planPrice += isMonthly ? 1 : 10;
    }
    if (largerStorage) {
      planPrice += isMonthly ? 2 : 20;
    }
    if (customizableProfile) {
      planPrice += isMonthly ? 2 : 20;
    }
    return planPrice;
  };

  return (
    <div>
      <h2 className="text-Marine-Blue font-bold text-2xl mb-2">Finishing up</h2>
      <p className="text-Cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col bg-Alabaster-1 p-4 mt-6 rounded-lg">
        <div className="flex flex-row justify-between items-center pb-3 border-b border-b-Light-gray">
          <div className="flex flex-col">
            <h3 className="text-Marine-Blue font-bold">Arcade (monthly)</h3>
            <p
              onClick={() => setStep(2)}
              className="text-Cool-gray underline font-medium hover:opacity-75 cursor-pointer"
            >
              Change
            </p>
          </div>
          <p className="text-Marine-Blue font-bold">
            {handlePlanPrice(selectedPlan, isMonthly)}
          </p>
        </div>
        <div className="flex flex-col">
          {onlineService && (
            <div className="flex flex-row justify-between items-center mt-3">
              <p className="text-Cool-gray">Online service</p>
              <p className="text-Marine-Blue">
                {isMonthly ? "+$1/mo" : "+$10/yr"}
              </p>
            </div>
          )}
          {largerStorage && (
            <div className="flex flex-row justify-between items-center mt-3">
              <p className="text-Cool-gray">Larger Storage</p>
              <p className="text-Marine-Blue">
                {isMonthly ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          )}
          {customizableProfile && (
            <div className="flex flex-row justify-between items-center mt-3">
              <p className="text-Cool-gray">Customizable profile</p>
              <p className="text-Marine-Blue">
                {isMonthly ? "+$2/mo" : "+$20/yr"}
              </p>
            </div>
          )}
          {!onlineService && !largerStorage && !customizableProfile && (
            <div className="flex flex-row justify-center items-center mt-3">
              <p className="text-Cool-gray">No add-ons</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-4 pt-6">
        <p className="text-Cool-gray">
          Total {isMonthly ? "(per month)" : "(per year)"}
        </p>
        <p className="text-Purplish-blue font-bold">
          +${handleTotalPrice()}/{isMonthly ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Finish;
