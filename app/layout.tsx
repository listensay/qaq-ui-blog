import type { Metadata } from "next";
import './style.css'

export const metadata: Metadata = {
  title: "背影如正面",
  description: "一位喜欢画画和折腾的前端工程师主页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
