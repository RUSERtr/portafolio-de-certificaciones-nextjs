"use client";

import type { Certification } from '@/lib/certifications';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Hourglass } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  const isInProgress = certification.status === 'in-progress';

  return (
    <Dialog>
      <Card className={cn(
        "group flex flex-col h-full bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden",
        isInProgress && "border-accent/50"
      )}>
        <DialogTrigger asChild>
          <div className="relative h-48 w-full cursor-pointer">
            <Image
              src={certification.imageUrl}
              alt={`Logo de ${certification.title}`}
              fill
              className={cn("object-cover")}
              data-ai-hint={certification.imageHint}
            />
            {isInProgress && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Hourglass className="h-10 w-10 text-white/80 transition-transform duration-500 group-hover:rotate-180" />
              </div>
            )}
          </div>
        </DialogTrigger>
        <div className="flex flex-col flex-grow p-6">
          <CardHeader className="p-0 min-h-[5rem]">
            <CardTitle className="text-lg font-semibold leading-tight">{certification.title}</CardTitle>
            <CardDescription className="pt-2">
              <a 
                href={certification.institutionUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {certification.institution}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow p-0 pt-4">
            <p className="text-sm text-muted-foreground">{certification.date}</p>
          </CardContent>
          <CardFooter className="p-0 pt-4 mt-auto">
            {isInProgress ? (
              <Button variant="outline" className="w-full" disabled>
                En Progreso
                <Hourglass className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              </Button>
            ) : (
              <Button asChild variant="ghost" className="w-full text-primary hover:bg-primary/10 hover:text-primary">
                <a href={`/certificados/${certification.id}`} target="_blank" rel="noopener noreferrer">
                  Ver Credencial
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </CardFooter>
        </div>
      </Card>
      <DialogContent className="p-0 border-0 max-w-4xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Vista ampliada del certificado: {certification.title}</DialogTitle>
          <DialogDescription className="sr-only">Imagen ampliada del certificado para {certification.title}.</DialogDescription>
        </DialogHeader>
        <Image
          src={certification.imageUrl}
          alt={`Vista ampliada del certificado de ${certification.title}`}
          width={1200}
          height={800}
          className="rounded-lg object-contain w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
}
