import React from 'react';
import {
  ArrowLeft,
  Heart,
  Target,
  Compass,
  Users,
  Sprout,
  Recycle,
  BookOpen,
  Mail,
  Phone
} from 'lucide-react';
import {
  RECYCLING_WORKSHOP_IMAGE,
  NURSERY_IMAGE,
  EDUCATION_IMAGE
} from '../data/mockData';

interface MainEducationPortalProps {
  onBackToWelcome: () => void;
}

export const MainEducationPortal: React.FC<MainEducationPortalProps> = ({
  onBackToWelcome,
}) => {
  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#334D3D] font-light selection:bg-[#72A285] selection:text-white">
      {/* Top minimal header */}
      <header className="sticky top-0 z-30 bg-[#F8FAF8]/95 backdrop-blur-xs border-b border-[#E1ECE3]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={onBackToWelcome}
            className="inline-flex items-center gap-2 text-xs font-light text-[#5E8A6E] hover:text-[#2B4B37] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Màn hình trước</span>
          </button>

          <span className="text-base font-normal tracking-wide text-[#2B4B37]">
            Dã Hoa Khai Xứ
          </span>

          <span className="text-[11px] text-[#78A388] tracking-wider uppercase font-light">
            Dự án sinh viên FPT
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-12">
        
        {/* 1. LỜI CHÀO VÀ CẢM ƠN */}
        <section className="bg-white rounded-2xl border border-[#E1ECE3] p-7 sm:p-10 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F5F1] text-[#48735B] text-xs font-normal mb-4">
            <Heart className="w-3.5 h-3.5 text-[#5E8A6E]" />
            <span>Lời chào thân ái</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-light text-[#2B4B37] leading-snug mb-4 tracking-tight">
            Xin chào và cảm ơn vì đã chọn trung tâm của chúng tôi!
          </h1>

          <p className="text-sm sm:text-base font-light text-[#4A6B54] leading-relaxed mb-3">
            Chúng mình là một nhóm bạn trẻ đến từ trường Đại học FPT, mang trong mình niềm yêu thích cây cỏ thiên nhiên và mong muốn lan tỏa lối sống xanh đến thế hệ học sinh qua dự án <span className="font-normal text-[#2B4B37]">Dã Hoa Khai Xứ</span>.
          </p>

          <p className="text-sm sm:text-base font-light text-[#55705E] leading-relaxed">
            Rất vui mừng và biết ơn khi được đồng hành cùng quý nhà trường, thầy cô và các bạn học sinh trên con đường khám phá và bảo vệ môi trường sống quanh mình.
          </p>
        </section>

        {/* 2. MỤC TIÊU & 3. ĐỊNH HƯỚNG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* MỤC TIÊU */}
          <section className="bg-white rounded-2xl border border-[#E1ECE3] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E8A6E] mb-3">
                <Target className="w-4 h-4 text-[#72A285]" />
                <span>Mục tiêu của nhóm</span>
              </div>

              <h2 className="text-xl font-normal text-[#2B4B37] mb-4">
                Mục tiêu:
              </h2>

              <ul className="space-y-3 text-sm font-light text-[#4A6B54] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span>Khơi dậy tình yêu thiên nhiên và sự gắn bó với môi trường một cách tự nhiên, gần gũi.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span>Giúp các em nhận biết các loài hoa dại, cây bản địa và hiểu được vai trò của cây cỏ đối với đất và nguồn nước.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span>Hình thành thói quen xanh hằng ngày: không xả rác bừa bãi, phân loại rác và tái chế đồ dùng.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ĐỊNH HƯỚNG */}
          <section className="bg-white rounded-2xl border border-[#E1ECE3] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E8A6E] mb-3">
                <Compass className="w-4 h-4 text-[#72A285]" />
                <span>Phương châm hoạt động</span>
              </div>

              <h2 className="text-xl font-normal text-[#2B4B37] mb-4">
                Định hướng:
              </h2>

              <ul className="space-y-3 text-sm font-light text-[#4A6B54] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span><strong>Học qua thực hành:</strong> Học sinh được tận tay chạm đất, gieo hạt, làm đồ tái chế thay vì chỉ nghe lý thuyết.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span><strong>Gần gũi và vui tươi:</strong> Các buổi sinh hoạt diễn ra nhẹ nhàng, tích cực, tạo không khí hào hứng cho học trò.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#72A285] mt-2 shrink-0" />
                  <span><strong>Gắn kết lâu dài:</strong> Phối hợp cùng nhà trường để xây dựng các thói quen xanh bền vững trong lớp học.</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* 4. KHÁCH HÀNG: HỌC SINH TỪ TH ĐẾN THPT */}
        <section className="bg-white rounded-2xl border border-[#E1ECE3] p-7 sm:p-9 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E8A6E] mb-2">
            <Users className="w-4 h-4 text-[#72A285]" />
            <span>Đối tượng đồng hành</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-normal text-[#2B4B37] mb-2">
            Các khách hàng: Học sinh từ TH đến THPT
          </h2>
          <p className="text-sm font-light text-[#55705E] mb-6">
            Mỗi lứa tuổi được nhóm thiết kế nội dung sinh hoạt phù hợp với nhận thức và sở thích:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* TH */}
            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E1ECE3]">
              <div className="text-xs font-normal text-[#48735B] uppercase tracking-wide mb-1">
                Tiểu học (TH)
              </div>
              <h3 className="text-sm font-normal text-[#2B4B37] mb-2">
                Khám phá & Trò chơi
              </h3>
              <p className="text-xs font-light text-[#55705E] leading-relaxed">
                Quan sát các loài hoa dại, nghe kể chuyện về thiên nhiên, vẽ tranh lá cây và tự tay ươm mầm hoa nhỏ mang về.
              </p>
            </div>

            {/* THCS */}
            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E1ECE3]">
              <div className="text-xs font-normal text-[#48735B] uppercase tracking-wide mb-1">
                THCS
              </div>
              <h3 className="text-sm font-normal text-[#2B4B37] mb-2">
                Kỹ năng & Tái chế
              </h3>
              <p className="text-xs font-light text-[#55705E] leading-relaxed">
                Học cách phân loại rác tại nguồn, biến rác tái chế thành vật dụng hữu ích và rèn luyện kỹ năng sinh hoạt dã ngoại xanh.
              </p>
            </div>

            {/* THPT */}
            <div className="p-4 rounded-xl bg-[#F8FAF8] border border-[#E1ECE3]">
              <div className="text-xs font-normal text-[#48735B] uppercase tracking-wide mb-1">
                THPT
              </div>
              <h3 className="text-sm font-normal text-[#2B4B37] mb-2">
                Dự án & Lan tỏa
              </h3>
              <p className="text-xs font-light text-[#55705E] leading-relaxed">
                Thực hiện các đề tài nghiên cứu sinh thái nhỏ, phát triển câu lạc bộ môi trường học đường và giao lưu cùng nhóm FPT.
              </p>
            </div>

          </div>
        </section>

        {/* 5. CÁC HOẠT ĐỘNG: WORKSHOP TÁI CHẾ, TRỒNG CÂY, DẠY HỌC (CÓ ẢNH CHÂN THẬT) */}
        <section className="bg-white rounded-2xl border border-[#E1ECE3] p-7 sm:p-9 shadow-xs space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#5E8A6E] mb-2">
              <Sprout className="w-4 h-4 text-[#72A285]" />
              <span>Hình ảnh trải nghiệm thực tế</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-normal text-[#2B4B37]">
              Các hoạt động của trung tâm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hoạt động 1: Workshop tái chế */}
            <div className="border border-[#E1ECE3] rounded-2xl overflow-hidden bg-[#F8FAF8] flex flex-col justify-between">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#EBF2EC]">
                  <img
                    src={RECYCLING_WORKSHOP_IMAGE}
                    alt="Workshop tái chế cùng học sinh"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#5E8A6E] font-normal mb-1">
                    <Recycle className="w-3.5 h-3.5 text-[#72A285]" />
                    <span>Thực hành sáng tạo</span>
                  </div>
                  <h3 className="text-base font-normal text-[#2B4B37] mb-2">
                    Làm workshop tái chế
                  </h3>
                  <p className="text-xs font-light text-[#55705E] leading-relaxed">
                    Học sinh cùng nhóm bạn trẻ FPT tái chế chai nhựa, hộp giấy và bìa carton thành những chậu cây xanh, hộp đựng bút và đồ dùng dễ thương.
                  </p>
                </div>
              </div>
            </div>

            {/* Hoạt động 2: Trồng cây & Ươm hoa */}
            <div className="border border-[#E1ECE3] rounded-2xl overflow-hidden bg-[#F8FAF8] flex flex-col justify-between">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#EBF2EC]">
                  <img
                    src={NURSERY_IMAGE}
                    alt="Hoạt động trồng cây và ươm giống hoa dại"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#5E8A6E] font-normal mb-1">
                    <Sprout className="w-3.5 h-3.5 text-[#72A285]" />
                    <span>Ươm mầm sự sống</span>
                  </div>
                  <h3 className="text-base font-normal text-[#2B4B37] mb-2">
                    Trồng cây & Ươm hoa
                  </h3>
                  <p className="text-xs font-light text-[#55705E] leading-relaxed">
                    Các em được hướng dẫn chuẩn bị giá thể đất mùn hữu cơ, tự tay tra hạt giống hoa dại bản địa và chăm sóc mầm xanh mang về trường hoặc nhà.
                  </p>
                </div>
              </div>
            </div>

            {/* Hoạt động 3: Dạy học & Sinh hoạt môi trường */}
            <div className="border border-[#E1ECE3] rounded-2xl overflow-hidden bg-[#F8FAF8] flex flex-col justify-between">
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#EBF2EC]">
                  <img
                    src={EDUCATION_IMAGE}
                    alt="Dạy học và sinh hoạt môi trường ngoài trời"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#5E8A6E] font-normal mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#72A285]" />
                    <span>Tri thức sinh thái</span>
                  </div>
                  <h3 className="text-base font-normal text-[#2B4B37] mb-2">
                    Dạy học & Chia sẻ
                  </h3>
                  <p className="text-xs font-light text-[#55705E] leading-relaxed">
                    Những tiết học sinh động giữa thiên nhiên, trò chơi đố vui về môi trường và các buổi thảo luận mở giúp các em tiếp thu kiến thức một cách tự nhiên.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* THÔNG TIN LIÊN HỆ GỌN GÀNG (ĐÃ BỎ PHẦN LỜI NHẮN) */}
        <section className="bg-[#F0F5F1] rounded-2xl border border-[#D5E3D8] p-6 text-center">
          <p className="text-xs font-light text-[#55705E] mb-3">
            Thông tin kết nối cùng nhóm bạn trẻ FPT – Dã Hoa Khai Xứ:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#2B4B37] font-normal">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#72A285]" />
              <span>dahoakhaixu.fpt@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#72A285]" />
              <span>0912 345 678</span>
            </div>
          </div>
        </section>

      </main>

      {/* Clean minimal footer */}
      <footer className="border-t border-[#E1ECE3] py-8 text-center text-xs font-light text-[#78A388]">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Dã Hoa Khai Xứ · Dự án của nhóm bạn trẻ Đại học FPT</span>
          <button
            onClick={onBackToWelcome}
            className="text-[#5E8A6E] hover:underline cursor-pointer"
          >
            ← Về màn hình giới thiệu
          </button>
        </div>
      </footer>
    </div>
  );
};
