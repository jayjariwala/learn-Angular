import { Component, OnInit } from '@angular/core';
import { LoggingService } from "../logging.service";
import { DataService} from "../data.service";

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
    this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    );
  }

}
