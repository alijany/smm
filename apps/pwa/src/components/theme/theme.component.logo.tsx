"use client";

import Image from "next/image";

export function AppLogo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/images/logo.svg"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      priority
      style={{ objectFit: "contain" }}
    />
  );
}
