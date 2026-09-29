import React from 'react';
import { MapPin, ShieldCheck, Compass, Sparkles } from 'lucide-react';

export const OperationalBar: React.FC = () => {
  return (
    <div className="bg-[#1A3826] text-[#E5EFE7] border-b border-[#2C593D] py-3 text-xs tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C25E2B]" />
          <span className="font-semibold text-white">Tổ chức Phi lợi nhuận Độc lập</span>
          <span className="text-[#849C8B]" aria-hidden="true">·</span>
          <span className="text-[#CADBCF]">Đăng ký nghiên cứu bảo tồn đa dạng sinh học</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-[#CADBCF]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C25E2B]" />
            <span>Trụ sở chính: Vùng đệm Bidoup - Cao nguyên Lâm Viên</span>
          </div>
          <span className="text-[#849C8B]" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#CADBCF]" />
            <span>03 Trạm thực địa vệ tinh</span>
          </div>
          <span className="text-[#849C8B]" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span className="text-white font-medium">Báo cáo định kỳ 100% minh bạch</span>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-auto text-xs">
          <a
            href="#an-pham"
            className="text-white underline underline-offset-4 decoration-[#CADBCF] hover:text-[#CADBCF] transition-colors"
          >
            Tải Báo cáo Sinh thái 2024
          </a>
        </div>
      </div>
    </div>
  );
};
