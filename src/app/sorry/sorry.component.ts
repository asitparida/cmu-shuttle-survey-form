import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorry',
  templateUrl: './sorry.component.html',
  styleUrls: ['./sorry.component.scss']
})
export class SorryComponent {
  comments = '';
  problem = null;
  problems = [
    { key: 'DRIVER', label: 'Driver', icon: 'assets/driver.png'},
    { key: 'ROUTE', label: 'Route', icon: 'assets/route.png'},
    { key: 'BUS_CONDITION', label: 'Bus Condition', icon: 'assets/bus_icon.png'},
    { key: 'LATE_BUS', label: 'Late Bus', icon: 'assets/late_bus.png'}
  ];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCommentsSubmit = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProblemSubmit = new EventEmitter<string>();
  constructor() { }

  setProblem(prob) {
    if (this.problem !== prob) {
      this.problem = prob;
    } else {
      this.problem = null;
    }
    this.onProblemSubmit.emit(this.problem);
  }

  submit() {
    this.onCommentsSubmit.emit(this.comments);
  }
}
