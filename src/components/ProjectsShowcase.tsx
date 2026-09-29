import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';
import { MapPin, ArrowRight, X, User, Check, Layers } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất cả dự án' },
    { id: 'species', label: 'Bảo tồn hoa dại' },
    { id: 'forest', label: 'Phục hồi rừng bản địa' },
    { id: 'water', label: 'Bảo vệ nguồn nước' },
    { id: 'education', label: 'Giáo dục sinh thái' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="du-an" className="py-16 lg:py-24 border-b border-[#E7E2D8] bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716C] mb-3">
              <span>04. Hành động Thực địa</span>
              <span aria-hidden="true">·</span>
              <span>Dự Án Trọng Điểm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#1A3826] leading-tight text-balance">
              Các Dự Án Đang Được Thực Hiện
            </h2>
            <p className="mt-3 text-base text-[#57534E]">
              Những sáng kiến bảo tồn trực tiếp trên đất rừng và lưu vực suối, đem lại sinh kế cho người dân bản địa và bảo vệ đa dạng sinh thái.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EAE6DD] rounded-lg border border-[#D6CEBE]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1A3826] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A3826]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-[#D6CEBE] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#E7E2D8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-[#1A3826] border border-[#E7E2D8]">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2.5 py-1 rounded text-xs">
                    {project.status}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C25E2B]" />
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.period}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1A3826] group-hover:text-[#2C593D] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-6 pt-4 border-t border-[#E7E2D8]">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-medium text-[#44403C]">Tiến độ dự án</span>
                      <span className="font-serif font-bold text-[#1A3826] tabular-nums">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#E7E2D8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A3826] rounded-full transition-all duration-700"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1A3826] bg-[#FAF8F5] hover:bg-[#1A3826] hover:text-white border border-[#D6CEBE] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Xem hồ sơ khoa học dự án</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#D6CEBE] shadow-2xl p-6 sm:p-10 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#FAF8F5] text-[#78716C] hover:text-[#1A3826] cursor-pointer"
                aria-label="Đóng chi tiết dự án"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2">
                <span className="font-semibold uppercase tracking-wider text-[#C25E2B]">
                  {selectedProject.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.location}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.period}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A3826] mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-base text-[#44403C] leading-relaxed mb-6">
                {selectedProject.tagline}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-[#E7E2D8]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E7E2D8] flex items-center gap-3">
                  <User className="w-5 h-5 text-[#1A3826]" />
                  <div>
                    <div className="text-xs text-[#78716C]">Chủ nhiệm đề tài nghiên cứu</div>
                    <div className="text-sm font-semibold text-[#1A3826]">
                      {selectedProject.leadResearcher}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
                    Tác Động Môi Trường Đạt Được
                  </h4>
                  <p className="text-sm text-[#44403C] leading-relaxed">
                    {selectedProject.impactDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2">
                    Các Kết Quả Thực Nghiệm Nổi Bật
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#44403C]">
                        <Check className="w-4 h-4 text-[#1A3826] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold mb-2 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#C25E2B]" />
                    <span>Các Loài Thực Vật Trọng Điểm Được Bảo Tồn</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.keySpecies.map((species, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#FAF8F5] border border-[#D6CEBE] rounded-md text-xs font-medium text-[#1A3826]"
                      >
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E7E2D8] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1A3826] text-white rounded-md hover:bg-[#2C593D] cursor-pointer"
                >
                  Đóng hồ sơ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
