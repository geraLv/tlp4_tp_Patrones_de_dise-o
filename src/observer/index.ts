import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";

export function runObserver() {
  console.log("=== OBSERVER: Profesor → Alumnos ===");

  const profesor = new Professor("Dr. García");
  const ana = new Student("Ana");
  const luis = new Student("Luis");
  const carlos = new Student("Carlos");

  profesor.subscribe(ana);
  profesor.subscribe(luis);
  profesor.subscribe(carlos);

  profesor.publish("TP1: Algoritmos – entrega viernes 18:00.");

  profesor.unsubscribe(carlos);

  profesor.publish("TP2: Patrones – entrega martes 18:00.");

  console.log("");
}
