import { Header } from "@/widgets/header/ui/Header";
import { Provider } from "@/shared/theme/provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Автомир",
  description: "Автомир Котлас",
};

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body suppressHydrationWarning>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
