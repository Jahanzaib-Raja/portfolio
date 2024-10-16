'use client'
import './globals.css';
// import { Metadata } from 'next';
import { ThemeProvider } from './context/themeContext';
import { ThemeWrapper } from './theme';

import { poppins } from './fonts/fonts';

// export const metadata: Metadata = {
//   title: 'Raja Jahanzaib Ashfaq - Fullstack Engineer',
//   description: 'Explore my work, projects, and get in touch.',
//   openGraph: {
//     title: 'Raja Jahanzaib Ashfaq Portfolio',
//     description: 'Discover my professional portfolio and projects.',
//     url: 'https://your-portfolio.com',
//     images: [{ url: '/images/profile.jpg', width: 800, height: 600 }],
//   },
// };


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <ThemeProvider>{children}</ThemeProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}