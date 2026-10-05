import Link from "next/link";
import { ArrowLeft, Building2, SearchX } from "lucide-react";
import { MainCard } from "@/components/MainCard";

export default function NotFound() {
  return (
    <MainCard>
      <div className="flex flex-col items-center text-center">
        <span className="flex size-16 items-center justify-center rounded-2xl bg-jade/15 text-jade">
          <SearchX className="size-8" />
        </span>

        <span className="mt-6 rounded-full border border-jade/40 bg-jade/10 px-4 py-1.5 text-xs font-bold tracking-wide">
          Erro 404
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl leading-tight font-black sm:text-5xl">
          Página <span className="text-jade">não encontrada</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed font-light sm:text-lg">
          O endereço que você tentou acessar não existe ou foi movido. Que tal
          voltar ao início ou explorar as empresas sustentáveis?
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 px-7 py-3 font-bold transition hover:shadow-lg hover:brightness-90"
          >
            <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
            Voltar ao início
          </Link>
          <Link
            href="/companies"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 px-7 py-3 font-bold transition hover:shadow-lg hover:brightness-90"
          >
            <Building2 className="size-4" />
            Explorar empresas
          </Link>
        </div>
      </div>
    </MainCard>
  );
}
