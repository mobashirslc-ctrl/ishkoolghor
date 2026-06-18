import { useState } from 'react';

export function OtpInput({ onNext }: { onNext: (data: any) => void }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    // এখানে OTP ভেরিফিকেশন লজিক বসবে
    onNext({ otp: otp });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">OTP যাচাই করুন</h2>
      <input 
        type="text" 
        maxLength={6}
        className="border-2 border-green-500 p-3 w-40 text-center text-xl rounded-lg tracking-[0.5em]" 
        placeholder="------"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button 
        onClick={handleSubmit}
        className="mt-6 bg-green-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-800 transition"
      >
        যাচাই করুন
      </button>
    </div>
  );
}