import Link from "next/link";
import { ArrowRight, Target, Search, Leaf } from "lucide-react";
import { MainCard } from "@/components/MainCard";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Sobre nós | Empresas Sustentáveis",
  description:
    "Conheça o propósito do projeto e sua relação com o ODS 12 da ONU.",
};

const passos = [
  {
    icon: Target,
    titulo: "Nosso propósito",
    texto:
      "Reunir em um só lugar empresas que desenvolvem produtos e serviços de forma sustentável, facilitando o acesso a essas informações.",
  },
  {
    icon: Leaf,
    titulo: "ODS 12",
    texto:
      "O Objetivo de Desenvolvimento Sustentável 12, da ONU, trata de assegurar padrões de produção e de consumo sustentáveis.",
  },
  {
    icon: Search,
    titulo: "Como funciona",
    texto:
      "Você pode navegar pela lista de empresas e filtrar por ramo de atuação, como tecnologia, agricultura, energia e outros.",
  },
];

export default function SobrePage() {
  return (
    <>
      <MainCard>
        <section className="mx-auto mt-8 max-w-4xl flex flex-col gap-2">
          <h2 className="text-2xl font-bold self-center">Quem somos</h2>
          <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
            Somos um projeto independente criado para apoiar o ODS 12, que trata
            do consumo e da produção responsáveis. Reunimos em um só lugar
            empresas que desenvolvem seus produtos e serviços pensando no
            impacto ambiental.
          </p>
          <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
            Acreditamos que informação acessível ajuda as pessoas a fazerem
            escolhas mais conscientes e dá visibilidade a quem já faz a
            diferença.
          </p>
          <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
            O mundo se encontra a beira de um colapso ambiental causado
            especialmente pelo desrespeito ao ambiente unido a extração
            irresponsável dos recursos naturais, encontramos na tecnologia uma
            forma de ajudar na conscientização sobre o assunto
          </p>
          <h2 className="text-2xl font-bold self-center">Autores</h2>
          <p className="mt-4 text-base leading-relaxed font-light sm:text-lg">
            O site foi desenvolvido como uma ideia de estudantes de Ciência da
            Computação da Universidade Federal Fluminense, preocupados com os
            rumos do futuro da humanidade com as questões climáticas cada vez
            mais afloradas e impactadas
          </p>
        </section>
        <ul className="mt-14 grid gap-4 border-t border-black/10 pt-10 sm:grid-cols-3">
          {passos.map(({ icon: Icon, titulo, texto }) => (
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

        <div className="mt-10 flex justify-center">
          <Link
            href="/empresas"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-200 px-7 py-3 font-bold transition hover:shadow-lg hover:brightness-90"
          >
            Explorar empresas
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </MainCard>
    </>
  );
}
