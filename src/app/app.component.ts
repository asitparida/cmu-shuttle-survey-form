import { Component, OnInit } from '@angular/core';
import { Guid } from './helpers';
declare var mixpanel: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'cmu-survey';
    showLoader = true;
    showStartFeedback = true;
    showThankYou = false;
    showSorry = false;
    showDone = false;
    uid = Guid();
    problem = null;
    ngOnInit () {
        const interval = setInterval(() => {
            if (mixpanel) {
                this.showLoader = false;
                clearInterval(interval);
                mixpanel.register({
                    firstTime: true
                });
                mixpanel.track('FEEDBACK_SESSION_CREATED', {
                    uid: this.uid,
                });
            }
        }, 100);
    }
    onStarRatingSubmit(rating) {
        mixpanel.track('RATING_RECEIVED', {
            uid: this.uid,
            value: rating
        });
        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
            this.showStartFeedback = false;
            if (rating >= 4) {
                this.showThankYou = true;
            } else {
                this.showSorry = true;
            }
        }, 1000);
    }
    onThanYouComments($event) {
        mixpanel.track('THANKYOU_COMMENTS_RECEIVED', {
            uid: this.uid,
            value: $event
        });
        this.showDone = true;
    }
    onSorryComments($event) {
        mixpanel.track('SORRY_COMMENTS_RECEIVED', {
            uid: this.uid,
            value: $event
        });
        if (this.problem) {
            mixpanel.track('SORRY_PROBLEM_RECEIVED', {
                uid: this.uid,
                value: this.problem
            });
        }
        this.showDone = true;
    }
    onProblemSubmit($event) {
        this.problem = $event;
    }
}
