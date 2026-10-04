import { EntitySchema } from "typeorm";

export type CidadeEntity = {
  id: number;
  nome: string;
  estado: string;
  pais: string;
};

export type OfertaEntity = {
  id: number;
  nome: string;
  descricao: string | null;
  categoria: string | null;
  tipo: string;
  empresa?: EmpresaEntity;
};

export type EmpresaEntity = {
  cnpj: string;
  razaoSocial: string;
  siteUrl: string;
  email: string | null;
  descricao: string | null;
  cidade: CidadeEntity;
  ofertas: OfertaEntity[];
};

export const CidadeSchema = new EntitySchema<CidadeEntity>({
  name: "Cidade",
  tableName: "CIDADE",
  columns: {
    id: { type: Number, primary: true, name: "ID_CIDADE" },
    nome: { type: String, name: "NOME" },
    estado: { type: String, name: "ESTADO" },
    pais: { type: String, name: "PAIS" },
  },
});

export const EmpresaSchema = new EntitySchema<EmpresaEntity>({
  name: "Empresa",
  tableName: "EMPRESA",
  columns: {
    cnpj: { type: String, primary: true, name: "CNPJ" },
    razaoSocial: { type: String, name: "RAZAO_SOCIAL" },
    siteUrl: { type: String, name: "SITE_URL" },
    email: { type: String, name: "EMAIL", nullable: true },
    descricao: { type: String, name: "DESCRICAO", nullable: true },
  },
  relations: {
    cidade: {
      type: "many-to-one",
      target: "Cidade",
      joinColumn: { name: "ID_CIDADE", referencedColumnName: "id" },
    },
    ofertas: {
      type: "one-to-many",
      target: "Oferta",
      inverseSide: "empresa",
    },
  },
});

export const OfertaSchema = new EntitySchema<OfertaEntity>({
  name: "Oferta",
  tableName: "OFERTA",
  columns: {
    id: { type: Number, primary: true, name: "ID_OFERTA" },
    nome: { type: String, name: "NOME" },
    descricao: { type: String, name: "DESCRICAO", nullable: true },
    categoria: { type: String, name: "CATEGORIA", nullable: true },
    tipo: { type: String, name: "TIPO" },
  },
  relations: {
    empresa: {
      type: "many-to-one",
      target: "Empresa",
      joinColumn: { name: "CNPJ", referencedColumnName: "cnpj" },
    },
  },
});
