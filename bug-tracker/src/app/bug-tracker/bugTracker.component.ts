import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './service/BugOperations.service';

@Component({
    selector : 'bug-tracker',
    templateUrl : 'bugTracker.component.html',
    styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent {

    newBugName : string = '';
    bugs : Array<IBug> = [];
 //   bugOperations : BugOperations = new BugOperations();
    
    constructor(public bugOperations : BugOperations) {
        this.bugs = this.bugOperations.getAll();
    }

    onCreateClick() {
        console.log(this.newBugName);
        /* let newBug : IBug = {
            name : this.newBugName,
            isClosed : false
        } */
        let newBug = this.bugOperations.createNew(this.newBugName);
        this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug];
    }

    onBugClick(bugToToggle : IBug) {
        let toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
        //2 this.bugOperations.toggle(bug);
        //1 bug.isClosed = !bug.isClosed;
    }

    onRemoveClosedClick() {
       /*  for(let index = 0; index < this.bugs.length; index++) {
            if(this.bugs[index].isClosed) {
                this.bugs.splice(index, 1);
            }
        } */
        this.bugs = this.bugs.filter(bug => !bug.isClosed);

        let closedBugs = this.bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(element => {
            this.bugOperations.removeBug(element.id);
        });
    }

}
