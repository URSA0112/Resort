import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marush Hotel & Resort — Töv Province, Mongolia',
  description: 'A refined luxury escape set within the untamed landscapes of Töv Province — where Mongolian heritage, stillness, and world-class comfort meet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-forest-black text-ivory">
        {children}
      </body>
    </html>
  );
}
