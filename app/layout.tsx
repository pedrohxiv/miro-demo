import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { Loading } from "@/components/auth/loading";
import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-provider";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miro",
  icons: { icon: "/logo.svg" },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={font.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
