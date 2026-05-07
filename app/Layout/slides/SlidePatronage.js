"use client";
import Image from "next/image";

const SlidePatronage = () => {
  return (
    <div className="relative w-full h-full bg-[url('/Images/Home/LongivityBgSlider.jpg')] bg-cover bg-center">
      {/* Content Wrapper */}
      <div className="w-full h-full flex items-center justify-center px-4 lg:px-20 overflow-y-auto">
        <div className="w-full max-w-8xl mx-auto">
          <div className="flex justify-between pt-10 pb-4">
            <div className="text-xs text-blue-900 font-semibold"> HEALTH. EMPOWERMENT . AWARENESS . LONGEVITY</div>
            <div className="text-sm text-blue-900 font-semibold">صحة . تمكين . توعية . عمر مديد</div>
            </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side */}
            <div className="w-full lg:w-1/2 space-y-4 font-semibold">
              {/* Patronage Badge  */}
              <div className="text-center bg-blue-900 rounded-xl p-3 text-white">
                <p className="text-base md:text-lg lg:text-xl font-bold">
                  برعاية كريمة من صاحب السمو الملكي
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Under the gracious patronage of His Royal Highness
                </p>
              </div>

              {/* Name Section*/}
               <div className=" py-4 my-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  
                  <div className="text-left">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
                      Prince Khalid AL Faisal
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
                      الفيصل خالد الأمير
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-2"> 
                    <div className="text-left">
                    <p className="text-sm md:text-base text-gray-600">
                      Advisor to the Custodian of the Two Holy
                      <br />
                      Mosques, Governor of Makkah Region
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm md:text-base text-gray-600">
                      مستشار خادم الحرمين
                      <br />
                      الشريفين أمير منطقة مكة المكرمة
                    </p>
                  </div>
               
                </div>
              </div>

              {/* Conference Name */}
              <div className="space-y-1 text-center">
                <div className="w-full">
                  <p className="text-sm md:text-base lg:text-2xl leading-relaxed text-gray-700">
                    مؤتمــــــــر ومعــــــــرض تعزيــــــــز الصحـــــــة
                    وجــــودة الحيــــاة
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-sm md:text-base lg:text-xl leading-relaxed text-gray-700">
                    Health Promotion & Quality of Life Conference and Exhibition
                  </p>
                </div>
              </div>

              {/* Description - Full Width */}
              <div className="space-y-1">
                <div className=" text-center w-full">
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
                    يقام أضخم حدث من نوعه في المنطقة الغربية يهدف إلى تحسين جودة
                    الحياة تحت شعار
                  </p>
                </div>
                <div className="text-start w-full">
                  <p className="text-sm md:text-base leading-relaxed text-gray-700">
                    The largest event of its kind in the Western Region is being
                    held, aiming to improve the quality of life under the slogan
                  </p>
                </div>
              </div>

              {/* Slogan - Compact */}
              <div className="text-center py-2">
                <p className="text-lg md:text-xl lg:text-4xl font-bold text-blue-900">
                  صحـــة . تمكيـــن . توعيـــة . عمـر مديـــد
                </p>
                <p className="text-sm md:text-base lg:text-xl font-semibold text-blue-900 mt-1">
                  HEALTH. EMPOWERMENT . AWARENESS . LONGEVITY
                </p>
              </div>
            </div>

            {/* Right Side*/}
            <div className="w-full lg:w-1/2 flex flex-col justify-end">
              <div className=" w-full h-full md:h-[500px] flex items-end justify-end rounded-xl overflow-hidden">
                <Image
                  src="/Images/Home/PrinceKhalidAlFaisal.png"
                  alt="Prince Khalid AL Faisal"
                  width={500}
                  height={500}
                  className="object-contain absolute bottom-0 right-40"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePatronage;
