'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [hasTicket, setHasTicket] = useState(false);

  useEffect(() => {
    const ticketData = sessionStorage.getItem('data');
    if (ticketData) {
      setHasTicket(true);
    }
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 px-10 text-white">
      <Link href="/" className="flex items-center text-black">
        <span className="text-3xl font-bold italic">
          <span>A</span>
          <span>M</span>
        </span>
      </Link>
      <ol className="flex gap-10 text-zinc-700">
        <Link
          href={hasTicket ? "/ticket" : "/"}
          className="hover:text-zinc-900 hover:underline flex items-center gap-1"
        >
          {hasTicket ? "Ver mi ticket" : ""}
        </Link>
        <a href="#" className="hover:text-zinc-900 flex items-center gap-1">
          Bogotá
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block ml-1 opacity-70"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </ol>
    </nav>
  );
}
