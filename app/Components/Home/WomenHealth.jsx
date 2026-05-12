"use client";

import {
  Users,
  TrendingUp,
  Lightbulb,
  Award,
  Heart,
  Star,
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  GraduationCap,
  Microscope,
  Globe,
  Briefcase,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Stats data for Area 1
const statsData = [
  {
    value: "200+",
    labelAr: "قياديـة سعودية في القطــاع الطبي",
    labelEn: "Female Leaders in Health",
  },
  {
    value: "35,000+",
    labelAr: "طبيبـــــة سعوديـــــة",
    labelEn: "Saudi Female Doctors",
  },
  {
    value: "65%",
    labelAr: "نسبة الكوادر النسائية في قطاع التمريض",
    labelEn: "Percentage of Female Staff in Nursing",
  },
  {
    value: "200%",
    labelAr: "نمو في العيادات المتخصصة لصحة المرأة",
    labelEn: "Growth in Specialized Women's Health Clinics",
  },
  {
    value: "15+",
    labelAr: "براءة اختـــــراع طبية مسجلـــــة عالميا لطبيبات سعــوديات",
    labelEn: "Global Medical Patents by Saudi Female Doctors",
  },
];

// Key highlights data for Area 2
const highlightsData = [
  {
    titleAr: "تمكين المرأة في القطاع الصحي",
    titleEn: "Women Empowerment in Health Sector",
    icon: Briefcase,
    color: "blue",
  },
  {
    titleAr: "التمريض: ركائز الرعاية الطبية",
    titleEn: "Nursing: Pillars of Medical Care",
    icon: Heart,
    color: "rose",
  },
  {
    titleAr: "دور المرأة في التحول الرقمي بمجال الصحة",
    titleEn: "Women's Role in Digital Health Transformation",
    icon: Zap,
    color: "purple",
  },
  {
    titleAr: "المرأة في الأبحاث والابتكار الطبي",
    titleEn: "Women in Medical Research & Innovation",
    icon: Microscope,
    color: "emerald",
  },
  {
    titleAr: "المرأة السعودية في المنظمات الطبية الدولية",
    titleEn: "Saudi Women in International Medical Organizations",
    icon: Globe,
    color: "cyan",
  },
  {
    titleAr: "المرأة في التعليم الطبي والأكاديمي",
    titleEn: "Women in Medical Education & Academia",
    icon: GraduationCap,
    color: "amber",
  },
];

export default function WomenAndHealth() {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[url('/Images/Home/WomenAndHealth/womenandHealthBG.png')] bg-cover bg-center py-10">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center text-xs flex justify-between text-white mb-6">
          <span>
            <span className="font-semibold">HPQL</span> HEALTH PROMOTION &
            QUALITY OF LIFE{" "}
          </span>
          <span dir="rtl">صحة . تمكين . توعية . عمر مديد</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]  gap-8 h-full max-w-7xl lg:mt-10">
          {/* LEft Column */}
          <div>
            <div className="flex flex-wrap gap-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-[48%] backdrop-blur-sm rounded-lg py-4 text-center"
                >
                  <h3 className="text-2xl font-bold text-white bg-blue-800 text-center rounded-2xl py-2">
                    {stat.value}
                  </h3>

                  <p className="text-white/80 mt-3">{stat.labelAr}</p>

                  <p className="text-white/60 mt-2 text-sm">{stat.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-end ">
            <div className="text-center">
              <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                المــــــرأة والصحــــــة
                <br />
                <span className="text-white">Woman & Health</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/Images/Home/WomenAndHealth/women.png"
            alt="Women and Health Background"
            height={1000}
            width={1000}
            className="object-cover object-center absolute bottom-0 -right-30"
          />
        </div>
      </div>
    </section>
  );
}
