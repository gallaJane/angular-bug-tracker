//custom pipe, where we gonna use enum

import { Pipe, PipeTransform } from '@angular/core';

import { STATUS } from '../constant/constants';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    private statuses = STATUS;
    transform(statusNum: number) {
        //we get this statusNum in, which is what we are getting from our data and we are using the enum, we pass that in (this.statuses[statusNum];), and its gives us string and we are returnin that 
       // we're gonna declare this within the module and use it shared.module.ts
        return this.statuses[statusNum];
    }
}