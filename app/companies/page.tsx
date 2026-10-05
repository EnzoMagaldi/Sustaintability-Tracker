import { MainCard } from "@/components/MainCard";
import { RamoFilter } from "@/components/RamoFilter";
import { CompaniesTable } from "@/components/CompaniesTable";
import { getCompanies } from "@/lib/find-companies";
import { RAMOS } from "@/lib/ramos";

export const metadata = {
  title: "Empresas | Empresas Sustentáveis",
  description: "Busque empresas sustentáveis e filtre por ramo de atuação.",
};

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams: Promise<{ ramo?: string }>;
}) {
  const { ramo } = await searchParams;

  const ramoAtivo = RAMOS.find((r) => r.value === ramo)?.value;

  const companies = await getCompanies(ramoAtivo);

  return (
    <MainCard>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl leading-tight font-black sm:text-5xl">
          Empresas <span className="text-jade">sustentáveis</span>
        </h1>
        <p className="mt-4 max-w-xl font-light">
          Filtre por ramo de atuação para encontrar a empresa ideal.
        </p>
      </div>

      <div className="mt-8">
        <RamoFilter ativo={ramoAtivo} />
      </div>

      <div className="mt-8">
        <CompaniesTable companies={companies} />
      </div>
    </MainCard>
  );
}
