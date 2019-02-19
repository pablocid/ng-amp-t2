import { Component, OnInit } from '@angular/core';
import { select } from 'd3';
@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.scss']
})
export class D3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event: any) {
    select(event.target)
      .append('circle')
      .attr('cx', event.x)
      .attr('cy', event.y)
      .attr('r', 3)
      .attr('fill', 'red');
  }
}
