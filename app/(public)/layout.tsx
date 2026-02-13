import { Metadata } from "next";
import Header from "@/src/components/landing/Header";
import Footer from "@/src/components/landing/Footer";

export const metadata: Metadata = {
  title: 'Klynn Landing',
  description: 'Klynn landing Project',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-8">{children}</main>
      <Footer />
    </div>
  );
}
