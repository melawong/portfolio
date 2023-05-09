import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Canvas from "@/components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="top-level">
      <div className="content__container--double">
        <Header />
      </div>
      <Canvas />
    </main>
  );
}
