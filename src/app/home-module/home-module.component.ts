import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css']
})
export class HomeModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeOfRoutesHome(evt: any) {
    var elmnt: any = document.getElementById("antlernew");
    elmnt.scrollIntoView();

  }

}
