"use client";
import Image from 'next/image';

const SlidePatronage = ({ currentSlide, totalSlides, onNext, onPrev, onDotClick }) => {
  return (
    <div className="relative w-full h-screen bg-[#faf9f6] overflow-hidden">
      {/* Left Arrow */}
      <button 
        onClick={onPrev} 
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 text-2xl"
      >
        ❮
      </button>

      {/* Content Wrapper */}
      <div className="w-full h-full flex items-center justify-center px-4 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="text-center lg:text-right">
                <div className="space-y-2">
                  <p className="text-lg md:text-xl font-medium text-gray-700">
                    برعاية كريمة من صاحب السمو الملكي
                  </p>
                  <p className="text-base md:text-lg text-gray-600">
                    Under the gracious patronage of His Royal Highness
                  </p>
                </div>
              </div>

              <div className="border-t border-b border-gray-300 py-4 my-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-right">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                      الفيصل خالد الأمير
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                      Prince Khalid AL Faisal
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mt-2">
                  <div className="text-right">
                    <p className="text-sm md:text-base text-gray-600">
                      مستشار خادم الحرمين
                      <br />
                      الشريفين أمير منطقة مكة المكرمة
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm md:text-base text-gray-600">
                      Advisor to the Custodian of the Two Holy
                      <br />
                      Mosques, Governor of Makkah Region
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    يقام أضخــــم حــــدث من نوعة في المنطقة الغربية يهـدف إلى تحسين جــــودة الحياة تحــــت شعــــار
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    The largest event of its kind in the Western Region is being held, aiming to improve the
                    quality of life under the slogan
                  </p>
                </div>
              </div>

              <div className="text-center py-4">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                  صحـــة . تمكيـــن . توعيـــة . عمـر مديـــد
                </p>
                <p className="text-base md:text-lg text-gray-600 mt-2">
                  HEALTH. EMPOWERMENT . AWARENESS . LONGEVITY
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/person-1.jpg"
                  alt="Person image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button 
        onClick={onNext} 
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-6 h-2 bg-gray-800 rounded-full' 
                : 'w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidePatronage;