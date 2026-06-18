import { useState } from 'react';

export const FORM_OPTIONS = {
  academicClasses: Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`),
  trainingTypes: ["Hostoshilpo", "Digital Platform", "Basic Computer", "Uddokta Training", "Krishikaj Training", "Online Earning", "Arabic Shikha"],
  earningTypes: ["Hostoshilpo", "Tuition", "Arabi Tutor", "Online Uddukta", "Digital Marketing", "Khabar Delivery", "Krishikaj", "Trainer"],
  genders: ["Male", "Female", "Other"]
};

export default function RegistrationForm({ track, onBack }: { track: string, onBack: () => void, onComplete: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="p-8 text-center bg-yellow-50 border border-yellow-200 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-yellow-800">আবেদন সফল হয়েছে!</h2>
        <p className="mt-2">আপনার আবেদনটি যাচাই-বাছাই করা হচ্ছে। আমাদের টিম যোগাযোগ করবে। অপেক্ষা করুন।</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto space-y-3">
      <h2 className="text-xl font-bold mb-4 capitalize text-center">{track} রেজিস্ট্রেশন</h2>
      
      <input required type="text" placeholder="পুরো নাম" className="w-full p-2 border rounded" />
      <input required type="text" placeholder="ঠিকানা" className="w-full p-2 border rounded" />
      <input required type="tel" placeholder="ফোন নম্বর" className="w-full p-2 border rounded" />

      {/* একাডেমিক ফিল্ড */}
      {track === 'academic' && (
        <>
          <input type="date" className="w-full p-2 border rounded" />
          <input type="text" placeholder="বাবার নাম" className="w-full p-2 border rounded" />
          <input type="text" placeholder="মায়ের নাম" className="w-full p-2 border rounded" />
          <select className="w-full p-2 border rounded">{FORM_OPTIONS.academicClasses.map(c => <option key={c}>{c}</option>)}</select>
        </>
      )}

      {/* ট্রেনিং ও আর্নিং ফিল্ড */}
      {(track === 'training' || track === 'earning') && (
        <>
          <select className="w-full p-2 border rounded">{FORM_OPTIONS.genders.map(g => <option key={g}>{g}</option>)}</select>
          <select className="w-full p-2 border rounded">
            {(track === 'training' ? FORM_OPTIONS.trainingTypes : FORM_OPTIONS.earningTypes).map(t => <option key={t}>{t}</option>)}
          </select>
        </>
      )}

      {/* আর্নিং স্পেশাল ফিল্ড */}
      {track === 'earning' && (
        <div className="border p-2 rounded text-sm text-gray-500">
          NID ছবি আপলোড করুন: <input type="file" className="mt-1" />
        </div>
      )}

      <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-bold">আবেদন করুন</button>
      <button type="button" onClick={onBack} className="w-full text-sm text-gray-500 underline">পিছনে যান</button>
    </form>
  );
}