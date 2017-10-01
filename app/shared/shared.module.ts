import { NgModule } from '@angular/core';
//
import { CommonModule } from '@angular/common';

import { StatusPipe } from './pipe/status.pipe';
import { SeverityPipe } from './pipe/severity.pipe';

@NgModule({
    imports: [  CommonModule ],
    // even if we ain't gonna use it in shared module, we still have to declare it(egzz Pipes, Module doesnt apply declarations!  )
    declarations: [ 
        StatusPipe,
        SeverityPipe
    ],
    // we export anything
    exports: [ 
        CommonModule,
        StatusPipe ,
        SeverityPipe
    ]
    // no providers because that can create issues..core module is better for it
})
export class SharedModule { }