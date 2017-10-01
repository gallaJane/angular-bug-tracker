"use strict";
var Bug = (function () {
    // constructor easy way to define our class, our model, and also allows this type of object to be created 
    function Bug(id, title, status, severity, description, createdBy, 
        // not data, but number, because of epoch time, unix time( miliseconds value)
        createdDate, 
        // ? optional
        updatedBy, updatedDate) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.severity = severity;
        this.description = description;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.updatedBy = updatedBy;
        this.updatedDate = updatedDate;
    }
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=bug.js.map