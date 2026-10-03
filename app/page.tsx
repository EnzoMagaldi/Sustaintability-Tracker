import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ListFilter, Recycle, Building2 } from "lucide-react";
import { MainCard } from "@/components/MainCard";

const destaques = [
  {
    icon: Building2,
    titulo: "Tudo em um só lugar",
    texto: "Um compilado de empresas com práticas sustentáveis.",
  },
  {
    icon: ListFilter,
    titulo: "Filtre por ramo",
    texto: "Tecnologia, agricultura, energia e muito mais.",
  },
  {
    icon: Recycle,
    titulo: "Foco no ODS 12",
    texto: "Incentivando o consumo e a produção responsáveis.",
  },
];

export default function Home() {
  return (
    <MainCard>
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full border border-jade/40 bg-jade/10 px-4 py-1.5 text-xs font-bold tracking-wide">
          ODS 12 · Consumo e Produção Responsáveis
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl leading-tight font-black sm:text-5xl">
          Encontre empresas que produzem de forma{" "}
          <span className="text-jade">sustentável</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed font-light sm:text-lg">
          Um compilado de empresas que desenvolvem seus produtos e serviços
          pensando no meio ambiente, para você consumir com mais consciência.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/companies"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 px-7 py-3 font-bold hover:shadow-lg shadow-jade/30 transition hover:brightness-85"
          >
            Explorar empresas
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full  px-7 py-3 font-bold
            bg-gray-200 transition hover:brightness-85 hover:shadow-lg"
          >
            Sobre nós
          </Link>
        </div>
      </div>

      <ul className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-3">
        {destaques.map(({ icon: Icon, titulo, texto }) => (
          <li
            key={titulo}
            className="rounded-2xl border border-black/5 bg-gray-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-md"
          >
            <span className="mx-auto flex size-11 items-center justify-center rounded-xl bg-jade/15 text-jade">
              <Icon className="size-5" />
            </span>
            <h2 className="mt-4 text-sm font-bold">{titulo}</h2>
            <p className="mt-2 text-sm leading-relaxed font-light">{texto}</p>
          </li>
        ))}
      </ul>
    </MainCard>
  );
}
