"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { certifications } from '@/lib/certifications';
import { CertificationCard } from '@/components/certification-card';

export default function Home() {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-gray-300 to-gray-500 text-transparent bg-clip-text">
              Mis Certificaciones Profesionales
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              En Desarrollo de Software
            </p>
            <h2 className="mt-6 text-2xl font-semibold text-gray-400 animate-fade-in-up">
              Sergio Troncoso
            </h2>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </section>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {year} Portafolio de Certificaciones. Todos los derechos reservados.
      </footer>
    </div>
  );
}
