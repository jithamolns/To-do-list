import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  title = 'My To-Do List';
  todos!: Todo[];
  inputTodo:string = '';
  err:string = '';

  constructor(){ }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First task',
        completed: false
      },
      {
        content: 'Second Task',
        completed: true
      }
    ]
  }

  toggleDone(id: number){
    this.todos.map((v,i)=>{
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTask(id: number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }

  addTask(){
    if(this.inputTodo!=''){
      this.todos.push({
        content: this.inputTodo,
        completed: false      
      })
      this.err = '';
    }else{
      this.err = 'Please add a task';
    }
    
    this.inputTodo = "";
  }

}
