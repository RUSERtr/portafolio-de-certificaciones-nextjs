'use client'

import { certifications } from '@/lib/certifications';
import { notFound } from 'next/navigation';

type CertificadoPageProps = {
  params: {
    id: string;
  };
};

export default function CertificadoPage({ params }: CertificadoPageProps) {
  const { id } = params;
  const certification = certifications.find((cert) => cert.id.toString() === id);

  if (!certification || certification.status === 'in-progress') {
    notFound();
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe
        src={certification.credentialUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={`Certificado de ${certification.title}`}
      />
    </div>
  );
}
