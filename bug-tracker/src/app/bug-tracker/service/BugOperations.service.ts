import { IBug } from '../models/IBug';
import { BugStorageService} from './bug.storage.service';

import { Injectable } from '@angular/core';

@Injectable()
export class BugOperations {
    currentBugId : number = 0;

    constructor(public bugStorage:BugStorageService) {}

    createNew(bugName:string) : IBug {
        let newBug = {
            id : ++this.currentBugId,
            name : bugName,
            isClosed : false
        }
        this.bugStorage.addOrUpdateBug(newBug);
        return newBug;
    }

    toggle(bug :IBug) : IBug {
        this.bugStorage.addOrUpdateBug(bug);
        return {...bug, isClosed : !bug.isClosed};
    }

    removeBug(bug) : IBug {
        this.bugStorage.removeBug(bug);
        return bug;
    }

    getAll() : IBug[] {
        return this.bugStorage.getAllBugs();
    }

    getbug(bugId: number) : IBug {
        return this.bugStorage.getBug(bugId);
    }
}