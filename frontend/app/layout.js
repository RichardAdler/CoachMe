import Navbar from './global-components/Navbar';
import Footer from './global-components/Footer';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata = {
  title: 'CoachMe',
  description: 'Industrial Consulting Group Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
