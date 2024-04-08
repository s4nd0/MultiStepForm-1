import { useEffect, useState } from "react";

// components
import Footer from "./Components/Footer";
import StepsMobile from "./Components/StepsMobile";

// steps components
import PersonalInfo from "./Steps/PersonalInfo";
import SelectPlan from "./Steps/SelectPlan";
import Addons from "./Steps/Addons";
import Finish from "./Steps/Finish";
import Confirmation from "./Steps/Confirmation";
import StepsDesktop from "./Components/StepsDesktop";

function App() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  // step 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  // step 2
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(1);

  // step 3
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);

  // step 4

  useEffect(() => {
    if (step > 1) {
      if (!name.length > 0 || !email.includes("@") || !phone.length > 0) {
        setStep((previousStep) => (previousStep = 1));
        setError(true);
      }
    }
  }, [step]);

  return (
    <div className="m-0 p-0 flex flex-col ease-out duration-100 overflow-hidden min-h-screen bg-Magnolia-1">
      <header className="visible sm:hidden h-40 bg-cover">
        <StepsMobile step={step} />
      </header>
      <main className="flex-1 sm:flex sm:items-center sm:justify-center">
        <div className="bg-White shadow-lg rounded-md px-6 py-6 mx-4 -mt-16 sm:h-[600px] sm:grid sm:grid-cols-[3fr_5fr]">
          <div className="desktop-bg bg-cover p-4 hidden sm:block">
            <StepsDesktop step={step} />
          </div>
          <div className="block sm:flex flex-col justify-between sm:p-6">
            {step === 1 && (
              <PersonalInfo
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                error={error}
                setError={setError}
              />
            )}
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
            {step === 4 && !confirmed && (
              <Finish
                setStep={setStep}
                isMonthly={isMonthly}
                selectedPlan={selectedPlan}
                onlineService={onlineService}
                largerStorage={largerStorage}
                customizableProfile={customizableProfile}
              />
            )}
            <div className="hidden sm:block">
              {!confirmed && (
                <Footer
                  step={step}
                  setStep={setStep}
                  setConfirmed={setConfirmed}
                />
              )}
            </div>
            {confirmed && <Confirmation />}
          </div>
        </div>
      </main>
      {!confirmed && (
        <footer className="visible sm:hidden">
          <Footer step={step} setStep={setStep} setConfirmed={setConfirmed} />
        </footer>
      )}
    </div>
  );
}

export default App;
