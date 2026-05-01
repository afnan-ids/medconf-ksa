"use client";

const SlideVexora = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onDotClick,
}) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#faf9f6] to-white overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={onPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 text-gray-800 text-2xl"
      >
        ❮
      </button>

      {/* Content Wrapper */}
      <div className="w-full h-full grid grid-cols-2 items-center  px-4 lg:px-20 overflow-y-auto">
        <div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-2 tracking-wide">
              VEXORA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
              SOLUTIONS
            </p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto space-y-8 py-8">
          <div className="">
            <p
              className="text-xl  lg:text-2xl font-bold text-gray-800 leading-relaxed"
              dir="rtl"
            >
              تعزيز الصحة
              <br />
              وجودة الحياة
            </p>
          </div>

          <div className=" py-8 my-4">
            <div className="">
              <p
                className="text-xl lg:text-2xl font-bold text-gray-800 mb-2"
                dir="rtl"
              >
                مؤتمر ومعرض تعزيز الصحة وجودة الحياة
              </p>
              <p className="text-base text-end md:text-lg lg:text-xl text-gray-600">
                HEALTH PROMOTION & QUALITY OF LIFE CONFERENCE & EXHIBITION
              </p>
            </div>
          </div>

          <div className="flex text-end justify-end gap-4">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-wider">
              HEAL
            </p>
            <span>
              <p className="text-lg md:text-xl text-gray-700 mb-1" dir="rtl">
                مركز جدة للمعارض والفعاليات
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Exhibition & trade center in Jeddah
              </p>
            </span>
          </div>

          <div className="text-center flex gap-4 bg-blue-400 rounded-2xl p-4">
            <div>
              <p>مركــــز جـــــدة للمعـــــارض والفعـــــــاليات</p>
              <p>Exhibition & trade center in Jeddah</p>
            </div>

            <p className="text-xl text-blue-950 mb-2 ">
              <div>نوفمبر</div>
              <div>2026</div>
            </p>
            <p className=" text-blue-900 text-2xl font-bold">9 - 11</p>
            <div className="text-blue-900">
              <p className="text-blue-900 text-xl">November</p>
              <p className="text-blue-900 text-xl">2026</p>
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
                ? "w-6 h-2 bg-gray-800 rounded-full"
                : "w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideVexora;
