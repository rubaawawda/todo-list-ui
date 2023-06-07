export namespace Todo {
  export enum Status {
    PENDING = 'pending',
    DONE = 'done'
  }

  export interface IItem {
    id: string;
    description: string;
    status: Status;
  }
}