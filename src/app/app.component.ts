import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'antler';
  changeOfRoutes(evt:any){
    var elmnt: any = document.getElementById("antlernew");
  elmnt.scrollIntoView();

  }
}
