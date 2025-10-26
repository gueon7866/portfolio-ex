// src/data/works.js
const img = (path) => `/img/${path}`;
const works = [
  {
    id: "w-001",
    title: "BucketList !",
    subtitle: "MERN 활용한 버킷리스트 · 반응형 UI",
    description: `React + Vite로 만든 나만의 버킷리스트!
단순한 목록이 아니라, 당신의 꿈이 현실이 되는 여정을 함께합니다.`,
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
    description: "React + Vite로 만든 4개의 미니 프로젝트입니다. 상태 관리, 이벤트 처리, API 호출, 반응형 UI를 연습하며 구현했습니다.",
    tags: ["React", "VITE", "HOOKS", "AXIOS", "RESPONSIVE", "PRACTICE"],
    thumbnail: img("mini-4.png"),

    period: "2025.04",
    role: "Front-end(미니)",
    stack: ["React", "VITE", "HOOKS", "AXIOS"],
    links: {
      demo: "#",
      notion: "https://www.notion.so/24c589d8caac80f7b116e050e6bf4452?v=24c589d8caac8084a9ae000c6f4a5793&source=copy_link",
    },
  },

 {
  id: "w-005",
  title: "Portfolio Projects",
  subtitle: "React 3D Portfolio · Modern Workspace Design",
  description:
    "React + Vite 기반으로 제작한 포트폴리오 웹사이트입니다. 3D 스타일의 UI, 반응형 레이아웃, 컴포넌트 구조화를 통해 깔끔하고 직관적인 사용자 경험을 구현했습니다.",
  tags: ["React", "VITE", "3D", "RESPONSIVE", "UI/UX", "PORTFOLIO"],
  thumbnail: img("port-5.png"),

  period: "2025.09 ~ 2025.10",
  role: "Front-end",
  stack: ["React", "VITE", "STYLED-COMPONENTS", "THREE.JS"],
  links: {
    demo: "#",
    notion:
      "https://www.notion.so/Portfolio-Project-277589d8caac807e81cde747fa5b0f13?source=copy_link",
  },
}

  // 필요 개수만큼 추가
];

export default works