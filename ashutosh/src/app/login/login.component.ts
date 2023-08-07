import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  todoList:any=[]
 

  

  addTask(item:any){
    this.todoList.push({task:item})
    // console.log(item)
  }

  deleteInfo(id:number){
    this.todoList.splice(id,1)
    localStorage.setItem('data',JSON.stringify(this.todoList))
  }
  


  username!:string
  password!:string

  constructor(private route:Router){}

  loginCredientals:any={
    username:'xyz',
    password:'123'
  }
//  login:any={
//   username:'',
//   password:''
//  }
 

  loginUser(){
    if(this.username == this.loginCredientals.username){
      if(this.password == this.loginCredientals.password){
        console.log(this.username);
        
        alert('login successfully')
        this.route.navigate(['/dashboard'])
        
      }
      else{
        alert('login fail!')
      }
    }
    
  }


  


}
