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
var Observable_1 = require("rxjs/Observable");
var firebase_config_service_1 = require("../../core/service/firebase-config.service");
var BugService = (function () {
    // creating depencency that we wanna inject in
    function BugService(fire) {
        this.fire = fire;
        this.bugsDbRef = this.fire.database.ref('/bugs');
    }
    // new method which will have listener in it
    BugService.prototype.getAddedBugs = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            // here we gonna set up listener, use reference to our database service, to use the method on that to set up our end point
            //reference to our database service we have set up in firebase-config.service.ts
            _this.bugsDbRef.on('child_added', function (bug) {
                // method val() extracts the contents of the snapshot,  and creates it into it javascript object, we set up our class Bus,so we can cast it
                //casting really means is taking an Object of one particular type and “turning it into” another Object type
                var newBug = bug.val();
                // inserting ID into our Bug, so we could be able to update Bug
                newBug.id = bug.key;
                obs.next(newBug);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    //new method, adding a Firebase Child Changed Listener(its about update)
    BugService.prototype.changedListener = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.bugsDbRef.on('child_changed', function (bug) {
                var updatedBug = bug.val();
                updatedBug.id = bug.key;
                obs.next(updatedBug);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    //adding Bugs into our Database
    // we wanna create new method
    BugService.prototype.addBug = function (bug) {
        var newBugRef = this.bugsDbRef.push();
        //literally what data we wanna set at that location
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Nudzejma',
            createdDate: Date.now()
        })
            .catch(function (err) { return console.error("Unable to add bug to Firebase -- ", err); });
    };
    BugService.prototype.updateBug = function (bug) {
        var currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom Tickele";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    };
    return BugService;
}());
BugService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [firebase_config_service_1.FirebaseConfigService])
], BugService);
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map