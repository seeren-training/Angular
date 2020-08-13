import { Task } from "./task.model";
import { Member } from "./member.model";

export class Ticket {

    id: number;

    task: Task;

    memberList: Member[];

    status: string;

    priority: string;

    creation: number;

    lastChange: number;

}
