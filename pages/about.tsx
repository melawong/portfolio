import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <div className="top-level">
        <Header />
        <div className="homebox">
          <p>
            I&apos;m Melanie! Full stack software engineer well-versed in React
            NextJS, Django, Python, and Ruby on Rails. Check out my resume!
          </p>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
          <Link href="https://www.github.com/melawong" target="_blank">
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/melaniewong123"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
}
