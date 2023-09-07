import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="logo">
        Melanie Wong
      </Link>
    </div>
  );
}
