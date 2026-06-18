import { useState } from 'react';
import RegistrationForm from './RegistrationForm'; // আলাদা ফাইল থেকে ইম্পোর্ট

type Track = 'academic' | 'training' | 'earning' | null;

export default function RegistrationStepper({ onComplete }: { onComplete: () => void }) {
  const [track, setTrack] = useState<Track>(null);

  if (!track) {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-bold text-center">আপনি কী করতে চান?</h2>
        <button onClick={() => setTrack('academic')} className="w-full p-4 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-50">একাডেমিক কোর্স</button>
        <button onClick={() => setTrack('training')} className="w-full p-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-50">স্কিল ট্রেনিং</button>
        <button onClick={() => setTrack('earning')} className="w-full p-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-50">আর্নিং প্ল্যাটফর্ম</button>
      </div>
    );
  }

  return <RegistrationForm track={track} onBack={() => setTrack(null)} onComplete={onComplete} />;
}