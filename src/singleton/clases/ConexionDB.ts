import { IConexionDB } from "../interfaces/IConexionDB";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB;
  public host: string;
  public port: number;
  public user: string;
  private connected: boolean = false;

  private constructor(
    host: string = "localhost",
    port: number = 5432,
    user: string = "Inventario_user"
  ) {
    this.host = host;
    this.port = port;
    this.user = user;
  }

  public static getInstance(): ConexionDB {
    if (!ConexionDB.instance) {
      ConexionDB.instance = new ConexionDB();
    }
    return ConexionDB.instance;
  }

  connect(): void {
    if (this.connected) {
      console.log("DB ya está conectada (Singleton).");
      return;
    }
    this.connected = true;
    console.log(`Conectado a DB -> ${this.user}@${this.host}:${this.port}`);
  }

  disconnect(): void {
    if (!this.connected) {
      console.log("DB ya está desconectada.");
      return;
    }
    this.connected = false;
    console.log("Desconectado de la DB.");
  }

  getStatus(): string {
    return this.connected ? "Conectado" : "Desconectado";
  }
}
