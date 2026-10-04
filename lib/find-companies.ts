import { In } from "typeorm";
import { getDataSource } from "@/lib/data-source";
import { EmpresaSchema, type EmpresaEntity } from "@/lib/entities";

export type Company = {
  cnpj: string;
  razaoSocial: string;
  siteUrl: string;
  email: string | null;
  descricao: string | null;
  cidade: string;
  estado: string;
  ramos: string | null;
};

export async function getCompanies(ramo?: string): Promise<Company[]> {
  const ds = await getDataSource();
  const repo = ds.getRepository<EmpresaEntity>(EmpresaSchema);

  let where = {};

  if (ramo) {
    const filtradas = await repo
      .createQueryBuilder("e")
      .select("e.cnpj")
      .innerJoin("e.ofertas", "o")
      .where("UPPER(o.categoria) = UPPER(:ramo)", { ramo })
      .getMany();

    if (filtradas.length === 0) return [];
    where = { cnpj: In(filtradas.map((f) => f.cnpj)) };
  }

  const empresas = await repo.find({
    where,
    relations: { cidade: true, ofertas: true },
    order: { razaoSocial: "ASC" },
  });

  return empresas.map((e) => {
    const categorias = [
      ...new Set(
        e.ofertas.map((o) => o.categoria).filter((c): c is string => !!c),
      ),
    ].sort();

    return {
      cnpj: e.cnpj,
      razaoSocial: e.razaoSocial,
      siteUrl: e.siteUrl,
      email: e.email,
      descricao: e.descricao,
      cidade: e.cidade.nome,
      estado: e.cidade.estado,
      ramos: categorias.length ? categorias.join(", ") : null,
    };
  });
}
