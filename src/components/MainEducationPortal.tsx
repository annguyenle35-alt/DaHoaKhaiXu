import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Heart,
  Globe2,
  Recycle,
  Sparkles,
  Users2,
  Sprout,
  BookOpen,
  Mail,
  Phone,
  ExternalLink,
  Flame,
  CheckCircle2,
  Music2,
  Zap,
  Smile
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#F6FAF6] text-[#24422D] font-light selection:bg-[#72A285] selection:text-white relative overflow-x-hidden"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#E1F2E6]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#EAF5ED]/70 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#F6FAF6]/90 backdrop-blur-md border-b border-[#DDECE1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <motion.button
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onBackToWelcome}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#D5E9DC] text-xs font-normal text-[#3E6D4E] hover:text-[#1D3A24] hover:border-[#86CFA0] transition-colors cursor-pointer shadow-2xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Màn hình chính</span>
          </motion.button>

          <div className="flex items-center gap-2">
            <span className="font-normal text-base text-[#1D3A24]">
              Dã Hoa Khai Xứ
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#E3F2E7] text-[#2F5E3C] font-normal hidden sm:inline-block">
              FPT Green Youth
            </span>
          </div>

          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-normal hover:bg-[#222] transition-colors shadow-2xs cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
            <span>Kênh TikTok</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16 relative z-10">
        
        {/* 1. ĐẦU TRANG: CẢM ƠN VÌ ĐÃ GHÉ TRANG CỦA CHÚNG TÔI (LIVELY & WARM) */}
        <section className="bg-white rounded-3xl border-2 border-[#D5E9DC] p-7 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Fun graphic badges at the corner */}
          <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-br from-[#E3F2E7] to-[#CDE8D4] rounded-full blur-xl opacity-60 pointer-events-none" />
          
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F5EC] text-[#2F5E3C] text-xs font-medium border border-[#C6E4CF]">
              <Heart className="w-3.5 h-3.5 text-[#E05353] fill-[#E05353]" />
              <span>Lời cảm ơn từ tụi mình</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#528261] font-normal bg-[#F6FAF6] px-3 py-1 rounded-full border border-[#DDECE1]">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Lan tỏa năng lượng xanh</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-light text-[#1D3A24] leading-snug mb-4 tracking-tight">
            Cảm ơn vì đã ghé trang của chúng tôi! <span className="inline-block animate-bounce">🌿</span>
          </h1>

          <p className="text-sm sm:text-base font-light text-[#3C6448] leading-relaxed mb-4 max-w-3xl">
            Chào bạn nha! Tụi mình là một nhóm bạn trẻ đầy nhiệt huyết đến từ trường Đại học FPT. Dự án <strong className="font-normal text-[#1D3A24]">Dã Hoa Khai Xứ</strong> ra đời với ước mong giản dị nhưng đầy khát khao: cùng các bạn học sinh từ Tiểu học đến THPT tạo nên những thói quen xanh tích cực qua các hoạt động trải nghiệm thực tế, vui vẻ và ý nghĩa.
          </p>

          <p className="text-sm sm:text-base font-light text-[#4A7256] leading-relaxed">
            Sự quan tâm của bạn chính là nguồn động lực to lớn để tụi mình tiếp tục gom góp những chiếc chai nhựa cũ, gieo thêm những mầm hoa dại và mang tiếng cười sinh thái đến nhiều ngôi trường hơn!
          </p>

          {/* DYNAMIC IMPACT COUNTERS STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-[#EAF2EC]">
            <div className="p-3 rounded-2xl bg-[#F6FAF6] border border-[#DCEEE1] text-center">
              <div className="text-xl sm:text-2xl font-normal text-[#2F5E3C] flex items-center justify-center gap-1">
                <span>500+</span>
                <span className="text-xs">🎒</span>
              </div>
              <div className="text-[11px] text-[#5C8A6C] font-light mt-0.5">Học sinh tham gia</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#F6FAF6] border border-[#DCEEE1] text-center">
              <div className="text-xl sm:text-2xl font-normal text-[#2F5E3C] flex items-center justify-center gap-1">
                <span>350+</span>
                <span className="text-xs">🌱</span>
              </div>
              <div className="text-[11px] text-[#5C8A6C] font-light mt-0.5">Chậu cây tái chế</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#F6FAF6] border border-[#DCEEE1] text-center">
              <div className="text-xl sm:text-2xl font-normal text-[#2F5E3C] flex items-center justify-center gap-1">
                <span>15+</span>
                <span className="text-xs">🏫</span>
              </div>
              <div className="text-[11px] text-[#5C8A6C] font-light mt-0.5">Buổi workshop kết nối</div>
            </div>

            <div className="p-3 rounded-2xl bg-[#F6FAF6] border border-[#DCEEE1] text-center">
              <div className="text-xl sm:text-2xl font-normal text-[#2F5E3C] flex items-center justify-center gap-1">
                <span>100%</span>
                <span className="text-xs">✨</span>
              </div>
              <div className="text-[11px] text-[#5C8A6C] font-light mt-0.5">Năng lượng tích cực</div>
            </div>
          </div>
        </section>


        {/* 2. MỤC ĐÍCH: 3 Ý CHIA RA 3 KHUNG (HOVER VÀO LÀ NỔI LÊN RÕ RỆT) */}
        <section className="space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Zap className="w-4 h-4 text-[#EAB308]" />
                <span>Mục đích dự án</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Ba mục tiêu tụi mình kiên trì theo đuổi
              </h2>
            </div>

            <span className="text-xs text-[#639273] font-light bg-white px-3 py-1.5 rounded-full border border-[#DCEEE1] shadow-2xs">
              💡 Rê chuột vào từng ô để xem chi tiết nhé
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Khung 1: Nâng cao ý thức & Lan tỏa đến các trường khác */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-[#67B582] transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              {/* Fun top-corner color bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4E8B62] to-[#7BC997]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F5EC] text-[#2F5E3C] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    🌍
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Mục tiêu 01
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Nâng cao ý thức & Lan tỏa đến các trường khác
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  Thay đổi bắt đầu từ những thói quen nhỏ nhất: không vứt rác bừa bãi, tắt bớt đèn và tái sử dụng đồ đạc. Từ một góc lớp học, tụi mình mong muốn nhân rộng mô hình này đến thật nhiều ngôi trường khác để tạo thành một mạng lưới học đường xanh rộng khắp.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#3E6D4E] font-medium">
                <span>Lan tỏa phong trào xanh</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </motion.div>

            {/* Khung 2: Workshop tái chế & Trải nghiệm thực tế */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-[#67B582] transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3B734E] to-[#5FB87C]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E3F2E7] text-[#2F5E3C] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    ♻️
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF3ED] text-[#3E6D4E] text-[11px] font-medium">
                    Mục tiêu 02
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#2F5E3C] transition-colors">
                  Workshop tái chế & Trải nghiệm thực tế
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  “Biến rác thành quà!” Tụi mình tổ chức các buổi workshop thực hành: tự tay cắt chai nhựa làm chậu hoa, ủ rác hữu cơ bón cây và làm sổ tay từ giấy một mặt. Học sinh được nhìn thấy ngay thành quả sáng tạo của chính mình, hào hứng và nhớ lâu hơn.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#3E6D4E] font-medium">
                <span>Học qua làm thật</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </motion.div>

            {/* Khung 3: Tạo việc làm cho các bạn “đặc biệt” */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-2xl hover:border-[#67B582] transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF6E9] text-[#995B00] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                    🤝
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF3E0] text-[#995B00] text-[11px] font-medium">
                    Mục tiêu 03
                  </span>
                </div>

                <h3 className="text-lg font-normal text-[#1D3A24] mb-3 leading-snug group-hover:text-[#995B00] transition-colors">
                  Tạo việc làm cho các bạn “đặc biệt”
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#43644D] leading-relaxed">
                  Dự án mở ra cơ hội việc làm ấm áp cho các bạn trẻ khuyết tật và các bạn có hoàn cảnh đặc biệt. Các bạn sẽ phụ trách chăm sóc vườn mầm cây, phân loại vật liệu tái chế và làm đồ thủ công xanh. Giúp các bạn có thêm thu nhập và tự tin hòa nhập vào xã hội.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F6F1] flex items-center justify-between text-xs text-[#995B00] font-medium">
                <span>Hòa nhập & Yêu thương</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </motion.div>

          </div>
        </section>


        {/* 3. KHÁCH HÀNG: HỌC SINH TỪ TH ĐẾN THPT (YOUTHFUL GRAPHIC TILES) */}
        <section className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-7 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Users2 className="w-4 h-4 text-[#52A36F]" />
                <span>Đối tượng khách hàng</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Học sinh từ bậc Tiểu Học (TH) đến THPT
              </h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-[#EBF3ED] text-[#2F5E3C] font-normal border border-[#D5E9DC]">
              Thiết kế vừa vặn cho từng độ tuổi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* TH */}
            <div className="p-5 rounded-2xl bg-[#FFFBF5] border-2 border-[#FFE8CC] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFE8CC] text-[#B25E00] text-xs font-semibold">
                    🎒 Tiểu Học (TH)
                  </span>
                  <span className="text-xl">🌼</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2">
                  Khám phá & Gieo mầm
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Ngắm những bông hoa dại, nghe kể chuyện thiên nhiên vui nhộn, tự tay vẽ chậu xơ dừa và gieo một hạt giống hoa mang về lớp chăm sóc.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FFE8CC] text-[11px] font-medium text-[#B25E00]">
                Vui vẻ · Cảm xúc · Tự nhiên
              </div>
            </div>

            {/* THCS */}
            <div className="p-5 rounded-2xl bg-[#F4FAF6] border-2 border-[#CFE8D7] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#D8EEDF] text-[#245C34] text-xs font-semibold">
                    🚲 Cấp 2 (THCS)
                  </span>
                  <span className="text-xl">🌱</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2">
                  Thực hành & Kỹ năng
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Học phân loại rác đúng cách, thử tài làm chậu cây từ chai nhựa cũ và rèn luyện kỹ năng sinh hoạt dã ngoại không để lại rác thải.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#CFE8D7] text-[11px] font-medium text-[#245C34]">
                Kỹ năng · Sáng tạo · Hành động
              </div>
            </div>

            {/* THPT */}
            <div className="p-5 rounded-2xl bg-[#F5F8FF] border-2 border-[#D6E3FF] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#D6E3FF] text-[#1E4EB8] text-xs font-semibold">
                    🎓 Cấp 3 (THPT)
                  </span>
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-base font-normal text-[#1D3A24] mb-2">
                  Dự án & Lan tỏa
                </h3>
                <p className="text-xs font-light text-[#4A7256] leading-relaxed">
                  Cùng các anh chị sinh viên FPT tổ chức câu lạc bộ môi trường học đường, thực hiện các dự án tái chế và chiến dịch truyền thông xanh.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#D6E3FF] text-[11px] font-medium text-[#1E4EB8]">
                Lãnh đạo xanh · Đồng hành
              </div>
            </div>

          </div>
        </section>


        {/* 4. CÁC HOẠT ĐỘNG: HÌNH ẢNH CHÂN THẬT (POLAROID STICKER STYLE) */}
        <section className="bg-white rounded-3xl border-2 border-[#DCEEE1] p-7 sm:p-9 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#487856] font-medium mb-1">
                <Flame className="w-4 h-4 text-[#E05353]" />
                <span>Khoảnh khắc chân thật</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24]">
                Các hoạt động sôi nổi tại trung tâm
              </h2>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-[#EBF3ED] text-[#2F5E3C] font-normal border border-[#D5E9DC]">
              📸 Ảnh chụp thực tế các buổi workshop
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hoạt động 1: Workshop tái chế */}
            <motion.div
              whileHover={{ y: -6 }}
              className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative group">
                  <img
                    src={RECYCLING_WORKSHOP_IMAGE}
                    alt="Học sinh FPT làm workshop tái chế"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating sticker on image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                    ♻️ Tái Chế Cực Chill
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5 flex items-center gap-2">
                    <span>Làm workshop tái chế</span>
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Tái chế chai nhựa, hộp sữa và bìa carton thành chậu trồng cây để bàn, hộp bút và đồ trang trí xinh xắn.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hoạt động 2: Trồng cây */}
            <motion.div
              whileHover={{ y: -6 }}
              className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative group">
                  <img
                    src={NURSERY_IMAGE}
                    alt="Hoạt động trồng cây và ươm giống hoa dại"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2F5E3C]/80 backdrop-blur-md text-white text-[11px] font-medium">
                    🌱 Ươm Mầm Sự Sống
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5 flex items-center gap-2">
                    <span>Trồng cây & Ươm hoa</span>
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Học sinh tự tay trộn đất mùn, ươm hạt hoa dại bản địa và trải nghiệm niềm vui rạng rỡ khi thấy cây đâm chồi.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hoạt động 3: Dạy học */}
            <motion.div
              whileHover={{ y: -6 }}
              className="border-2 border-[#DCEEE1] rounded-3xl overflow-hidden bg-[#F6FAF6] flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all"
            >
              <div>
                <div className="aspect-[16/11] overflow-hidden bg-[#E2EFE5] relative group">
                  <img
                    src={EDUCATION_IMAGE}
                    alt="Dạy học và sinh hoạt môi trường ngoài trời"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1E4EB8]/80 backdrop-blur-md text-white text-[11px] font-medium">
                    🎉 Vui Nổ Trời
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-normal text-[#1D3A24] mb-1.5 flex items-center gap-2">
                    <span>Dạy học & Chia sẻ</span>
                  </h3>
                  <p className="text-xs font-light text-[#43644D] leading-relaxed">
                    Các buổi học ngoài trời không áp lực bài vở, tràn ngập trò chơi đố vui môi trường do nhóm FPT trực tiếp dẫn dắt.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* 5. CÁC THÔNG TIN NHƯ TIKTOK, FACEBOOK, EMAIL, HOTLINE (HIGH-ENERGY GEN Z SOCIAL HUB) */}
        <section className="bg-gradient-to-br from-[#E8F5ED] via-[#EDF7F1] to-[#E2F1E7] rounded-3xl border-2 border-[#C9E5D2] p-7 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#2F5E3C] text-xs font-medium border border-[#C9E5D2] mb-3 shadow-2xs">
              <Music2 className="w-3.5 h-3.5 text-[#E05353] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Kênh TikTok & Mạng xã hội của nhóm</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-light text-[#1D3A24] mb-2">
              Kết nối cùng Dã Hoa Khai Xứ nhé! 📲
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#43644D]">
              Tụi mình thường xuyên đăng clip mẹo tái chế siêu dễ thương, khoảnh khắc workshop vui nhộn và lịch hoạt động mới nhất:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            
            {/* TikTok Card - Highlighted & Energetic */}
            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-black text-white flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#00f2fe]/20 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-bold text-xs">
                    🎵
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-[#ff0050] text-white">
                    HOT
                  </span>
                </div>
                <div className="text-xs text-white/70">Kênh TikTok</div>
                <div className="text-sm font-medium text-white truncate">
                  @dahoakhaixu.fpt
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-[#00f2fe]">
                <span>Xem clip workshop</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* Facebook Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-white border-2 border-[#DCEEE1] flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#1877F2] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                    FB
                  </div>
                  <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-[#EBF3ED] text-[#2F5E3C]">
                    Fanpage
                  </span>
                </div>
                <div className="text-xs text-[#639273]">Trang Facebook</div>
                <div className="text-sm font-medium text-[#1D3A24] truncate group-hover:text-[#1877F2]">
                  fb.com/dahoakhaixu
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-[#F0F6F1] flex items-center justify-between text-[11px] text-[#1877F2]">
                <span>Theo dõi bài viết</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:dahoakhaixu.fpt@gmail.com"
              className="p-5 rounded-2xl bg-white border-2 border-[#DCEEE1] flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#4E8B62] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#4E8B62] text-white flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-[#EBF3ED] text-[#2F5E3C]">
                    Email
                  </span>
                </div>
                <div className="text-xs text-[#639273]">Hộp thư nhóm</div>
                <div className="text-sm font-medium text-[#1D3A24] truncate group-hover:text-[#4E8B62]">
                  dahoakhaixu.fpt
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-[#F0F6F1] flex items-center justify-between text-[11px] text-[#4E8B62]">
                <span>Gửi thư kết nối</span>
                <span>✉️</span>
              </div>
            </motion.a>

            {/* Hotline / Zalo Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:0912345678"
              className="p-5 rounded-2xl bg-white border-2 border-[#DCEEE1] flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#2563EB] transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                    Zalo
                  </span>
                </div>
                <div className="text-xs text-[#639273]">Hotline nhóm FPT</div>
                <div className="text-sm font-medium text-[#1D3A24] truncate group-hover:text-[#2563EB]">
                  0912 345 678
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-[#F0F6F1] flex items-center justify-between text-[11px] text-[#2563EB]">
                <span>Gọi hoặc nhắn Zalo</span>
                <span>📞</span>
              </div>
            </motion.a>

          </div>
        </section>

      </main>

      {/* Cheerful Bottom Footer */}
      <footer className="border-t border-[#DDECE1] py-8 text-center text-xs font-light text-[#639273] bg-[#F0F6F1]/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-normal text-[#1D3A24]">Dã Hoa Khai Xứ</span>
            <span>·</span>
            <span>Dự án giáo dục môi trường của nhóm bạn trẻ Đại học FPT 🌱</span>
          </div>
          <button
            onClick={onBackToWelcome}
            className="text-[#2F5E3C] hover:underline cursor-pointer font-medium"
          >
            ← Về màn hình chính
          </button>
        </div>
      </footer>
    </motion.div>
  );
};
