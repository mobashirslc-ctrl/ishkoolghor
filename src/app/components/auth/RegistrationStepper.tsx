// src/components/auth/RegistrationStepper.tsx
import { useState } from 'react';
import { PhoneInput } from './PhoneInput';
import { OtpInput } from './OtpInput';
import { ProfileForm } from './ProfileForm';

export default function RegistrationStepper({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const nextStep = (stepData: any) => {
    setData({ ...data, ...stepData });
    setStep(s => s + 1);
  };

  return (
    <div className="registration-wrapper">
      {step === 1 && <PhoneInput onNext={nextStep} />}
      {step === 2 && <OtpInput onNext={nextStep} />}
      {step === 3 && <ProfileForm onFinish={onComplete} />}
    </div>
  );
}