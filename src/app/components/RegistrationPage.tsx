import React, { useState } from 'react';

export default function RegistrationPage() {
  const [type, setType] = useState<'learning' | 'earning' | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // এখানে আপনার ফর্ম সাবমিট লজিক বা Firebase কোড হবে
    setTimeout(() => {
      setIsLoading(false);
      alert("আপনার আবেদন সফলভাবে জমা হয়েছে! অ্যাডমিন যাচাই করে আপনাকে জানাবেন।");
    }, 2000);
  };

  return (
    <div className="registration-container p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#166534]">আমাদের প্ল্যাটফর্মে স্বাগতম</h2>
      
      <div className="flex gap-4 mb-8 justify-center">
        <button 
          className={`px-6 py-2 rounded-full font-semibold transition-all ${type === 'learning' ? 'bg-[#166534] text-white' : 'bg-gray-100 text-gray-600'}`} 
          onClick={() => setType('learning')}
        >
          শিখতে চাই
        </button>
        <button 
          className={`px-6 py-2 rounded-full font-semibold transition-all ${type === 'earning' ? 'bg-[#166534] text-white' : 'bg-gray-100 text-gray-600'}`} 
          onClick={() => setType('earning')}
        >
          উপার্জন করতে চাই
        </button>
      </div>

      {type === 'learning' && (
        <form className="space-y-4 animate-in fade-in duration-500" onSubmit={handleSubmit}>
          <input type="text" placeholder="নাম" className="border p-3 w-full rounded-lg" required />
          <input type="text" placeholder="পিতার নাম" className="border p-3 w-full rounded-lg" required />
          <input type="text" placeholder="ঠিকানা" className="border p-3 w-full rounded-lg" required />
          <select className="border p-3 w-full rounded-lg bg-white">
            <option>কোর্স নির্বাচন করুন</option>
            <option>Spoken English</option>
            <option>Digital Platform</option>
            <option>Basic Computer</option>
          </select>
          <button 
            disabled={isLoading} 
            className="bg-[#166534] text-white p-3 w-full rounded-lg font-bold hover:bg-[#14532d] disabled:bg-gray-400 transition-all"
          >
            {isLoading ? "জমা দেওয়া হচ্ছে..." : "আবেদন জমা দিন"}
          </button>
        </form>
      )}

      {type === 'earning' && (
        <form className="space-y-4 animate-in fade-in duration-500" onSubmit={handleSubmit}>
          <input type="text" placeholder="নাম" className="border p-3 w-full rounded-lg" required />
          <input type="text" placeholder="ফোন নম্বর" className="border p-3 w-full rounded-lg" required />
          <input type="text" placeholder="ঠিকানা" className="border p-3 w-full rounded-lg" required />
          <select className="border p-3 w-full rounded-lg bg-white">
            <option>কাজের ক্ষেত্র নির্বাচন করুন</option>
            <option>Data Entry</option>
            <option>Freelancing</option>
            <option>Corporate Training</option>
          </select>
          <button 
            disabled={isLoading} 
            className="bg-[#fbbf24] text-[#166534] p-3 w-full rounded-lg font-bold hover:bg-[#f59e0b] disabled:bg-gray-400 transition-all"
          >
            {isLoading ? "জমা দেওয়া হচ্ছে..." : "আবেদন জমা দিন"}
          </button>
        </form>
      )}
    </div>
  );
}