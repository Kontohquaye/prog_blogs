import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import { EdgeStoreProvider } from "./libs/edgestore";
import "./globals.css";
import Provider from "./components/ThemeProvider";
import Nav from "./components/Nav";
import AuthProvider from "./components/NextAuthProvider";

const gothic = Gothic_A1({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "PBlogs",
  description: "Create blogs for free",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={gothic.className}>
        <AuthProvider>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <div>
              <Nav />
              <EdgeStoreProvider>{children}</EdgeStoreProvider>
              {modal}
            </div>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
