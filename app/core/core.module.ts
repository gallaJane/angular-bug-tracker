// this core  module is providing and configuring its own services, some providers
import {NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
//Services
import { FirebaseConfigService } from './service/firebase-config.service';

@NgModule ({
    imports: [ ],
    declarations: [ ],
    exports: []
})

export class CoreModule { 
    //when is trying to initialize,its checking another instance doesnt already exist by asking for one to be injected. If one is successfully injected 
    //that means our parameters are fullfilled, otherwise we throw the error
    constructor(@Optional() @SkipSelf() parentModule: CoreModule ) { 
        if (parentModule) {
            throw new Error( "CoreModule exists already. Only import in the root/app module.");
        }
    }
    // method with return ModuleWithProviders, this is allowing that to happen
    //this is what allows us to create singleton instances
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [ FirebaseConfigService ]
        };
    }
}