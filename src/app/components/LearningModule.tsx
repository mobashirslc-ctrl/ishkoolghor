// LearningModule.tsx
import { Lock, Unlock, Clock, Award, CheckCircle } from "lucide-react";

export const COURSES = [
  { id: 101, category: "Academic", title: "১ম-১০ম শ্রেণি সিলেবাস", duration: "৩ মাস", outcome: "একাডেমিক সার্টিফিকেট", emoji: "📚" },
  { id: 102, category: "Language", title: "স্পোকেন ইংলিশ", duration: "২ মাস", outcome: "সাবলীল কথোপকথন", emoji: "🗣️" },
  { id: 103, category: "Skill", title: "আধুনিক কৃষি ও খামার", duration: "১ মাস", outcome: "কৃষি কাজ ও উপার্জন", emoji: "🌾" },
  { id: 104, category: "Skill", title: "হস্তশিল্প ও সেলাই প্রশিক্ষণ", duration: "২ মাস", outcome: "পণ্য তৈরি ও বিক্রি", emoji: "🧵" },
  { id: 105, category: "Corporate", title: "অনলাইন সেলিং ও ডিজিটাল সার্ভিস", duration: "৩ সপ্তাহ", outcome: "ডিজিটাল মার্কেটিং", emoji: "💻" },
  { id: 106, category: "Social", title: "শিষ্টাচার, ম্যানার ও এথিকস", duration: "২ সপ্তাহ", outcome: "পেশাদার আচরণ", emoji: "🤝" },
];

export const CourseCard = ({ course, isCompleted, onStart }: any) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#dcfce7]">
    {/* এখানে আপনার কোর্সের ডিজাইনটি বসান */}
    <h4 className="font-black text-[#166534]">{course.title}</h4>
    <button onClick={onStart} className="mt-4 bg-[#166534] text-white p-2 rounded">
      {isCompleted ? "সম্পন্ন" : "শুরু করুন"}
    </button>
  </div>
);