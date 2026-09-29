import React, { useState } from 'react';
import { SCIENTIFIC_PUBLICATIONS } from '../data/mockData';
import { PublicationItem } from '../types';
import { BookOpen, FileText, Download, CheckCircle, X } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (pubTitle: string) => {
    setDownloadSuccess(`Đang tải xuống tài liệu: "${pubTitle}"`);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  return (
    <section id="an-pham" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
            <span>07. Tri thức Mở</span>
            <span aria-hidden="true">·</span>
            <span>Cẩm Nang & Nghiên Cứu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
            Thư Viện Ấn Phẩm & Dữ Liệu Sinh Thái
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Khoa học cần phải mở và phục vụ cộng đồng. Tất cả báo cáo điều tra đa dạng, cẩm nang thực vật học và nghiên cứu chính sách của Dã Hoa Khai Xứ đều được phát hành miễn phí.
          </p>
        </div>

        {/* Download notification toast */}
        {downloadSuccess && (
          <div className="mb-6 p-4 bg-[#1A3826] text-white rounded-xl flex items-center justify-between text-xs sm:text-sm animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CADBCF]" />
              <span>{downloadSuccess}</span>
            </div>
            <button
              onClick={() => setDownloadSuccess(null)}
              className="text-[#CADBCF] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCIENTIFIC_PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-2xl border border-[#D6CEBE] p-6 sm:p-8 flex flex-col justify-between hover:border-[#1A3826]/40 transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#78716C] mb-3">
                  <span className="font-semibold uppercase tracking-wider text-[#C25E2B]">
                    {pub.category}
                  </span>
                  <span>{pub.year}</span>
                </div>

                <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E7E2D8] inline-block mb-4">
                  <FileText className="w-5 h-5 text-[#1A3826]" />
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#1A3826] leading-snug mb-3">
                  {pub.title}
                </h3>

                <div className="text-xs text-[#78716C] mb-4">
                  <span>{pub.author}</span>
                  <span aria-hidden="true" className="mx-1.5">·</span>
                  <span>{pub.pages} trang</span>
                  <span aria-hidden="true" className="mx-1.5">·</span>
                  <span>{pub.fileSize}</span>
                </div>

                <p className="text-sm text-[#44403C] leading-relaxed line-clamp-4">
                  {pub.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E7E2D8] flex items-center gap-3">
                <button
                  onClick={() => setSelectedPub(pub)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-[#1A3826] bg-[#FAF8F5] hover:bg-[#E7E2D8] border border-[#D6CEBE] rounded-md transition-colors cursor-pointer text-center"
                >
                  Xem tóm lược
                </button>
                <button
                  onClick={() => handleDownload(pub.title)}
                  className="py-2 px-3 text-xs font-semibold text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-md transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                  title="Tải về tập tin PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Publication Modal */}
        {selectedPub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#D6CEBE] shadow-2xl p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedPub(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FAF8F5] text-[#78716C] hover:text-[#1A3826] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-[#78716C] mb-1 uppercase tracking-wider font-semibold text-[#C25E2B]">
                {selectedPub.category} · Xuất bản {selectedPub.year}
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1A3826] mb-3">
                {selectedPub.title}
              </h3>

              <div className="text-xs text-[#57534E] pb-4 mb-4 border-b border-[#E7E2D8]">
                Tác giả: {selectedPub.author} | Dung lượng: {selectedPub.fileSize}
              </div>

              <div className="space-y-4 text-sm text-[#44403C] leading-relaxed">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
                    Nội dung Tổng quan
                  </h4>
                  <p>{selectedPub.summary}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
                    Các Phát Hiện & Đóng Góp Khoa Học Chính
                  </h4>
                  <div className="space-y-2">
                    {selectedPub.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#1A3826] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E7E2D8] flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPub(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#57534E] hover:text-[#1A3826]"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    handleDownload(selectedPub.title);
                    setSelectedPub(null);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3826] hover:bg-[#2C593D] rounded-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải bản đầy đủ</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
