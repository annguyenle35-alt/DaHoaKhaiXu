import React, { useState } from 'react';
import { FIELD_STATIONS } from '../data/mockData';
import { MapPin, Mountain, TreePine, Users, Navigation } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const [selectedStationId, setSelectedStationId] = useState<string>(FIELD_STATIONS[0].id);

  const activeStation =
    FIELD_STATIONS.find((s) => s.id === selectedStationId) || FIELD_STATIONS[0];

  return (
    <section id="tram-nghien-cuu" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>06. Mạng lưới Thực địa</span>
            <span aria-hidden="true">·</span>
            <span>Trạm Nghiên Cứu & Bảo Tồn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            Mạng Lưới Vệ Tinh Trải Dài Các Vùng Sinh Thái
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Để hoa dại nở rộ khắp nơi, Dã Hoa Khai Xứ thiết lập các trạm thực địa thường trực tại những điểm nóng đa dạng sinh học nhạy cảm nhất, gắn bó bền chặt cùng cộng đồng cư dân bản xứ.
          </p>
        </div>

        {/* Stations Grid + Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Station Selector Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#78716C] font-semibold block px-1">
              Chọn trạm thực địa để khảo sát:
            </span>
            {FIELD_STATIONS.map((station) => {
              const isActive = station.id === selectedStationId;
              return (
                <div
                  key={station.id}
                  onClick={() => setSelectedStationId(station.id)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-white border-[#1A3826] shadow-md ring-1 ring-[#1A3826]'
                      : 'bg-[#FAF8F5] border-[#E7E2D8] hover:bg-white hover:border-[#CADBCF]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#78716C] mb-1">
                    <span className="font-mono font-medium">{station.code}</span>
                    <span>Thành lập {station.establishedYear}</span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#1A3826] mb-1">
                    {station.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#57534E]">
                    <MapPin className="w-3.5 h-3.5 text-[#C25E2B] shrink-0" />
                    <span className="truncate">{station.region}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Station View */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-10 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E7E2D8]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#78716C] mb-1">
                  <span className="font-mono font-semibold text-[#1A3826]">
                    {activeStation.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStation.region}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826]">
                  {activeStation.name}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs bg-[#FAF8F5] border border-[#E7E2D8] px-3 py-1.5 rounded-md">
                <Navigation className="w-3.5 h-3.5 text-[#1A3826]" />
                <span className="font-mono text-[#44403C]">{activeStation.coordinates}</span>
              </div>
            </div>

            {/* Geographical details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E7E2D8]">
                <div className="text-xs text-[#78716C] flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-[#1A3826]" />
                  <span>Độ cao địa hình</span>
                </div>
                <div className="text-xl font-serif font-bold text-[#1A3826] mt-1">
                  {activeStation.altitude}
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E7E2D8]">
                <div className="text-xs text-[#78716C] flex items-center gap-1.5">
                  <TreePine className="w-3.5 h-3.5 text-[#1A3826]" />
                  <span>Rừng giám sát</span>
                </div>
                <div className="text-xl font-serif font-bold text-[#1A3826] tabular-nums mt-1">
                  {activeStation.stats.monitoredHectares.toLocaleString('vi-VN')} ha
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E7E2D8]">
                <div className="text-xs text-[#78716C] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#1A3826]" />
                  <span>Cán bộ & Tình nguyện viên</span>
                </div>
                <div className="text-xl font-serif font-bold text-[#1A3826] tabular-nums mt-1">
                  {activeStation.stats.activeVolunteers} người
                </div>
              </div>
            </div>

            {/* In-depth context */}
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-1">
                  Kiểu Hệ Sinh Thái Đặc Trưng
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {activeStation.ecosystemType}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-1">
                  Đối Tượng Bảo Tồn Cốt Lõi
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {activeStation.focusBio}
                </p>
              </div>

              <div className="p-4 bg-[#1A3826]/5 rounded-xl border border-[#1A3826]/10">
                <h4 className="text-xs uppercase tracking-widest text-[#1A3826] font-semibold mb-1">
                  Công Việc Đang Triển Khai Tại Thực Địa
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {activeStation.currentWork}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
