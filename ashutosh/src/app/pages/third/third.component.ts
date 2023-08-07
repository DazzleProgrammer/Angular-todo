import { Component } from '@angular/core';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent  {

  todoList:any=[]
 

  

  addTask(item:any){
    this.todoList.push({task:item})
    // console.log(item)
  }

  deleteInfo(id:number){
    this.todoList.splice(id,1)
    localStorage.setItem('data',JSON.stringify(this.todoList))
  }
  

  

}
