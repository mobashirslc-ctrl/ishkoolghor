import { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Wallet,
  CheckCircle,
  Upload,
  Loader2,
  Calendar,
  User,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

type FormType = "academic" | "skill" | "earning";

interface AcademicFormData {
  studentName: string;
  birthDate: string;
  fatherName: string;
  motherName: string;
  contactNo: string;
  address: string;
  class: string;
}

interface SkillFormData {
  name: string;
  address: string;
  district: string;
  thana: string;
  contactNo: string;
  gender: string;
  skillType: string;
}

interface EarningFormData {
  name: string;
  contactNo: string;
  address: string;
  gender: string;
  nidImage: File | null;
  earningType: string;
}

export default function RegistrationForms({ onClose }: { onClose: () => void }) {
  const [activeForm, setActiveForm] = useState<FormType>("academic");
  const [academicSubmitted, setAcademicSubmitted] = useState(false);
  const [skillSubmitted, setSkillSubmitted] = useState(false);
  const [earningSubmitted, setEarningSubmitted] = useState(false);

  const [academicData, setAcademicData] = useState<AcademicFormData>({
    studentName: "",
    birthDate: "",
    fatherName: "",
    motherName: "",
    contactNo: "",
    address: "",
    class: "",
  });

  const [skillData, setSkillData] = useState<SkillFormData>({
    name: "",
    address: "",
    district: "",
    thana: "",
    contactNo: "",
    gender: "",
    skillType: "",
  });

  const [earningData, setEarningData] = useState<EarningFormData>({
    name: "",
    contactNo: "",
    address: "",
    gender: "",
    nidImage: null,
    earningType: "",
  });

  const handleAcademicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAcademicSubmitted(true);
  };

  const handleSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSkillSubmitted(true);
  };

  const handleEarningSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEarningSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEarningData({ ...earningData, nidImage: e.target.files[0] });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#f0fdf4] rounded-3xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#166534] to-[#15803d] p-6 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-black text-white mb-2">নিবন্ধন করুন</h2>
              <p className="text-[#86efac]">আপনার পছন্দের ফর্মটি পূরণ করুন</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveForm("academic")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeForm === "academic"
                  ? "bg-[#fbbf24] text-[#166534] shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              শিক্ষার্থী নিবন্ধন
            </button>
            <button
              onClick={() => setActiveForm("skill")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeForm === "skill"
                  ? "bg-[#fbbf24] text-[#166534] shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              দক্ষতা প্রশিক্ষণ
            </button>
            <button
              onClick={() => setActiveForm("earning")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeForm === "earning"
                  ? "bg-[#fbbf24] text-[#166534] shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Wallet className="w-5 h-5" />
              উপার্জন করতে চাই
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {/* Academic Form */}
          {activeForm === "academic" && (
            <div>
              {!academicSubmitted ? (
                <form onSubmit={handleAcademicSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        শিক্ষার্থীর নাম
                      </label>
                      <input
                        type="text"
                        required
                        value={academicData.studentName}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, studentName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="শিক্ষার্থীর সম্পূর্ণ নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        জন্ম তারিখ
                      </label>
                      <input
                        type="date"
                        required
                        value={academicData.birthDate}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, birthDate: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        বাবার নাম
                      </label>
                      <input
                        type="text"
                        required
                        value={academicData.fatherName}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, fatherName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="বাবার সম্পূর্ণ নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        মায়ের নাম
                      </label>
                      <input
                        type="text"
                        required
                        value={academicData.motherName}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, motherName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="মায়ের সম্পূর্ণ নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        যোগাযোগ নম্বর
                      </label>
                      <input
                        type="tel"
                        required
                        value={academicData.contactNo}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, contactNo: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="০১৭XX-XXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        ক্লাস নির্বাচন করুন
                      </label>
                      <select
                        required
                        value={academicData.class}
                        onChange={(e) =>
                          setAcademicData({ ...academicData, class: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      >
                        <option value="">ক্লাস বেছে নিন</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cls) => (
                          <option key={cls} value={`class-${cls}`}>
                            ক্লাস {cls}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      ঠিকানা
                    </label>
                    <textarea
                      required
                      value={academicData.address}
                      onChange={(e) =>
                        setAcademicData({ ...academicData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white resize-none"
                      rows={3}
                      placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#166534] to-[#15803d] text-white font-black text-lg py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    আবেদন করুন
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#166534]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#166534] mb-3">
                    আবেদন সফলভাবে জমা হয়েছে!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    আপনার আবেদন এডমিন অনুমোদনের জন্য অপেক্ষমাণ আছে।
                  </p>
                  <p className="text-sm text-gray-500">
                    অনুমোদিত হলে আমরা আপনার সাথে যোগাযোগ করব।
                  </p>
                  <button
                    onClick={() => setAcademicSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-colors"
                  >
                    নতুন আবেদন করুন
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Skill Training Form */}
          {activeForm === "skill" && (
            <div>
              {!skillSubmitted ? (
                <form onSubmit={handleSkillSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        নাম
                      </label>
                      <input
                        type="text"
                        required
                        value={skillData.name}
                        onChange={(e) => setSkillData({ ...skillData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        যোগাযোগ নম্বর
                      </label>
                      <input
                        type="tel"
                        required
                        value={skillData.contactNo}
                        onChange={(e) =>
                          setSkillData({ ...skillData, contactNo: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="০১৭XX-XXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        জেলা
                      </label>
                      <input
                        type="text"
                        required
                        value={skillData.district}
                        onChange={(e) =>
                          setSkillData({ ...skillData, district: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="জেলার নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        থানা
                      </label>
                      <input
                        type="text"
                        required
                        value={skillData.thana}
                        onChange={(e) => setSkillData({ ...skillData, thana: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="থানার নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        লিঙ্গ
                      </label>
                      <select
                        required
                        value={skillData.gender}
                        onChange={(e) => setSkillData({ ...skillData, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      >
                        <option value="">লিঙ্গ নির্বাচন করুন</option>
                        <option value="male">পুরুষ</option>
                        <option value="female">মহিলা</option>
                        <option value="other">অন্যান্য</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        দক্ষতার ধরন
                      </label>
                      <select
                        required
                        value={skillData.skillType}
                        onChange={(e) =>
                          setSkillData({ ...skillData, skillType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      >
                        <option value="">দক্ষতা বেছে নিন</option>
                        <option value="handicraft">হস্তশিল্প</option>
                        <option value="digital-platform">ডিজিটাল প্ল্যাটফর্ম</option>
                        <option value="basic-computer">বেসিক কম্পিউটার</option>
                        <option value="entrepreneurship">উদ্যোক্তা প্রশিক্ষণ</option>
                        <option value="agriculture">কৃষিকাজ প্রশিক্ষণ</option>
                        <option value="online-earning">কিভাবে অনলাইনে আয় করা যায়</option>
                        <option value="arabic">আরবি শিক্ষা</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      ঠিকানা
                    </label>
                    <textarea
                      required
                      value={skillData.address}
                      onChange={(e) => setSkillData({ ...skillData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white resize-none"
                      rows={3}
                      placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#166534] to-[#15803d] text-white font-black text-lg py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    আবেদন করুন
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Loader2 className="w-10 h-10 text-[#166534] animate-spin" />
                  </div>
                  <h3 className="text-2xl font-black text-[#166534] mb-3">
                    যাচাই বাছাই চলছে...
                  </h3>
                  <p className="text-gray-600 mb-2">অপেক্ষা করুন</p>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    যদি আপনি সিলেক্ট হন আপনাকে জানানো হবে আমাদের টিম থেকে।
                  </p>
                  <button
                    onClick={() => setSkillSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-colors"
                  >
                    নতুন আবেদন করুন
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Earning Form */}
          {activeForm === "earning" && (
            <div>
              {!earningSubmitted ? (
                <form onSubmit={handleEarningSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        নাম
                      </label>
                      <input
                        type="text"
                        required
                        value={earningData.name}
                        onChange={(e) => setEarningData({ ...earningData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        যোগাযোগ নম্বর
                      </label>
                      <input
                        type="tel"
                        required
                        value={earningData.contactNo}
                        onChange={(e) =>
                          setEarningData({ ...earningData, contactNo: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                        placeholder="০১৭XX-XXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        লিঙ্গ
                      </label>
                      <select
                        required
                        value={earningData.gender}
                        onChange={(e) => setEarningData({ ...earningData, gender: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      >
                        <option value="">লিঙ্গ নির্বাচন করুন</option>
                        <option value="male">পুরুষ</option>
                        <option value="female">মহিলা</option>
                        <option value="other">অন্যান্য</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        উপার্জনের ধরন
                      </label>
                      <select
                        required
                        value={earningData.earningType}
                        onChange={(e) =>
                          setEarningData({ ...earningData, earningType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white"
                      >
                        <option value="">উপার্জনের উপায় বেছে নিন</option>
                        <option value="handicraft">হস্তশিল্প</option>
                        <option value="tuition">টিউশন</option>
                        <option value="arabic-tutor">আরবি টিউটর</option>
                        <option value="online-entrepreneurship">অনলাইন উদ্যোক্তা</option>
                        <option value="digital-marketing">ডিজিটাল মার্কেটিং</option>
                        <option value="food-delivery">খাবার ডেলিভারি</option>
                        <option value="agriculture">কৃষিকাজ</option>
                        <option value="trainer">ট্রেইনার</option>
                        <option value="data-entry">ডেটা এন্ট্রি</option>
                        <option value="sewing">সেলাই</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      ঠিকানা
                    </label>
                    <textarea
                      required
                      value={earningData.address}
                      onChange={(e) =>
                        setEarningData({ ...earningData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#86efac] focus:border-[#166534] focus:outline-none bg-white resize-none"
                      rows={3}
                      placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                    />
                  </div>

                  <div>
                    <label className="block text-[#166534] font-bold mb-2 flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      NID ছবি আপলোড করুন
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="nid-upload"
                      />
                      <label
                        htmlFor="nid-upload"
                        className="w-full px-4 py-8 rounded-xl border-2 border-dashed border-[#86efac] hover:border-[#166534] focus:border-[#166534] bg-white cursor-pointer flex flex-col items-center justify-center gap-2 transition-colors"
                      >
                        <Upload className="w-8 h-8 text-[#166534]" />
                        <span className="text-[#166534] font-bold">
                          {earningData.nidImage
                            ? earningData.nidImage.name
                            : "ছবি নির্বাচন করতে ক্লিক করুন"}
                        </span>
                        <span className="text-sm text-gray-500">JPG, PNG বা PDF (সর্বোচ্চ 5MB)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#166534] to-[#15803d] text-white font-black text-lg py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    আবেদন করুন
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Loader2 className="w-10 h-10 text-[#166534] animate-spin" />
                  </div>
                  <h3 className="text-2xl font-black text-[#166534] mb-3">
                    যাচাই বাছাই চলছে...
                  </h3>
                  <p className="text-gray-600 mb-2">অপেক্ষা করুন</p>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    যদি আপনি সিলেক্ট হন আপনাকে জানানো হবে আমাদের টিম থেকে।
                  </p>
                  <button
                    onClick={() => setEarningSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-colors"
                  >
                    নতুন আবেদন করুন
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
