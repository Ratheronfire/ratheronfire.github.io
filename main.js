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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.main-pane {\r\n  float: left;\r\n}\r\n.tab-group {\r\n  margin-left: 15px;\r\n}\r\n.debug-pane {\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Clicker Game</h1>\n\n<app-clicker-main class=\"main-pane\"></app-clicker-main>\n\n<mat-tab-group class=\"tab-group\" dynamicHeight [matBadge]=\"affordableUpgradeCount\" [matBadgeHidden]=\"affordableUpgradeCount <= 0\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n  <mat-tab label=\"Explore\">\n    <app-map></app-map>\n  </mat-tab>\n  <mat-tab label=\"Workers\">\n    <app-workers></app-workers>\n  </mat-tab>\n  <mat-tab label=\"Store\">\n    <app-store></app-store>\n  </mat-tab>\n  <mat-tab label=\"Upgrades\">\n    <app-upgrades></app-upgrades>\n  </mat-tab>\n  <mat-tab label=\"Settings\">\n    <app-settings></app-settings>\n  </mat-tab>\n</mat-tab-group>\n\n<mat-card class=\"debug-pane\" *ngIf=\"debugMode\">\n  <h1>Admin Dashboard</h1>\n  <app-admin-debug></app-admin-debug>\n  <app-messages></app-messages>\n</mat-card>\n"

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
/* harmony import */ var _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(upgradesService) {
        this.upgradesService = upgradesService;
        this.title = 'clicker-game';
        this.debugMode = false;
    }
    Object.defineProperty(AppComponent.prototype, "affordableUpgradeCount", {
        get: function () {
            var _this = this;
            var upgrades = this.upgradesService.getUpgrades(false, true, true);
            var affordableUpgrades = upgrades.filter(function (upgrade) { return _this.upgradesService.canAffordUpgrade(upgrade.id); });
            return affordableUpgrades.length;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_1__["UpgradesService"]])
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
/* harmony import */ var _durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @durwella/zoomable-canvas */ "./node_modules/@durwella/zoomable-canvas/index.js");
/* harmony import */ var _durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-import/material-import.module */ "./src/app/material-import/material-import.module.ts");
/* harmony import */ var src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clicker-main/clicker-main.component */ "./src/app/components/clicker-main/clicker-main.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/workers/workers.component */ "./src/app/components/workers/workers.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/upgrades/upgrades.component */ "./src/app/components/upgrades/upgrades.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin-debug/admin-debug.component */ "./src/app/components/admin-debug/admin-debug.component.ts");
/* harmony import */ var _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/resource-dialog/resource-dialog.component */ "./src/app/components/resource-dialog/resource-dialog.component.ts");
/* harmony import */ var _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/upgrade-dialog/upgrade-dialog.component */ "./src/app/components/upgrade-dialog/upgrade-dialog.component.ts");
/* harmony import */ var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/save-dialog/save-dialog.component */ "./src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var _directives_touch_touch_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/touch/touch.directive */ "./src/app/directives/touch/touch.directive.ts");
/* harmony import */ var _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/crop/crop.directive */ "./src/app/directives/crop/crop.directive.ts");
/* harmony import */ var _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/map/map.directive */ "./src/app/directives/map/map.directive.ts");
/* harmony import */ var _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/no-scroll/no-scroll.directive */ "./src/app/directives/no-scroll/no-scroll.directive.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4__["ZoomableCanvasComponent"],
                _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_8__["ClickerMainComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
                _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_10__["WorkersComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"],
                _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_12__["UpgradesComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"],
                _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_15__["AdminDebugComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ResourceDialogComponent"],
                _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_17__["UpgradeDialogComponent"],
                _directives_touch_touch_directive__WEBPACK_IMPORTED_MODULE_19__["TouchDirective"],
                _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_20__["CropDirective"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SaveDialogComponent"],
                _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_21__["MapDirective"],
                _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_22__["NoScrollDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_5__["MaterialImportModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]
            ],
            entryComponents: [
                _components_resource_dialog_resource_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ResourceDialogComponent"],
                _components_upgrade_dialog_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_17__["UpgradeDialogComponent"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SaveDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<h2>Debug</h2>\n\n<mat-checkbox class=\"filterAccessible\" checked=\"true\" [(ngModel)]=\"adminService.filterAccessible\">Hide Inaccessible Upgrades</mat-checkbox>\n<br />\n<mat-checkbox class=\"filterAccessible\" checked=\"false\" [(ngModel)]=\"adminService.editMode\">Edit Mode</mat-checkbox>\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<mat-select [(ngModel)]=\"selectedResource\">\n  <mat-option *ngFor=\"let resource of resourcesService.resources\" [value]=\"resource\">\n    {{resource.name | titlecase}}\n  </mat-option>\n</mat-select>\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<mat-form-field class=\"example-full-width\">\n  <input matInput [(ngModel)]=\"amount\">\n</mat-form-field>\n<button mat-raised-button (click)=\"addResourceAmount()\">Add to all resources</button>\n<div *ngIf=\"selectedResource !== undefined\">\n  <button mat-raised-button (click)=\"addResourceAmount(selectedResource)\">Add to {{selectedResource.name | titlecase}}</button>\n  <button mat-raised-button color=\"accent\" (click)=\"stringifyResource(selectedResource)\">Export {{selectedResource.name | titlecase}} To JSON</button>\n</div>\n\n<button mat-raised-button color=\"primary\" (click)=\"openResourceDialog()\">New Resource</button>\n<button mat-raised-button color=\"primary\" (click)=\"openUpgradeDialog()\">New Upgrade</button>\n\n<mat-divider></mat-divider>\n<br />\n<br />\n\n<button mat-raised-button color=\"accent\" (click)=\"stringifyResources()\">Export Resources To JSON</button>\n<button mat-raised-button color=\"accent\" (click)=\"stringifyWorkers()\">Export Workers To JSON</button>\n<button mat-raised-button color=\"accent\" (click)=\"stringifyUpgrades()\">Export Upgrades To JSON</button>\n"

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
    AdminDebugComponent.prototype.addResourceAmount = function (selectedResource) {
        if (selectedResource === undefined) {
            for (var _i = 0, _a = this.resourcesService.resources; _i < _a.length; _i++) {
                var resource = _a[_i];
                this.resourcesService.addResourceAmount(resource.id, +this.amount);
            }
            return;
        }
        this.resourcesService.addResourceAmount(+selectedResource.id, +this.amount);
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
        var resourceJson = JSON.stringify(resource);
        alert(resourceJson);
        console.log(resourceJson);
    };
    AdminDebugComponent.prototype.stringifyResources = function () {
        for (var _i = 0, _a = this.resourcesService.resources; _i < _a.length; _i++) {
            var resource = _a[_i];
            this.prepareResourceForJson(resource);
        }
        var resourcesJson = JSON.stringify(this.resourcesService.resources);
        alert(resourcesJson);
        console.log(resourcesJson);
    };
    AdminDebugComponent.prototype.stringifyWorkers = function () {
        for (var _i = 0, _a = this.workersService.workers; _i < _a.length; _i++) {
            var worker = _a[_i];
            this.prepareWorkerForJson(worker);
        }
        var workersJson = JSON.stringify(this.workersService.workers);
        alert(workersJson);
        console.log(workersJson);
    };
    AdminDebugComponent.prototype.stringifyUpgrades = function () {
        var upgradesJson = JSON.stringify(this.upgradesService.upgrades);
        alert(upgradesJson);
        console.log(upgradesJson);
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

module.exports = "/* ClickerMainComponent's private CSS styles */\r\n.resources {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.resources mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.resources mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.resources mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.resources .resource-button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.resources .resource-button:hover {\r\n  left: .1em;\r\n}\r\n.resources .resource-button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.resources .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.button-container {\r\n  position: relative;\r\n}\r\n.travelling-count {\r\n  position: absolute;\r\n  top: 22px;\r\n  right: 3px;\r\n}\r\n.resource-button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.harvest-progress {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n\r\n  height: 100%;\r\n  top: 0px;\r\n\r\n  position: absolute;\r\n  opacity: 0.5;\r\n}\r\n.resource-img {\r\n  position: absolute;\r\n\r\n  top: 0;\r\n  left: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"resources noselect\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of resourceTypes | enumToArray\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{resourceType}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div class='button-container' *ngFor=\"let resource of resourcesOfType(resourceType, adminService.filterAccessible)\">\n        <button mat-raised-button class=\"resource-button\" color=\"accent\" [disabled]=\"!canHarvest(resource.id)\" [id]=\"resource.id\"\n          (click)='startHarvesting(resource.id)' matTooltip=\"{{getTooltipMessage(resource.id)}}\" matTooltipPosition=\"right\">\n          <mat-card-title>{{resource.name | titlecase }}</mat-card-title>\n          <mat-card-subtitle>{{resource.amount | number:'1.0-0'}}</mat-card-subtitle>\n          <mat-progress-bar [class.hidden]=\"!resource.harvesting\" class=\"harvest-progress\" [mode]=\"progressBarMode\" [value]=\"resource.progressBarValue\"></mat-progress-bar>\n          <img class=\"resource-img\" src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\" *ngIf=\"resource.iconPath !== ''\">\n          <div class='travelling-count' *ngIf=\"resource.amountTravelling > 0\">{{resource.amountTravelling}} Travelling</div>\n        </button>\n\n        <div *ngIf=\"adminService.editMode\">\n          <br />\n          <button (click)=\"editResource(resource.id)\">Edit {{resource.name | titlecase}}</button>\n        </div>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

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
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
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
    function ClickerMainComponent(clickerMainService, resourcesService, workersService, tooltipService, mapService, adminService) {
        this.clickerMainService = clickerMainService;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.tooltipService = tooltipService;
        this.mapService = mapService;
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
    ClickerMainComponent.prototype.canHarvest = function (id) {
        return this.resourcesService.canHarvest(id) && this.mapService.resourceTileUsable(id);
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
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"]])
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

module.exports = ".building-list {\r\n  display: flex;\r\n  max-width: 1000px;\r\n  overflow-x: scroll;\r\n  height: 230px;\r\n}\r\n\r\n.resource-list {\r\n  text-align: center;\r\n}\r\n\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\nbutton {\r\n  height: 180px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas appNoScroll appMap width=\"960\" height=\"750\"></canvas>\r\n<br />\r\n<br />\r\n\r\n<mat-checkbox [(ngModel)]=\"deleteMode\" color=\"warn\">Delete Buildings</mat-checkbox>\r\n<div class=\"building-list\">\r\n  <div *ngFor=\"let buildingTile of getBuildingTileArray(true)\">\r\n    <button mat-raised-button [color]=\"selectedBuilding === buildingTile && !deleteMode ? 'accent' : ''\" (click)=\"selectBuilding(buildingTile)\">\r\n      <mat-card-title>{{buildingTile.name}}</mat-card-title>\r\n      <mat-card-subtitle>{{buildingTile.description}}</mat-card-subtitle>\r\n      <mat-card-content>\r\n        <h3>Costs</h3>\r\n        <div class=\"resource-list\">\r\n          <b><mat-icon *ngIf=\"canAffordBuilding(buildingTile.tileType)\" color=\"primary\">check</mat-icon>\r\n          </b>\r\n          <div *ngFor=\"let resourceCost of buildingTile.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceId).name | titlecase}}\" matTooltipPosition=\"below\">\r\n            <img src=\"{{getResource(resourceCost.resourceId).iconPath}}\" alt=\"{{getResource(resourceCost.resourceId).name}}\"> {{resourceCost.resourceCost}}\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

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
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.ngAfterViewInit = function () {
    };
    MapComponent.prototype.selectBuilding = function (buildingTile) {
        if (this.selectedBuilding === buildingTile) {
            this.selectedBuilding = undefined;
        }
        else {
            this.selectedBuilding = buildingTile;
        }
    };
    MapComponent.prototype.canAffordBuilding = function (buildingType) {
        return this.mapService.canAffordBuilding(this.buildingTiles[buildingType]);
    };
    MapComponent.prototype.createBuilding = function (tile, buildingType) {
        var buildingCreated = this.mapService.createBuilding(tile, buildingType);
    };
    MapComponent.prototype.clearBuilding = function (tile) {
        this.mapService.clearBuilding(tile);
    };
    Object.defineProperty(MapComponent.prototype, "buildingTiles", {
        get: function () {
            return this.mapService.buildingTiles;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.getBuildingTileArray = function (filterByPlaceable) {
        var tiles = this.mapService.buildingTileArray;
        if (filterByPlaceable) {
            tiles = tiles.filter(function (tile) { return tile.placeable; });
        }
        return tiles;
    };
    MapComponent.prototype.getResource = function (resourceId) {
        return this.resourcesService.getResource(resourceId);
    };
    Object.defineProperty(MapComponent.prototype, "deleteMode", {
        get: function () {
            return this.mapService.deleteMode;
        },
        set: function (value) {
            this.mapService.deleteMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "selectedBuilding", {
        get: function () {
            return this.mapService.selectedBuilding;
        },
        set: function (value) {
            this.mapService.selectedBuilding = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "rowCount", {
        get: function () {
            return this.mapService.getRowCount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "columnCount", {
        get: function () {
            return this.mapService.getColumnCount();
        },
        enumerable: true,
        configurable: true
    });
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
            amountTravelling: 0,
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
            sliderSetting: 0,
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

/***/ "./src/app/components/save-dialog/save-dialog.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/save-dialog/save-dialog.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/save-dialog/save-dialog.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/save-dialog/save-dialog.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!exportMode\">\n  Paste Save\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Save Data\" [(ngModel)]=\"saveData\" (submit)=\"exportData()\">\n  </mat-form-field>\n\n  <div>\n    <button mat-raised-button color=\"accent\" (click)=\"exportData()\">Load</button>\n    <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\n  </div>\n</div>\n\n<div *ngIf=\"exportMode\" style=\"word-wrap: break-word\">\n  <textarea readonly id=\"saveData\" class=\"full-width\">{{saveData}}</textarea>\n  <div>\n    <button mat-raised-button class=\"copy-button\" color=\"accent\" data-clipboard-action=\"copy\" data-clipboard-target=\"#saveData\">Copy to Clipboard</button>\n    <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/save-dialog/save-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/save-dialog/save-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: SaveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveDialogComponent", function() { return SaveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
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



var SaveDialogComponent = /** @class */ (function () {
    function SaveDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.exportMode = false;
    }
    SaveDialogComponent.prototype.ngOnInit = function () {
        if (this.data.saveData !== undefined) {
            this.saveData = this.data.saveData;
            this.exportMode = true;
            this.clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_2__('.copy-button');
        }
    };
    SaveDialogComponent.prototype.exportData = function () {
        this.dialogRef.close(this.saveData);
    };
    SaveDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SaveDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-save-dialog',
            template: __webpack_require__(/*! ./save-dialog.component.html */ "./src/app/components/save-dialog/save-dialog.component.html"),
            styles: [__webpack_require__(/*! ./save-dialog.component.css */ "./src/app/components/save-dialog/save-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], SaveDialogComponent);
    return SaveDialogComponent;
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

module.exports = "<mat-accordion>\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">save</mat-icon>\n        Save/Load\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <mat-select placeholder=\"Autosave Interval (Minutes)\" [(value)]=\"autosaveInterval\" (valueChange)=\"setAutosave()\">\n        <mat-option [value]=\"-1\">Disable</mat-option>\n        <mat-option [value]=\"60000\">1</mat-option>\n        <mat-option [value]=\"900000\">15</mat-option>\n        <mat-option [value]=\"1800000\">30</mat-option>\n        <mat-option [value]=\"3600000\">60</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" (click)=\"saveGame()\">Save</button>\n    <button mat-raised-button color=\"warn\" (click)=\"deleteGame()\">Delete Save</button>\n\n    <button mat-raised-button (click)=\"exportSave()\">Export Save</button>\n    <button mat-raised-button (click)=\"importSave()\">Import Save</button>\n  </mat-expansion-panel>\n\n</mat-accordion>\n"

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
    SettingsComponent.prototype.deleteGame = function () {
        if (confirm('Are you sure you want to delete your save?')) {
            this.settingsService.deleteSave();
        }
    };
    SettingsComponent.prototype.exportSave = function () {
        this.settingsService.openSaveDialog(this.settingsService.exportSave());
    };
    SettingsComponent.prototype.importSave = function () {
        this.settingsService.openSaveDialog();
        // this.settingsService.importSave(prompt('Paste Save Data'));
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

module.exports = "<mat-vertical-stepper>\n  <mat-step *ngIf=\"!editMode\">\n    <ng-template matStepLabel>Select Upgrade Template</ng-template>\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"oldUpgradeId\" [compareWith]=\"compareFn\" (selectionChange)=\"populateUpgrade()\">\n        <mat-option placeholder=\"Upgrade Type\" *ngFor=\"let upgrade of upgradesService.upgrades\" value=\"{{upgrade.id}}\">\n          {{upgrade.name | titlecase}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Upgrade Details</ng-template>\n    <mat-form-field class=\"full-width\">\n      <mat-select [(ngModel)]=\"upgrade.upgradeType\">\n        <mat-option placeholder=\"Upgrade Type\" *ngFor=\"let upgradeType of upgradeTypes | enumToArray\" value=\"{{upgradeTypes[upgradeType]}}\">\n          {{upgradeType}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Name\" [(ngModel)]=\"upgrade.name\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Description\" [(ngModel)]=\"upgrade.description\">\n    </mat-form-field>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Upgrade Effects</ng-template>\n\n    <button mat-raised-button color=\"accent\" (click)=\"newUpgradeEffect()\">Add New Upgrade Effect</button>\n    <div *ngFor=\"let upgradeEffect of upgrade.upgradeEffects\">\n      <mat-card>\n        <button class=\"inner-delete\" mat-raised-button color=\"warn\" (click)=\"removeUpgradeEffect(upgradeEffect)\">Remove Upgrade Effect</button>\n        <mat-checkbox [(ngModel)]=\"upgradeEffect.upgradeIsForWholeType\">Upgrade Is For Whole Type</mat-checkbox>\n\n        <div *ngIf=\"upgradeEffect.upgradeIsForWholeType\">\n          <mat-form-field class=\"full-width\">\n            <mat-select [(ngModel)]=\"upgradeEffect.resourceType\">\n              <mat-option placeholder=\"Resource Type\" *ngFor=\"let resourceType of resourceTypes | enumToArray\" value=\"{{resourceTypes[resourceType]}}\">\n                {{resourceType}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Max Tier\" [(ngModel)]=\"upgradeEffect.maxTier\">\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"!upgradeEffect.upgradeIsForWholeType\">\n          <mat-form-field class=\"full-width\">\n            <mat-select [(ngModel)]=\"upgradeEffect.resourceId\" [compareWith]=\"compareFn\">\n              <mat-option placeholder=\"Resource Type\" *ngFor=\"let resource of resourcesService.resources\" value=\"{{resource.id}}\">\n                {{resource.name | titlecase}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <mat-form-field class=\"full-width\">\n          <mat-select [(ngModel)]=\"upgradeEffect.upgradeVariable\">\n            <mat-option placeholder=\"Upgrade Variable\" *ngFor=\"let upgradeVariable of upgradeVariables | enumToArray\" value=\"{{upgradeVariables[upgradeVariable]}}\">\n              {{upgradeVariable}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div *ngIf=\"upgradeEffect.upgradeVariable === upgradeVariables.Harvestability || upgradeEffect.upgradeVariable === upgradeVariables.Workable\">\n          <mat-checkbox [(ngModel)]=\"upgradeEffect.upgradeFactor\">{{upgradeEffect.upgradeVariable | titlecase}}</mat-checkbox>\n        </div>\n        <div *ngIf=\"upgradeEffect.upgradeVariable !== upgradeVariables.Harvestability && upgradeEffect.upgradeVariable !== upgradeVariables.Workable\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Upgrade Factor\" [(ngModel)]=\"upgradeEffect.upgradeFactor\">\n          </mat-form-field>\n        </div>\n      </mat-card>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Set Resource Costs</ng-template>\n    <button mat-raised-button color=\"accent\" (click)=\"newResourceCost()\">Add New Resouce Cost</button>\n    <div *ngFor=\"let resourceCost of upgrade.resourceCosts\">\n      <mat-card>\n        <button class=\"inner-delete\" mat-raised-button color=\"warn\" (click)=\"removeResourceCost(resourceCost)\">Remove Resource Cost</button>\n        <mat-form-field class=\"full-width\">\n          <mat-select [(ngModel)]=\"resourceCost.resourceId\" [compareWith]=\"compareFn\">\n            <mat-option placeholder=\"Resource Type\" *ngFor=\"let resource of resourcesService.resources\" value=\"{{resource.id}}\">\n              {{resource.name | titlecase}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Resource Cost\" [(ngModel)]=\"resourceCost.resourceCost\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    {{upgrade.name}} configured.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-raised-button (click)=\"saveUpgrade()\">Save Upgrade</button>\n      <button mat-raised-button color=\"warn\" (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n"

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
            this.oldUpgradeId = this.data.upgradeId;
            this.populateUpgrade();
            this.upgrade.id = this.oldUpgradeId;
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
            if (upgradeEffect.maxTier) {
                upgradeEffect.maxTier = +upgradeEffect.maxTier;
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
            var oldIndex = this.upgradesService.upgrades.indexOf(existingUpgrade);
            this.upgradesService.upgrades[oldIndex] = this.upgrade;
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

module.exports = "/* UpgradesComponent's private CSS styles */\r\n.upgrades {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  /* width: 25em; */\r\n}\r\n.upgrades mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.upgrades mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.upgrades mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.upgrades button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.upgrades button:hover {\r\n  left: .1em;\r\n}\r\n.upgrades button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.upgrades .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.upgrades {\r\n  text-align: center;\r\n}\r\n.upgrade {\r\n  display: inline-block;\r\n  max-width: 300px;\r\n}\r\n.resource-list {\r\n  text-align: center;\r\n}\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox class=\"hidePurchased\" checked=\"true\" [(ngModel)]=\"hidePurchased\">Hide Purchased Upgrades</mat-checkbox>\n<br />\n<br />\n\n<div class=\"upgrades\">\n  <mat-card class=\"upgrade\" *ngFor=\"let upgrade of getUpgrades(false, hidePurchased, adminService.filterAccessible)\">\n    <button mat-raised-button color=\"accent\" [disabled]='upgrade.purchased || !canAffordUpgrade(upgrade.id)' (click)='purchaseUpgrade(upgrade.id)'>\n      <mat-card-title>\n        <b>\n          <mat-icon *ngIf=\"upgrade.purchased\" color=\"primary\">check</mat-icon>\n        </b>\n        {{upgrade.name}}\n      </mat-card-title>\n    </button>\n    <mat-card-subtitle>{{upgradesService.getUpgradeTypeString(upgrade.id)}}</mat-card-subtitle>\n    <mat-card-content>\n      {{upgrade.description}}\n      <div class=\"resource-list\">\n        <div *ngFor=\"let resourceCost of upgrade.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceId).name | titlecase}}\"\n          matTooltipPosition=\"below\">\n          <img src=\"{{getResource(resourceCost.resourceId).iconPath}}\" alt=\"{{getResource(resourceCost.resourceId).name}}\"> {{resourceCost.resourceCost}}\n        </div>\n      </div>\n    </mat-card-content>\n    <div *ngIf=\"adminService.editMode\">\n      <button (click)=\"editUpgrade(upgrade.id)\">Edit {{upgrade.name | titlecase}}</button>\n    </div>\n  </mat-card>\n</div>\n"

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
        this.hidePurchased = true;
    }
    UpgradesComponent.prototype.ngOnInit = function () {
    };
    UpgradesComponent.prototype.canAffordUpgrade = function (id) {
        return this.upgradesService.canAffordUpgrade(id);
    };
    UpgradesComponent.prototype.getUpgrades = function (filterByPurchased, filterByUnpurchased, filterByAccessible) {
        return this.upgradesService.getUpgrades(filterByPurchased, filterByUnpurchased, filterByAccessible);
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
    UpgradesComponent.prototype.getResource = function (resourceId) {
        return this.resourcesService.getResource(resourceId);
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

module.exports = "<ul class=\"workers\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let worker of getWorkers(true, true, true)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{worker.resourceType | titlecase}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <button mat-raised-button [color]=\"canAfford(worker.id) ? 'accent' : 'disabled'\" (click)=\"hireWorker(worker.id)\">\n        <mat-card-title>{{worker.workerCount}} Workers ({{worker.freeWorkers}} Idle)</mat-card-title>\n        <mat-card-subtitle>{{worker.cost | number}} Gold</mat-card-subtitle>\n      </button>\n\n      <div *ngFor=\"let resourceWorker of getAccessibleResourceWorkers(worker)\">\n        <mat-card *ngIf=\"resourceWorker.workable || !adminService.filterAccessible\" matTooltip=\"{{getTooltipMessage(resourceWorker.resourceId)}}\"\n          matTooltipPosition=\"right\">\n          <mat-card-title>{{resourcesService.getResource(resourceWorker.resourceId).name | titlecase}}</mat-card-title>\n          <mat-card-subtitle>{{resourceWorker.workerCount}} Workers</mat-card-subtitle>\n          <mat-slider [color]=\"resourceWorker.sliderSettingValid ? 'accent' : 'warn'\" [id]=\"resourceWorker.resourceId\" [max]=\"worker.workerCount\"\n             [tickInterval]=\"1\" [thumbLabel]=\"true\" [(ngModel)]=\"resourceWorker.sliderSetting\" (input)=\"checkSliderValue($event)\" (change)=\"updateResourceWorker($event)\">\n          </mat-slider>\n        </mat-card>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

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
    WorkersComponent.prototype.getWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable) {
        return this.workersService.getWorkers(filterByAccessible, filterByWorkable, filterByHarvestable);
    };
    WorkersComponent.prototype.getWorker = function (idOrResourceType) {
        return this.workersService.getWorker(idOrResourceType);
    };
    WorkersComponent.prototype.getAccessibleResourceWorkers = function (worker) {
        var _this = this;
        return worker.workersByResource.filter(function (rw) { return _this.resourcesService.getResource(rw.resourceId).resourceAccessible; });
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

/***/ "./src/app/directives/map/map.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/map/map.directive.ts ***!
  \*************************************************/
/*! exports provided: MapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDirective", function() { return MapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapDirective = /** @class */ (function () {
    function MapDirective(element, renderer, resourcesService, mapService) {
        this.element = element;
        this.renderer = renderer;
        this.resourcesService = resourcesService;
        this.mapService = mapService;
        this.transform = d3.zoomIdentity;
        this.lastAnimationTime = Date.now();
        this.tileAnimationSpeed = 0.003;
        this.images = [{ name: 'map', x: 0, y: 0, width: 1600, height: 1600 }];
    }
    MapDirective.prototype.ngAfterViewInit = function () {
        this.canvas = d3.select('canvas');
        this.context = this.canvas.node().getContext('2d');
        this.width = this.canvas.property('width');
        this.height = this.canvas.property('height');
        this.canvas.call(d3.zoom()
            .scaleExtent([1 / 3, 4])
            .translateExtent([[0, 0], [2400, 2400]])
            .on('zoom', this.zoomed(this)));
        this.canvas.on('click', this.clickTile(this));
        d3.timer(this.updateResourceAnimations(this), 125);
    };
    MapDirective.prototype.zoomed = function (self) {
        return function (d) {
            self.transform = d3.event.transform;
            self.refreshCanvas();
        };
    };
    MapDirective.prototype.clickTile = function (self) {
        return function (d) {
            var coordinates = d3.mouse(this);
            coordinates[0] = Math.floor(self.transform.invertX(coordinates[0]) / 16);
            coordinates[1] = Math.floor(self.transform.invertY(coordinates[1]) / 16);
            var tile = self.mapService.tiledMap[coordinates[0] + coordinates[1] * self.mapService.mapWidth];
            if (self.mapService.deleteMode) {
                self.mapService.clearBuilding(tile);
            }
            else {
                self.mapService.createBuilding(tile, self.mapService.selectedBuilding.tileType);
            }
            self.refreshCanvas();
        };
    };
    MapDirective.prototype.updateResourceAnimations = function (self) {
        return function (d) {
            var deltaTime = Date.now() - self.lastAnimationTime;
            for (var _i = 0, _a = self.mapService.resourceAnimations; _i < _a.length; _i++) {
                var resourceAnimation = _a[_i];
                var currentTile = resourceAnimation.buildingPath[resourceAnimation.pathStep];
                var destinationTile = resourceAnimation.buildingPath[resourceAnimation.pathStep + 1];
                var startPos = [currentTile.x, currentTile.y];
                var endPos = [destinationTile.x, destinationTile.y];
                resourceAnimation.x += (endPos[0] - startPos[0]) * deltaTime * self.tileAnimationSpeed;
                resourceAnimation.y += (endPos[1] - startPos[1]) * deltaTime * self.tileAnimationSpeed;
                if (Math.abs(resourceAnimation.x - currentTile.x) >= 8 ||
                    Math.abs(resourceAnimation.y - currentTile.y) >= 8) {
                    resourceAnimation.pathStep++;
                    if (resourceAnimation.pathStep === resourceAnimation.buildingPath.length - 1) {
                        self.resourcesService.finishResourceAnimation(resourceAnimation.resourceId);
                        resourceAnimation.done = true;
                    }
                }
            }
            self.mapService.resourceAnimations = self.mapService.resourceAnimations.filter(function (animation) { return !animation.done; });
            self.lastAnimationTime = Date.now();
            self.refreshCanvas();
        };
    };
    MapDirective.prototype.refreshCanvas = function () {
        this.context.save();
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.translate(this.transform.x, this.transform.y);
        this.context.scale(this.transform.k, this.transform.k);
        this.drawCanvas();
        this.context.restore();
    };
    MapDirective.prototype.drawCanvas = function () {
        for (var _i = 0, _a = this.mapService.tiledMap; _i < _a.length; _i++) {
            var tile = _a[_i];
            var mapTileImage = document.getElementById(tile.mapTileType.toLowerCase());
            this.context.drawImage(mapTileImage, tile.x, tile.y, 16, 16);
            if (tile.resourceTileType) {
                var resourceTileImage = document.getElementById(tile.resourceTileType.toLowerCase());
                this.context.drawImage(resourceTileImage, tile.x, tile.y, 16, 16);
            }
            if (tile.buildingTileType) {
                var buildingTileImage = document.getElementById(tile.buildingTileType.toLowerCase());
                this.context.drawImage(buildingTileImage, tile.x, tile.y, 16, 16);
            }
        }
        for (var _b = 0, _c = this.mapService.resourceAnimations; _b < _c.length; _b++) {
            var resourceAnimation = _c[_b];
            var resourceTileImage = document.getElementById(this.resourcesService.getResource(resourceAnimation.resourceId).name.toLowerCase().replace(' ', '-'));
            this.context.drawImage(resourceTileImage, resourceAnimation.x, resourceAnimation.y, 8, 8);
        }
    };
    MapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], MapDirective);
    return MapDirective;
}());



/***/ }),

/***/ "./src/app/directives/no-scroll/no-scroll.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/no-scroll/no-scroll.directive.ts ***!
  \*************************************************************/
/*! exports provided: NoScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoScrollDirective", function() { return NoScrollDirective; });
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

var NoScrollDirective = /** @class */ (function () {
    function NoScrollDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        element.nativeElement.addEventListener('mousewheel', function (e) {
            e.preventDefault();
        });
    }
    NoScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNoScroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], NoScrollDirective);
    return NoScrollDirective;
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
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
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
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"]
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
    ResourceType["Mineral"] = "MINERAL";
    ResourceType["Metal"] = "METAL";
})(ResourceType || (ResourceType = {}));
var Resource = /** @class */ (function () {
    function Resource() {
        this.amountTravelling = 0;
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
/*! exports provided: MapTileType, ResourceTileType, BuildingTileType, Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTileType", function() { return MapTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTileType", function() { return ResourceTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingTileType", function() { return BuildingTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
var MapTileType;
(function (MapTileType) {
    MapTileType["Grass"] = "GRASS";
    MapTileType["Water"] = "WATER";
    MapTileType["Mountain"] = "MOUNTAIN";
})(MapTileType || (MapTileType = {}));
var ResourceTileType;
(function (ResourceTileType) {
    ResourceTileType["OakTree"] = "OAKTREE";
    ResourceTileType["PineTree"] = "PINETREE";
    ResourceTileType["BirchTree"] = "BIRCHTREE";
    ResourceTileType["EucalyptusTree"] = "EUCALYPTUSTREE";
    ResourceTileType["WillowTree"] = "WILLOWTREE";
    ResourceTileType["TeakTree"] = "TEAKTREE";
    ResourceTileType["DeadEnt"] = "DEADENT";
    ResourceTileType["StoneMine"] = "STONEMINE";
    ResourceTileType["GraphiteMine"] = "GRAPHITEMINE";
    ResourceTileType["LimestoneMine"] = "LIMESTONEMINE";
    ResourceTileType["MarbleMine"] = "MARBLEMINE";
    ResourceTileType["QuartzMine"] = "QUARTZMINE";
    ResourceTileType["ObsidianMine"] = "OBSIDIANMINE";
    ResourceTileType["DiamondMine"] = "DIAMONDMINE";
    ResourceTileType["CopperMine"] = "COPPERMINE";
    ResourceTileType["TinMine"] = "TINMINE";
    ResourceTileType["IronMine"] = "IRONMINE";
    ResourceTileType["GoldMine"] = "GOLDMINE";
    ResourceTileType["LatinumMine"] = "LATINUMMINE";
    ResourceTileType["UnbelieviumMine"] = "UNBELIEVIUMMINE";
    ResourceTileType["LustrialMine"] = "LUSTRIALMINE";
    ResourceTileType["SpectrusMine"] = "SPECTRUSMINE";
    ResourceTileType["CrackedForge"] = "CRACKEDFORGE";
    ResourceTileType["StoneForge"] = "STONEFORGE";
    ResourceTileType["IronForge"] = "IRONFORGE";
    ResourceTileType["GoldForge"] = "GOLDFORGE";
    ResourceTileType["LatinumForge"] = "LATINUMFORGE";
    ResourceTileType["TemprousDistillery"] = "TEMPROUSDISTILLERY";
})(ResourceTileType || (ResourceTileType = {}));
var BuildingTileType;
(function (BuildingTileType) {
    BuildingTileType["Wall"] = "WALL";
    BuildingTileType["Road"] = "ROAD";
    BuildingTileType["Home"] = "HOME";
    BuildingTileType["Bridge"] = "BRIDGE";
    BuildingTileType["CrackedForge"] = "CRACKEDFORGE";
    BuildingTileType["StoneForge"] = "STONEFORGE";
    BuildingTileType["IronForge"] = "IRONFORGE";
    BuildingTileType["GoldForge"] = "GOLDFORGE";
    BuildingTileType["LatinumForge"] = "LATINUMFORGE";
    BuildingTileType["TemprousDistillery"] = "TEMPROUSDISTILLERY";
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
        this.editMode = false;
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
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
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
    function ClickerMainService(resourcesService, workersService, mapService, adminService) {
        var _this = this;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.mapService = mapService;
        this.adminService = adminService;
        this.progressBarMode = 'determinate';
        this.millisecondsTotal = 1000;
        this.progressBarUpdateDelay = 125;
        this.resourceTypes = _objects_resource__WEBPACK_IMPORTED_MODULE_6__["ResourceType"];
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
        this.harvestStartDate = Date.now();
        this.resourcesService.getResource(id).amountTravelling++;
        if (this.shouldAnimateProgressBar(id)) {
            this.resourcesService.getResource(id).progressBarValue = 0;
        }
        this.mapService.spawnResourceAnimation(id);
        this.stopHarvesting(id);
    };
    ClickerMainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
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
        this.tileTypes = baseTiles.tileTypes;
        this.mapTiles = baseTiles.mapTiles;
        this.buildingTiles = baseTiles.buildingTiles;
        this.resourceTiles = baseTiles.resourceTiles;
        this.tiledMap = [];
        this.resourceAnimations = [];
        this.deleteMode = false;
        var _tiledMap = [];
        var mapTileIds, resourceTileIds, buildingTileIds;
        var _mapWidth, _mapHeight;
        // const tileTypes = {1: MapTileType.Grass, 2: MapTileType.Water, 3: MapTileType.Mountain,
        //   7: ResourceTileType.OakTree, 8: ResourceTileType.PineTree, 9: ResourceTileType.BirchTree, 10: ResourceTileType.EucalyptusTree,
        //   11: ResourceTileType.WillowTree, 12: ResourceTileType.TeakTree, 13: ResourceTileType.DeadEnt, 14: ResourceTileType.StoneMine,
        //   15: ResourceTileType.GraphiteMine, 16: ResourceTileType.LimestoneMine, 17: ResourceTileType.MarbleMine,
        //   18: ResourceTileType.QuartzMine, 19: ResourceTileType.ObsidianMine, 20: ResourceTileType.DiamondMine,
        //   21: ResourceTileType.CopperMine, 22: ResourceTileType.TinMine, 23: ResourceTileType.IronMine, 24: ResourceTileType.GoldMine,
        //   25: ResourceTileType.LatinumMine, 26: ResourceTileType.UnbelieviumMine, 27: ResourceTileType.LustrialMine,
        //   28: ResourceTileType.SpectrusMine, 29: ResourceTileType.CrackedForge, 30: ResourceTileType.StoneForge,
        //   31: ResourceTileType.IronForge, 32: ResourceTileType.GoldForge, 33: ResourceTileType.LatinumForge,
        //   34: ResourceTileType.TemprousDistillery, 71: BuildingTileType.Home, 72: BuildingTileType.Wall,
        //   73: BuildingTileType.Road, 74: BuildingTileType.Bridge
        // };
        // const resourceIds = {7: [1], 8: [7], 9: [8], 10: [9], 11: [15], 12: [25], 13: [16], 14: [13], 15: [26], 16: [27],
        //   17: [28], 18: [29], 19: [30], 20: [31], 21: [2], 22: [3], 23: [5], 24: [11], 25: [18], 26: [20], 27: [21], 28: [22],
        //   29: [4, 5], 30: [4, 5, 6], 31: [4, 5, 6, 10, 12], 32: [4, 5, 6, 10, 12, 19], 33: [4, 5, 6, 10, 12, 19, 23], 34: [24]};
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.onload = function () {
            var xmlDoc = new DOMParser().parseFromString(xmlRequest.responseText, 'text/xml');
            var layers = xmlDoc.getElementsByTagName('layer');
            var mapLayer, resourceLayer, buildingLayer;
            for (var i = 0; i < layers.length; i++) {
                switch (layers[i].attributes['name'].value) {
                    case 'Map Layer':
                        mapLayer = layers[i];
                        break;
                    case 'Resource Layer':
                        resourceLayer = layers[i];
                        break;
                    case 'Building Layer':
                        buildingLayer = layers[i];
                        break;
                }
            }
            _mapWidth = +mapLayer.attributes.getNamedItem('width').value;
            _mapHeight = +mapLayer.attributes.getNamedItem('height').value;
            mapTileIds = mapLayer.textContent.split(',').map(function (tileId) { return +tileId; });
            resourceTileIds = resourceLayer.textContent.split(',').map(function (tileId) { return +tileId; });
            buildingTileIds = buildingLayer.textContent.split(',').map(function (tileId) { return +tileId; });
        };
        xmlRequest.open('GET', '../../../assets/tilemap/map.tmx', false);
        xmlRequest.send();
        for (var i = 0; i < mapTileIds.length; i++) {
            var mapTileId = mapTileIds[i];
            var resourceTileId = resourceTileIds[i];
            var buildingTileId = buildingTileIds[i];
            var tile = {
                id: _tiledMap.length,
                mapTileType: this.tileTypes[mapTileId],
                x: 16 * (_tiledMap.length % _mapWidth),
                y: 16 * Math.floor(_tiledMap.length / _mapWidth),
                tileCropDetail: { x: 0, y: 0, width: 16, height: 16 },
                buildingRemovable: false
            };
            if (resourceTileId > 0) {
                tile.resourceTileType = this.tileTypes[resourceTileId];
            }
            if (buildingTileId > 0) {
                tile.buildingTileType = this.tileTypes[buildingTileId];
            }
            _tiledMap.push(tile);
        }
        this.tiledMap = _tiledMap;
        this.mapWidth = _mapWidth;
        this.mapHeight = _mapHeight;
        this.calculateResourceConnections();
    }
    MapService.prototype.createBuilding = function (tile, buildingType) {
        var buildingTile = this.buildingTiles[buildingType];
        if (tile.buildingTileType !== undefined ||
            tile.resourceTileType !== undefined ||
            !buildingTile.buildableSurfaces.some(function (bs) { return bs === tile.mapTileType; }) ||
            !this.canAffordBuilding(buildingTile)) {
            return false;
        }
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.addResourceAmount(resourceCost.resourceId, -resourceCost.resourceCost);
        }
        if (buildingTile.placesResourceTile) {
            tile.resourceTileType = buildingTile.resourceTileType;
        }
        tile.buildingRemovable = true;
        tile.buildingTileType = buildingType;
        this.calculateResourceConnections();
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
        if (!tile.buildingRemovable) {
            return;
        }
        var buildingTile = this.buildingTiles[tile.buildingTileType];
        if (buildingTile.placesResourceTile) {
            tile.resourceTileType = undefined;
        }
        tile.buildingTileType = undefined;
        this.calculateResourceConnections();
    };
    MapService.prototype.calculateResourceConnections = function () {
        var resourceTiles = this.getResourceTiles();
        for (var _i = 0, resourceTiles_1 = resourceTiles; _i < resourceTiles_1.length; _i++) {
            var resourceTile = resourceTiles_1[_i];
            resourceTile.buildingPath = [];
            var visitedTiles = [];
            var tileQueue = [];
            var nodeMap = new Map();
            var currentNode = void 0;
            for (var _a = 0, _b = this.getNeighborTiles(resourceTile); _a < _b.length; _a++) {
                var neighbor = _b[_a];
                if (neighbor.buildingTileType && this.buildingTiles[neighbor.buildingTileType].resourcePathable) {
                    tileQueue.push(neighbor);
                }
            }
            tileQueue.push(resourceTile);
            while (tileQueue.length) {
                currentNode = tileQueue.pop();
                if (currentNode.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_2__["BuildingTileType"].Home) {
                    var buildingPath = [];
                    var backtrackNode = currentNode;
                    while (backtrackNode !== resourceTile) {
                        buildingPath.push(backtrackNode);
                        backtrackNode = nodeMap.get(backtrackNode);
                    }
                    buildingPath.push(backtrackNode);
                    resourceTile.buildingPath = buildingPath.reverse();
                    tileQueue = [];
                }
                for (var _c = 0, _d = this.getNeighborTiles(currentNode); _c < _d.length; _c++) {
                    var neighbor = _d[_c];
                    if (!visitedTiles.includes(neighbor) && neighbor.buildingTileType &&
                        this.buildingTiles[neighbor.buildingTileType].resourcePathable) {
                        nodeMap.set(neighbor, currentNode);
                        tileQueue.push(neighbor);
                    }
                }
                visitedTiles.push(currentNode);
            }
        }
    };
    MapService.prototype.spawnResourceAnimation = function (resourceId) {
        var matchingTiles = this.getTilesForResource(resourceId).filter(function (tile) { return tile.buildingPath.length > 0; });
        var tile = matchingTiles[Math.floor(Math.random() * matchingTiles.length)];
        this.resourceAnimations.push({
            resourceId: resourceId,
            x: tile.x + 4,
            y: tile.y + 4,
            buildingPath: tile.buildingPath.map(function (tile) { return tile; }),
            pathStep: 0,
            done: false
        });
    };
    MapService.prototype.getNeighborTiles = function (tile) {
        var tileCoordinates = this.getTileCoordinates(tile);
        var neighborPositions = [
            { x: tileCoordinates.x - 1, y: tileCoordinates.y },
            { x: tileCoordinates.x + 1, y: tileCoordinates.y },
            { x: tileCoordinates.x, y: tileCoordinates.y - 1 },
            { x: tileCoordinates.x, y: tileCoordinates.y + 1 }
        ];
        var tiles = [];
        for (var _i = 0, neighborPositions_1 = neighborPositions; _i < neighborPositions_1.length; _i++) {
            var position = neighborPositions_1[_i];
            if (position.x >= 0 && position.x < this.mapWidth &&
                position.y >= 0 && position.y < this.mapHeight) {
                tiles.push(this.getTile(position.x, position.y));
            }
        }
        return tiles;
    };
    MapService.prototype.getRowCount = function () {
        return this.mapHeight;
    };
    MapService.prototype.getColumnCount = function () {
        return this.mapWidth;
    };
    MapService.prototype.getTileCoordinates = function (tile) {
        var tileIndex = this.tiledMap.indexOf(tile);
        return {
            x: tileIndex % this.mapWidth,
            y: Math.floor(tileIndex / this.mapWidth)
        };
    };
    MapService.prototype.getTile = function (x, y) {
        return this.tiledMap[x + y * this.mapWidth];
    };
    MapService.prototype.getResourceTiles = function (resourceId) {
        var tiles = this.tiledMap.filter(function (tile) { return tile.resourceTileType !== undefined; });
        var matchingTypes = this.resourceTileArray.filter(function (tile) { return tile.resourceIds.includes(resourceId); }).map(function (tile) { return tile.tileType; });
        if (resourceId !== undefined) {
            tiles = tiles.filter(function (tile) { return matchingTypes.includes(tile.resourceTileType); });
        }
        return tiles;
    };
    MapService.prototype.resourceTileUsable = function (resourceId) {
        var matchingTiles = this.getTilesForResource(resourceId);
        return (matchingTiles.length > 0 && matchingTiles.some(function (tile) { return tile.buildingPath.length > 0; }));
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
    Object.defineProperty(MapService.prototype, "mapTileArray", {
        get: function () {
            var tiles = [];
            for (var key in this.mapTiles) {
                tiles.push(this.mapTiles[key]);
            }
            return tiles;
        },
        enumerable: true,
        configurable: true
    });
    MapService.prototype.getTilesForResource = function (resourceId) {
        var matchingTypes = this.resourceTileArray.filter(function (tile) { return tile.resourceIds.includes(resourceId); }).map(function (tile) { return tile.tileType; });
        return this.tiledMap.filter(function (tile) { return matchingTypes.includes(tile.resourceTileType); });
    };
    Object.defineProperty(MapService.prototype, "buildingTileArray", {
        get: function () {
            var tiles = [];
            for (var key in this.buildingTiles) {
                tiles.push(this.buildingTiles[key]);
            }
            return tiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapService.prototype, "resourceTileArray", {
        get: function () {
            var tiles = [];
            for (var key in this.resourceTiles) {
                tiles.push(this.resourceTiles[key]);
            }
            return tiles;
        },
        enumerable: true,
        configurable: true
    });
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
    ResourcesService.prototype.finishResourceAnimation = function (id) {
        var resource = this.getResource(id);
        resource.amountTravelling--;
        this.harvestResource(id, 1, true);
    };
    ResourcesService.prototype.harvestResource = function (id, multiplier, forceHarvest) {
        if (multiplier === void 0) { multiplier = 1; }
        if (forceHarvest === void 0) { forceHarvest = false; }
        var resource = this.getResource(id);
        if (!forceHarvest && (!resource.harvestable || !this.canHarvest(id, multiplier))) {
            return;
        }
        for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            this.addResourceAmount(resourceConsume.resourceId, -resourceConsume.cost * multiplier);
        }
        this.resources.filter(function (r) { return r.previousTier === resource.resourceTier && r.resourceType === resource.resourceType; })
            .map(function (r) { return r.resourceAccessible = true; });
        this.addResourceAmount(resource.id, resource.harvestYield * multiplier);
    };
    ResourcesService.prototype.canHarvest = function (id, multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        var resource = this.getResource(id);
        if (!resource.harvestable || resource.harvesting) {
            return false;
        }
        for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            if (this.getResource(resourceConsume.resourceId).amount < resourceConsume.cost * multiplier) {
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
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/save-dialog/save-dialog.component */ "./src/app/components/save-dialog/save-dialog.component.ts");
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
    function SettingsService(resourcesService, upgradesService, workersService, mapService, snackbar, dialog) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.workersService = workersService;
        this.mapService = mapService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.autosaveInterval = 900000;
        this.loadGame();
    }
    SettingsService.prototype.openSaveDialog = function (saveData) {
        var _this = this;
        var dialogRef = this.dialog.open(_components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SaveDialogComponent"], {
            width: '750px',
            height: '150px',
            data: saveData === undefined ? {} : { saveData: saveData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                if (_this.importSave(result)) {
                    _this.snackbar.open('Game successfully loaded!', '', { duration: 2000 });
                }
            }
        });
    };
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
        if (saveData === null) {
            return;
        }
        if (this.importSave(saveData)) {
            this.snackbar.open('Game successfully loaded!', '', { duration: 2000 });
        }
    };
    SettingsService.prototype.deleteSave = function () {
        localStorage.removeItem('clickerGameSaveData');
        this.snackbar.open('Game save deleted.', '', { duration: 2000 });
    };
    SettingsService.prototype.exportSave = function () {
        var saveData = {
            resources: [],
            upgrades: [],
            workers: [],
            tiles: [],
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
        for (var _h = 0, _j = this.mapService.tiledMap; _h < _j.length; _h++) {
            var tile = _j[_h];
            if (tile.buildingTileType === undefined) {
                continue;
            }
            var tileData = {
                id: tile.id,
                buildingPath: tile.buildingPath,
                buildingRemovable: tile.buildingRemovable,
                tileCropDetail: tile.tileCropDetail
            };
            if (tile.resourceTileType !== undefined) {
                tileData.resourceTileType = tile.resourceTileType;
            }
            if (tile.buildingTileType !== undefined) {
                tileData.buildingTileType = tile.buildingTileType;
            }
            saveData.tiles.push(tileData);
        }
        return btoa(JSON.stringify(saveData));
    };
    SettingsService.prototype.importSave = function (saveDataString) {
        var backupSave = this.exportSave();
        try {
            var saveData = JSON.parse(atob(saveDataString));
            if (saveData.resources) {
                for (var _i = 0, _a = saveData.resources; _i < _a.length; _i++) {
                    var resourceData = _a[_i];
                    var resource = this.resourcesService.getResource(resourceData.id);
                    if (resource === undefined) {
                        continue;
                    }
                    resource.amount = resourceData.amount;
                    resource.harvestable = resourceData.harvestable;
                    resource.harvestYield = resourceData.harvestYield;
                    resource.sellable = resourceData.sellable;
                    resource.sellsFor = resourceData.sellsFor;
                    resource.resourceAccessible = resourceData.resourceAccessible;
                }
            }
            if (saveData.upgrades) {
                for (var _b = 0, _c = saveData.upgrades; _b < _c.length; _b++) {
                    var upgradeData = _c[_b];
                    var upgrade = this.upgradesService.getUpgrade(upgradeData.id);
                    if (upgrade === undefined) {
                        continue;
                    }
                    this.upgradesService.applyUpgrade(upgrade);
                    upgrade.purchased = upgradeData.purchased;
                }
            }
            if (saveData.workers) {
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
                        resourceWorker.workerCount = 0;
                        resourceWorker.sliderSetting = resourceWorkerData.workerCount;
                        this.workersService.updateResourceWorker(resourceWorkerData.resourceId, resourceWorkerData.workerCount);
                    }
                    if (worker.freeWorkers < 0) {
                        throw new Error('Invalid worker settings.');
                    }
                }
            }
            if (saveData.tiles) {
                var _loop_1 = function (tileData) {
                    var tile = this_1.mapService.tiledMap.find(function (tile) { return tile.id === tileData.id; });
                    if (tile === undefined) {
                        return "continue";
                    }
                    tile.resourceTileType = tileData.resourceTileType;
                    tile.buildingTileType = tileData.buildingTileType;
                    tile.buildingPath = tileData.buildingPath;
                    tile.buildingRemovable = tileData.buildingRemovable;
                    tile.tileCropDetail = tileData.tileCropDetail;
                };
                var this_1 = this;
                for (var _h = 0, _j = saveData.tiles; _h < _j.length; _h++) {
                    var tileData = _j[_h];
                    _loop_1(tileData);
                }
            }
            this.autosaveInterval = saveData.autosaveInterval;
            this.mapService.calculateResourceConnections();
            return true;
        }
        catch (error) {
            this.snackbar.open("Error loading save data: " + error, '', { duration: 5000 });
            this.importSave(backupSave);
            console.error(error);
            return false;
        }
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_4__["UpgradesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
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
        var tooltip = "" + resource.resourceDescription;
        if (resourceId === 0) {
            return tooltip;
        }
        var neededUpgrades = this.upgradesService.upgradesOfVariable(_objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"].Harvestability, false, true, false);
        neededUpgrades = neededUpgrades.filter(function (upgrade) { return upgrade.upgradeEffects.some(function (ue) {
            return ue.upgradeVariable === _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"].Harvestability &&
                ((ue.resourceType === resource.resourceType && ue.upgradeIsForWholeType && resource.resourceTier <= ue.maxTier) ||
                    ue.resourceId === resourceId);
        }); });
        if (neededUpgrades.length) {
            tooltip += "\nNeeded Upgrade: " + neededUpgrades[0].name + ".";
        }
        if (resource.resourceConsumes.length) {
            tooltip += '\nResources required:';
            for (var _i = 0, _a = resource.resourceConsumes; _i < _a.length; _i++) {
                var resourceConsume = _a[_i];
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
        return resource.workerVerb + " " + Math.floor(resourceWorker.workerYield * 100) / 100 + " " +
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
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
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
    function UpgradesService(resourcesService, workersService, messagesService) {
        this.resourcesService = resourcesService;
        this.workersService = workersService;
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
        this.applyUpgrade(upgrade);
        upgrade.purchased = true;
    };
    UpgradesService.prototype.applyUpgrade = function (upgrade) {
        var _this = this;
        var _loop_1 = function (upgradeEffect) {
            if (upgradeEffect.upgradeVariable === _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].WorkerCost) {
                this_1.workersService.getWorker(upgradeEffect.resourceType).cost *= upgradeEffect.upgradeFactor;
                return "continue";
            }
            var resourcesToUpgrade = [this_1.resourcesService.getResource(upgradeEffect.resourceId)];
            var workersToUpgrade = [this_1.workersService.getResourceWorker(upgradeEffect.resourceId)];
            if (upgradeEffect.upgradeIsForWholeType) {
                resourcesToUpgrade = this_1.resourcesService.resourcesOfType(upgradeEffect.resourceType, false, false);
                workersToUpgrade = this_1.workersService.getWorker(upgradeEffect.resourceType).workersByResource;
                if (upgradeEffect.maxTier >= 0) {
                    resourcesToUpgrade = resourcesToUpgrade.filter(function (resource) { return resource.resourceTier <= upgradeEffect.maxTier; });
                    workersToUpgrade = workersToUpgrade.filter(function (worker) {
                        return _this.resourcesService.getResource(worker.resourceId).resourceTier <= upgradeEffect.maxTier;
                    });
                }
            }
            for (var _i = 0, resourcesToUpgrade_1 = resourcesToUpgrade; _i < resourcesToUpgrade_1.length; _i++) {
                var resourceToUpgrade = resourcesToUpgrade_1[_i];
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
                    default: {
                        break;
                    }
                }
            }
            for (var _a = 0, workersToUpgrade_1 = workersToUpgrade; _a < workersToUpgrade_1.length; _a++) {
                var workerToUpgrade = workersToUpgrade_1[_a];
                switch (upgradeEffect.upgradeVariable) {
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].Workable: {
                        workerToUpgrade.workable = !!upgradeEffect.upgradeFactor;
                        break;
                    }
                    case _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["UpgradeVariable"].WorkerYield: {
                        workerToUpgrade.workerYield *= upgradeEffect.upgradeFactor;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = upgrade.upgradeEffects; _i < _a.length; _i++) {
            var upgradeEffect = _a[_i];
            _loop_1(upgradeEffect);
        }
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
    UpgradesService.prototype.getUpgrades = function (filterByPurchased, filterByUnpurchased, filterByAccessible) {
        var _this = this;
        var upgrades = this.upgrades;
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
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
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
    WorkersService.prototype.getWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable) {
        var _this = this;
        var workers = this.workers;
        if (filterByAccessible) {
            workers = this.workers.filter(function (worker) { return worker.workersByResource.some(function (rw) { return _this.resourcesService.getResource(rw.resourceId).resourceAccessible; }); });
        }
        if (filterByWorkable) {
            workers = this.workers.filter(function (worker) { return worker.workersByResource.some(function (rw) { return rw.workable; }); });
        }
        if (filterByHarvestable) {
            workers = this.workers.filter(function (worker) { return worker.workersByResource.some(function (rw) { return _this.resourcesService.getResource(rw.resourceId).harvestable; }); });
        }
        return workers;
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
                this.resourcesService.harvestResource(resourceWorker.resourceId, resourceWorker.workerYield * resourceWorker.workerCount);
            }
        }
    };
    WorkersService.prototype.updateResourceWorker = function (id, newResourceWorkerCount) {
        var resource = this.resourcesService.getResource(id);
        var worker = this.getWorker(resource.resourceType);
        var resourceWorker = worker.workersByResource.find(function (ws) { return ws.resourceId === resource.id; });
        if (!resourceWorker.sliderSettingValid) {
            newResourceWorkerCount = worker.freeWorkers + resourceWorker.workerCount;
            resourceWorker.sliderSetting = newResourceWorkerCount;
        }
        var newFreeWorkers = worker.freeWorkers + resourceWorker.workerCount - newResourceWorkerCount;
        worker.freeWorkers = newFreeWorkers;
        resourceWorker.workerCount = newResourceWorkerCount;
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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = [{"id":0,"name":"gold","resourceType":"CURRENCY","iconPath":"../../../assets/sprites/coin.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"sellable":false,"resourceDescription":"Shiny and valuable.","workerVerb":"","workerNoun":"gold ore","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":false,"workerCount":0,"cost":0},"harvestYield":0,"harvestMilliseconds":0,"workerYield":0,"sellsFor":0},{"id":1,"name":"oak","resourceType":"WOOD","iconPath":"../../../assets/sprites/oak.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":5,"resourceDescription":"Sturdy oak logs.","workerVerb":"Fells","workerNoun":"oak tree","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":50}},{"id":7,"name":"pine","resourceType":"WOOD","iconPath":"../../../assets/sprites/pine.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Strong pine logs.","workerVerb":"Fells","workerNoun":"pine tree","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":8,"name":"birch","resourceType":"WOOD","iconPath":"../../../assets/sprites/birch.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Sometimes it feels like it's watching you...","workerVerb":"Fells","workerNoun":"birch tree","resourceAccessible":false,"resourceTier":2,"previousTier":1,"worker":{"workable":false,"workerCount":0,"cost":150}},{"id":9,"name":"eucalyptus","resourceType":"WOOD","iconPath":"../../../assets/sprites/eucalyptus.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":20,"resourceDescription":"Logs as strong as their name is long.","workerVerb":"Fells","workerNoun":"eucalyptus tree","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":false,"workerCount":0,"cost":200}},{"id":15,"name":"willow","resourceType":"WOOD","iconPath":"../../../assets/sprites/willow.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":35,"resourceDescription":"The saddest tree in the forest (because you chopped down its parents).","workerVerb":"Fells","workerNoun":"willow tree","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":200}},{"id":25,"name":"teak","resourceType":"WOOD","iconPath":"../../../assets/sprites/teak.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"Bright, thin logs; surprisingly resillient considering their appearance.","workerVerb":"Fells","workerNoun":"teak tree","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":200}},{"id":16,"name":"ent soul","resourceType":"WOOD","iconPath":"../../../assets/sprites/ent_soul.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":1,"cost":10},{"resourceId":7,"cost":10},{"resourceId":8,"cost":10},{"resourceId":9,"cost":10},{"resourceId":15,"cost":10},{"resourceId":25,"cost":10}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":false,"sellsFor":50,"resourceDescription":"The spirit of a long-dead ent, still contained where it last took root.","workerVerb":"Releases","workerNoun":"ent spirit","resourceAccessible":false,"resourceTier":6,"previousTier":5,"worker":{"workable":false,"workerCount":0,"cost":200}},{"id":17,"name":"reanimated ent","resourceType":"WOOD","iconPath":"../../../assets/sprites/reanimated_ent.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":16,"cost":1}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":20000,"workerYield":1,"sellable":false,"sellsFor":100,"resourceDescription":"An ancient ent warrior, given life once more to fight for you.","workerVerb":"Reanimates","workerNoun":"ent","resourceAccessible":false,"resourceTier":7,"previousTier":6,"worker":{"workable":false,"workerCount":0,"cost":200}},{"id":2,"name":"copper ore","resourceType":"METAL","iconPath":"../../../assets/sprites/copper_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Can be forged into bronze along with tin.","workerVerb":"Mines","workerNoun":"copper ore","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":3,"name":"tin ore","resourceType":"METAL","iconPath":"../../../assets/sprites/tin_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Can be forged into bronze along with copper.","workerVerb":"Mines","workerNoun":"tin ore","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":75}},{"id":4,"name":"bronze ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/bronze_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":2,"cost":1},{"resourceId":3,"cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":7,"resourceDescription":"Somewhat brittle ingots.","workerVerb":"Forges","workerNoun":"bronze ingot","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":false,"workerCount":0,"cost":100}},{"id":5,"name":"iron ore","resourceType":"METAL","iconPath":"../../../assets/sprites/iron_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Unrefined extracts of iron.","workerVerb":"Mines","workerNoun":"iron ore","resourceAccessible":false,"resourceTier":2,"previousTier":1,"worker":{"workable":false,"workerCount":0,"cost":150}},{"id":6,"name":"iron ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/iron_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":5,"cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Dim but sturdy ingots.","workerVerb":"Forges","workerNoun":"iron ingot","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":false,"workerCount":0,"cost":250}},{"id":10,"name":"steel ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/steel_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":6,"cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"Refined and purified iron.","workerVerb":"Forges","workerNoun":"steel ingot","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":350}},{"id":11,"name":"gold ore","resourceType":"METAL","iconPath":"../../../assets/sprites/gold_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Unrefined extracts of gold.","workerVerb":"Mines","workerNoun":"gold","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":false,"workerCount":0,"cost":150}},{"id":12,"name":"gold ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/gold_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":11,"cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":60,"resourceDescription":"Highly valuable and malleable.","workerVerb":"Forges","workerNoun":"gold ingot","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":18,"name":"latinum ore","resourceType":"METAL","iconPath":"../../../assets/sprites/latinum_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4500,"workerYield":1,"sellable":true,"sellsFor":75,"resourceDescription":"Said to be highly valued by indivudals with large ears.","workerVerb":"Mines","workerNoun":"latinum ore","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":19,"name":"latinum ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/latinum_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":10,"cost":1},{"resourceId":12,"cost":1},{"resourceId":18,"cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"sellsFor":100,"resourceDescription":"QUARK!!!","workerVerb":"Forges","workerNoun":"latinum ingot","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":20,"name":"unbelievium ore","resourceType":"METAL","iconPath":"../../../assets/sprites/unbelievium_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":80,"resourceDescription":"I can't believe it's not unobtainium!","workerVerb":"Mines","workerNoun":"unbelievium ore","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":21,"name":"lustrial ore","resourceType":"METAL","iconPath":"../../../assets/sprites/lustrial_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":80,"resourceDescription":"Even in its unrefined form, it shines as bright as the sun.","workerVerb":"Mines","workerNoun":"lustrial ore","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":22,"name":"spectrus ore","resourceType":"METAL","iconPath":"../../../assets/sprites/spectrus_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":80,"resourceDescription":"A peculiar energy eminates from the rock...","workerVerb":"Mines","workerNoun":"spectrus ore","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":23,"name":"temprous ingot","resourceType":"METAL","iconPath":"../../../assets/sprites/temprous_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":19,"cost":2},{"resourceId":20,"cost":2},{"resourceId":21,"cost":2},{"resourceId":22,"cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":true,"sellsFor":250,"resourceDescription":"Could this metal hold the secret of time itself?","workerVerb":"Forges","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":6,"previousTier":5,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":24,"name":"refined temprous","resourceType":"METAL","iconPath":"../../../assets/sprites/refined_temprous.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceId":23,"cost":15},{"resourceId":31,"cost":30}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":15000,"workerYield":1,"sellable":true,"sellsFor":350,"resourceDescription":"Memories of ages past imbue the metal with seemingly endless power.","workerVerb":"Refines","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":false,"workerCount":0,"cost":400}},{"id":13,"name":"Stone","resourceType":"MINERAL","iconPath":"../../../assets/sprites/stone.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":5,"resourceDescription":"Hard and sturdy, well suitied to basic construction projects.","workerVerb":"Mines","workerNoun":"stone","resourceAccessible":true,"resourceTier":0,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":26,"name":"Graphite","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/graphite.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":45,"resourceDescription":"A rough mineral with many uses.","workerVerb":"Mines","workerNoun":"graphite","resourceAccessible":false,"resourceTier":1,"previousTier":0,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":27,"name":"Limestone","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/limestone.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":55,"resourceDescription":"Hardened stone with a hint of lime.","workerVerb":"Mines","workerNoun":"limestone","resourceAccessible":false,"resourceTier":2,"previousTier":1,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":28,"name":"Marble","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/marble.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":70,"resourceDescription":"Beautiful, crystalline rock. Highly valued for construction projects.","workerVerb":"Mines","workerNoun":"marble","resourceAccessible":false,"resourceTier":3,"previousTier":2,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":29,"name":"Quartz","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/quartz.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"sellsFor":90,"resourceDescription":"A bright, shiny structure hides under the rock's rough surface.","workerVerb":"Mines","workerNoun":"qaurtz","resourceAccessible":false,"resourceTier":4,"previousTier":3,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":30,"name":"Obsidian","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/obsidian.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":6500,"workerYield":1,"sellable":true,"sellsFor":125,"resourceDescription":"Hardened rock formed in the heart of a volcano.","workerVerb":"Mines","workerNoun":"obsidian","resourceAccessible":false,"resourceTier":5,"previousTier":4,"worker":{"workable":true,"workerCount":0,"cost":80}},{"id":31,"name":"Diamond","resourceType":"MINERAL","amount":0,"amountTravelling":0,"iconPath":"../../../assets/sprites/diamond.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":7500,"workerYield":1,"sellable":true,"sellsFor":175,"resourceDescription":"An incredibly beautiful and tough resource.","workerVerb":"Mines","workerNoun":"diamond","resourceAccessible":false,"resourceTier":6,"previousTier":5,"worker":{"workable":true,"workerCount":0,"cost":80}}];

/***/ }),

/***/ "./src/assets/json/tileTypes.json":
/*!****************************************!*\
  !*** ./src/assets/json/tileTypes.json ***!
  \****************************************/
/*! exports provided: tileTypes, mapTiles, buildingTiles, resourceTiles, default */
/***/ (function(module) {

module.exports = {"tileTypes":{"1":"GRASS","2":"WATER","3":"MOUNTAIN","7":"OAKTREE","8":"PINETREE","9":"BIRCHTREE","10":"EUCALYPTUSTREE","11":"WILLOWTREE","12":"TEAKTREE","13":"DEADENT","14":"STONEMINE","15":"GRAPHITEMINE","16":"LIMESTONEMINE","17":"MARBLEMINE","18":"QUARTZMINE","19":"OBSIDIANMINE","20":"DIAMONDMINE","21":"COPPERMINE","22":"TINMINE","23":"IRONMINE","24":"GOLDMINE","25":"LATINUMMINE","26":"UNBELIEVIUMMINE","27":"LUSTRIALMINE","28":"SPECTRUSMINE","29":"CRACKEDFORGE","30":"STONEFORGE","31":"IRONFORGE","32":"GOLDFORGE","33":"LATINUMFORGE","34":"TEMPROUSDISTILLERY","71":"HOME","72":"WALL","73":"ROAD","74":"BRIDGE"},"mapTiles":{"GRASS":{"tileType":"GRASS","name":"Grass","walkable":true},"WATER":{"tileType":"WATER","name":"Water","walkable":false},"MOUNTAIN":{"tileType":"MOUNTAIN","name":"Mountain","walkable":false}},"buildingTiles":{"HOME":{"tileType":"HOME","name":"Home","description":"","placeable":false,"resourceCosts":[],"buildableSurfaces":[],"resourcePathable":true},"WALL":{"tileType":"WALL","name":"Wall","description":"Keeps invaders out.","placeable":true,"resourceCosts":[{"resourceId":1,"resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":false},"ROAD":{"tileType":"ROAD","name":"Road","description":"Allows access between buildings.","placeable":true,"resourceCosts":[{"resourceId":13,"resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":true},"BRIDGE":{"tileType":"BRIDGE","name":"Bridge","description":"Allows access between islands.","placeable":true,"resourceCosts":[{"resourceId":7,"resourceCost":40}],"buildableSurfaces":["WATER"],"resourcePathable":true},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","name":"Cracked Forge","description":"An old, weary forge. Bronze ingots are probably all this thing is capable of producing.","placeable":true,"resourceCosts":[{"resourceId":0,"resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"CRACKEDFORGE","resourcePathable":true},"STONEFORGE":{"tileType":"STONEFORGE","name":"Stone Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":true,"resourceCosts":[{"resourceId":0,"resourceCost":150},{"resourceId":13,"resourceCost":50},{"resourceId":7,"resourceCost":75},{"resourceId":4,"resourceCost":20}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"STONEFORGE","resourcePathable":true},"IRONFORGE":{"tileType":"IRONFORGE","name":"Iron Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":true,"resourceCosts":[{"resourceId":6,"resourceCost":500},{"resourceId":9,"resourceCost":700},{"resourceId":28,"resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"IRONFORGE","resourcePathable":true},"GOLDFORGE":{"tileType":"GOLDFORGE","name":"Gold Forge","description":"For reasons unknown to science, gold forges are particularly effective in forging latinum.","placeable":true,"resourceCosts":[{"resourceId":12,"resourceCost":1200},{"resourceId":15,"resourceCost":1500},{"resourceId":29,"resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"GOLDFORGE","resourcePathable":true},"LATINUMFORGE":{"tileType":"LATINUMFORGE","name":"Latinum Forge","description":"A forge that burns hot enough to fuse together the world's most precious and rare metals.","placeable":true,"resourceCosts":[{"resourceId":19,"resourceCost":2500},{"resourceId":25,"resourceCost":1500},{"resourceId":30,"resourceCost":700}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"LATINUMFORGE","resourcePathable":true},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","name":"Temprous Distillery","description":"With this device, all impurities can be removed from temprous ingots, unlocking their limitless potential.","placeable":true,"resourceCosts":[{"resourceId":23,"resourceCost":5000},{"resourceId":16,"resourceCost":500},{"resourceId":31,"resourceCost":1200}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"TEMPROUSDISTILLERY","resourcePathable":true}},"resourceTiles":{"OAKTREE":{"tileType":"OAKTREE","name":"OakTree","placeable":false,"resourceIds":[1]},"PINETREE":{"tileType":"PINETREE","name":"PineTree","placeable":false,"resourceIds":[7]},"BIRCHTREE":{"tileType":"BIRCHTREE","name":"BirchTree","placeable":false,"resourceIds":[8]},"EUCALYPTUSTREE":{"tileType":"EUCALYPTUSTREE","name":"EucalptusTree","placeable":false,"resourceIds":[9]},"WILLOWTREE":{"tileType":"WILLOWTREE","name":"WillowTree","placeable":false,"resourceIds":[15]},"TEAKTREE":{"tileType":"TEAKTREE","name":"TeakTree","placeable":false,"resourceIds":[25]},"DEADENT":{"tileType":"DEADENT","name":"DeadEnt","placeable":false,"resourceIds":[16,17]},"STONEMINE":{"tileType":"STONEMINE","name":"StoneMine","placeable":false,"resourceIds":[13]},"GRAPHITEMINE":{"tileType":"GRAPHITEMINE","name":"GraphiteMine","placeable":false,"resourceIds":[26]},"LIMESTONEMINE":{"tileType":"LIMESTONEMINE","name":"LimestoneMine","placeable":false,"resourceIds":[27]},"MARBLEMINE":{"tileType":"MARBLEMINE","name":"MarbleMine","placeable":false,"resourceIds":[28]},"QUARTZMINE":{"tileType":"QUARTZMINE","name":"QuartzMine","placeable":false,"resourceIds":[29]},"OBSIDIANMINE":{"tileType":"OBSIDIANMINE","name":"ObsidianMine","placeable":false,"resourceIds":[30]},"DIAMONDMINE":{"tileType":"DIAMONDMINE","name":"DiamondMine","placeable":false,"resourceIds":[31]},"COPPERMINE":{"tileType":"COPPERMINE","name":"CopperMine","placeable":false,"resourceIds":[2]},"TINMINE":{"tileType":"TINMINE","name":"TinMine","placeable":false,"resourceIds":[3]},"IRONMINE":{"tileType":"IRONMINE","name":"IronMine","placeable":false,"resourceIds":[5]},"GOLDMINE":{"tileType":"GOLDMINE","name":"GoldMine","placeable":false,"resourceIds":[11]},"LATINUMMINE":{"tileType":"LATINUMMINE","name":"LatinumMine","placeable":false,"resourceIds":[18]},"UNBELIEVIUMMINE":{"tileType":"UNBELIEVIUMMINE","name":"UnbelieviumMine","placeable":false,"resourceIds":[20]},"LUSTRIALMINE":{"tileType":"LUSTRIALMINE","name":"LustrialMine","placeable":false,"resourceIds":[21]},"SPECTRUSMINE":{"tileType":"SPECTRUSMINE","name":"SpectrusMine","placeable":false,"resourceIds":[22]},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","name":"CrackedForge","placeable":true,"resourceIds":[4]},"STONEFORGE":{"tileType":"STONEFORGE","name":"StoneForge","placeable":true,"resourceIds":[4,6]},"IRONFORGE":{"tileType":"IRONFORGE","name":"IronForge","placeable":true,"resourceIds":[4,6,10,12]},"GOLDFORGE":{"tileType":"GOLDFORGE","name":"GoldForge","placeable":true,"resourceIds":[4,6,10,12,19]},"LATINUMFORGE":{"tileType":"LATINUMFORGE","name":"LatinumForge","placeable":true,"resourceIds":[4,6,10,12,19,23]},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","name":"TemprousDistillery","placeable":true,"resourceIds":[24]}}};

/***/ }),

/***/ "./src/assets/json/upgrades.json":
/*!***************************************!*\
  !*** ./src/assets/json/upgrades.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, default */
/***/ (function(module) {

module.exports = [{"id":0,"upgradeType":"RESOURCE","name":"Refined Iron Axe","description":"A stronger, more durable axe. Harvests 20% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2,"maxTier":"1"}],"resourceCosts":[{"resourceId":1,"resourceCost":10},{"resourceId":6,"resourceCost":25}],"purchased":false},{"id":1,"upgradeType":"RESOURCE","name":"Twin Axes","description":"One axe in each hand means double productivity. It makes sense. Reduces wood harvesting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5,"maxTier":"1"}],"resourceCosts":[{"resourceId":1,"resourceCost":15},{"resourceId":6,"resourceCost":35}],"purchased":false},{"id":2,"upgradeType":"RESOURCE","name":"Worn Pickaxe","description":"A basic pickaxe. Not much, but it gets the job done. Allows harvesting of basic metals and minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":13,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":0,"resourceCost":50}],"purchased":false},{"id":3,"upgradeType":"WORKER","name":"Lumberjack's Guild","description":"Form a guild to help your workers hone their skills. Workers harvest 15% more wood.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15,"maxTier":2}],"resourceCosts":[{"resourceId":1,"resourceCost":20}],"purchased":false},{"id":5,"upgradeType":"RESOURCE","name":"Bronze Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":4,"resourceCost":5},{"resourceId":7,"resourceCost":15}],"purchased":false},{"id":6,"upgradeType":"RESOURCE","name":"Sharpened Pickaxe","description":"A highly sharpened pickaxe. Mines at a much higher rate.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":13,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75}],"resourceCosts":[{"resourceId":6,"resourceCost":20},{"resourceId":8,"resourceCost":30}],"purchased":false},{"id":8,"upgradeType":"RESOURCE","name":"Bronze Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":2}],"resourceCosts":[{"resourceId":4,"resourceCost":10},{"resourceId":1,"resourceCost":30}],"purchased":false},{"id":9,"upgradeType":"RESOURCE","name":"Iron Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":4}],"resourceCosts":[{"resourceId":6,"resourceCost":30},{"resourceId":8,"resourceCost":60}],"purchased":false},{"id":10,"upgradeType":"RESOURCE","name":"Steel Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":5}],"resourceCosts":[{"resourceId":10,"resourceCost":100},{"resourceId":15,"resourceCost":200}],"purchased":false},{"id":11,"upgradeType":"RESOURCE","name":"Latinum Axe","description":"An axe strong enough to free the spirits of ents from the bodies that entomb them.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":6}],"resourceCosts":[{"resourceId":19,"resourceCost":500},{"resourceId":25,"resourceCost":1000},{"resourceId":29,"resourceCost":250}],"purchased":false},{"id":12,"upgradeType":"RESOURCE","name":"Temprous Staff","description":"Imbued with the power of ages past, this staff can reunite ent spirits with their former bodies, granting them new life.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":26,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":24,"resourceCost":1500},{"resourceId":16,"resourceCost":1000},{"resourceId":31,"resourceCost":750}],"purchased":false},{"id":13,"upgradeType":"RESOURCE","name":"Iron Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":27,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":28,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":6,"resourceCost":30},{"resourceId":9,"resourceCost":45}],"purchased":false},{"id":14,"upgradeType":"RESOURCE","name":"Steel Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":29,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":18,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":30,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":10,"resourceCost":100},{"resourceId":9,"resourceCost":200}],"purchased":false},{"id":15,"upgradeType":"RESOURCE","name":"Latinum Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":30,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":31,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":20,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":21,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":22,"upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceId":19,"resourceCost":500},{"resourceId":25,"resourceCost":800},{"resourceId":30,"resourceCost":250}],"purchased":false},{"id":20,"upgradeType":"RESOURCE","name":"Refined Steel Axe","description":"A stronger, more durable axe. Harvests 45% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45}],"resourceCosts":[{"resourceId":15,"resourceCost":100},{"resourceId":10,"resourceCost":80}],"purchased":false},{"id":21,"upgradeType":"RESOURCE","name":"Refined Latinum Axe","description":"A stronger, more durable axe. Harvests 150% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceId":25,"resourceCost":500},{"resourceId":19,"resourceCost":375},{"resourceId":29,"resourceCost":200}],"purchased":false},{"id":22,"upgradeType":"RESOURCE","name":"Emblem of the Ents","description":"Imbues revived ents with far greater power. Grants an extra 75% per revived ent.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":17,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceId":16,"resourceCost":1000},{"resourceId":23,"resourceCost":600},{"resourceId":31,"resourceCost":425}],"purchased":false},{"id":23,"upgradeType":"RESOURCE","name":"Refined Iron Pickaxe","description":"A stronger, more durable pickaxe. Harvests 20% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":13,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":2,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":3,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceId":5,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceId":7,"resourceCost":25},{"resourceId":6,"resourceCost":25}],"purchased":false},{"id":24,"upgradeType":"RESOURCE","name":"Refined Steel Pickaxe","description":"A stronger, more durable pickaxe. Harvests 75% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":13,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":2,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":3,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":5,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":27,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":28,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceId":15,"resourceCost":150},{"resourceId":10,"resourceCost":85}],"purchased":false},{"id":25,"upgradeType":"RESOURCE","name":"Refined Latinum Pickaxe","description":"A stronger, more durable pickaxe. Harvests 200% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":13,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":2,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":3,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":5,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":27,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":28,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":29,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":30,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":31,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":18,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":20,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":21,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":23,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceId":25,"resourceCost":550},{"resourceId":19,"resourceCost":1000},{"resourceId":30,"resourceCost":750}],"purchased":false},{"id":26,"upgradeType":"RESOURCE","name":"Expanded Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceId":8,"resourceCost":25},{"resourceId":6,"resourceCost":25}],"purchased":false},{"id":27,"upgradeType":"RESOURCE","name":"Enhanced Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8}],"resourceCosts":[{"resourceId":9,"resourceCost":200},{"resourceId":6,"resourceCost":100}],"purchased":false},{"id":28,"upgradeType":"RESOURCE","name":"Refined Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceId":15,"resourceCost":200},{"resourceId":10,"resourceCost":100}],"purchased":false},{"id":29,"upgradeType":"RESOURCE","name":"Lavish Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceId":19,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8}],"resourceCosts":[{"resourceId":25,"resourceCost":500},{"resourceId":19,"resourceCost":350}],"purchased":false},{"id":30,"upgradeType":"RESOURCE","name":"Excessive Burner","description":"Alright, you can't possibly need this much space.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceId":19,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceId":23,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2}],"resourceCosts":[{"resourceId":25,"resourceCost":1500},{"resourceId":23,"resourceCost":600}],"purchased":false},{"id":31,"upgradeType":"RESOURCE","name":"Temprous Purifier","description":"Increases the purity of temprous ingots processed by the temprous distillery.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":24,"upgradeVariable":"HARVEST_YIELD","upgradeFactor":2}],"resourceCosts":[{"resourceId":16,"resourceCost":500},{"resourceId":23,"resourceCost":800}],"purchased":false},{"id":32,"upgradeType":"RESOURCE","name":"Triplet Axes","description":"I'm not even going try and figure out how this works, okay?","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.35,"maxTier":3}],"resourceCosts":[{"resourceId":15,"resourceCost":55},{"resourceId":10,"resourceCost":85}],"purchased":false},{"id":33,"upgradeType":"RESOURCE","name":"Lumber Mill","description":"Processes logs at a rate far beyond what's possible manually.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12,"maxTier":5}],"resourceCosts":[{"resourceId":25,"resourceCost":850},{"resourceId":19,"resourceCost":650},{"resourceId":30,"resourceCost":200}],"purchased":false},{"id":34,"upgradeType":"RESOURCE","name":"Enchanted Latinum Axe","description":"Enchanted by the spirits of fallen ents allows this axe's wielder to operate at an unnatural speed.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.04,"maxTier":6}],"resourceCosts":[{"resourceId":16,"resourceCost":500},{"resourceId":19,"resourceCost":1000},{"resourceId":31,"resourceCost":255}],"purchased":false},{"id":35,"upgradeType":"RESOURCE","name":"Temprous Siphon","description":"Using this siphon, ents can regain their full strength much more quickly.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":17,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25}],"resourceCosts":[{"resourceId":16,"resourceCost":1500},{"resourceId":19,"resourceCost":1250},{"resourceId":31,"resourceCost":600}],"purchased":false},{"id":36,"upgradeType":"RESOURCE","name":"Decorated Pickaxe","description":"Technically these pickaxes aren't any better, but they look pretty. And that's pretty nice.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":13,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":27,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":28,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceId":10,"resourceCost":120},{"resourceId":15,"resourceCost":60},{"resourceId":29,"resourceCost":110}],"purchased":false},{"id":37,"upgradeType":"RESOURCE","name":"Explosive Mining","description":"Pickaxes laced with a tiny, tiny amount of black powder. The science seems to add up.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":2,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":3,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":5,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":13,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":27,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":28,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":11,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":29,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":30,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":31,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":18,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceId":20,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":21,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceId":22,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceId":19,"resourceCost":500},{"resourceId":25,"resourceCost":250},{"resourceId":30,"resourceCost":110}],"purchased":false},{"id":38,"upgradeType":"RESOURCE","name":"Temprous Catalyst","description":"Speeds up the temprous purification process.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceId":24,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3}],"resourceCosts":[{"resourceId":24,"resourceCost":750},{"resourceId":16,"resourceCost":350},{"resourceId":31,"resourceCost":160}],"purchased":false},{"id":39,"upgradeType":"RESOURCE","name":"Limestone Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.6}],"resourceCosts":[{"resourceId":8,"resourceCost":50},{"resourceId":27,"resourceCost":80}],"purchased":false},{"id":40,"upgradeType":"RESOURCE","name":"Marble Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4}],"resourceCosts":[{"resourceId":9,"resourceCost":120},{"resourceId":28,"resourceCost":220}],"purchased":false},{"id":41,"upgradeType":"RESOURCE","name":"Obsidian Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25}],"resourceCosts":[{"resourceId":25,"resourceCost":350},{"resourceId":30,"resourceCost":475}],"purchased":false},{"id":42,"upgradeType":"RESOURCE","name":"Diamond Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceId":19,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12}],"resourceCosts":[{"resourceId":25,"resourceCost":750},{"resourceId":30,"resourceCost":200},{"resourceId":31,"resourceCost":1000}],"purchased":false},{"id":43,"upgradeType":"RESOURCE","name":"Temprous Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":4,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceId":6,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceId":10,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceId":12,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceId":19,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceId":23,"upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06}],"resourceCosts":[{"resourceId":16,"resourceCost":500},{"resourceId":31,"resourceCost":350},{"resourceId":23,"resourceCost":1350}],"purchased":false},{"id":44,"upgradeType":"WORKER","name":"Kelley the Deforester","description":"Dammit, Jim! I'm a lumberjack, not a doctor! (Allows you to assign workers for more tree varieties.)","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceId":0,"upgradeVariable":"WORKABLE","upgradeFactor":1,"resourceType":"WOOD","maxTier":5}],"resourceCosts":[{"resourceId":0,"resourceCost":3000}],"purchased":false},{"id":45,"upgradeType":"WORKER","name":"Elder Ent","description":"This respected ent elder will offer his services to help guide more of his kin back into this world.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":16,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":17,"upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceId":0,"resourceCost":60000},{"resourceId":17,"resourceCost":1}],"purchased":false},{"id":46,"upgradeType":"WORKER","name":"Mineral Enthusiast","description":"Once an officer of the law, this man has put his career aside to pursue his true passion: mining minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":13,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":26,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":27,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":28,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":29,"upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceId":0,"resourceCost":4000}],"purchased":false},{"id":47,"upgradeType":"WORKER","name":"Mineral Obsessive","description":"This guy REALLY likes minerals!","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":30,"upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceId":31,"upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceId":28,"resourceCost":375},{"resourceId":29,"resourceCost":300},{"resourceId":30,"resourceCost":30},{"resourceId":31,"resourceCost":20}],"purchased":false},{"id":48,"upgradeType":"WORKER","name":"Dwarven Miner","description":"Dwarves aren't actually very active miners. This guy just loves his job.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceId":30,"upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":4}],"resourceCosts":[{"resourceId":0,"resourceCost":4500}],"purchased":false},{"id":49,"upgradeType":"WORKER","name":"Dwarven Champion","description":"Dwarves are naturally inclined to be the best at whatever they do, even things that are totally un-dwarfish like mining.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceId":30,"upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":7}],"resourceCosts":[{"resourceId":0,"resourceCost":60000},{"resourceId":23,"resourceCost":10}],"purchased":false},{"id":50,"upgradeType":"WORKER","name":"Musical Lumberjacks","description":"This funny little tune helps the lumberjacks stay focused, but you'll NEVER get it out of your head. Increases worker yield by 60%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceId":1,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.6,"maxTier":5}],"resourceCosts":[{"resourceId":9,"resourceCost":300}],"purchased":false},{"id":51,"upgradeType":"WORKER","name":"Entking","description":"With their king at last restored to his former glory, the ents find themselves greatly invigorated.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceId":16,"upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceId":17,"upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceId":16,"resourceCost":500},{"resourceId":24,"resourceCost":150}],"purchased":false},{"id":52,"upgradeType":"WORKER","name":"Miner's Guild","description":"Form a guild to help your workers hone their skills. Miners harvest 15% more material.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceId":1,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceId":0,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15}],"resourceCosts":[{"resourceId":12,"resourceCost":500}],"purchased":false},{"id":53,"upgradeType":"WORKER","name":"Miner Musical","description":"Those who underperform are \"encouraged\" to sing along.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceId":1,"upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":6},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceId":0,"upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":5}],"resourceCosts":[{"resourceId":19,"resourceCost":1500}],"purchased":false},{"id":54,"upgradeType":"WORKER","name":"Temprous Master","description":"There is no other with the prowess this master posesses in handling temprous metal. Workers generate 50% more temprous.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"MINERAL","resourceId":23,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5},{"upgradeIsForWholeType":false,"resourceId":24,"upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5}],"resourceCosts":[{"resourceId":24,"resourceCost":250},{"resourceId":16,"resourceCost":50}],"purchased":false}];

/***/ }),

/***/ "./src/assets/json/workers.json":
/*!**************************************!*\
  !*** ./src/assets/json/workers.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"id":0,"cost":500,"resourceType":"WOOD","workerCount":0,"freeWorkers":0,"workersByResource":[{"resourceId":1,"workable":true,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":7,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":8,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":9,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":15,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":25,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":16,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":17,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true}]},{"id":1,"cost":2000,"resourceType":"METAL","workerCount":0,"freeWorkers":0,"workersByResource":[{"resourceId":2,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":3,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":4,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":5,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":6,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":10,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":11,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":12,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":18,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":19,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":20,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":21,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":22,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":23,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":24,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true}]},{"id":2,"cost":1350,"resourceType":"MINERAL","workerCount":0,"freeWorkers":0,"workersByResource":[{"resourceId":13,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":26,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":27,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":28,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":29,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":30,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true},{"resourceId":31,"workable":false,"workerCount":0,"workerYield":1,"sliderSettingValid":true}]}];

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