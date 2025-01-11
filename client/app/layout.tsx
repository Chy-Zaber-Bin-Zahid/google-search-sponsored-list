import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Search Sponsored List",
  description: "Google Search Sponsored List Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
