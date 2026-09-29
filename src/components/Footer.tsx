import React from 'react';
import { Mail, Phone, MapPin, Globe, Leaf } from 'lucide-react';

interface FooterProps {
  onOpenVolunteerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVolunteerModal }) => {
  return (
    <footer className="bg-[#12281B] text-[#CADBCF] pt-16 pb-12 border-t border-[#2C593D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#2C593D]/60">
          {/* Brand & Manifesto */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#"
              className="text-2xl font-serif font-bold text-white hover:text-[#E5EFE7] transition-colors block"
            >
              Dã Hoa Khai Xứ
            </a>
            <p className="text-xs text-[#8FA896] uppercase tracking-widest font-semibold">
              Trung tâm Bảo tồn & Phục hồi Sinh thái Bản địa
            </p>
            <p className="text-sm text-[#CADBCF]/90 leading-relaxed">
              Tổ chức phi lợi nhuận hướng tới tương lai bền vững, nơi hoa dại và hệ thực vật nguyên chủng tự sinh sôi nảy nở trên mọi triền núi quê hương.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#12281B] bg-[#E5EFE7] hover:bg-white rounded transition-colors cursor-pointer"
              >
                Đồng hành cùng chúng tôi
              </button>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Cổng Thông Tin
            </h4>
            <ul className="space-y-2 text-xs text-[#CADBCF]">
              <li>
                <a href="#ve-chung-toi" className="hover:text-white transition-colors">
                  Nguồn cội & Sứ mệnh
                </a>
              </li>
              <li>
                <a href="#huong-di" className="hover:text-white transition-colors">
                  4 Hướng đi chiến lược
                </a>
              </li>
              <li>
                <a href="#muc-tieu" className="hover:text-white transition-colors">
                  Mục tiêu 2025 – 2035
                </a>
              </li>
              <li>
                <a href="#du-an" className="hover:text-white transition-colors">
                  Dự án đang thực hiện
                </a>
              </li>
              <li>
                <a href="#tinh-toan-sinh-thai" className="hover:text-white transition-colors">
                  Công cụ gieo mầm
                </a>
              </li>
              <li>
                <a href="#an-pham" className="hover:text-white transition-colors">
                  Thư viện tài liệu mở
                </a>
              </li>
            </ul>
          </div>

          {/* Scientific Network */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Đối Tác Nghiên Cứu
            </h4>
            <ul className="space-y-2 text-xs text-[#CADBCF]/80">
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#C25E2B]" />
                <span>Viện Sinh thái Học & Tài nguyên Sinh vật</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#C25E2B]" />
                <span>Mạng lưới Bảo tồn Đa dạng Sinh học Đông Trường Sơn</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#C25E2B]" />
                <span>Hợp tác xã Nông Lâm Sinh thái Bản địa Lạc Dương</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#C25E2B]" />
                <span>Ban Quản lý Rừng Phòng hộ Đầu nguồn Sông Đa Nhim</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Liên Hệ Thực Địa
            </h4>
            <div className="space-y-2.5 text-xs text-[#CADBCF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C25E2B] shrink-0 mt-0.5" />
                <span>Thôn Đăng Gia R’Mưng, Xã Đạ Sar, Huyện Lạc Dương, Tỉnh Lâm Đồng</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C25E2B] shrink-0" />
                <span className="font-mono">lienhe@dahoakhaixu.org.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C25E2B] shrink-0" />
                <span className="font-mono">(+84) 263 389 2468</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C25E2B] shrink-0" />
                <span>Giờ đón khách thực địa: Thứ Ba – Chủ Nhật (08:30 – 16:30)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8FA896]">
          <div>
            © {new Date().getFullYear()} Trung tâm Bảo tồn Môi trường “Dã Hoa Khai Xứ”. Bản quyền nội dung mở (CC BY-SA 4.0).
          </div>
          <div className="flex items-center gap-4 text-[#CADBCF]">
            <span>Minh bạch tài chính 100%</span>
            <span aria-hidden="true">·</span>
            <span>Không rác thải tại hiện trường</span>
            <span aria-hidden="true">·</span>
            <span>Tôn trọng tri thức bản địa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
