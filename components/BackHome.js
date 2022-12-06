import React from "react";
import Link from "next/link";

function BackHome({ color }) {
  return (
    <div class="group cursor-pointer">
      <Link href="/" class="md:hidden">
        <a class="tracking-wider block font-bold text-center text-xs uppercase pt-10 mt-10 border-t">
          Back Home
        </a>
      </Link>
      <span
        class="transition-{width} duration-200 ease-in-out block w-8 m-auto h-px mt-1 group-hover:w-16"
        style={{ backgroundColor: color }}
      ></span>
    </div>
  );
}

export default BackHome;
