import { useState } from "react";
import RegistrationForms from "./components/RegistrationForms";
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
  FileText,
  LogIn,
  UserPlus,
} from "lucide-react";

type View = "landing";

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

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [showRegistrationForms, setShowRegistrationForms] = useState(false);

  // --- LANDING PAGE ---
  return (
    <div className="min-h-screen bg-[#f0fdf4]">
      <style>{GLOBAL_STYLES}</style>

      {/* Registration Forms Modal */}
      {showRegistrationForms && (
        <RegistrationForms onClose={() => setShowRegistrationForms(false)} />
      )}

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
            <a href="#registration" className="hover:text-white transition-colors">নিবন্ধন</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRegistrationForms(true)}
              className="bg-[#fbbf24] text-[#166534] font-black text-sm px-5 py-2.5 rounded-full hover:bg-[#f59e0b] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              নিবন্ধন করুন
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#166534]">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1707811180403-c22b7ef06476?w=1400&h=900&fit=crop&auto=format')", opacity: 0.18 }}
        />
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
              গ্রামের মানুষের জন্য সহজ দক্ষতা প্রশিক্ষণ ও আয়ের সুযোগ।
              ভিডিও দেখুন, কাজ শিখুন, ঘরে বসেই আয় করুন।
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => setShowRegistrationForms(true)}
                className="flex items-center gap-2.5 bg-[#fbbf24] text-[#166534] font-black text-xl px-8 py-5 rounded-2xl hover:bg-[#f59e0b] transition-all shadow-2xl hover:-translate-y-1"
              >
                <Play className="w-6 h-6 fill-current" />
                এখনই শুরু করুন
              </button>
              <button className="flex items-center gap-2.5 bg-white/10 border border-white/25 text-white font-bold text-xl px-6 py-5 rounded-2xl hover:bg-white/20 transition-all">
                <Volume2 className="w-6 h-6" />
                শুনুন
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-[#86efac]">
              {["সম্পূর্ণ বিনামূল্যে", "বাংলায় শিখুন", "ঘরে বসেই"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-[#4ade80]" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image stack */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="relative w-80 h-96">
              <img
                src="https://images.unsplash.com/photo-1762943107490-3f6fdfb079c0?w=420&h=520&fit=crop&auto=format"
                alt="গ্রামীণ মহিলা দক্ষতা প্রশিক্ষণ"
                className="absolute top-0 right-0 w-72 h-80 object-cover rounded-3xl shadow-2xl border-4 border-[#4ade80]/20"
              />
              <img
                src="https://images.unsplash.com/photo-1572825587497-5ff6a8ff9746?w=280&h=320&fit=crop&auto=format"
                alt="মোবাইলে শিক্ষা"
                className="absolute bottom-0 left-0 w-52 h-64 object-cover rounded-3xl shadow-2xl border-4 border-[#fbbf24]/30 float"
              />
              <div className="absolute -top-4 left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl">
                <div className="text-3xl font-black text-[#166534]">৫০,০০০+</div>
                <div className="text-xs text-gray-500 font-medium">সফল শিক্ষার্থী</div>
              </div>
              <div className="absolute bottom-8 right-0 bg-[#fbbf24] rounded-2xl px-4 py-3 shadow-2xl">
                <div className="text-2xl font-black text-[#166534]">২০০+</div>
                <div className="text-xs text-[#166534]/70 font-medium">দক্ষতা কোর্স</div>
              </div>
            </div>
          </div>
        </div>

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

      {/* Registration Section */}
      <section id="registration" className="bg-[#f0fdf4] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#166534] mb-4">নিবন্ধন করুন</h2>
            <p className="text-gray-500 text-xl">আপনার প্রয়োজন অনুযায়ী ফর্ম পূরণ করুন</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Academic Registration Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#dcfce7] hover:border-[#166534] transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#166534] to-[#15803d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#166534] mb-3">শিক্ষার্থী নিবন্ধন</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ক্লাস ১-১০ এর শিক্ষার্থীদের জন্য বিশেষ শিক্ষা কার্যক্রম
              </p>
              <ul className="space-y-2 mb-6">
                {["বিনামূল্যে শিক্ষা", "মানসম্মত পাঠ্যক্রম", "দক্ষ শিক্ষক"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#16a34a]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowRegistrationForms(true)}
                className="w-full bg-[#166534] text-white font-bold py-3 rounded-xl hover:bg-[#14532d] transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                আবেদন করুন
              </button>
            </div>

            {/* Skill Training Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#dcfce7] hover:border-[#166534] transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#78350f] to-[#92400e] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#166534] mb-3">দক্ষতা প্রশিক্ষণ</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                বিভিন্ন দক্ষতা উন্নয়ন প্রশিক্ষণ কর্মসূচিতে অংশ নিন
              </p>
              <ul className="space-y-2 mb-6">
                {["হস্তশিল্প প্রশিক্ষণ", "কম্পিউটার শিক্ষা", "উদ্যোক্তা উন্নয়ন"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#d97706]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowRegistrationForms(true)}
                className="w-full bg-[#78350f] text-white font-bold py-3 rounded-xl hover:bg-[#92400e] transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                আবেদন করুন
              </button>
            </div>

            {/* Earning Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-[#dcfce7] hover:border-[#166534] transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#166534] mb-3">উপার্জন করতে চাই</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                বিভিন্ন ক্ষেত্রে কাজের সুযোগ পান এবং আয় করুন
              </p>
              <ul className="space-y-2 mb-6">
                {["ঘরে বসে কাজ", "ভালো আয়", "নমনীয় সময়"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#1d4ed8]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowRegistrationForms(true)}
                className="w-full bg-[#1e40af] text-white font-bold py-3 rounded-xl hover:bg-[#2563eb] transition-all flex items-center justify-center gap-2"
              >
                <UserPlus className="w-5 h-5" />
                আবেদন করুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="skills" className="bg-[#166534] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">আপনার জন্য কী আছে?</h2>
            <p className="text-[#86efac] text-xl">শেখা থেকে আয় — একটি প্ল্যাটফর্মে সব</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Learn */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden group relative backdrop-blur">
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
              onClick={() => setShowRegistrationForms(true)}
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
