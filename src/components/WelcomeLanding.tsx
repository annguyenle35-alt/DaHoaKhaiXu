import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sprout, Recycle, Heart, Smile, Compass } from 'lucide-react';
import { RECYCLING_WORKSHOP_IMAGE } from '../data/mockData';

interface WelcomeLandingProps {
  onEnter: () => void;
}

export const WelcomeLanding: React.FC<WelcomeLandingProps> = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -25, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full flex flex-col justify-between items-center bg-[#F6FAF6] text-[#24422D] px-4 sm:px-6 py-6 sm:py-8 selection:bg-[#72A285] selection:text-white relative overflow-hidden"
    >
      {/* Dynamic Animated Organic Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          rotate: [0, 8, 0],
          x: [0, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#D8EEDD]/70 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -10, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E2F2E6]/80 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [0.9, 1.08, 0.9],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAF5EC]/60 rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Bar with dynamic badge */}
      <header className="w-full max-w-5xl flex items-center justify-between z-10 pt-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D1E6D6] shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#52A36F] animate-ping" />
          <span className="text-xs uppercase tracking-wider font-medium text-[#386546]">
            Dã Hoa Khai Xứ
          </span>
        </div>

        <motion.div
          whileHover={{ rotate: 3, scale: 1.05 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E3F2E7] text-[#2F5E3C] text-xs font-medium border border-[#C5E3CD] shadow-2xs cursor-default"
        >
          <span>🌱 Gen Z Đại học FPT vì Môi Trường</span>
        </motion.div>
      </header>

      {/* Main Center Stage with Dynamic Graphics */}
      <main className="w-full max-w-4xl flex flex-col items-center text-center my-auto py-8 sm:py-12 z-10 relative">
        
        {/* Floating playful sticker: TOP LEFT */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-4, -1, -4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute -left-6 top-8 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border-2 border-[#CDE5D4] shadow-md text-xs font-medium text-[#2F5E3C]"
        >
          <div className="w-6 h-6 rounded-lg bg-[#EAF5ED] flex items-center justify-center text-sm">
            ♻️
          </div>
          <span>Workshop Tái Chế 100%</span>
        </motion.div>

        {/* Floating playful sticker: TOP RIGHT */}
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [5, 2, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute -right-6 top-10 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border-2 border-[#CDE5D4] shadow-md text-xs font-medium text-[#2F5E3C]"
        >
          <div className="w-6 h-6 rounded-lg bg-[#FFF2DE] flex items-center justify-center text-sm">
            ✨
          </div>
          <span>Học mà chơi, vui hết nấc!</span>
        </motion.div>

        {/* Floating playful sticker: BOTTOM LEFT */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [3, 0, 3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:flex absolute -left-12 bottom-12 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#E8F5EB] border border-[#BCE0C5] shadow-xs text-xs font-medium text-[#2A5435]"
        >
          <span>🌻 Ươm mầm hoa dại</span>
        </motion.div>

        {/* Floating playful sticker: BOTTOM RIGHT */}
        <motion.div
          animate={{ y: [0, 6, 0], rotate: [-3, -1, -3] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:flex absolute -right-12 bottom-12 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFF6E9] border border-[#FFE0B2] shadow-xs text-xs font-medium text-[#995B00]"
        >
          <span>🤝 Đồng hành cùng bạn "đặc biệt"</span>
        </motion.div>

        {/* Dynamic Tag Pill with Sparkle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#CDE5D4] text-xs font-medium text-[#386546] shadow-xs mb-6 hover:bg-[#F0F8F2] transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52A36F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42885C]" />
          </span>
          <span>Dự án giáo dục môi trường của nhóm bạn trẻ đến từ FPT</span>
          <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
        </motion.div>

        {/* Main Title: Tall, Clean, Dynamic */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#1D3A24] leading-[1.05] mb-3"
        >
          Dã Hoa Khai Xứ
        </motion.h1>

        {/* Cheerful subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="text-lg sm:text-2xl font-normal text-[#487856] tracking-wide mb-5 flex items-center justify-center gap-2 flex-wrap"
        >
          <span>Trung Tâm Giáo Dục Về Môi Trường</span>
          <span className="inline-block px-2 py-0.5 rounded-md bg-[#E3F2E7] text-[#2F5E3C] text-xs font-semibold uppercase tracking-wider">
            Green Youth
          </span>
        </motion.p>

        {/* Dynamic energetic intro text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45 }}
          className="text-sm sm:text-base font-light text-[#43644D] max-w-xl leading-relaxed mb-8"
        >
          Chào bạn! Tụi mình mang đến nguồn năng lượng xanh tươi mới cho các bạn học sinh: cùng biến rác thành chậu cây xinh, ươm mầm hoa dại và tạo nên những điều tử tế cho Trái Đất.
        </motion.p>

        {/* CENTER BUTTON AREA with Fun Doodles & High Energy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="relative flex flex-col items-center"
        >
          {/* Animated decorative ping aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#81C999]/30 to-[#5FB87C]/30 rounded-full blur-lg opacity-70 animate-pulse" />

          {/* Big tactile button */}
          <motion.button
            onClick={onEnter}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-3.5 px-9 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#4E8B62] to-[#3B734E] hover:from-[#437C56] hover:to-[#336544] text-white text-base sm:text-lg font-medium tracking-wide shadow-[0_8px_25px_rgba(59,115,78,0.35)] hover:shadow-[0_12px_32px_rgba(59,115,78,0.45)] transition-all duration-300 cursor-pointer z-10"
          >
            <span className="text-xl">✨</span>
            <span>Khám phá cùng tụi mình</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1.5 duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </motion.button>

          {/* Cheerful doodle note under button */}
          <div className="mt-4 flex items-center gap-1.5 text-xs text-[#528261] font-medium">
            <span>👇 Bấm vào nút trên để vào trang nha!</span>
          </div>
        </motion.div>

        {/* Quick energetic interactive photo teaser chip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
          className="mt-8 flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/90 border border-[#D5E9DC] shadow-xs backdrop-blur-xs"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5E9DC] shrink-0">
            <img
              src={RECYCLING_WORKSHOP_IMAGE}
              alt="Học sinh FPT"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium text-[#24422D]">
              Workshop tái chế & trồng cây thực tế
            </div>
            <div className="text-[11px] text-[#608E6E] font-light">
              Hơn 500+ học sinh TH đến THPT đã cùng trải nghiệm
            </div>
          </div>
        </motion.div>

      </main>

      {/* Cheerful Footer */}
      <footer className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-light text-[#6E9B7D] z-10 pt-2 border-t border-[#DDECE1]">
        <div className="flex items-center gap-1.5">
          <span>Dã Hoa Khai Xứ</span>
          <span>·</span>
          <span>Sáng tạo bởi nhóm sinh viên Đại học FPT</span>
        </div>
        <div className="flex items-center gap-3 font-normal text-[#487856]">
          <span>🌿 Không lý thuyết khô khan</span>
          <span>·</span>
          <span>🎨 100% Trải nghiệm thực tế</span>
        </div>
      </footer>
    </motion.div>
  );
};
