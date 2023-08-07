import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  add!:any;
  storetodo:any=[];
  added(){
    this.storetodo.push(this.add);
    // console.log(this.storetodo);
    localStorage.setItem('tododata',JSON.stringify(this.storetodo));
    this.add='';
    this.gettodo()
  }

  gettodo(){
    if(localStorage.getItem('tododata'))
    {
      this.storetodo=localStorage.getItem('tododata')
      this.storetodo=JSON.parse(this.storetodo);
      console.log(this.storetodo);
      
    }
    else
    {
      this.storetodo=[];
    }
   
  }

  dlt(id:number){
    this.storetodo.splice(id,1);
    localStorage.setItem('tododata',JSON.stringify(this.storetodo));
  }

}
