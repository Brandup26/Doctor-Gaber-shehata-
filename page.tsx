// app/page.tsx (ملف واحد بس - كل الكود في مكانه)
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MedicalLabWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activePortalTab, setActivePortalTab] = useState<"results" | "appointments">("results");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: "🩸", title: "سحب عينات المنزل", desc: "خدمة مجانية خلال 60 دقيقة - 24/7" },
    { icon: "🔬", title: "فحص شامل للجسم", desc: "80+ تحليل مع استشارة طبيب" },
    { icon: "🧬", title: "الاختبارات الجينية", desc: "تحليل DNA المتقدم للوقاية" },
    { icon: "🩻", title: "الأشعة", desc: "رنين مقطعي - أشعة سينية - تقارير فورية" },
    { icon: "❤️", title: "رعاية القلب", desc: "باقة متكاملة لصحة القلب" },
    { icon: "🦠", title: "الأمراض المعدية", desc: "تحليل PCR و抗原 بسرعة فائقة" },
  ];

  const recentResults = [
    { name: "صورة دم كاملة", date: "2024-01-15", status: "Normal" },
    { name: "دهون ثلاثية", date: "2024-01-15", status: "Abnormal" },
    { name: "هرمون الغدة", date: "2024-01-14", status: "Normal" },
    { name: "فيتامين د", date: "2024-01-14", status: "Pending" },
  ];

  const appointments = [
    { test: "سكر صائم", date: "20 يناير", time: "8:00 ص", type: "سحب منزل" },
    { test: "وظائف كبد", date: "25 يناير", time: "9:30 ص", type: "زيارة معمل" },
  ];

  return (
    <div className="overflow-x-hidden font-sans" dir="rtl">
      {/* ========== NAVBAR ========== */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0055ff] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <span className="font-bold text-xl text-gray-800">
              معمل<span className="text-[#0055ff]">التحاليل</span>
            </span>
          </div>
          <button className="bg-[#0055ff] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-md">
            بوابة المرضى
          </button>
        </div>
      </motion.nav>

      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen flex items-center relative bg-[#f0f7ff] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#0055ff] rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#00a3ff] rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0055ff]/10 text-[#0055ff] text-sm font-semibold mb-5">
              ✨ دقة عالية - ثقة مطلقة
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">
              دقة تلتقي{" "}
              <span className="bg-gradient-to-l from-[#0055ff] to-[#00a3ff] bg-clip-text text-transparent">
                بالتميز الطبي
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              خدمات تشخيصية عالمية من منزلك. نتائج دقيقة، معامل معتمدة، ورعاية خبراء عند بابك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0055ff] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                🏠 اطلب عينة من المنزل
              </button>
              <button className="border-2 border-[#0055ff] text-[#0055ff] px-8 py-3 rounded-full font-semibold hover:bg-[#0055ff] hover:text-white transition-all">
                نتائج التحاليل
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                وثق فينا <span className="font-semibold text-gray-900">+٥٠,٠٠٠</span> مريض
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES CARDS ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0055ff] font-semibold text-sm">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">حلول تشخيصية متكاملة</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{ y: hoveredCard === idx ? -8 : 0, scale: hoveredCard === idx ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all"
                >
                  <motion.div
                    animate={{ scale: hoveredCard === idx ? 1.1 : 1 }}
                    className="text-4xl mb-3"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <motion.div
                    animate={{ x: hoveredCard === idx ? 5 : 0 }}
                    className="flex items-center text-[#0055ff] text-sm font-semibold mt-3"
                  >
                    اعرف أكثر ←
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PATIENT PORTAL ========== */}
      <section className="py-20 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#0055ff] font-semibold text-sm">بوابة المرضى</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">لوحة تحكم صحتك</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-l from-[#0055ff] to-[#00a3ff] p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
                      أ.م
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">أحمد محمد</h3>
                      <p className="text-white/80 text-xs">رقم المريض: MED-24589</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">آخر فحص</span>
                      <span className="font-semibold">١٥ يناير ٢٠٢٤</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">تقارير معلقة</span>
                      <span className="font-semibold text-amber-600">١</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">درجة الصحة</span>
                      <span className="font-semibold text-green-600">٨٧/١٠٠</span>
                    </div>
                  </div>
                  <button className="w-full mt-5 bg-[#0055ff] text-white py-2.5 rounded-xl font-semibold">
                    حجز تحليل جديد
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Main Portal Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActivePortalTab("results")}
                    className={`flex-1 py-3 text-center font-semibold transition-all ${
                      activePortalTab === "results"
                        ? "text-[#0055ff] border-b-2 border-[#0055ff]"
                        : "text-gray-500"
                    }`}
                  >
                    📋 نتائج التحاليل
                  </button>
                  <button
                    onClick={() => setActivePortalTab("appointments")}
                    className={`flex-1 py-3 text-center font-semibold transition-all ${
                      activePortalTab === "appointments"
                        ? "text-[#0055ff] border-b-2 border-[#0055ff]"
                        : "text-gray-500"
                    }`}
                  >
                    📅 المواعيد القادمة
                  </button>
                </div>

                <div className="p-5">
                  {activePortalTab === "results" && (
                    <div className="space-y-3">
                      {recentResults.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <div>
                            <p className="font-semibold">{result.name}</p>
                            <p className="text-xs text-gray-500">{result.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                result.status === "Normal"
                                  ? "bg-green-100 text-green-700"
                                  : result.status === "Abnormal"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {result.status === "Normal" ? "طبيعي" : result.status === "Abnormal" ? "غير طبيعي" : "معلق"}
                            </span>
                            {result.status !== "Pending" && (
                              <button className="text-[#0055ff] text-sm">عرض ←</button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activePortalTab === "appointments" && (
                    <div className="space-y-3">
                      {appointments.map((apt, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <div>
                            <p className="font-semibold">{apt.test}</p>
                            <p className="text-xs text-gray-500">
                              {apt.date} - {apt.time}
                            </p>
                            <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-[#0055ff]/10 text-[#0055ff] rounded">
                              {apt.type}
                            </span>
                          </div>
                          <button className="text-red-500 text-sm">تغيير</button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="bg-white/80 backdrop-blur p-3 rounded-xl text-center shadow">
                  <span className="text-2xl block">📄</span>
                  <span className="text-xs font-medium">تحميل التقارير</span>
                </button>
                <button className="bg-white/80 backdrop-blur p-3 rounded-xl text-center shadow">
                  <span className="text-2xl block">💬</span>
                  <span className="text-xs font-medium">استشارة طبيب</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400 text-sm">© ٢٠٢٤ معمل التحاليل - حلول تشخيصية متقدمة</p>
      </footer>
    </div>
  );
}  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "framer-motion": "latest",
    "lucide-react": "latest"
  },
