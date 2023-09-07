import Link from "next/link";
import React from "react";

export default function HamburgerMenu() {
  return (
    <div>
      <div>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/resume.pdf" target="_blank">
          Resume
        </Link>
      </div>
    </div>
  );
}
