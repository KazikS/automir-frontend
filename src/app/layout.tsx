import { Header } from "@/components/layout/Header";
import { Provider } from "@/shared/theme/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Автомир",
  description: "Автомир Котлас",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
