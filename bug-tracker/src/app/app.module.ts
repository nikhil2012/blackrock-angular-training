import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component'
import { BugOperations } from './bug-tracker/service/BugOperations.service';
import { BugStorageService} from './bug-tracker/service/bug.storage.service';

import { TrimTextPipe } from './bug-tracker/pipe/trimText.pipe';
import { SortPipe } from './bug-tracker/pipe/sort.pipe';
import { CountClosedPipe } from './bug-tracker/pipe/count.closed.pipe';

@NgModule({
  declarations: [
    AppComponent, BugTrackerComponent,
    TrimTextPipe, SortPipe, CountClosedPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    BugOperations, BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
