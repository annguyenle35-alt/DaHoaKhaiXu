import React, { useState } from 'react';
import { Sprout, Wind, Droplets, HeartHandshake, Award, Check, Download, RefreshCw } from 'lucide-react';

export const EcoCalculator: React.FC = () => {
  const [wildflowerSqMeters, setWildflowerSqMeters] = useState<number>(25);
  const [nativeTrees, setNativeTrees] = useState<number>(3);
  const [ecoHabits, setEcoHabits] = useState<string[]>([
    'reduce_plastic',
    'compost_organic',
  ]);
  const [pledgerName, setPledgerName] = useState<string>('');
  const [pledgeSubmitted, setPledgeSubmitted] = useState<boolean>(false);

  const toggleHabit = (habitId: string) => {
    if (ecoHabits.includes(habitId)) {
      setEcoHabits(ecoHabits.filter((h) => h !== habitId));
    } else {
      setEcoHabits([...ecoHabits, habitId]);
    }
  };

  // Calculations based on scientific forestry and botanical restoration factors
  // 1 m2 native wildflowers absorbs approx 1.8 kg CO2/year and provides nectar for ~12 pollinating insects
  // 1 native long-living hardwood tree absorbs ~22 kg CO2/year and yields ~118 kg O2
  const habitCo2Reduction = ecoHabits.length * 45; // ~45kg CO2 avoided per sustainable habit
  const co2Absorption = Math.round(wildflowerSqMeters * 1.8 + nativeTrees * 22 + habitCo2Reduction);
  const oxygenProduced = Math.round(wildflowerSqMeters * 1.2 + nativeTrees * 118);
  const pollinatorsSupported = Math.round(wildflowerSqMeters * 14 + nativeTrees * 35);
  const waterRetainedLiters = Math.round(wildflowerSqMeters * 42 + nativeTrees * 180);

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pledgerName.trim()) return;
    setPledgeSubmitted(true);
  };

  return (
    <section id="tinh-toan-sinh-thai" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>05. Công cụ Tương tác</span>
            <span aria-hidden="true">·</span>
            <span>Gieo Mầm Sinh Thái</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            Tính Toán Tác Động & Cam Kết Đồng Hành
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Mỗi mét vuông hoa dại được gìn giữ, mỗi cây bản địa bén rễ vào lòng đất đều tạo nên sự khác biệt đo đếm được. Hãy chọn mức độ cam kết của bạn để thấy sức mạnh phục hồi sinh thái.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#D6CEBE] shadow-xs space-y-8">
            {/* Slider 1: Wildflower meadow */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-[#1A3826] flex items-center gap-2">
                  <Sprout className="w-4 h-4 text-[#C25E2B]" />
                  <span>Diện tích hoa dại bản địa muốn bảo trợ gieo trồng</span>
                </label>
                <span className="font-serif font-bold text-lg text-[#1A3826] tabular-nums">
                  {wildflowerSqMeters} m²
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={wildflowerSqMeters}
                onChange={(e) => setWildflowerSqMeters(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E2D8] rounded-lg appearance-none cursor-pointer accent-[#1A3826]"
              />
              <div className="flex justify-between text-xs text-[#78716C] mt-1">
                <span>5 m² (Góc ban công/vườn)</span>
                <span>100 m²</span>
                <span>200 m² (Khoảng đồi nhỏ)</span>
              </div>
            </div>

            {/* Slider 2: Native Hardwood Trees */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-[#1A3826] flex items-center gap-2">
                  <Wind className="w-4 h-4 text-[#1A3826]" />
                  <span>Số cây gỗ lớn bản địa che bóng mát & giữ đất</span>
                </label>
                <span className="font-serif font-bold text-lg text-[#1A3826] tabular-nums">
                  {nativeTrees} cây
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={nativeTrees}
                onChange={(e) => setNativeTrees(Number(e.target.value))}
                className="w-full h-2 bg-[#E7E2D8] rounded-lg appearance-none cursor-pointer accent-[#1A3826]"
              />
              <div className="flex justify-between text-xs text-[#78716C] mt-1">
                <span>1 cây (Cây lưu niệm)</span>
                <span>10 cây</span>
                <span>25 cây (Tiểu quần thể)</span>
              </div>
            </div>

            {/* Habit Pledges */}
            <div>
              <label className="text-sm font-semibold text-[#1A3826] block mb-3">
                Cam kết lối sống xanh hằng ngày của bạn:
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    id: 'reduce_plastic',
                    label: 'Không sử dụng đồ nhựa dùng 1 lần và chai nước tiện lợi',
                  },
                  {
                    id: 'compost_organic',
                    label: 'Phân loại rác tại nguồn & ủ rác hữu cơ bón cây',
                  },
                  {
                    id: 'plant_native',
                    label: 'Ưu tiên trồng các loài hoa dại bản địa thay vì giống ngoại lai',
                  },
                ].map((habit) => {
                  const checked = ecoHabits.includes(habit.id);
                  return (
                    <div
                      key={habit.id}
                      onClick={() => toggleHabit(habit.id)}
                      className={`p-3 rounded-lg border text-xs sm:text-sm cursor-pointer flex items-center gap-3 transition-colors ${
                        checked
                          ? 'bg-[#1A3826]/5 border-[#1A3826] text-[#1A3826]'
                          : 'bg-[#FAF8F5] border-[#E7E2D8] text-[#57534E]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          checked
                            ? 'bg-[#1A3826] border-[#1A3826] text-white'
                            : 'border-[#78716C]'
                        }`}
                      >
                        {checked && <Check className="w-3 h-3" />}
                      </div>
                      <span>{habit.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pledging Form */}
            {!pledgeSubmitted ? (
              <form onSubmit={handlePledge} className="pt-4 border-t border-[#E7E2D8]">
                <label className="text-xs uppercase tracking-widest text-[#78716C] font-semibold block mb-2">
                  Lưu Lại Chứng Nhận Cam Kết Sinh Thái
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên hoặc tên tổ chức của bạn..."
                    value={pledgerName}
                    onChange={(e) => setPledgerName(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D6CEBE] rounded-md focus:outline-none focus:border-[#1A3826]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-md transition-colors cursor-pointer shrink-0"
                  >
                    Xác nhận
                  </button>
                </div>
              </form>
            ) : (
              <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between text-xs text-[#1A3826]">
                <span className="font-semibold">
                  Cam kết đã được ghi nhận: {pledgerName}
                </span>
                <button
                  onClick={() => setPledgeSubmitted(false)}
                  className="inline-flex items-center gap-1 text-[#78716C] hover:text-[#1A3826] cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Thay đổi</span>
                </button>
              </div>
            )}
          </div>

          {/* Results Impact Board */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#1A3826] text-white p-6 sm:p-8 rounded-2xl border border-[#2C593D] shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-[#2C593D]">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#CADBCF] block">
                    Ước tính Tác động Hằng Năm
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                    Hệ Sinh Thái Được Bổ Sung
                  </h3>
                </div>
                <Award className="w-8 h-8 text-[#C25E2B]" />
              </div>

              {/* 4 Quantified Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <div className="text-xs text-[#CADBCF] flex items-center gap-1.5">
                    <Wind className="w-3.5 h-3.5 text-[#CADBCF]" />
                    <span>CO₂ hấp thụ & giảm phát</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums mt-1">
                    {co2Absorption.toLocaleString('vi-VN')}{' '}
                    <span className="text-sm font-sans font-normal text-[#CADBCF]">kg/năm</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#CADBCF] flex items-center gap-1.5">
                    <Sprout className="w-3.5 h-3.5 text-[#CADBCF]" />
                    <span>Oxy tinh khiết sinh ra</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums mt-1">
                    {oxygenProduced.toLocaleString('vi-VN')}{' '}
                    <span className="text-sm font-sans font-normal text-[#CADBCF]">kg/năm</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#CADBCF] flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#CADBCF]" />
                    <span>Côn trùng thụ phấn</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums mt-1">
                    ~{pollinatorsSupported.toLocaleString('vi-VN')}{' '}
                    <span className="text-sm font-sans font-normal text-[#CADBCF]">cá thể</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#CADBCF] flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-[#CADBCF]" />
                    <span>Nước mưa lưu giữ</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums mt-1">
                    {waterRetainedLiters.toLocaleString('vi-VN')}{' '}
                    <span className="text-sm font-sans font-normal text-[#CADBCF]">lít/năm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Certificate Card if Submitted */}
            {pledgeSubmitted && (
              <div className="p-6 bg-white rounded-xl border border-[#C25E2B]/40 bg-gradient-to-br from-white to-[#F5F2EB] shadow-sm animate-in fade-in">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C25E2B] font-semibold mb-2">
                  <Award className="w-4 h-4" />
                  <span>Chứng Nhận Gieo Mầm Sinh Thái 2026</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-[#1A3826]">
                  Người Đồng Hành: {pledgerName}
                </h4>
                <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
                  Đã ghi nhận cam kết đồng hành cùng Trung tâm “Dã Hoa Khai Xứ” bảo trợ{' '}
                  <strong>{wildflowerSqMeters} m²</strong> hoa dại bản địa và{' '}
                  <strong>{nativeTrees} cây</strong> rừng tự nhiên.
                </p>
                <div className="mt-4 pt-3 border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                  <span className="text-[#78716C]">Mã ghi danh: DHKX-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1 text-[#1A3826] font-semibold hover:underline cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>In/Lưu chứng nhận</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
