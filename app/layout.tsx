import type { Metadata } from 'next';
import './style.css';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: '背影如正面',
  description: '一位喜欢画画和折腾的前端工程师主页',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 w-full">
          <Navbar
            tabs={[
              { name: '主页', to: '/' },
              { name: '关于', to: '/about' },
            ]}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
