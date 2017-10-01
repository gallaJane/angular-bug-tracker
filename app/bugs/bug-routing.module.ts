import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent } from './bug-list/bug-list.component';

//decorator
@NgModule ({
    imports: [ 
        RouterModule.forChild([
            //this is for redirect.. row under only
            { path: '', redirectTo: 'bugs', pathMatch: 'prefix'},
            {path: 'bugs', component: BugListComponent },
            //this one is for wildcard, and always is at the bottom
            { path: '**', redirectTo: 'bugs'}
        ])
    ],
    exports: [ RouterModule ]
})
export class BugRoutingModule { }