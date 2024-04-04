import { useState } from "react";

// components
import Footer from "./Components/Footer";
import StepsMobile from "./Components/StepsMobile";

// steps components
import PersonalInfo from "./Steps/PersonalInfo";
import SelectPlan from "./Steps/SelectPlan";
import Addons from "./Steps/Addons";
import Finish from "./Steps/Finish";

function App() {
  const [step, setStep] = useState(1);

  // step 1

  // step 2
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(1);

  // step 3
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  // step 4

  return (
    <div className="m-0 p-0 flex flex-col ease-out duration-100 overflow-hidden min-h-screen bg-Magnolia-1">
      <header className="visible sm:hidden h-40 bg-cover">
        <StepsMobile step={step} />
      </header>
      <main className="flex-1">
        <div className="bg-White shadow-lg rounded-md px-6 py-8 mx-4 -mt-16">
          {step === 1 && <PersonalInfo />}
          {step === 2 && (
            <SelectPlan
              isMonthly={isMonthly}
              setIsMonthly={setIsMonthly}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          )}
          {step === 3 && (
            <Addons
              isMonthly={isMonthly}
              onlineService={onlineService}
              setOnlineService={setOnlineService}
              largerStorage={largerStorage}
              setLargerStorage={setLargerStorage}
              customizableProfile={customizableProfile}
              setCustomizableProfile={setCustomizableProfile}
            />
          )}
          {step === 4 && <Finish />}
        </div>
      </main>
      <footer className="visible sm:hidden">
        <Footer step={step} setStep={setStep} />
      </footer>
    </div>
  );
}

export default App;
