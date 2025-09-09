import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISubscriber";

export class Professor implements IPublisher {
  private students: ISubscriber[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(student: ISubscriber): void {
    const isExist = this.students.includes(student);
    if (isExist) {
      return;
    }
    this.students.push(student);
  }

  unsubscribe(student: ISubscriber): void {
    const studentIndex = this.students.indexOf(student);
    if (studentIndex === -1) {
      return;
    }
    this.students.splice(studentIndex, 1);
  }

  publish(tarea: string): void {
    console.log(`[Profesor] Publicó: ${tarea}`);
    for (const student of this.students) {
      student.update(tarea);
    }
  }
}
