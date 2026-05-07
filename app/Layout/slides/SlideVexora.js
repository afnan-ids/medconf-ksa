"use client";

import Image from "next/image";

const SlideVexora = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/VeroxaSliderBackground.png')] bg-cover bg-center">
      {/* Content Wrapper */}
      <div className="w-full h-full grid grid-cols-2 items-center text-white px-4 lg:px-20 overflow-y-auto">
        <div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tracking-wide">
              VEXORA
            </h1>
            <p className="text-xl md:text-2xl tracking-wide">SOLUTIONS</p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto space-y-8 py-8">
          <div className="flex items-center gap-2 justify-end">
            <div>
              <p
                className="text-xl lg:text-2xl font-bold leading-relaxed"
                dir="rtl"
              >
                تعزيز الصحة
                <br />
                وجودة الحياة
              </p>
            </div>
            <div>
              <Image
                src="/Images/Footer-Logo.png"
                alt="HPQL Logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="py-8 pt-12 my-4">
            <div className="">
              <p className="text-xl lg:text-4xl font-bold mb-2" dir="rtl">
                مؤتمر ومعرض تعزيز الصحة وجودة الحياة
              </p>
              <p className="text-base text-end md:text-lg lg:text-xl">
                HEALTH PROMOTION & QUALITY OF LIFE CONFERENCE & EXHIBITION
              </p>
            </div>
          </div>

          <div className="flex text-end justify-end gap-4 pt-10">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider">
              HEAL
            </p>
            <span>
              <p className="text-lg md:text-xl lg:text-3xl font-bold mb-1" dir="rtl">
                صحـــة . تمكيـــن . توعيـــة . عمـر مديـــد
              </p>
              <p className="text-base md:text-lg lg:text-lg">
                HEALTH . EMPOWERMENT . AWARENESS . LONGEVITY
              </p>
            </span>
          </div>

          <div className="text-center items-center flex justify-evenly bg-blue-500 rounded-2xl p-4">
            <div className="text-white font-semibold">
              <p>مركــــز جـــــدة للمعـــــارض والفعـــــــاليات</p>
              <p>Exhibition & trade center in Jeddah</p>
            </div>

            <p className="text-xl text-white font-semibold mb-2">
              <div>نوفمبر</div>
              <div>2026</div>
            </p>
            <p className="text-white text-2xl font-bold lg:text-4xl">9 - 11</p>
            <div className="text-white">
              <p className="text-white text-xl">November</p>
              <p className="text-white text-xl">2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideVexora;
