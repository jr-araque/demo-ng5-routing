import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private routeQuery: Object;
  constructor(private route: ActivatedRoute) {

  }

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
    console.log( 'routeConfig ', this.route.routeConfig );
    console.log( 'url ', this.route.url );
    console.log( 'toString', this.route.toString() );
  }

}
