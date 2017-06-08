import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
})
export class HomeComponent implements OnInit {

  ninjas = [
    {name:"Yoshi", belt:"Black"},
    {name:"Ryu", belt:"Red"},
    {name:"krystal", belt:"Purple"}
  ]
  constructor(private logger:LoggingService) { }

  logIt()
  {
    this.logger.log();
  }

  ngOnInit() {
  }

}
