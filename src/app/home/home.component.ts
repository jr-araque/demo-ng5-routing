import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valueForRandom = 0;
  private routeQuery: Object;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
