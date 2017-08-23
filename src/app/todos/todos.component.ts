import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;

  constructor() {
  }

  ngOnInit() {
    this.todos = [
      {
        text: 'Pickup kids at school'
      },
      {
        text: 'Meeting with boss'
      },
      {
        text: 'Dinner with wifey'
      }
    ]
  }

  addTodo() {
    this.todos.push({
      text: this.text
    })
  }
  deleteTodo(todoText) {
    this.todos.map(text => {
      if(this.todos.text === todoText){
        this.todos.splice(text, 1);
      }
    });
  }
}
