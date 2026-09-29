import React, { useState } from 'react';
import { STRATEGIC_DIRECTIONS } from '../data/mockData';
import { ArrowRight, Trees, Droplets, BookOpen, SunMedium, Check } from 'lucide-react';

export const StrategicDirections: React.FC = () => {
  const [activeDirectionIndex, setActiveDirectionIndex] = useState(0);

  const getDirectionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trees className="w-6 h-6 text-[#1A3826]" />;
      case 1:
        return <Droplets className="w-6 h-6 text-[#1A3826]" />;
      case 2:
        return <BookOpen className="w-6 h-6 text-[#1A3826]" />;
      case 3:
        return <SunMedium className="w-6 h-6 text-[#1A3826]" />;
      default:
        return <Trees className="w-6 h-6 text-[#1A3826]" />;
    }
  };

  const detailedPillars = [
    {
      methodology: 'Diễn thế tuần tự 3 giai đoạn: Thảo mộc hoa dại cố định đạm làm mềm tầng đất -> Cây bụi giữ ẩm -> Cây gỗ lớn bản địa che bóng mát.',
      indicators: 'Tỷ lệ che phủ sinh thái đa tầng > 85%; Đa dạng côn trùng thụ phấn tăng tối thiểu 200%.',
      inAction: 'Hợp tác cùng 12 hợp tác xã nông lâm bản địa thu hái quả chín tự nhiên, không khai thác hạt non.',
    },
    {
      methodology: 'Thiết lập các đệm thực vật ven bờ (Riparian Buffers) từ các loài rễ chùm và cây thủy sinh bản địa như dứa dại, gừa, cỏ vetiver.',
      indicators: 'Độ đục và hàm lượng thuốc bảo vệ thực vật dư thừa trong nước giảm 60%; Giữ mạch nước ngầm suốt 5 tháng mùa khô hạn.',
      inAction: 'Cắm mốc bảo vệ nghiêm ngặt 180km bờ suối quanh các vùng canh tác chè và cà phê.',
    },
    {
      methodology: 'Tôn trọng và hệ thống hóa tri thức cổ truyền của người K’Ho, M’Nông, Chu-ru về thời điểm gieo hạt, các loài thảo mộc chỉ thị thời tiết.',
      indicators: '100% người dân tham gia được chi trả dịch vụ môi trường rừng công bằng; 0 vụ phá rừng xảy ra tại vùng dự án.',
      inAction: 'Mở các lớp học dã ngoại cuối tuần tại Trạm thực địa cho học sinh các trường nội trú.',
    },
    {
      methodology: 'Mô hình Vườn rừng Nông lâm kết hợp (Agroforestry): Trồng dược liệu, mật ong hoa dại, cà phê hữu cơ dưới tán cây rừng bản địa.',
      indicators: 'Thu nhập nông hộ tăng 35% nhờ sản phẩm sinh thái được chứng nhận; Ngưng sử dụng 100% thuốc diệt cỏ glyphosate.',
      inAction: 'Xây dựng thương hiệu “Mật Ong Hoa Rừng Dã Hoa” hỗ trợ đầu ra cho đồng bào.',
    },
  ];

  return (
    <section id="huong-di" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>02. Chiến lược Hành động</span>
            <span aria-hidden="true">·</span>
            <span>Hướng Đi Trọng Tâm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            4 Hướng Đi Chiến Lược Vun Đắp Tương Lai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Chúng tôi định hướng hoạt động dựa trên sự phối hợp đồng bộ giữa <strong>Khoa học Sinh thái học Thực nghiệm</strong>, <strong>Sự tham gia của Cộng đồng Bản địa</strong> và <strong>Giải pháp Dựa vào Thiên nhiên (Nature-based Solutions)</strong>.
          </p>
        </div>

        {/* Strategic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STRATEGIC_DIRECTIONS.map((direction, idx) => {
            const isSelected = activeDirectionIndex === idx;
            return (
              <div
                key={direction.number}
                onClick={() => setActiveDirectionIndex(idx)}
                className={`cursor-pointer p-6 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#1A3826] shadow-md ring-1 ring-[#1A3826]'
                    : 'bg-[#FAF8F5] border-[#E7E2D8] hover:bg-white hover:border-[#CADBCF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-[#1A3826]/60 tabular-nums">
                      {direction.number}
                    </span>
                    <div className="p-2 bg-[#FAF8F5] rounded-lg border border-[#E7E2D8]">
                      {getDirectionIcon(idx)}
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-[#C25E2B] font-semibold block mb-1">
                    {direction.tag}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-[#1A3826] leading-snug mb-2">
                    {direction.title}
                  </h3>
                  <p className="text-xs text-[#78716C] italic mb-3">
                    {direction.englishTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed line-clamp-3">
                    {direction.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E7E2D8] flex items-center justify-between text-xs font-semibold text-[#1A3826]">
                  <span>Chi tiết giải pháp</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#C25E2B]' : 'text-[#78716C]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Direction Deep Dive Panel */}
        <div className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E7E2D8]">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#78716C] mb-1">
                <span className="font-semibold text-[#C25E2B]">Trụ cột {STRATEGIC_DIRECTIONS[activeDirectionIndex].number}</span>
                <span aria-hidden="true">·</span>
                <span>{STRATEGIC_DIRECTIONS[activeDirectionIndex].englishTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1A3826]">
                {STRATEGIC_DIRECTIONS[activeDirectionIndex].title}
              </h3>
            </div>
            <div className="shrink-0">
              <span className="inline-block px-3 py-1.5 text-xs font-medium text-[#1A3826] bg-[#FAF8F5] border border-[#CADBCF] rounded-md">
                Phương pháp tiếp cận: Dựa vào Tự nhiên (NbS)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1A3826]" />
                <span>Phương Pháp Luận Khoa Học</span>
              </h4>
              <p className="text-sm text-[#44403C] leading-relaxed">
                {detailedPillars[activeDirectionIndex].methodology}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1A3826]" />
                <span>Chỉ Số Đo Lường Hiệu Quả (KPI)</span>
              </h4>
              <p className="text-sm text-[#44403C] leading-relaxed">
                {detailedPillars[activeDirectionIndex].indicators}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1A3826]" />
                <span>Hành Động Đang Triển Khai</span>
              </h4>
              <p className="text-sm text-[#44403C] leading-relaxed">
                {detailedPillars[activeDirectionIndex].inAction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
