import React from "react";
import { FormStep } from "../types";

interface FormProgressProps {
  currentStep: FormStep;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep }) => {
  const steps = ["personal", "address", "interests", "document", "review"];
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="w-full mb-8">
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-black transition-all duration-500 ease-in-out"
          style={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`text-xs font-mono uppercase tracking-wider ${
              index <= currentIndex ? "text-black" : "text-gray-400"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;
