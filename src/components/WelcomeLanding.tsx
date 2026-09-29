import React from 'react';
import { ArrowRight, Sprout, Sparkles } from 'lucide-react';

interface WelcomeLandingProps {
  onEnter: () => void;
}

export const WelcomeLanding: React.FC<WelcomeLandingProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between items-center bg-[#F8FAF8] text-[#334D3D] px-6 py-10 selection:bg-[#8BAF96] selection:text-white">
      {/* Top subtle badge */}
      <header className="w-full max-w-4xl flex items-center justify-between text-xs tracking-widest uppercase font-light text-[#6B9077]">
        <div className="flex items-center gap-2">
          <Sprout className="w-4 h-4 text-[#72A285]" />
          <span>Dã Hoa Khai Xứ</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-[#EBF2EC] text-[#557A60] border border-[#D5E3D8] text-[11px] font-normal">
          Dự án sinh viên FPT
        </div>
      </header>

      {/* Center main showcase */}
      <main className="w-full max-w-2xl flex flex-col items-center text-center my-auto py-12">
        {/* Soft tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EC] text-[#557A60] border border-[#D5E3D8] text-xs font-normal tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#72A285]" />
          <span>Dự án của nhóm bạn trẻ đến từ FPT</span>
        </div>

        {/* Tall, light sans-serif title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#2B4734] leading-[1.08] mb-4">
          Dã Hoa Khai Xứ
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-normal text-[#6B9077] tracking-wide mb-6">
          Trung Tâm Giáo Dục Về Môi Trường
        </p>

        {/* Concise friendly intro message */}
        <p className="text-sm sm:text-base font-light text-[#55705E] max-w-lg leading-relaxed mb-12">
          Dự án được khởi xướng bởi nhóm sinh viên trẻ Đại học FPT với mong muốn ươm mầm tình yêu thiên nhiên và lan tỏa lối sống xanh đến các bạn học sinh.
        </p>

        {/* Center Button requested by user */}
        <button
          onClick={onEnter}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#72A285] hover:bg-[#5E8E71] text-white text-sm font-normal tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Xem thông tin trung tâm</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
        </button>

        <span className="text-[11px] font-light text-[#8BAF96] tracking-wider uppercase mt-4">
          Bấm vào để tiếp tục
        </span>
      </main>

      {/* Clean bottom note */}
      <footer className="w-full max-w-4xl text-center text-xs font-light text-[#8BAF96] tracking-wide">
        Dã Hoa Khai Xứ · Dự án giáo dục môi trường vì cộng đồng học đường
      </footer>
    </div>
  );
};
