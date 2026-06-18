import { useState } from "react";
import { COURSES, CourseCard } from "./components/LearningModule";
import RegistrationPage from "./components/RegistrationPage";
import {
  BookOpen,
  Briefcase,
  Home,
  Volume2,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Wallet,
  Users,
  ChevronRight,
  Camera,
  Phone,
  Upload,
  TrendingUp,
  Bell,
  GraduationCap,
  Coins,
  Target,
  Clock,
  MessageCircle,
  UserCheck,
} from "lucide-react";

type View = "landing" | "onboarding" | "dashboard" | "trainer";
type OnboardStep = "welcome" | "phone" | "otp" | "profile" | "choice";
type DashTab = "learn" | "earn" | "profile";

const GLOBAL_STYLES = `
  @keyframes confettiFall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
  @keyframes floatUp {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .float { animation: floatUp 3s ease-in-out infinite; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  * { font-family: 'Hind Siliguri', 'Baloo Da 2', sans-serif; }
`;

function ConfettiBurst({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-20px",
            backgroundColor: ["#16a34a", "#fbbf24", "#ef4444", "#3b82f6", "#a855f7"][i % 5],
            animation: `confettiFall ${1 + Math.random() * 2}s ${Math.random() * 0.5}s ease-in forwards`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [onboardStep, setOnboardStep] = useState<OnboardStep>("welcome");
  const [dashTab, setDashTab] = useState<DashTab>("learn");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [confetti, setConfetti] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  if (view === "onboarding") {
    return (
      <OnboardingFlow
        step={onboardStep}
        setStep={setOnboardStep}
        phone={phone}
        setPhone={setPhone}
        otp={otp}
        setOtp={setOtp}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        onComplete={() => setView("dashboard")}
        onBack={() => setView("landing")}
      />
    );
  }

  if (view === "dashboard") {
    return (
      <Dashboard
        tab={dashTab}
        setTab={setDashTab}
        completedLessons={completedLessons}
        setCompletedLessons={setCompletedLessons}
        appliedJobs={appliedJobs}
        setAppliedJobs={setAppliedJobs}
        onConfetti={triggerConfetti}
        onTrainer={() => setView("trainer")}
        onHome={() => setView("landing")}
        confetti={confetti}
      />
    );
  }

  if (view === "trainer") {
    return <TrainerDashboard onBack={() => setView("dashboard")} onHome={() => setView("landing")} />;
  }

  // --- LANDING PAGE ---
  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <style>{GLOBAL_STYLES}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#166534]/96 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#fbbf24] rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-[#166534]" />
            </div>
            <div>
              <div className="text-white font-black text-lg leading-none tracking-tight">শিখি</div>
              <div className="text-[#86efac] text-xs leading-none font-medium">ও কাজ করি</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#bbf7d0] font-medium">
            <a href="#how" className="hover:text-white transition-colors">কীভাবে কাজ করে</a>
            <a href="#skills" className="hover:text-white transition-colors">দক্ষতা</a>
            <button onClick={() => setView("trainer")} className="hover:text-white transition-colors">ট্রেইনার হোন</button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("dashboard")}
              className="hidden md:block text-[#bbf7d0] text-sm hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/10"
            >
              লগইন
            </button>
            <button
              onClick={() => { setView("onboarding"); setOnboardStep("welcome"); }}
              className="bg-[#fbbf24] text-[#166534] font-black text-sm px-5 py-2.5 rounded-full hover:bg-[#f59e0b] transition-all shadow-md hover:shadow-lg"
            >
              শুরু করুন →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#166534]">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1707811180403-c22b7ef06476?w=1400&h=900&fit=crop&auto=format')", opacity: 0.18 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#14532d]/80 via-[#166534]/60 to-[#15803d]/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#166534] to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fbbf24]/20 border border-[#fbbf24]/40 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse" />
              <span className="text-[#fbbf24] text-sm font-semibold">বাংলাদেশের সেরা দক্ষতা প্ল্যাটফর্ম</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              শিখুন,<br />
              <span className="text-[#fbbf24]">উপার্জন</span><br />
              করুন
            </h1>
            <p className="text-[#bbf7d0] text-xl leading-relaxed mb-10 max-w-md">
              গ্রামের মানুষের জন্য সহজ দক্ষতা প্রশিক্ষণ ও আয়ের সুযোগ। ভিডিও দেখুন, কাজ শিখুন, ঘরে বসেই আয় করুন।
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => { setView("onboarding"); setOnboardStep("welcome"); }} className="flex items-center gap-2.5 bg-[#fbbf24] text-[#166534] font-black text-xl px-8 py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-2xl hover:-translate-y-1">
                <Play className="w-6 h-6 fill-current" /> এখনই শুরু করুন
              </button>
            </div>
          </div>

          {/* Hero image stack */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96">
              <img src="https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=420&h=520&fit=crop&auto=format" alt="শিক্ষা" className="absolute top-0 right-0 w-72 h-80 object-cover rounded-3xl shadow-2xl border-4 border-[#4ade80]/20" />
              <img src="https://images.unsplash.com/photo-1572825587497-5ff6a8ff9746?w=280&h=320&fit=crop&auto=format" alt="মোবাইলে শিক্ষা" className="absolute bottom-0 left-0 w-52 h-64 object-cover rounded-3xl shadow-2xl border-4 border-[#fbbf24]/30 float" />
              <div className="absolute -top-4 left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl">
                <div className="text-3xl font-black text-[#166534]">৫০,০০০+</div>
                <div className="text-xs text-gray-500 font-medium">সফল শিক্ষার্থী</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#166534] mb-4">আমাদের সাথে যোগ দিন</h2>
            <p className="text-gray-600">শিক্ষার্থী হিসেবে দক্ষ হোন অথবা উপার্জনকারী হিসেবে কাজ শুরু করুন</p>
          </div>
          <div className="bg-[#f0fdf4] p-8 rounded-3xl border border-[#bbf7d0] shadow-sm">
            <RegistrationPage />
            <div className="mt-8 pt-6 border-t border-[#bbf7d0] text-center">
              <p className="text-sm text-gray-500 italic">
                * মনে রাখবেন: আবেদন জমা দেওয়ার পর আমাদের অ্যাডমিন আপনার তথ্য যাচাই করবেন। 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 72L1440 72L1440 24C1200 56 960 4 720 24C480 44 240 4 0 24L0 72Z" fill="#f0fdf4" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f0fdf4] py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { num: "৫০,০০০+", label: "শিক্ষার্থী", icon: Users, bg: "#dcfce7", color: "#16a34a" },
              { num: "২০০+", label: "দক্ষতা কোর্স", icon: BookOpen, bg: "#dbeafe", color: "#1d4ed8" },
              { num: "১৫,০০০+", label: "কাজের সুযোগ", icon: Briefcase, bg: "#fef3c7", color: "#d97706" },
              { num: "৯৮%", label: "সন্তুষ্টি", icon: Star, bg: "#fce7f3", color: "#db2777" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#dcfce7] hover:shadow-md transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: stat.bg }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-black text-[#166534]">{stat.num}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-[#166534] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">কীভাবে কাজ করে?</h2>
            <p className="text-[#86efac] text-xl">মাত্র ৩টি সহজ ধাপে শুরু করুন</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "০১",
                title: "নিবন্ধন করুন",
                desc: "ফোন নম্বর দিয়ে সহজেই অ্যাকাউন্ট তৈরি করুন। মাত্র ২ মিনিট লাগবে।",
                icon: Phone,
                img: "https://images.unsplash.com/photo-1572825587497-5ff6a8ff9746?w=360&h=240&fit=crop&auto=format",
              },
              {
                step: "০২",
                title: "দক্ষতা শিখুন",
                desc: "ভিডিও এবং ছবি দেখে সহজ ভাষায় নতুন দক্ষতা অর্জন করুন।",
                icon: BookOpen,
                img: "https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=360&h=240&fit=crop&auto=format",
              },
              {
                step: "০৩",
                title: "আয় করুন",
                desc: "আপনার দক্ষতা দিয়ে কাজ করুন এবং সরাসরি মোবাইলে টাকা পান।",
                icon: Coins,
                img: "https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=360&h=240&fit=crop&auto=format",
              },
            ].map((item, i) => (
              <div key={i} className="group bg-white/10 backdrop-blur rounded-3xl overflow-hidden border border-white/10 hover:border-[#4ade80]/40 transition-all hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#166534] via-[#166534]/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#fbbf24] text-[#166534] font-black text-2xl px-4 py-1.5 rounded-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-[#4ade80]/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#4ade80]" />
                    </div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <button className="ml-auto p-1.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Volume2 className="w-4 h-4 text-[#4ade80]" />
                    </button>
                  </div>
                  <p className="text-[#86efac] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="skills" className="bg-[#f0fdf4] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#166534] mb-4">আপনার জন্য কী আছে?</h2>
            <p className="text-gray-500 text-xl">শেখা থেকে আয় — একটি প্ল্যাটফর্মে সব</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Learn */}
            <div className="bg-gradient-to-br from-[#166534] to-[#14532d] rounded-3xl overflow-hidden group relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#4ade80]/10 rounded-full -translate-y-1/4 translate-x-1/4" />
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-[#fbbf24] rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-8 h-8 text-[#166534]" />
                  </div>
                  <div>
                    <div className="text-white font-black text-3xl">শিখি</div>
                    <div className="text-[#86efac] text-sm font-medium">Learn</div>
                  </div>
                  <button className="ml-auto bg-white/10 p-2.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Volume2 className="w-5 h-5 text-[#4ade80]" />
                  </button>
                </div>
                <ul className="space-y-3 mb-6">
                  {["ভিডিও ও ছবি দিয়ে সহজ পাঠ", "বাংলায় অডিও ব্যাখ্যা", "আজকের লেসন প্ল্যান", "প্রোগ্রেস ট্র্যাকার"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#bbf7d0] font-medium">
                      <CheckCircle className="w-5 h-5 text-[#4ade80] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-2">
                  {["সেলাই", "কৃষি", "রান্না", "কম্পিউটার", "হস্তশিল্প", "পশুপালন"].map((skill) => (
                    <div key={skill} className="bg-white/10 text-[#bbf7d0] text-sm text-center py-2 px-3 rounded-xl font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=480&h=180&fit=crop&auto=format"
                alt="দক্ষতা শিক্ষা"
                className="w-full h-36 object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
            </div>

            {/* Earn */}
            <div className="bg-gradient-to-br from-[#78350f] to-[#92400e] rounded-3xl overflow-hidden group relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fbbf24]/10 rounded-full -translate-y-1/4 translate-x-1/4" />
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-[#fbbf24] rounded-2xl flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-[#78350f]" />
                  </div>
                  <div>
                    <div className="text-white font-black text-3xl">কাজ</div>
                    <div className="text-[#fde68a] text-sm font-medium">Earn</div>
                  </div>
                  <button className="ml-auto bg-white/10 p-2.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Volume2 className="w-5 h-5 text-[#fbbf24]" />
                  </button>
                </div>
                <ul className="space-y-3 mb-6">
                  {["দক্ষতা অনুযায়ী কাজ", "অডিও নির্দেশনা", "ঘরে বসেই কাজ করুন", "সরাসরি মোবাইল পেমেন্ট"].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[#fde68a] font-medium">
                      <CheckCircle className="w-5 h-5 text-[#fbbf24] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { job: "হাতের কাজ", pay: "৳৩০০–৫০০/দিন" },
                    { job: "ডেটা এন্ট্রি", pay: "৳২০০–৪০০/দিন" },
                    { job: "কৃষি সহায়তা", pay: "৳৪০০–৬০০/দিন" },
                    { job: "অনলাইন বিক্রয়", pay: "৳১০০০+/মাস" },
                  ].map((item) => (
                    <div key={item.job} className="bg-white/10 p-3 rounded-xl">
                      <div className="text-white text-sm font-bold">{item.job}</div>
                      <div className="text-[#fbbf24] text-xs mt-0.5 font-medium">{item.pay}</div>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=480&h=180&fit=crop&auto=format"
                alt="আয়ের সুযোগ"
                className="w-full h-36 object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
            </div>
          </div>

          {/* Trainer CTA */}
          <div className="bg-gradient-to-r from-[#1e40af] to-[#2563eb] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl">ট্রেইনার হোন</div>
                  <div className="text-blue-200 text-sm font-medium">Become a Trainer</div>
                </div>
                <button className="ml-auto bg-white/10 p-2 rounded-xl hover:bg-white/20 transition-colors">
                  <Volume2 className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-blue-100 text-lg mb-4">আপনার দক্ষতা অন্যদের শেখান এবং প্রতি মাসে অতিরিক্ত আয় করুন।</p>
              <div className="flex flex-wrap gap-6 text-white text-sm font-medium">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-200" />
                  গড় মাসিক আয়: ৳১৫,০০০+
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-200" />
                  ৫০০+ সক্রিয় ট্রেইনার
                </div>
              </div>
            </div>
            <button
              onClick={() => setView("trainer")}
              className="shrink-0 bg-[#fbbf24] text-[#1e40af] font-black text-xl px-10 py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              আবেদন করুন
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Image gallery row */}
      <section className="bg-[#14532d] py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-4xl font-black text-white mb-3">আমাদের সম্প্রদায়</h2>
          <p className="text-[#86efac]">সারা বাংলাদেশ থেকে হাজার হাজার মানুষ শিখছেন ও উপার্জন করছেন</p>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {[
            { src: "https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=300&h=360&fit=crop&auto=format", cap: "সেলাই প্রশিক্ষণ" },
            { src: "https://images.unsplash.com/photo-1707811180403-c22b7ef06476?w=400&h=300&fit=crop&auto=format", cap: "গ্রুপ লার্নিং" },
            { src: "https://images.unsplash.com/photo-1572825587497-5ff6a8ff9746?w=260&h=360&fit=crop&auto=format", cap: "মোবাইল শিক্ষা" },
            { src: "https://images.unsplash.com/photo-1609252509229-364936a1d1a2?w=400&h=280&fit=crop&auto=format", cap: "সম্প্রদায় উন্নয়ন" },
            { src: "https://images.unsplash.com/photo-1560447933-5aba24d25f75?w=300&h=360&fit=crop&auto=format", cap: "দলগত কাজ" },
          ].map((img, i) => (
            <div key={i} className="relative shrink-0 rounded-2xl overflow-hidden group" style={{ width: i % 2 === 0 ? "240px" : "300px", height: "280px" }}>
              <img src={img.src} alt={img.cap} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14532d] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-sm font-bold">{img.cap}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f0fdf4] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#166534] mb-4">তারা কী বলছেন?</h2>
            <p className="text-gray-500 text-xl">আমাদের সফল শিক্ষার্থীদের গল্প</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "রহিমা বেগম",
                location: "ময়মনসিংহ",
                text: "এই প্ল্যাটফর্মে সেলাই শিখে এখন মাসে ৮,০০০ টাকা আয় করি। আমার সংসার অনেক সুন্দর চলছে।",
                rating: 5,
                skill: "সেলাই কোর্স",
                img: "https://images.unsplash.com/photo-1591202226596-003d2f11b544?w=100&h=100&fit=crop&auto=format",
              },
              {
                name: "করিম মিয়া",
                location: "রাজশাহী",
                text: "আমি পড়তে জানতাম না বেশি, কিন্তু ভিডিও দেখে কৃষি পদ্ধতি শিখে এখন ফসল দ্বিগুণ হয়েছে।",
                rating: 5,
                skill: "আধুনিক কৃষি",
                img: "https://images.unsplash.com/photo-1572079757625-132046cc8973?w=100&h=100&fit=crop&auto=format",
              },
              {
                name: "সুমাইয়া আক্তার",
                location: "সিলেট",
                text: "ট্রেইনার হিসেবে এখন ৫০ জনের বেশি স্টুডেন্ট আছে। মাসে ২০,০০০ টাকা পর্যন্ত আয় হয়।",
                rating: 5,
                skill: "ট্রেইনার",
                img: "https://images.unsplash.com/photo-1560447933-5aba24d25f75?w=100&h=100&fit=crop&auto=format",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#dcfce7] hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#fbbf24] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#dcfce7] shrink-0 border-2 border-[#86efac]">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[#166534] font-black">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.location} · {t.skill}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fbbf24] py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-[#166534] mb-6 leading-tight">
            আজই শুরু করুন!
          </h2>
          <p className="text-[#166534]/70 text-xl mb-12 font-medium">
            বিনামূল্যে নিবন্ধন করুন। আপনার ভবিষ্যৎ আপনার হাতে।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { setView("onboarding"); setOnboardStep("welcome"); }}
              className="flex items-center justify-center gap-3 bg-[#166534] text-white font-black text-xl px-10 py-5 rounded-2xl hover:bg-[#14532d] transition-all shadow-xl hover:-translate-y-1"
            >
              <Play className="w-6 h-6 fill-current" />
              এখনই শুরু করুন
            </button>
            <button className="flex items-center justify-center gap-3 bg-white text-[#166534] font-black text-xl px-10 py-5 rounded-2xl hover:bg-[#f0fdf4] transition-all shadow-md">
              <Volume2 className="w-6 h-6" />
              আরও জানুন
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#052e16] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#fbbf24] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#166534]" />
              </div>
              <div>
                <div className="text-white font-black text-xl">শিখি ও কাজ করি</div>
                <div className="text-[#4ade80] text-xs font-medium">বাংলাদেশের সেরা দক্ষতা প্ল্যাটফর্ম</div>
              </div>
            </div>
            <div className="text-[#4ade80] text-sm text-center font-medium">
              © ২০২৪ শিখি ও কাজ করি। সর্বস্বত্ব সংরক্ষিত।
            </div>
            <div className="flex gap-5 text-[#86efac] text-sm font-medium">
              {["যোগাযোগ", "গোপনীয়তা", "শর্তাবলী"].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── ONBOARDING ───────────────────────────────────────────────────────────────
function OnboardingFlow({ step, setStep, phone, setPhone, otp, setOtp, userChoice, setUserChoice, onComplete, onBack }: {
  step: OnboardStep; setStep: (s: OnboardStep) => void;
  phone: string; setPhone: (v: string) => void;
  otp: string[]; setOtp: (v: string[]) => void;
  userChoice: string | null; setUserChoice: (v: string) => void;
  onComplete: () => void; onBack: () => void;
}) {
  const steps: OnboardStep[] = ["welcome", "phone", "otp", "profile", "choice"];
  const idx = steps.indexOf(step);
  const progress = (idx / (steps.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-[#166534] flex flex-col items-center justify-center p-4">
      <style>{GLOBAL_STYLES}</style>

      <button
        onClick={step === "welcome" ? onBack : () => setStep(steps[idx - 1])}
        className="absolute top-4 left-4 flex items-center gap-1 text-[#86efac] text-sm hover:text-white transition-colors"
      >
        <ChevronRight className="w-5 h-5 rotate-180" /> পেছনে
      </button>

      {step !== "welcome" && (
        <div className="w-full max-w-sm mb-8">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-[#fbbf24] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-[#86efac] text-sm mt-2 text-center font-medium">{idx} / {steps.length - 1}</div>
        </div>
      )}

      <div className="w-full max-w-sm">
        {step === "welcome" && (
          <div className="text-center">
            <div className="w-28 h-28 bg-[#fbbf24] rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <GraduationCap className="w-16 h-16 text-[#166534]" />
            </div>
            <h1 className="text-5xl font-black text-white mb-4">স্বাগতম!</h1>
            <p className="text-[#bbf7d0] text-lg mb-2 font-medium">শিখি ও কাজ করি প্ল্যাটফর্মে আপনাকে স্বাগত জানাই।</p>
            <p className="text-[#86efac] mb-8">এখানে আপনি নতুন দক্ষতা শিখবেন এবং আয় করবেন।</p>

            <div className="bg-white/10 rounded-3xl overflow-hidden mb-8 border border-white/20">
              <div className="aspect-video flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 bg-[#fbbf24]/20 rounded-full flex items-center justify-center border-2 border-[#fbbf24]/40 hover:bg-[#fbbf24]/30 transition-colors cursor-pointer">
                  <Play className="w-10 h-10 text-[#fbbf24] fill-current ml-1" />
                </div>
                <p className="text-[#86efac] text-sm font-medium">পরিচিতি ভিডিও দেখুন</p>
                <button className="flex items-center gap-1.5 text-[#4ade80] text-sm hover:text-white transition-colors">
                  <Volume2 className="w-4 h-4" /> শুনুন
                </button>
              </div>
            </div>

            <button
              onClick={() => setStep("phone")}
              className="w-full bg-[#fbbf24] text-[#166534] font-black text-2xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-xl flex items-center justify-center gap-3"
            >
              শুরু করুন (Go)
              <ArrowRight className="w-7 h-7" />
            </button>
          </div>
        )}

        {step === "phone" && (
          <div>
            <div className="text-center mb-8">
              <div className="w-18 h-18 w-[72px] h-[72px] bg-[#fbbf24]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#fbbf24]/30">
                <Phone className="w-9 h-9 text-[#fbbf24]" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2">ফোন নম্বর দিন</h2>
              <p className="text-[#86efac] font-medium">আপনার মোবাইলে একটি কোড পাঠানো হবে</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 mb-4 border-2 border-white/20 focus-within:border-[#4ade80] transition-colors">
              <div className="text-[#86efac] text-sm mb-2 font-medium">বাংলাদেশ +৮৮০</div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="০১XXXXXXXXX"
                className="w-full bg-transparent text-white text-3xl font-black placeholder-white/25 outline-none"
              />
            </div>
            <button className="w-full bg-white/10 text-[#4ade80] text-sm py-2.5 rounded-xl mb-6 flex items-center justify-center gap-2 hover:bg-white/20 transition-colors font-medium">
              <Volume2 className="w-4 h-4" /> নির্দেশনা শুনুন
            </button>
            <button
              onClick={() => setStep("otp")}
              disabled={phone.length < 11}
              className="w-full bg-[#fbbf24] text-[#166534] font-black text-2xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-xl disabled:opacity-40 disabled:cursor-not-allowed"
            >
              কোড পাঠান →
            </button>
          </div>
        )}

        {step === "otp" && (
          <div>
            <div className="text-center mb-8">
              <div className="w-[72px] h-[72px] bg-[#fbbf24]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#fbbf24]/30">
                <MessageCircle className="w-9 h-9 text-[#fbbf24]" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2">OTP কোড</h2>
              <p className="text-[#86efac] font-medium">{phone || "01XXXXXXXXX"} নম্বরে কোড গেছে</p>
            </div>
            <div className="flex gap-2 mb-8 justify-center">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const next = [...otp];
                    next[i] = e.target.value;
                    setOtp(next);
                  }}
                  className="w-12 h-14 text-center text-2xl font-black text-white bg-white/10 border-2 border-white/20 rounded-xl outline-none focus:border-[#4ade80] transition-colors"
                />
              ))}
            </div>
            <button
              onClick={() => setStep("profile")}
              className="w-full bg-[#fbbf24] text-[#166534] font-black text-2xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-xl"
            >
              যাচাই করুন ✓
            </button>
            <button className="w-full text-[#86efac] text-sm py-3 hover:text-white transition-colors font-medium">
              আবার কোড পাঠান
            </button>
          </div>
        )}

        {step === "profile" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">আপনার প্রোফাইল</h2>
              <p className="text-[#86efac] font-medium">আপনার ছবি এবং নাম দিন</p>
            </div>
            <div className="flex flex-col items-center gap-5 mb-7">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-[#4ade80]/40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1591202226596-003d2f11b544?w=200&h=200&fit=crop&auto=format"
                    alt="প্রোফাইল"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#fbbf24] rounded-full flex items-center justify-center shadow-lg hover:bg-[#f59e0b] transition-colors">
                  <Camera className="w-5 h-5 text-[#166634]" />
                </button>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-white/10 text-[#bbf7d0] text-sm px-4 py-2.5 rounded-xl hover:bg-white/20 transition-colors font-medium">
                  <Camera className="w-4 h-4" /> ছবি তুলুন
                </button>
                <button className="flex items-center gap-2 bg-white/10 text-[#bbf7d0] text-sm px-4 py-2.5 rounded-xl hover:bg-white/20 transition-colors font-medium">
                  <Upload className="w-4 h-4" /> গ্যালারি
                </button>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-5 border-2 border-white/20 focus-within:border-[#4ade80] transition-colors mb-6">
              <div className="text-[#86efac] text-sm mb-2 font-medium">আপনার নাম</div>
              <input
                type="text"
                placeholder="নাম লিখুন"
                className="w-full bg-transparent text-white text-2xl font-black placeholder-white/25 outline-none"
              />
            </div>
            <button
              onClick={() => setStep("choice")}
              className="w-full bg-[#fbbf24] text-[#166534] font-black text-2xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-xl"
            >
              পরবর্তী →
            </button>
          </div>
        )}

        {step === "choice" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">আপনি কি চান?</h2>
              <p className="text-[#86efac] font-medium">আপনার লক্ষ্য বেছে নিন</p>
              <button className="mt-2 flex items-center gap-1.5 text-[#4ade80] text-sm mx-auto hover:text-white transition-colors">
                <Volume2 className="w-4 h-4" /> শুনুন
              </button>
            </div>
            <div className="space-y-4 mb-8">
              {[
                { id: "learn", icon: BookOpen, label: "শিখতে চাই", sub: "Learn", desc: "নতুন দক্ষতা অর্জন করতে চাই", accent: "#4ade80" },
                { id: "earn", icon: Briefcase, label: "কাজ করতে চাই", sub: "Earn", desc: "কাজ করে আয় করতে চাই", accent: "#fbbf24" },
                { id: "both", icon: Target, label: "দুটিই চাই", sub: "Learn & Earn", desc: "শিখতে এবং আয় করতে চাই", accent: "#93c5fd" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setUserChoice(opt.id)}
                  className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${
                    userChoice === opt.id
                      ? "border-[#fbbf24] bg-[#fbbf24]/15"
                      : "border-white/20 bg-white/8 hover:border-white/40"
                  }`}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white/10">
                    <opt.icon className="w-9 h-9" style={{ color: opt.accent }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-black text-xl">{opt.label}</div>
                    <div className="text-[#86efac] text-sm font-medium">{opt.sub}</div>
                    <div className="text-[#bbf7d0] text-sm mt-0.5">{opt.desc}</div>
                  </div>
                  {userChoice === opt.id && (
                    <CheckCircle className="w-7 h-7 text-[#fbbf24] shrink-0" />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={onComplete}
              disabled={!userChoice}
              className="w-full bg-[#fbbf24] text-[#166534] font-black text-2xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-xl disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ড্যাশবোর্ডে যান →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Dashboard({ 
  tab, setTab, completedLessons, setCompletedLessons, 
  appliedJobs, setAppliedJobs, onConfetti, onTrainer, onHome, confetti,
  isEligible, setIsEligible // নতুন দুটি প্রপস এখানে যোগ হবে
}: {
  tab: DashTab; 
  setTab: (t: DashTab) => void;
  completedLessons: number[]; 
  setCompletedLessons: (fn: (p: number[]) => number[]) => void;
  appliedJobs: number[]; 
  setAppliedJobs: (fn: (p: number[]) => number[]) => void;
  onConfetti: () => void; 
  onTrainer: () => void; 
  onHome: () => void; 
  confetti: boolean;
  isEligible: boolean; // নতুন টাইপ
  setIsEligible: (val: boolean) => void; // নতুন টাইপ
}) {
  // কোর্স আইডিগুলোর উপর ভিত্তি করে প্রোগ্রেস ক্যালকুলেশন
  const progress = Math.round((completedLessons.length / 6) * 100); // COURSES এ ৬টি কোর্স থাকায় ৬ দিয়ে ভাগ করলাম
  
  // ... আপনার বাকি কোড
  const lessons = [
    { id: 1, title: "সেলাইয়ের প্রাথমিক ধারণা", duration: "১৫ মিনিট", emoji: "🧵", level: "সহজ" },
    { id: 2, title: "হাতের কাজ: মৌলিক প্যাটার্ন", duration: "২০ মিনিট", emoji: "🎨", level: "সহজ" },
    { id: 3, title: "ব্যবসার মূল ধারণা", duration: "১২ মিনিট", emoji: "💼", level: "মাঝারি" },
    { id: 4, title: "অনলাইনে পণ্য বিক্রি", duration: "২৫ মিনিট", emoji: "📱", level: "মাঝারি" },
    { id: 5, title: "আধুনিক কৃষি পদ্ধতি", duration: "১৮ মিনিট", emoji: "🌾", level: "সহজ" },
  ];

  const jobs = [
    { id: 1, title: "কাপড়ের ডিজাইন কাজ", pay: "৳৪০০/দিন", location: "ঢাকা (অনলাইন)", skills: ["সেলাই", "ডিজাইন"], urgent: true },
    { id: 2, title: "কৃষি সহায়তা কর্মী", pay: "৳৫০০/দিন", location: "ময়মনসিংহ", skills: ["কৃষি"], urgent: false },
    { id: 3, title: "ডেটা এন্ট্রি অপারেটর", pay: "৳৩০০/দিন", location: "যেকোনো জায়গা", skills: ["কম্পিউটার"], urgent: false },
    { id: 4, title: "হস্তশিল্প নির্মাতা", pay: "৳৩৫০/দিন", location: "চট্টগ্রাম (অনলাইন)", skills: ["হস্তশিল্প"], urgent: true },
  ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] pb-24">
      <style>{GLOBAL_STYLES}</style>
      <ConfettiBurst active={confetti} />

      {/* Header */}
      <div className="bg-[#166534] px-4 pt-12 pb-6">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[#86efac] text-sm font-medium">শুভ সকাল! 👋</div>
              <div className="text-white font-black text-2xl">রহিমা বেগম</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors relative">
                <Bell className="w-5 h-5 text-[#4ade80]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#fbbf24] rounded-full" />
              </button>
              <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-[#4ade80]/40">
                <img src="https://images.unsplash.com/photo-1591202226596-003d2f11b544?w=88&h=88&fit=crop&auto=format" alt="প্রোফাইল" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-4 border border-white/10">
            <div className="relative w-16 h-16 shrink-0">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
                <circle cx="32" cy="32" r="26" fill="none" stroke="#fbbf24" strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 26}`}
                  strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
                  strokeLinecap="round" className="transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-sm">{progress}%</div>
            </div>
            <div className="flex-1">
              <div className="text-white font-bold">আজকের লক্ষ্য</div>
              <div className="text-[#86efac] text-sm">{completedLessons.length}/৫ লেসন সম্পন্ন</div>
              <div className="text-[#fbbf24] text-xs mt-1 font-medium">+১৫০ পয়েন্ট অপেক্ষা করছে!</div>
            </div>
            <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <Volume2 className="w-5 h-5 text-[#4ade80]" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Learn Tab */}
        {tab === "learn" && (
  <div className="space-y-6">
    <div className="mb-2">
      <h3 className="text-[#166534] font-black text-2xl">শিখার বিষয়সমূহ</h3>
      <p className="text-gray-500 text-sm">নিচের যেকোনো একটি কোর্স শেষ করুন এবং কাজের জন্য নিজেকে যোগ্য করুন।</p>
    </div>

    {COURSES.map((course) => {
      // এখানে চেক করছি কোর্সটি অলরেডি সম্পন্ন কি না
      const isCompleted = completedLessons.includes(course.id);
      
      return (
        <div
          key={course.id}
          className={`bg-white rounded-2xl p-5 shadow-sm border transition-all ${
            isCompleted ? "border-[#4ade80] bg-[#f0fdf4]" : "border-[#dcfce7] hover:shadow-md"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#f0fdf4] flex items-center justify-center text-4xl border border-[#dcfce7] shrink-0">
              {course.emoji}
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#16a34a] uppercase tracking-wider">{course.category}</div>
              <h4 className="font-black text-[#166534] text-lg leading-tight mt-0.5">{course.title}</h4>
              
              <div className="flex items-center gap-4 mt-3">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {course.duration}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> {course.outcome}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#f0fdf4]">
            {isCompleted ? (
              <div className="w-full bg-[#dcfce7] text-[#16a34a] font-black text-center py-3 rounded-xl flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" /> সম্পন্ন হয়েছে (যোগ্য)
              </div>
            ) : (
              <button
                onClick={() => {
                  // কোর্স শেষ করার লজিক
                  setCompletedLessons((prev) => [...prev, course.id]);
                  // সব কোর্স শেষ হলে বা নির্দিষ্ট কোর্স শেষ হলে এলিজিবল করা
                  setIsEligible(true); 
                  onConfetti();
                }}
                className="w-full bg-[#166534] text-white font-black py-3 rounded-xl hover:bg-[#14532d] transition-all shadow-md"
              >
                কোর্স শুরু করুন →
              </button>
            )}
          </div>
        </div>
      );
    })}
  </div>
)}
        {/* Earn Tab */}
        {tab === "earn" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[#166534] font-black text-2xl">কাজের তালিকা</h3>
              <span className="text-sm text-gray-500 font-medium">{jobs.length}টি উপলব্ধ</span>
            </div>
            {jobs.map((job) => {
              const applied = appliedJobs.includes(job.id);
              return (
                <div key={job.id} className="bg-white rounded-2xl p-5 shadow-sm border border-[#dcfce7] hover:border-[#86efac] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {job.urgent && <span className="text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">জরুরি</span>}
                      </div>
                      <h4 className="font-black text-[#166534] text-lg leading-tight">{job.title}</h4>
                      <div className="text-gray-400 text-sm mt-1 font-medium">{job.location}</div>
                    </div>
                    <div className="text-[#16a34a] font-black text-xl shrink-0">{job.pay}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((s) => (
                      <span key={s} className="bg-[#dcfce7] text-[#16a34a] text-xs font-semibold px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 bg-[#f0fdf4] text-[#16a34a] text-sm px-3 py-2 rounded-xl hover:bg-[#dcfce7] transition-colors font-medium">
                      <Volume2 className="w-4 h-4" /> শুনুন
                    </button>
                    <button
                      onClick={() => {
                        if (!applied) {
                          setAppliedJobs((prev) => [...prev, job.id]);
                          onConfetti();
                        }
                      }}
                      className={`flex-1 font-black py-2.5 rounded-xl transition-all text-sm ${applied ? "bg-[#4ade80] text-[#166534] cursor-default" : "bg-[#166534] text-white hover:bg-[#14532d]"}`}
                    >
                      {applied ? "✓ আবেদন করা হয়েছে" : "Apply করুন →"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Profile Tab */}
        {tab === "profile" && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#166534] to-[#14532d] rounded-3xl p-6 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-4 border-[#4ade80]/40">
                <img src="https://images.unsplash.com/photo-1591202226596-003d2f11b544?w=192&h=192&fit=crop&auto=format" alt="প্রোফাইল" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-black text-2xl">রহিমা বেগম</div>
              <div className="text-[#86efac] text-sm mb-5 font-medium">ময়মনসিংহ, বাংলাদেশ</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: completedLessons.length, label: "লেসন" },
                  { val: appliedJobs.length, label: "কাজ" },
                  { val: "৳২,৪৫০", label: "আয়" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl py-2.5">
                    <div className="text-white font-black text-xl">{s.val}</div>
                    <div className="text-[#86efac] text-xs font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#dcfce7]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-[#16a34a]" />
                  <span className="font-black text-[#166534] text-lg">ওয়ালেট</span>
                </div>
                <button className="p-1.5 bg-[#f0fdf4] rounded-lg hover:bg-[#dcfce7] transition-colors">
                  <Volume2 className="w-4 h-4 text-[#16a34a]" />
                </button>
              </div>
              <div className="text-4xl font-black text-[#166534] mb-1">৳২,৪৫০</div>
              <div className="text-gray-400 text-sm mb-5 font-medium">মোট আয়</div>
              <button className="w-full bg-[#fbbf24] text-[#166534] font-black py-3.5 rounded-xl hover:bg-[#f59e0b] transition-colors text-lg">
                ক্যাশআউট করুন →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#dcfce7]">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#16a34a]" />
                <span className="font-black text-[#166534] text-lg">ব্যাজ ও অর্জন</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "⭐", label: "শিক্ষার্থী", earned: true },
                  { icon: "🏆", label: "দ্রুত শিক্ষার্থী", earned: completedLessons.length >= 3 },
                  { icon: "💼", label: "কর্মী", earned: appliedJobs.length >= 1 },
                  { icon: "🎓", label: "বিশেষজ্ঞ", earned: false },
                ].map((b) => (
                  <div key={b.label} className={`rounded-xl p-2.5 text-center transition-all ${b.earned ? "bg-[#dcfce7]" : "bg-gray-100 opacity-40"}`}>
                    <div className="text-2xl mb-1">{b.icon}</div>
                    <div className="text-xs text-[#166634] font-bold leading-tight">{b.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onTrainer}
              className="w-full bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white font-black text-xl py-5 rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg"
            >
              <UserCheck className="w-6 h-6" />
              Become a Trainer
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onHome}
              className="w-full bg-white border-2 border-[#dcfce7] text-[#166534] font-bold py-3.5 rounded-2xl hover:border-[#86efac] transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" /> হোমে ফিরুন
            </button>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-[#dcfce7] px-4 py-3 z-30">
        <div className="max-w-lg mx-auto flex items-center justify-around">
          {([
            { id: "learn", icon: BookOpen, label: "শিখি" },
            { id: "earn", icon: Briefcase, label: "কাজ" },
            { id: "profile", icon: Home, label: "নিজের ঘর" },
          ] as { id: DashTab; icon: typeof BookOpen; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-col items-center gap-1 px-6 py-1 rounded-xl transition-all ${tab === t.id ? "text-[#166534]" : "text-gray-400 hover:text-gray-600"}`}
            >
              <div className={`p-2 rounded-xl transition-all ${tab === t.id ? "bg-[#dcfce7]" : ""}`}>
                <t.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TRAINER DASHBOARD ────────────────────────────────────────────────────────
function TrainerDashboard({ onBack, onHome }: { onBack: () => void; onHome: () => void }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#eff6ff] pb-24">
      <style>{GLOBAL_STYLES}</style>

      <div className="bg-gradient-to-br from-[#1e40af] to-[#2563eb] px-4 pt-12 pb-8">
        <div className="max-w-lg mx-auto">
          <button onClick={onBack} className="flex items-center gap-1 text-blue-200 text-sm mb-5 hover:text-white transition-colors font-medium">
            <ChevronRight className="w-4 h-4 rotate-180" /> পেছনে যান
          </button>
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-blue-200 text-sm font-medium">ট্রেইনার প্যানেল</div>
              <div className="text-white font-black text-3xl">সুমাইয়া আক্তার</div>
            </div>
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-300">
              <img src="https://images.unsplash.com/photo-1591202226596-003d2f11b544?w=112&h=112&fit=crop&auto=format" alt="ট্রেইনার" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "৫২", label: "স্টুডেন্ট" },
              { val: "৮", label: "কোর্স" },
              { val: "৳১৮,৫০০", label: "এই মাসে" },
            ].map((s) => (
              <div key={s.label} className="bg-white/15 rounded-2xl py-3.5 text-center">
                <div className="text-white font-black text-xl">{s.val}</div>
                <div className="text-blue-200 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-5">
        <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
          {[
            { id: "overview", label: "সারসংক্ষেপ" },
            { id: "content", label: "কন্টেন্ট" },
            { id: "students", label: "স্টুডেন্ট" },
            { id: "earnings", label: "আয়" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === t.id ? "bg-[#1d4ed8] text-white shadow-md" : "bg-white text-gray-500 hover:text-[#1d4ed8]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-black text-[#1e40af] text-lg mb-4">আজকের কার্যক্রম</h3>
              {[
                { time: "সকাল ৯টা", event: "সেলাই ক্লাস - গ্রুপ A", students: 12 },
                { time: "দুপুর ২টা", event: "হস্তশিল্প ওয়ার্কশপ", students: 8 },
                { time: "বিকাল ৫টা", event: "ব্যবসা পরামর্শ সেশন", students: 5 },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b last:border-0 border-blue-50">
                  <div className="text-xs text-blue-400 w-20 shrink-0 font-semibold">{e.time}</div>
                  <div className="flex-1">
                    <div className="text-[#1e40af] font-bold text-sm">{e.event}</div>
                    <div className="text-gray-400 text-xs font-medium">{e.students} জন স্টুডেন্ট</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-black text-[#1e40af] text-lg mb-4">সাম্প্রতিক রিভিউ</h3>
              {[
                { name: "করিম মিয়া", rating: 5, text: "অনেক ভালো শেখালেন, বুঝতে সহজ হলো।" },
                { name: "আসমা খাতুন", rating: 4, text: "ভিডিও গুলো অনেক সহায়ক। ধন্যবাদ।" },
              ].map((r, i) => (
                <div key={i} className="py-3 border-b last:border-0 border-blue-50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[#1e40af] text-sm">{r.name}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="w-3 h-3 text-[#fbbf24] fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-4">
            <button className="w-full bg-[#1d4ed8] text-white font-black py-4 rounded-2xl hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2 text-lg shadow-md">
              <Upload className="w-5 h-5" />
              নতুন ভিডিও আপলোড করুন
            </button>
            {[
              { title: "সেলাইয়ের মৌলিক কৌশল", students: 34, rating: 4.8, duration: "২৫ মিনিট" },
              { title: "রঙিন কাপড়ের ডিজাইন", students: 28, rating: 4.7, duration: "৩০ মিনিট" },
              { title: "হাতের কাজ: প্যাটার্ন মেকিং", students: 22, rating: 4.9, duration: "২০ মিনিট" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
                <div className="font-black text-[#1e40af] text-base mb-2">{c.title}</div>
                <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {c.students} জন</span>
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#fbbf24] fill-current" /> {c.rating}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "students" && (
          <div className="space-y-3">
            {[
              { name: "রহিমা বেগম", course: "সেলাই কোর্স", progress: 80, location: "ময়মনসিংহ" },
              { name: "আসমা খাতুন", course: "হস্তশিল্প", progress: 60, location: "ঢাকা" },
              { name: "করিম মিয়া", course: "কৃষি কোর্স", progress: 95, location: "রাজশাহী" },
              { name: "শিরিন আক্তার", course: "সেলাই কোর্স", progress: 40, location: "চট্টগ্রাম" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-blue-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#1e40af] font-black text-xl shrink-0">
                  {s.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[#1e40af]">{s.name}</div>
                  <div className="text-gray-400 text-xs font-medium">{s.course} · {s.location}</div>
                  <div className="mt-2 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#2563eb] rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                  </div>
                </div>
                <div className="text-[#1d4ed8] font-black text-sm shrink-0">{s.progress}%</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "earnings" && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-2xl p-7 text-center shadow-xl">
              <div className="text-blue-200 text-sm mb-1 font-medium">জুন ২০২৪</div>
              <div className="text-white font-black text-5xl mb-2">৳১৮,৫০০</div>
              <div className="text-blue-200 text-sm font-medium">এই মাসের মোট আয়</div>
              <div className="flex justify-center gap-8 mt-5">
                {[{ val: "৳১৫,০০০", label: "এনরোলমেন্ট" }, { val: "৳৩,৫০০", label: "বোনাস" }].map((s) => (
                  <div key={s.label}>
                    <div className="text-white font-black text-xl">{s.val}</div>
                    <div className="text-blue-300 text-xs font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
              <h3 className="font-black text-[#1e40af] mb-4 text-lg">মাসিক আয়ের ইতিহাস</h3>
              {[
                { month: "জুন ২০২৪", amount: "৳১৮,৫০০", students: 52 },
                { month: "মে ২০২৪", amount: "৳১৬,২০০", students: 48 },
                { month: "এপ্রিল ২০২৪", amount: "৳১৪,৮০০", students: 43 },
              ].map((e, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b last:border-0 border-blue-50">
                  <div>
                    <div className="font-bold text-[#1e40af] text-sm">{e.month}</div>
                    <div className="text-gray-400 text-xs font-medium">{e.students} জন স্টুডেন্ট</div>
                  </div>
                  <div className="text-[#1d4ed8] font-black">{e.amount}</div>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#fbbf24] text-[#1e40af] font-black text-xl py-5 rounded-2xl hover:bg-[#f59e0b] transition-colors shadow-lg">
              পেমেন্ট উত্তোলন করুন →
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-blue-100 px-4 py-3 z-30">
        <div className="max-w-lg mx-auto flex items-center justify-around gap-3">
          <button onClick={onHome} className="flex-1 flex items-center justify-center gap-2 text-gray-400 hover:text-[#1e40af] transition-colors text-sm font-bold py-2">
            <Home className="w-5 h-5" /> হোম
          </button>
          <div className="h-6 w-px bg-blue-100" />
          <button onClick={onBack} className="flex-1 flex items-center justify-center gap-2 text-gray-400 hover:text-[#1e40af] transition-colors text-sm font-bold py-2">
            <Users className="w-5 h-5" /> ড্যাশবোর্ড
          </button>
        </div>
      </div>
    </div>
  );
}
