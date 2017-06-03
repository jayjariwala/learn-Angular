import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ninja :string;
  constructor(private route:ActivatedRoute)
  {
    this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit() {
  }

}
