import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {
  comments = '';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter<string>();
  constructor() { }

  submit() {
    this.onSubmit.emit(this.comments);
  }

}
