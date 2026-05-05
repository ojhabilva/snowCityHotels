import "./globals.css";
import MainLayout from "./MainLayout";

export const metadata = {
  title: "Snow City",
  description: "Tourism App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout children={children} />
}