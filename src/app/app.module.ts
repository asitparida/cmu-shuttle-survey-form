import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { StarFeedbackComponent } from './star-feedback/star-feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SorryComponent } from './sorry/sorry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    StarFeedbackComponent,
    ThankYouComponent,
    SorryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
