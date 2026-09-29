import { StrategicGoal, ProjectItem, FieldStation, PublicationItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_wildflower_restoration_1790658684276.jpg';
export const NURSERY_IMAGE = '/src/assets/images/forest_nursery_community_1790658699538.jpg';
export const RIVER_IMAGE = '/src/assets/images/river_ecological_protection_1790658714329.jpg';
export const EDUCATION_IMAGE = '/src/assets/images/community_field_education_1790658726865.jpg';
export const RECYCLING_WORKSHOP_IMAGE = '/src/assets/images/workshop_recycling_craft_1790692551473.jpg';

export const STRATEGIC_DIRECTIONS = [
  {
    number: '01',
    title: 'Phục hồi Sinh thái & Tái sinh Thảm Thực vật Bản địa',
    englishTitle: 'Ecological Restoration & Rewilding',
    description: 'Từ chối các mô hình trồng rừng độc canh thương mại. Dã Hoa Khai Xứ kiến tạo và nhân rộng mô hình rừng tự nhiên hỗn loài đa tầng tán, tập trung bảo tồn các giống hoa dại nguy cấp, cỏ bản địa và cây gỗ tiên phong giữ đất.',
    keyAction: 'Thu thập hạt giống dại nguyên chủng, ươm mầm hữu cơ và hỗ trợ diễn thế sinh thái tự nhiên.',
    tag: 'Cốt lõi sinh thái',
  },
  {
    number: '02',
    title: 'Bảo vệ Lưu vực Nước ngầm & Hành lang Ven sông',
    englishTitle: 'Riparian Corridors & Watershed Stewardship',
    description: 'Hệ thống sông suối là huyết mạch của đất mẹ. Trung tâm thiết lập các vành đai thực vật đệm ven suối nhằm thanh lọc nguồn nước tự nhiên, ngăn xói mòn sạt lở mùa mưa bão và duy trì vi khí hậu mát lành.',
    keyAction: 'Khôi phục 180km bờ suối đầu nguồn bằng các thảm dã hoa giữ đất và cây thủy sinh bản địa.',
    tag: 'Nguồn sống bền vững',
  },
  {
    number: '03',
    title: 'Tri thức Sinh thái & Đồng hành cùng Cộng đồng Bản địa',
    englishTitle: 'Indigenous Wisdom & Ecological Literacy',
    description: 'Thiên nhiên chỉ được bảo vệ bền vững khi người dân địa phương là chủ thể gìn giữ. Chúng tôi kết hợp phương pháp nghiên cứu sinh thái hiện đại với tri thức dân gian truyền đời của đồng bào miền núi.',
    keyAction: 'Xây dựng mạng lưới hơn 500 hộ gia đình quản trị rừng cộng đồng và tạo sinh kế dưới tán rừng.',
    tag: 'Cộng đồng làm gốc',
  },
  {
    number: '04',
    title: 'Nông nghiệp Tái sinh & Kinh tế Sinh thái Tuần hoàn',
    englishTitle: 'Regenerative Agroforestry & Circular Ecology',
    description: 'Chuyển hóa các vùng đất thoái hóa vì phân bón hóa học thành các khu vườn rừng đa tầng (Food Forest). Kết hợp cây hoa dại thu hút thiên địch thụ phấn, cây lấy hạt và dược liệu dưới tán cây che bóng.',
    keyAction: 'Không thuốc bảo vệ thực vật hóa học, tái tạo 100% độ phì nhiêu của tầng đất mặt tự nhiên.',
    tag: 'Giải pháp hài hòa',
  },
];

export const ACTION_GOALS: StrategicGoal[] = [
  {
    id: 'goal-2025',
    year: '2025 - 2026',
    title: 'Kiện toàn Ngân hàng Gen & Mạng lưới Vườn ươm Bản địa',
    summary: 'Thu thập và lưu trữ hơn 200 loài hoa dại và thảo mộc đặc hữu của vùng Trường Sơn - Tây Nguyên; hoàn thành 5 vườn ươm vệ tinh tại các cộng đồng vùng đệm.',
    metrics: [
      { label: 'Loài hoa dại thu thập', value: '200+ loài' },
      { label: 'Cây giống bản địa gieo ươm', value: '350.000 cây' },
      { label: 'Diện tích thử nghiệm tái hoang dã', value: '120 ha' },
    ],
    focusAreas: [
      'Xây dựng phòng lạnh bảo quản hạt giống sinh học',
      'Đào tạo kỹ thuật thu hái bền vững cho thanh niên bản địa',
      'Công bố Bản đồ phân bố thảm thực vật hoa dại nguy cấp',
    ],
  },
  {
    id: 'goal-2027',
    year: '2027 - 2028',
    title: 'Thiết lập Hành lang Hoa dại & Côn trùng Thụ phấn Liên vùng',
    summary: 'Liên kết các mảng rừng phân tán bằng các hành lang sinh thái xanh. Tạo môi trường sống liên tục cho các loài ong bướm bản địa, chim rừng và các loài thụ phấn thiết yếu.',
    metrics: [
      { label: 'Chiều dài hành lang bảo vệ', value: '250 km' },
      { label: 'Hộ dân tham gia mô hình', value: '1.200 hộ' },
      { label: 'Tỷ lệ che phủ bờ sông suối', value: '88%' },
    ],
    focusAreas: [
      'Phủ xanh các triền dốc ven đường đèo và thung lũng',
      'Ngăn chặn hóa chất diệt cỏ dọc các tuyến hành lang sinh thái',
      'Xây dựng trạm quan sát đa dạng sinh học định kỳ',
    ],
  },
  {
    id: 'goal-2030',
    year: '2030',
    title: 'Cột mốc Thập kỷ Xanh: Tự chủ Sinh thái & Cân bằng Khí hậu',
    summary: 'Phục hồi thành công 15.000 ha thảm thực vật bản địa, hình thành hệ sinh thái tự duy trì có khả năng chống chịu cao trước biến đổi khí hậu.',
    metrics: [
      { label: 'Rừng phục hồi tự nhiên', value: '15.000 ha' },
      { label: 'Lượng CO₂ hấp thụ hàng năm', value: '85.000 tấn' },
      { label: 'Số lượng đại sứ xanh đào tạo', value: '10.000 người' },
    ],
    focusAreas: [
      'Đo lường kiểm toán hấp thụ carbon theo chuẩn khoa học quốc tế',
      'Chuyển giao 100% quyền quản trị rừng cho các tổ hợp tác địa phương',
      'Đưa giáo trình sinh thái dã ngoại vào 100 trường học địa phương',
    ],
  },
  {
    id: 'goal-2035',
    year: '2035',
    title: 'Tầm nhìn Viễn cảnh: Đất Mẹ Tự Chữa Lành Toàn Diện',
    summary: 'Xóa bỏ hoàn toàn tình trạng đất trống đồi trọc tại các vùng trọng điểm dự án; hoa dại và muôn loài sinh sôi tự nhiên mà không cần can thiệp nhân tạo.',
    metrics: [
      { label: 'Độ che phủ sinh thái toàn vẹn', value: '96%' },
      { label: 'Số trung tâm phục hồi vệ tinh', value: '8 trạm' },
      { label: 'Loài nguy cấp được đưa khỏi Sách Đỏ', value: '18 loài' },
    ],
    focusAreas: [
      'Hệ thống tự tái sinh độc lập không phụ thuộc ngân sách tài trợ',
      'Mô hình sinh thái Dã Hoa Khai Xứ được nhân rộng toàn khu vực Đông Nam Á',
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-wildflowers',
    category: 'species',
    categoryLabel: 'Bảo tồn Loài',
    title: 'Dự án "Ngàn Hoa Về Ngàn" - Khôi phục Thảm Hoa Dại Bản Địa',
    tagline: 'Thu thập hạt, nhân giống và gieo lại các loài hoa dại đặc hữu trên các triền núi trơ trọi',
    location: 'Cao nguyên Lâm Viên & Dãy Bidoup - Núi Bà',
    image: HERO_IMAGE,
    progress: 78,
    period: '2023 - 2027',
    leadResearcher: 'TS. Nguyễn Hoàng Nam (Chuyên gia Thực vật học)',
    keySpecies: ['Dã Quỳ bản địa', 'Cúc dại đầm lầy', 'Hoa mua tím Langbiang', 'Lan đất rừng ẩm'],
    impactDescription: 'Đã hoàn trả 42 loài hoa dại nguyên chủng vào môi trường tự nhiên, tăng mật độ ong bản địa lên 320% so với khu vực đối chứng.',
    status: 'Đang triển khai',
    achievements: [
      'Gieo tạo thành công 180.000 khóm hoa trên 85 ha triền đồi',
      'Xuất bản cẩm nang nhận diện 120 loài hoa rừng đặc hữu',
      'Thiết lập vườn lưu trữ phôi thực vật chịu hạn',
    ],
  },
  {
    id: 'proj-nursery',
    category: 'forest',
    categoryLabel: 'Phục hồi Rừng',
    title: 'Dự án Vườn Ươm Cộng Đồng "Gieo Hạt Lành"',
    tagline: 'Cộng đồng người bản địa trực tiếp làm chủ các vườn ươm cây gỗ lớn và thảm thực vật đệm',
    location: 'Huyện Lạc Dương & Vùng đệm Vườn Quốc gia',
    image: NURSERY_IMAGE,
    progress: 92,
    period: '2022 - 2026',
    leadResearcher: 'Kỹ sư Lâm sinh Cil K’Brel & Lê Thu Trang',
    keySpecies: ['Thông 5 lá Đà Lạt', 'Dẻ gai rừng', 'Pơ-mu bản địa', 'Cây dầu rái'],
    impactDescription: 'Cung cấp hơn 320.000 cây giống đạt chuẩn sinh thái cho các chiến dịch trồng rừng phục hồi không dùng phân hóa học.',
    status: 'Đang triển khai',
    achievements: [
      'Tạo thu nhập ổn định cho 85 hộ dân đồng bào thiểu số',
      'Tỷ lệ cây giống sống sót sau khi xuất vườn đạt 94.2%',
      '100% giá thể ươm sử dụng mùn lá tự nhiên và vi sinh bản địa',
    ],
  },
  {
    id: 'proj-river',
    category: 'water',
    categoryLabel: 'Nguồn nước',
    title: 'Dự án "Dòng Chảy Xanh" - Giữ Mạch Nước Rừng Thao',
    tagline: 'Khôi phục hành lang sinh thái bảo vệ lưu vực sông Đa Nhim và các nhánh suối đầu nguồn',
    location: 'Thượng nguồn lưu vực Sông Đa Nhim & Sông Bé',
    image: RIVER_IMAGE,
    progress: 64,
    period: '2024 - 2028',
    leadResearcher: 'ThS. Trần Vĩnh Phúc (Thủy văn Sinh thái)',
    keySpecies: ['Cây gừa nước', 'Lâm vồ ven suối', 'Cỏ vetiver bản địa', 'Thảo mộc giữ bờ'],
    impactDescription: 'Làm chậm tốc độ dòng lũ xói lở đất, bảo vệ hệ sinh thái thủy sinh và nguồn nước sinh hoạt cho hơn 200.000 dân cư hạ nguồn.',
    status: 'Mở rộng 2026',
    achievements: [
      'Bảo vệ thành công 65km chiều dài bờ suối tự nhiên',
      'Độ đục nguồn nước mùa mưa giảm 48%',
      'Cá suối và lưỡng cư bản địa ghi nhận quay lại sinh sản',
    ],
  },
  {
    id: 'proj-education',
    category: 'education',
    categoryLabel: 'Giáo dục Sinh thái',
    title: 'Dự án "Trường Học Không Vách Ngăn"',
    tagline: 'Đưa các thế hệ học sinh, sinh viên và gia đình hòa mình học tập từ thiên nhiên chân thực',
    location: '3 Trạm nghiên cứu thực địa & Các trường học địa phương',
    image: EDUCATION_IMAGE,
    progress: 85,
    period: 'Dài hạn thường niên',
    leadResearcher: 'Nguyễn Thị Bích Ngọc (Điều phối Giáo dục Môi trường)',
    keySpecies: ['Hệ sinh thái rừng hỗn giao', 'Côn trùng chỉ thị', 'Nấm phân giải'],
    impactDescription: 'Hơn 8.500 lượt bạn trẻ tham gia các khóa học thực địa cảm thụ thiên nhiên và kỹ năng sống tối giản hài hòa với môi trường.',
    status: 'Đang triển khai',
    achievements: [
      'Tổ chức 140 chuyến thực địa khảo sát thực vật rừng',
      'Xây dựng 12 tủ sách sinh thái mở cho trường học vùng xa',
      'Mô hình học tập dựa trên quan sát tự nhiên không rác thải',
    ],
  },
];

export const FIELD_STATIONS: FieldStation[] = [
  {
    id: 'station-1',
    name: 'Trạm Nghiên cứu Thực địa Suối Mơ',
    code: 'DHKX-ST01',
    region: 'Cao nguyên Lâm Viên, Lâm Đồng',
    coordinates: '11°56′N 108°26′E',
    altitude: '1.450 m',
    ecosystemType: 'Rừng lá kim & Rừng hỗn giao á nhiệt đới',
    establishedYear: 2021,
    focusBio: 'Các loài hoa dại chịu sương mù, họ Lan rừng, cây gỗ hạt trần bản địa',
    currentWork: 'Khảo sát tần suất côn trùng thụ phấn và thử nghiệm kỹ thuật gieo hạt hoa dại bằng bom hạt hữu cơ (seed balls).',
    stats: {
      monitoredHectares: 6800,
      endemicSpeciesCount: 148,
      activeVolunteers: 65,
    },
  },
  {
    id: 'station-2',
    name: 'Trạm Bảo tồn Lưu vực Ngàn Sâu',
    code: 'DHKX-ST02',
    region: 'Dãy Trường Sơn Bắc, Hà Tĩnh',
    coordinates: '18°17′N 105°35′E',
    altitude: '650 m',
    ecosystemType: 'Rừng kín thường xanh mưa ẩm nhiệt đới',
    establishedYear: 2023,
    focusBio: 'Thảm thực vật bờ sông, cây giữ đất triền dốc, các loài dược thảo quý dưới tán rừng',
    currentWork: 'Thiết lập vành đai thực vật đệm ngăn rửa trôi đất canh tác ven triền dốc và bảo tồn các mạch nước ngầm.',
    stats: {
      monitoredHectares: 4900,
      endemicSpeciesCount: 92,
      activeVolunteers: 42,
    },
  },
  {
    id: 'station-3',
    name: 'Trạm Thực nghiệm Đa dạng Vùng Đệm Tràm Chim',
    code: 'DHKX-ST03',
    region: 'Đồng Tháp Mười, Đồng bằng Sông Cửu Long',
    coordinates: '10°41′N 105°31′E',
    altitude: '2 m',
    ecosystemType: 'Đất ngập nước theo mùa & Rừng tràm tự nhiên',
    establishedYear: 2024,
    focusBio: 'Các loài sen, súng dại, cỏ năng, chim nước di cư và sinh vật lọc nước',
    currentWork: 'Khôi phục vùng đệm sinh thái tự nhiên giúp giữ ngọt chống xâm nhập mặn và làm sạch nguồn nước tưới.',
    stats: {
      monitoredHectares: 3100,
      endemicSpeciesCount: 64,
      activeVolunteers: 38,
    },
  },
];

export const SCIENTIFIC_PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-01',
    title: 'Báo cáo Kiểm toán Đa dạng Thực vật Hoa Dại Bản Địa Vùng Đệm Lâm Viên 2024',
    category: 'Nghiên cứu Thực địa',
    year: 2024,
    author: 'Tập thể Nhóm Nghiên cứu Sinh thái Dã Hoa Khai Xứ',
    pages: 64,
    summary: 'Phân tích định lượng sự phục hồi của 42 loài thực vật có hoa sau 3 năm áp dụng phương pháp tái hoang dã có kiểm soát, so sánh trực quan với khu vực trồng rừng đơn thuần.',
    fileSize: '4.8 MB (PDF)',
    highlights: [
      'Định danh 14 loài hoa dại có khả năng phục hồi đất chua bạc màu',
      'Độ phong phú của quần thể bướm ngày tăng gấp 3.4 lần',
      'Đề xuất 5 nguyên tắc gieo ươm cây bản địa không hóa chất',
    ],
  },
  {
    id: 'pub-02',
    title: 'Sổ tay: Hướng dẫn Nhận diện 50 Loài Hoa Dại & Cây Tiên Phong Giữ Đất',
    category: 'Cẩm nang Thực địa',
    year: 2024,
    author: 'TS. Nguyễn Hoàng Nam & Ban Đào tạo',
    pages: 88,
    summary: 'Tài liệu hướng dẫn trực quan dạng minh họa thực vật học dành cho kiểm lâm viên cộng đồng, tình nguyện viên và người yêu thiên nhiên khi khám phá rừng.',
    fileSize: '7.2 MB (PDF)',
    highlights: [
      'Hình vẽ thực vật và ảnh chụp độ phân giải cao từng bộ phận hoa',
      'Đặc tính sinh thái: mùa nở hoa, loài côn trùng cộng sinh, điều kiện đất',
      'Mẹo nhân giống và gieo trồng không phá vỡ cân bằng tự nhiên',
    ],
  },
  {
    id: 'pub-03',
    title: 'Bạch thư Môi trường: Tái sinh Vùng Đệm - Từ Độc canh sang Rừng Tự nhiên Đa loài',
    category: 'Chính sách Sinh thái',
    year: 2025,
    author: 'Hội đồng Cố vấn Khoa học Dã Hoa Khai Xứ',
    pages: 42,
    summary: 'Đánh giá rủi ro sinh thái của các dự án phủ xanh bằng cây ngoại lai và đề xuất khung chính sách hỗ trợ người dân phục hồi rừng bản địa nhiều tầng tán.',
    fileSize: '3.1 MB (PDF)',
    highlights: [
      'Dữ liệu thực nghiệm về khả năng trữ nước của đất rừng tự nhiên',
      'Bài toán kinh tế sinh kế cho hộ nông dân khi chuyển đổi sang vườn rừng',
      'Khuyến nghị chính sách cho các quỹ môi trường và chính quyền địa phương',
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Thuận Theo Diễn Thế Tự Nhiên',
    english: 'Natural Ecological Succession',
    desc: 'Thiên nhiên có trí tuệ hàn gắn hàng triệu năm. Chúng tôi không cưỡng ép trồng những loài cây ngoại lai lớn nhanh để lấy thành tích bề nổi, mà nhường chỗ cho hoa dại và cỏ dại tiên phong làm dịu mặt đất trước khi cây gỗ lớn vươn lên.',
  },
  {
    title: 'Đa Dạng Thay Vì Đồng Nhất',
    english: 'Biodiversity Over Monoculture',
    desc: 'Một cánh rừng khỏe mạnh không bao giờ chỉ có một loài cây. Rừng cần đủ tầng vượt tán, tầng ưu thế, tầng dưới tán, tầng cây bụi và thảm cỏ hoa dại che phủ sát mặt đất.',
  },
  {
    title: 'Con Người Là Người Gác Cổng',
    english: 'Humans as Humble Stewards',
    desc: 'Con người không phải kẻ thống trị thiên nhiên, mà là một phần không tách rời của mạng lưới sinh thái. Bảo vệ môi trường là bảo vệ chính tương lai của con em chúng ta.',
  },
  {
    title: 'Minh Bạch Khoa Học & Liêm Chính',
    english: 'Scientific Integrity & Transparency',
    desc: 'Mọi số liệu phục hồi, tỷ lệ cây sống sót và nguồn tài trợ bảo trợ đều được kiểm chứng độc lập và công khai định kỳ trên trang tin của Trung tâm.',
  },
];
