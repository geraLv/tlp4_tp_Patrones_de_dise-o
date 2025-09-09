import { NotifierFactory } from "./clases/NotifierFactory";
import { Channel } from "./interfaces/channel";

export function runFactory() {
  console.log("=== FACTORY: Crear notificaciones (Email/SMS/WhatsApp) ===");

  try {
    const emailNotifier = NotifierFactory.create("email" as Channel);
    emailNotifier.send("ana@mail.com", "Recordatorio de clase a las 10:00.");

    const smsNotifier = NotifierFactory.create("sms" as Channel);
    smsNotifier.send("+5493700000000", "Tu nota de TP1 ya está disponible.");

    const whatsappNotifier = NotifierFactory.create("whatsapp" as Channel);
    whatsappNotifier.send(
      "+5493700000000",
      "Se reprogramó la clase para mañana 9:00."
    );
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }

  console.log("");
}
