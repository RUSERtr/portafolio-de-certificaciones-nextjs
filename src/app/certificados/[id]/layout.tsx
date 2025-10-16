import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visualizador de Certificado',
  description: 'Visualizador de certificado profesional.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function CertificadoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
