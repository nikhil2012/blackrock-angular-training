import { IBug } from '../models/IBug';

export class BugStorageService {

    private storage : Storage = window.localStorage;

    addOrUpdateBug(bug : IBug) : void {
        console.log('Adding bug ' , bug.id);
        this.storage.setItem((bug.id).toString(),JSON.stringify(bug));
    }

    removeBug(bugId : number) : void {
        console.log('Removing bug ' , bugId);
       this.storage.removeItem(bugId.toString());
    }

    getBug(bugId : number) : IBug {
        console.log('Retrieving bug ' , bugId);
        let bugObject:IBug = JSON.parse(this.storage.getItem(bugId.toString()));
        return bugObject;
    }

    getAllBugs() : IBug[] {
        let bugs : IBug[] = [];
        let totalBugs = this.storage.length;
        for (var index = 0; index < totalBugs; index++) {
            let id : number = Number.parseInt(this.storage.key(index));
            bugs.push(this.getBug(id));
        }
        return bugs;
    }

    count() : number {
        return this.storage.length;
    }
}