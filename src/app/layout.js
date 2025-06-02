import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Jobwhee',
  description: 'Find the talent  sign up & get The job done ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-bodybackground antialiased`}>
        <div className="wrap px-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
