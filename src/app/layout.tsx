import type { Metadata } from "next";
import { Inter, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { CartProvider } from "@/context/cartContext";

const inter = Inter({ subsets: ["latin"] });

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darkerGrotesque",
  display: "swap",
});

const SFProBold = localFont({
  src: "../../public/fonts/SF-Pro-Display-Bold.otf",
  variable: "--font-SFProBold",
  weight: "700",
  display: "swap",
});

const SFProSemibold = localFont({
  src: "../../public/fonts/SF-Pro-Display-Semibold.otf",
  variable: "--font-SFProSemibold",
  weight: "600",
  display: "swap",
});

const SFProRegular = localFont({
  src: "../../public/fonts/SF-Pro-Display-Regular.otf",
  variable: "--font-SFProRegular",
  weight: "400",
  display: "swap",
});

const SFProMedium = localFont({
  src: "../../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-SFProMedium",
  weight: "500",
  display: "swap",
});

const SFProLight = localFont({
  src: "../../public/fonts/SF-Pro-Display-Light.otf",
  variable: "--font-SFProLight",
  weight: "300",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Zetsu" />
        <meta name="apple-mobile-web-app-title" content="Zetsu" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content=""></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body
        className={`${inter.className} ${SFProBold.variable} ${SFProLight.variable} ${SFProMedium.variable} ${SFProRegular.variable} ${SFProSemibold.variable} ${darkerGrotesque.variable} bg-white`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
