import React from "react";

// images
import Thanks from "../images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <img className="w-16 mb-8" src={Thanks} alt="thank-you-icon" />
      <h2 className="text-Marine-Blue font-bold text-2xl mb-2">Thank you!</h2>
      <p className="text-Cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Confirmation;
