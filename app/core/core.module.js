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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// this core  module is providing and configuring its own services, some providers
var core_1 = require("@angular/core");
//Services
var firebase_config_service_1 = require("./service/firebase-config.service");
var CoreModule = CoreModule_1 = (function () {
    //when is trying to initialize,its checking another instance doesnt already exist by asking for one to be injected. If one is successfully injected 
    //that means our parameters are fullfilled, otherwise we throw the error
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error("CoreModule exists already. Only import in the root/app module.");
        }
    }
    // method with return ModuleWithProviders, this is allowing that to happen
    //this is what allows us to create singleton instances
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [firebase_config_service_1.FirebaseConfigService]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        exports: []
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=core.module.js.map