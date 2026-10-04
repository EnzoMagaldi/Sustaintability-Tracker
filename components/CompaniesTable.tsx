import { ExternalLink } from "lucide-react";
import { Company } from "@/lib/find-companies";

function toHref(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

export function CompaniesTable({ companies }: { companies: Company[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/10">
      <table className="w-full min-w-176 text-left text-sm">
        <thead className="bg-jade/10">
          <tr>
            <th className="px-4 py-3 font-bold">Empresa</th>
            <th className="px-4 py-3 font-bold">Ramo</th>
            <th className="px-4 py-3 font-bold">Descrição</th>
            <th className="px-4 py-3 font-bold">Cidade</th>
            <th className="px-4 py-3 font-bold">Site</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {companies.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-4 py-10 text-center font-light">
                Nenhuma empresa encontrada para este filtro.
              </td>
            </tr>
          ) : (
            companies.map((c) => (
              <tr key={c.cnpj} className="transition hover:bg-gray-50">
                <td className="px-4 py-3">
                  <p className="font-bold">{c.razaoSocial}</p>
                  <p className="text-xs font-light">{c.cnpj}</p>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {c.ramos?.split(", ").map((r) => (
                      <span
                        key={r}
                        className="rounded-full bg-jade/15 px-2.5 py-0.5 text-xs font-bold"
                      >
                        {r}
                      </span>
                    )) ?? "—"}
                  </div>
                </td>
                <td className="max-w-xs px-4 py-3 font-light">
                  {c.descricao ?? "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-light">
                  {c.cidade}/{c.estado}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={toHref(c.siteUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold hover:text-jade"
                  >
                    Visitar
                    <ExternalLink className="size-3.5" />
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
