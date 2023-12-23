import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "@/components/Layout/RootLayout";
import HomePage from "@/components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
