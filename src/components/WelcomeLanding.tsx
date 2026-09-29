import React from 'react';
import { ArrowRight, Sprout, Compass, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface WelcomeLandingProps {
  onEnter: () => void;
}

export const WelcomeLanding: React.FC<WelcomeLandingProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0F1E15] text-white selection:bg-[#3D6B4F] selection:text-white">
      {/* Background Image with Rich Natural Atmosphere and Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Dã Hoa Khai Xứ - Khung cảnh thiên nhiên hoang sơ và thảm hoa dại"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ animationDuration: '24s' }}
        />
        {/* Cinematic gradient layers for pristine text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1710]/85 via-[#0B1710]/70 to-[#0B1710]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,17,11,0.7)_100%)]" />
      </div>

      {/* Decorative subtle top bar */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <Sprout className="w-4 h-4 text-[#7BD499]" />
          </div>
          <span className="font-serif text-lg tracking-wide text-white/90">
            Dã Hoa Khai Xứ
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B4C9BC] bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-[#7BD499]" />
          <span>Dự án Giáo Dục & Môi Trường</span>
        </div>
      </header>

      {/* Center Hero Focal Block */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 py-8 flex flex-col items-center text-center my-auto">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3826]/80 border border-[#7BD499]/30 text-xs sm:text-sm font-medium tracking-wide text-[#A3E5BA] mb-6 backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
          <span>Dự án của nhóm Dã Hoa Khai Xứ</span>
        </div>

        {/* Big Poetic Brand Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white mb-4 leading-[1.08] drop-shadow-md">
          Dã Hoa Khai Xứ
        </h1>

        {/* Institutional subtitle */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-serif font-normal text-[#E2ECE5] max-w-2xl mb-5 tracking-wide">
          Trung Tâm Giáo Dục Về Môi Trường & Bảo Tồn Sinh Thái
        </h2>

        {/* Narrative philosophical quote */}
        <p className="text-sm sm:text-base md:text-lg text-[#C5D9CC] max-w-2xl leading-relaxed mb-10 font-serif italic">
          “Nơi hoa dại nở rộ trên từng triền núi hoang sơ, nơi tri thức sinh thái đánh thức tình yêu đất mẹ và truyền cảm hứng hành động bảo vệ môi trường cho thế hệ mai sau.”
        </p>

        {/* Prominent Center Action Button requested by user */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold tracking-wider uppercase text-[#0B1710] bg-[#89E2A7] hover:bg-[#A3EBBB] rounded-full shadow-[0_0_35px_rgba(137,226,167,0.45)] hover:shadow-[0_0_50px_rgba(137,226,167,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sprout className="w-5 h-5 text-[#0B1710] transition-transform group-hover:rotate-12 duration-300" />
            <span>Khám Phá Dã Hoa Khai Xứ</span>
            <div className="w-7 h-7 rounded-full bg-[#0B1710]/15 flex items-center justify-center transition-transform group-hover:translate-x-1 duration-300">
              <ArrowRight className="w-4 h-4 text-[#0B1710]" />
            </div>

            {/* Glowing ring animation */}
            <span className="absolute -inset-1 rounded-full border border-[#89E2A7]/50 animate-ping opacity-30 pointer-events-none" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#94AD9D] font-medium mt-1">
            Bấm vào để vào trang thông tin chi tiết
          </span>
        </div>

        {/* Quick Highlights Strip under the button */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 w-full max-w-3xl pt-6 border-t border-white/10 text-left">
          <div className="p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10">
            <div className="text-[11px] uppercase tracking-wider text-[#8FA896] mb-1 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#7BD499]" />
              <span>Định Hướng</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">4 Hướng đi chiến lược</div>
          </div>

          <div className="p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10">
            <div className="text-[11px] uppercase tracking-wider text-[#8FA896] mb-1 flex items-center gap-1.5">
              <Sprout className="w-3.5 h-3.5 text-[#7BD499]" />
              <span>Hành Động</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Mục tiêu 2025 - 2035</div>
          </div>

          <div className="p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10">
            <div className="text-[11px] uppercase tracking-wider text-[#8FA896] mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#7BD499]" />
              <span>Giáo Dục</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Dự án & Vườn ươm</div>
          </div>

          <div className="p-3 bg-white/5 backdrop-blur-xs rounded-xl border border-white/10">
            <div className="text-[11px] uppercase tracking-wider text-[#8FA896] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7BD499]" />
              <span>Tương Tác</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Tính toán sinh thái</div>
          </div>
        </div>
      </main>

      {/* Atmospheric Footer on Landing */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 text-xs text-[#8FA896] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
        <div>
          © {new Date().getFullYear()} Dã Hoa Khai Xứ · Trung Tâm Giáo Dục Về Môi Trường.
        </div>
        <div className="flex items-center gap-4 text-[#B4C9BC]">
          <span>Phục hồi sinh thái bản địa</span>
          <span aria-hidden="true">·</span>
          <span>Tái hoang dã có trách nhiệm</span>
          <span aria-hidden="true">·</span>
          <span>Giáo dục thực địa mở</span>
        </div>
      </footer>
    </div>
  );
};
