// src/components/auth/ProfileForm.tsx
import { useState } from 'react';

export function ProfileForm({ onFinish }: { onFinish: () => void }) {
  const [name, setName] = useState("");

  const handleFinish = () => {
    // এখানে প্রোফাইল ডেটা সেভ করার লজিক থাকবে
    console.log("Profile Saved:", name);
    onFinish();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">আপনার প্রোফাইল সেটআপ</h2>
      <div className="mb-4">
        <label className="block text-gray-700">আপনার নাম</label>
        <input 
          type="text" 
          className="border p-3 w-full rounded-lg mt-1" 
          placeholder="সম্পূর্ণ নাম লিখুন"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button 
        onClick={handleFinish}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
      >
        সম্পন্ন করুন
      </button>
    </div>
  );
}