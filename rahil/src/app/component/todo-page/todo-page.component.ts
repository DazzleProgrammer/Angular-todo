import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({
        name: this.newTask, completed: false,
        done: false
      });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  clr(){
    this.newTask=''
  }
}

interface Task {
  name: string;
  completed: boolean;
  }


interface Task {
  name: string;
  done: boolean;

}
