import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ninjas = [
    {name:"Yoshi", belt:"Black"},
    {name:"Ryu", belt:"Red"},
    {name:"krystal", belt:"Purple"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
