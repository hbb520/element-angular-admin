import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './details.html',
  animations: [

  ]
})
export class Details implements OnInit {
  constructor( private route: ActivatedRoute) {

    console.log(route);

  }

  ngOnInit() {
    this.params = this.route.params;
    console.log(this.params.value.id);
  }

  params: any;
  text:string
}
