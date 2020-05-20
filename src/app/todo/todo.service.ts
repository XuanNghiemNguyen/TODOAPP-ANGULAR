import { Injectable } from '@angular/core';

let ORIGINAL_TASK_LIST = [
  { title: 'Do the laudry', isDone: true },
  { title: 'Do homework', isDone: false },
];

let TASKLIST = ORIGINAL_TASK_LIST;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  get() {
    return new Promise((resolve) => resolve(TASKLIST));
  }
  add(data) {
    return new Promise((resolve) => {
      TASKLIST = ORIGINAL_TASK_LIST;
      TASKLIST.push(data);
      ORIGINAL_TASK_LIST = TASKLIST;
      resolve(data);
    });
  }
  delete(selected) {
    return new Promise((resolve) => {
      TASKLIST = ORIGINAL_TASK_LIST;
      const index = TASKLIST.findIndex((todo) => todo === selected);
      TASKLIST.splice(index, 1);
      ORIGINAL_TASK_LIST = TASKLIST;
      resolve(true);
    });
  }
  done(selected) {
    return new Promise((resolve) => {
      TASKLIST = ORIGINAL_TASK_LIST;
      const index = TASKLIST.findIndex((todo) => todo === selected);
      TASKLIST[index].isDone = !TASKLIST[index].isDone;
      ORIGINAL_TASK_LIST = TASKLIST;
      resolve(true);
    });
  }
  taskFilter(input) {
    return new Promise((resolve) => {
      const patt = new RegExp(input, 'i');
      TASKLIST = ORIGINAL_TASK_LIST.filter((item) => item.title.match(patt));
      resolve(true);
    });
  }
}
