import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!to.includes("@")) {
      throw new Error("Formato de email inválido");
    }
    console.log(`[Email] A: ${to} – ${message}`);
  }
}
