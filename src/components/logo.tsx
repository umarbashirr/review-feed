"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-xl font-bold uppercase text-primary">
      Review <span className="text-indigo-600">Feed</span>
    </Link>
  );
};

export default Logo;
