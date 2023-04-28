<!-- Installing ngx indexed DB by using the following command -->
ng add ngx-indexed-db

<!-- import NgxIndexedDBModule  -->
import { NgxIndexedDBModule } from 'ngx-indexed-db';

<!-- Initilizing it in the constructor -->
constructor(private dbService: NgxIndexedDBService){ }

<!-- Dexie -->
<!-- Install dexie -->
npm install dexie

<!-- Create a new file db.ts -->
// db.ts
import Dexie, { Table } from 'dexie';

export interface TodoList {
  id?: number;
  title: string;
}
export interface TodoItem {
  id?: number;
  todoListId: number;
  title: string;
  done?: boolean;
}

export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      todoLists: '++id',
      todoItems: '++id, todoListId',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const todoListId = await db.todoLists.add({
      title: 'To Do Today',
    });
    await db.todoItems.bulkAdd([
      {
        todoListId,
        title: 'Feed the birds',
      },
      {
        todoListId,
        title: 'Watch a movie',
      },
      {
        todoListId,
        title: 'Have some sleep',
      },
    ]);
  }
}

export const db = new AppDB();

