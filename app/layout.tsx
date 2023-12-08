import { inter } from './ui/fonts';
import './ui/global.css';
import './ui/home.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `} >{children}</body>
    </html>
  );
}
