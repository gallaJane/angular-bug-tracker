import { Component, OnInit } from '@angular/core';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';

@Component ({
    moduleId: module.id,
    selector:'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls: [ 'bug-list.component.css']
    
})

export class BugListComponent implements OnInit{ 
    // we are creating here collection of bugs, data collection of bug objects
    // array of type Bugs
    private bugs: Bug[] = [];

    // type is BugService
    constructor(private bugService: BugService) { }

    ngOnInit() {
        this.getAddedBugs();
        this.getUpdatedBugs();
    }

    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                // this is how we deal with arrays in typescript, we just push an object on to it
                this.bugs.push(bug);
            },
           err => {
               console.error("Unable to get added bug - ", err);
           });
    }

    // new method 
    getUpdatedBugs() {
        this.bugService.changedListener()
        .subscribe(updatedBug => {
            // we are trying to get array index for the bug that matches our updated bug we've got based on its ID, property ID value.
            // On the array "bugs" we use map aand it goes throw one by one every element in our array, then returns everything it finds. it returns them all as an array.
            // we dont want everything back. we are gonna put the condition that returns the index of the first occurrence of a value in an array. Look for updatedBug['id'] value
            // check everything until u find updatedBug['id'] match
            const bugIndex = this.bugs.map(index => index.id).indexOf(updatedBug['id']);
            // here we do that replacement. we get that id. index
            this.bugs[bugIndex] = updatedBug;
        },
        err => {
            console.error("Unable to get updated bug - ", err);
        });
    }
}