import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  showMessage=false;
  log : number[]=[];
  
  onToggleDetails(){
    this.showMessage=!this.showMessage;
    this.log.push(this.log.length+1);
  }
}