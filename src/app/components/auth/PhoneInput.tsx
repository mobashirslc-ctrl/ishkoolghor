// উদাহরণ: PhoneInput.tsx
export function PhoneInput({ onNext }: { onNext: (d: any) => void }) {
  return (
    <div className="p-6">
      <h2 className="text-xl">আপনার মোবাইল নম্বর দিন</h2>
      <input type="tel" className="border p-2 mt-2 w-full" placeholder="01XXXXXXXXX" />
      <button onClick={() => onNext({ phone: '017...' })} className="mt-4 bg-green-600 text-white p-2">পরবর্তী</button>
    </div>
  );
}