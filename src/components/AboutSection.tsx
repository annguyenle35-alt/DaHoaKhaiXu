import React from 'react';
import { PHILOSOPHY_PRINCIPLES, NURSERY_IMAGE } from '../data/mockData';
import { CheckCircle2, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="ve-chung-toi" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>01. Nguồn cội & Sứ mệnh</span>
            <span aria-hidden="true">·</span>
            <span>Về Trung Tâm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            Tại sao lại là “Dã Hoa Khai Xứ”?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Trong chữ Hán Việt, <strong className="text-[#1A3826]">“Dã Hoa”</strong> là hoa dại mọc nơi hoang sơ, mộc mạc nhưng sở hữu sức sống mãnh liệt nhất của đất trời. <strong className="text-[#1A3826]">“Khai Xứ”</strong> là nơi chốn nở rộ, khai sinh và lan tỏa. Trung tâm ra đời với một ước vọng giản dị mà sâu sắc: Trả lại cho tự nhiên quyền được tự chữa lành, để hoa dại và thảm thực vật bản địa có thể nở rộ khắp mọi ngóc ngách của non sông.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-[#44403C]">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E7E2D8] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#C25E2B] font-semibold block mb-2">
                Bối Cảnh Ra Đời
              </span>
              <p className="text-base leading-relaxed">
                Nhiều thập kỷ qua, hàng vạn hecta rừng tự nhiên bị thay thế bởi các đồn điền cây công nghiệp hoặc các dự án phủ xanh mang tính hình thức bằng những loài cây keo, bạch đàn ngoại lai. Những cánh rừng đó vắng bóng tiếng chim, không có côn trùng thụ phấn và đất đai ngày càng chai sạn, trơ cằn.
              </p>
              <p className="text-base leading-relaxed mt-4">
                Trung tâm Bảo tồn Môi trường <strong className="text-[#1A3826]">“Dã Hoa Khai Xứ”</strong> được đồng sáng lập bởi các nhà thực vật học, kỹ sư sinh thái và đại diện người dân tộc thiểu số bản địa vào năm 2021, nhằm tạo dựng một phương thức bảo tồn khác biệt: <em>Tái hoang dã có kiểm soát, tôn trọng tuyệt đối quy luật diễn thế tự nhiên</em>.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[#1A3826]/20 bg-[#1A3826]/5">
              <div className="flex items-start gap-4">
                <Feather className="w-6 h-6 text-[#1A3826] shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg font-semibold text-[#1A3826]">
                    Tuyên Ngôn Đạo Đức Sinh Thái
                  </h4>
                  <p className="text-sm text-[#44403C] mt-2 leading-relaxed">
                    “Chúng ta không làm đẹp cho thiên nhiên. Thiên nhiên vốn đã toàn hảo. Nhiệm vụ duy nhất của người làm bảo tồn là dỡ bỏ những rào cản do con người áp đặt, tạo không gian an lành để vạn vật tự hồi sinh.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D6CEBE] bg-[#EFECE6] shadow-md aspect-[4/3]">
              <img
                src={NURSERY_IMAGE}
                alt="Người dân bản địa cùng kỹ sư chăm sóc vườn ươm giống hoa dại và cây rừng tại Dã Hoa Khai Xứ"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-xs sm:text-sm">
                <p className="font-serif italic">
                  Vườn ươm cộng đồng số 2 tại Lạc Dương — Nơi bảo tồn hơn 120 loài thảo mộc và cây gỗ bản địa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Philosophy Principles */}
        <div>
          <div className="border-t border-[#E7E2D8] pt-12 mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A3826]">
              4 Nguyên Tắc Sinh Thái Cốt Lõi
            </h3>
            <p className="text-sm text-[#78716C] mt-1">
              Kim chỉ nam định hướng mọi dự án thực địa của Trung tâm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E7E2D8] flex flex-col justify-between hover:border-[#1A3826]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C25E2B] font-semibold mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1A3826]" />
                    <span>Nguyên tắc 0{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-[#1A3826] mb-1">
                    {principle.title}
                  </h4>
                  <p className="text-xs text-[#78716C] italic mb-3">
                    {principle.english}
                  </p>
                  <p className="text-sm text-[#44403C] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
