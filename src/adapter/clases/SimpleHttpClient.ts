import { IHttpClient } from "../interfaces/IHttpClient";

export class SimpleHttpClient {
  private adapter: IHttpClient;

  constructor(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  setAdapter(adapter: IHttpClient): void {
    this.adapter = adapter;
    console.log("Adapter cambiado exitosamente");
  }

  async get<T>(url: string): Promise<T> {
    return this.adapter.get<T>(url);
  }
}
