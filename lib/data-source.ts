import { DataSource } from "typeorm";
import { CidadeSchema, EmpresaSchema, OfertaSchema } from "@/lib/entities";

const globalForDb = globalThis as unknown as {
  dataSource?: Promise<DataSource>;
};

export function getDataSource() {
  if (!globalForDb.dataSource) {
    globalForDb.dataSource = new DataSource({
      type: "oracle",
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
      entities: [CidadeSchema, EmpresaSchema, OfertaSchema],
      synchronize: false, // nunca deixe true: ele alteraria o seu banco
      logging: false,
    })
      .initialize()
      .catch((err) => {
        globalForDb.dataSource = undefined; // permite tentar de novo
        throw err;
      });
  }
  return globalForDb.dataSource;
}
