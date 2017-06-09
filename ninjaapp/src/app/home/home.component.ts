import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../logging.service";
import { DataService} from "../data.service";
declare var firebase:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
})
export class HomeComponent implements OnInit {

  ninjas = []
  constructor(private logger:LoggingService, private dataService: DataService) { }

  logIt()
  {
    this.logger.log();
  }

  ngOnInit() {
    this.fbGetData();
  }

  fbGetData()
  {
    firebase.database().ref('/').on('child_added', (snapshot) => {
    this.ninjas.push(snapshot.val());
    })
  }

}
