import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <!-- Current Route -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" *ngFor="let section of currentRoute">{{ section }}</li>
        <li class="breadcrumb-item"><</li>
      </ol>
    </nav>
  `,
})
export class BatmanComponent implements OnInit {

  currentRoute: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.url.subscribe((myCurrentRoute) => {
      this.currentRoute = myCurrentRoute;
    });
  }

}
