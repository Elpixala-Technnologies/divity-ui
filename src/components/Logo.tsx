import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer gap-3">
      <Image
        src={logo}
        alt="logo"
        height={100}
        width={100}
        className="h-16 max-h-16 w-min object-contain md:h-20"
      />
      <p className="text-xl font-semibold md:text-3xl">Divity Audio</p>
    </Link>
  );
}
