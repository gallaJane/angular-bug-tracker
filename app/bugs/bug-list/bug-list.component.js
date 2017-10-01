"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var bug_service_1 = require("../service/bug.service");
var BugListComponent = (function () {
    // type is BugService
    function BugListComponent(bugService) {
        this.bugService = bugService;
        // we are creating here collection of bugs, data collection of bug objects
        // array of type Bugs
        this.bugs = [];
    }
    BugListComponent.prototype.ngOnInit = function () {
        this.getAddedBugs();
        this.getUpdatedBugs();
    };
    BugListComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bugService.getAddedBugs()
            .subscribe(function (bug) {
            // this is how we deal with arrays in typescript, we just push an object on to it
            _this.bugs.push(bug);
        }, function (err) {
            console.error("Unable to get added bug - ", err);
        });
    };
    // new method 
    BugListComponent.prototype.getUpdatedBugs = function () {
        var _this = this;
        this.bugService.changedListener()
            .subscribe(function (updatedBug) {
            // we are trying to get array index for the bug that matches our updated bug we've got based on its ID, property ID value.
            // On the array "bugs" we use map aand it goes throw one by one every element in our array, then returns everything it finds. it returns them all as an array.
            // we dont want everything back. we are gonna put the condition that returns the index of the first occurrence of a value in an array. Look for updatedBug['id'] value
            // check everything until u find updatedBug['id'] match
            var bugIndex = _this.bugs.map(function (index) { return index.id; }).indexOf(updatedBug['id']);
            // here we do that replacement. we get that id. index
            _this.bugs[bugIndex] = updatedBug;
        }, function (err) {
            console.error("Unable to get updated bug - ", err);
        });
    };
    return BugListComponent;
}());
BugListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-list',
        templateUrl: 'bug-list.component.html',
        styleUrls: ['bug-list.component.css']
    }),
    __metadata("design:paramtypes", [bug_service_1.BugService])
], BugListComponent);
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map