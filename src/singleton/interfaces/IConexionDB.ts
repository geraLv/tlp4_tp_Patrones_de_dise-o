export interface IConexionDB {
  host: string;
  port: number;
  user: string;
  connect(): void;
  disconnect(): void;
  getStatus(): string;
}
