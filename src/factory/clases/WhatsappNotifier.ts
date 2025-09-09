import { INotifier } from "../interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\d+$/.test(to)) {
      throw new Error("Formato de teléfono inválido");
    }
    console.log(`[WhatsApp] A: ${to} – ${message}`);
  }
}
