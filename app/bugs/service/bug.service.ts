import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Bug } from '../model/bug';

@Injectable()
export class BugService {

    private bugsDbRef = this.fire.database.ref('/bugs');
    // creating depencency that we wanna inject in

    constructor(private fire: FirebaseConfigService) { }


    // new method which will have listener in it
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {

            // here we gonna set up listener, use reference to our database service, to use the method on that to set up our end point
            //reference to our database service we have set up in firebase-config.service.ts
            this.bugsDbRef.on('child_added', bug => {
                // method val() extracts the contents of the snapshot,  and creates it into it javascript object, we set up our class Bus,so we can cast it
                //casting really means is taking an Object of one particular type and “turning it into” another Object type
                const newBug = bug.val() as Bug;
                // inserting ID into our Bug, so we could be able to update Bug
                newBug.id = bug.key;
                obs.next(newBug);
            },
                err => {
                    obs.throw(err)
                });
        });
    }

//new method, adding a Firebase Child Changed Listener(its about update)
changedListener(): Observable<any> {
    return Observable.create(obs => {
        this.bugsDbRef.on('child_changed', bug => {
            const updatedBug = bug.val() as Bug;
            updatedBug.id = bug.key;
            obs.next(updatedBug);
        },
    err => {
        obs.throw(err);
        });
    });
}





//adding Bugs into our Database
// we wanna create new method
    addBug(bug: Bug) {
        const newBugRef = this.bugsDbRef.push();
        //literally what data we wanna set at that location
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Nudzejma',
            createdDate: Date.now()
        })
        .catch(err => console.error("Unable to add bug to Firebase -- ", err));
             
        
    }


    updateBug (bug: Bug) {
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom Tickele";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    }
}