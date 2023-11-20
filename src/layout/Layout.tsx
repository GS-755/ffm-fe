import { Footer } from './Footer';
import { ReactNode } from 'react';
import { Navbar } from './Navbar';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className="h-full max-h-max max-w-full overflow-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
};

export { MainLayout };