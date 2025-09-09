import { ConexionDB } from "./clases/ConexionDB";

export function runSingleton() {
  console.log("=== SINGLETON: ConexionDB de Inventario ===");

  const conexion1 = ConexionDB.getInstance();
  const conexion2 = ConexionDB.getInstance();

  conexion1.connect();

  conexion2.connect();

  conexion1.disconnect();

  conexion2.disconnect();

  console.log("");
}
