import { ISubscriber } from "../interfaces/ISubscriber";

export class Student implements ISubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(tarea: string): void {
    console.log(`[Alumno ${this.name}] Nueva notificación: ${tarea}`);
  }
}
