//custom pipe, where we gonna use enum

import { Pipe, PipeTransform } from '@angular/core';

import { SEVERITY } from '../constant/constants';

@Pipe({
    name: 'severity'
})
export class SeverityPipe implements PipeTransform {
    private severities = SEVERITY;
    transform(severityNum: number) {
        //we get this statusNum in, which is what we are getting from our data and we are using the enum, we pass that in (this.statuses[statusNum];), and its gives us string and we are returnin that 
       // we're gonna declare this within the module and use it shared.module.ts
        return this.severities[severityNum];
    }
}