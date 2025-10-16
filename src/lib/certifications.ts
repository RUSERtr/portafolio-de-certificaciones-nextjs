
export type Certification = {
  id: number;
  title: string;
  institution: string;
  institutionUrl: string;
  date: string;
  credentialUrl: string;
  imageUrl: string;
  status?: 'completed' | 'in-progress';
  imageHint: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Curso de Desarrollo con IA',
    institution: 'BIG school',
    institutionUrl: 'https://thebigschool.com/',
    date: 'Emitido Oct 2025',
    credentialUrl: '/images/Certificado - CursoDesarrolloConIA.pdf',
    imageUrl: '/images/Certificacion - Desarrollo con IA.png',
    imageHint: 'AI development',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Curso de Metodología para Solución de Problemas',
    institution: 'Codigo Facilito',
    institutionUrl: 'https://codigofacilito.com/',
    date: 'Emitido Ago 2025',
    credentialUrl: '/images/Certificado - Curso de metodologías para solución de problemas.pdf',
    imageUrl: '/images/Certificado - Metodologia para Solucion de Problemas.png',
    imageHint: 'problem solving',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo',
    institution: 'Platzi',
    institutionUrl: 'https://platzi.com/',
    date: 'Emitido Abril 2025',
    credentialUrl: '/images/Certificado - pensamiento-logico.pdf',
    imageUrl: '/images/Certificado - Pensamiento logico algoritmos y diagramas de flujo.png',
    imageHint: 'logical thinking',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Curso Profesional de Git y GitHub',
    institution: 'Platzi',
    institutionUrl: 'https://platzi.com/',
    date: 'Emitido Abril 2025',
    credentialUrl: '/images/Certificado - gitgithub.pdf',
    imageUrl: '/images/Certificacion - Git y GitHub.png',
    imageHint: 'git github',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Bootcamp de GitHub Actions',
    institution: 'Codigo Facilito',
    institutionUrl: 'https://codigofacilito.com/',
    date: 'Emitido Jul 2025',
    credentialUrl: '/images/Certificado - Bootcamp de GitHub Actions.pdf',
    imageUrl: '/images/Certificado - GitHubActions.png',
    imageHint: 'github actions',
    status: 'completed',
  },
  {
    id: 7,
    title: 'Curso Profesional de Flutter',
    institution: 'Udemy',
    institutionUrl: 'https://www.udemy.com/',
    date: '2024 - actualidad',
    credentialUrl: '#',
    imageUrl: '/images/flutter-dart.jpg',
    imageHint: 'flutter dart',
    status: 'in-progress',
  },
  {
    id: 8,
    title: 'Curso Profesional de Dart',
    institution: 'CodigoFacilito',
    institutionUrl: 'https://codigofacilito.com/',
    date: '2024 - actualidad',
    credentialUrl: '#',
    imageUrl: '/images/flutter-dart.jpg',
    imageHint: 'flutter dart',
    status: 'in-progress',
  },
  {
    id: 9,
    title: 'Curso Profesional de JavaScript',
    institution: 'Udemy',
    institutionUrl: 'https://www.udemy.com/',
    date: '2024 - actualidad',
    credentialUrl: '#',
    imageUrl: '/images/JavaScript-logo.png',
    imageHint: 'javascript logo',
    status: 'in-progress',
  },
  {
    id: 10,
    title: 'Curso de Fundamentos de Flutter Web',
    institution: 'CodigoFacilito',
    institutionUrl: 'https://codigofacilito.com/',
    date: '2025 - actualidad',
    credentialUrl: '#',
    imageUrl: '/images/flutter-dart.jpg',
    imageHint: 'flutter dart',
    status: 'in-progress',
  },
  {
    id: 11,
    title: 'Curso de n8n Automatizaciones con IA',
    institution: 'Udemy',
    institutionUrl: 'https://www.udemy.com/',
    date: '2025 - actualidad',
    credentialUrl: '#',
    imageUrl: '/images/n8n-759.webp',
    imageHint: 'n8n automation',
    status: 'in-progress',
  },
];
