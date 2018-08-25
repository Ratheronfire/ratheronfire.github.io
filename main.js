(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.main-pane {\r\n  float: left;\r\n}\r\n.tab-group {\r\n  float: left;\r\n  margin-left: 15px;\r\n}\r\n.debug-pane {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Clicker Game</h1>\n\n<app-clicker-main class=\"main-pane\"></app-clicker-main>\n\n<mat-tab-group class=\"tab-group\" dynamicHeight>\n  <mat-tab label=\"Explore\">\n    <app-map></app-map>\n  </mat-tab>\n  <mat-tab label=\"Workers\">\n    <app-workers></app-workers>\n  </mat-tab>\n  <mat-tab label=\"Store\">\n    <app-store></app-store>\n  </mat-tab>\n  <mat-tab label=\"Upgrades\">\n    <app-upgrades></app-upgrades>\n  </mat-tab>\n  <mat-tab label=\"Settings\">\n    <app-settings></app-settings>\n  </mat-tab>\n</mat-tab-group>\n\n<mat-card class=\"debug-pane\" *ngIf=\"debugMode\">\n  <h1>Admin Dashboard</h1>\n  <app-admin-debug></app-admin-debug>\n  <app-messages></app-messages>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'clicker-game';
        this.debugMode = true;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-import/material-import.module */ "./src/app/material-import/material-import.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clicker-main/clicker-main.component */ "./src/app/components/clicker-main/clicker-main.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/workers/workers.component */ "./src/app/components/workers/workers.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upgrades/upgrades.component */ "./src/app/components/upgrades/upgrades.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin-debug/admin-debug.component */ "./src/app/components/admin-debug/admin-debug.component.ts");
/* harmony import */ var _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/resource-dialog/resource-dialog.component */ "./src/app/components/resource-dialog/resource-dialog.component.ts");
/* harmony import */ var _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/upgrade-dialog/upgrade-dialog.component */ "./src/app/components/upgrade-dialog/upgrade-dialog.component.ts");
/* harmony import */ var _directives_touch_touch_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/touch/touch.directive */ "./src/app/directives/touch/touch.directive.ts");
/* harmony import */ var _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/crop/crop.directive */ "./src/app/directives/crop/crop.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_7__["ClickerMainComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_9__["WorkersComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"],
                _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_11__["UpgradesComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_13__["SettingsComponent"],
                _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_14__["AdminDebugComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
                _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ResourceDialogComponent"],
                _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_16__["UpgradeDialogComponent"],
                _directives_touch_touch_directive__WEBPACK_IMPORTED_MODULE_17__["TouchDirective"],
                _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_18__["CropDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_4__["MaterialImportModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
            ],
            entryComponents: [
                _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ResourceDialogComponent"],
                _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_16__["UpgradeDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-debug/admin-debug.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-debug/admin-debug.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-debug/admin-debug.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-debug/admin-debug.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Debug</h2>\n\n<mat-checkbox class=\"filterAccessible\" checked=\"true\" [(ngModel)]=\"adminService.filterAccessible\">Hide Inaccessible Upgrades</mat-checkbox>\n<br />\n<mat-checkbox class=\"filterAccessible\" checked=\"false\" [(ngModel)]=\"adminService.editMode\">Edit Mode</mat-checkbox>\n<!-- <mat-checkbox class=\"filterAccessible\" checked=\"false\" [(ngModel)]=\"adminService.clampMap\">Clamp Map</mat-checkbox> -->\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<mat-select [(ngModel)]=\"selectedResource\">\n  <mat-option *ngFor=\"let resource of resourcesService.resources\" [value]=\"resource\">\n    {{resource.name | titlecase}}\n  </mat-option>\n</mat-select>\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<div *ngIf=\"selectedResource !== undefined\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput (submit)=\"addResourceAmount()\" [(ngModel)]=\"amount\">\n  </mat-form-field>\n  <button mat-raised-button (click)=\"addResourceAmount()\">Add to {{selectedResource.name | titlecase}}</button>\n  <button mat-raised-button color=\"accent\" (click)=\"stringifyResource(selectedResource)\">Export {{selectedResource.name | titlecase}} To JSON</button>\n</div>\n\n<button mat-raised-button color=\"primary\" (click)=\"openResourceDialog()\">New Resource</button>\n<button mat-raised-button color=\"primary\" (click)=\"openUpgradeDialog()\">New Upgrade</button>\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<button mat-raised-button color=\"accent\" (click)=\"stringifyResources()\">Export Resources To JSON</button>\n<button mat-raised-button color=\"accent\" (click)=\"stringifyWorkers()\">Export Workers To JSON</button>\n<button mat-raised-button color=\"accent\" (click)=\"stringifyUpgrades()\">Export Upgrades To JSON</button>\n"

/***/ }),

/***/ "./src/app/components/admin-debug/admin-debug.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-debug/admin-debug.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminDebugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDebugComponent", function() { return AdminDebugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDebugComponent = /** @class */ (function () {
    function AdminDebugComponent(resourcesService, workersService, upgradesService, adminService) {
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.upgradesService = upgradesService;
        this.adminService = adminService;
        this.filterAccessible = true;
    }
    AdminDebugComponent.prototype.ngOnInit = function () { };
    AdminDebugComponent.prototype.openResourceDialog = function () {
        this.adminService.openResourceDialog();
    };
    AdminDebugComponent.prototype.openUpgradeDialog = function () {
        this.adminService.openUpgradeDialog();
    };
    AdminDebugComponent.prototype.addResourceAmount = function () {
        this.resourcesService.addResourceAmount(+this.selectedResource.id, +this.amount);
    };
    AdminDebugComponent.prototype.prepareResourceForJson = function (resource) {
        resource.id = +resource.id;
        resource.amount = +resource.amount;
        for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            resourceConsume.resourceId = +resourceConsume.resourceId;
            resourceConsume.cost = +resourceConsume.cost;
        }
        resource.harvestYield = +resource.harvestYield;
        resource.harvestMilliseconds = +resource.harvestMilliseconds;
        resource.workerYield = +resource.workerYield;
        resource.sellsFor = +resource.sellsFor;
        resource.resourceTier = +resource.resourceTier;
        resource.previousTier = resource.resourceTier === 0 ? 0 : resource.resourceTier - 1;
        resource.resourceAccessible = resource.resourceTier === 0;
        resource.worker.workerCount = +resource.worker.workerCount;
        resource.worker.cost = +resource.worker.cost;
        resource.amount = 0;
        resource.resourceAccessible = resource.resourceTier === 0;
    };
    AdminDebugComponent.prototype.prepareWorkerForJson = function (worker) {
        worker.id = +worker.id;
        worker.cost = +worker.cost;
        for (var _i = 0, _a = worker.workersByResource; _i < _a.length; _i++) {
            var resourceWorker = _a[_i];
            resourceWorker.resourceId = +resourceWorker.resourceId;
            resourceWorker.workerCount = +resourceWorker.workerCount;
            resourceWorker.workerYield = +resourceWorker.workerYield;
        }
        worker.workerCount = 0;
        worker.freeWorkers = 0;
    };
    AdminDebugComponent.prototype.stringifyResource = function (resource) {
        this.prepareResourceForJson(resource);
        alert(JSON.stringify(resource));
    };
    AdminDebugComponent.prototype.stringifyResources = function () {
        for (var _i = 0, _a = this.resourcesService.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            this.prepareResourceForJson(resource);
        }
        alert(JSON.stringify(this.resourcesService.resources));
    };
    AdminDebugComponent.prototype.stringifyWorkers = function () {
        for (var _i = 0, _a = this.workersService.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            this.prepareWorkerForJson(worker);
        }
        alert(JSON.stringify(this.workersService.workers));
    };
    AdminDebugComponent.prototype.stringifyUpgrades = function () {
        alert(JSON.stringify(this.upgradesService.upgrades));
    };
    AdminDebugComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-debug',
            template: __webpack_require__(/*! ./admin-debug.component.html */ "./src/app/components/admin-debug/admin-debug.component.html"),
            styles: [__webpack_require__(/*! ./admin-debug.component.css */ "./src/app/components/admin-debug/admin-debug.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_4__["UpgradesService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminDebugComponent);
    return AdminDebugComponent;
}());



/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ClickerMainComponent's private CSS styles */\r\n.resources {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.resources mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.resources mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.resources mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.resources .resource-button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.resources .resource-button:hover {\r\n  left: .1em;\r\n}\r\n.resources .resource-button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.resources .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.resource-button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.harvest-progress {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n\r\n  height: 100%;\r\n  top: 0px;\r\n\r\n  position: absolute;\r\n  opacity: 0.5;\r\n}\r\n.resource-img {\r\n  position: absolute;\r\n\r\n  top: 0;\r\n  left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"resources noselect\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of resourceTypes | enumToArray\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{resourceType}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div *ngFor=\"let resource of resourcesOfType(resourceType, adminService.filterAccessible)\">\n        <button mat-raised-button class=\"resource-button\" color=\"accent\" [disabled]=\"resource.harvesting || !resourcesService.canHarvest(resource.id)\" [id]=\"resource.id\"\n          (click)='startHarvesting(resource.id)'\n          matTooltip=\"{{getTooltipMessage(resource.id)}}\" matTooltipPosition=\"right\">\n          <mat-card-title>{{resource.name | titlecase }}</mat-card-title>\n          <mat-card-subtitle>{{resource.amount | number:'1.0-0'}}</mat-card-subtitle>\n\n          <mat-progress-bar [class.hidden]=\"!resource.harvesting\" class=\"harvest-progress\" [mode]=\"progressBarMode\" [value]=\"resource.progressBarValue\"></mat-progress-bar>\n\n          <img class=\"resource-img\" src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\" *ngIf=\"resource.iconPath !== ''\">\n        </button>\n\n        <div *ngIf=\"adminService.editMode\">\n          <br />\n          <button (click)=\"editResource(resource.id)\">Edit {{resource.name | titlecase}}</button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClickerMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickerMainComponent", function() { return ClickerMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/clicker-main/clicker-main.service */ "./src/app/services/clicker-main/clicker-main.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/tooltip/tooltip.service */ "./src/app/services/tooltip/tooltip.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClickerMainComponent = /** @class */ (function () {
    function ClickerMainComponent(clickerMainService, resourcesService, workersService, tooltipService, adminService) {
        this.clickerMainService = clickerMainService;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.tooltipService = tooltipService;
        this.adminService = adminService;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceType"];
    }
    ClickerMainComponent.prototype.ngOnInit = function () {
    };
    ClickerMainComponent.prototype.resourcesOfType = function (resourceType, filterByAccessible) {
        return this.resourcesService.resourcesOfType(this.resourceTypes[resourceType], false, filterByAccessible);
    };
    ClickerMainComponent.prototype.getTooltipMessage = function (id) {
        return this.tooltipService.getResourceTooltip(id);
    };
    ClickerMainComponent.prototype.startHarvesting = function (id) {
        this.clickerMainService.startHarvesting(id);
    };
    ClickerMainComponent.prototype.stopHarvesting = function (id) {
        this.clickerMainService.stopHarvesting(id);
    };
    ClickerMainComponent.prototype.shouldAnimateProgressBar = function (id) {
        return this.clickerMainService.shouldAnimateProgressBar(id);
    };
    ClickerMainComponent.prototype.harvestResource = function (id) {
        this.clickerMainService.harvestResource(id);
    };
    ClickerMainComponent.prototype.editResource = function (id) {
        this.adminService.openResourceDialog(id);
    };
    ClickerMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clicker-main',
            template: __webpack_require__(/*! ./clicker-main.component.html */ "./src/app/components/clicker-main/clicker-main.component.html"),
            styles: [__webpack_require__(/*! ./clicker-main.component.css */ "./src/app/components/clicker-main/clicker-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_1__["ClickerMainService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_4__["WorkersService"],
            _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_5__["TooltipService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]])
    ], ClickerMainComponent);
    return ClickerMainComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".building-img {\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.map-img {\r\n  z-index: -2;\r\n}\r\n\r\nmat-card {\r\n  position: absolute;\r\n  left: 120%;\r\n  z-index: 2;\r\n\r\n  width: intrinsic;\r\n  width: -moz-max-content;\r\n  width: -webkit-max-content;\r\n}\r\n\r\nmat-grid-tile {\r\n  overflow: visible;\r\n}\r\n\r\n.card-tail {\r\n  position: absolute;\r\n  z-index: 2;\r\n  right: -10px;\r\n  top: 14px;\r\n}\r\n\r\n.selected-border {\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: -2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map noselect\" [ngStyle]=\"{ 'width.px': (adminService.clampMap ? windowWidth : getColumnCount()) * tilePixels}\">\n  <mat-grid-list [cols]=\"(adminService.clampMap ? windowHeight : getRowCount())\" gutterSize=\"0\" rowHeight=\"{{tilePixels}}\">\n    <mat-grid-tile *ngFor=\"let tile of getMap(adminService.clampMap)\">\n      <mat-card *ngIf=\"showSelectedTileDialog && selectedTile === tile\">\n        <mat-card-title>{{selectedBuilding.name}}</mat-card-title>\n        <mat-card-content>\n          {{selectedBuilding.description}}\n          <br />\n          <div *ngIf=\"selectedBuildingTile === undefined\">\n            <h3>Costs</h3>\n            <div *ngFor=\"let resourceCost of selectedBuilding.resourceCosts\">\n              {{resourcesService.getResource(resourceCost.resourceId).name | titlecase }}: {{resourceCost.resourceCost}}\n            </div>\n            <button mat-raised-button color=\"primary\" [disabled]=\"!canAffordBuilding(selectedBuilding.tileType)\" (click)=\"createBuilding(selectedTile, selectedBuilding.tileType)\">\n              Build\n            </button>\n          </div>\n          <div *ngIf=\"selectedBuildingTile !== undefined\">\n            <h3>Placed Building: {{selectedBuildingTile.name | titlecase}}</h3>\n            <button mat-raised-button color=\"warn\" (click)=\"clearBuilding(selectedTile)\">\n              Remove\n            </button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n\n      <a (click)=\"selectTile(tile)\">\n        <img class=\"building-img\" *ngIf=\"tile.buildingTileType !== undefined\" src={{getBuildingTileSprite(tile)}} onmousedown=\"return false\">\n        <img class=\"map-img\" appcrop src='{{getMapTileSprite(tile)}}' onmousedown=\"return false\">\n\n        <div *ngIf=\"showSelectedTileDialog && selectedTile === tile\">\n          <img class=\"card-tail\" src=\"../../../assets/sprites/card_tail.png\" onmousedown=\"return false\">\n          <img class=\"selected-border\" src=\"../../../assets/sprites/selected_border.png\" onmousedown=\"return false\">\n        </div>\n      </a>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, resourcesService, adminService) {
        this.mapService = mapService;
        this.resourcesService = resourcesService;
        this.adminService = adminService;
        this.mapTileTypes = _objects_tile__WEBPACK_IMPORTED_MODULE_1__["MapTileType"];
        this.buildingTileTypes = _objects_tile__WEBPACK_IMPORTED_MODULE_1__["BuildingTileType"];
        this.showSelectedTileDialog = false;
        this.tilePixels = 48;
        this.topLeftX = 0;
        this.topLeftY = 0;
        this.windowWidth = 15;
        this.windowHeight = 15;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.setCameraLocation(0, 0);
        this.selectedBuilding = this.mapService.buildingTiles[_objects_tile__WEBPACK_IMPORTED_MODULE_1__["BuildingTileType"].Wall];
    };
    MapComponent.prototype.processMapInput = function (event) {
        switch (event.key) {
            case 'w':
            case 'W':
            case 'ArrowUp':
                this.setCameraLocation(0, -1);
                break;
            case 'a':
            case 'A':
            case 'ArrowLeft':
                this.setCameraLocation(-1, 0);
                break;
            case 's':
            case 'S':
            case 'ArrowDown':
                this.setCameraLocation(0, 1);
                break;
            case 'd':
            case 'D':
            case 'ArrowRight':
                this.setCameraLocation(1, 0);
                break;
        }
    };
    MapComponent.prototype.selectTile = function (tile) {
        this.selectedTile = tile;
        this.showSelectedTileDialog = true;
    };
    MapComponent.prototype.canAffordBuilding = function (buildingType) {
        return this.mapService.canAffordBuilding(this.mapService.buildingTiles[buildingType]);
    };
    MapComponent.prototype.createBuilding = function (tile, buildingType) {
        var buildingCreated = this.mapService.createBuilding(tile, buildingType);
        this.showSelectedTileDialog = !buildingCreated;
    };
    MapComponent.prototype.clearBuilding = function (tile) {
        this.mapService.clearBuilding(tile);
    };
    MapComponent.prototype.getMap = function (clampToWindow) {
        return this.mapService.getMap(clampToWindow, this.topLeftX, this.topLeftY, this.windowWidth, this.windowHeight);
    };
    MapComponent.prototype.getMapTileSprite = function (tile) {
        return this.mapService.getMapTileSprite(tile);
    };
    MapComponent.prototype.getBuildingTileSprite = function (tile) {
        return this.mapService.getBuildingTileSprite(tile);
    };
    MapComponent.prototype.getCameraLocation = function () {
        return this.mapService.getCameraLocation();
    };
    MapComponent.prototype.setCameraLocation = function (xOffset, yOffset) {
        var moveSuccessful = this.mapService.setCameraLocation(xOffset, yOffset);
        if (!moveSuccessful) {
            return;
        }
        this.topLeftX = Math.floor(this.mapService.cameraX - this.windowWidth / 2);
        this.topLeftY = Math.floor(this.mapService.cameraY - this.windowHeight / 2);
        if (this.topLeftX < 0) {
            this.topLeftX = 0;
        }
        else if (this.topLeftX + this.windowWidth > this.mapService.mapWidth) {
            this.topLeftX = this.mapService.mapWidth - this.windowWidth;
        }
        if (this.topLeftY < 0) {
            this.topLeftY = 0;
        }
        else if (this.topLeftY + this.windowHeight > this.mapService.mapHeight) {
            this.topLeftY = this.mapService.mapHeight - this.windowHeight;
        }
        var cameraCenter = this.getCameraLocation();
        var distanceFromCenterX = Math.abs(cameraCenter[0] - (this.topLeftX + this.windowWidth / 2));
        var distanceFromCenterY = Math.abs(cameraCenter[1] - (this.topLeftY + this.windowHeight / 2));
        var newCameraX = this.topLeftX + xOffset;
        var newCameraY = this.topLeftY + yOffset;
        if (newCameraX >= 0 && newCameraX + this.windowWidth <= this.getColumnCount() && distanceFromCenterX >= 1) {
            this.topLeftX = newCameraX;
        }
        if (newCameraY >= 0 && newCameraY + this.windowHeight <= this.getRowCount() && distanceFromCenterY >= 1) {
            this.topLeftY = newCameraY;
        }
    };
    Object.defineProperty(MapComponent.prototype, "selectedMapTile", {
        get: function () {
            if (this.selectedTile === undefined) {
                return undefined;
            }
            return this.mapService.mapTiles[this.selectedTile.mapTileType];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "selectedBuildingTile", {
        get: function () {
            if (this.selectedTile === undefined || this.selectedTile.buildingTileType === undefined) {
                return undefined;
            }
            return this.mapService.buildingTiles[this.selectedTile.buildingTileType];
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.getRowCount = function () {
        return this.mapService.getRowCount();
    };
    MapComponent.prototype.getColumnCount = function () {
        return this.mapService.getColumnCount();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MapComponent.prototype, "processMapInput", null);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_services_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/messages/messages.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}"

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"messagesService.messages.length\"> -->\n\n\t<h2>Messages</h2>\n\t<button class=\"clear\"\n\t\t\t(click)=\"messagesService.clear()\">clear</button>\n\t<div *ngFor='let message of messagesService.messages'> {{message}} </div>\n\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
    }
    MessagesComponent.prototype.ngOnInit = function () { };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/resource-dialog/resource-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/resource-dialog/resource-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.inner-delete {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/resource-dialog/resource-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/resource-dialog/resource-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper>\n  <mat-step *ngIf=\"!editMode\">\n    <ng-template matStepLabel>Select Resource Template</ng-template>\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"oldResourceId\" [compareWith]=\"compareFn\" (selectionChange)=\"populateResource()\">\n        <mat-option placeholder=\"Resource Type\" *ngFor=\"let resource of resourcesService.resources\" value=\"{{resource.id}}\">\n          {{resource.name | titlecase}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Resource Details</ng-template>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Name\" [(ngModel)]=\"resource.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"resource.resourceType\">\n        <mat-option placeholder=\"Resource Type\" *ngFor=\"let resourceType of resourceTypes | enumToArray\" value=\"{{resourceTypes[resourceType]}}\">\n          {{resourceType}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Icon Path\" [(ngModel)]=\"resource.iconPath\">\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Resource Consumes</ng-template>\n\n    <button mat-raised-button color=\"accent\" (click)=\"newResourceConsume()\">Add New Consumed Resource</button>\n    <div *ngFor=\"let resourceConsume of resource.resourceConsumes\">\n      <mat-card>\n        <button class=\"inner-delete\" mat-raised-button color=\"warn\" (click)=\"removeResourceConsume(resourceConsume)\">Remove Consumed Resource</button>\n        <mat-form-field class=\"full-width\">\n          <mat-select [(ngModel)]=\"resourceConsume.resourceId\" [compareWith]=\"compareFn\">\n            <mat-option placeholder=\"Resource\" *ngFor=\"let _resource of resourcesService.resources\" value=\"{{_resource.id}}\">\n              {{_resource.name | titlecase }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Cost\" [(ngModel)]=\"resourceConsume.cost\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Resource Values</ng-template>\n\n    <mat-checkbox [(ngModel)]=\"resource.harvestable\">Harvestable</mat-checkbox>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Harvest Yield\" [(ngModel)]=\"resource.harvestYield\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Harvest Time (Milliseconds)\" [(ngModel)]=\"resource.harvestMilliseconds\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n    <br />\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Worker Yield\" [(ngModel)]=\"resource.workerYield\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n    <br />\n\n    <mat-checkbox [(ngModel)]=\"resource.sellable\">Sellable</mat-checkbox>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Sells For\" [(ngModel)]=\"resource.sellsFor\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n    <br />\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Resource Tier\" [(ngModel)]=\"resource.resourceTier\">\n    </mat-form-field>\n\n    <div *ngIf=\"resourceWorker !== null\">\n      <mat-divider></mat-divider>\n      <br />\n\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Worker Yield\" [(ngModel)]=\"resourceWorker.workerYield\">\n      </mat-form-field>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Description</ng-template>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Resource Description\" [(ngModel)]=\"resource.resourceDescription\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Worker Verb\" [(ngModel)]=\"resource.workerVerb\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Worker Noun\" [(ngModel)]=\"resource.workerNoun\">\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    {{resource.name}} configured.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-raised-button (click)=\"saveResource()\">Save Resource</button>\n      <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "./src/app/components/resource-dialog/resource-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/resource-dialog/resource-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResourceDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDialogComponent", function() { return ResourceDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ResourceDialogComponent = /** @class */ (function () {
    function ResourceDialogComponent(resourcesService, workersService, _formBuilder, dialogRef, data) {
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.resource = {
            id: this.resourcesService.resources.length,
            name: '',
            resourceType: _objects_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceType"].Currency,
            amount: 0,
            iconPath: '',
            resourceConsumes: [],
            progressBarValue: 0,
            harvestable: true,
            harvesting: false,
            harvestStartDate: Date.now(),
            harvestYield: 1,
            harvestMilliseconds: 1000,
            workerYield: 1,
            sellable: true,
            sellsFor: 5,
            resourceDescription: '',
            workerVerb: '',
            workerNoun: '',
            resourceAccessible: true,
            resourceTier: 0,
            previousTier: 0,
            worker: { workable: true, workerCount: 0, cost: 50 }
        };
        this.resourceWorker = this.workersService.getResourceWorker(0);
        this.editMode = false;
        this.oldResourceId = 0;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceType"];
    }
    ResourceDialogComponent.prototype.ngOnInit = function () {
        if (this.data.resourceId !== undefined) {
            this.resource = this.resourcesService.getResource(this.data.resourceId);
            this.resourceWorker = this.workersService.getResourceWorker(this.resource.id);
            this.editMode = true;
        }
    };
    ResourceDialogComponent.prototype.populateResource = function () {
        var resourceId = +this.oldResourceId;
        var oldResource = this.resourcesService.getResource(resourceId);
        this.resource.name = oldResource.name;
        this.resource.resourceType = oldResource.resourceType;
        this.resource.iconPath = oldResource.iconPath;
        this.resource.amount = oldResource.amount;
        this.resource.harvestable = oldResource.harvestable;
        this.resource.harvestYield = oldResource.harvestYield;
        this.resource.harvestMilliseconds = oldResource.harvestMilliseconds;
        this.resource.workerYield = oldResource.workerYield;
        this.resource.sellable = oldResource.sellable;
        this.resource.sellsFor = oldResource.sellsFor;
        this.resource.resourceDescription = oldResource.resourceDescription;
        this.resource.workerVerb = oldResource.workerVerb;
        this.resource.workerNoun = oldResource.workerNoun;
        this.resource.resourceAccessible = oldResource.resourceAccessible;
        this.resource.resourceTier = oldResource.resourceTier;
        this.resource.previousTier = oldResource.previousTier;
        for (var _i = 0, _a = oldResource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            this.resource.resourceConsumes.push({
                resourceId: resourceConsume.resourceId,
                cost: resourceConsume.cost
            });
        }
        this.resource.worker = {
            workable: oldResource.worker.workable,
            workerCount: oldResource.worker.workerCount,
            cost: oldResource.worker.cost
        };
        this.resourceWorker = {
            resourceId: resourceId,
            workable: true,
            workerCount: 0,
            workerYield: 1,
            sliderSettingValid: true
        };
    };
    ResourceDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ResourceDialogComponent.prototype.newResourceConsume = function () {
        this.resource.resourceConsumes[this.resource.resourceConsumes.length] = { resourceId: 0, cost: 1 };
    };
    ResourceDialogComponent.prototype.removeResourceConsume = function (resourceConsume) {
        this.resource.resourceConsumes = this.resource.resourceConsumes.filter(function (rc) { return rc !== resourceConsume; });
    };
    ResourceDialogComponent.prototype.updateResourceWorker = function () {
        var _this = this;
        var worker = this.workersService.getWorker(this.resource.resourceType);
        if (worker === undefined) {
            console.log("No worker found for " + this.resource.resourceType);
            return;
        }
        this.resourceWorker.resourceId = this.resource.id;
        var resourceWorkers = worker.workersByResource;
        if (!resourceWorkers.find(function (rw) { return rw === _this.resourceWorker; })) {
            resourceWorkers.push(this.resourceWorker);
        }
    };
    ResourceDialogComponent.prototype.saveResource = function () {
        this.updateResourceWorker();
        var existingResource = this.resourcesService.getResource(this.resource.id);
        if (existingResource === undefined) {
            this.resourcesService.resources.push(this.resource);
        }
        else {
            existingResource = this.resource;
        }
    };
    ResourceDialogComponent.prototype.compareFn = function (item1, item2) {
        return +item1 === +item2;
    };
    ResourceDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resource-dialog',
            template: __webpack_require__(/*! ./resource-dialog.component.html */ "./src/app/components/resource-dialog/resource-dialog.component.html"),
            styles: [__webpack_require__(/*! ./resource-dialog.component.css */ "./src/app/components/resource-dialog/resource-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"],
            _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ResourceDialogComponent);
    return ResourceDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">save</mat-icon>\n        Save/Load\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Autosave Interval (Minutes)\" [(value)]=\"autosaveInterval\" (valueChange)=\"setAutosave()\">\n        <mat-option [value]=\"-1\">Disable</mat-option>\n        <mat-option [value]=\"60000\">1</mat-option>\n        <mat-option [value]=\"900000\">15</mat-option>\n        <mat-option [value]=\"1800000\">30</mat-option>\n        <mat-option [value]=\"3600000\">60</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" (click)=\"saveGame()\">Save</button>\n    <button mat-raised-button color=\"accent\" (click)=\"loadGame()\">Load</button>\n\n    <button mat-raised-button (click)=\"exportSave()\">Export Save</button>\n    <button mat-raised-button (click)=\"importSave()\">Import Save</button>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.setAutosave = function () {
        this.settingsService.setAutosave();
    };
    SettingsComponent.prototype.saveGame = function () {
        this.settingsService.saveGame();
    };
    SettingsComponent.prototype.loadGame = function () {
        this.settingsService.loadGame();
    };
    SettingsComponent.prototype.exportSave = function () {
        alert(this.settingsService.exportSave());
    };
    SettingsComponent.prototype.importSave = function () {
        this.settingsService.importSave(prompt('Paste Save Data'));
    };
    Object.defineProperty(SettingsComponent.prototype, "autosaveInterval", {
        get: function () {
            return this.settingsService.autosaveInterval;
        },
        set: function (value) {
            this.settingsService.autosaveInterval = value;
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/store/store.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/store/store.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* StoreComponent's private CSS styles */\r\n.store {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.store mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.store mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.store mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.store mat-card {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.store mat-card:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.store a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.store a:hover {\r\n  color:#607D8B;\r\n}\r\n.store .harvestable {\r\n  background-color: antiquewhite;\r\n}\r\n.store .harvestable:hover {\r\n  background-color: blanchedalmond;\r\n}\r\n.store .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.right {\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 3px;\r\n}\r\nbutton {\r\n  min-width: unset;\r\n  height: 27px;\r\n  line-height: unset;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}"

/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"store\">\n  <mat-accordion multi=\"true\">\n      <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of resourceTypes | enumToArray\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{resourceType}}\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <mat-card *ngFor=\"let resource of resourcesOfType(resourceType, true, adminService.filterAccessible)\"\n          matTooltip=\"Sells for {{resource.sellsFor}} gold.\" matTooltipPosition=\"right\">\n          {{resource.name | titlecase }}\n          <span class=\"right\">\n              <button mat-flat-button color='accent' [disabled]='!canSellResource(resource.id, 1)' (click)='sellResource(resource.id, 1)'>1x</button>\n              <button mat-flat-button color='accent' [disabled]='!canSellResource(resource.id, 10)' (click)='sellResource(resource.id, 10)'>10x</button>\n              <button mat-flat-button color='accent' [disabled]='!canSellResource(resource.id, 100)' (click)='sellResource(resource.id, 100)'>100x</button>\n              <button mat-flat-button color='accent' [disabled]='!canSellResource(resource.id, -1)' (click)='sellResource(resource.id, -1)'>All</button>\n            </span>\n        </mat-card>\n      </mat-expansion-panel>\n    </mat-accordion>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/store/store.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/store/store.component.ts ***!
  \*****************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreComponent = /** @class */ (function () {
    function StoreComponent(resourcesService, storeService, adminService) {
        this.resourcesService = resourcesService;
        this.storeService = storeService;
        this.adminService = adminService;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceType"];
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent.prototype.canSellResource = function (id, amount) {
        return this.storeService.canSellResource(id, amount);
    };
    StoreComponent.prototype.resourcesOfType = function (resourceType, filterBySellable, filterByAccessible) {
        return this.storeService.resourcesOfType(this.resourceTypes[resourceType], filterBySellable, filterByAccessible);
    };
    StoreComponent.prototype.sellResource = function (id, amount) {
        var resource = this.resourcesService.getResource(id);
        this.storeService.sellResource(id, amount);
    };
    StoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/components/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.css */ "./src/app/components/store/store.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrade-dialog/upgrade-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/upgrade-dialog/upgrade-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}\r\n\r\n.inner-delete {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/upgrade-dialog/upgrade-dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/upgrade-dialog/upgrade-dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper>\n  <mat-step *ngIf=\"!editMode\">\n    <ng-template matStepLabel>Select Upgrade Template</ng-template>\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"oldUpgradeId\" [compareWith]=\"compareFn\" (selectionChange)=\"populateUpgrade()\">\n        <mat-option placeholder=\"Upgrade Type\" *ngFor=\"let upgrade of upgradesService.upgrades\" value=\"{{upgrade.id}}\">\n          {{upgrade.name | titlecase}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Upgrade Details</ng-template>\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"upgrade.upgradeType\">\n        <mat-option placeholder=\"Upgrade Type\" *ngFor=\"let upgradeType of upgradeTypes | enumToArray\" value=\"{{upgradeTypes[upgradeType]}}\">\n          {{upgradeType}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Name\" [(ngModel)]=\"upgrade.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Description\" [(ngModel)]=\"upgrade.description\">\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Upgrade Effects</ng-template>\n\n    <button mat-raised-button color=\"accent\" (click)=\"newUpgradeEffect()\">Add New Upgrade Effect</button>\n    <div *ngFor=\"let upgradeEffect of upgrade.upgradeEffects\">\n      <mat-card>\n        <button class=\"inner-delete\" mat-raised-button color=\"warn\" (click)=\"removeUpgradeEffect(upgradeEffect)\">Remove Upgrade Effect</button>\n        <mat-checkbox [(ngModel)]=\"upgradeEffect.upgradeIsForWholeType\">Upgrade Is For Whole Type</mat-checkbox>\n\n        <div *ngIf=\"upgradeEffect.upgradeIsForWholeType\">\n          <mat-form-field class=\"full-width\">\n            <mat-select [(ngModel)]=\"upgradeEffect.resourceType\">\n              <mat-option placeholder=\"Resource Type\" *ngFor=\"let resourceType of resourceTypes | enumToArray\" value=\"{{resourceTypes[resourceType]}}\">\n                {{resourceType}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"!upgradeEffect.upgradeIsForWholeType\">\n          <mat-form-field class=\"full-width\">\n            <mat-select [(ngModel)]=\"upgradeEffect.resourceId\" [compareWith]=\"compareFn\">\n              <mat-option placeholder=\"Resource Type\" *ngFor=\"let resource of resourcesService.resources\" value=\"{{resource.id}}\">\n                {{resource.name | titlecase}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <mat-form-field class=\"full-width\">\n          <mat-select [(ngModel)]=\"upgradeEffect.upgradeVariable\">\n            <mat-option placeholder=\"Upgrade Variable\" *ngFor=\"let upgradeVariable of upgradeVariables | enumToArray\" value=\"{{upgradeVariables[upgradeVariable]}}\">\n              {{upgradeVariable}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div *ngIf=\"upgradeEffect.upgradeVariable === upgradeVariables.Harvestability || upgradeEffect.upgradeVariable === upgradeVariables.Workable\">\n          <mat-checkbox [(ngModel)]=\"upgradeEffect.upgradeFactor\">{{upgradeEffect.upgradeVariable | titlecase}}</mat-checkbox>\n        </div>\n        <div *ngIf=\"upgradeEffect.upgradeVariable !== upgradeVariables.Harvestability && upgradeEffect.upgradeVariable !== upgradeVariables.Workable\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Upgrade Factor\" [(ngModel)]=\"upgradeEffect.upgradeFactor\">\n          </mat-form-field>\n        </div>\n      </mat-card>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Resource Costs</ng-template>\n    <button mat-raised-button color=\"accent\" (click)=\"newResourceCost()\">Add New Resouce Cost</button>\n    <div *ngFor=\"let resourceCost of upgrade.resourceCosts\">\n      <mat-card>\n        <button class=\"inner-delete\" mat-raised-button color=\"warn\" (click)=\"removeResourceCost(resourceCost)\">Remove Resource Cost</button>\n        <mat-form-field class=\"full-width\">\n          <mat-select [(ngModel)]=\"resourceCost.resourceId\" [compareWith]=\"compareFn\">\n            <mat-option placeholder=\"Resource Type\" *ngFor=\"let resource of resourcesService.resources\" value=\"{{resource.id}}\">\n              {{resource.name | titlecase}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Resource Cost\" [(ngModel)]=\"resourceCost.resourceCost\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    {{upgrade.name}} configured.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-raised-button (click)=\"saveUpgrade()\">Save Upgrade</button>\n      <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "./src/app/components/upgrade-dialog/upgrade-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/upgrade-dialog/upgrade-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpgradeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeDialogComponent", function() { return UpgradeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_upgrade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/upgrade */ "./src/app/objects/upgrade.ts");
/* harmony import */ var _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UpgradeDialogComponent = /** @class */ (function () {
    function UpgradeDialogComponent(resourcesService, upgradesService, _formBuilder, dialogRef, data) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.upgrade = {
            id: this.upgradesService.upgrades.length,
            upgradeType: _objects_upgrade__WEBPACK_IMPORTED_MODULE_5__["UpgradeType"].Resource,
            name: '',
            description: '',
            upgradeEffects: [],
            resourceCosts: [],
            purchased: false
        };
        this.editMode = false;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_3__["ResourceType"];
        this.upgradeTypes = _objects_upgrade__WEBPACK_IMPORTED_MODULE_5__["UpgradeType"];
        this.upgradeVariables = _objects_upgrade__WEBPACK_IMPORTED_MODULE_5__["UpgradeVariable"];
    }
    UpgradeDialogComponent.prototype.ngOnInit = function () {
        if (this.data.upgradeId !== undefined) {
            this.upgrade = this.upgradesService.getUpgrade(this.data.upgradeId);
            this.editMode = true;
        }
    };
    UpgradeDialogComponent.prototype.populateUpgrade = function () {
        var upgradeId = +this.oldUpgradeId;
        var oldUpgrade = this.upgradesService.getUpgrade(upgradeId);
        this.upgrade.name = oldUpgrade.name;
        this.upgrade.upgradeType = oldUpgrade.upgradeType;
        this.upgrade.description = oldUpgrade.description;
        this.upgrade.purchased = false;
        for (var _i = 0, _a = oldUpgrade.upgradeEffects; _i < _a.length; _i++) {
            var upgradeEffect = _a[_i];
            this.upgrade.upgradeEffects.push({
                upgradeIsForWholeType: upgradeEffect.upgradeIsForWholeType,
                resourceType: upgradeEffect.resourceType,
                resourceId: upgradeEffect.resourceId,
                upgradeVariable: upgradeEffect.upgradeVariable,
                upgradeFactor: upgradeEffect.upgradeFactor,
            });
        }
        for (var _b = 0, _c = oldUpgrade.resourceCosts; _b < _c.length; _b++) {
            var resourceCost = _c[_b];
            this.upgrade.resourceCosts.push({
                resourceId: resourceCost.resourceId,
                resourceCost: resourceCost.resourceCost
            });
        }
    };
    UpgradeDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UpgradeDialogComponent.prototype.newUpgradeEffect = function () {
        this.upgrade.upgradeEffects[this.upgrade.upgradeEffects.length] = {
            upgradeIsForWholeType: false,
            resourceId: 0,
            upgradeVariable: _objects_upgrade__WEBPACK_IMPORTED_MODULE_5__["UpgradeVariable"].Harvestability,
            upgradeFactor: 1
        };
    };
    UpgradeDialogComponent.prototype.removeUpgradeEffect = function (upgradeEffect) {
        this.upgrade.upgradeEffects = this.upgrade.upgradeEffects.filter(function (ue) { return ue !== upgradeEffect; });
    };
    UpgradeDialogComponent.prototype.newResourceCost = function () {
        this.upgrade.resourceCosts[this.upgrade.resourceCosts.length] = {
            resourceId: 0,
            resourceCost: 0
        };
    };
    UpgradeDialogComponent.prototype.removeResourceCost = function (resourceCost) {
        this.upgrade.resourceCosts = this.upgrade.resourceCosts.filter(function (rc) { return rc !== resourceCost; });
    };
    UpgradeDialogComponent.prototype.saveUpgrade = function () {
        this.upgrade.id = +this.upgrade.id;
        for (var _i = 0, _a = this.upgrade.upgradeEffects; _i < _a.length; _i++) {
            var upgradeEffect = _a[_i];
            if (upgradeEffect.resourceId) {
                upgradeEffect.resourceId = +upgradeEffect.resourceId;
            }
            upgradeEffect.upgradeFactor = +upgradeEffect.upgradeFactor;
        }
        for (var _b = 0, _c = this.upgrade.resourceCosts; _b < _c.length; _b++) {
            var resourceCost = _c[_b];
            resourceCost.resourceId = +resourceCost.resourceId;
            resourceCost.resourceCost = +resourceCost.resourceCost;
        }
        var existingUpgrade = this.upgradesService.getUpgrade(this.upgrade.id);
        if (existingUpgrade === undefined) {
            this.upgradesService.upgrades.push(this.upgrade);
        }
        else {
            existingUpgrade = this.upgrade;
        }
    };
    UpgradeDialogComponent.prototype.compareFn = function (item1, item2) {
        return +item1 === +item2;
    };
    UpgradeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrade-dialog',
            template: __webpack_require__(/*! ./upgrade-dialog.component.html */ "./src/app/components/upgrade-dialog/upgrade-dialog.component.html"),
            styles: [__webpack_require__(/*! ./upgrade-dialog.component.css */ "./src/app/components/upgrade-dialog/upgrade-dialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"],
            _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_6__["UpgradesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], UpgradeDialogComponent);
    return UpgradeDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* UpgradesComponent's private CSS styles */\r\n.upgrades {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.upgrades mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.upgrades mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.upgrades mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.upgrades button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.upgrades button:hover {\r\n  left: .1em;\r\n}\r\n.upgrades button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.upgrades .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.harvest-progress {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  \r\n  height: 100%;\r\n  top: 0px;\r\n  \r\n  position: absolute;\r\n  opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox class=\"hidePurchased\" checked=\"true\" [(ngModel)]=\"hidePurchased\">Hide Purchased Upgrades</mat-checkbox>\n<br />\n<br />\n\n<div class=\"upgrades\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let upgradeType of upgradeTypes | enumToArray\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{upgradeType}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div *ngFor=\"let upgrade of upgradesOfType(upgradeType, false, hidePurchased, adminService.filterAccessible)\">\n        <mat-divider></mat-divider>\n        <button mat-raised-button color=\"accent\"\n          [disabled]='!canAffordUpgrade(upgrade.id)'\n          (click)='purchaseUpgrade(upgrade.id)'>\n          <mat-card-title>{{upgrade.name}}</mat-card-title>\n        </button>\n        <mat-card-subtitle>{{upgradesService.getUpgradeTypeString(upgrade.id)}}</mat-card-subtitle>\n        <mat-card-content>\n          {{upgrade.description}}\n          <br />\n          <h3>Costs</h3>\n          <div *ngFor=\"let resourceCost of upgrade.resourceCosts\">\n            {{resourcesService.getResource(resourceCost.resourceId).name | titlecase }}: {{resourceCost.resourceCost}}\n          </div>\n        </mat-card-content>\n        <div *ngIf=\"adminService.editMode\">\n          <button (click)=\"editUpgrade(upgrade.id)\">Edit {{upgrade.name | titlecase}}</button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.ts ***!
  \***********************************************************/
/*! exports provided: UpgradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradesComponent", function() { return UpgradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/upgrade */ "./src/app/objects/upgrade.ts");
/* harmony import */ var _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpgradesComponent = /** @class */ (function () {
    function UpgradesComponent(resourcesService, upgradesService, adminService) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.adminService = adminService;
        this.upgradeTypes = _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeType"];
        this.hidePurchased = false;
    }
    UpgradesComponent.prototype.ngOnInit = function () {
    };
    UpgradesComponent.prototype.canAffordUpgrade = function (id) {
        return this.upgradesService.canAffordUpgrade(id);
    };
    UpgradesComponent.prototype.upgradesOfType = function (upgradeType, filterByPurchased, filterByUnpurchased, filterByAccessible) {
        return this.upgradesService.upgradesOfType(this.upgradeTypes[upgradeType], filterByPurchased, filterByUnpurchased, filterByAccessible);
    };
    UpgradesComponent.prototype.purchaseUpgrade = function (id) {
        this.upgradesService.purchaseUpgrade(id);
    };
    UpgradesComponent.prototype.getBackgroundColor = function (id) {
        var upgrade = this.upgradesService.getUpgrade(id);
        if (upgrade.purchased) {
            return 'lightgreen';
        }
        else if (!this.upgradesService.canAffordUpgrade(id)) {
            return 'gray';
        }
        return 'lightblue';
    };
    UpgradesComponent.prototype.editUpgrade = function (id) {
        this.adminService.openUpgradeDialog(id);
    };
    UpgradesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrades',
            template: __webpack_require__(/*! ./upgrades.component.html */ "./src/app/components/upgrades/upgrades.component.html"),
            styles: [__webpack_require__(/*! ./upgrades.component.css */ "./src/app/components/upgrades/upgrades.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__["UpgradesService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], UpgradesComponent);
    return UpgradesComponent;
}());



/***/ }),

/***/ "./src/app/components/workers/workers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/workers/workers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* WorkersComponent's private CSS styles */\r\n.workers {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.workers mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.workers mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.workers mat-card-title {\r\n  text-align: left;\r\n}\r\n.workers mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.workers mat-slider {\r\n  width: 100%;\r\n  top: -22px;\r\n}\r\n.workers mat-card {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.workers button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.workers button:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.workers a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.workers a:hover {\r\n  color:#607D8B;\r\n}\r\n.workers .harvestable {\r\n  background-color: antiquewhite;\r\n}\r\n.workers .harvestable:hover {\r\n  background-color: blanchedalmond;\r\n}\r\n.workers .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/workers/workers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/workers/workers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"workers\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let worker of getWorkers()\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{worker.resourceType | titlecase}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <button mat-raised-button [color]=\"canAfford(worker.id) ? 'accent' : 'disabled'\" (click)=\"hireWorker(worker.id)\">\n        <mat-card-title>{{worker.workerCount}} Workers ({{worker.freeWorkers}} Idle)</mat-card-title>\n        <mat-card-subtitle>{{worker.cost}} Gold</mat-card-subtitle>\n      </button>\n\n      <div *ngFor=\"let resourceWorker of worker.workersByResource\">\n        <mat-card *ngIf=\"resourceWorker.workable || !adminService.filterAccessible\" matTooltip=\"{{getTooltipMessage(resourceWorker.resourceId)}}\"\n          matTooltipPosition=\"right\">\n          <mat-card-title>{{resourcesService.getResource(resourceWorker.resourceId).name | titlecase}}</mat-card-title>\n          <mat-card-subtitle>{{resourceWorker.workerCount}} Workers</mat-card-subtitle>\n          <mat-slider [color]=\"resourceWorker.sliderSettingValid ? 'accent' : 'warn'\" [id]=\"resourceWorker.resourceId\" [max]=\"worker.workerCount\"\n             [tickInterval]=\"1\" [thumbLabel]=\"true\" (input)=\"checkSliderValue($event)\" (change)=\"updateResourceWorker($event)\">\n          </mat-slider>\n        </mat-card>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/workers/workers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/workers/workers.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkersComponent", function() { return WorkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/tooltip/tooltip.service */ "./src/app/services/tooltip/tooltip.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkersComponent = /** @class */ (function () {
    function WorkersComponent(resourcesService, workersService, tooltipService, adminService) {
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.tooltipService = tooltipService;
        this.adminService = adminService;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_1__["ResourceType"];
    }
    WorkersComponent.prototype.ngOnInit = function () {
    };
    WorkersComponent.prototype.getWorkers = function () {
        return this.workersService.getWorkers();
    };
    WorkersComponent.prototype.getWorker = function (idOrResourceType) {
        return this.workersService.getWorker(idOrResourceType);
    };
    WorkersComponent.prototype.canAfford = function (id) {
        return this.workersService.canAfford(id);
    };
    WorkersComponent.prototype.getTooltipMessage = function (id) {
        return this.tooltipService.getWorkerTooltip(id);
    };
    WorkersComponent.prototype.hireWorker = function (id) {
        this.workersService.hireWorker(id);
    };
    WorkersComponent.prototype.checkSliderValue = function (event) {
        var resource = this.resourcesService.getResource(+event.source._elementRef.nativeElement.id);
        var worker = this.getWorker(resource.resourceType);
        var resourceWorker = worker.workersByResource.find(function (ws) { return ws.resourceId === resource.id; });
        var newValue = +event.value;
        resourceWorker.sliderSettingValid = worker.freeWorkers + resourceWorker.workerCount - newValue >= 0;
    };
    WorkersComponent.prototype.updateResourceWorker = function (event) {
        this.workersService.updateResourceWorker(+event.source._elementRef.nativeElement.id, +event.value);
    };
    WorkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workers',
            template: __webpack_require__(/*! ./workers.component.html */ "./src/app/components/workers/workers.component.html"),
            styles: [__webpack_require__(/*! ./workers.component.css */ "./src/app/components/workers/workers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_4__["TooltipService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
    ], WorkersComponent);
    return WorkersComponent;
}());



/***/ }),

/***/ "./src/app/directives/crop/crop.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/crop/crop.directive.ts ***!
  \***************************************************/
/*! exports provided: CropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropDirective", function() { return CropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CropDirective = /** @class */ (function () {
    function CropDirective(element, renderer, mapService) {
        // const tileCropDetail = this.mapService.getTile(
        //   +element.nativeElement.attributes['x'].value, +element.nativeElement.attributes['y'].value);
        this.element = element;
        this.renderer = renderer;
        this.mapService = mapService;
        this.renderer.setStyle(element.nativeElement, 'clip', 'rect(0, 0, 16, 16)');
    }
    CropDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCrop]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], CropDirective);
    return CropDirective;
}());



/***/ }),

/***/ "./src/app/directives/touch/touch.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/touch/touch.directive.ts ***!
  \*****************************************************/
/*! exports provided: TouchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchDirective", function() { return TouchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/clicker-main/clicker-main.service */ "./src/app/services/clicker-main/clicker-main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TouchDirective = /** @class */ (function () {
    function TouchDirective(element, renderer, clickerMainService) {
        this.element = element;
        this.renderer = renderer;
        this.clickerMainService = clickerMainService;
        var hammerControl = hammerjs__WEBPACK_IMPORTED_MODULE_1__(element.nativeElement);
        hammerControl.get('press').set({ time: 0 });
        hammerControl.on('press', function (event) {
            var id = +element.nativeElement.attributes['id'].value;
            clickerMainService.startHarvesting(id);
        });
        hammerControl.on('pressup', function (event) {
            var id = +element.nativeElement.attributes['id'].value;
            clickerMainService.stopHarvesting(id);
        });
    }
    TouchDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTouch]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_2__["ClickerMainService"]])
    ], TouchDirective);
    return TouchDirective;
}());



/***/ }),

/***/ "./src/app/material-import/material-import.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-import/material-import.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialImportModule", function() { return MaterialImportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"]
];
var MaterialImportModule = /** @class */ (function () {
    function MaterialImportModule() {
    }
    MaterialImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialImportModule);
    return MaterialImportModule;
}());



/***/ }),

/***/ "./src/app/objects/resource.ts":
/*!*************************************!*\
  !*** ./src/app/objects/resource.ts ***!
  \*************************************/
/*! exports provided: ResourceType, Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return ResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
var ResourceType;
(function (ResourceType) {
    ResourceType["Currency"] = "CURRENCY";
    ResourceType["Wood"] = "WOOD";
    ResourceType["Metal"] = "METAL";
    ResourceType["Miscellaneous"] = "MISCELLANEOUS";
})(ResourceType || (ResourceType = {}));
var Resource = /** @class */ (function () {
    function Resource() {
        this.harvestStartDate = Date.now();
        this.harvesting = false;
        this.progressBarValue = 0;
    }
    return Resource;
}());



/***/ }),

/***/ "./src/app/objects/tile.ts":
/*!*********************************!*\
  !*** ./src/app/objects/tile.ts ***!
  \*********************************/
/*! exports provided: MapTileType, BuildingTileType, Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTileType", function() { return MapTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingTileType", function() { return BuildingTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
var MapTileType;
(function (MapTileType) {
    MapTileType["Grass"] = "GRASS";
    MapTileType["Water"] = "WATER";
    MapTileType["Mountain"] = "MOUNTAIN";
})(MapTileType || (MapTileType = {}));
var BuildingTileType;
(function (BuildingTileType) {
    BuildingTileType["Wall"] = "WALL";
})(BuildingTileType || (BuildingTileType = {}));
var Tile = /** @class */ (function () {
    function Tile() {
    }
    return Tile;
}());



/***/ }),

/***/ "./src/app/objects/upgrade.ts":
/*!************************************!*\
  !*** ./src/app/objects/upgrade.ts ***!
  \************************************/
/*! exports provided: UpgradeType, UpgradeVariable, Upgrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeType", function() { return UpgradeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeVariable", function() { return UpgradeVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upgrade", function() { return Upgrade; });
var UpgradeType;
(function (UpgradeType) {
    UpgradeType["Resource"] = "RESOURCE";
    UpgradeType["Worker"] = "WORKER";
})(UpgradeType || (UpgradeType = {}));
var UpgradeVariable;
(function (UpgradeVariable) {
    UpgradeVariable["Harvestability"] = "HARVESTABILITY";
    UpgradeVariable["HarvestYield"] = "HARVEST_YIELD";
    UpgradeVariable["HarvestMilliseconds"] = "HARVEST_MILLISECONDS";
    UpgradeVariable["Workable"] = "WORKABLE";
    UpgradeVariable["WorkerYield"] = "WORKER_YIELD";
    UpgradeVariable["WorkerCost"] = "WORKER_COST";
})(UpgradeVariable || (UpgradeVariable = {}));
var Upgrade = /** @class */ (function () {
    function Upgrade() {
    }
    return Upgrade;
}());



/***/ }),

/***/ "./src/app/pipe/enumtoarraypipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipe/enumtoarraypipe.ts ***!
  \*****************************************/
/*! exports provided: EnumToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToPipe", function() { return EnumToPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnumToPipe = /** @class */ (function () {
    function EnumToPipe() {
    }
    EnumToPipe.prototype.transform = function (data) {
        return Object.keys(data);
    };
    EnumToPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'enumToArray'
        })
    ], EnumToPipe);
    return EnumToPipe;
}());



/***/ }),

/***/ "./src/app/pipe/pipe.module.ts":
/*!*************************************!*\
  !*** ./src/app/pipe/pipe.module.ts ***!
  \*************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enumtoarraypipe */ "./src/app/pipe/enumtoarraypipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__["EnumToPipe"]
            ],
            exports: [
                _enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__["EnumToPipe"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/services/admin/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/resource-dialog/resource-dialog.component */ "./src/app/components/resource-dialog/resource-dialog.component.ts");
/* harmony import */ var _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/upgrade-dialog/upgrade-dialog.component */ "./src/app/components/upgrade-dialog/upgrade-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(dialog) {
        this.dialog = dialog;
        this.filterAccessible = true;
        this.clampMap = true;
    }
    AdminService.prototype.openResourceDialog = function (resourceId) {
        var dialogRef = this.dialog.open(_components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ResourceDialogComponent"], {
            width: '750px',
            height: '600px',
            data: resourceId === undefined ? {} : { resourceId: resourceId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AdminService.prototype.openUpgradeDialog = function (upgradeId) {
        var dialogRef = this.dialog.open(_components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_3__["UpgradeDialogComponent"], {
            width: '750px',
            height: '525px',
            data: upgradeId === undefined ? {} : { upgradeId: upgradeId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/clicker-main/clicker-main.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/clicker-main/clicker-main.service.ts ***!
  \***************************************************************/
/*! exports provided: ClickerMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickerMainService", function() { return ClickerMainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClickerMainService = /** @class */ (function () {
    function ClickerMainService(resourcesService, workersService, adminService) {
        var _this = this;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.adminService = adminService;
        this.progressBarMode = 'determinate';
        this.millisecondsTotal = 1000;
        this.progressBarUpdateDelay = 200;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_5__["ResourceType"];
        var processSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000);
        var processSubscribe = processSource.subscribe(function (_) { return _this.workersService.processWorkers(); });
        var progressBarTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, this.progressBarUpdateDelay);
        progressBarTimer.subscribe(function (_) { return _this.updateProgressBars(); });
    }
    ClickerMainService.prototype.startHarvesting = function (id) {
        var _this = this;
        var resource = this.resourcesService.getResource(id);
        resource.harvestStartDate = Date.now();
        if (!this.resourcesService.canHarvest(id)) {
            return;
        }
        resource.harvesting = true;
        var harvestTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(resource.harvestMilliseconds);
        harvestTimer.subscribe(function (_) { return _this.harvestResource(id); });
    };
    ClickerMainService.prototype.stopHarvesting = function (id) {
        var resource = this.resourcesService.getResource(id);
        resource.progressBarValue = 0;
        resource.harvesting = false;
    };
    ClickerMainService.prototype.updateProgressBars = function () {
        for (var _i = 0, _a = this.resourcesService.resources.filter(function (_resource) { return _resource.harvesting; }); _i < _a.length; _i++) {
            var resource = _a[_i];
            resource.progressBarValue = Math.floor((Date.now() - resource.harvestStartDate) / resource.harvestMilliseconds * 100);
        }
    };
    ClickerMainService.prototype.shouldAnimateProgressBar = function (id) {
        return this.resourcesService.getResource(id).harvestMilliseconds > this.progressBarUpdateDelay;
    };
    ClickerMainService.prototype.harvestResource = function (id) {
        this.resourcesService.harvestResource(id);
        this.harvestStartDate = Date.now();
        if (this.shouldAnimateProgressBar(id)) {
            this.resourcesService.getResource(id).progressBarValue = 0;
        }
        this.stopHarvesting(id);
    };
    ClickerMainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _admin_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], ClickerMainService);
    return ClickerMainService;
}());



/***/ }),

/***/ "./src/app/services/map/map.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/map/map.service.ts ***!
  \*********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Jimp = __webpack_require__(/*! jimp */ "./node_modules/jimp/browser/lib/jimp.js");
var baseTiles = __webpack_require__(/*! ../../../assets/json/tileTypes.json */ "./src/assets/json/tileTypes.json");
var MapService = /** @class */ (function () {
    function MapService(resourcesService) {
        this.resourcesService = resourcesService;
        this.mapTiles = baseTiles.mapTiles;
        this.buildingTiles = baseTiles.buildingTiles;
        this.tiledMap = [];
        this.walkableMapTiles = [_objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Grass];
        this.cameraY = 100;
        this.cameraX = 100;
        var _tiledMap = [];
        var tileTypes = [_objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Grass, _objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Water, _objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Mountain];
        var _mapWidth, _mapHeight;
        var tileIds;
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.onload = function () {
            var xmlDoc = new DOMParser().parseFromString(xmlRequest.responseText, 'text/xml');
            var mapValues = xmlDoc.getElementsByTagName('data')[0].textContent;
            var layerData = xmlDoc.getElementsByTagName('layer')[0];
            _mapWidth = +layerData.attributes.getNamedItem('width').value;
            _mapHeight = +layerData.attributes.getNamedItem('height').value;
            tileIds = mapValues.split(',').map(function (tileId) { return +tileId; });
        };
        xmlRequest.open('GET', '../../../assets/tilemap/map.tmx', false);
        xmlRequest.send();
        console.log(tileIds);
        tileIds.map(function (tileIndex) {
            return _tiledMap.push({ mapTileType: tileTypes[tileIndex - 1], tileCropDetail: { x: 0, y: 0, width: 0, height: 0 } });
        });
        // _tiledMap.push({mapTileType: this.getTileType(tileIndex), tileCropDetail: this.getTileCropDetail(tileIndex)}));
        this.tiledMap = _tiledMap;
        this.mapWidth = _mapWidth;
        this.mapHeight = _mapHeight;
    }
    MapService.prototype.createBuilding = function (tile, buildingType) {
        var buildingTile = this.buildingTiles[buildingType];
        if (tile.buildingTileType !== undefined ||
            !buildingTile.buildableSurfaces.some(function (bs) { return bs === tile.mapTileType; }) ||
            !this.canAffordBuilding(buildingTile)) {
            return false;
        }
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.addResourceAmount(resourceCost.resourceId, -resourceCost.resourceCost);
        }
        tile.buildingTileType = buildingType;
        return true;
    };
    MapService.prototype.canAffordBuilding = function (buildingTile) {
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            if (this.resourcesService.getResource(resourceCost.resourceId).amount < resourceCost.resourceCost) {
                return false;
            }
        }
        return true;
    };
    MapService.prototype.clearBuilding = function (tile) {
        tile.buildingTileType = undefined;
    };
    MapService.prototype.getRowCount = function () {
        return this.mapHeight;
    };
    MapService.prototype.getColumnCount = function () {
        return this.mapWidth;
    };
    MapService.prototype.getTile = function (x, y) {
        return this.tiledMap[x + y * this.mapWidth];
    };
    MapService.prototype.getMap = function (clampToWindow, topLeftX, topLeftY, windowWidth, windowHeight) {
        if (!clampToWindow) {
            return this.tiledMap;
        }
        var submap = [];
        for (var i = topLeftY; i < topLeftY + windowHeight; i++) {
            for (var j = topLeftX; j < topLeftX + windowWidth; j++) {
                submap.push(this.getTile(j, i));
            }
        }
        return submap;
    };
    MapService.prototype.getMapTileSprite = function (tile) {
        return this.mapTiles[tile.mapTileType].spritePath;
    };
    MapService.prototype.getBuildingTileSprite = function (tile) {
        return this.buildingTiles[tile.buildingTileType].spritePath;
    };
    MapService.prototype.canMove = function (newLocationX, newLocationY) {
        return newLocationX >= 0 && newLocationX < this.mapWidth &&
            newLocationY >= 0 && newLocationY < this.mapHeight;
    };
    MapService.prototype.getCameraLocation = function () {
        return [this.cameraX, this.cameraY];
    };
    MapService.prototype.setCameraLocation = function (xOffset, yOffset) {
        var newLocationX = this.cameraX + xOffset;
        var newLocationY = this.cameraY + yOffset;
        if (!this.canMove(newLocationX, newLocationY)) {
            return false;
        }
        this.cameraX = newLocationX;
        this.cameraY = newLocationY;
        this.cameraTile = this.getTile(newLocationX, newLocationY);
        return true;
    };
    MapService.prototype.getTileType = function (tileId) {
        if (tileId in [37, 38, 39, 40, 41, 42, 43, 44, 54, 55, 56, 57, 58, 59, 60, 61, 71, 72, 73, 74, 75, 76, 77, 78, 88,
            89, 90, 91, 92, 93, 94, 95, 105, 106, 107, 108, 109, 110, 111, 112, 123, 124, 125, 126, 127, 128, 129, 130]) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Grass;
        }
        else if (tileId in [53, 122]) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Water;
        }
        return _objects_tile__WEBPACK_IMPORTED_MODULE_2__["MapTileType"].Mountain;
    };
    MapService.prototype.getTileCropDetail = function (tileId) {
        return { x: 0, y: 0, width: 16, height: 16 };
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/messages/messages.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/messages/messages.service.ts ***!
  \*******************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [];
    }
    MessagesService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessagesService.prototype.clear = function () {
        this.messages = [];
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./src/app/services/resources/resources.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/resources/resources.service.ts ***!
  \*********************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseResources = __webpack_require__(/*! ../../../assets/json/resources.json */ "./src/assets/json/resources.json");
var ResourcesService = /** @class */ (function () {
    function ResourcesService(messagesService) {
        this.messagesService = messagesService;
        this.resources = baseResources;
    }
    ResourcesService.prototype.getResource = function (id) {
        return this.resources.find(function (resource) { return resource.id === id; });
    };
    ResourcesService.prototype.harvestResource = function (id) {
        var resource = this.getResource(id);
        if (!resource.harvestable || !this.canHarvest(id)) {
            return;
        }
        for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            this.addResourceAmount(resourceConsume.resourceId, -resourceConsume.cost);
        }
        this.resources.filter(function (r) { return r.previousTier === resource.resourceTier && r.resourceType === resource.resourceType; })
            .map(function (r) { return r.resourceAccessible = true; });
        this.addResourceAmount(resource.id, resource.harvestYield);
    };
    ResourcesService.prototype.canHarvest = function (id) {
        var resource = this.getResource(id);
        if (!resource.harvestable) {
            return false;
        }
        for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            if (this.getResource(resourceConsume.resourceId).amount < resourceConsume.cost) {
                return false;
            }
        }
        return true;
    };
    ResourcesService.prototype.resourcesOfType = function (resourceType, filterByWorkable, filterByAccessible) {
        var resources = this.resources.filter(function (resource) { return resource.resourceType === resourceType; });
        if (filterByWorkable) {
            resources = resources.filter(function (resource) { return resource.worker.workable; });
        }
        if (filterByAccessible) {
            resources = resources.filter(function (resource) { return resource.resourceAccessible; });
        }
        return resources;
    };
    ResourcesService.prototype.harvestableResources = function () {
        return this.resources.filter(function (resource) { return resource.harvestable; });
    };
    ResourcesService.prototype.sellableResources = function () {
        return this.resources.filter(function (resource) { return resource.sellable; });
    };
    ResourcesService.prototype.resourceIds = function () {
        return this.resources.map(function (resource) { return resource.id; });
    };
    ResourcesService.prototype.resourceTooltip = function (id, workerCount) {
        var resource = this.getResource(id);
        if (id === 0) {
            return resource.resourceDescription + ".";
        }
        return resource.resourceDescription + ". " + resource.harvestYield / resource.harvestMilliseconds * 1000 + "\n     harvested per second; " + resource.workerYield * workerCount + " per second from workers.";
    };
    ResourcesService.prototype.addResourceAmount = function (id, amount) {
        this.getResource(id).amount += amount;
    };
    ResourcesService.prototype.canAfford = function (id) {
        return (this.getResource(0).amount >= this.getResource(id).worker.cost);
    };
    ResourcesService.prototype.log = function (message) {
        this.messagesService.add("ResourcesService: " + message);
    };
    ResourcesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_messages_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]])
    ], ResourcesService);
    return ResourcesService;
}());



/***/ }),

/***/ "./src/app/services/settings/settings.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsService = /** @class */ (function () {
    function SettingsService(resourcesService, upgradesService, workersService, snackbar) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.workersService = workersService;
        this.snackbar = snackbar;
        this.autosaveInterval = 900000;
        this.loadGame();
    }
    SettingsService.prototype.setAutosave = function () {
        var _this = this;
        if (this.autosaveSubscribe !== undefined) {
            this.autosaveSubscribe.unsubscribe();
        }
        if (this.autosaveInterval <= 0) {
            return;
        }
        this.autosaveSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(this.autosaveInterval, this.autosaveInterval);
        this.autosaveSubscribe = this.autosaveSource.subscribe(function (_) { return _this.saveGame(); });
    };
    SettingsService.prototype.saveGame = function () {
        var saveData = this.exportSave();
        localStorage.setItem('clickerGameSaveData', saveData);
        this.snackbar.open('Game successfully saved!', '', { duration: 2000 });
    };
    SettingsService.prototype.loadGame = function () {
        var saveData = localStorage.getItem('clickerGameSaveData');
        this.importSave(saveData);
        this.snackbar.open('Game successfully loaded!', '', { duration: 2000 });
    };
    SettingsService.prototype.exportSave = function () {
        var saveData = {
            resources: [],
            upgrades: [],
            workers: [],
            autosaveInterval: this.autosaveInterval
        };
        for (var _i = 0, _a = this.resourcesService.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            saveData.resources.push({
                id: resource.id,
                amount: resource.amount,
                harvestable: resource.harvestable,
                harvestYield: resource.harvestYield,
                sellable: resource.sellable,
                sellsFor: resource.sellsFor,
                resourceAccessible: resource.resourceAccessible
            });
        }
        for (var _b = 0, _c = this.upgradesService.upgrades; _b < _c.length; _b++) {
            var upgrade = _c[_b];
            saveData.upgrades.push({
                id: upgrade.id,
                purchased: upgrade.purchased
            });
        }
        for (var _d = 0, _e = this.workersService.workers; _d < _e.length; _d++) {
            var worker = _e[_d];
            var workerData = {
                id: worker.id,
                cost: worker.cost,
                workerCount: worker.workerCount,
                workersByResource: []
            };
            for (var _f = 0, _g = worker.workersByResource; _f < _g.length; _f++) {
                var resourceWorker = _g[_f];
                workerData.workersByResource.push({
                    resourceId: resourceWorker.resourceId,
                    workable: resourceWorker.workable,
                    workerCount: resourceWorker.workerCount,
                    workerYield: resourceWorker.workerYield
                });
            }
            saveData.workers.push(workerData);
        }
        return btoa(JSON.stringify(saveData));
    };
    SettingsService.prototype.importSave = function (saveDataString) {
        var backupSave = this.exportSave();
        try {
            var saveData = JSON.parse(atob(saveDataString));
            for (var _i = 0, _a = saveData.resources; _i < _a.length; _i++) {
                var resourceData = _a[_i];
                var resource = this.resourcesService.getResource(resourceData.id);
                resource.amount = resourceData.amount;
                resource.harvestable = resourceData.harvestable;
                resource.harvestYield = resourceData.harvestYield;
                resource.sellable = resourceData.sellable;
                resource.sellsFor = resourceData.sellsFor;
                resource.resourceAccessible = resourceData.resourceAccessible;
            }
            for (var _b = 0, _c = saveData.upgrades; _b < _c.length; _b++) {
                var upgradeData = _c[_b];
                var upgrade = this.upgradesService.getUpgrade(upgradeData.id);
                upgrade.purchased = upgradeData.purchased;
            }
            for (var _d = 0, _e = saveData.workers; _d < _e.length; _d++) {
                var workerData = _e[_d];
                var worker = this.workersService.getWorker(workerData.id);
                worker.cost = workerData.cost;
                worker.workerCount = workerData.workerCount;
                worker.freeWorkers = workerData.workerCount;
                for (var _f = 0, _g = workerData.workersByResource; _f < _g.length; _f++) {
                    var resourceWorkerData = _g[_f];
                    var resourceWorker = this.workersService.getResourceWorker(resourceWorkerData.resourceId);
                    resourceWorker.workable = resourceWorkerData.workable;
                    resourceWorker.workerYield = resourceWorkerData.workerYield;
                    this.workersService.updateResourceWorker(resourceWorkerData.resourceId, resourceWorkerData.workerCount);
                }
                if (worker.freeWorkers < 0) {
                    throw new Error('Invalid worker settings.');
                }
            }
            this.autosaveInterval = saveData.autosaveInterval;
        }
        catch (error) {
            this.snackbar.open("Error loading save data: " + error, '', { duration: 5000 });
            this.importSave(backupSave);
            console.error(error);
        }
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_4__["UpgradesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/store/store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/store/store.service.ts ***!
  \*************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreService = /** @class */ (function () {
    function StoreService(resourcesService, messagesService) {
        this.resourcesService = resourcesService;
        this.messagesService = messagesService;
    }
    StoreService.prototype.sellResource = function (id, amount) {
        if (!this.canSellResource(id, amount)) {
            return;
        }
        var resource = this.resourcesService.getResource(id);
        if (amount === -1) {
            amount = resource.amount;
        }
        this.resourcesService.addResourceAmount(resource.id, -amount);
        this.resourcesService.addResourceAmount(0, amount * resource.sellsFor);
    };
    StoreService.prototype.canSellResource = function (id, amount) {
        var resource = this.resourcesService.getResource(id);
        if (amount === -1) {
            return resource.sellable && resource.amount > 0;
        }
        return resource.sellable && resource.amount - amount >= 0;
    };
    StoreService.prototype.resourcesOfType = function (resourceType, filterBySellable, filterByAccessible) {
        var resources = this.resourcesService.resources.filter(function (resource) { return resource.resourceType === resourceType; });
        if (filterBySellable) {
            resources = resources.filter(function (resource) { return resource.sellable; });
        }
        if (filterByAccessible) {
            resources = resources.filter(function (resource) { return resource.resourceAccessible; });
        }
        return resources;
    };
    StoreService.prototype.log = function (message) {
        this.messagesService.add("ResourcesService: " + message);
    };
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/services/tooltip/tooltip.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/tooltip/tooltip.service.ts ***!
  \*****************************************************/
/*! exports provided: TooltipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipService", function() { return TooltipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/upgrade */ "./src/app/objects/upgrade.ts");
/* harmony import */ var _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TooltipService = /** @class */ (function () {
    function TooltipService(resourcesService, upgradesService, workersService) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.workersService = workersService;
    }
    TooltipService.prototype.getResourceTooltip = function (resourceId) {
        var resource = this.resourcesService.getResource(resourceId);
        var worker = this.workersService.getResourceWorker(resourceId);
        var tooltip = resource.resourceDescription + ".";
        if (resourceId === 0) {
            return tooltip;
        }
        var neededUpgrades = this.upgradesService.upgradesOfVariable(_objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"].Harvestability, false, true, false);
        neededUpgrades = neededUpgrades.filter(function (upgrade) { return upgrade.upgradeEffects.some(function (ue) {
            return (ue.resourceType === resource.resourceType || ue.resourceId === resourceId)
                && ue.upgradeVariable === _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"].Harvestability;
        }); });
        if (neededUpgrades.length) {
            tooltip += '\nNeeded Upgrades:';
            for (var _i = 0, neededUpgrades_1 = neededUpgrades; _i < neededUpgrades_1.length; _i++) {
                var neededUpgrade = neededUpgrades_1[_i];
                tooltip += " " + neededUpgrade.name + ",";
            }
            tooltip = tooltip.substring(0, tooltip.length - 1);
            tooltip += '.';
        }
        if (resource.resourceConsumes.length) {
            tooltip += '\nResources required:';
            for (var _a = 0, _b = resource.resourceConsumes; _a < _b.length; _a++) {
                var resourceConsume = _b[_a];
                tooltip += " " + this.resourcesService.getResource(resourceConsume.resourceId).name + ": " + resourceConsume.cost + ",";
            }
            tooltip = tooltip.substring(0, tooltip.length - 1);
            tooltip += '.';
        }
        tooltip += "\n" + Math.floor(100 * resource.harvestYield / resource.harvestMilliseconds * 1000) / 100 + " harvested per second;" +
            (" " + Math.floor(100 * worker.workerYield * worker.workerCount) / 100 + " per second from workers.");
        return tooltip;
    };
    TooltipService.prototype.getWorkerTooltip = function (resourceId) {
        var resource = this.resourcesService.getResource(resourceId);
        var resourceWorker = this.workersService.getResourceWorker(resourceId);
        return resource.workerVerb + " " + resourceWorker.workerYield + " " +
            ("" + resource.workerNoun + (resourceWorker.workerYield === 1 ? '' : 's') + " per second.");
    };
    TooltipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__["UpgradesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_4__["WorkersService"]])
    ], TooltipService);
    return TooltipService;
}());



/***/ }),

/***/ "./src/app/services/upgrades/upgrades.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/upgrades/upgrades.service.ts ***!
  \*******************************************************/
/*! exports provided: UpgradesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradesService", function() { return UpgradesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/upgrade */ "./src/app/objects/upgrade.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var baseUpgrades = __webpack_require__(/*! ../../../assets/json/upgrades.json */ "./src/assets/json/upgrades.json");
var UpgradesService = /** @class */ (function () {
    function UpgradesService(resourcesService, messagesService) {
        this.resourcesService = resourcesService;
        this.messagesService = messagesService;
        this.upgrades = baseUpgrades;
    }
    UpgradesService.prototype.getUpgrade = function (id) {
        return this.upgrades.find(function (upgrade) { return upgrade.id === id; });
    };
    UpgradesService.prototype.purchaseUpgrade = function (id) {
        var upgrade = this.getUpgrade(id);
        if (upgrade.purchased || !this.canAffordUpgrade(id)) {
            return;
        }
        for (var _i = 0, _a = upgrade.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.addResourceAmount(resourceCost.resourceId, -resourceCost.resourceCost);
        }
        for (var _b = 0, _c = upgrade.upgradeEffects; _b < _c.length; _b++) {
            var upgradeEffect = _c[_b];
            var resourcesToUpgrade = [this.resourcesService.getResource(upgradeEffect.resourceId)];
            if (upgradeEffect.upgradeIsForWholeType) {
                resourcesToUpgrade = this.resourcesService.resourcesOfType(upgradeEffect.resourceType, false, false);
            }
            for (var _d = 0, resourcesToUpgrade_1 = resourcesToUpgrade; _d < resourcesToUpgrade_1.length; _d++) {
                var resourceToUpgrade = resourcesToUpgrade_1[_d];
                switch (upgradeEffect.upgradeVariable) {
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].Harvestability: {
                        resourceToUpgrade.harvestable = !!upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].HarvestYield: {
                        resourceToUpgrade.harvestYield *= upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].HarvestMilliseconds: {
                        resourceToUpgrade.harvestMilliseconds *= upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].Workable: {
                        resourceToUpgrade.worker.workable = !!upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].WorkerYield: {
                        resourceToUpgrade.workerYield *= upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].WorkerCost: {
                        resourceToUpgrade.worker.cost *= upgradeEffect.upgradeFactor;
                        break;
                    }
                }
            }
        }
        upgrade.purchased = true;
    };
    UpgradesService.prototype.canAffordUpgrade = function (id) {
        for (var _i = 0, _a = this.getUpgrade(id).resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            if (this.resourcesService.getResource(resourceCost.resourceId).amount < resourceCost.resourceCost) {
                return false;
            }
        }
        return true;
    };
    UpgradesService.prototype.upgradesOfType = function (upgradeType, filterByPurchased, filterByUnpurchased, filterByAccessible) {
        var _this = this;
        var upgrades = this.upgrades.filter(function (upgrade) { return upgrade.upgradeType === upgradeType; });
        if (filterByPurchased) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.purchased; });
        }
        if (filterByUnpurchased) {
            upgrades = upgrades.filter(function (upgrade) { return !upgrade.purchased; });
        }
        if (filterByAccessible) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.resourceCosts.every(function (rc) { return _this.resourcesService.getResource(rc.resourceId).resourceAccessible; }); });
        }
        return upgrades;
    };
    UpgradesService.prototype.upgradesOfVariable = function (upgradeVariable, filterByPurchased, filterByUnpurchased, filterByAccessible) {
        var _this = this;
        var upgrades = this.upgrades.filter(function (upgrade) { return upgrade.upgradeEffects.some(function (ue) { return ue.upgradeVariable === upgradeVariable; }); });
        if (filterByPurchased) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.purchased; });
        }
        if (filterByUnpurchased) {
            upgrades = upgrades.filter(function (upgrade) { return !upgrade.purchased; });
        }
        if (filterByAccessible) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.resourceCosts.every(function (rc) { return _this.resourcesService.getResource(rc.resourceId).resourceAccessible; }); });
        }
        return upgrades;
    };
    UpgradesService.prototype.getUpgradeTypeString = function (id) {
        return _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeType"][this.getUpgrade(id).upgradeType];
    };
    UpgradesService.prototype.getUpgradeVariableString = function (upgradeId, effectId) {
        return _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"][this.getUpgrade(upgradeId).upgradeEffects[effectId].upgradeVariable];
    };
    UpgradesService.prototype.log = function (message) {
        this.messagesService.add("UpgradesService: " + message);
    };
    UpgradesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
    ], UpgradesService);
    return UpgradesService;
}());



/***/ }),

/***/ "./src/app/services/workers/workers.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/workers/workers.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkersService", function() { return WorkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var baseWorkers = __webpack_require__(/*! ../../../assets/json/workers.json */ "./src/assets/json/workers.json");
var WorkersService = /** @class */ (function () {
    function WorkersService(resourcesService, messagesService) {
        this.resourcesService = resourcesService;
        this.messagesService = messagesService;
        this.workers = baseWorkers;
    }
    WorkersService.prototype.getWorkers = function () {
        return this.workers;
    };
    WorkersService.prototype.getWorker = function (idOrResourceType) {
        return typeof idOrResourceType === 'number' ?
            this.workers[idOrResourceType] :
            this.workers.find(function (worker) { return worker.resourceType === idOrResourceType; });
    };
    WorkersService.prototype.getResourceWorker = function (resourceId) {
        var resourceType = this.resourcesService.getResource(resourceId).resourceType;
        var worker = this.getWorker(resourceType);
        if (worker === undefined) {
            return null;
        }
        return worker.workersByResource.find(function (rw) { return rw.resourceId === resourceId; });
    };
    WorkersService.prototype.canAfford = function (id) {
        var worker = this.getWorker(id);
        return worker.cost <= this.resourcesService.getResource(0).amount;
    };
    WorkersService.prototype.processWorkers = function () {
        for (var _i = 0, _a = this.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            for (var _b = 0, _c = worker.workersByResource; _b < _c.length; _b++) {
                var resourceWorker = _c[_b];
                if (resourceWorker.workerCount === 0) {
                    continue;
                }
                this.resourcesService.addResourceAmount(resourceWorker.resourceId, resourceWorker.workerYield * resourceWorker.workerCount);
            }
        }
    };
    WorkersService.prototype.updateResourceWorker = function (id, newWorkerCount) {
        var resource = this.resourcesService.getResource(id);
        var worker = this.getWorker(resource.resourceType);
        var resourceWorker = worker.workersByResource.find(function (ws) { return ws.resourceId === resource.id; });
        if (!resourceWorker.sliderSettingValid) {
            return;
        }
        var newFreeWorkers = worker.freeWorkers + resourceWorker.workerCount - newWorkerCount;
        worker.freeWorkers = newFreeWorkers;
        resourceWorker.workerCount = newWorkerCount;
    };
    WorkersService.prototype.hireWorker = function (id) {
        if (!this.canAfford(id)) {
            return;
        }
        var worker = this.getWorker(id);
        this.resourcesService.addResourceAmount(0, -worker.cost);
        worker.cost *= 1.01;
        worker.workerCount++;
        worker.freeWorkers++;
    };
    WorkersService.prototype.log = function (message) {
        this.messagesService.add("WorkersService: " + message);
    };
    WorkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], WorkersService);
    return WorkersService;
}());



/***/ }),

/***/ "./src/assets/json/resources.json":
/*!****************************************!*\
  !*** ./src/assets/json/resources.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, default */
/***/ (function(module) {

module.exports = [{"id":0,"name":"gold","resourceType":"CURRENCY","iconPath":"../../../assets/sprites/coin.png","amount":0,"resourceConsumes":[],"harvestable":false,"sellable":false,"resourceDescription":"Shiny and valuable","workerVerb":"","workerNoun":"gold","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":false,"workerCount":0,"cost":0},"harvestYield":0,"harvestMilliseconds":0,"workerYield":0,"sellsFor":0},{"id":1,"name":"oak","resourceType":"WOOD","iconPath":"../../../assets/sprites/oak.png","amount":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":5,"resourceDescription":"Sturdy oak logs","workerVerb":"Fells","workerNoun":"oak tree","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":50}},{"id":2,"name":"copper ore","resourceType":"METAL","iconPath":"../../../assets/sprites/copper_ore.png","amount":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Can be forged into bronze along with tin","workerVerb":"Mines","workerNoun":"copper ore","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":3,"name":"tin ore","resourceType":"METAL","iconPath":"../../../assets/sprites/tin_ore.png","amount":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Can be forged into bronze along with copper","workerVerb":"Mines","workerNoun":"tin ore","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":4,"name":"bronze ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/bronze_ingot.png","amount":0,"resourceConsumes":[{"resourceId":2,"cost":1},{"resourceId":3,"cost":1}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Somewhat brittle ingots","workerVerb":"Forges","workerNoun":"bronze ingot","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":false,"workerCount":0,"cost":100}},{"id":5,"name":"iron ore","resourceType":"METAL","iconPath":"../../../assets/sprites/iron_ore.png","amount":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Unrefined extracts of iron","workerVerb":"Mines","workerNoun":"iron ore","resourceAccessible":false,"resourceTier":2,"previousTier":1,"worker":{"workable":false,"workerCount":0,"cost":150}},{"id":6,"name":"iron ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/iron_ingot.png","amount":0,"resourceConsumes":[{"resourceId":5,"cost":1}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Dim but sturdy ingots","workerVerb":"Forges","workerNoun":"iron ingot","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":false,"workerCount":0,"cost":250}},{"id":7,"name":"pine","resourceType":"WOOD","iconPath":"../../../assets/sprites/pine.png","amount":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Strong pine logs","workerVerb":"Fells","workerNoun":"pine tree","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":8,"name":"birch","resourceType":"WOOD","iconPath":"../../../assets/sprites/birch.png","amount":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Sometimes it feels like it's watching you..","workerVerb":"Fells","workerNoun":"birch tree","resourceAccessible":false,"resourceTier":2,"previousTier":1,"worker":{"workable":true,"workerCount":0,"cost":150}},{"id":9,"name":"eucalyptus","resourceType":"WOOD","iconPath":"../../../assets/sprites/eucalyptus.png","amount":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":20,"resourceDescription":"Logs as strong as their name is long","workerVerb":"Fells","workerNoun":"eucalyptus tree","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":true,"workerCount":0,"cost":200}},{"id":10,"name":"steel ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/steel_ingot.png","amount":0,"resourceConsumes":[{"resourceId":6,"cost":2}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"Refined and purified iron","workerVerb":"Forges","workerNoun":"steel ingot","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":350}},{"id":11,"name":"gold ore","resourceType":"METAL","iconPath":"../../../assets/sprites/gold_ore.png","amount":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Unrefined extracts of gold","workerVerb":"Mines","workerNoun":"gold","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":false,"workerCount":0,"cost":150}},{"id":12,"name":"gold ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/gold_ingot.png","amount":0,"resourceConsumes":[{"resourceId":11,"cost":1}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":60,"resourceDescription":"Highly valuable and malleable.","workerVerb":"Forges","workerNoun":"gold ingot","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":13,"name":"Stone","resourceType":"METAL","iconPath":"../../../assets/sprites/stone.png","amount":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":5,"resourceDescription":"Hard and sturdy, well suitied to basic construction projects.","workerVerb":"Mines","workerNoun":"stone","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":14,"name":"Marble","resourceType":"METAL","amount":0,"iconPath":"../../../assets/sprites/marble.png","resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":45,"resourceDescription":"Beautiful, crystalline rock. Highly valued for construction projects","workerVerb":"Mines","workerNoun":"marble","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":80}}];

/***/ }),

/***/ "./src/assets/json/tileTypes.json":
/*!****************************************!*\
  !*** ./src/assets/json/tileTypes.json ***!
  \****************************************/
/*! exports provided: mapTiles, buildingTiles, default */
/***/ (function(module) {

module.exports = {"mapTiles":{"GRASS":{"tileType":"GRASS","name":"Grass","spritePath":"../../../assets/sprites/grass.png","walkable":true},"WATER":{"tileType":"WATER","name":"Water","spritePath":"../../../assets/sprites/water.png","walkable":false},"MOUNTAIN":{"tileType":"MOUNTAIN","name":"Mountain","spritePath":"../../../assets/sprites/mountain.png","walkable":false}},"buildingTiles":{"WALL":{"tileType":"WALL","spritePath":"../../../assets/sprites/wall.png","name":"Wall","description":"Keeps invaders out.","resourceCosts":[{"resourceId":1,"resourceCost":20}],"buildableSurfaces":["GRASS"]}}};

/***/ }),

/***/ "./src/assets/json/upgrades.json":
/*!***************************************!*\
  !*** ./src/assets/json/upgrades.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = [{"id":0,"upgradeType":"RESOURCE","name":"Iron Axe","description":"A stronger, more durable axe. Harvests 20% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceId":1,"resourceCost":10},{"resourceId":6,"resourceCost":25}],"purchased":false},{"id":1,"upgradeType":"RESOURCE","name":"Twin Axes","description":"Double the axes, double the deforestation! Reduces wood harvesting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceId":1,"resourceCost":15},{"resourceId":6,"resourceCost":35}],"purchased":false},{"id":2,"upgradeType":"RESOURCE","name":"Pickaxe","description":"A basic pickaxe. Not much, but it gets the job done. Allows harvesting of tin, copper, and stone.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":13,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":0,"resourceCost":50}],"purchased":false},{"id":3,"upgradeType":"WORKER","name":"Lumberjack's Guild","description":"Form a guild to help your workers hone their skills. Workers harvest 15% more wood.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15}],"resourceCosts":[{"resourceId":1,"resourceCost":20}],"purchased":false},{"id":4,"upgradeType":"RESOURCE","name":"Cracked Forge","description":"An old, weary forge. Bronze ingots are probably all this thing is capable of producing.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":4,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":0,"resourceCost":150}],"purchased":false},{"id":5,"upgradeType":"RESOURCE","name":"Bronze Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":11,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":4,"resourceCost":5},{"resourceId":7,"resourceCost":15}],"purchased":false},{"id":6,"upgradeType":"RESOURCE","name":"Iron Pickaxe","description":"A highly reinforced pickaxe. Mines ores at a much higher rate.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":11,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceId":6,"resourceCost":20},{"resourceId":8,"resourceCost":30}],"purchased":false},{"id":7,"upgradeType":"RESOURCE","name":"Stone Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":6,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":12,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":13,"resourceCost":50},{"resourceId":7,"resourceCost":75},{"resourceId":4,"resourceCost":20}],"purchased":false},{"id":8,"upgradeType":"RESOURCE","name":"Iron Pickaxe","description":"A stronger, more durable pickaxe. Harvests 20% more metal per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":2,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":3,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":5,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceId":7,"resourceCost":100},{"resourceId":6,"resourceCost":250}],"purchased":false}];

/***/ }),

/***/ "./src/assets/json/workers.json":
/*!**************************************!*\
  !*** ./src/assets/json/workers.json ***!
  \**************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"id":0,"cost":500,"resourceType":"WOOD","workerCount":0,"freeWorkers":0,"workersByResource":[{"resourceId":1,"workable":true,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":7,"workable":true,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":8,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":9,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true}]},{"id":1,"cost":2000,"resourceType":"METAL","workerCount":0,"freeWorkers":0,"workersByResource":[{"resourceId":2,"workable":true,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":3,"workable":true,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":4,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":5,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":6,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":10,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":11,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":12,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":13,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":14,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true}]}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rathe\clicker-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map