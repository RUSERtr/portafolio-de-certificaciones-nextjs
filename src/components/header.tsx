"use client";

import { Briefcase, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/icons/github-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export function Header() {
  const whatsappLink = `https://wa.me/584126480108`;
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Portafolio de Certificaciones
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  <SheetClose asChild>
                    <a href="https://github.com/RUSERtr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                      <GithubIcon className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="mailto:sergiotr22@gmail.com" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                       <span className='w-5 h-5 flex justify-center items-center'>@</span>
                      <span>Contacto</span>
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                      <WhatsappIcon className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="https://www.linkedin.com/in/sergio-troncoso-ruser" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 hover:bg-accent rounded-md">
                      <LinkedinIcon className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/RUSERtr" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="mailto:sergiotr22@gmail.com">
                  <span>Contacto</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://www.linkedin.com/in/sergio-troncoso-ruser" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
