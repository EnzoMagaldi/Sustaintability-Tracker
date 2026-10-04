import Link from "next/link";
import { RAMOS } from "@/lib/ramos";

export function RamoFilter({ ativo }: { ativo?: string }) {
  const opcoes = [
    { value: undefined, label: "Todas as empresas", href: "/companies" },
    ...RAMOS.map((r) => ({
      value: r.value as string | undefined,
      label: r.label,
      href: `/companies?ramo=${r.value}`,
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {opcoes.map((op) => {
        const selecionado = op.value === ativo;
        return (
          <Link
            key={op.label}
            href={op.href}
            aria-current={selecionado ? "true" : undefined}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              selecionado
                ? "bg-jade text-black shadow-lg shadow-jade/30"
                : "bg-gray-200 hover:brightness-90"
            }`}
          >
            {op.label}
          </Link>
        );
      })}
    </div>
  );
}
