// src/data/works.js
const img = (path) => `/img/${path}`;
const works = [
  {
    id: "w-001",
    title: "BucketList !",
    subtitle: "MERN 활용한 버킷리스트 · 반응형 UI",
    description: `React + Vite로 만든 나만의 버킷리스트!
단순한 목록이 아니라, 당신의 꿈이 현실이 되는 여정을 함께합니다!`,
    tags: ["MERN", "CRUD", "AUTH", "DASHBOARD", "RESPONSIVE"],
    thumbnail: img("p-1.png"),
    // 선택: 상세 보기용
    period: "2025.07 ~ 2025.08",
    role: "Front-end",
    stack: ["React", "Vite", "Zustand", "Recharts"],
    links: {
      demo: "https://example.com/demo1",
      notion: "https://www.notion.so/MERN-254589d8caac801489ecdebf67583cbc?source=copy_link",
    },
  },
  {
    id: "w-002",
    title: "Convolutional Neural Network",
    subtitle: "상품 리스트 · 필터/정렬",
    description:
      "Python + TensorFlow로 구현한 이미지 분류 딥러닝 모델. 합성곱 연산을 통해 시각적 패턴을 학습하고 분류 정확도를 향상시켰습니다.",
    tags: ["PYTHON", "GOOGLE COLAB", "TENSORFLOW", "DEEP LEARNING", "NVIDIA CUDA"],
    thumbnail: img("p-2.png"),
    period: "2025.06",
    role: "Front-end",
    stack: ["React", "Vite", "React Router"],
    links: {
      demo: "https://example.com/demo2",
      notion: "https://www.notion.so/26e589d8caac809da956e286c573c63d?source=copy_link",
    },
  },
  {
    id: "w-003",
    title: "TOCOBO CLONE",
    subtitle: "TOCOBO CLONE",
    description:
      "React + Vite로 만든 스킨케어 브랜드 웹사이트 클론! 실제 Tocobo 사이트의 디자인과 구조를 그대로 구현했습니다.",
    tags: ["React", "VITE", "AXIOS", "RESPONSIVE", " STYLED-COMPONENTS"],
    thumbnail: img("p-3.png"),

    period: "2025.05",
    role: "Full-stack(미니)",
    stack: ["React", "VITE", "AXIOS", "RESPONSIVE", " STYLED-COMPONENTS"],
    links: {
      demo: "#",
      notion: "https://www.notion.so/TOCOBO-project-277589d8caac80bea355fe4ad3dfd024?source=copy_link",
    },
  },
  {
    id: "w-004",
    title: "React Mini Projects",
    subtitle: "Counter · Timer · Wiki Search · Weather App",
    description:
      "React + Vite로 제작한 4개의 미니 프로젝트입니다. 상태 관리, 이벤트 핸들링, API 통신, 반응형 UI 등 다양한 기능을 실습하며 구현했습니다.",
    tags: ["React", "VITE", "HOOKS", "AXIOS", "RESPONSIVE", "PRACTICE"],
    thumbnail: img("p-4.png"),


    period: "2025.04",
    role: "Front-end(미니)",
    stack: ["React", "VITE", "HOOKS", "AXIOS"],
    links: {
      demo: "#",
      notion: "https://www.notion.so/react-mini-projects-collection-1234567890abcdef",
    },
  },

  {
    id: "w-005",
    title: "E-commerce Product Gallery",
    subtitle: "상품 리스트 · 필터/정렬",
    description:
      "상세 필터·정렬·페이지네이션을 제공하는 상품 갤러리. 접근성 고려한 키보드 네비게이션 적용.",
    tags: ["REACT", "RESPONSIVE", "FILTER", "PAGINATION", "ACCESSIBILITY"],
    thumbnail: img("p-2.png"),
    period: "2025.06",
    role: "Front-end",
    stack: ["React", "Vite", "React Router"],
    links: {
      demo: "https://example.com/demo2",
      notion: "https://notion.com/you/demo2",
    },
  },
  {
    id: "w-006",
    title: "Portfolio Admin",
    subtitle: "Works 관리 · CRUD",
    description:
      "관리자에서 Works 항목을 생성/수정/삭제하는 SPA. 목데이터로부터 CRUD UX 설계.",
    tags: ["REACT", "CRUD", "ADMIN", "FORM", "VALIDATION"],
    thumbnail: img("p-3.png"),

    period: "2025.05",
    role: "Full-stack(미니)",
    stack: ["React", "Zustand", "Express(Mock)"],
    links: {
      demo: "#",
      notion: "#",
    },
  },
  // 필요 개수만큼 추가
];

export default works