import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private routeQuery: Object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (data) => {
        console.log('paramMap data: ', data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed');
      });
    this.route.queryParamMap.subscribe( (data) => {
        console.log('queryParamMap data: ', data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed');
      });
    console.log( this.route );
    console.log( 'params ', this.route.params );
    console.log( 'paramMap ', this.route.paramMap );
    console.log( 'data ', this.route.data );
    console.log( 'queryParams ', this.route.queryParams );
    console.log( 'queryParamMap ', this.route.queryParamMap );
    console.log( 'pathFromRoot ', this.route.pathFromRoot );
    console.log( 'routeConfig ', this.route.routeConfig.path );
    console.log( 'url ', this.route.url );
    console.log( 'toString', this.route.toString() );
  }

}
