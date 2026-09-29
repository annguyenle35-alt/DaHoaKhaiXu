import React, { useState } from 'react';
import {
  Heart,
  Target,
  Compass,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Send,
  Leaf,
  Users,
  SunMedium
} from 'lucide-react';
import { HERO_IMAGE, NURSERY_IMAGE, EDUCATION_IMAGE } from '../data/mockData';

interface MainEducationPortalProps {
  onBackToWelcome: () => void;
}

export const MainEducationPortal: React.FC<MainEducationPortalProps> = ({
  onBackToWelcome,
}) => {
  // Simple quick contact/registration form
  const [formData, setFormData] = useState({
    schoolOrName: '',
    contactPerson: '',
    phone: '',
    studentGrade: 'TH', // TH, THCS, THPT
    estimatedCount: '30',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolOrName.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#242924] flex flex-col selection:bg-[#3D6B4F] selection:text-white">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <button
            onClick={onBackToWelcome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#57534E] hover:text-[#1A3826] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Màn hình chào</span>
          </button>

          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A3826]">
            Dã Hoa Khai Xứ
          </span>

          <a
            href="#dang-ky-trai-nghiem"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-md transition-colors shadow-xs"
          >
            Liên hệ / Đăng ký
          </a>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16">
        
        {/* 1. LỜI CHÀO & CẢM ƠN */}
        <section className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A3826]/5 rounded-bl-full pointer-events-none" />

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-3">
            <Heart className="w-4 h-4 fill-[#C25E2B] text-[#C25E2B]" />
            <span>Lời Chào & Cảm Ơn</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A3826] leading-tight mb-4">
            Xin chào và chân thành cảm ơn bạn đã chọn Trung tâm “Dã Hoa Khai Xứ”!
          </h1>

          <p className="text-base sm:text-lg text-[#44403C] leading-relaxed mb-4">
            Chào mừng quý thầy cô, các bậc phụ huynh và các bạn học sinh thân mến. Chúng tôi rất vinh hạnh và biết ơn vì bạn đã đặt niềm tin vào <strong className="text-[#1A3826]">Trung tâm Giáo Dục Về Môi Trường Dã Hoa Khai Xứ</strong> làm điểm hẹn đồng hành trên hành trình kết nối và bảo vệ màu xanh của thiên nhiên.
          </p>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed italic border-l-3 border-[#1A3826] pl-4 py-1 bg-[#FAF8F5] rounded-r-md">
            “Mỗi đóa hoa dại nở nơi vách đá, mỗi mầm cây bén rễ vào lòng đất đều mang một câu chuyện diệu kỳ về sự sống. Chúng tôi ở đây để cùng các em lắng nghe và giữ gìn câu chuyện ấy.”
          </p>

          <div className="mt-6 rounded-xl overflow-hidden border border-[#E7E2D8] aspect-[21/9] sm:aspect-[24/9]">
            <img
              src={HERO_IMAGE}
              alt="Học tập sinh thái tại Dã Hoa Khai Xứ"
              className="w-full h-full object-cover"
            />
          </div>
        </section>


        {/* 2. MỤC TIÊU & 3. ĐỊNH HƯỚNG */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MỤC TIÊU */}
          <div className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-3">
                <Target className="w-4 h-4 text-[#1A3826]" />
                <span>Mục Tiêu Của Chúng Tôi</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#1A3826] mb-4">
                Mục Tiêu
              </h2>

              <ul className="space-y-3.5 text-sm text-[#44403C] leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Khơi dậy tình yêu thiên nhiên:</strong> Giúp học sinh trân quý từng nhành hoa dại, chiếc lá và mạch nước mát lành của quê hương.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Nâng cao ý thức bảo vệ môi trường:</strong> Không chỉ là hiểu biết mà hình thành phản xạ tự nhiên: không vứt rác bừa bãi, hạn chế tối đa đồ nhựa dùng một lần.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Truyền cảm hứng hành động thiết thực:</strong> Tự tay gieo ươm cây bản địa, trồng cây xanh tại trường lớp và ngôi nhà của chính mình.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7E2D8] text-xs text-[#78716C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              <span>Gieo hạt hôm nay – Nở hoa tương lai</span>
            </div>
          </div>

          {/* ĐỊNH HƯỚNG */}
          <div className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-3">
                <Compass className="w-4 h-4 text-[#1A3826]" />
                <span>Phương Châm Hoạt Động</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#1A3826] mb-4">
                Định Hướng
              </h2>

              <ul className="space-y-3.5 text-sm text-[#44403C] leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Giáo dục trải nghiệm thực địa (Hands-on):</strong> Nói không với những bài giảng lý thuyết khô khan. Học sinh học trực tiếp giữa thiên nhiên, chạm vào đất mùn, ngửi hương hoa dại.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Tập trung vào hệ sinh thái bản địa:</strong> Ưu tiên bảo tồn và phổ biến các loài thực vật hoa dại nguyên chủng của Việt Nam, giữ gìn cân bằng tự nhiên.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1A3826] shrink-0 mt-1" />
                  <span>
                    <strong>Gắn kết gia đình và nhà trường:</strong> Xây dựng các hoạt động dã ngoại có sự phối hợp nhịp nhàng giữa thầy cô, học sinh và cha mẹ.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7E2D8] text-xs text-[#78716C] flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#1A3826]" />
              <span>Thuận tự nhiên – Hòa hợp sinh thái</span>
            </div>
          </div>

        </section>


        {/* 4. KHÁCH HÀNG & ĐỐI TƯỢNG PHỤC VỤ (HỌC SINH TỪ TH ĐẾN THPT) */}
        <section className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-3">
            <GraduationCap className="w-4 h-4 text-[#1A3826]" />
            <span>Đối Tượng Trọng Tâm</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] mb-2">
            Khách Hàng Của Trung Tâm: Học Sinh Từ TH Đến THPT
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mb-8">
            Chương trình được thiết kế may đo phù hợp theo từng độ tuổi và tâm sinh lý của các em học sinh, đảm bảo vừa an toàn, vừa bổ ích và tràn ngập niềm vui.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cấp Tiểu Học (TH) */}
            <div className="p-5 rounded-xl border border-[#E7E2D8] bg-[#FAF8F5] flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#1A3826] text-white text-xs font-semibold mb-3">
                  Học sinh Tiểu học (TH)
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1A3826] mb-1">
                  Khám Phá Sắc Màu Hoa Dại
                </h3>
                <p className="text-xs text-[#78716C] mb-3">Độ tuổi 6 – 11 tuổi</p>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  Quan sát ong bướm thụ phấn, nhận biết 10 loài hoa dại quen thuộc, trò chơi cảm giác với đất và tự tay gieo một chậu mầm nhỏ mang về lớp.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E7E2D8] text-xs font-medium text-[#1A3826]">
                Hoạt động: Vui chơi nhẹ nhàng & Cảm thụ
              </div>
            </div>

            {/* Cấp THCS */}
            <div className="p-5 rounded-xl border border-[#1A3826]/30 bg-white ring-1 ring-[#1A3826]/10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#C25E2B] text-white text-xs font-semibold mb-3">
                  Học sinh THCS
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1A3826] mb-1">
                  Người Gác Rừng Nhỏ Tuổi
                </h3>
                <p className="text-xs text-[#78716C] mb-3">Độ tuổi 11 – 15 tuổi</p>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  Tìm hiểu chuỗi thức ăn sinh thái, kiểm tra độ sạch của nguồn nước suối, thực hành phân loại rác thải và kỹ năng dã ngoại sinh tồn xanh.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E7E2D8] text-xs font-medium text-[#C25E2B]">
                Hoạt động: Khảo sát thực địa & Kỹ năng nhóm
              </div>
            </div>

            {/* Cấp THPT */}
            <div className="p-5 rounded-xl border border-[#E7E2D8] bg-[#FAF8F5] flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-[#2C593D] text-white text-xs font-semibold mb-3">
                  Học sinh THPT
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1A3826] mb-1">
                  Đại Sứ Môi Trường Tương Lai
                </h3>
                <p className="text-xs text-[#78716C] mb-3">Độ tuổi 15 – 18 tuổi</p>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  Nghiên cứu khoa học thực vật học mini, tham gia dự án cộng đồng phục hồi đất thoái hóa, định hướng nghề nghiệp trong lĩnh vực môi trường và phát triển bền vững.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E7E2D8] text-xs font-medium text-[#1A3826]">
                Hoạt động: Nghiên cứu khoa học & Dự án xanh
              </div>
            </div>

          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#1A3826]/5 border border-[#1A3826]/10 flex items-center gap-3 text-xs sm:text-sm text-[#44403C]">
            <Users className="w-5 h-5 text-[#1A3826] shrink-0" />
            <span>
              <strong>Dành cho nhà trường & gia đình:</strong> Trung tâm đón tiếp các đoàn trường học ngoại khóa, câu lạc bộ sinh học, cũng như các chuyến dã ngoại cuối tuần cùng cha mẹ.
            </span>
          </div>
        </section>


        {/* 5. THÊM MỘT CHÚT NỮA: 3 HOẠT ĐỘNG TIÊU BIỂU */}
        <section className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-3">
            <SunMedium className="w-4 h-4 text-[#1A3826]" />
            <span>Thêm Một Chút Nữa Về Trung Tâm</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] mb-6">
            3 Trải Nghiệm Thực Tế Học Sinh Yêu Thích Nhất
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-[#E7E2D8] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={NURSERY_IMAGE}
                  alt="Vườn ươm gieo mầm hoa dại"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#1A3826] mb-1">
                  1. Gieo Hạt Lành Mang Về
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Mỗi bạn học sinh được hướng dẫn tự tay trộn đất mùn hữu cơ, tra hạt giống hoa dại vào túi xơ dừa và đem về chăm sóc tại góc học tập.
                </p>
              </div>
            </div>

            <div className="border border-[#E7E2D8] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={EDUCATION_IMAGE}
                  alt="Dã ngoại quan sát thực địa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#1A3826] mb-1">
                  2. Khám Phá Rừng & Suối
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Đi dạo an toàn dọc theo đường mòn sinh thái rợp bóng cây, lắng nghe tiếng chim hót và học cách đo nhiệt độ, độ ẩm của đất rừng.
                </p>
              </div>
            </div>

            <div className="border border-[#E7E2D8] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <div className="aspect-[16/10] bg-[#1A3826] text-white p-6 flex flex-col justify-center items-center text-center">
                <Leaf className="w-10 h-10 text-[#89E2A7] mb-2" />
                <span className="font-serif text-lg font-bold">Xưởng Tái Chế Xanh</span>
                <span className="text-xs text-[#CADBCF] mt-1">Lá rụng thành dinh dưỡng</span>
              </div>
              <div className="p-4">
                <h4 className="font-serif font-bold text-base text-[#1A3826] mb-1">
                  3. Xưởng Tái Chế & Phân Hữu Cơ
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Học cách ủ lá cây rụng thành phân bón tự nhiên, làm đồ chơi tái chế từ bìa các-tông và cam kết lối sống không xả rác bừa bãi.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* 6. ĐĂNG KÝ / LIÊN HỆ GỌN GÀNG */}
        <section id="dang-ky-trai-nghiem" className="bg-[#1A3826] text-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#A3E5BA] font-semibold block mb-2">
              Kết Nối & Đồng Hành
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Đăng Ký Trải Nghiệm Cho Học Sinh Hoặc Liên Hệ Với Nhóm
            </h2>
            <p className="text-xs sm:text-sm text-[#CADBCF] leading-relaxed">
              Quý thầy cô hoặc phụ huynh vui lòng để lại thông tin ngắn, nhóm Dã Hoa Khai Xứ sẽ liên hệ lại để gửi lịch trình chi tiết và hỗ trợ chu đáo nhất!
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#CADBCF] block mb-1">
                    Tên trường / Đơn vị / Gia đình *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Trường Tiểu học Nguyễn Huệ"
                    value={formData.schoolOrName}
                    onChange={(e) => setFormData({ ...formData, schoolOrName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#89E2A7]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#CADBCF] block mb-1">
                    Người phụ trách & Số điện thoại *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Cô Lan - 0912 345 678"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#89E2A7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#CADBCF] block mb-1">
                    Bậc học của học sinh *
                  </label>
                  <select
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#142B1D] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#89E2A7]"
                  >
                    <option value="TH">Học sinh Tiểu học (TH)</option>
                    <option value="THCS">Học sinh THCS</option>
                    <option value="THPT">Học sinh THPT</option>
                    <option value="mix">Đoàn liên cấp / Gia đình</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#CADBCF] block mb-1">
                    Số lượng học sinh dự kiến
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 30 - 45 học sinh"
                    value={formData.estimatedCount}
                    onChange={(e) => setFormData({ ...formData, estimatedCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#89E2A7]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#CADBCF] block mb-1">
                  Yêu cầu hoặc thời gian mong muốn
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Lớp muốn tham gia vào sáng thứ Bảy tuần tới..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#89E2A7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B1710] bg-[#89E2A7] hover:bg-[#A3EBBB] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm font-sans"
              >
                <Send className="w-4 h-4" />
                <span>Gửi thông tin đăng ký đến Trung tâm</span>
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center py-6 bg-white/10 backdrop-blur-xs rounded-xl p-6 border border-white/20">
              <CheckCircle2 className="w-12 h-12 text-[#89E2A7] mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Đã Tiếp Nhận Thông Tin!
              </h3>
              <p className="text-xs sm:text-sm text-[#CADBCF] leading-relaxed mb-4">
                Cảm ơn <strong>{formData.schoolOrName || 'bạn'}</strong> đã liên hệ. Đội ngũ giáo dục của Trung tâm Dã Hoa Khai Xứ sẽ phản hồi ngay qua số điện thoại để trao đổi chi tiết chương trình phù hợp nhất.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#89E2A7] underline cursor-pointer hover:text-white"
              >
                Gửi thêm thông tin khác
              </button>
            </div>
          )}

          {/* Quick contact direct channels */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#CADBCF] text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-4 h-4 text-[#89E2A7] shrink-0" />
              <span>Hotline: 0263 389 2468</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4 text-[#89E2A7] shrink-0" />
              <span>Email: dahoakhaixu@gmail.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-[#89E2A7] shrink-0" />
              <span>Khu thực địa Dã Hoa Khai Xứ</span>
            </div>
          </div>
        </section>

      </main>

      {/* Neat Footer */}
      <footer className="bg-[#12281B] text-[#CADBCF] py-8 border-t border-[#2C593D] text-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-white text-base">
              Dã Hoa Khai Xứ
            </span>
            <span className="text-[#849C8B]">·</span>
            <span>Dự án của nhóm Dã Hoa Khai Xứ</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onBackToWelcome}
              className="text-[#89E2A7] hover:underline cursor-pointer"
            >
              ← Về màn hình chào
            </button>
            <span className="text-[#849C8B]">·</span>
            <span>© {new Date().getFullYear()} Giáo Dục Môi Trường</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
