import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Canvas from "@/components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  return (
    <main className="top-level">
      <div className="content__container--double">
        <Header />
      </div>
      <Canvas draw={draw} />
    </main>
  );
}
