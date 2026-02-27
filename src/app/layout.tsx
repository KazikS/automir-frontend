import { Header } from "@/widgets/header";
import { Provider } from "@/shared/theme/provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/widgets/footer/ui/Footer";

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
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
