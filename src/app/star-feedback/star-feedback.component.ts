import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-feedback',
  templateUrl: './star-feedback.component.html',
  styleUrls: [
    './star-feedback.component.scss',
    '../app.component.scss'
  ]
})
export class StarFeedbackComponent implements OnInit {
  ratings = Array(5).fill({
    rated: false
  });
  rating = 0;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  markRating(rate) {
    if (this.rating !== rate) {
      this.rating = rate;
    } else {
      this.rating = 0;
    }
  }

  rate() {
    this.onSubmit.emit(this.rating);
  }

}
