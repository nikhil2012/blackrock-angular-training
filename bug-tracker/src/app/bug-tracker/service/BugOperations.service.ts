import { IBug } from '../models/IBug';
import { BugStorageService} from './bug.storage.service';

import { Injectable } from '@angular/core';

@Injectable()
export class BugOperations {
    currentBugId : number = 0;

    constructor(public bugStorage:BugStorageService) {
        this.currentBugId = this.bugStorage.count();
    }

    createNew(bugName:string) : IBug {
        let newBug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.addOrUpdateBug(newBug);
        return newBug;
    }

    toggle(bug :IBug) : IBug {
        this.bugStorage.addOrUpdateBug(bug);
        return {...bug, isClosed : !bug.isClosed};
    }

    removeBug(bugId : number) {
        console.log("in service:remove bug:",bugId);
        this.bugStorage.removeBug(bugId);
    }

    getAll() : IBug[] {
        return this.bugStorage.getAllBugs();
    }

    getbug(bugId: number) : IBug {
        return this.bugStorage.getBug(bugId);
    }
}