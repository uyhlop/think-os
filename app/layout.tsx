import './styles.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'ThinkRN',
  description: 'Structured nursing exam execution, live build, founder updates.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
