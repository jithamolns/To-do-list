import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List Application';
  err:string = '';
  list:any[] = [];

  addTask(item:string){
    if(item!=''){
      this.list.push({id:this.list.length,name:item});
      this.err = '';
    }else{
      this.err = 'Please add a task';
    }
  }
  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}
