import Header from "@/components/Header";
import React from "react";

export default function Portfolio() {
  return (
    <div className="top-level">
      <div className="content__container--double">
        <Header />
        <div>
          <h3>Let&apos;s Get Set</h3>
          <p>lgs video here</p>
          <h3>Kid Vault</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7DjfgsrBCEc?si=MnkqHzp3xyIoNwcn&amp;start=53"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <p>demo</p>
          <p>github link</p>
        </div>
      </div>
    </div>
  );
}
