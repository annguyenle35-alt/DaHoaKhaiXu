import React, { useState } from 'react';
import { X, CheckCircle2, Sprout, Heart, Shield } from 'lucide-react';
import { VolunteerFormData } from '../types';

interface VolunteerSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VolunteerSupportModal: React.FC<VolunteerSupportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    roleInterest: 'nursery_restoration',
    availability: 'weekends',
    experienceNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [registrationCode, setRegistrationCode] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `DHKX-TN-${Math.floor(10000 + Math.random() * 90000)}`;
    setRegistrationCode(code);
    
    // Save to localStorage for demo persistence
    try {
      const existing = JSON.parse(localStorage.getItem('dhkx_volunteers') || '[]');
      existing.push({ ...formData, code, date: new Date().toISOString() });
      localStorage.setItem('dhkx_volunteers', JSON.stringify(existing));
    } catch {
      // Ignore storage errors in sandbox
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      roleInterest: 'nursery_restoration',
      availability: 'weekends',
      experienceNotes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#D6CEBE] shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FAF8F5] text-[#78716C] hover:text-[#1A3826] cursor-pointer"
          aria-label="Đóng biểu mẫu"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-2">
              <Sprout className="w-4 h-4 text-[#1A3826]" />
              <span>Chung Tay Vì Môi Trường Bản Địa</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1A3826] mb-2">
              Đăng Ký Đồng Hành & Tình Nguyện
            </h3>

            <p className="text-sm text-[#57534E] leading-relaxed mb-6">
              Bạn có thể tham gia cùng Trung tâm Dã Hoa Khai Xứ trong các đợt ươm giống, khảo sát thực địa hoặc trở thành đại sứ lan tỏa thông điệp sống hòa hợp cùng tự nhiên.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Họ và tên của bạn *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Lê Bảo Anh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Địa chỉ Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@vidu.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Khu vực bạn đang sống
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Đà Lạt, TP.HCM, Hà Nội..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Thời gian có thể tham gia
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                  >
                    <option value="weekends">Các ngày cuối tuần</option>
                    <option value="seasonal">Chiến dịch thực địa theo mùa (3-7 ngày)</option>
                    <option value="remote">Làm việc trực tuyến / Truyền thông</option>
                    <option value="flexible">Linh hoạt theo phân công</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Lĩnh vực bạn quan tâm nhất *
                </label>
                <select
                  value={formData.roleInterest}
                  onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                >
                  <option value="nursery_restoration">Vườn ươm hạt giống hoa dại & cây rừng bản địa</option>
                  <option value="biodiversity_survey">Khảo sát & chụp ảnh ghi nhận đa dạng sinh học</option>
                  <option value="education_community">Điều phối viên giáo dục sinh thái cho trẻ em</option>
                  <option value="advocate_communication">Thiết kế, dịch thuật và truyền thông xanh</option>
                  <option value="donor_support">Bảo trợ tài chính / Đỡ đầu diện tích rừng</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Đôi dòng chia sẻ hoặc kinh nghiệm của bạn (không bắt buộc)
                </label>
                <textarea
                  rows={3}
                  placeholder="Hãy chia sẻ điều gì đã thôi thúc bạn muốn cùng Dã Hoa Khai Xứ phục hồi thiên nhiên..."
                  value={formData.experienceNotes}
                  onChange={(e) => setFormData({ ...formData, experienceNotes: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-lg focus:outline-none focus:border-[#1A3826]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-lg transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#CADBCF]" />
                  <span>Gửi phiếu đăng ký tham gia</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#78716C] justify-center pt-2">
                <Shield className="w-3.5 h-3.5 text-[#1A3826]" />
                <span>Thông tin cá nhân của bạn được bảo mật tuyệt đối theo chuẩn NPO.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#1A3826]/10 text-[#1A3826] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold">
              <span>Đăng Ký Thành Công</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1A3826]">
              Tri Ân Tấm Lòng Vì Thiên Nhiên!
            </h3>

            <p className="text-sm text-[#44403C] leading-relaxed max-w-md mx-auto">
              Cảm ơn bạn <strong className="text-[#1A3826]">{formData.fullName}</strong> đã chung nhịp đập với Dã Hoa Khai Xứ. Ban điều phối trạm thực địa sẽ liên lạc với bạn qua email{' '}
              <strong className="text-[#1A3826]">{formData.email}</strong> trong vòng 3 ngày làm việc.
            </p>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D6CEBE] inline-block text-xs text-[#57534E]">
              <span>Mã tiếp nhận hồ sơ: </span>
              <strong className="font-mono text-[#1A3826] text-sm">{registrationCode}</strong>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-lg transition-colors cursor-pointer"
              >
                Đóng thông báo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
