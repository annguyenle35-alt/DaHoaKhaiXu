import React, { useState } from 'react';
import { ACTION_GOALS } from '../data/mockData';
import { Calendar, Target, CheckCircle, ChevronRight, TrendingUp } from 'lucide-react';

export const ActionGoalsTimeline: React.FC = () => {
  const [selectedGoalId, setSelectedGoalId] = useState(ACTION_GOALS[0].id);

  const selectedGoal = ACTION_GOALS.find((g) => g.id === selectedGoalId) || ACTION_GOALS[0];

  return (
    <section id="muc-tieu" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>03. Lộ trình Phát triển</span>
            <span aria-hidden="true">·</span>
            <span>Mục Tiêu Hành Động</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            Mục Tiêu Cụ Thể Giai Đoạn 2025 – 2035
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Dã Hoa Khai Xứ xây dựng lộ trình hành động có kiểm chứng khoa học, đặt ra các mốc chỉ số định lượng khắt khe để đảm bảo từng mét vuông đất phục hồi đều phát huy giá trị sinh thái bền vững.
          </p>
        </div>

        {/* Milestone Navigation Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ACTION_GOALS.map((goal) => {
            const isActive = goal.id === selectedGoalId;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1A3826] text-white border-[#1A3826] shadow-md'
                    : 'bg-white text-[#242924] border-[#E7E2D8] hover:border-[#CADBCF]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isActive ? 'text-[#E5EFE7]' : 'text-[#C25E2B]'
                    }`}
                  >
                    Giai đoạn
                  </span>
                  <Calendar
                    className={`w-3.5 h-3.5 ${isActive ? 'text-[#CADBCF]' : 'text-[#78716C]'}`}
                  />
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold tabular-nums">
                  {goal.year}
                </div>
                <div
                  className={`text-xs line-clamp-1 mt-1 ${
                    isActive ? 'text-[#CADBCF]' : 'text-[#78716C]'
                  }`}
                >
                  {goal.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Goal Detailed Card */}
        <div className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#78716C] mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#C25E2B]">
                    Kế hoạch trọng điểm
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Mục tiêu cam kết</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1A3826] leading-snug">
                  {selectedGoal.title}
                </h3>
                <p className="mt-4 text-base text-[#44403C] leading-relaxed">
                  {selectedGoal.summary}
                </p>
              </div>

              {/* Focus areas */}
              <div className="pt-4 border-t border-[#E7E2D8]">
                <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#1A3826]" />
                  <span>Các Nhiệm Vụ Trọng Tâm Thực Hiện</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedGoal.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#44403C]">
                      <CheckCircle className="w-4 h-4 text-[#1A3826] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics column */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-xl border border-[#E7E2D8] space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E2D8]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A3826]">
                  Chỉ số định lượng cam kết
                </span>
                <TrendingUp className="w-4 h-4 text-[#C25E2B]" />
              </div>

              <div className="space-y-4">
                {selectedGoal.metrics.map((metric, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-[#E7E2D8]">
                    <div className="text-xs text-[#78716C]">{metric.label}</div>
                    <div className="text-2xl font-serif font-bold text-[#1A3826] tabular-nums mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-[#1A3826]/5 rounded-lg border border-[#1A3826]/10 text-xs text-[#44403C] leading-relaxed">
                Tất cả dữ liệu được theo dõi bằng hệ thống định vị vệ tinh GPS kết hợp khảo sát trực tiếp của các kiểm lâm viên cộng đồng Dã Hoa Khai Xứ.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
