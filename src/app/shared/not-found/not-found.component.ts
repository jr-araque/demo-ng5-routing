import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  url: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.url = url;
    });
  }

}
