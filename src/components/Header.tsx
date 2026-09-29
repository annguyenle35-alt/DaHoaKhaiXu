import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenVolunteerModal: () => void;
  onGoBackToWelcome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVolunteerModal, onGoBackToWelcome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2D8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={onGoBackToWelcome}
          className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-[#1A3826] hover:text-[#12281B] transition-colors cursor-pointer text-left"
          title="Về màn hình chào Dã Hoa Khai Xứ"
        >
          Dã Hoa Khai Xứ
        </button>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#4A554A]">
          <a href="#ve-chung-toi" className="hover:text-[#1A3826] transition-colors">
            Về trung tâm
          </a>
          <a href="#huong-di" className="hover:text-[#1A3826] transition-colors">
            Hướng đi chiến lược
          </a>
          <a href="#muc-tieu" className="hover:text-[#1A3826] transition-colors">
            Mục tiêu hành động
          </a>
          <a href="#du-an" className="hover:text-[#1A3826] transition-colors">
            Dự án bảo tồn
          </a>
          <a href="#tinh-toan-sinh-thai" className="hover:text-[#1A3826] transition-colors">
            Gieo mầm xanh
          </a>
          <a href="#tram-nghien-cuu" className="hover:text-[#1A3826] transition-colors">
            Trạm thực địa
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenVolunteerModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] rounded-md hover:bg-[#2C593D] transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            <span>Tham gia bảo tồn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#242924] hover:text-[#1A3826] focus:outline-none"
            aria-label="Mở menu chuyển hướng"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E7E2D8] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#3A453A]">
            <a
              href="#ve-chung-toi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Về trung tâm
            </a>
            <a
              href="#huong-di"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Hướng đi chiến lược
            </a>
            <a
              href="#muc-tieu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Mục tiêu hành động
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Dự án bảo tồn
            </a>
            <a
              href="#tinh-toan-sinh-thai"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Gieo mầm xanh
            </a>
            <a
              href="#tram-nghien-cuu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Trạm thực địa
            </a>
            <a
              href="#an-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1A3826]"
            >
              Cẩm nang & Báo cáo
            </a>
          </nav>
          <div className="pt-4 border-t border-[#E7E2D8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteerModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#1A3826] rounded-md hover:bg-[#2C593D] transition-colors"
            >
              <span>Tham gia bảo tồn</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
