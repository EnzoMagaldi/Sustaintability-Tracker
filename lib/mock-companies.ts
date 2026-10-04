export const MOCK = [
  {
    cnpj: "11.111.111/0001-11",
    razaoSocial: "Verde Tech Ltda",
    siteUrl: "verdetech.com.br",
    email: "contato@verdetech.com.br",
    descricao: "Software para monitorar a pegada de carbono de empresas.",
    cidade: "Rio das Ostras",
    estado: "RJ",
    ramos: ["Tecnologia"],
  },
  {
    cnpj: "22.222.222/0001-22",
    razaoSocial: "Campo Vivo Orgânicos",
    siteUrl: "campovivo.com.br",
    email: "ola@campovivo.com.br",
    descricao: "Produção de hortaliças orgânicas, sem agrotóxicos.",
    cidade: "Nova Friburgo",
    estado: "RJ",
    ramos: ["Agricultura"],
  },
  {
    cnpj: "33.333.333/0001-33",
    razaoSocial: "Sol e Vento Energia",
    siteUrl: "solevento.com.br",
    email: null,
    descricao: "Instalação de painéis solares para residências e empresas.",
    cidade: "Campinas",
    estado: "SP",
    ramos: ["Energia"],
  },
  {
    cnpj: "44.444.444/0001-44",
    razaoSocial: "BioCircuito Eletrônicos",
    siteUrl: "biocircuito.com.br",
    email: "contato@biocircuito.com.br",
    descricao:
      "Reciclagem de lixo eletrônico e venda de peças recondicionadas.",
    cidade: "Curitiba",
    estado: "PR",
    ramos: ["Tecnologia"],
  },
  {
    cnpj: "55.555.555/0001-55",
    razaoSocial: "AgroSolar Cooperativa",
    siteUrl: "agrosolar.com.br",
    email: "coop@agrosolar.com.br",
    descricao: "Irrigação movida a energia solar para pequenos produtores.",
    cidade: "Petrolina",
    estado: "PE",
    ramos: ["Agricultura", "Energia"],
  },
  {
    cnpj: "66.666.666/0001-66",
    razaoSocial: "Eólica Litoral",
    siteUrl: "eolicalitoral.com.br",
    email: null,
    descricao:
      "Geração de energia eólica e consultoria em eficiência energética.",
    cidade: "Fortaleza",
    estado: "CE",
    ramos: ["Energia"],
  },
  {
    cnpj: "77.777.777/0001-77",
    razaoSocial: "Raiz Forte Agroflorestal",
    siteUrl: "raizforte.com.br",
    email: "contato@raizforte.com.br",
    descricao: "Sistemas agroflorestais e venda de mudas nativas.",
    cidade: "Ilhéus",
    estado: "BA",
    ramos: ["Agricultura"],
  },
  {
    cnpj: "88.888.888/0001-88",
    razaoSocial: "Nuvem Limpa Cloud",
    siteUrl: "nuvemlimpa.com.br",
    email: "oi@nuvemlimpa.com.br",
    descricao: "Hospedagem de sites em data center movido a energia renovável.",
    cidade: "Florianópolis",
    estado: "SC",
    ramos: ["Tecnologia", "Energia"],
  },
];

export async function getCompanies(ramo?: string) {
  const filtradas = ramo
    ? MOCK.filter((c) =>
        c.ramos.some((r) => r.toLowerCase() === ramo.toLowerCase()),
      )
    : MOCK;

  return filtradas
    .map((c) => ({ ...c, ramos: c.ramos.join(", ") }))
    .sort((a, b) => a.razaoSocial.localeCompare(b.razaoSocial, "pt-BR"));
}
