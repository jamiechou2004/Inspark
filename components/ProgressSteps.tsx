import { Check } from "lucide-react";

type Step = {
  label: string;
  description: string;
};

export function ProgressSteps({
  steps,
  currentStep
}: {
  steps: Step[];
  currentStep: number;
}) {
  return (
    <div className="card card-padding progress-steps">
      {steps.map((step, index) => {
        const complete = index < currentStep;
        const active = index === currentStep;
        return (
          <div className="progress-step" key={step.label}>
            <span className={`step-dot${complete ? " complete" : ""}${active ? " active" : ""}`}>
              {complete ? <Check size={14} /> : index + 1}
            </span>
            <span>
              <strong>{step.label}</strong>
              <small>{step.description}</small>
            </span>
          </div>
        );
      })}
    </div>
  );
}
