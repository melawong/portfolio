import { useRouter } from "next/router";
import React from "react";
// import Canvas from "@/components/Canvas";

export default function Home() {
  // const draw = (ctx, frameCount) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillStyle = "#000000";
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   ctx.fill();
  // };
  const router = useRouter();
  return (
    <main className="top-level">
      <div className="homebox">
        <h1 className="title--homepage shimmer-bounce">
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span>!</span>
        </h1>
        <div className="home__container--buttons">
          <button type="button" onClick={() => router.push("/about")}>
            About
          </button>
          <button type="button" onClick={() => router.push("/portfolio")}>
            Portfolio
          </button>
          <button type="button" onClick={() => router.push("/contact")}>
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}
