export interface StrategicGoal {
  id: string;
  year: string;
  title: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  focusAreas: string[];
}

export interface ProjectItem {
  id: string;
  category: 'forest' | 'water' | 'education' | 'species';
  categoryLabel: string;
  title: string;
  tagline: string;
  location: string;
  image: string;
  progress: number;
  period: string;
  leadResearcher: string;
  keySpecies: string[];
  impactDescription: string;
  status: 'Đang triển khai' | 'Mở rộng 2026' | 'Đã hoàn thành giai đoạn 1';
  achievements: string[];
}

export interface FieldStation {
  id: string;
  name: string;
  code: string;
  region: string;
  coordinates: string;
  altitude: string;
  ecosystemType: string;
  establishedYear: number;
  focusBio: string;
  currentWork: string;
  stats: {
    monitoredHectares: number;
    endemicSpeciesCount: number;
    activeVolunteers: number;
  };
}

export interface PublicationItem {
  id: string;
  title: string;
  category: string;
  year: number;
  author: string;
  pages: number;
  summary: string;
  downloadUrl?: string;
  fileSize: string;
  highlights: string[];
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  roleInterest: string;
  availability: string;
  experienceNotes: string;
}
