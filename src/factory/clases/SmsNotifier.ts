import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\d+$/.test(to)) {
      throw new Error("Formato de teléfono inválido");
    }
    console.log(`[SMS] A: ${to} – ${message}`);
  }
}
