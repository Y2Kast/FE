import type { Metadata } from "next";
import RecoilRootProvider from "./recoilRootProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <RecoilRootProvider>
        <body>{children}</body>
      </RecoilRootProvider>
    </html>
  );
}
