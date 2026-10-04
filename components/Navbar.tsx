"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

const links = [
  { label: "Empresas", href: "/companies" },
  { label: "Sobre nós", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-[30%] fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-1 rounded-full border border-white/40 bg-gray-300/40 p-1.5 
        shadow-lg backdrop-blur-sm justify-center w-full"
      >
        <Link
          href="/"
          aria-label="Ir para a página inicial"
          className="flex size-9 items-center justify-center rounded-full bg-jade text-white transition hover:scale-105"
        >
          <Leaf className="size-5" />
        </Link>

        {links.map(({ label, href }) => {
          const ativo = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={ativo ? "page" : undefined}
              className={`rounded-full px-5 py-2 text-sm transition ${
                ativo
                  ? "bg-white font-bold shadow"
                  : "font-medium hover:bg-white/60"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
