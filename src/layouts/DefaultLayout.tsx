import { ReactNode } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

type Props = {
    children: ReactNode;
  };

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
