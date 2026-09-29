import React from 'react';
import { ArrowDown, Sprout, Compass } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onOpenVolunteerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVolunteerModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest text-[#78716C] mb-4">
          <span className="font-semibold text-[#1A3826]">Dã Hoa Khai Xứ</span>
          <span aria-hidden="true">·</span>
          <span>Trung tâm Bảo tồn Sinh thái & Phục hồi Đa dạng Sinh học</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Thành lập 2021</span>
        </div>

        {/* Main Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#1A3826] leading-[1.15] text-balance">
              Nơi hoa dại nở khắp muôn nơi, <br className="hidden sm:block" />
              nơi đất mẹ tự tái sinh sự sống.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed">
              Chúng tôi không chỉ trồng cây, chúng tôi đánh thức lại quy luật chữa lành nguyên bản của thiên nhiên. Phục hồi thảm thực vật bản địa, bảo vệ nguồn nước và gìn giữ từng khóm hoa dã quỳ, mua rừng, cỏ dại trên từng triền núi.
            </p>
          </div>
        </div>

        {/* Hero Visual Presentation */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D6CEBE] bg-[#EFECE6] mb-12 aspect-[16/9] max-h-[580px]">
          <img
            src={HERO_IMAGE}
            alt="Thung lũng hoa dại và hệ sinh thái bản địa tại trạm nghiên cứu Dã Hoa Khai Xứ"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient scrim for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#E5EFE7] mb-2 inline-block">
                Khu Bảo tồn Vùng đệm Cao nguyên · Giai đoạn 2024 - 2028
              </span>
              <p className="text-lg sm:text-xl font-serif italic text-white/95 leading-snug">
                “Mỗi đóa hoa dại nở trên triền núi trọc là một chiến thắng của sự sống trước thoái hóa và biến đổi khí hậu.”
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls & Quantified Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
          <div className="md:col-span-5 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenVolunteerModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-md transition-all shadow-sm cursor-pointer"
            >
              <Sprout className="w-4 h-4 text-[#CADBCF]" />
              <span>Gieo hạt cùng Trung tâm</span>
            </button>
            <a
              href="#huong-di"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1A3826] bg-white border border-[#D6CEBE] hover:border-[#1A3826] rounded-md transition-all hover:bg-[#FAF8F5]"
            >
              <Compass className="w-4 h-4 text-[#78716C]" />
              <span>Xem hướng đi & mục tiêu</span>
            </a>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t sm:border-t-0 sm:border-l border-[#E7E2D8] sm:pl-8 pt-6 sm:pt-0">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] tabular-nums">
                14.800 <span className="text-sm font-sans font-normal text-[#78716C]">ha</span>
              </div>
              <div className="text-xs text-[#57534E] mt-1">Diện tích giám sát phục hồi</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] tabular-nums">
                320.000 <span className="text-sm font-sans font-normal text-[#78716C]">cây</span>
              </div>
              <div className="text-xs text-[#57534E] mt-1">Cây & mầm hoa bản địa</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] tabular-nums">
                94,2 <span className="text-sm font-sans font-normal text-[#78716C]">%</span>
              </div>
              <div className="text-xs text-[#57534E] mt-1">Tỷ lệ cây rừng sống sót</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] tabular-nums">
                42 <span className="text-sm font-sans font-normal text-[#78716C]">loài</span>
              </div>
              <div className="text-xs text-[#57534E] mt-1">Hoa dại nguy cấp bảo tồn</div>
            </div>
          </div>
        </div>

        {/* Subtle scroll anchor */}
        <div className="flex justify-center mt-12">
          <a
            href="#ve-chung-toi"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] hover:text-[#1A3826] transition-colors"
          >
            <span>Tìm hiểu nguồn cội & triết lý</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
