// this is gonna check the value of the form control and make sure it doesnt match specific string. We can apply it to the bug title and we could say, 
//use this validator and it would check whateva data is in, and pop-in. If it pops-in, its valid and if it doesnt , its not.
//ValidatorFunction is essentially what validator is, function that gives u result, valid or invalid
//AbstractControl is base class of Form Controls and Form Groups
"use strict";
//RegExp regular expression, way of defining patern of a string, we gonna use it to test our value of a field, our formcontrol
// return type is { [key: string]: any }
function forbiddenStringValidator(strReg) {
    return function (control) {
        //here we are saving the value of form group,formcontrol that we are getting
        var str = control.value;
        //what test(str) method is comparing (does the parameter that we pass in -str-match with the pattern -strReg- of the regular expression-returns a boolean)
        var invalid = strReg.test(str);
        // what we return is Javascript Object and which object will returned is based of weather invalid is true or false. Easy way to do this is to use elvis operator (?)
        //it conditional check, basically the same if else
        //check this, if its true, what we get here
        //here if its true it means that its invalid..invalid is true..'forbiddentString is' key: string----second part( : null ) is what do we get back if it's false
        return invalid ? { 'forbiddenString': { str: str } } : null;
    };
}
exports.forbiddenStringValidator = forbiddenStringValidator;
//# sourceMappingURL=forbidden-string.validator.js.map