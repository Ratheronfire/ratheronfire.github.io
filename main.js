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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.resource-list {\r\n  float: left;\r\n}\r\n.tab-group {\r\n  margin-left: 15px;\r\n}\r\n.game-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.game-is-mobile .game-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\nh1.game-app-name {\r\n  margin-left: 8px;\r\n}\r\n.game-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  flex: 1;\r\n}\r\n.game-sidenav-container mat-sidenav {\r\n  width: 500px;\r\n}\r\n.game-is-mobile .game-sidenav-container mat-sidenav {\r\n  width: 100%;\r\n}\r\n.game-is-mobile .game-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  flex: 1 0 auto;\r\n}\r\n.sidenav-buttons {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n.toolbar-button-text {\r\n  display: inline-block;\r\n}\r\n.main-pane {\r\n  height: 100%;\r\n}\r\napp-clicker-main {\r\n  overflow-y: scroll;\r\n  max-height: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\" [class.game-is-mobile]=\"mobileQuery.matches\" [@.disabled]=\"disableAnimations\">\r\n  <mat-toolbar color=\"primary\" class=\"game-toolbar\">\r\n    <h1 class=\"game-app-name\">Age of Clicking</h1>\r\n    <div class=\"sidenav-buttons\">\r\n      <button mat-flat-button (click)=\"hideResourceList = !hideResourceList\">\r\n        <mat-icon>map</mat-icon><p class=\"toolbar-button-text\" *ngIf=\"!mobileQuery.matches\">Expand Map</p>\r\n      </button>\r\n      <button mat-flat-button (click)=\"snav.toggle()\" [matBadge]=\"affordableUpgradeCount\" [matBadgeHidden]=\"affordableUpgradeCount <= 0\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n        <mat-icon>menu</mat-icon><p class=\"toolbar-button-text\" *ngIf=\"!mobileQuery.matches\">Menu</p>\r\n      </button>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container class=\"game-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [opened]=\"!mobileQuery.matches\" [fixedInViewport]=\"mobileQuery.matches\" position=\"end\"\r\n      fixedTopGap=\"56\">\r\n      <mat-nav-list>\r\n        <mat-tab-group class=\"tab-group\" dynamicHeight>\r\n          <mat-tab label=\"Workers\">\r\n            <app-workers></app-workers>\r\n          </mat-tab>\r\n          <mat-tab label=\"Store\">\r\n            <app-store></app-store>\r\n          </mat-tab>\r\n          <mat-tab label=\"Upgrades{{affordableUpgradeCount > 0 ? ' (' + affordableUpgradeCount + ')' : ''}}\">\r\n            <app-upgrades></app-upgrades>\r\n          </mat-tab>\r\n          <mat-tab label=\"Log\">\r\n            <app-messages></app-messages>\r\n          </mat-tab>\r\n          <mat-tab label=\"Settings\">\r\n            <app-settings></app-settings>\r\n            <app-admin-debug *ngIf=\"debugMode\"></app-admin-debug>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div class=\"main-pane\">\r\n        <app-clicker-main class=\"resource-list\" [style.display]=\"hideResourceList? 'none': ''\"></app-clicker-main>\r\n        <app-map class=\"map\" [style.display]=\"mobileQuery.matches && !hideResourceList? 'none': ''\"></app-map>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n"

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
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
    function AppComponent(resourcesService, upgradesService, enemyService, settingsService, changeDetectorRef, ngZone, media) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.enemyService = enemyService;
        this.settingsService = settingsService;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.media = media;
        this.sidebarWidth = 600;
        this.hideResourceList = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        // window.Game = window.Game || {};
        // window.Game.Resources = window.Game.Resources || {};
        // window.Game.Resources.getResources = this.getResourceNames.bind(this);
        // window.Game.Resources.add = this.addToResource.bind(this);
        // window.Game.Upgrades = window.Game.Upgrades || {};
        // window.Game.Upgrades.getUpgrades = this.getUpgrades.bind(this);
        // window.Game.Upgrades.purchase = this.purchaseUpgrade.bind(this);
        window.onbeforeunload = function (event) {
            var message = 'Are you sure you want to leave this page? Unsaved data will be lost.';
            if (!event) {
                event = window.event;
            }
            event.returnValue = message;
            return message;
        };
    }
    AppComponent.prototype.getResourceNames = function () {
        var _this = this;
        return this.ngZone.run(function () { return _this.resourcesService.getResources().map(function (resource) { return resource.resourceEnum; }); });
    };
    AppComponent.prototype.addToResource = function (resourceEnum, amount) {
        var _this = this;
        this.ngZone.run(function () { return _this.resourcesService.resources.get(resourceEnum).addAmount(amount); });
    };
    AppComponent.prototype.getUpgrades = function () {
        var _this = this;
        return this.ngZone.run(function () { return _this.upgradesService.getUpgrades(); });
    };
    AppComponent.prototype.purchaseUpgrade = function (id) {
        var _this = this;
        return this.ngZone.run(function () { return _this.upgradesService.getUpgrade(id).purchaseUpgrade(); });
    };
    Object.defineProperty(AppComponent.prototype, "affordableUpgradeCount", {
        get: function () {
            var upgrades = this.upgradesService.getUpgrades(false, true, true);
            var affordableUpgrades = upgrades.filter(function (upgrade) { return upgrade.canAfford(); });
            return affordableUpgrades.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "disableAnimations", {
        get: function () {
            return this.settingsService.disableAnimations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "debugMode", {
        get: function () {
            return this.settingsService.debugMode;
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
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__["UpgradesService"],
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__["EnemyService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]])
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
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clicker-main/clicker-main.component */ "./src/app/components/clicker-main/clicker-main.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/workers/workers.component */ "./src/app/components/workers/workers.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/upgrades/upgrades.component */ "./src/app/components/upgrades/upgrades.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-debug/admin-debug.component */ "./src/app/components/admin-debug/admin-debug.component.ts");
/* harmony import */ var _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/about-dialog/about-dialog/about-dialog.component */ "./src/app/components/about-dialog/about-dialog/about-dialog.component.ts");
/* harmony import */ var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/save-dialog/save-dialog.component */ "./src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/crop/crop.directive */ "./src/app/directives/crop/crop.directive.ts");
/* harmony import */ var _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/map/map.directive */ "./src/app/directives/map/map.directive.ts");
/* harmony import */ var _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/no-scroll/no-scroll.directive */ "./src/app/directives/no-scroll/no-scroll.directive.ts");
/* harmony import */ var _components_enemy_enemy_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/enemy/enemy.component */ "./src/app/components/enemy/enemy.component.ts");
/* harmony import */ var _components_fighter_fighter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/fighter/fighter.component */ "./src/app/components/fighter/fighter.component.ts");
/* harmony import */ var _components_buildings_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/buildings/buildings/buildings.component */ "./src/app/components/buildings/buildings/buildings.component.ts");
/* harmony import */ var _components_tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tile-detail/tile-detail.component */ "./src/app/components/tile-detail/tile-detail.component.ts");
/* harmony import */ var _components_fighter_detail_fighter_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/fighter-detail/fighter-detail.component */ "./src/app/components/fighter-detail/fighter-detail.component.ts");
/* harmony import */ var _directives_snap_snap_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/snap/snap.directive */ "./src/app/directives/snap/snap.directive.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4__["ZoomableCanvasComponent"],
                _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_9__["ClickerMainComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
                _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_11__["WorkersComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"],
                _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_13__["UpgradesComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_16__["AdminDebugComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_14__["MapComponent"],
                _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_19__["CropDirective"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SaveDialogComponent"],
                _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_20__["MapDirective"],
                _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_21__["NoScrollDirective"],
                _components_enemy_enemy_component__WEBPACK_IMPORTED_MODULE_22__["EnemyComponent"],
                _components_fighter_fighter_component__WEBPACK_IMPORTED_MODULE_23__["FighterComponent"],
                _components_buildings_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_24__["BuildingsComponent"],
                _components_tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_25__["TileDetailComponent"],
                _components_fighter_detail_fighter_detail_component__WEBPACK_IMPORTED_MODULE_26__["FighterDetailComponent"],
                _directives_snap_snap_directive__WEBPACK_IMPORTED_MODULE_27__["SnapDirective"],
                _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AboutDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_5__["MaterialImportModule"],
                src_app_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__["ColorPickerModule"]
            ],
            entryComponents: [
                _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AboutDialogComponent"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_18__["SaveDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-dialog/about-dialog/about-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/about-dialog/about-dialog/about-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\n\r\n* {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n\r\na {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/about-dialog/about-dialog/about-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/about-dialog/about-dialog/about-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Age Of Clicking - Version Alpha 3.2</h1>\n<br />\n\n<div>\n  An exploration-based incremental game by Ratheronfire.\n  <br />\n  Thanks to the <a href=\"http://reddit.com/r/incremental_games/\" target=\"_blank\">/r/incremental_games</a> community for helping to test the game!\n  <br />\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8DTWKHUT9DYZN\" target=\"_blank\">Donate</a> If you enjoyed the game and want to help support me, feel free to drop a few bucks here! It's not at all required, but it's appreciated.\n\n  <div>\n    <h2>Also Check Out:</h2>\n    <li>\n      <a href=\"http://orteil.dashnet.org/cookieclicker/\" target=\"_blank\">Cookie Clicker</a> The incremental game that started them all!\n    </li>\n    <li>\n      <a href=\"http://scholtek.com/minedefense\" target=\"_blank\">Mine Defense</a> A seemingly simple game with a surprising amount of depth.\n    </li>\n    <li>\n      <a href=\"http://bloodrizer.ru/games/kittens/\" target=\"_blank\">Kittens Game</a> Filled with gradually unfolding systems and resources that all feed off of eachother.\n    </li>\n  </div>\n</div>\n\n<div>\n  <h2>Version History</h2>\n\n  Pre-Alpha 3\n  <li>\n    Complete lack of usable UI\n  </li>\n  <li>\n    Only a few resources & upgrades were added at this point.\n  </li>\n\n  <br />\n  Alpha 3\n  <li>\n    UI Overhaul\n  </li>\n  <li>\n    New map mystem\n  </li>\n  <li>\n    Expanded endgame resources\n  </li>\n  <li>\n    Added enemies, tower defense, and tile upgrading.\n  </li>\n  <li>\n    Added new market resources which automatically sell your stored resources.\n  </li>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about-dialog/about-dialog/about-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/about-dialog/about-dialog/about-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: AboutDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDialogComponent", function() { return AboutDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var AboutDialogComponent = /** @class */ (function () {
    function AboutDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AboutDialogComponent.prototype.ngOnInit = function () {
    };
    AboutDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AboutDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-dialog',
            template: __webpack_require__(/*! ./about-dialog.component.html */ "./src/app/components/about-dialog/about-dialog/about-dialog.component.html"),
            styles: [__webpack_require__(/*! ./about-dialog.component.css */ "./src/app/components/about-dialog/about-dialog/about-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AboutDialogComponent);
    return AboutDialogComponent;
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

module.exports = "<h2>Debug</h2>\r\n\r\n<mat-checkbox class=\"filterAccessible\" checked=\"true\" [(ngModel)]=\"adminService.filterAccessible\">Hide Inaccessible\r\n  Upgrades</mat-checkbox>\r\n<br />\r\n\r\n<mat-divider></mat-divider>\r\n<br />\r\n\r\n<div>\r\n  <mat-select placeholder=\"Resource\" style=\"width: 200px\" [(ngModel)]=\"selectedResource\">\r\n    <mat-option *ngFor=\"let resource of resourcesService.getResources()\" [value]=\"resource\">\r\n      {{resource.name | titlecase}}\r\n    </mat-option>\r\n  </mat-select>\r\n\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"amount\">\r\n  </mat-form-field>\r\n  <button mat-raised-button (click)=\"addResourceAmount()\">Add to all resources</button>\r\n  <div *ngIf=\"selectedResource !== undefined\">\r\n    <button mat-raised-button (click)=\"addResourceAmount(selectedResource)\">Add to {{selectedResource.name |\r\n      titlecase}}</button>\r\n  </div>\r\n</div>\r\n"

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
    function AdminDebugComponent(resourcesService, adminService) {
        this.resourcesService = resourcesService;
        this.adminService = adminService;
        this.filterAccessible = true;
        this.amount = 0;
    }
    AdminDebugComponent.prototype.ngOnInit = function () { };
    AdminDebugComponent.prototype.addResourceAmount = function (selectedResource) {
        if (!selectedResource) {
            for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
                var resource = _a[_i];
                resource.addAmount(+this.amount);
            }
            return;
        }
        selectedResource.addAmount(+this.amount);
    };
    AdminDebugComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-debug',
            template: __webpack_require__(/*! ./admin-debug.component.html */ "./src/app/components/admin-debug/admin-debug.component.html"),
            styles: [__webpack_require__(/*! ./admin-debug.component.css */ "./src/app/components/admin-debug/admin-debug.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminDebugComponent);
    return AdminDebugComponent;
}());



/***/ }),

/***/ "./src/app/components/buildings/buildings/buildings.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/buildings/buildings/buildings.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BuildingsComponent's private CSS styles */\r\n.buildings {\r\n  position: absolute;\r\n  top: 72px;\r\n  width: 140px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n\r\n  background: white;\r\n\r\n  flex-direction: column;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.resource-list {\r\n  text-align: center;\r\n}\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/buildings/buildings/buildings.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/buildings/buildings/buildings.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"selectedBuilding\"\r\nclass=\"buildings\">\r\n<mat-button-toggle *ngFor=\"let buildingTile of getBuildingTileArray(true)\" [value]=\"buildingTile\" class=\"building\"\r\n  [disabled]=\"!canAffordBuilding(buildingTile.tileType)\" (click)=\"mapService.buildingListVisible = false\">\r\n  <div class=\"title\" matTooltip=\"{{buildingTile.description}}\" matTooltipPosition=\"above\">\r\n    {{buildingTile.name}}\r\n  </div>\r\n  <div class=\"resource-list\">\r\n    <div *ngFor=\"let resourceCost of buildingTile.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\r\n      matTooltipPosition=\"below\">\r\n      <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\r\n      {{resourceCost.resourceCost}}\r\n    </div>\r\n  </div>\r\n</mat-button-toggle>\r\n</mat-button-toggle-group>\r\n"

/***/ }),

/***/ "./src/app/components/buildings/buildings/buildings.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/buildings/buildings/buildings.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuildingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsComponent", function() { return BuildingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuildingsComponent = /** @class */ (function () {
    function BuildingsComponent(resourcesService, buildingsService, fighterService, settingsService, mapService) {
        this.resourcesService = resourcesService;
        this.buildingsService = buildingsService;
        this.fighterService = fighterService;
        this.settingsService = settingsService;
        this.mapService = mapService;
    }
    BuildingsComponent.prototype.ngOnInit = function () {
    };
    BuildingsComponent.prototype.selectBuilding = function (buildingTile) {
        if (this.selectedBuilding === buildingTile) {
            this.selectedBuilding = undefined;
        }
        else {
            this.fighterService.selectedFighterType = undefined;
            this.selectedBuilding = buildingTile;
        }
    };
    BuildingsComponent.prototype.canAffordBuilding = function (buildingType) {
        return this.buildingsService.canAffordBuilding(this.buildingTiles[buildingType]);
    };
    BuildingsComponent.prototype.createBuilding = function (tile, buildingType) {
        var buildingCreated = this.buildingsService.createBuilding(tile, buildingType);
    };
    BuildingsComponent.prototype.clearBuilding = function (tile) {
        this.buildingsService.clearBuilding(tile);
    };
    Object.defineProperty(BuildingsComponent.prototype, "buildingTiles", {
        get: function () {
            return this.mapService.buildingTiles;
        },
        enumerable: true,
        configurable: true
    });
    BuildingsComponent.prototype.getBuildingTileArray = function (filterByPlaceable) {
        var tiles = this.mapService.buildingTileArray;
        if (filterByPlaceable) {
            tiles = tiles.filter(function (tile) { return tile.placeable; });
        }
        return tiles;
    };
    BuildingsComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    Object.defineProperty(BuildingsComponent.prototype, "selectedBuilding", {
        get: function () {
            return this.buildingsService.selectedBuilding;
        },
        set: function (value) {
            this.buildingsService.selectedBuilding = value;
        },
        enumerable: true,
        configurable: true
    });
    BuildingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildings',
            template: __webpack_require__(/*! ./buildings.component.html */ "./src/app/components/buildings/buildings/buildings.component.html"),
            styles: [__webpack_require__(/*! ./buildings.component.css */ "./src/app/components/buildings/buildings/buildings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__["BuildingsService"],
            _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_3__["FighterService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"]])
    ], BuildingsComponent);
    return BuildingsComponent;
}());



/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ClickerMainComponent's private CSS styles */\r\n.resources {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.resources mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.resources mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.resources mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.resources .resource-button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.resources .resource-button.warn {\r\n  background-color: darkred;\r\n}\r\n.resources .resource-button:hover {\r\n  left: .1em;\r\n}\r\n.resources .resource-button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.resources .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.button-container {\r\n  position: relative;\r\n}\r\n.travelling-count {\r\n  position: absolute;\r\n  top: 22px;\r\n  right: 3px;\r\n}\r\n.resource-button {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.harvest-progress {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n\r\n  height: 100%;\r\n  top: 0px;\r\n\r\n  position: absolute;\r\n  opacity: 0.5;\r\n}\r\n.resource-img {\r\n  position: absolute;\r\n\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.key-container {\r\n  position: absolute;\r\n  left: 50px;\r\n}\r\n.key-container img {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n.key-container p {\r\n  z-index: 1;\r\n  position: absolute;\r\n\r\n  top: 9px;\r\n  right: 5px;\r\n\r\n  margin: 0;\r\n  line-height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"resources noselect\">\r\n  <mat-accordion multi=\"true\">\r\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of resourceTypes | enumToArray\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          {{resourceType}}\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <div class='button-container' *ngFor=\"let resource of getResources(resourceType, adminService.filterAccessible)\"\r\n        matTooltip=\"{{getTooltipMessage(resource)}}\" matTooltipPosition=\"right\">\r\n        <button mat-raised-button class=\"resource-button\" [ngClass]=\"{'warn': resourceIsBeingStolen(resource)}\"\r\n          [disabled]=\"!canHarvest(resource, resource.harvestYield)\" (click)='startHarvesting(resource)'>\r\n          <div class=\"key-container\" *ngIf=\"resource.bindIndex >= 0\">\r\n            <img src=\"./assets/sprites/key.png\">\r\n            <p>{{resource.bindIndex}}</p>\r\n          </div>\r\n\r\n          <mat-card-title>{{resource.name | titlecase }}</mat-card-title>\r\n          <mat-card-subtitle>{{resource.amount | number:'1.0-0'}}</mat-card-subtitle>\r\n          <mat-progress-bar [class.hidden]=\"!resource.harvesting\" class=\"harvest-progress\" [value]=\"resource.progressBarValue\"></mat-progress-bar>\r\n\r\n          <img class=\"resource-img\" src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\" *ngIf=\"resource.iconPath !== ''\">\r\n          <div class='travelling-count' *ngIf=\"resource.amountTravelling > 0\">{{resource.amountTravelling}} Travelling</div>\r\n        </button>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ul>\r\n"

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
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/tooltip/tooltip.service */ "./src/app/services/tooltip/tooltip.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _services_tick_tick_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/tick/tick.service */ "./src/app/services/tick/tick.service.ts");
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
    function ClickerMainComponent(clickerMainService, resourcesService, workersService, tooltipService, mapService, enemyService, adminService, tickService) {
        this.clickerMainService = clickerMainService;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.tooltipService = tooltipService;
        this.mapService = mapService;
        this.enemyService = enemyService;
        this.adminService = adminService;
        this.tickService = tickService;
        this.resourceTypes = _objects_resourceData__WEBPACK_IMPORTED_MODULE_3__["ResourceType"];
    }
    ClickerMainComponent.prototype.ngOnInit = function () {
    };
    ClickerMainComponent.prototype.getResources = function (resourceType, filterByAccessible) {
        return this.resourcesService.getResources(this.resourceTypes[resourceType], false, filterByAccessible);
    };
    ClickerMainComponent.prototype.getTooltipMessage = function (resource) {
        return this.tooltipService.getResourceTooltip(resource);
    };
    ClickerMainComponent.prototype.canHarvest = function (resource, multiplier) {
        return !resource.harvesting && resource.canHarvest(multiplier);
    };
    ClickerMainComponent.prototype.startHarvesting = function (resource) {
        this.clickerMainService.startHarvesting(resource);
    };
    ClickerMainComponent.prototype.resourceIsBeingStolen = function (resource) {
        return this.enemyService.resourceIsBeingStolen(resource);
    };
    ClickerMainComponent.prototype.harvestResource = function (resource) {
        this.clickerMainService.harvestResource(resource);
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
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_7__["EnemyService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"],
            _services_tick_tick_service__WEBPACK_IMPORTED_MODULE_9__["TickService"]])
    ], ClickerMainComponent);
    return ClickerMainComponent;
}());



/***/ }),

/***/ "./src/app/components/enemy/enemy.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/enemy/enemy.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/enemy/enemy.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/enemy/enemy.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"enemyService.spawnEnemy()\">Spawn Enemy</button>\r\n"

/***/ }),

/***/ "./src/app/components/enemy/enemy.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/enemy/enemy.component.ts ***!
  \*****************************************************/
/*! exports provided: EnemyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyComponent", function() { return EnemyComponent; });
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EnemyComponent = /** @class */ (function () {
    function EnemyComponent(enemyService) {
        this.enemyService = enemyService;
    }
    EnemyComponent.prototype.ngOnInit = function () {
    };
    EnemyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enemy',
            template: __webpack_require__(/*! ./enemy.component.html */ "./src/app/components/enemy/enemy.component.html"),
            styles: [__webpack_require__(/*! ./enemy.component.css */ "./src/app/components/enemy/enemy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_0__["EnemyService"]])
    ], EnemyComponent);
    return EnemyComponent;
}());



/***/ }),

/***/ "./src/app/components/fighter-detail/fighter-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/fighter-detail/fighter-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fighter-tooltip {\r\n  top: var(--detail-tooltip-top);\r\n  left: var(--detail-tooltip-left);\r\n\r\n  position: absolute;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.repair-container {\r\n  display: inline-flex;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.repair-container button {\r\n  position: relative;\r\n  top: -25%;\r\n}\r\n\r\n.stats-container {\r\n  width: 100%;\r\n}\r\n\r\n.upgrade-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.upgrade-button mat-icon {\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.anchor-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 55px;\r\n  height: 55px;\r\n}\r\n\r\n.anchor-container #center {\r\n  position: absolute;\r\n\r\n  left: 15px;\r\n  top: 15px;\r\n}\r\n\r\n.anchor-container .corner {\r\n  display: none;\r\n}\r\n\r\n.anchor-container:hover .corner {\r\n  display: inherit;\r\n}\r\n\r\n.anchor-container a {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.anchor-container a:hover {\r\n  color: black;\r\n}\r\n\r\n.anchor-container #arrow-upper-left {\r\n  -webkit-transform: rotate(225deg);\r\n  transform: rotate(225deg);\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.anchor-container #arrow-upper-right {\r\n  -webkit-transform: rotate(315deg);\r\n  transform: rotate(315deg);\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.anchor-container #arrow-lower-left {\r\n  -webkit-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.anchor-container #arrow-lower-right {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/fighter-detail/fighter-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/fighter-detail/fighter-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card appSnap [snapSetting]=\"snapSetting\" id=\"fighter-tooltip\">\r\n  <div class=\"anchor-container\">\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-upper-left\" (click)=\"snapSetting = 'upperLeft'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-upper-right\" (click)=\"snapSetting = 'upperRight'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon id=\"center\" (click)=\"snapSetting = 'free'\">all_out</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-lower-left\" (click)=\"snapSetting = 'lowerLeft'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-lower-right\" (click)=\"snapSetting = 'lowerRight'\">arrow_forward</mat-icon>\r\n    </a>\r\n  </div>\r\n  <div *ngIf=\"focusedFighter\">\r\n    <mat-card-title>{{focusedFighter.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{focusedFighter.description}}</mat-card-subtitle>\r\n\r\n    <div class=\"repair-container\">\r\n      {{focusedFighter.health}}/{{focusedFighter.maxHealth}} Health\r\n      <div *ngIf=\"focusedFighter.health < focusedFighter.maxHealth\">\r\n        <button mat-raised-button (click)=\"focusedFighter.heal()\" color=\"accent\" [disabled]=\"!focusedFighter.canHeal()\">\r\n          Heal\r\n          <div class=\"resource-list\">\r\n            <div matTooltip=\"{{focusedFighter.healCost | number:'1.0-2'}} {{getResource('GOLD').name | titlecase}}\"\r\n              matTooltipPosition=\"below\">\r\n              <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n              {{focusedFighter.healCost | number:'1.0-2'}}\r\n            </div>\r\n          </div>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-card-content>\r\n      <button mat-raised-button color=\"warn\" (click)=\"removeFighter()\">Remove Fighter</button>\r\n\r\n      <h3>Stats</h3>\r\n      <table class=\"stats-container\">\r\n        <tbody>\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Max Health: {{focusedFighter.maxHealth | number:'1.0-2'}}\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['MAXHEALTH']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('MAXHEALTH')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('MAXHEALTH')\" matTooltip=\"Level {{focusedFighter.statLevels['MAXHEALTH'] + 1}}: {{focusedFighter.getUpgradedStat('MAXHEALTH') | number:'1.0-2'}} Max Health\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['MAXHEALTH'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Attack: {{focusedFighter.attack | number:'1.0-2'}}\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['ATTACK']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('ATTACK')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('ATTACK')\" matTooltip=\"Level {{focusedFighter.statLevels['ATTACK'] + 1}}: {{focusedFighter.getUpgradedStat('ATTACK') | number:'1.0-2'}} Attack\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['ATTACK'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Defense: {{focusedFighter.defense | number:'1.0-2'}}\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['DEFENSE']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('DEFENSE')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('DEFENSE')\" matTooltip=\"Level {{focusedFighter.statLevels['DEFENSE'] + 1}}: {{focusedFighter.getUpgradedStat('DEFENSE') | number:'1.0-2'}} Defense\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['DEFENSE'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Attack Range: {{focusedFighter.attackRange | number:'1.0-2'}}\r\n                Tile{{focusedFighter.attackRange === 1 ? '' : 's'}}\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['RANGE']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('RANGE')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('RANGE')\" matTooltip=\"Level {{focusedFighter.statLevels['RANGE'] + 1}}: {{focusedFighter.getUpgradedStat('RANGE') | number:'1.0-2'}} Attack Range\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['RANGE'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\" *ngIf=\"focusedFighter.moveable\">\r\n            <td>\r\n              <p>\r\n                Movement Speed: {{focusedFighter.animationSpeed * 100 | number:'1.0-2'}}\r\n                Tile{{focusedFighter.animationSpeed === 1 ? '' : 's'}}/second\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['MOVEMENTSPEED']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('MOVEMENTSPEED')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('MOVEMENTSPEED')\" matTooltip=\"Level {{focusedFighter.statLevels['MOVEMENTSPEED'] + 1}}: {{focusedFighter.getUpgradedStat('MOVEMENTSPEED') * 100 | number:'1.0-2'}} Tiles/Second\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['MOVEMENTSPEED'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Fire Rate: {{1000 / focusedFighter.fireMilliseconds | number:'1.0-2'}}/Second\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedFighter.statLevels['FIRERATE']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('FIRERATE')\"\r\n                [disabled]=\"!focusedFighter.canUpgradeStat('FIRERATE')\" matTooltip=\"Level {{focusedFighter.statLevels['FIRERATE'] + 1}}: {{1000 / focusedFighter.getUpgradedStat('FIRERATE') | number:'1.0-2'}}/Second\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedFighter.statCosts['FIRERATE'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </mat-card-content>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/fighter-detail/fighter-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/fighter-detail/fighter-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: FighterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterDetailComponent", function() { return FighterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FighterDetailComponent = /** @class */ (function () {
    function FighterDetailComponent(mapService, buildingsService, resourcesService) {
        this.mapService = mapService;
        this.buildingsService = buildingsService;
        this.resourcesService = resourcesService;
        this.snapSetting = 'free';
    }
    FighterDetailComponent.prototype.ngOnInit = function () {
    };
    FighterDetailComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    FighterDetailComponent.prototype.removeFighter = function () {
        if (!this.focusedFighter) {
            return;
        }
        this.focusedFighter.health = 0;
        this.focusedTile = undefined;
        this.focusedFighter = undefined;
    };
    Object.defineProperty(FighterDetailComponent.prototype, "focusedTile", {
        get: function () {
            return this.mapService.focusedTile;
        },
        set: function (value) {
            this.mapService.focusedTile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterDetailComponent.prototype, "focusedFighter", {
        get: function () {
            return this.mapService.focusedFighter;
        },
        set: function (value) {
            this.mapService.focusedFighter = value;
        },
        enumerable: true,
        configurable: true
    });
    FighterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fighter-detail',
            template: __webpack_require__(/*! ./fighter-detail.component.html */ "./src/app/components/fighter-detail/fighter-detail.component.html"),
            styles: [__webpack_require__(/*! ./fighter-detail.component.css */ "./src/app/components/fighter-detail/fighter-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__["BuildingsService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]])
    ], FighterDetailComponent);
    return FighterDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/fighter/fighter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/fighter/fighter.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* FightersComponent's private CSS styles */\r\n.fighters {\r\n  position: absolute;\r\n  top: 72px;\r\n  left: 392px;\r\n  width: 134px;\r\n  display: -ms-grid;\r\n  display: grid;\r\n\r\n  background: white;\r\n\r\n  flex-direction: column;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.resource-list {\r\n  text-align: center;\r\n}\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/fighter/fighter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/fighter/fighter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"selectedFighterType\" class=\"fighters\">\r\n  <mat-button-toggle *ngFor=\"let fighterType of fighterService.fighterTypes\" [value]=\"fighterType\" class=\"fighter\"\r\n    [disabled]=\"!canAffordFighter(fighterType)\" (click)=\"mapService.fighterListVisible = false\">\r\n    <div class=\"title\" matTooltip=\"{{fighterType.description}}\" matTooltipPosition=\"above\">\r\n      {{fighterType.name}}\r\n    </div>\r\n    <div class=\"resource-list\">\r\n      <div matTooltip=\"{{fighterType.cost}} {{getResource('GOLD').name | titlecase}}\"\r\n        matTooltipPosition=\"below\">\r\n        <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n        {{fighterType.cost}}\r\n      </div>\r\n    </div>\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n"

/***/ }),

/***/ "./src/app/components/fighter/fighter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/fighter/fighter.component.ts ***!
  \*********************************************************/
/*! exports provided: FighterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterComponent", function() { return FighterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FighterComponent = /** @class */ (function () {
    function FighterComponent(resourcesService, settingsService, buildingsService, fighterService, mapService) {
        this.resourcesService = resourcesService;
        this.settingsService = settingsService;
        this.buildingsService = buildingsService;
        this.fighterService = fighterService;
        this.mapService = mapService;
    }
    FighterComponent.prototype.ngOnInit = function () {
    };
    FighterComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    FighterComponent.prototype.canAffordFighter = function (fighterType) {
        return this.resourcesService.resources.get(_objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceEnum"].Gold).amount >= fighterType.cost;
    };
    FighterComponent.prototype.selectFigherType = function (fighterType) {
        if (this.selectedFighterType === fighterType) {
            this.selectedFighterType = undefined;
        }
        else {
            this.buildingsService.selectedBuilding = undefined;
            this.selectedFighterType = fighterType;
        }
    };
    Object.defineProperty(FighterComponent.prototype, "fighterTypes", {
        get: function () {
            return this.fighterService.fighterTypes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterComponent.prototype, "selectedFighterType", {
        get: function () {
            return this.fighterService.selectedFighterType;
        },
        set: function (value) {
            this.fighterService.selectedFighterType = value;
        },
        enumerable: true,
        configurable: true
    });
    FighterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fighter',
            template: __webpack_require__(/*! ./fighter.component.html */ "./src/app/components/fighter/fighter.component.html"),
            styles: [__webpack_require__(/*! ./fighter.component.css */ "./src/app/components/fighter/fighter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_5__["ResourcesService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__["BuildingsService"],
            _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_3__["FighterService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], FighterComponent);
    return FighterComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MapComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nh3 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n#canvas-container {\r\n  display: flex;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.cursor-tools {\r\n  position: absolute;\r\n  top: 0;\r\n\r\n  overflow-x: auto;\r\n  max-width: 100%;\r\n\r\n  background: white;\r\n}\r\n.key-container {\r\n  position: absolute;\r\n}\r\n.key-container img {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n.key-container p {\r\n  z-index: 1;\r\n  position: absolute;\r\n\r\n  top: 10px;\r\n  right: 3px;\r\n\r\n  margin: 0;\r\n  line-height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas-container\" tabindex=\"1\">\r\n  <canvas class=\"noselect\" appNoScroll appMap width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\" oncontextmenu=\"return false\"></canvas>\r\n\r\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapService.cursorTool\" class=\"cursor-tools\"\r\n    (valueChange)=\"clearFocus()\">\r\n    <mat-button-toggle value=\"PLACEBUILDINGS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(!mapService.buildingListVisible, false)\">\r\n      <div class=\"key-container\">\r\n        <img src=\"./assets/sprites/key.png\">\r\n        <p>Q</p>\r\n      </div>\r\n      <mat-icon color=\"primary\">add_photo_alternate</mat-icon>\r\n      <br />\r\n      Place Buildings\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"CLEARBUILDINGS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\r\n      <div class=\"key-container\">\r\n        <img src=\"./assets/sprites/key.png\">\r\n        <p>W</p>\r\n      </div>\r\n      <mat-icon color=\"primary\">delete</mat-icon>\r\n      <br />\r\n      Clear Buildings\r\n    </mat-button-toggle>\r\n    <mat-button-toggle value=\"TILEDETAIL\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\r\n      <div class=\"key-container\">\r\n        <img src=\"./assets/sprites/key.png\">\r\n        <p>E</p>\r\n      </div>\r\n      <mat-icon color=\"primary\">mode_comment</mat-icon>\r\n      <br />\r\n      Tile Details\r\n    </mat-button-toggle>\r\n    <mat-button-toggle *ngIf=\"enemyService.enemiesActive\" value=\"PLACEFIGHTERS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, !this.mapService.fighterListVisible)\">\r\n      <div class=\"key-container\">\r\n        <img src=\"./assets/sprites/key.png\">\r\n        <p>R</p>\r\n      </div>\r\n      <mat-icon color=\"primary\">directions_walk</mat-icon>\r\n      <br />\r\n      Place Fighters\r\n    </mat-button-toggle>\r\n    <mat-button-toggle *ngIf=\"enemyService.enemiesActive\" value=\"FIGHTERDETAIL\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\r\n      <div class=\"key-container\">\r\n        <img src=\"./assets/sprites/key.png\">\r\n        <p>T</p>\r\n      </div>\r\n      <mat-icon color=\"primary\">directions_run</mat-icon>\r\n      <br />\r\n      Fighter Details\r\n    </mat-button-toggle>\r\n  </mat-button-toggle-group>\r\n\r\n  <app-buildings *ngIf=\"mapService.buildingListVisible\"></app-buildings>\r\n  <app-fighter *ngIf=\"mapService.fighterListVisible\"></app-fighter>\r\n\r\n  <app-tile-detail [ngClass]=\"{'hidden': !mapService.focusedBuildingTile && !mapService.focusedResourceTile}\"></app-tile-detail>\r\n  <app-fighter-detail [ngClass]=\"{'hidden': !mapService.focusedFighter}\"></app-fighter-detail>\r\n</div>\r\n"

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
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
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
    function MapComponent(mapService, buildingsService, resourcesService, enemyService, adminService) {
        this.mapService = mapService;
        this.buildingsService = buildingsService;
        this.resourcesService = resourcesService;
        this.enemyService = enemyService;
        this.adminService = adminService;
        this.mapTileTypes = _objects_tile__WEBPACK_IMPORTED_MODULE_1__["MapTileType"];
        this.buildingTileTypes = _objects_tile__WEBPACK_IMPORTED_MODULE_1__["BuildingTileType"];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.mapService.initializeMap();
    };
    MapComponent.prototype.clearFocus = function () {
        this.mapService.focusedTile = undefined;
        this.mapService.focusedBuildingTile = undefined;
        this.mapService.focusedResourceTile = undefined;
        this.mapService.focusedResources = undefined;
        this.mapService.focusedFighter = undefined;
    };
    MapComponent.prototype.setPlacementGroupVisibility = function (buildingVisibility, fighterVisibility) {
        this.mapService.buildingListVisible = buildingVisibility;
        this.mapService.fighterListVisible = fighterVisibility;
    };
    Object.defineProperty(MapComponent.prototype, "canvasWidth", {
        get: function () {
            return this.mapService.canvasWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapComponent.prototype, "canvasHeight", {
        get: function () {
            return this.mapService.canvasHeight;
        },
        enumerable: true,
        configurable: true
    });
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
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_3__["BuildingsService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_6__["ResourcesService"],
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__["EnemyService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
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

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\ntable.message-table {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"messagesService.messagesDataSource\" matSort matSortActive=\"timestamp\" matSortDirection=\"desc\" class=\"message-table mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"source\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Source </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let message\"> {{message.source | titlecase}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"timestamp\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Timestamp </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let message\"> {{message.timestamp | date:'h:mm a'}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"message\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Message </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let message\"> {{message.message}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </table>\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/app/services/messages/messages.service.ts");
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
    MessagesComponent.prototype.ngOnInit = function () {
        this.messagesService.messagesDataSource.sort = this.sort;
    };
    Object.defineProperty(MessagesComponent.prototype, "messages", {
        get: function () {
            return this.messagesService.messages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessagesComponent.prototype, "displayedColumns", {
        get: function () {
            return ['source', 'timestamp', 'message'];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], MessagesComponent.prototype, "sort", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
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

module.exports = "<div *ngIf=\"!exportMode\">\r\n  Paste Save\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Save Data\" [(ngModel)]=\"saveData\" (submit)=\"exportData()\">\r\n  </mat-form-field>\r\n\r\n  <div>\r\n    <button mat-raised-button color=\"accent\" (click)=\"exportData()\">Load</button>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Cancel</button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"exportMode\" style=\"word-wrap: break-word\">\r\n  <textarea readonly id=\"saveData\" class=\"full-width\">{{saveData}}</textarea>\r\n  <div>\r\n    <button mat-raised-button class=\"copy-button\" color=\"accent\" data-clipboard-action=\"copy\" data-clipboard-target=\"#saveData\">Copy to Clipboard</button>\r\n    <button mat-raised-button (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\na {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\na:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\na:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\na.active {\r\n  color: #039be5;\r\n}\r\n\r\nmat-panel-title {\r\n  display: -ms-grid;\r\n  display: grid;\r\n}\r\n\r\n.color-input {\r\n    color: rgb(108, 88, 88);\r\n    font-weight: bolder;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Version {{settingsService.gameVersion}} -\r\n  <a (click)=\"openAboutDialog()\">About</a>\r\n</h3>\r\n\r\n<mat-accordion multi=\"true\">\r\n  <mat-expansion-panel expanded=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <mat-icon color=\"primary\">save</mat-icon>\r\n        Save/Load\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-select placeholder=\"Autosave Interval (Minutes)\" [(ngModel)]=\"autosaveInterval\" (valueChange)=\"settingsService.setAutosave()\">\r\n        <mat-option [value]=\"-1\">Disable</mat-option>\r\n        <mat-option [value]=\"60000\">1</mat-option>\r\n        <mat-option [value]=\"900000\">15</mat-option>\r\n        <mat-option [value]=\"1800000\">30</mat-option>\r\n        <mat-option [value]=\"3600000\">60</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"saveGame()\">Save</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"deleteGame()\">Delete Save</button>\r\n\r\n    <button mat-raised-button (click)=\"exportSave()\">Export Save</button>\r\n    <button mat-raised-button (click)=\"importSave()\">Import Save</button>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel expanded=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <mat-icon color=\"primary\">list</mat-icon>\r\n        Interface\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-checkbox [(ngModel)]=\"slimInterface\">Slim Mode</mat-checkbox>\r\n    <!-- <br />\r\n      <mat-checkbox [(ngModel)]=\"disableAnimations\">Disable Animations</mat-checkbox> -->\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-select placeholder=\"Resource Shortcuts\" [formControl]=\"bindSelected\" multiple (selectionChange)=\"resourceBindChange($event)\">\r\n        <mat-option *ngFor=\"let resource of resourcesService.getResources(false, false, true)\" [(value)]=\"resource.resourceEnum\">\r\n          {{resource.name | titlecase}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"bindSelected.hasError('length')\">\r\n        No more than 10 resource shortcuts allowed.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel expanded=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <mat-icon color=\"primary\">map</mat-icon>\r\n        Map\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-checkbox [(ngModel)]=\"mapLowFramerate\">Limit Framerate</mat-checkbox>\r\n    <br />\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input class=\"color-input\" matInput placeholder=\"Player Harvest Color\" [(colorPicker)]=\"resourceAnimationColors['PLAYERSPAWNED']\"\r\n        [style.background]=\"resourceAnimationColors['PLAYERSPAWNED']\" [value]=\"resourceAnimationColors['PLAYERSPAWNED']\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input class=\"color-input\" matInput placeholder=\"Worker Harvest Color\" [(colorPicker)]=\"resourceAnimationColors['WORKERSPAWNED']\"\r\n        [style.background]=\"resourceAnimationColors['WORKERSPAWNED']\" [value]=\"resourceAnimationColors['WORKERSPAWNED']\" />\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input class=\"color-input\" matInput placeholder=\"Sold Resource Color\" [(colorPicker)]=\"resourceAnimationColors['SOLD']\"\r\n        [style.background]=\"resourceAnimationColors['SOLD']\" [value]=\"resourceAnimationColors['SOLD']\" />\r\n    </mat-form-field>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel expanded=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <mat-icon color=\"primary\">assessment</mat-icon>\r\n        Log\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <button mat-raised-button (click)=\"messagesService.clear()\">Clear</button>\r\n\r\n    <br />\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput type=\"number\" placeholder=\"Log History\" min=\"0\" max=\"10000\" [(ngModel)]=\"messagesService.messageLimit\">\r\n    </mat-form-field>\r\n\r\n    <br />\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-select placeholder=\"Visible Log Sources\" [(ngModel)]=\"messagesService.visibleSources\" (ngModelChange)=\"messagesService.getFilteredMessages()\"\r\n        multiple>\r\n        <mat-option *ngFor=\"let messageSource of messageSources | enumToArray\" [(value)]=\"messageSources[messageSource]\">\r\n          {{messageSource | titlecase}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel expanded=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <mat-icon color=\"primary\">bug_report</mat-icon>\r\n        Debug\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <mat-checkbox [(ngModel)]=\"debugMode\">Debug Mode</mat-checkbox>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

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
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/messages/messages.service */ "./src/app/services/messages/messages.service.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../objects/message */ "./src/app/objects/message.ts");
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
    function SettingsComponent(settingsService, resourcesService, messagesService) {
        this.settingsService = settingsService;
        this.resourcesService = resourcesService;
        this.messagesService = messagesService;
        this.messageSources = _objects_message__WEBPACK_IMPORTED_MODULE_4__["MessageSource"];
        this.resourceBindErrorState = false;
    }
    SettingsComponent.prototype.ngAfterViewInit = function () {
        this.loadGame();
        this.setAutosave();
    };
    SettingsComponent.prototype.setAutosave = function () {
        this.settingsService.setAutosave();
    };
    SettingsComponent.prototype.saveGame = function () {
        this.settingsService.saveGame();
    };
    SettingsComponent.prototype.loadGame = function () {
        this.settingsService.loadGame();
        this.bindSelected.setValue(this.resourceBinds);
        this.resourceBindChange({ 'source': null, 'value': this.resourceBinds });
    };
    SettingsComponent.prototype.deleteGame = function () {
        if (confirm('Are you sure you want to delete your save?')) {
            this.settingsService.deleteSave();
        }
    };
    SettingsComponent.prototype.resourceBindChange = function (event) {
        this.settingsService.resourceBindChange(event);
    };
    SettingsComponent.prototype.openAboutDialog = function () {
        this.settingsService.openAboutDialog();
    };
    SettingsComponent.prototype.exportSave = function () {
        this.settingsService.openSaveDialog(this.settingsService.exportSave());
    };
    SettingsComponent.prototype.importSave = function () {
        this.settingsService.openSaveDialog();
    };
    Object.defineProperty(SettingsComponent.prototype, "bindSelected", {
        get: function () {
            return this.settingsService.bindSelected;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(SettingsComponent.prototype, "debugMode", {
        get: function () {
            return this.settingsService.debugMode;
        },
        set: function (value) {
            this.settingsService.debugMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "mapLowFramerate", {
        get: function () {
            return this.settingsService.mapLowFramerate;
        },
        set: function (value) {
            this.settingsService.mapLowFramerate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "resourceAnimationColors", {
        get: function () {
            return this.settingsService.resourceAnimationColors;
        },
        set: function (value) {
            this.settingsService.resourceAnimationColors = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "slimInterface", {
        get: function () {
            return this.settingsService.slimInterface;
        },
        set: function (value) {
            this.settingsService.slimInterface = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "disableAnimations", {
        get: function () {
            return this.settingsService.disableAnimations;
        },
        set: function (value) {
            this.settingsService.disableAnimations = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "resourceBinds", {
        get: function () {
            return this.settingsService.resourceBinds;
        },
        set: function (value) {
            this.settingsService.resourceBinds = value;
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
        __metadata("design:paramtypes", [_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"]])
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

module.exports = "/* StoreComponent's private CSS styles */\r\n.store {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n.store mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.store mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.store mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.store mat-card {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.store mat-card:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.store a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.store a:hover {\r\n  color:#607D8B;\r\n}\r\n.store .harvestable {\r\n  background-color: antiquewhite;\r\n}\r\n.store .harvestable:hover {\r\n  background-color: blanchedalmond;\r\n}\r\n.store .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.right {\r\n  position: absolute;\r\n  right: 3px;\r\n  top: 3px;\r\n}\r\nbutton {\r\n  min-width: unset;\r\n  height: 27px;\r\n  line-height: unset;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n.full-width {\r\n  width: 100%;\r\n}\r\n.sell-button {\r\n  width: 80%;\r\n}\r\n.cutoff-input {\r\n  width: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Amount to sell:<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"sellAmount\">\r\n  <mat-button-toggle value=\"1\" checked=\"true\">\r\n    1x\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"10\">\r\n    10x\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"100\">\r\n    100x\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"1000\">\r\n    1000x\r\n  </mat-button-toggle>\r\n  <mat-button-toggle value=\"-1\">\r\n    All\r\n  </mat-button-toggle>\r\n</mat-button-toggle-group>\r\n\r\n<ul class=\"store\">\r\n  <mat-accordion multi=\"true\">\r\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of sellableTypes\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          {{resourceType | titlecase}}\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <div *ngFor=\"let resource of resourcesOfType(resourceType, false, adminService.filterAccessible)\">\r\n        <button class=\"sell-button\" color=\"accent\" mat-flat-button *ngIf=\"resource.sellable\" (click)=\"sellResource(resource)\"\r\n          [disabled]=\"!canSellResource(resource)\">\r\n          {{(sellAmount == -1 ? resource.amount : sellAmount) | number:'0.0-0'}} {{resource.name | titlecase }} -\r\n          {{resource.sellsFor * (+sellAmount === -1 ? resource.amount : sellAmount) | number:'0.0-2'}} Gold\r\n        </button>\r\n        <button disabled class=\"sell-button\" color=\"warn\" mat-flat-button *ngIf=\"!resource.sellable\">\r\n          {{(sellAmount == -1 ? resource.amount : sellAmount) | number:'0.0-0'}} {{resource.name | titlecase }} -\r\n          Unsellable\r\n        </button>\r\n        <mat-form-field class=\"cutoff-input\">\r\n          <input matInput placeholder=\"Autosell Cutoff\" type=\"number\" min=\"0\" [disabled]=\"!resource.sellable\" [(ngModel)]=\"resource.autoSellCutoff\" />\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ul>\r\n"

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
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resourceData */ "./src/app/objects/resourceData.ts");
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
        this.resourceTypes = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"];
        this.sellableTypes = [_objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Wood, _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Mineral, _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Metal];
        this.sellAmount = 1;
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent.prototype.canSellResource = function (resource) {
        return this.storeService.canSellResource(resource, +this.sellAmount);
    };
    StoreComponent.prototype.resourcesOfType = function (resourceType, filterBySellable, filterByAccessible) {
        return this.resourcesService.getResources(resourceType, filterBySellable, filterByAccessible);
    };
    StoreComponent.prototype.sellResource = function (resource) {
        this.storeService.sellResource(resource, +this.sellAmount);
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

/***/ "./src/app/components/tile-detail/tile-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/tile-detail/tile-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tile-tooltip {\r\n  top: var(--detail-tooltip-top);\r\n  left: var(--detail-tooltip-left);\r\n\r\n  position: absolute;\r\n}\r\n\r\nmat-card {\r\n  text-align: center;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.repair-container {\r\n  display: inline-flex;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.repair-container button {\r\n  position: relative;\r\n  top: -25%;\r\n}\r\n\r\n.stats-container {\r\n  width: 100%;\r\n}\r\n\r\n.upgrade-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.upgrade-button mat-icon {\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n\r\n.anchor-container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 55px;\r\n  height: 55px;\r\n}\r\n\r\n.anchor-container #center {\r\n  position: absolute;\r\n\r\n  left: 15px;\r\n  top: 15px;\r\n}\r\n\r\n.anchor-container .corner {\r\n  display: none;\r\n}\r\n\r\n.anchor-container:hover .corner {\r\n  display: inherit;\r\n}\r\n\r\n.anchor-container a {\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.anchor-container a:hover {\r\n  color: black;\r\n}\r\n\r\n.anchor-container #arrow-upper-left {\r\n  -webkit-transform: rotate(225deg);\r\n  transform: rotate(225deg);\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.anchor-container #arrow-upper-right {\r\n  -webkit-transform: rotate(315deg);\r\n  transform: rotate(315deg);\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.anchor-container #arrow-lower-left {\r\n  -webkit-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.anchor-container #arrow-lower-right {\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/tile-detail/tile-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/tile-detail/tile-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card appSnap [snapSetting]=\"snapSetting\" id=\"tile-tooltip\">\r\n  <div class=\"anchor-container\">\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-upper-left\" (click)=\"snapSetting = 'upperLeft'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-upper-right\" (click)=\"snapSetting = 'upperRight'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon id=\"center\" (click)=\"snapSetting = 'free'\">all_out</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-lower-left\" (click)=\"snapSetting = 'lowerLeft'\">arrow_forward</mat-icon>\r\n    </a>\r\n    <a>\r\n      <mat-icon class=\"corner\" id=\"arrow-lower-right\" (click)=\"snapSetting = 'lowerRight'\">arrow_forward</mat-icon>\r\n    </a>\r\n  </div>\r\n  <div *ngIf=\"focusedBuildingTile\">\r\n    <mat-card-title>{{focusedBuildingTile.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{focusedBuildingTile.description}}</mat-card-subtitle>\r\n    <div class=\"repair-container\">\r\n      {{focusedTile.health}}/{{focusedTile.maxHealth}} Health\r\n      <div *ngIf=\"focusedTile.health < focusedTile.maxHealth\">\r\n        <button mat-raised-button (click)=\"repairBuilding(focusedTile)\" color=\"accent\" [disabled]=\"!canRepairBuilding(focusedTile)\">\r\n          Repair\r\n          <div class=\"resource-list\">\r\n            <div matTooltip=\"{{focusedBuildingTile.repairCostPerPoint * (focusedTile.maxHealth - focusedTile.health)}} {{getResource(focusedBuildingTile.repairResourceEnum).name | titlecase}}\"\r\n              matTooltipPosition=\"below\">\r\n              <img src=\"{{getResource(focusedBuildingTile.repairResourceEnum).iconPath}}\" alt=\"{{getResource(focusedBuildingTile.repairResourceEnum).name}}\">\r\n              {{focusedBuildingTile.repairCostPerPoint * (focusedTile.maxHealth - focusedTile.health)}}\r\n            </div>\r\n          </div>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!focusedBuildingTile && focusedResourceTile\">\r\n    <mat-card-title>{{focusedResourceTile.name}}</mat-card-title>\r\n  </div>\r\n\r\n  <mat-card-content *ngIf=\"focusedTile\">\r\n    <div *ngIf=\"focusedResourceTile\" class=\"resource-list\">\r\n      Travel Time: {{focusedTile.buildingPath.length / this.mapService.tileAnimationSpeed / 1000 | number:'0.0-2'}}\r\n      Seconds\r\n      <br />\r\n      Produces:\r\n      <div *ngFor=\"let resource of focusedResources\">\r\n        <img src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\"> {{resource.name | titlecase}}\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"focusedBuildingTile && focusedBuildingTile.upgradeBuilding\">\r\n      <h3>Upgrade</h3>\r\n      <button mat-raised-button (click)=\"upgradeBuilding(focusedTile)\" color=\"accent\" [disabled]=\"!canAffordUpgrade(this.mapService.buildingTiles[focusedBuildingTile.upgradeBuilding])\">\r\n        <div class=\"title\" matTooltip=\"{{this.mapService.buildingTiles[focusedBuildingTile.upgradeBuilding].description}}\"\r\n          matTooltipPosition=\"above\">\r\n          {{this.mapService.buildingTiles[focusedBuildingTile.upgradeBuilding].name}}\r\n        </div>\r\n        <div class=\"resource-list\">\r\n          <div *ngFor=\"let resourceCost of mapService.buildingTiles[focusedBuildingTile.upgradeBuilding].resourceCosts\"\r\n            matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\r\n            matTooltipPosition=\"below\">\r\n            <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\r\n            {{resourceCost.resourceCost}}\r\n          </div>\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n    <div *ngIf=\"focusedTile.market\">\r\n      Profit (Average of recent sales): {{focusedTile.market.averageRecentProfit | number:'0.0-2'}} {{getResource('GOLD').name | titlecase}}/Second\r\n    </div>\r\n\r\n    <h3>Stats</h3>\r\n      <table class=\"stats-container\">\r\n        <tbody>\r\n          <tr class=\"stat-row\">\r\n            <td>\r\n              <p>\r\n                Max Health: {{focusedTile.maxHealth | number:'1.0-2'}}\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedTile.statLevels['MAXHEALTH']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('MAXHEALTH')\"\r\n                [disabled]=\"!focusedTile.canUpgradeStat('MAXHEALTH')\" matTooltip=\"Level {{focusedTile.statLevels['MAXHEALTH'] + 1}}: {{focusedTile.getUpgradedStat('MAXHEALTH') | number:'1.0-2'}} Max Health\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedTile.statCosts['MAXHEALTH'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\" *ngIf=\"focusedTile.market\">\r\n            <td>\r\n              <p>\r\n                Sell Rate: {{1000 / focusedTile.market.sellInterval | number:'1.0-2'}} Sale{{focusedTile.market.sellInterval === 1000 ? '' : 's'}}/Second\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedTile.statLevels['SELLRATE']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('SELLRATE')\"\r\n                [disabled]=\"!focusedTile.canUpgradeStat('SELLRATE')\" matTooltip=\"Level {{focusedTile.statLevels['SELLRATE'] + 1}}: {{1000 / focusedTile.getUpgradedStat('SELLRATE') | number:'1.0-2'}} Sales/Second\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedTile.statCosts['SELLRATE'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr class=\"stat-row\" *ngIf=\"focusedTile.market\">\r\n            <td>\r\n              <p>\r\n                Sell Amount: {{focusedTile.market.sellQuantity | number:'1.0-2'}} Items/Sale\r\n              </p>\r\n            </td>\r\n            <td>\r\n              <b>\r\n                Level {{focusedTile.statLevels['SELLAMOUNT']}}\r\n              </b>\r\n            </td>\r\n            <td>\r\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('SELLAMOUNT')\"\r\n                [disabled]=\"!focusedTile.canUpgradeStat('SELLAMOUNT')\" matTooltip=\"Level {{focusedTile.statLevels['SELLAMOUNT'] + 1}}: {{focusedTile.getUpgradedStat('SELLAMOUNT') | number:'1.0-2'}} Items/Sale\"\r\n                matTooltipPosition=\"below\">\r\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\r\n                <div class=\"resource-list\">\r\n                  <div>\r\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\r\n                    {{focusedTile.statCosts['SELLAMOUNT'] | number:'1.0-0'}}\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/tile-detail/tile-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/tile-detail/tile-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: TileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileDetailComponent", function() { return TileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TileDetailComponent = /** @class */ (function () {
    function TileDetailComponent(mapService, buildingsService, resourcesService) {
        this.mapService = mapService;
        this.buildingsService = buildingsService;
        this.resourcesService = resourcesService;
        this.buildingTileTypes = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"];
        this.snapSetting = 'free';
    }
    TileDetailComponent.prototype.ngOnInit = function () {
    };
    TileDetailComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    TileDetailComponent.prototype.canAffordUpgrade = function (upgradeBuilding) {
        for (var _i = 0, _a = upgradeBuilding.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            if (this.getResource(resourceCost.resourceEnum).amount < resourceCost.resourceCost) {
                return false;
            }
        }
        return true;
    };
    Object.defineProperty(TileDetailComponent.prototype, "buildingTiles", {
        get: function () {
            return this.mapService.buildingTiles;
        },
        enumerable: true,
        configurable: true
    });
    TileDetailComponent.prototype.getBuildingTileArray = function (filterByPlaceable) {
        var tiles = this.mapService.buildingTileArray;
        if (filterByPlaceable) {
            tiles = tiles.filter(function (tile) { return tile.placeable; });
        }
        return tiles;
    };
    TileDetailComponent.prototype.canAffordBuilding = function (buildingType) {
        return this.buildingsService.canAffordBuilding(this.buildingTiles[buildingType]);
    };
    TileDetailComponent.prototype.upgradeBuilding = function (tile) {
        var currentBuilding = this.mapService.buildingTiles[tile.buildingTileType];
        this.buildingsService.clearBuilding(tile);
        this.buildingsService.createBuilding(tile, currentBuilding.upgradeBuilding);
        this.focusedBuildingTile = this.mapService.buildingTiles[tile.buildingTileType];
        this.focusedResourceTile = this.mapService.resourceTiles[tile.resourceTileType];
    };
    TileDetailComponent.prototype.canRepairBuilding = function (tile) {
        return this.buildingsService.canRepairBuilding(tile);
    };
    TileDetailComponent.prototype.repairBuilding = function (tile) {
        this.buildingsService.repairBuilding(tile);
    };
    Object.defineProperty(TileDetailComponent.prototype, "focusedTile", {
        get: function () {
            return this.mapService.focusedTile;
        },
        set: function (value) {
            this.mapService.focusedTile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileDetailComponent.prototype, "focusedBuildingTile", {
        get: function () {
            return this.mapService.focusedBuildingTile;
        },
        set: function (value) {
            this.mapService.focusedBuildingTile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileDetailComponent.prototype, "focusedResourceTile", {
        get: function () {
            return this.mapService.focusedResourceTile;
        },
        set: function (value) {
            this.mapService.focusedResourceTile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileDetailComponent.prototype, "focusedResources", {
        get: function () {
            return this.mapService.focusedResources;
        },
        set: function (value) {
            this.mapService.focusedResources = value;
        },
        enumerable: true,
        configurable: true
    });
    TileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tile-detail',
            template: __webpack_require__(/*! ./tile-detail.component.html */ "./src/app/components/tile-detail/tile-detail.component.html"),
            styles: [__webpack_require__(/*! ./tile-detail.component.css */ "./src/app/components/tile-detail/tile-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_2__["BuildingsService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"]])
    ], TileDetailComponent);
    return TileDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* UpgradesComponent's private CSS styles */\r\n.upgrades {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  /* width: 25em; */\r\n}\r\n.upgrades mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.upgrades mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.upgrades mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-weight: bold;\r\n}\r\n.upgrades button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.upgrades button:hover {\r\n  left: .1em;\r\n}\r\n.upgrades button.mat-disabled {\r\n  cursor: default;\r\n}\r\n.upgrades .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\n.upgrades {\r\n  text-align: center;\r\n}\r\n.upgrades.slim-interface button {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n.upgrade {\r\n  display: inline-block;\r\n  max-width: 300px;\r\n  width: 15vw;\r\n}\r\n.resource-list {\r\n  text-align: center;\r\n}\r\n.resource-list div {\r\n  display: inline-block;\r\n}\r\n.resource-list img {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox class=\"hidePurchased\" checked=\"true\" [(ngModel)]=\"hidePurchasedUpgrades\">Hide Purchased Upgrades</mat-checkbox>\r\n<br />\r\n<br />\r\n\r\n<div class=\"upgrades\" [ngClass]=\"{'slim-interface': settingsService.slimInterface}\">\r\n  <div *ngIf=\"!settingsService.slimInterface\">\r\n    <mat-card class=\"upgrade\" *ngFor=\"let upgrade of getUpgrades(false, hidePurchasedUpgrades, adminService.filterAccessible)\">\r\n      <button mat-raised-button color=\"accent\" [disabled]='upgrade.purchased || !canAffordUpgrade(upgrade.id)' (click)='purchaseUpgrade(upgrade.id)'>\r\n        <mat-card-title>\r\n          <b>\r\n            <mat-icon *ngIf=\"upgrade.purchased\" color=\"primary\">check</mat-icon>\r\n          </b>\r\n          {{upgrade.name}}\r\n        </mat-card-title>\r\n      </button>\r\n      <mat-card-subtitle>{{upgradesService.getUpgradeTypeString(upgrade.id)}}</mat-card-subtitle>\r\n      <mat-card-content>\r\n        {{upgrade.description}}\r\n        <div class=\"resource-list\">\r\n          <div *ngFor=\"let resourceCost of upgrade.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\r\n            matTooltipPosition=\"below\">\r\n            <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\"> {{resourceCost.resourceCost}}\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div *ngIf=\"settingsService.slimInterface\">\r\n    <button mat-raised-button *ngFor=\"let upgrade of getUpgrades(false, hidePurchasedUpgrades, adminService.filterAccessible)\" color=\"accent\"\r\n      [disabled]='upgrade.purchased || !canAffordUpgrade(upgrade.id)' (click)='purchaseUpgrade(upgrade.id)'>\r\n    <div class=\"title\" matTooltip=\"{{upgrade.description}}\" matTooltipPosition=\"above\">\r\n      <b>\r\n        <mat-icon *ngIf=\"upgrade.purchased\" color=\"primary\">check</mat-icon>\r\n      </b>\r\n      {{upgrade.name}}\r\n    </div>\r\n    <div class=\"resource-list\">\r\n      <div *ngFor=\"let resourceCost of upgrade.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\r\n        matTooltipPosition=\"below\">\r\n        <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\r\n        {{resourceCost.resourceCost}}\r\n      </div>\r\n    </div>\r\n  </button>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
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






var UpgradesComponent = /** @class */ (function () {
    function UpgradesComponent(resourcesService, upgradesService, settingsService, adminService) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.settingsService = settingsService;
        this.adminService = adminService;
        this.upgradeTypes = _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeType"];
    }
    UpgradesComponent.prototype.ngOnInit = function () {
    };
    UpgradesComponent.prototype.canAffordUpgrade = function (id) {
        return this.upgradesService.getUpgrade(id).canAfford();
    };
    UpgradesComponent.prototype.getUpgrades = function (filterByPurchased, filterByUnpurchased, filterByAccessible) {
        return this.upgradesService.getUpgrades(filterByPurchased, filterByUnpurchased, filterByAccessible);
    };
    UpgradesComponent.prototype.upgradesOfType = function (upgradeType, filterByPurchased, filterByUnpurchased, filterByAccessible) {
        return this.upgradesService.getUpgrades(filterByPurchased, filterByUnpurchased, filterByAccessible, this.upgradeTypes[upgradeType]);
    };
    UpgradesComponent.prototype.purchaseUpgrade = function (id) {
        this.upgradesService.getUpgrade(id).purchaseUpgrade();
    };
    UpgradesComponent.prototype.getBackgroundColor = function (id) {
        var upgrade = this.upgradesService.getUpgrade(id);
        if (upgrade.purchased) {
            return 'lightgreen';
        }
        else if (!upgrade.canAfford()) {
            return 'gray';
        }
        return 'lightblue';
    };
    UpgradesComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    Object.defineProperty(UpgradesComponent.prototype, "hidePurchasedUpgrades", {
        get: function () {
            return this.upgradesService.hidePurchasedUpgrades;
        },
        set: function (value) {
            this.upgradesService.hidePurchasedUpgrades = value;
        },
        enumerable: true,
        configurable: true
    });
    UpgradesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upgrades',
            template: __webpack_require__(/*! ./upgrades.component.html */ "./src/app/components/upgrades/upgrades.component.html"),
            styles: [__webpack_require__(/*! ./upgrades.component.css */ "./src/app/components/upgrades/upgrades.component.css")]
        }),
        __metadata("design:paramtypes", [_services_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _services_upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_3__["UpgradesService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]])
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

module.exports = "/* WorkersComponent's private CSS styles */\r\n.workers {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n.workers mat-expansion-panel {\r\n  margin: 0;\r\n}\r\n.workers mat-expansion-panel-header {\r\n  height: 30px !important;\r\n}\r\n.workers mat-card-title {\r\n  text-align: left;\r\n}\r\n.workers mat-card-subtitle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n}\r\n.workers mat-slider {\r\n  width: 100%;\r\n  top: -22px;\r\n}\r\n.workers mat-card {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n  background: antiquewhite;\r\n}\r\n.workers button {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin: .5em;\r\n  padding: .4em 0;\r\n  height: 3.6em;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n}\r\n.workers button:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.workers a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.workers a:hover {\r\n  color:#607D8B;\r\n}\r\n.workers .harvestable {\r\n  background-color: antiquewhite;\r\n}\r\n.worker-input {\r\n  width: 50px;\r\n  border: none;\r\n}\r\n.mat-card-subtitle {\r\n  z-index: 1;\r\n}\r\n.workers .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: absolute;\r\n  right: -9px;\r\n  top: 1px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: center;\r\n  margin-right: .8em;\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n.path-broken-warn {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 125px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/workers/workers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/workers/workers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"workers\">\r\n  <mat-checkbox [(ngModel)]=\"workersPaused\" color=\"accent\">Pause Workers</mat-checkbox>\r\n  <mat-accordion multi=\"true\">\r\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let worker of getWorkers(true, true, true)\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          {{worker.resourceType | titlecase}}\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <button mat-raised-button [color]=\"worker.canAffordToHire() ? 'accent' : 'disabled'\" (click)=\"worker.hireWorker()\">\r\n        <mat-card-title>{{worker.workerCount}} Workers ({{worker.freeWorkers}} Idle)</mat-card-title>\r\n        <mat-card-subtitle>{{worker.cost | number}} Gold</mat-card-subtitle>\r\n      </button>\r\n\r\n      <div *ngFor=\"let resourceWorker of getAccessibleResourceWorkers(worker)\">\r\n        <mat-card [ngClass]=\"{'resource-disabled': !canHarvest(resourceWorker.resourceEnum)}\"\r\n        *ngIf=\"shouldShowResource(resourceWorker.resourceEnum)\" matTooltip=\"{{getTooltipMessage(resourceWorker.resourceEnum)}}\" matTooltipPosition=\"right\">\r\n          <mat-card-title [style.color]=\"canHarvest(resourceWorker.resourceEnum) ? 'black' : 'red'\">\r\n            {{getResource(resourceWorker.resourceEnum).name | titlecase}}\r\n          </mat-card-title>\r\n          <div class=\"path-broken-warn\" *ngIf=\"!pathAvailable(resourceWorker.resourceEnum)\">(Path Broken)</div>\r\n          <mat-card-subtitle>\r\n            Workers: <input class=\"worker-input\" type=\"number\" min=\"0\" [max]=\"worker.workerCount\"\r\n              [(ngModel)]=\"resourceWorker.sliderSetting\" (input)=\"checkSliderValue(resourceWorker.resourceEnum)\" (change)=\"updateResourceWorker(resourceWorker.resourceEnum, resourceWorker.sliderSetting)\"/>\r\n          </mat-card-subtitle>\r\n          <mat-slider [color]=\"resourceWorker.sliderSettingValid ? 'accent' : 'warn'\" [id]=\"resourceWorker.resourceEnum\" [max]=\"worker.workerCount\"\r\n              [tickInterval]=\"1\" [(ngModel)]=\"resourceWorker.sliderSetting\" (input)=\"checkSliderValue($event)\" (change)=\"updateResourceWorker($event)\">\r\n          </mat-slider>\r\n        </mat-card>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ul>\r\n"

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
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resourceData */ "./src/app/objects/resourceData.ts");
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
        this.resourceTypes = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"];
    }
    WorkersComponent.prototype.ngOnInit = function () {
    };
    WorkersComponent.prototype.getWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable) {
        return this.workersService.getWorkers(filterByAccessible, filterByWorkable, filterByHarvestable);
    };
    WorkersComponent.prototype.getWorker = function (resourceType) {
        return this.workersService.workers.get(resourceType);
    };
    WorkersComponent.prototype.getResource = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum);
    };
    WorkersComponent.prototype.getAccessibleResourceWorkers = function (worker) {
        return worker.getResourceWorkers(true);
    };
    WorkersComponent.prototype.canAffordToHarvest = function (resourceEnum) {
        return this.workersService.getWorker(resourceEnum).canAffordToHarvest(resourceEnum);
    };
    WorkersComponent.prototype.canHarvest = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum).canHarvest() && this.canAffordToHarvest(resourceEnum);
    };
    WorkersComponent.prototype.shouldShowResource = function (resourceEnum) {
        var resource = this.resourcesService.resources.get(resourceEnum);
        var resourceWorker = this.workersService.getResourceWorker(resourceEnum);
        return (resourceWorker.workable && resource.harvestable) || !this.adminService.filterAccessible;
    };
    WorkersComponent.prototype.getTooltipMessage = function (resourceEnum) {
        return this.tooltipService.getWorkerTooltip(resourceEnum);
    };
    WorkersComponent.prototype.checkSliderValue = function (eventOrEnum) {
        var resourceEnum = typeof (eventOrEnum) === 'string' ? eventOrEnum : eventOrEnum.source._elementRef.nativeElement.id;
        var resource = this.resourcesService.resources.get(resourceEnum);
        var worker = this.getWorker(resource.resourceType);
        var resourceWorker = this.workersService.getResourceWorker(resourceEnum);
        var newValue = typeof (eventOrEnum) === 'string' ? resourceWorker.sliderSetting : +eventOrEnum.value;
        resourceWorker.sliderSettingValid = worker.freeWorkers + resourceWorker.workerCount - newValue >= 0;
    };
    WorkersComponent.prototype.updateResourceWorker = function (eventOrEnum, value) {
        if (value === void 0) { value = -1; }
        var resourceEnum = typeof (eventOrEnum) === 'string' ? eventOrEnum : eventOrEnum.source._elementRef.nativeElement.id;
        if (value === -1) {
            value = +eventOrEnum.value;
        }
        this.workersService.getWorker(resourceEnum).updateResourceWorker(resourceEnum, value);
    };
    WorkersComponent.prototype.pathAvailable = function (resourceEnum) {
        return this.resourcesService.resources.get(resourceEnum).pathAvailable;
    };
    Object.defineProperty(WorkersComponent.prototype, "workersPaused", {
        get: function () {
            return this.workersService.workersPaused;
        },
        set: function (value) {
            this.workersService.workersPaused = value;
        },
        enumerable: true,
        configurable: true
    });
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
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MapDirective = /** @class */ (function () {
    function MapDirective(element, renderer, resourcesService, settingsService, enemyService, fighterService, buildingsService, mapService) {
        this.element = element;
        this.renderer = renderer;
        this.resourcesService = resourcesService;
        this.settingsService = settingsService;
        this.enemyService = enemyService;
        this.fighterService = fighterService;
        this.buildingsService = buildingsService;
        this.mapService = mapService;
        this.lastEnemyReprosessTime = Date.now();
        this.enemyReprocessDelay = 2000;
        this.headerPixels = 64;
        this.imageElements = {};
        this.transform = d3.zoomIdentity;
        this.lowFramerateActive = false;
    }
    MapDirective.prototype.ngAfterViewInit = function () {
        this.canvas = d3.select('canvas');
        this.context = this.canvas.node().getContext('2d');
        this.canvasContainer = document.getElementById('canvas-container');
        this.tileTooltip = document.getElementById('tile-tooltip');
        this.fighterTooltip = document.getElementById('fighter-tooltip');
        var imageElementContainer = document.getElementById('tile-images');
        for (var i = 0; i < imageElementContainer.children.length; i++) {
            var imageElement = imageElementContainer.children[i];
            this.imageElements[imageElement.id] = imageElement;
        }
        this.context.font = 'bold 4px Arial';
        this.resizeCanvas();
        this.transform.k = 2;
        this.canvas.call(d3.zoom()
            .filter(this.scrollFilter(this))
            .scaleExtent([1, 5])
            .translateExtent([[0, 0], [this.mapService.gridWidth * this.mapService.tilePixelSize,
                this.mapService.gridHeight * this.mapService.tilePixelSize]])
            .on('zoom', this.zoomed(this)));
        this.canvas.on('mousedown mousemove mouseup', this.clickTile(this));
        this.refreshTimer = d3.interval(this.refreshCanvas(this), 25);
    };
    MapDirective.prototype.tick = function (elapsed) {
    };
    MapDirective.prototype.scrollFilter = function (self) {
        return function (elapsed) {
            return d3.event.type !== 'dblclick' && (d3.event.type !== 'mousedown' || d3.event.button === 2);
        };
    };
    MapDirective.prototype.zoomed = function (self) {
        return function (elapsed) {
            self.transform = d3.event.transform;
        };
    };
    MapDirective.prototype.clickTile = function (self) {
        return function (elapsed) {
            return __awaiter(this, void 0, void 0, function () {
                var coordinates, tile, shouldUpdateEnemies, buildingCreated, buildingCleared;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!d3.event.buttons && d3.event.type !== 'mouseup') {
                                return [2 /*return*/];
                            }
                            coordinates = d3.mouse(this);
                            coordinates[0] = Math.floor(self.transform.invertX(coordinates[0]) / self.mapService.tilePixelSize);
                            coordinates[1] = Math.floor(self.transform.invertY(coordinates[1]) / self.mapService.tilePixelSize);
                            tile = self.mapService.tiledMap[coordinates[0] + coordinates[1] * self.mapService.mapWidth];
                            shouldUpdateEnemies = false;
                            if (d3.event.type === 'mousedown' && self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].TileDetail) {
                                self.updateTileTooltip(coordinates);
                            }
                            else if (d3.event.type === 'mousedown' && self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].FighterDetail) {
                                self.updateFighterTooltip(coordinates);
                            }
                            else if (self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].PlaceBuildings && self.buildingsService.selectedBuilding) {
                                buildingCreated = self.buildingsService.createBuilding(tile, self.buildingsService.selectedBuilding.tileType);
                                shouldUpdateEnemies = d3.event.type === 'mouseup' && buildingCreated;
                            }
                            else if (self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].ClearBuildings) {
                                buildingCleared = self.buildingsService.clearBuilding(tile);
                                shouldUpdateEnemies = d3.event.type === 'mouseup' && buildingCleared;
                            }
                            else if (d3.event.type === 'mousedown' &&
                                self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].PlaceFighters && self.fighterService.selectedFighterType) {
                                self.fighterService.createFighter(tile, self.fighterService.selectedFighterType);
                            }
                            if (!(shouldUpdateEnemies && Date.now() - self.lastEnemyReprosessTime > self.enemyReprocessDelay)) return [3 /*break*/, 2];
                            self.lastEnemyReprosessTime = Date.now();
                            return [4 /*yield*/, self.enemyService.recalculateTargets()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
    };
    MapDirective.prototype.updateTileTooltip = function (coordinates) {
        var _this = this;
        var focusedTile = this.mapService.tiledMap[coordinates[0] + coordinates[1] * this.mapService.mapWidth];
        if (focusedTile.buildingTileType || focusedTile.resourceTileType) {
            this.mapService.focusedTile = focusedTile;
            this.mapService.focusedBuildingTile = this.mapService.buildingTiles[focusedTile.buildingTileType];
            this.mapService.focusedResourceTile = this.mapService.resourceTiles[focusedTile.resourceTileType];
            this.mapService.focusedResources = this.mapService.focusedResourceTile ?
                this.mapService.focusedResourceTile.resourceEnums.map(function (rEnum) { return _this.resourcesService.resources.get(rEnum); }) : undefined;
        }
        else {
            this.mapService.focusedTile = undefined;
            this.mapService.focusedBuildingTile = undefined;
            this.mapService.focusedResourceTile = undefined;
            this.mapService.focusedResources = undefined;
        }
    };
    MapDirective.prototype.updateFighterTooltip = function (coordinates) {
        var focusedTile = this.mapService.tiledMap[coordinates[0] + coordinates[1] * this.mapService.mapWidth];
        var focusedFighter = this.fighterService.fighters.find(function (fighter) { return fighter.currentTile === focusedTile; });
        if (focusedFighter) {
            this.mapService.focusedTile = focusedTile;
            this.mapService.focusedFighter = focusedFighter;
        }
        else {
            this.mapService.focusedTile = undefined;
            this.mapService.focusedFighter = undefined;
        }
    };
    MapDirective.prototype.resizeCanvas = function () {
        this.element.nativeElement.width = this.canvasContainer.clientWidth;
        this.element.nativeElement.height = window.innerHeight - this.headerPixels;
        this.mapService.canvasPixelWidth = this.canvasContainer.clientWidth;
        this.mapService.canvasPixelHeight = window.innerHeight - this.headerPixels;
    };
    MapDirective.prototype.refreshCanvas = function (self) {
        return function (elapsed) {
            if (self.lowFramerateActive !== self.settingsService.mapLowFramerate) {
                self.lowFramerateActive = self.settingsService.mapLowFramerate;
                self.refreshTimer.stop();
                self.refreshTimer = d3.interval(self.refreshCanvas(self), self.lowFramerateActive ? self.mapService.lowFramerate : self.mapService.highFramerate);
            }
            self.resizeCanvas();
            self.context.save();
            self.context.clearRect(0, 0, self.mapService.canvasPixelWidth, self.mapService.canvasPixelHeight);
            self.context.translate(self.transform.x, self.transform.y);
            self.context.scale(self.transform.k, self.transform.k);
            self.drawCanvas();
            self.context.restore();
        };
    };
    MapDirective.prototype.drawCanvas = function () {
        var upperLeftPixel = [(-this.transform.x - this.mapService.tilePixelSize * 5) / this.transform.k,
            (-this.transform.y - this.mapService.tilePixelSize * 5) / this.transform.k];
        var lowerRightPixel = [upperLeftPixel[0] + (this.mapService.canvasPixelWidth + this.mapService.tilePixelSize * 5) / this.transform.k,
            upperLeftPixel[1] + (this.mapService.canvasPixelHeight + this.mapService.tilePixelSize * 5) / this.transform.k];
        for (var _i = 0, _a = this.mapService.tiledMap; _i < _a.length; _i++) {
            var tile = _a[_i];
            if (tile.x < upperLeftPixel[0] || tile.x > lowerRightPixel[0] ||
                tile.y < upperLeftPixel[1] || tile.y > lowerRightPixel[1]) {
                continue;
            }
            var mapTileImage = this.imageElements[tile.mapTileType.toLowerCase()];
            this.drawTile(tile.position, mapTileImage);
            if (tile.buildingTileType) {
                var buildingTileImage = this.imageElements[tile.buildingTileType.toLowerCase()];
                this.drawTile(tile.position, buildingTileImage);
            }
            if (tile.resourceTileType) {
                var resourceTileImage = this.imageElements[tile.resourceTileType.toLowerCase().replace(' ', '-')];
                this.drawTile(tile.position, resourceTileImage, 1, tile.health / tile.maxHealth);
            }
            if (tile.health === 0) {
                this.context.globalAlpha = 0.5;
                this.drawTile(tile.position, this.imageElements['disabled']);
                this.context.globalAlpha = 1;
            }
            else if (tile.buildingTileType && !tile.buildingRemovable && this.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["CursorTool"].ClearBuildings) {
                this.context.globalAlpha = 0.5;
                this.drawTile(tile.position, this.imageElements['locked']);
                this.context.globalAlpha = 1;
            }
        }
        for (var _b = 0, _c = this.mapService.resourceAnimations; _b < _c.length; _b++) {
            var resourceAnimation = _c[_b];
            var resourceTileImage = this.imageElements[this.resourcesService.resources.get(resourceAnimation.resourceEnum).name.toLowerCase().replace(' ', '-')];
            this.context.drawImage(resourceTileImage, resourceAnimation.x, resourceAnimation.y, this.mapService.tilePixelSize / 2, this.mapService.tilePixelSize / 2);
            this.drawTile(resourceAnimation.position, resourceTileImage, 0.5);
            this.context.fillStyle = this.settingsService.resourceAnimationColors[resourceAnimation.animationType];
            this.context.fillText(Math.floor(resourceAnimation.multiplier).toString(), resourceAnimation.x + this.mapService.tilePixelSize / 2, resourceAnimation.y + this.mapService.tilePixelSize / 2);
        }
        for (var _d = 0, _e = this.enemyService.enemies; _d < _e.length; _d++) {
            var enemy = _e[_d];
            var enemyTileImage = this.imageElements[enemy.name.toLowerCase().replace(' ', '-')];
            this.context.drawImage(enemyTileImage, enemy.x, enemy.y, this.mapService.tilePixelSize, this.mapService.tilePixelSize);
            this.drawTile(enemy.position, enemyTileImage, 1, enemy.health / enemy.maxHealth);
        }
        for (var _f = 0, _g = this.fighterService.fighters; _f < _g.length; _f++) {
            var fighter = _g[_f];
            var fighterTileImage = this.imageElements[fighter.name.toLowerCase().replace(' ', '-')];
            this.context.drawImage(fighterTileImage, fighter.x, fighter.y, this.mapService.tilePixelSize, this.mapService.tilePixelSize);
            this.drawTile(fighter.position, fighterTileImage, 1, fighter.health / fighter.maxHealth);
        }
        for (var _h = 0, _j = this.mapService.projectiles; _h < _j.length; _h++) {
            var projectile = _j[_h];
            var projectileTileImage = this.imageElements[projectile.name.toLowerCase().replace(' ', '-')];
            this.context.translate(projectile.x, projectile.y);
            this.context.rotate(projectile.rotation);
            this.context.drawImage(projectileTileImage, -this.mapService.tilePixelSize / 2, -this.mapService.tilePixelSize / 2, this.mapService.tilePixelSize, this.mapService.tilePixelSize);
            this.drawTile(new _objects_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](-this.mapService.tilePixelSize / 2, -this.mapService.tilePixelSize / 2), projectileTileImage);
            this.context.rotate(-projectile.rotation);
            this.context.translate(-projectile.x, -projectile.y);
        }
        if (this.mapService.focusedTile) {
            var tooltipPosition = this.getTooltipPosition(this.mapService.focusedTile.position);
            this.tileTooltip.style.setProperty('--detail-tooltip-left', tooltipPosition.x + 'px');
            this.tileTooltip.style.setProperty('--detail-tooltip-top', tooltipPosition.y + 'px');
            this.context.globalAlpha = 0.5;
            this.context.fillStyle = 'cyan';
            for (var _k = 0, _l = this.mapService.focusedTile.buildingPath; _k < _l.length; _k++) {
                var pathTile = _l[_k];
                this.context.fillRect(pathTile.x, pathTile.y, this.mapService.tilePixelSize, this.mapService.tilePixelSize);
            }
            this.context.fillStyle = 'black';
            this.context.globalAlpha = 1;
        }
        if (this.mapService.focusedFighter) {
            var fighter = this.mapService.focusedFighter;
            var tooltipPosition = this.getTooltipPosition(fighter.position);
            this.fighterTooltip.style.setProperty('--detail-tooltip-left', tooltipPosition.x + 'px');
            this.fighterTooltip.style.setProperty('--detail-tooltip-top', tooltipPosition.y + 'px');
            this.context.globalAlpha = 0.5;
            this.context.fillStyle = 'cyan';
            this.context.beginPath();
            this.context.arc(fighter.x + this.mapService.tilePixelSize / 2, fighter.y + this.mapService.tilePixelSize / 2, fighter.attackRange * this.mapService.tilePixelSize, 0, 2 * Math.PI);
            this.context.stroke();
            this.context.fillStyle = 'black';
            this.context.globalAlpha = 1;
        }
    };
    MapDirective.prototype.getTooltipPosition = function (targetPosition) {
        return new _objects_vector__WEBPACK_IMPORTED_MODULE_1__["Vector"]((targetPosition.x + this.mapService.tilePixelSize) * this.transform.k + this.transform.x, targetPosition.y * this.transform.k + this.transform.y - this.tileTooltip.clientHeight);
    };
    MapDirective.prototype.drawTile = function (position, image, scale, healthRatio) {
        if (scale === void 0) { scale = 1; }
        if (healthRatio === void 0) { healthRatio = 1; }
        this.context.drawImage(image, position.x, position.y, this.mapService.tilePixelSize * scale, this.mapService.tilePixelSize * scale);
        if (healthRatio > 0 && healthRatio < 1) {
            this.context.fillStyle = 'red';
            this.context.fillRect(position.x, position.y + this.mapService.tilePixelSize, this.mapService.tilePixelSize * healthRatio, -2);
            this.context.fillStyle = 'black';
            this.context.strokeRect(position.x, position.y + this.mapService.tilePixelSize, this.mapService.tilePixelSize, -2);
        }
    };
    MapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_4__["EnemyService"],
            _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_5__["FighterService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__["BuildingsService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"]])
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

/***/ "./src/app/directives/snap/snap.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/snap/snap.directive.ts ***!
  \***************************************************/
/*! exports provided: SnapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapDirective", function() { return SnapDirective; });
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

var SnapDirective = /** @class */ (function () {
    function SnapDirective(element) {
        this.element = element;
    }
    SnapDirective.prototype.onClick = function () {
        switch (this.snapSetting) {
            case 'upperLeft': {
                this.element.nativeElement.style.left = 0;
                this.element.nativeElement.style.top = '72px';
                this.element.nativeElement.style.right = 'unset';
                this.element.nativeElement.style.bottom = 'unset';
                break;
            }
            case 'upperRight': {
                this.element.nativeElement.style.left = 'unset';
                this.element.nativeElement.style.top = '72px';
                this.element.nativeElement.style.right = 0;
                this.element.nativeElement.style.bottom = 'unset';
                break;
            }
            case 'lowerLeft': {
                this.element.nativeElement.style.left = 0;
                this.element.nativeElement.style.top = 'unset';
                this.element.nativeElement.style.right = 'unset';
                this.element.nativeElement.style.bottom = 0;
                break;
            }
            case 'lowerRight': {
                this.element.nativeElement.style.left = 'unset';
                this.element.nativeElement.style.top = 'unset';
                this.element.nativeElement.style.right = 0;
                this.element.nativeElement.style.bottom = 0;
                break;
            }
            case 'free': {
                this.element.nativeElement.style.left = 'var(--detail-tooltip-left)';
                this.element.nativeElement.style.top = 'var(--detail-tooltip-top)';
                this.element.nativeElement.style.right = 'unset';
                this.element.nativeElement.style.bottom = 'unset';
                break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('snapSetting'),
        __metadata("design:type", String)
    ], SnapDirective.prototype, "snapSetting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SnapDirective.prototype, "onClick", null);
    SnapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSnap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SnapDirective);
    return SnapDirective;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: canvasWidth, canvasHeight, tilePixelSize, gridWidth, gridHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasWidth", function() { return canvasWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasHeight", function() { return canvasHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilePixelSize", function() { return tilePixelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridWidth", function() { return gridWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridHeight", function() { return gridHeight; });
var canvasWidth = 750;
var canvasHeight = 750;
var tilePixelSize = 16;
var gridWidth = 150;
var gridHeight = 150;


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
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
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
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"]
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

/***/ "./src/app/objects/entity.ts":
/*!***********************************!*\
  !*** ./src/app/objects/entity.ts ***!
  \***********************************/
/*! exports provided: FighterStat, ResourceAnimationType, Entity, Actor, Enemy, Fighter, Projectile, ResourceAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterStat", function() { return FighterStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceAnimationType", function() { return ResourceAnimationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fighter", function() { return Fighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceAnimation", function() { return ResourceAnimation; });
/* harmony import */ var _resourceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/app/objects/vector.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FighterStat;
(function (FighterStat) {
    FighterStat["Attack"] = "ATTACK";
    FighterStat["Defense"] = "DEFENSE";
    FighterStat["Range"] = "RANGE";
    FighterStat["MovementSpeed"] = "MOVEMENTSPEED";
    FighterStat["FireRate"] = "FIRERATE";
    FighterStat["MaxHealth"] = "MAXHEALTH";
})(FighterStat || (FighterStat = {}));
var ResourceAnimationType;
(function (ResourceAnimationType) {
    ResourceAnimationType["PlayerSpawned"] = "PLAYERSPAWNED";
    ResourceAnimationType["WorkerSpawned"] = "WORKERSPAWNED";
    ResourceAnimationType["Sold"] = "SOLD";
})(ResourceAnimationType || (ResourceAnimationType = {}));
var Entity = /** @class */ (function () {
    function Entity(name, position, currentTile, health, animationSpeed, tilePath) {
        if (animationSpeed === void 0) { animationSpeed = 0.003; }
        if (tilePath === void 0) { tilePath = []; }
        this.pathingDone = false;
        this.name = name;
        this.position = position;
        this.spawnPosition = new _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](position.x, position.y);
        this.currentTile = currentTile;
        this.tilePath = tilePath;
        this.pathStep = 0;
        this.pathingDone = false;
        this.health = health;
        this.maxHealth = health;
        this.animationSpeed = animationSpeed;
    }
    Entity.prototype.tick = function (elapsed, deltaTime) { };
    Object.defineProperty(Entity.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        set: function (value) {
            this.position.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        set: function (value) {
            this.position.y = value;
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.updatePathPosition = function (deltaTime) {
        if (this.tilePath === undefined || this.pathStep >= this.tilePath.length - 1) {
            return;
        }
        var totalDistance = this.animationSpeed * deltaTime;
        while (totalDistance > 0) {
            var stepDistance = Math.min(1, totalDistance);
            totalDistance -= 1;
            var currentTile = this.tilePath[this.pathStep];
            var destinationTile = this.tilePath[this.pathStep + 1];
            this.x += (destinationTile.x - currentTile.x) * stepDistance;
            this.y += (destinationTile.y - currentTile.y) * stepDistance;
            var offset = this.position.subtract(new _vector__WEBPACK_IMPORTED_MODULE_1__["Vector"](currentTile.x, currentTile.y));
            if (Math.abs(offset.x) >= _globals__WEBPACK_IMPORTED_MODULE_2__["tilePixelSize"] || Math.abs(offset.y) >= _globals__WEBPACK_IMPORTED_MODULE_2__["tilePixelSize"]) {
                this.pathStep++;
                this.currentTile = destinationTile;
                if (this.pathStep === this.tilePath.length - 1) {
                    this.pathingDone = true;
                    break;
                }
            }
        }
    };
    return Entity;
}());

var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor(name, position, currentTile, health, animationSpeed, attack, defense, attackRange) {
        if (animationSpeed === void 0) { animationSpeed = 0.003; }
        var _this = _super.call(this, name, position, currentTile, health, animationSpeed) || this;
        _this.attack = attack;
        _this.defense = defense;
        _this.attackRange = attackRange;
        return _this;
    }
    return Actor;
}(Entity));

var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, position, currentTile, health, animationSpeed, attack, defense, attackRange, targetableBuildingTypes, resourcesToSteal, stealMax, resourceCapacity) {
        if (animationSpeed === void 0) { animationSpeed = 0.003; }
        var _this = _super.call(this, name, position, currentTile, health, animationSpeed, attack, defense, attackRange) || this;
        _this.targetableBuildingTypes = targetableBuildingTypes;
        _this.targets = [];
        _this.targetIndex = 0;
        _this.pathAttempt = 0;
        _this.resourcesToSteal = resourcesToSteal;
        _this.resourcesHeld = new Map();
        _this.totalHeld = 0;
        _this.stealMax = stealMax;
        _this.resourceCapacity = resourceCapacity;
        return _this;
    }
    return Enemy;
}(Actor));

var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, position, currentTile, health, animationSpeed, attack, defense, attackRange, description, cost, moveable, fireMilliseconds, resourcesService, enemyService, mapService) {
        var _this = _super.call(this, name, position, currentTile, health, animationSpeed, attack, defense, attackRange) || this;
        _this.lastFire = 0;
        _this.statLevels = {};
        _this.statCosts = {};
        _this.description = description;
        _this.cost = cost;
        _this.moveable = moveable;
        _this.fireMilliseconds = fireMilliseconds;
        _this.statLevels[FighterStat.Attack] = 1;
        _this.statLevels[FighterStat.Defense] = 1;
        _this.statLevels[FighterStat.FireRate] = 1;
        _this.statLevels[FighterStat.MovementSpeed] = 1;
        _this.statLevels[FighterStat.Range] = 1;
        _this.statLevels[FighterStat.MaxHealth] = 1;
        _this.statCosts[FighterStat.Attack] = 1500;
        _this.statCosts[FighterStat.Defense] = 1500;
        _this.statCosts[FighterStat.FireRate] = 1500;
        _this.statCosts[FighterStat.MovementSpeed] = 1500;
        _this.statCosts[FighterStat.Range] = 1500;
        _this.statCosts[FighterStat.MaxHealth] = 1500;
        _this.resourcesService = resourcesService;
        _this.enemyService = enemyService;
        _this.mapService = mapService;
        return _this;
    }
    Fighter.prototype.tick = function (elapsed, deltaTime) {
        var _this = this;
        if (elapsed - this.lastFire > this.fireMilliseconds) {
            var enemiesInRange = this.enemyService.enemies.filter(function (enemy) { return Math.abs(Math.sqrt(Math.pow((_this.x - enemy.x), 2) + Math.pow((_this.y - enemy.y), 2))) / 16 <= _this.attackRange; });
            var targetedEnemy = enemiesInRange[Math.floor(Math.random() * enemiesInRange.length)];
            if (targetedEnemy) {
                this.mapService.spawnProjectile(this, targetedEnemy);
            }
            this.lastFire = elapsed;
        }
    };
    Fighter.prototype.canUpgradeStat = function (stat) {
        return this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).amount >= this.statCosts[stat];
    };
    Fighter.prototype.getUpgradedStat = function (stat) {
        switch (stat) {
            case FighterStat.Attack: {
                return this.attack * 1.2;
            }
            case FighterStat.Defense: {
                return this.defense * 1.2;
            }
            case FighterStat.FireRate: {
                return this.fireMilliseconds / 1.1;
            }
            case FighterStat.MovementSpeed: {
                return this.animationSpeed * 1.2;
            }
            case FighterStat.Range: {
                return this.attackRange + 1;
            }
            case FighterStat.MaxHealth: {
                return Math.floor(this.maxHealth * 1.2);
            }
        }
    };
    Fighter.prototype.upgradeStat = function (stat) {
        if (!this.canUpgradeStat(stat)) {
            return;
        }
        this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(-this.statCosts[stat]);
        var upgradedStat = this.getUpgradedStat(stat);
        switch (stat) {
            case FighterStat.Attack: {
                this.attack = upgradedStat;
                break;
            }
            case FighterStat.Defense: {
                this.defense = upgradedStat;
                break;
            }
            case FighterStat.FireRate: {
                this.fireMilliseconds = upgradedStat;
                break;
            }
            case FighterStat.MovementSpeed: {
                this.animationSpeed = upgradedStat;
                break;
            }
            case FighterStat.Range: {
                this.attackRange = upgradedStat;
                break;
            }
            case FighterStat.MaxHealth: {
                this.maxHealth = upgradedStat;
                this.health = this.maxHealth;
            }
        }
        this.statLevels[stat]++;
        this.statCosts[stat] *= 1.5;
    };
    Fighter.prototype.canHeal = function () {
        return this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).amount >= this.healCost;
    };
    Fighter.prototype.heal = function () {
        if (!this.canHeal()) {
            return;
        }
        this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(-this.healCost);
        this.health = this.maxHealth;
    };
    Object.defineProperty(Fighter.prototype, "healCost", {
        get: function () {
            return (this.cost / this.maxHealth) * 0.65 * (this.maxHealth - this.health);
        },
        enumerable: true,
        configurable: true
    });
    return Fighter;
}(Actor));

var Projectile = /** @class */ (function (_super) {
    __extends(Projectile, _super);
    function Projectile(name, position, currentTile, animationSpeed, owner, target) {
        if (animationSpeed === void 0) { animationSpeed = 0.003; }
        var _this = _super.call(this, name, position, currentTile, 1, animationSpeed) || this;
        _this.hitTarget = false;
        _this.owner = owner;
        _this.target = target;
        return _this;
    }
    Projectile.prototype.tick = function (elapsed, deltaTime) {
        var distance = this.target.position.subtract(this.position);
        var totalDistance = this.target.position.subtract(this.spawnPosition);
        if (distance.magnitude < _globals__WEBPACK_IMPORTED_MODULE_2__["tilePixelSize"]) {
            this.target.health -= this.owner.attack;
            this.hitTarget = true;
        }
        var gradientY = this.target.y - this.y;
        var gradientX = this.target.x - this.x;
        var angle = Math.atan2(gradientY, gradientX) + (Math.PI / 2);
        totalDistance.x *= this.animationSpeed * deltaTime;
        totalDistance.y *= this.animationSpeed * deltaTime;
        this.position = this.position.add(totalDistance);
        this.rotation = angle;
    };
    return Projectile;
}(Entity));

var ResourceAnimation = /** @class */ (function (_super) {
    __extends(ResourceAnimation, _super);
    function ResourceAnimation(position, currentTile, animationSpeed, tilePath, animationType, resourceEnum, multiplier, spawnedByPlayer, resourcesService, storeService) {
        if (animationSpeed === void 0) { animationSpeed = 0.003; }
        var _this = _super.call(this, '', position, currentTile, -1, animationSpeed, tilePath) || this;
        _this.animationType = animationType;
        _this.resourceEnum = resourceEnum;
        _this.multiplier = multiplier;
        _this.spawnedByPlayer = spawnedByPlayer;
        _this.resourcesService = resourcesService;
        _this.storeService = storeService;
        return _this;
    }
    ResourceAnimation.prototype.tick = function (elapsed, deltaTime) {
        this.updatePathPosition(deltaTime);
    };
    ResourceAnimation.prototype.finishAnimation = function () {
        this.resourcesService.resources.get(this.resourceEnum).finishResourceAnimation(this.multiplier, this.animationType);
    };
    return ResourceAnimation;
}(Entity));



/***/ }),

/***/ "./src/app/objects/message.ts":
/*!************************************!*\
  !*** ./src/app/objects/message.ts ***!
  \************************************/
/*! exports provided: MessageSource, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSource", function() { return MessageSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var MessageSource;
(function (MessageSource) {
    MessageSource["Admin"] = "ADMIN";
    MessageSource["Buildings"] = "BUILDINGS";
    MessageSource["Main"] = "MAIN";
    MessageSource["Enemy"] = "ENEMY";
    MessageSource["Fighter"] = "FIGHTER";
    MessageSource["Map"] = "MAP";
    MessageSource["Resources"] = "RESOURCES";
    MessageSource["Settings"] = "SETTINGS";
    MessageSource["Store"] = "STORE";
    MessageSource["Upgrades"] = "UPGRADES";
    MessageSource["Workers"] = "WORKERS";
})(MessageSource || (MessageSource = {}));
var Message = /** @class */ (function () {
    function Message(source, message) {
        this.source = source;
        this.message = message;
        this.timestamp = Date.now();
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/objects/resource.ts":
/*!*************************************!*\
  !*** ./src/app/objects/resource.ts ***!
  \*************************************/
/*! exports provided: Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony import */ var _resourceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/app/objects/entity.ts");


var Resource = /** @class */ (function () {
    function Resource(name, resourceType, resourceEnum, iconPath, resourceConsumes, harvestable, harvestMilliseconds, sellable, sellsFor, resourceDescription, workerVerb, workerNoun, resourceTier, resourcesService) {
        this.amount = 0;
        this.amountTravelling = 0;
        this.harvestable = true;
        this.harvestYield = 1;
        this.harvestMilliseconds = 1000;
        this.harvestStartDate = Date.now();
        this.harvesting = false;
        this.progressBarValue = 0;
        this.sellable = true;
        this.sellsFor = 0;
        this.autoSellCutoff = 0;
        this.resourceBeingStolen = false;
        this.name = name;
        this.resourceType = resourceType;
        this.resourceEnum = resourceEnum;
        this.iconPath = iconPath;
        this.resourceConsumes = resourceConsumes;
        this.harvestable = harvestable;
        this.harvestMilliseconds = harvestMilliseconds;
        this.pathAvailable = false;
        this.sellable = sellable;
        this.sellsFor = sellsFor;
        this.resourceDescription = resourceDescription;
        this.workerVerb = workerVerb;
        this.workerNoun = workerNoun;
        this.resourceTier = resourceTier;
        this.resourcesService = resourcesService;
    }
    Resource.prototype.addAmount = function (amount) {
        this.amount += amount;
        if (this.amount <= 0) {
            this.amount = 0;
        }
    };
    Resource.prototype.harvestResource = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        if (this.resourceTier > this.resourcesService.highestTierReached) {
            this.resourcesService.highestTierReached = this.resourceTier;
        }
        this.addAmount(multiplier);
    };
    Resource.prototype.deductResourceConsumes = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        for (var _i = 0, _a = this.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            this.resourcesService.resources.get(resourceConsume.resourceEnum).addAmount(-resourceConsume.cost * multiplier);
        }
    };
    Resource.prototype.finishResourceAnimation = function (multiplier, animationType) {
        if (multiplier === void 0) { multiplier = 1; }
        switch (animationType) {
            case _entity__WEBPACK_IMPORTED_MODULE_1__["ResourceAnimationType"].PlayerSpawned: {
                this.amountTravelling--;
                this.harvestResource(multiplier);
                break;
            }
            case _entity__WEBPACK_IMPORTED_MODULE_1__["ResourceAnimationType"].WorkerSpawned: {
                this.harvestResource(multiplier);
                break;
            }
            case _entity__WEBPACK_IMPORTED_MODULE_1__["ResourceAnimationType"].Sold: {
                this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(multiplier * this.sellsFor);
                break;
            }
        }
    };
    Resource.prototype.canHarvest = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        if (!this.harvestable || !this.pathAvailable) {
            return false;
        }
        return this.canAfford(multiplier);
    };
    Resource.prototype.canAfford = function (multiplier) {
        if (multiplier === void 0) { multiplier = 1; }
        for (var _i = 0, _a = this.resourceConsumes; _i < _a.length; _i++) {
            var resourceConsume = _a[_i];
            if (this.resourcesService.resources.get(resourceConsume.resourceEnum).amount < resourceConsume.cost * multiplier) {
                return false;
            }
        }
        return true;
    };
    Object.defineProperty(Resource.prototype, "resourceAccessible", {
        get: function () {
            return this.resourceTier <= this.resourcesService.highestTierReached + 1;
        },
        enumerable: true,
        configurable: true
    });
    return Resource;
}());



/***/ }),

/***/ "./src/app/objects/resourceData.ts":
/*!*****************************************!*\
  !*** ./src/app/objects/resourceData.ts ***!
  \*****************************************/
/*! exports provided: ResourceType, ResourceEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceType", function() { return ResourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceEnum", function() { return ResourceEnum; });
var ResourceType;
(function (ResourceType) {
    ResourceType["Currency"] = "CURRENCY";
    ResourceType["Wood"] = "WOOD";
    ResourceType["Mineral"] = "MINERAL";
    ResourceType["Metal"] = "METAL";
})(ResourceType || (ResourceType = {}));
var ResourceEnum;
(function (ResourceEnum) {
    ResourceEnum["Gold"] = "GOLD";
    ResourceEnum["Oak"] = "OAK";
    ResourceEnum["Pine"] = "PINE";
    ResourceEnum["Birch"] = "BIRCH";
    ResourceEnum["Eucalyptus"] = "EUCALYPTUS";
    ResourceEnum["Willow"] = "WILLOW";
    ResourceEnum["Teak"] = "TEAK";
    ResourceEnum["EntSoul"] = "ENTSOUL";
    ResourceEnum["ReanimatedEnt"] = "REANIMATEDENT";
    ResourceEnum["Stone"] = "STONE";
    ResourceEnum["Graphite"] = "GRAPHITE";
    ResourceEnum["Limestone"] = "LIMESTONE";
    ResourceEnum["Marble"] = "MARBLE";
    ResourceEnum["Quartz"] = "QUARTZ";
    ResourceEnum["Obsidian"] = "OBSIDIAN";
    ResourceEnum["Diamond"] = "DIAMOND";
    ResourceEnum["CopperOre"] = "COPPERORE";
    ResourceEnum["TinOre"] = "TINORE";
    ResourceEnum["BronzeIngot"] = "BRONZEINGOT";
    ResourceEnum["IronOre"] = "IRONORE";
    ResourceEnum["IronIngot"] = "IRONINGOT";
    ResourceEnum["SteelIngot"] = "STEELINGOT";
    ResourceEnum["GoldOre"] = "GOLDORE";
    ResourceEnum["GoldIngot"] = "GOLDINGOT";
    ResourceEnum["LatinumOre"] = "LATINUMORE";
    ResourceEnum["LatinumIngot"] = "LATINUMINGOT";
    ResourceEnum["UnbelieviumOre"] = "UNBELIEVIUMORE";
    ResourceEnum["LustrialOre"] = "LUSTRIALORE";
    ResourceEnum["SpectrusOre"] = "SPECTRUSORE";
    ResourceEnum["TemprousIngot"] = "TEMPROUSINGOT";
    ResourceEnum["RefinedTemprous"] = "REFINEDTEMPROUS";
})(ResourceEnum || (ResourceEnum = {}));


/***/ }),

/***/ "./src/app/objects/tile.ts":
/*!*********************************!*\
  !*** ./src/app/objects/tile.ts ***!
  \*********************************/
/*! exports provided: MapTileType, ResourceTileType, BuildingTileType, BuildingSubType, TileStat, Tile, Market */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTileType", function() { return MapTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTileType", function() { return ResourceTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingTileType", function() { return BuildingTileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingSubType", function() { return BuildingSubType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileStat", function() { return TileStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Market", function() { return Market; });
/* harmony import */ var _resourceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourceData */ "./src/app/objects/resourceData.ts");

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
    BuildingTileType["EnemyPortal"] = "ENEMYPORTAL";
    BuildingTileType["WoodMarket"] = "WOODMARKET";
    BuildingTileType["MineralMarket"] = "MINERALMARKET";
    BuildingTileType["MetalMarket"] = "METALMARKET";
})(BuildingTileType || (BuildingTileType = {}));
var BuildingSubType;
(function (BuildingSubType) {
    BuildingSubType["Resource"] = "RESOURCE";
    BuildingSubType["Market"] = "MARKET";
    BuildingSubType["Misc"] = "MISC";
})(BuildingSubType || (BuildingSubType = {}));
var TileStat;
(function (TileStat) {
    TileStat["SellRate"] = "SELLRATE";
    TileStat["SellAmount"] = "SELLAMOUNT";
    TileStat["MaxHealth"] = "MAXHEALTH";
})(TileStat || (TileStat = {}));
var Tile = /** @class */ (function () {
    function Tile(id, mapTileType, resourceTileType, buildingTileType, buildingRemovable, position, tileCropDetail, health, resourcesService) {
        if (health === void 0) { health = -1; }
        this.statLevels = {};
        this.statCosts = {};
        this.id = id;
        this.mapTileType = mapTileType;
        this.resourceTileType = resourceTileType;
        this.buildingTileType = buildingTileType;
        this.buildingPath = [];
        this.buildingRemovable = buildingRemovable;
        this.statLevels[TileStat.MaxHealth] = 1;
        this.statCosts[TileStat.MaxHealth] = 1500;
        this.health = health;
        this.maxHealth = health;
        this.position = position;
        this.tileCropDetail = tileCropDetail;
        this.resourcesService = resourcesService;
    }
    Tile.prototype.canUpgradeStat = function (stat) {
        return this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).amount >= this.statCosts[stat];
    };
    Tile.prototype.getUpgradedStat = function (stat) {
        switch (stat) {
            case TileStat.SellAmount: {
                return this.market.sellQuantity * 1.2;
            }
            case TileStat.SellRate: {
                return this.market.sellInterval / 1.1;
            }
            case TileStat.MaxHealth: {
                return Math.floor(this.maxHealth * 1.2);
            }
        }
    };
    Tile.prototype.upgradeStat = function (stat) {
        if (!this.canUpgradeStat(stat)) {
            return;
        }
        this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(-this.statCosts[stat]);
        var upgradedStat = this.getUpgradedStat(stat);
        switch (stat) {
            case TileStat.SellAmount: {
                this.market.sellQuantity = upgradedStat;
                break;
            }
            case TileStat.SellRate: {
                this.market.sellInterval = upgradedStat;
                break;
            }
            case TileStat.MaxHealth: {
                this.maxHealth = upgradedStat;
                this.health = this.maxHealth;
                break;
            }
        }
        this.statLevels[stat]++;
        this.statCosts[stat] *= 1.5;
    };
    Object.defineProperty(Tile.prototype, "x", {
        get: function () {
            return this.position.x;
        },
        set: function (value) {
            this.position.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile.prototype, "y", {
        get: function () {
            return this.position.y;
        },
        set: function (value) {
            this.position.y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Tile;
}());

var Market = /** @class */ (function () {
    function Market(mapService, resourcesService, resourceType, owningTile, shouldInitStats) {
        this.currentResource = 0;
        this.recentSales = [];
        this.recentWindowSize = 20;
        this.timeSinceLastSale = 0;
        this.lastSellTime = 0;
        this.sellInterval = 1000;
        this.sellQuantity = 50;
        if (shouldInitStats) {
            owningTile.statLevels[TileStat.SellAmount] = 1;
            owningTile.statLevels[TileStat.SellRate] = 1;
            owningTile.statCosts[TileStat.SellAmount] = 1500;
            owningTile.statCosts[TileStat.SellRate] = 1500;
        }
        this.mapService = mapService;
        this.resourcesService = resourcesService;
        this.soldResources = resourcesService.getResources(resourceType);
        this.homeTile = mapService.tiledMap.filter(function (tile) { return tile.buildingTileType === BuildingTileType.Home; })[0];
        this.owningTile = owningTile;
        this.calculateConnection();
    }
    Market.prototype.tick = function (elapsed, deltaTime) {
        if (this.tilePath.length && elapsed - this.lastSellTime > this.sellInterval) {
            this.timeSinceLastSale += deltaTime;
            var resource = this.soldResources[this.currentResource];
            var sellAmount = Math.min(this.sellQuantity, resource.amount - resource.autoSellCutoff);
            if (sellAmount > 0) {
                this.mapService.spawnSoldResourceAnimation(resource.resourceEnum, sellAmount, this);
                this.lastSellTime = elapsed;
                resource.addAmount(-sellAmount);
                this.logSale(sellAmount * resource.sellsFor);
                this.timeSinceLastSale = 0;
            }
            if (this.timeSinceLastSale >= 1000) {
                this.logSale(0);
                this.timeSinceLastSale = 0;
            }
            do {
                this.currentResource = (this.currentResource + 1) % this.soldResources.length;
            } while (!this.soldResources[this.currentResource].sellable);
        }
    };
    Market.prototype.logSale = function (profit) {
        this.recentSales.push(profit);
        if (this.recentSales.length >= this.recentWindowSize) {
            this.recentSales = this.recentSales.slice(1, this.recentWindowSize);
        }
    };
    Market.prototype.calculateConnection = function () {
        var _this = this;
        this.mapService.findPath(this.homeTile, this.owningTile, true, true).subscribe(function (path) {
            _this.tilePath = path;
        });
    };
    Object.defineProperty(Market.prototype, "averageRecentProfit", {
        get: function () {
            if (!this.recentSales.length) {
                return 0;
            }
            return this.recentSales.reduce(function (total, sale) { return total += sale; }) / this.recentSales.length;
        },
        enumerable: true,
        configurable: true
    });
    return Market;
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
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/app/objects/message.ts");

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
    function Upgrade(id, name, description, upgradeType, upgradeEffects, resourceCosts, purchased, resourcesService, workersService, messagesService) {
        if (purchased === void 0) { purchased = false; }
        this.purchased = false;
        this.id = id;
        this.name = name;
        this.description = description;
        this.upgradeType = upgradeType;
        this.upgradeEffects = upgradeEffects;
        this.resourceCosts = resourceCosts;
        this.purchased = purchased;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.messagesService = messagesService;
    }
    Upgrade.prototype.purchaseUpgrade = function () {
        if (this.purchased || !this.canAfford()) {
            return;
        }
        for (var _i = 0, _a = this.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.resources.get(resourceCost.resourceEnum).addAmount(-resourceCost.resourceCost);
        }
        this.applyUpgrade();
        this.purchased = true;
    };
    Upgrade.prototype.applyUpgrade = function () {
        var _this = this;
        var _loop_1 = function (upgradeEffect) {
            if (upgradeEffect.upgradeVariable === UpgradeVariable.WorkerCost) {
                this_1.workersService.workers.get(upgradeEffect.resourceType).cost *= upgradeEffect.upgradeFactor;
                return "continue";
            }
            var resourcesToUpgrade = [this_1.resourcesService.resources.get(upgradeEffect.resourceEnum)];
            var workersToUpgrade = [this_1.workersService.getResourceWorker(upgradeEffect.resourceEnum)];
            if (upgradeEffect.upgradeIsForWholeType) {
                resourcesToUpgrade = this_1.resourcesService.getResources(upgradeEffect.resourceType);
                workersToUpgrade = this_1.workersService.workers.get(upgradeEffect.resourceType).getResourceWorkers();
                if (upgradeEffect.maxTier >= 0) {
                    resourcesToUpgrade = resourcesToUpgrade.filter(function (resource) { return resource.resourceTier <= upgradeEffect.maxTier; });
                    workersToUpgrade = workersToUpgrade.filter(function (worker) {
                        return _this.resourcesService.resources.get(worker.resourceEnum).resourceTier <= upgradeEffect.maxTier;
                    });
                }
            }
            for (var _i = 0, resourcesToUpgrade_1 = resourcesToUpgrade; _i < resourcesToUpgrade_1.length; _i++) {
                var resourceToUpgrade = resourcesToUpgrade_1[_i];
                switch (upgradeEffect.upgradeVariable) {
                    case UpgradeVariable.Harvestability: {
                        resourceToUpgrade.harvestable = !!upgradeEffect.upgradeFactor;
                        break;
                    }
                    case UpgradeVariable.HarvestYield: {
                        resourceToUpgrade.harvestYield *= upgradeEffect.upgradeFactor;
                        break;
                    }
                    case UpgradeVariable.HarvestMilliseconds: {
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
                    case UpgradeVariable.Workable: {
                        workerToUpgrade.workable = !!upgradeEffect.upgradeFactor;
                        break;
                    }
                    case UpgradeVariable.WorkerYield: {
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
        for (var _i = 0, _a = this.upgradeEffects; _i < _a.length; _i++) {
            var upgradeEffect = _a[_i];
            _loop_1(upgradeEffect);
        }
        this.log('Purchased upgrade: ' + this.name);
    };
    Upgrade.prototype.canAfford = function () {
        var _this = this;
        return this.resourceCosts.every(function (resourceCost) {
            return _this.resourcesService.resources.get(resourceCost.resourceEnum).amount >= resourceCost.resourceCost;
        });
    };
    Upgrade.prototype.log = function (message) {
        this.messagesService.add(_message__WEBPACK_IMPORTED_MODULE_0__["MessageSource"].Workers, message);
    };
    return Upgrade;
}());



/***/ }),

/***/ "./src/app/objects/vector.ts":
/*!***********************************!*\
  !*** ./src/app/objects/vector.ts ***!
  \***********************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vector.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.add = function (other) {
        return new Vector(this.x + other.x, this.y + other.y);
    };
    Vector.prototype.subtract = function (other) {
        return new Vector(this.x - other.x, this.y - other.y);
    };
    Object.defineProperty(Vector, "identity", {
        get: function () {
            return new Vector(1, 1);
        },
        enumerable: true,
        configurable: true
    });
    return Vector;
}());



/***/ }),

/***/ "./src/app/objects/worker.ts":
/*!***********************************!*\
  !*** ./src/app/objects/worker.ts ***!
  \***********************************/
/*! exports provided: Worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* harmony import */ var _resourceData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/app/objects/message.ts");


var Worker = /** @class */ (function () {
    function Worker(cost, resourceType, resourceWorkers, resourcesService, mapService, messagesService) {
        this.workerCount = 0;
        this.freeWorkers = 0;
        this.cost = cost;
        this.resourceType = resourceType;
        this.resourceWorkers = resourceWorkers;
        this.resourcesService = resourcesService;
        this.mapService = mapService;
        this.messagesService = messagesService;
    }
    Worker.prototype.tick = function (elapsed, deltaTime) {
        for (var _i = 0, _a = this.getResourceWorkers(); _i < _a.length; _i++) {
            var resourceWorker = _a[_i];
            var resource = this.resourcesService.resources.get(resourceWorker.resourceEnum);
            if (resourceWorker.workerCount === 0 || !this.canAffordToHarvest(resource.resourceEnum)) {
                continue;
            }
            this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(-resourceWorker.recurringCost * resourceWorker.workerCount);
            if (!this.canAffordToHarvest(resource.resourceEnum)) {
                this.log("No more money available for " + resource.name + ".");
            }
            this.mapService.spawnHarvestedResourceAnimation(resource, resourceWorker.workerYield * resourceWorker.workerCount, false);
        }
    };
    Worker.prototype.getResourceWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable) {
        var _this = this;
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        if (filterByWorkable === void 0) { filterByWorkable = false; }
        if (filterByHarvestable === void 0) { filterByHarvestable = false; }
        var resourceWorkers = Array.from(this.resourceWorkers.values());
        if (filterByAccessible) {
            resourceWorkers = resourceWorkers.filter(function (rw) { return _this.resourcesService.resources.get(rw.resourceEnum).resourceAccessible; });
        }
        if (filterByWorkable) {
            resourceWorkers = resourceWorkers.filter(function (rw) { return rw.workable; });
        }
        if (filterByHarvestable) {
            resourceWorkers = resourceWorkers.filter(function (rw) { return _this.resourcesService.resources.get(rw.resourceEnum).harvestable; });
        }
        return resourceWorkers;
    };
    Worker.prototype.hireWorker = function () {
        if (!this.canAffordToHire()) {
            return;
        }
        this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).addAmount(-this.cost);
        this.cost *= 1.01;
        this.workerCount++;
        this.freeWorkers++;
    };
    Worker.prototype.canAffordToHire = function () {
        return this.cost <= this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).amount;
    };
    Worker.prototype.canAffordToHarvest = function (resourceEnum) {
        return this.resourceWorkers.get(resourceEnum).recurringCost <= this.resourcesService.resources.get(_resourceData__WEBPACK_IMPORTED_MODULE_0__["ResourceEnum"].Gold).amount;
    };
    Worker.prototype.updateResourceWorker = function (resourceEnum, newResourceWorkerCount) {
        var resourceWorker = this.resourceWorkers.get(resourceEnum);
        if (!resourceWorker.sliderSettingValid) {
            newResourceWorkerCount = this.freeWorkers + resourceWorker.workerCount;
            resourceWorker.sliderSetting = newResourceWorkerCount;
        }
        var newFreeWorkers = this.freeWorkers + resourceWorker.workerCount - newResourceWorkerCount;
        this.freeWorkers = newFreeWorkers;
        resourceWorker.workerCount = newResourceWorkerCount;
    };
    Worker.prototype.log = function (message) {
        this.messagesService.add(_message__WEBPACK_IMPORTED_MODULE_1__["MessageSource"].Workers, message);
    };
    return Worker;
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
    function AdminService() {
        this.filterAccessible = true;
        this.editMode = false;
    }
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/buildings/buildings.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/buildings/buildings.service.ts ***!
  \*********************************************************/
/*! exports provided: BuildingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuildingsService = /** @class */ (function () {
    function BuildingsService(resourcesService, mapService) {
        this.resourcesService = resourcesService;
        this.mapService = mapService;
    }
    BuildingsService.prototype.createBuilding = function (tile, buildingType) {
        var buildingTile = this.mapService.buildingTiles[buildingType];
        if (tile.buildingTileType !== undefined ||
            tile.resourceTileType !== undefined ||
            !buildingTile.buildableSurfaces.some(function (bs) { return bs === tile.mapTileType; }) ||
            !this.canAffordBuilding(buildingTile)) {
            return false;
        }
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.resources.get(resourceCost.resourceEnum).addAmount(-resourceCost.resourceCost);
        }
        if (buildingTile.placesResourceTile) {
            tile.resourceTileType = buildingTile.resourceTileType;
        }
        tile.health = buildingTile.baseHealth;
        tile.maxHealth = buildingTile.baseHealth;
        tile.buildingRemovable = true;
        tile.buildingTileType = buildingType;
        this.mapService.calculateResourceConnections();
        if (buildingTile.subType === _objects_tile__WEBPACK_IMPORTED_MODULE_2__["BuildingSubType"].Market) {
            var resourceType = void 0;
            switch (buildingTile.tileType) {
                case _objects_tile__WEBPACK_IMPORTED_MODULE_2__["BuildingTileType"].WoodMarket: {
                    resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Wood;
                    break;
                }
                case _objects_tile__WEBPACK_IMPORTED_MODULE_2__["BuildingTileType"].MineralMarket: {
                    resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Mineral;
                    break;
                }
                case _objects_tile__WEBPACK_IMPORTED_MODULE_2__["BuildingTileType"].MetalMarket: {
                    resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"].Metal;
                    break;
                }
            }
            tile.market = new _objects_tile__WEBPACK_IMPORTED_MODULE_2__["Market"](this.mapService, this.resourcesService, resourceType, tile, true);
        }
        return true;
    };
    BuildingsService.prototype.canAffordBuilding = function (buildingTile) {
        if (buildingTile.maxPlaceable > 0 &&
            this.mapService.tiledMap.filter(function (tile) { return tile.buildingTileType === buildingTile.tileType; }).length >= buildingTile.maxPlaceable) {
            return false;
        }
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            if (this.resourcesService.resources.get(resourceCost.resourceEnum).amount < resourceCost.resourceCost) {
                return false;
            }
        }
        return true;
    };
    BuildingsService.prototype.clearBuilding = function (tile) {
        if (!tile.buildingRemovable || !tile.buildingTileType) {
            return false;
        }
        var buildingTile = this.mapService.buildingTiles[tile.buildingTileType];
        if (buildingTile.placesResourceTile) {
            tile.resourceTileType = undefined;
        }
        tile.buildingTileType = undefined;
        tile.health = tile.maxHealth;
        tile.market = undefined;
        for (var _i = 0, _a = buildingTile.resourceCosts; _i < _a.length; _i++) {
            var resourceCost = _a[_i];
            this.resourcesService.resources.get(resourceCost.resourceEnum).addAmount(resourceCost.resourceCost * 0.85);
        }
        this.mapService.calculateResourceConnections();
        return true;
    };
    BuildingsService.prototype.canRepairBuilding = function (tile) {
        var buildingTile = this.mapService.buildingTiles[tile.buildingTileType];
        var repairResource = this.resourcesService.resources.get(buildingTile.repairResourceEnum);
        return repairResource.amount >= buildingTile.repairCostPerPoint * (tile.maxHealth - tile.health);
    };
    BuildingsService.prototype.repairBuilding = function (tile) {
        if (!this.canRepairBuilding(tile)) {
            return;
        }
        var buildingTile = this.mapService.buildingTiles[tile.buildingTileType];
        var healAmount = tile.maxHealth - tile.health;
        var repairResource = this.resourcesService.resources.get(buildingTile.repairResourceEnum);
        repairResource.addAmount(-buildingTile.repairCostPerPoint * healAmount);
        tile.health = tile.maxHealth;
        this.mapService.calculateResourceConnections();
    };
    BuildingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
    ], BuildingsService);
    return BuildingsService;
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
/* harmony import */ var _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _admin_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
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
    function ClickerMainService(resourcesService, workersService, mapService, enemyService, messagesService, settingsService, adminService) {
        var _this = this;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.mapService = mapService;
        this.enemyService = enemyService;
        this.messagesService = messagesService;
        this.settingsService = settingsService;
        this.adminService = adminService;
        this.resourceTypes = _objects_resourceData__WEBPACK_IMPORTED_MODULE_9__["ResourceType"];
        document.addEventListener('keydown', function (event) { return _this.processInput(event); });
    }
    ClickerMainService.prototype.tick = function (elapsed, deltaTime) {
        this.timeElapsed = elapsed;
        for (var _i = 0, _a = this.resourcesService.getResources().filter(function (_resource) { return _resource.harvesting; }); _i < _a.length; _i++) {
            var resource = _a[_i];
            var millisecondsElapsed = elapsed - resource.harvestStartDate;
            resource.progressBarValue = Math.floor(millisecondsElapsed / resource.harvestMilliseconds * 100);
        }
    };
    ClickerMainService.prototype.processInput = function (event) {
        if (event.repeat) {
            return;
        }
        switch (event.code) {
            case 'KeyQ': {
                this.mapService.cursorTool = _map_map_service__WEBPACK_IMPORTED_MODULE_4__["CursorTool"].PlaceBuildings;
                this.mapService.buildingListVisible = true;
                this.mapService.fighterListVisible = false;
                break;
            }
            case 'KeyW': {
                this.mapService.cursorTool = _map_map_service__WEBPACK_IMPORTED_MODULE_4__["CursorTool"].ClearBuildings;
                this.mapService.buildingListVisible = false;
                this.mapService.fighterListVisible = false;
                break;
            }
            case 'KeyE': {
                this.mapService.cursorTool = _map_map_service__WEBPACK_IMPORTED_MODULE_4__["CursorTool"].TileDetail;
                this.mapService.buildingListVisible = false;
                this.mapService.fighterListVisible = false;
                break;
            }
            case 'KeyR': {
                if (!this.enemyService.enemiesActive) {
                    break;
                }
                this.mapService.cursorTool = _map_map_service__WEBPACK_IMPORTED_MODULE_4__["CursorTool"].PlaceFighters;
                this.mapService.buildingListVisible = false;
                this.mapService.fighterListVisible = true;
                break;
            }
            case 'KeyT': {
                if (!this.enemyService.enemiesActive) {
                    break;
                }
                this.mapService.cursorTool = _map_map_service__WEBPACK_IMPORTED_MODULE_4__["CursorTool"].FighterDetail;
                this.mapService.buildingListVisible = false;
                this.mapService.fighterListVisible = false;
                break;
            }
        }
        var keyDigit = +event.code.replace('Digit', '').replace('Numpad', '');
        if (!isNaN(keyDigit)) {
            var resourceEnum = this.settingsService.resourceBinds[keyDigit];
            var resource = this.resourcesService.resources.get(resourceEnum);
            if (resource && resource.resourceAccessible && !resource.harvesting) {
                this.startHarvesting(resource);
            }
        }
    };
    ClickerMainService.prototype.startHarvesting = function (resource) {
        var _this = this;
        resource.harvestStartDate = this.timeElapsed;
        if (!resource.canHarvest(resource.harvestYield)) {
            return;
        }
        resource.harvesting = true;
        var harvestTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(resource.harvestMilliseconds);
        harvestTimer.subscribe(function (_) { return _this.harvestResource(resource); });
    };
    ClickerMainService.prototype.harvestResource = function (resource) {
        resource.amountTravelling++;
        this.mapService.spawnHarvestedResourceAnimation(resource, resource.harvestYield, true);
        if (resource.resourceTier > 3 && !this.enemyService.enemiesActive) {
            this.enemyService.enemiesActive = true;
            this.log('Your base has begun attracting unwanted attention...');
        }
        resource.progressBarValue = 0;
        resource.harvesting = false;
    };
    ClickerMainService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_10__["MessageSource"].Main, message);
    };
    ClickerMainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__["EnemyService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"],
            _settings_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
            _admin_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"]])
    ], ClickerMainService);
    return ClickerMainService;
}());



/***/ }),

/***/ "./src/app/services/enemy/enemy.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/enemy/enemy.service.ts ***!
  \*************************************************/
/*! exports provided: EnemyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyService", function() { return EnemyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../objects/entity */ "./src/app/objects/entity.ts");
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
/* harmony import */ var _buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var baseEnemyTypes = __webpack_require__(/*! ../../../assets/json/enemies.json */ "./src/assets/json/enemies.json");
var EnemyService = /** @class */ (function () {
    function EnemyService(resourcesService, buildingsService, mapService, messagesService) {
        this.resourcesService = resourcesService;
        this.buildingsService = buildingsService;
        this.mapService = mapService;
        this.messagesService = messagesService;
        this.enemyTypes = baseEnemyTypes;
        this.enemies = [];
        this.spawnInterval = 45000;
        this.lastSpawnTime = 0;
        this.processInterval = 1000;
        this.lastProcessTime = 0;
        this.minimumResourceAmount = 500;
        this.maxPathRetryCount = 25;
        this.maxEnemyCount = 25;
    }
    EnemyService.prototype.ngAfterViewInit = function () {
        this.openPortal(this.mapService.enemySpawnTiles[0]);
    };
    EnemyService.prototype.tick = function (elapsed, deltaTime) {
        if (elapsed - this.lastSpawnTime >= this.spawnInterval) {
            this.spawnEnemy();
            this.lastSpawnTime = elapsed;
        }
        if (elapsed - this.lastProcessTime >= this.processInterval) {
            this.processEnemies();
            this.lastProcessTime = elapsed;
        }
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.updatePathPosition(deltaTime);
            if (enemy.health <= 0) {
                this.killEnemy(enemy);
            }
        }
    };
    EnemyService.prototype.pickTarget = function (enemy) {
        var _this = this;
        var sortedTargets = enemy.targets.filter(function (target) { return target.accessible; }).sort(function (a, b) {
            var aDist = Math.abs(a.tile.x - enemy.x) + Math.abs(a.tile.y - enemy.y);
            var bDist = Math.abs(b.tile.x - enemy.x) + Math.abs(b.tile.y - enemy.y);
            return aDist - bDist;
        });
        enemy.targetIndex = enemy.targets.indexOf(sortedTargets[0]);
        enemy.pathStep = 0;
        enemy.pathingDone = false;
        enemy.currentTile = this.getTilePosition(enemy);
        if (enemy.targetIndex < 0) {
            enemy.targets = enemy.targets.filter(function (target) { return !target.wanderTarget; });
            enemy.targets.push({ tile: this.mapService.getRandomTile([_objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass]), accessible: true, wanderTarget: true });
            enemy.targetIndex = enemy.targets.length - 1;
        }
        this.mapService.findPath(enemy.currentTile, enemy.targets[enemy.targetIndex].tile, false, true, 250).subscribe(function (tilePath) {
            enemy.tilePath = tilePath;
            if (!enemy.tilePath.length) {
                enemy.pathAttempt++;
                enemy.targets[enemy.targetIndex].accessible = false;
                if (enemy.pathAttempt >= _this.maxPathRetryCount) {
                    _this.killEnemy(enemy, true);
                }
                _this.finishTask(enemy);
            }
        });
    };
    EnemyService.prototype.openPortal = function (tile) {
        for (var _i = 0, _a = this.mapService.tiledMap.filter(function (_tile) { return _tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].EnemyPortal; }); _i < _a.length; _i++) {
            var existingTile = _a[_i];
            existingTile.buildingTileType = undefined;
        }
        tile.buildingTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].EnemyPortal;
        this.activePortalTile = tile;
    };
    EnemyService.prototype.getTilePosition = function (enemy) {
        var x = Math.floor(enemy.x / 16) * 16;
        var y = Math.floor(enemy.y / 16) * 16;
        return this.mapService.tiledMap.filter(function (tile) { return tile.x === x && tile.y === y; })[0];
    };
    EnemyService.prototype.spawnEnemy = function () {
        if (Math.random() > 0.2) {
            var spawnIndex = Math.floor(Math.random() * this.mapService.enemySpawnTiles.length);
            this.openPortal(this.mapService.enemySpawnTiles[spawnIndex]);
        }
        if (this.enemies.length >= this.maxEnemyCount || !this.enemiesActive) {
            return;
        }
        var enemyIndex = Math.floor(Math.random() * this.enemyTypes.length);
        var spawnPoint = this.activePortalTile;
        var enemyType = this.enemyTypes[enemyIndex];
        var difficultyModifier = Math.max(1, Math.random() * this.resourcesService.getPlayerScore() / 50000);
        var animationSpeed = Math.min(0.008, 0.003 + difficultyModifier / 10000);
        var enemy = new _objects_entity__WEBPACK_IMPORTED_MODULE_1__["Enemy"](enemyType.name, new _objects_vector__WEBPACK_IMPORTED_MODULE_2__["Vector"](spawnPoint.x, spawnPoint.y), spawnPoint, enemyType.health * difficultyModifier, animationSpeed, enemyType.attack * difficultyModifier, enemyType.defense * difficultyModifier, enemyType.attackRange, enemyType.targetableBuildingTypes, enemyType.resourcesToSteal, enemyType.stealMax * difficultyModifier, enemyType.resourceCapacity * difficultyModifier);
        this.findTargets(enemy);
        this.pickTarget(enemy);
        this.log('An enemy has appeared!');
        this.enemies.push(enemy);
    };
    EnemyService.prototype.findTargets = function (enemy) {
        var _this = this;
        var _loop_1 = function (buildingType) {
            var _loop_2 = function (tile) {
                if (!enemy.targets.some(function (target) { return target.tile === tile; })) {
                    enemy.targets.push({ tile: tile, accessible: true, wanderTarget: false });
                }
            };
            for (var _i = 0, _a = this_1.mapService.tiledMap.filter(function (_tile) { return _tile.buildingTileType === buildingType; }); _i < _a.length; _i++) {
                var tile = _a[_i];
                _loop_2(tile);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = enemy.targetableBuildingTypes; _i < _a.length; _i++) {
            var buildingType = _a[_i];
            _loop_1(buildingType);
        }
        if (enemy.targets[enemy.targetIndex].wanderTarget ||
            enemy.tilePath.some(function (tile) { return !tile.buildingTileType || !_this.mapService.mapTiles[tile.mapTileType].walkable; })) {
            this.finishTask(enemy);
        }
    };
    EnemyService.prototype.recalculateTargets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.enemies.map(function (enemy) { return _this.findTargets(enemy); });
                return [2 /*return*/];
            });
        });
    };
    EnemyService.prototype.finishTask = function (enemy) {
        enemy.targets[enemy.targetIndex].accessible = false;
        if (enemy.targets) {
            this.pickTarget(enemy);
        }
    };
    EnemyService.prototype.processEnemies = function () {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            var target = enemy.targets[enemy.targetIndex];
            if (target === undefined || ((!target.wanderTarget || enemy.pathingDone) && target.tile.buildingTileType === undefined)) {
                this.finishTask(enemy);
                continue;
            }
            if (enemy.pathingDone) {
                if (target.tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home) {
                    for (var _b = 0, _c = enemy.resourcesToSteal; _b < _c.length; _b++) {
                        var resourceEnum = _c[_b];
                        this.resourcesService.resources.get(resourceEnum).resourceBeingStolen = true;
                    }
                    if (enemy.totalHeld >= enemy.resourceCapacity) {
                        for (var _d = 0, _e = this.resourcesService.getResources(); _d < _e.length; _d++) {
                            var resource = _e[_d];
                            resource.resourceBeingStolen = false;
                        }
                        this.finishTask(enemy);
                    }
                    var resourceIndex = Math.floor(Math.random() * enemy.resourcesToSteal.length);
                    var resourceToSteal = this.resourcesService.resources.get(enemy.resourcesToSteal[resourceIndex]);
                    if (resourceToSteal.amount > this.minimumResourceAmount) {
                        var amountToSteal = Math.floor(Math.random() * enemy.stealMax);
                        if (resourceToSteal.amount - amountToSteal < this.minimumResourceAmount) {
                            amountToSteal = resourceToSteal.amount - this.minimumResourceAmount;
                        }
                        if (!enemy.resourcesHeld.get(resourceToSteal.resourceEnum)) {
                            enemy.resourcesHeld.set(resourceToSteal.resourceEnum, amountToSteal);
                        }
                        else {
                            enemy.resourcesHeld.set(resourceToSteal.resourceEnum, enemy.resourcesHeld.get(resourceToSteal.resourceEnum) + amountToSteal);
                        }
                        if (amountToSteal > 0) {
                            enemy.totalHeld += amountToSteal;
                            resourceToSteal.addAmount(-amountToSteal);
                            this.log("An enemy stole " + Math.floor(amountToSteal) + " " + resourceToSteal.name + "!");
                        }
                    }
                }
                else {
                    target.tile.health -= enemy.attack;
                    if (target.tile.health < 0) {
                        target.tile.health = 0;
                    }
                    if (target.tile.health <= 0) {
                        this.mapService.calculateResourceConnections();
                        this.finishTask(enemy);
                    }
                }
            }
        }
    };
    EnemyService.prototype.killEnemy = function (enemy, killSilently) {
        if (killSilently === void 0) { killSilently = false; }
        var enemyDefeatedMessage = 'An enemy has been defeated!';
        if (enemy.totalHeld > 0) {
            enemyDefeatedMessage += ' Resources recovered:';
            for (var _i = 0, _a = enemy.resourcesToSteal; _i < _a.length; _i++) {
                var resourceEnum = _a[_i];
                var stolenAmount = enemy.resourcesHeld.get(resourceEnum);
                if (isNaN(stolenAmount) || stolenAmount <= 0) {
                    continue;
                }
                var resource = this.resourcesService.resources.get(resourceEnum);
                resource.addAmount(stolenAmount);
                enemyDefeatedMessage += " " + Math.floor(stolenAmount) + " " + resource.name + ",";
            }
            enemyDefeatedMessage = enemyDefeatedMessage.slice(0, enemyDefeatedMessage.length - 1) + '.';
        }
        if (!killSilently) {
            this.log(enemyDefeatedMessage);
        }
        this.enemies = this.enemies.filter(function (_enemy) { return _enemy !== enemy; });
    };
    EnemyService.prototype.resourceIsBeingStolen = function (resource) {
        var activeEnemies = this.enemies.filter(function (enemy) { return enemy.pathingDone && enemy.targets.length &&
            enemy.targets[enemy.targetIndex].tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home; });
        return activeEnemies.some(function (enemy) { return enemy.resourcesToSteal.includes(resource.resourceEnum); });
    };
    EnemyService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_5__["MessageSource"].Enemy, message);
    };
    EnemyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_7__["ResourcesService"],
            _buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__["BuildingsService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"]])
    ], EnemyService);
    return EnemyService;
}());



/***/ }),

/***/ "./src/app/services/fighter/fighter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/fighter/fighter.service.ts ***!
  \*****************************************************/
/*! exports provided: FighterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FighterService", function() { return FighterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/entity */ "./src/app/objects/entity.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var baseFighterTypes = __webpack_require__(/*! ../../../assets/json/fighters.json */ "./src/assets/json/fighters.json");
var FighterService = /** @class */ (function () {
    function FighterService(resourcesService, enemyService, mapService) {
        this.resourcesService = resourcesService;
        this.enemyService = enemyService;
        this.mapService = mapService;
        this.fighterTypes = baseFighterTypes;
        this.fighters = [];
    }
    FighterService.prototype.tick = function (elapsed, deltaTime) {
        this.fighters.map(function (fighter) { return fighter.tick(elapsed, deltaTime); });
        this.fighters = this.fighters.filter(function (fighter) { return fighter.health > 0; });
    };
    FighterService.prototype.processFighters = function () {
        var enemies = this.enemyService.enemies;
        var enemyMagnitudes = enemies.map(function (enemy) { return Math.sqrt(Math.pow(enemy.x, 2) + Math.pow(enemy.y, 2)); });
        for (var _i = 0, _a = this.fighters; _i < _a.length; _i++) {
            var fighter = _a[_i];
            var distance = Math.sqrt(Math.pow(fighter.x, 2) + Math.pow(fighter.y, 2));
            for (var i = 0; i < enemies.length; i++) {
                if (Math.abs(distance - enemyMagnitudes[i]) <= fighter.attackRange * this.mapService.tilePixelSize) {
                    this.mapService.spawnProjectile(fighter, enemies[i]);
                    break;
                }
            }
        }
    };
    FighterService.prototype.createFighter = function (tile, fighterType) {
        var goldResource = this.resourcesService.resources.get(_objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"].Gold);
        var mapTile = this.mapService.mapTiles[tile.mapTileType];
        var overlaps = this.fighters.filter(function (_fighter) { return !_fighter.moveable && _fighter.currentTile === tile; });
        if (goldResource.amount < fighterType.cost || !mapTile.walkable || overlaps.length) {
            return;
        }
        this.resourcesService.resources.get(_objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"].Gold).addAmount(-fighterType.cost);
        var fighter = new _objects_entity__WEBPACK_IMPORTED_MODULE_1__["Fighter"](fighterType.name, new _objects_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"](tile.x, tile.y), tile, fighterType.health, 0.003, fighterType.attack, fighterType.defense, fighterType.attackRange, fighterType.description, fighterType.cost, fighterType.moveable, 1000, this.resourcesService, this.enemyService, this.mapService);
        this.fighters.push(fighter);
    };
    FighterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"],
            _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__["EnemyService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], FighterService);
    return FighterService;
}());



/***/ }),

/***/ "./src/app/services/map/map.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/map/map.service.ts ***!
  \*********************************************/
/*! exports provided: CursorTool, MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorTool", function() { return CursorTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/store.service */ "./src/app/services/store/store.service.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _objects_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../objects/entity */ "./src/app/objects/entity.ts");
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
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
var CursorTool;
(function (CursorTool) {
    CursorTool["PlaceBuildings"] = "PLACEBUILDINGS";
    CursorTool["ClearBuildings"] = "CLEARBUILDINGS";
    CursorTool["TileDetail"] = "TILEDETAIL";
    CursorTool["PlaceFighters"] = "PLACEFIGHTERS";
    CursorTool["FighterDetail"] = "FIGHTERDETAIL";
})(CursorTool || (CursorTool = {}));
var MapService = /** @class */ (function () {
    function MapService(resourcesService, storeService) {
        this.resourcesService = resourcesService;
        this.storeService = storeService;
        this.tileTypes = baseTiles.tileTypes;
        this.mapTiles = baseTiles.mapTiles;
        this.buildingTiles = baseTiles.buildingTiles;
        this.resourceTiles = baseTiles.resourceTiles;
        this.mapTileArray = [];
        this.buildingTileArray = [];
        this.resourceTileArray = [];
        this.buildingListVisible = false;
        this.fighterListVisible = false;
        this.enemySpawnTiles = [];
        this.tiledMap = [];
        this.resourceAnimations = [];
        this.projectiles = [];
        this.deleteMode = false;
        this.tileAnimationSpeed = 0.003;
        this.enemyAnimationSpeed = 0.003;
        this.projectileAnimationSpeed = 0.003;
        this.highFramerate = 25;
        this.lowFramerate = 125;
        this.canvasWidth = 750;
        this.canvasHeight = 750;
        this.tilePixelSize = 16;
        this.gridWidth = 150;
        this.gridHeight = 150;
    }
    MapService.prototype.initializeMap = function () {
        var _tiledMap = [];
        var mapTileIds, resourceTileIds, buildingTileIds, flagTileIds;
        var _mapWidth, _mapHeight;
        for (var key in this.mapTiles) {
            if (this.mapTiles.hasOwnProperty(key)) {
                this.mapTileArray.push(this.mapTiles[key]);
            }
        }
        for (var key in this.buildingTiles) {
            if (this.buildingTiles.hasOwnProperty(key)) {
                this.buildingTileArray.push(this.buildingTiles[key]);
            }
        }
        for (var key in this.resourceTiles) {
            if (this.resourceTiles.hasOwnProperty(key)) {
                this.resourceTileArray.push(this.resourceTiles[key]);
            }
        }
        var xmlRequest = new XMLHttpRequest();
        xmlRequest.onload = function () {
            var xmlDoc = new DOMParser().parseFromString(xmlRequest.responseText, 'text/xml');
            var layers = xmlDoc.getElementsByTagName('layer');
            var mapLayer, resourceLayer, buildingLayer, flagLayer;
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
                    case 'Flag Layer':
                        flagLayer = layers[i];
                        break;
                }
            }
            _mapWidth = +mapLayer.attributes.getNamedItem('width').value;
            _mapHeight = +mapLayer.attributes.getNamedItem('height').value;
            mapTileIds = mapLayer.textContent.split(',').map(function (tileId) { return +tileId; });
            resourceTileIds = resourceLayer.textContent.split(',').map(function (tileId) { return +tileId; });
            buildingTileIds = buildingLayer.textContent.split(',').map(function (tileId) { return +tileId; });
            flagTileIds = flagLayer.textContent.split(',').map(function (tileId) { return +tileId; });
        };
        xmlRequest.open('GET', './assets/tilemap/map.tmx', false);
        xmlRequest.send();
        for (var i = 0; i < mapTileIds.length; i++) {
            var mapTileId = mapTileIds[i];
            var resourceTileId = resourceTileIds[i];
            var buildingTileId = buildingTileIds[i];
            var flagTileId = flagTileIds[i];
            var position = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](16 * (_tiledMap.length % _mapWidth), 16 * Math.floor(_tiledMap.length / _mapWidth));
            var tileCropDetail = { x: 0, y: 0, width: 16, height: 16 };
            var resourceTileType = void 0, buildingTileType = void 0;
            if (resourceTileId > 0) {
                resourceTileType = this.tileTypes[resourceTileId];
            }
            if (buildingTileId > 0) {
                buildingTileType = this.tileTypes[buildingTileId];
            }
            var tile = new _objects_tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](_tiledMap.length, this.tileTypes[mapTileId], resourceTileType, buildingTileType, false, position, tileCropDetail, 50, this.resourcesService);
            var flagTileType = this.tileTypes[flagTileId];
            if (flagTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].EnemyPortal) {
                this.enemySpawnTiles.push(tile);
            }
            _tiledMap.push(tile);
        }
        this.tiledMap = _tiledMap;
        this.mapWidth = _mapWidth;
        this.mapHeight = _mapHeight;
        this.calculateResourceConnections();
    };
    MapService.prototype.tick = function (elapsed, deltaTime) {
        for (var _i = 0, _a = this.resourceAnimations; _i < _a.length; _i++) {
            var resourceAnimation = _a[_i];
            resourceAnimation.tick(elapsed, deltaTime);
            if (resourceAnimation.pathingDone) {
                resourceAnimation.finishAnimation();
            }
        }
        for (var _b = 0, _c = this.tiledMap.filter(function (_tile) { return _tile.market; }); _b < _c.length; _b++) {
            var tile = _c[_b];
            tile.market.tick(elapsed, deltaTime);
        }
        this.resourceAnimations = this.resourceAnimations.filter(function (animation) { return !animation.pathingDone; });
        for (var _d = 0, _e = this.projectiles; _d < _e.length; _d++) {
            var projectile = _e[_d];
            projectile.tick(elapsed, deltaTime);
        }
        this.projectiles = this.projectiles.filter(function (projectile) { return !projectile.hitTarget; });
    };
    MapService.prototype.calculateResourceConnections = function () {
        var _this = this;
        var resourceTiles = this.getResourceTiles();
        for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
            var resource = _a[_i];
            resource.pathAvailable = false;
        }
        var homeTile = this.tiledMap.filter(function (tile) { return tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home; })[0];
        var _loop_1 = function (resourceTile) {
            if (resourceTile.health <= 0) {
                return "continue";
            }
            this_1.findPath(resourceTile, homeTile, true, true).subscribe(function (tilePath) {
                resourceTile.buildingPath = tilePath;
                if (resourceTile.buildingPath.length && !resourceTile.buildingPath.some(function (tile) { return tile.health <= 0; })) {
                    var resources = _this.resourceTiles[resourceTile.resourceTileType].resourceEnums
                        .map(function (resourceEnum) { return _this.resourcesService.resources.get(resourceEnum); });
                    for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                        var resource = resources_1[_i];
                        resource.pathAvailable = true;
                    }
                }
            });
        };
        var this_1 = this;
        for (var _b = 0, resourceTiles_1 = resourceTiles; _b < resourceTiles_1.length; _b++) {
            var resourceTile = resourceTiles_1[_b];
            _loop_1(resourceTile);
        }
        for (var _c = 0, _d = this.tiledMap.filter(function (tile) { return tile.market; }); _c < _d.length; _c++) {
            var marketTile = _d[_c];
            marketTile.market.calculateConnection();
        }
    };
    MapService.prototype.findPath = function (startTile, targetTile, onlyPathable, onlyWalkable, maxAttempts) {
        if (maxAttempts === void 0) { maxAttempts = Infinity; }
        var visitedTiles = [];
        var tileQueue = [];
        var tileDistances = this.tiledMap.map(function (_) { return Infinity; });
        var tileHeuristicDistances = this.tiledMap.map(function (_) { return Infinity; });
        var nodeMap = new Map();
        var currentNode;
        tileDistances[startTile.id] = 0;
        tileQueue.push(startTile);
        var nodesProcessed = 0;
        while (tileQueue.length) {
            nodesProcessed++;
            if (nodesProcessed > maxAttempts) {
                break;
            }
            currentNode = tileQueue.sort(function (a, b) { return tileHeuristicDistances[a.id] - tileHeuristicDistances[b.id]; })[0];
            tileQueue = tileQueue.filter(function (tile) { return tile !== currentNode; });
            if (currentNode === targetTile) {
                var buildingPath = [];
                var backtrackNode = currentNode;
                while (backtrackNode !== startTile) {
                    buildingPath.push(backtrackNode);
                    backtrackNode = nodeMap.get(backtrackNode);
                }
                buildingPath.push(backtrackNode);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(buildingPath.reverse());
            }
            var neighborDistance = tileDistances[currentNode.id] + 1;
            for (var _i = 0, _a = this.getNeighborTiles(currentNode); _i < _a.length; _i++) {
                var neighbor = _a[_i];
                var pathable = neighbor.buildingTileType && this.buildingTiles[neighbor.buildingTileType].resourcePathable;
                var walkable = this.mapTiles[neighbor.mapTileType].walkable || pathable;
                if (!visitedTiles.includes(neighbor) && (!onlyPathable || pathable) && (!onlyWalkable || walkable) &&
                    tileDistances[neighbor.id] > neighborDistance) {
                    nodeMap.set(neighbor, currentNode);
                    tileDistances[neighbor.id] = neighborDistance;
                    tileHeuristicDistances[neighbor.id] = neighborDistance + targetTile.position.subtract(neighbor.position).magnitude;
                    tileQueue.push(neighbor);
                }
            }
            visitedTiles.push(currentNode);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    };
    MapService.prototype.getRandomTile = function (tileTypes) {
        var tiles = this.tiledMap;
        if (tileTypes) {
            tiles = tiles.filter(function (tile) { return tileTypes.some(function (tileType) { return tileType === tile.mapTileType; }); });
        }
        return tiles[Math.floor(Math.random() * tiles.length)];
    };
    MapService.prototype.spawnHarvestedResourceAnimation = function (resource, multiplier, spawnedByPlayer) {
        if (multiplier === void 0) { multiplier = 1; }
        var matchingTiles = this.getTilesForResource(resource).filter(function (_tile) { return _tile.buildingPath.length > 0; });
        if (!resource.canAfford(multiplier)) {
            return;
        }
        resource.deductResourceConsumes(multiplier);
        var tile = matchingTiles[Math.floor(Math.random() * matchingTiles.length)];
        if (tile === undefined) {
            return;
        }
        var tilePathCopy = tile.buildingPath.map(function (_tile) { return _tile; });
        var animationType = spawnedByPlayer ? _objects_entity__WEBPACK_IMPORTED_MODULE_5__["ResourceAnimationType"].PlayerSpawned : _objects_entity__WEBPACK_IMPORTED_MODULE_5__["ResourceAnimationType"].WorkerSpawned;
        var resourceAnimation = new _objects_entity__WEBPACK_IMPORTED_MODULE_5__["ResourceAnimation"](new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](tile.x, tile.y), tile, 0.003, tilePathCopy, animationType, resource.resourceEnum, multiplier, spawnedByPlayer, this.resourcesService, this.storeService);
        this.resourceAnimations.push(resourceAnimation);
    };
    MapService.prototype.spawnSoldResourceAnimation = function (resourceEnum, multiplier, market) {
        var resourceAnimation = new _objects_entity__WEBPACK_IMPORTED_MODULE_5__["ResourceAnimation"](new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](market.homeTile.x, market.homeTile.y), market.homeTile, 0.003, market.tilePath, _objects_entity__WEBPACK_IMPORTED_MODULE_5__["ResourceAnimationType"].Sold, resourceEnum, multiplier, false, this.resourcesService, this.storeService);
        this.resourceAnimations.push(resourceAnimation);
    };
    MapService.prototype.spawnProjectile = function (owner, target) {
        var projectile = new _objects_entity__WEBPACK_IMPORTED_MODULE_5__["Projectile"]('Arrow', new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](owner.x, owner.y), owner.currentTile, 0.006, owner, target);
        this.projectiles.push(projectile);
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
    MapService.prototype.clampTileCoordinates = function (x, y) {
        return [Math.floor(x / this.tilePixelSize), Math.floor(y / this.tilePixelSize)];
    };
    MapService.prototype.getResourceTiles = function (resourceEnum) {
        var tiles = this.tiledMap.filter(function (tile) { return tile.resourceTileType !== undefined; });
        if (resourceEnum !== undefined) {
            var matchingTypes_1 = this.resourceTileArray.filter(function (tile) { return tile.resourceEnums.includes(resourceEnum); }).map(function (tile) { return tile.tileType; });
            tiles = tiles.filter(function (tile) { return matchingTypes_1.includes(tile.resourceTileType); });
        }
        return tiles;
    };
    MapService.prototype.getTileType = function (tileId) {
        if (tileId in [37, 38, 39, 40, 41, 42, 43, 44, 54, 55, 56, 57, 58, 59, 60, 61, 71, 72, 73, 74, 75, 76, 77, 78, 88,
            89, 90, 91, 92, 93, 94, 95, 105, 106, 107, 108, 109, 110, 111, 112, 123, 124, 125, 126, 127, 128, 129, 130]) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass;
        }
        else if (tileId in [53, 122]) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Water;
        }
        return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Mountain;
    };
    MapService.prototype.getTileCropDetail = function (tileId) {
        return { x: 0, y: 0, width: 16, height: 16 };
    };
    MapService.prototype.getTilesForResource = function (resource) {
        var matchingTypes = this.resourceTileArray.filter(function (tile) { return tile.resourceEnums.includes(resource.resourceEnum); })
            .map(function (tile) { return tile.tileType; });
        return this.tiledMap.filter(function (tile) { return matchingTypes.includes(tile.resourceTileType); });
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
            _store_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../objects/message */ "./src/app/objects/message.ts");
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
        this.visibleSources = [_objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Admin, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Buildings, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Main, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Enemy,
            _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Fighter, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Map, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Resources, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Settings,
            _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Store, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Upgrades, _objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Workers];
        this.messagesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.messages);
        this.messageLimit = 50;
    }
    MessagesService.prototype.add = function (source, message) {
        if (this.messages.length >= this.messageLimit) {
            this.messages = this.messages.slice(1);
        }
        this.messages.push(new _objects_message__WEBPACK_IMPORTED_MODULE_2__["Message"](source, message));
        this.getFilteredMessages();
    };
    MessagesService.prototype.clear = function () {
        this.messages = [];
        this.messagesDataSource.data = [];
    };
    MessagesService.prototype.getFilteredMessages = function () {
        var _this = this;
        this.messagesDataSource.data = this.messages.filter(function (message) { return _this.visibleSources.includes(message.source); });
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
/* harmony import */ var _objects_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/resource */ "./src/app/objects/resource.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
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





var baseResources = __webpack_require__(/*! ../../../assets/json/resources.json */ "./src/assets/json/resources.json");
var ResourcesService = /** @class */ (function () {
    function ResourcesService(messagesService) {
        this.messagesService = messagesService;
        this.resources = new Map();
        this.highestTierReached = 0;
        this.loadBaseResources();
    }
    ResourcesService.prototype.loadBaseResources = function () {
        for (var resourceName in _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"]) {
            if (Number(resourceName)) {
                continue;
            }
            var resourceEnum = _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"][resourceName];
            var baseResource = baseResources[resourceEnum];
            var resource = new _objects_resource__WEBPACK_IMPORTED_MODULE_1__["Resource"](baseResource.name, baseResource.resourceType, baseResource.resourceEnum, baseResource.iconPath, baseResource.resourceConsumes, baseResource.harvestable, baseResource.harvestMilliseconds, baseResource.sellable, baseResource.sellsFor, baseResource.resourceDescription, baseResource.workerVerb, baseResource.workerNoun, baseResource.resourceTier, this);
            this.resources.set(resourceEnum, resource);
        }
    };
    ResourcesService.prototype.getResources = function (resourceType, filterBySellable, filterByAccessible, filterByHarvestable) {
        if (filterBySellable === void 0) { filterBySellable = false; }
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        if (filterByHarvestable === void 0) { filterByHarvestable = false; }
        var resources = Array.from(this.resources.values());
        if (resourceType) {
            resources = resources.filter(function (resource) { return resource.resourceType === resourceType; });
        }
        if (filterBySellable) {
            resources = resources.filter(function (resource) { return resource.sellable; });
        }
        if (filterByAccessible) {
            resources = resources.filter(function (resource) { return resource.resourceAccessible; });
        }
        if (filterByHarvestable) {
            resources = resources.filter(function (resource) { return resource.harvestable; });
        }
        return resources;
    };
    ResourcesService.prototype.getPlayerScore = function () {
        var resources = Array.from(this.resources.values());
        return resources.map(function (resource) { return resource.amount * resource.resourceTier; }).reduce(function (total, amount) { return total += amount; });
    };
    ResourcesService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_3__["MessageSource"].Resources, message);
    };
    ResourcesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/about-dialog/about-dialog/about-dialog.component */ "./src/app/components/about-dialog/about-dialog/about-dialog.component.ts");
/* harmony import */ var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/save-dialog/save-dialog.component */ "./src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _fighter_fighter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _objects_entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../objects/entity */ "./src/app/objects/entity.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../objects/message */ "./src/app/objects/message.ts");
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var defaultResourceBinds = [_objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Oak, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Pine, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Birch, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Stone, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Graphite,
    _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].Limestone, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].CopperOre, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].TinOre, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].BronzeIngot, _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceEnum"].IronOre];
var SettingsService = /** @class */ (function () {
    function SettingsService(resourcesService, upgradesService, workersService, mapService, enemyService, fighterService, messagesService, snackbar, dialog) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.workersService = workersService;
        this.mapService = mapService;
        this.enemyService = enemyService;
        this.fighterService = fighterService;
        this.messagesService = messagesService;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.versionHistory = ['1.2', 'Alpha 3', 'Alpha 3.1', 'Alpha 3.2'];
        this.gameVersion = 'Alpha 3.2';
        this.bindSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.autosaveInterval = 60000;
        this.lastAutosave = this.autosaveInterval;
        this.debugMode = false;
        this.resourceBinds = defaultResourceBinds;
        this.disableAnimations = false;
        this.slimInterface = false;
        this.mapDetailMode = true;
        this.mapLowFramerate = false;
        this.harvestDetailColor = '#a4ff89';
        this.workerDetailColor = '#ae89ff';
        this.resourceAnimationColors = {
            'PLAYERSPAWNED': '#a4ff89',
            'WORKERSPAWNED': 'ae89ff',
            'SOLD': '#ffc089'
        };
    }
    SettingsService.prototype.tick = function (elapsed, deltaTime) {
        if (elapsed - this.lastAutosave < this.autosaveInterval || this.autosaveInterval < 0) {
            return;
        }
        this.lastAutosave = elapsed;
        this.saveGame();
    };
    SettingsService.prototype.resourceBindChange = function (event) {
        var limitExceeded = event.value.length > 10;
        this.bindSelected.setErrors({ 'length': limitExceeded });
        if (!limitExceeded) {
            this.resourceBinds = event.value;
            for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
                var resource = _a[_i];
                resource.bindIndex = -1;
            }
            for (var _b = 0, _c = this.resourceBinds; _b < _c.length; _b++) {
                var resourceBind = _c[_b];
                var resource = this.resourcesService.resources.get(resourceBind);
                resource.bindIndex = this.resourceBinds.indexOf(resourceBind);
            }
        }
    };
    SettingsService.prototype.openSaveDialog = function (saveData) {
        var _this = this;
        var dialogRef = this.dialog.open(_components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_4__["SaveDialogComponent"], {
            width: '750px',
            height: '150px',
            data: saveData === undefined ? {} : { saveData: saveData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                if (_this.importSave(result)) {
                    _this.snackbar.open('Game successfully loaded!', '', { duration: 2000 });
                    _this.log('Game successfully loaded!');
                }
            }
        });
    };
    SettingsService.prototype.openAboutDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AboutDialogComponent"], {
            width: '750px',
            height: '550px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== undefined) {
                if (_this.importSave(result)) {
                }
            }
        });
    };
    SettingsService.prototype.setAutosave = function () {
        this.lastAutosave = this.autosaveInterval;
    };
    SettingsService.prototype.saveGame = function () {
        var saveData = this.exportSave();
        localStorage.setItem('clickerGameSaveData', saveData);
        this.snackbar.open('Game successfully saved!', '', { duration: 2000 });
        this.log('Game successfully saved!');
    };
    SettingsService.prototype.loadGame = function () {
        var saveData = localStorage.getItem('clickerGameSaveData');
        if (saveData === null) {
            return;
        }
        if (this.importSave(saveData)) {
            this.snackbar.open('Game successfully loaded!', '', { duration: 2000 });
            this.log('Game successfully loaded!');
        }
    };
    SettingsService.prototype.deleteSave = function () {
        localStorage.removeItem('clickerGameSaveData');
        this.resourcesService.loadBaseResources();
        this.upgradesService.loadBaseUpgrades();
        this.workersService.loadBaseWorkers();
        this.mapService.initializeMap();
        this.enemyService.enemies = [];
        this.fighterService.fighters = [];
        this.mapService.resourceAnimations = [];
        this.mapService.projectiles = [];
        this.autosaveInterval = 60000;
        this.setAutosave();
        this.debugMode = false;
        this.resourcesService.highestTierReached = 0;
        this.workersService.workersPaused = false;
        this.resourceBinds = defaultResourceBinds;
        this.bindSelected.setValue(this.resourceBinds);
        this.resourceBindChange({ 'source': null, 'value': this.resourceBinds });
        this.messagesService.visibleSources = [_objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Admin, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Buildings, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Main, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Enemy,
            _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Fighter, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Map, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Resources, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Settings,
            _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Store, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Upgrades, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Workers];
        this.enemyService.enemiesActive = false;
        this.disableAnimations = false;
        this.slimInterface = false;
        this.mapLowFramerate = false;
        this.resourceAnimationColors = {
            'PLAYERSPAWNED': '#a4ff89',
            'WORKERSPAWNED': 'ae89ff',
            'SOLD': '#ffc089'
        };
        this.snackbar.open('Game save deleted.', '', { duration: 2000 });
        this.log('Game save deleted.');
    };
    SettingsService.prototype.exportSave = function () {
        var saveData = {
            resources: [],
            upgrades: [],
            workers: [],
            tiles: [],
            enemies: [],
            fighters: [],
            settings: {
                autosaveInterval: this.autosaveInterval,
                debugMode: this.debugMode,
                highestTierReached: this.resourcesService.highestTierReached,
                workersPaused: this.workersService.workersPaused,
                hidePurchasedUpgrades: this.upgradesService.hidePurchasedUpgrades,
                resourceBinds: this.resourceBinds,
                visibleSources: this.messagesService.visibleSources,
                enemiesActive: this.enemyService.enemiesActive,
                slimInterface: this.slimInterface,
                mapLowFramerate: this.mapLowFramerate,
                resourceAnimationColors: this.resourceAnimationColors
            },
            gameVersion: this.gameVersion
        };
        for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
            var resource = _a[_i];
            saveData.resources.push({
                resourceEnum: resource.resourceEnum,
                amount: resource.amount,
                harvestable: resource.harvestable,
                harvestYield: resource.harvestYield,
                harvestMilliseconds: resource.harvestMilliseconds,
                sellable: resource.sellable,
                sellsFor: resource.sellsFor,
                autoSellCutoff: resource.autoSellCutoff,
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
        for (var _d = 0, _e = this.workersService.getWorkers(); _d < _e.length; _d++) {
            var worker = _e[_d];
            var workerData = {
                resourceType: worker.resourceType,
                cost: worker.cost,
                workerCount: worker.workerCount,
                workersByResource: []
            };
            for (var _f = 0, _g = worker.getResourceWorkers(); _f < _g.length; _f++) {
                var resourceWorker = _g[_f];
                workerData.workersByResource.push({
                    resourceEnum: resourceWorker.resourceEnum,
                    workable: resourceWorker.workable,
                    workerCount: resourceWorker.workerCount,
                    workerYield: resourceWorker.workerYield
                });
            }
            saveData.workers.push(workerData);
        }
        for (var _h = 0, _j = this.mapService.tiledMap; _h < _j.length; _h++) {
            var tile = _j[_h];
            if (tile.buildingTileType === undefined && tile.buildingTileType !== _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].EnemyPortal) {
                continue;
            }
            var tileData = {
                id: tile.id,
                health: tile.health,
                maxHealth: tile.maxHealth,
                buildingRemovable: tile.buildingRemovable,
                tileCropDetail: tile.tileCropDetail,
                statLevels: tile.statLevels,
                statCosts: tile.statCosts
            };
            if (tile.resourceTileType !== undefined) {
                tileData.resourceTileType = tile.resourceTileType;
            }
            if (tile.buildingTileType !== undefined) {
                tileData.buildingTileType = tile.buildingTileType;
            }
            if (tile.market) {
                tileData.sellInterval = tile.market.sellInterval;
                tileData.sellQuantity = tile.market.sellQuantity;
            }
            saveData.tiles.push(tileData);
        }
        for (var _k = 0, _l = this.enemyService.enemies; _k < _l.length; _k++) {
            var enemy = _l[_k];
            saveData.enemies.push({
                name: enemy.name,
                position: enemy.position,
                spawnPosition: enemy.spawnPosition,
                health: enemy.health,
                maxHealth: enemy.maxHealth,
                animationSpeed: enemy.animationSpeed,
                attack: enemy.attack,
                defense: enemy.defense,
                attackRange: enemy.attackRange,
                targetableBuildingTypes: enemy.targetableBuildingTypes,
                resourcesToSteal: enemy.resourcesToSteal,
                resorucesHeld: enemy.resourcesHeld,
                stealMax: enemy.stealMax,
                resourceCapacity: enemy.resourceCapacity
            });
        }
        for (var _m = 0, _o = this.fighterService.fighters; _m < _o.length; _m++) {
            var fighter = _o[_m];
            saveData.fighters.push({
                name: fighter.name,
                description: fighter.description,
                position: fighter.position,
                spawnPosition: fighter.spawnPosition,
                health: fighter.health,
                maxHealth: fighter.maxHealth,
                animationSpeed: fighter.animationSpeed,
                attack: fighter.attack,
                defense: fighter.defense,
                attackRange: fighter.attackRange,
                moveable: fighter.moveable,
                fireMilliseconds: fighter.fireMilliseconds,
                cost: fighter.cost,
                statLevels: fighter.statLevels,
                statCosts: fighter.statCosts
            });
        }
        return btoa(JSON.stringify(saveData));
    };
    SettingsService.prototype.importSave = function (saveDataString) {
        var _this = this;
        var backupSave = this.exportSave();
        try {
            var saveData = JSON.parse(atob(saveDataString));
            saveData = this.processVersionDifferences(saveData);
            if (!saveData.gameVersion) {
                throw new Error('Save data is incompatible with the current version.');
            }
            if (saveData.resources !== undefined) {
                for (var _i = 0, _a = saveData.resources; _i < _a.length; _i++) {
                    var resourceData = _a[_i];
                    var resource = this.resourcesService.resources.get(resourceData.resourceEnum);
                    if (resource === undefined) {
                        continue;
                    }
                    resource.amount = resourceData.amount;
                    resource.harvestable = resourceData.harvestable;
                    resource.harvestYield = resourceData.harvestYield;
                    resource.harvestMilliseconds = resourceData.harvestMilliseconds;
                    resource.sellable = resourceData.sellable;
                    resource.sellsFor = resourceData.sellsFor;
                    resource.autoSellCutoff = resourceData.autoSellCutoff ? resourceData.autoSellCutoff : 0;
                }
            }
            if (saveData.upgrades !== undefined) {
                for (var _b = 0, _c = saveData.upgrades; _b < _c.length; _b++) {
                    var upgradeData = _c[_b];
                    var upgrade = this.upgradesService.getUpgrade(upgradeData.id);
                    if (upgrade === undefined) {
                        continue;
                    }
                    upgrade.purchased = upgradeData.purchased;
                }
            }
            if (saveData.workers !== undefined) {
                for (var _d = 0, _e = saveData.workers; _d < _e.length; _d++) {
                    var workerData = _e[_d];
                    var worker = this.workersService.workers.get(workerData.resourceType);
                    worker.cost = workerData.cost;
                    worker.workerCount = workerData.workerCount;
                    worker.freeWorkers = workerData.workerCount;
                    for (var _f = 0, _g = workerData.workersByResource; _f < _g.length; _f++) {
                        var resourceWorkerData = _g[_f];
                        var resourceWorker = worker.resourceWorkers.get(resourceWorkerData.resourceEnum);
                        resourceWorker.workable = resourceWorkerData.workable;
                        resourceWorker.workerYield = resourceWorkerData.workerYield;
                        resourceWorker.workerCount = 0;
                        resourceWorker.sliderSetting = resourceWorkerData.workerCount;
                        worker.updateResourceWorker(resourceWorkerData.resourceEnum, resourceWorkerData.workerCount);
                    }
                    if (worker.freeWorkers < 0) {
                        throw new Error('Invalid worker settings.');
                    }
                }
            }
            if (saveData.tiles !== undefined) {
                var _loop_1 = function (tileData) {
                    var tile = this_1.mapService.tiledMap.find(function (_tile) { return _tile.id === tileData.id; });
                    if (tile === undefined) {
                        return "continue";
                    }
                    tile.health = tileData.health ? tileData.health : 50;
                    tile.maxHealth = tileData.maxHealth ? tileData.maxHealth : 50;
                    tile.resourceTileType = tileData.resourceTileType;
                    tile.buildingTileType = tileData.buildingTileType;
                    tile.buildingRemovable = tileData.buildingRemovable;
                    tile.tileCropDetail = tileData.tileCropDetail;
                    tile.statLevels = tileData.statLevels;
                    tile.statCosts = tileData.statCosts;
                };
                var this_1 = this;
                for (var _h = 0, _j = saveData.tiles; _h < _j.length; _h++) {
                    var tileData = _j[_h];
                    _loop_1(tileData);
                }
                var marketTiles = saveData.tiles.filter(function (tile) { return tile.buildingTileType && _this.mapService.buildingTiles[tile.buildingTileType].subType === _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingSubType"].Market; });
                for (var _k = 0, marketTiles_1 = marketTiles; _k < marketTiles_1.length; _k++) {
                    var tileData = marketTiles_1[_k];
                    var tile = this.mapService.tiledMap[tileData.id];
                    var resourceType = void 0;
                    switch (tileData.buildingTileType) {
                        case _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].WoodMarket: {
                            resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceType"].Wood;
                            break;
                        }
                        case _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].MineralMarket: {
                            resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceType"].Mineral;
                            break;
                        }
                        case _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].MetalMarket: {
                            resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_12__["ResourceType"].Metal;
                            break;
                        }
                    }
                    tile.market = new _objects_tile__WEBPACK_IMPORTED_MODULE_13__["Market"](this.mapService, this.resourcesService, resourceType, tile, false);
                    tile.market.sellInterval = tileData.sellInterval ? tileData.sellInterval : 1000;
                    tile.market.sellQuantity = tileData.sellQuantity ? tileData.sellQuantity : 50;
                }
            }
            if (saveData.enemies !== undefined) {
                for (var _l = 0, _m = saveData.enemies; _l < _m.length; _l++) {
                    var enemyData = _m[_l];
                    var tilePosition = this.mapService.clampTileCoordinates(enemyData.position.x, enemyData.position.y);
                    var tile = this.mapService.getTile(tilePosition[0], tilePosition[1]);
                    var enemy = new _objects_entity__WEBPACK_IMPORTED_MODULE_14__["Enemy"](enemyData.name, new _objects_vector__WEBPACK_IMPORTED_MODULE_16__["Vector"](enemyData.position.x, enemyData.position.y), tile, enemyData.health, enemyData.animationSpeed, enemyData.attack, enemyData.defense, enemyData.attackRange, enemyData.targetableBuildingTypes, enemyData.resourcesToSteal, enemyData.stealMax, enemyData.resourceCapacity);
                    enemy.spawnPosition = new _objects_vector__WEBPACK_IMPORTED_MODULE_16__["Vector"](enemyData.spawnPosition.x, enemyData.spawnPosition.y);
                    this.enemyService.findTargets(enemy);
                    this.enemyService.pickTarget(enemy);
                    this.enemyService.enemies.push(enemy);
                }
            }
            if (saveData.fighters !== undefined) {
                for (var _o = 0, _p = saveData.fighters; _o < _p.length; _o++) {
                    var fighterData = _p[_o];
                    var tilePosition = this.mapService.clampTileCoordinates(fighterData.position.x, fighterData.position.y);
                    var tile = this.mapService.getTile(tilePosition[0], tilePosition[1]);
                    var fighter = new _objects_entity__WEBPACK_IMPORTED_MODULE_14__["Fighter"](fighterData.name, new _objects_vector__WEBPACK_IMPORTED_MODULE_16__["Vector"](fighterData.position.x, fighterData.position.y), tile, fighterData.health, fighterData.animationSpeed, fighterData.attack, fighterData.defense, fighterData.attackRange, fighterData.description, fighterData.cost ? fighterData.cost : 50, fighterData.moveable, fighterData.fireMilliseconds ? fighterData.fireMilliseconds : 1000, this.resourcesService, this.enemyService, this.mapService);
                    fighter.maxHealth = fighterData.maxHealth;
                    if (fighterData.statLevels) {
                        fighter.statLevels = fighterData.statLevels;
                    }
                    if (fighterData.statCosts) {
                        fighter.statCosts = fighterData.statCosts;
                    }
                    this.fighterService.fighters.push(fighter);
                }
            }
            if (saveData.settings !== undefined) {
                this.autosaveInterval = saveData.settings.autosaveInterval ? saveData.settings.autosaveInterval : 900000;
                this.debugMode = saveData.settings.debugMode ? saveData.settings.debugMode : false;
                this.resourcesService.highestTierReached = saveData.settings.highestTierReached ? saveData.settings.highestTierReached : 0;
                this.workersService.workersPaused = saveData.settings.workersPaused ? saveData.settings.workersPaused : false;
                this.upgradesService.hidePurchasedUpgrades =
                    saveData.settings.hidePurchasedUpgrades ? saveData.settings.hidePurchasedUpgrades : false;
                this.resourceBinds = saveData.settings.resourceBinds ? saveData.settings.resourceBinds : defaultResourceBinds;
                this.messagesService.visibleSources = saveData.settings.visibleSources ? saveData.settings.visibleSources :
                    [_objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Admin, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Buildings, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Main, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Enemy,
                        _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Fighter, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Map, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Resources, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Settings,
                        _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Store, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Upgrades, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Workers];
                this.enemyService.enemiesActive = saveData.settings.enemiesActive ? saveData.settings.enemiesActive : false;
                this.slimInterface = saveData.settings.slimInterface ? saveData.settings.slimInterface : false;
                this.mapLowFramerate = saveData.settings.mapLowFramerate ? saveData.settings.mapLowFramerate : false;
                this.harvestDetailColor = saveData.settings.harvestDetailColor ? saveData.settings.harvestDetailColor : '#a4ff89';
                this.workerDetailColor = saveData.settings.workerDetailColor ? saveData.settings.workerDetailColor : '#ae89ff';
                if (saveData.settings.resourceAnimationColors) {
                    this.resourceAnimationColors = saveData.settings.resourceAnimationColors;
                }
            }
            this.mapService.calculateResourceConnections();
            return true;
        }
        catch (error) {
            this.snackbar.open("Error loading save data: " + error, '', { duration: 5000 });
            this.log('Error loading save data. Printing data to console for debugging.');
            this.importSave(backupSave);
            console.log(saveDataString);
            console.error(error);
            return false;
        }
    };
    SettingsService.prototype.processVersionDifferences = function (saveData) {
        var _this = this;
        var legacyResourceIds = {
            0: 'GOLD',
            1: 'OAK',
            2: 'COPPERORE',
            3: 'TINORE',
            4: 'BRONZEINGOT',
            5: 'IRONORE',
            6: 'IRONINGOT',
            7: 'PINE',
            8: 'BIRCH',
            9: 'EUCALYPTUS',
            10: 'STEELINGOT',
            11: 'GOLDORE',
            12: 'GOLDINGOT',
            13: 'STONE',
            15: 'WILLOW',
            16: 'ENTSOUL',
            17: 'REANIMATEDENT',
            18: 'LATINUMORE',
            19: 'LATINUMINGOT',
            20: 'UNBELIEVIUMORE',
            21: 'LUSTRIALORE',
            22: 'SPECTRUSORE',
            23: 'TEMPROUSINGOT',
            24: 'REFINEDTEMPROUS',
            25: 'TEAK',
            26: 'GRAPHITE',
            27: 'LIMESTONE',
            28: 'MARBLE',
            29: 'QUARTZ',
            30: 'OBSIDIAN',
            31: 'DIAMOND'
        };
        var legacyWorkerIds = {
            0: 'WOOD',
            1: 'METAL',
            2: 'MINERAL'
        };
        var oldVersionIndex = this.versionHistory.indexOf(saveData.gameVersion);
        if (oldVersionIndex <= this.versionHistory.indexOf('1.2')) {
            for (var _i = 0, _a = saveData.resources; _i < _a.length; _i++) {
                var resourceData = _a[_i];
                var resource = this.resourcesService.resources.get(legacyResourceIds[resourceData.resourceId]);
                resourceData.sellsFor = resource.sellsFor;
            }
        }
        if (oldVersionIndex <= this.versionHistory.indexOf('Alpha 3')) {
            saveData.settings.resourceAnimationColors = {};
            saveData.settings.resourceAnimationColors[_objects_entity__WEBPACK_IMPORTED_MODULE_14__["ResourceAnimationType"].PlayerSpawned] = saveData.settings.harvestDetailColor;
            saveData.settings.resourceAnimationColors[_objects_entity__WEBPACK_IMPORTED_MODULE_14__["ResourceAnimationType"].WorkerSpawned] = saveData.settings.workerDetailColor;
            saveData.settings.resourceAnimationColors[_objects_entity__WEBPACK_IMPORTED_MODULE_14__["ResourceAnimationType"].Sold] = '#ffc089';
            saveData.tiles.map(function (tileData) {
                var isMarket = _this.mapService.buildingTiles[tileData.buildingTileType].subType === _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingSubType"].Market;
                tileData.statLevels = isMarket ? { 'MAXHEALTH': 1, 'SELLAMOUNT': 1, 'SELLRATE': 1 } : { 'MAXHEALTH': 1 };
                tileData.statCosts = isMarket ? { 'MAXHEALTH': 1500, 'SELLAMOUNT': 1500, 'SELLRATE': 1500 } : { 'MAXHEALTH': 1500 };
            });
        }
        if (oldVersionIndex <= this.versionHistory.indexOf('Alpha 3.1')) {
            for (var _b = 0, _c = saveData.resources; _b < _c.length; _b++) {
                var resourceData = _c[_b];
                resourceData.resourceEnum = legacyResourceIds[resourceData.id];
            }
            for (var _d = 0, _e = saveData.workers; _d < _e.length; _d++) {
                var workerData = _e[_d];
                workerData.resourceType = legacyWorkerIds[workerData.id];
                for (var _f = 0, _g = workerData.workersByResource; _f < _g.length; _f++) {
                    var resourceWorkerData = _g[_f];
                    resourceWorkerData.resourceEnum = legacyResourceIds[resourceWorkerData.resourceId];
                }
            }
            for (var _h = 0, _j = saveData.enemies; _h < _j.length; _h++) {
                var enemyData = _j[_h];
                var newResourcesToSteal = enemyData.resourcesToSteal.map(function (resourceId) { return legacyResourceIds[resourceId]; });
                var newResourcesHeld = new Map();
                if (!enemyData.resourcesHeld || !enemyData.resourcesHeld.length) {
                    continue;
                }
                for (var _k = 0, _l = enemyData.resourcesToSteal; _k < _l.length; _k++) {
                    var resourceId = _l[_k];
                    var amountHeld = enemyData.resourcesHeld[resourceId];
                    newResourcesHeld.set(legacyResourceIds[resourceId], amountHeld === undefined ? 0 : amountHeld);
                }
                enemyData.resourcesToSteal = newResourcesToSteal;
                enemyData.resourcesHeld = newResourcesHeld;
            }
            saveData.settings.resourceBinds = saveData.settings.resourceBinds.map(function (resourceId) { return legacyResourceIds[resourceId]; });
            var accessedTiers = saveData.resources.filter(function (resource) { return resource.amount; }).map(function (resource) {
                return _this.resourcesService.resources.get(resource.resourceEnum).resourceTier;
            });
            saveData.settings.highestTierReached = accessedTiers.sort()[accessedTiers.length - 1];
        }
        return saveData;
    };
    SettingsService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Settings, message);
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_5__["ResourcesService"],
            _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_6__["UpgradesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_7__["WorkersService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_9__["MapService"],
            _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_10__["EnemyService"],
            _fighter_fighter_service__WEBPACK_IMPORTED_MODULE_11__["FighterService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
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





var StoreService = /** @class */ (function () {
    function StoreService(resourcesService, messagesService) {
        this.resourcesService = resourcesService;
        this.messagesService = messagesService;
    }
    StoreService.prototype.sellResource = function (resource, amount) {
        if (!this.canSellResource(resource, amount)) {
            return;
        }
        if (amount === -1) {
            amount = resource.amount;
        }
        resource.addAmount(-amount);
        this.resourcesService.resources.get(_objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceEnum"].Gold).addAmount(amount * resource.sellsFor);
    };
    StoreService.prototype.canSellResource = function (resource, amount) {
        if (amount === -1) {
            return resource.sellable && resource.amount > 0;
        }
        return resource.sellable && resource.amount - amount >= 0;
    };
    StoreService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Store, message);
    };
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/services/tick/tick.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/tick/tick.service.ts ***!
  \***********************************************/
/*! exports provided: TickService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickService", function() { return TickService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../clicker-main/clicker-main.service */ "./src/app/services/clicker-main/clicker-main.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _fighter_fighter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/services/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TickService = /** @class */ (function () {
    function TickService(clickerMainService, workersService, enemyService, fighterService, settingsService, mapService) {
        this.clickerMainService = clickerMainService;
        this.workersService = workersService;
        this.enemyService = enemyService;
        this.fighterService = fighterService;
        this.settingsService = settingsService;
        this.mapService = mapService;
        this.tickObjects = [this.clickerMainService, this.workersService, this.enemyService,
            this.fighterService, this.settingsService, this.mapService];
        d3.interval(this.tick(this), 25);
    }
    TickService.prototype.tick = function (self) {
        return function (elapsed) {
            for (var _i = 0, _a = self.tickObjects; _i < _a.length; _i++) {
                var tickObject = _a[_i];
                tickObject.tick(elapsed, elapsed - self.timeElapsed);
            }
            self.timeElapsed = elapsed;
        };
    };
    TickService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_1__["ClickerMainService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_2__["WorkersService"],
            _enemy_enemy_service__WEBPACK_IMPORTED_MODULE_3__["EnemyService"],
            _fighter_fighter_service__WEBPACK_IMPORTED_MODULE_4__["FighterService"],
            _settings_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"]])
    ], TickService);
    return TickService;
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
/* harmony import */ var _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upgrades/upgrades.service */ "./src/app/services/upgrades/upgrades.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
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
    function TooltipService(resourcesService, upgradesService, workersService, mapService) {
        this.resourcesService = resourcesService;
        this.upgradesService = upgradesService;
        this.workersService = workersService;
        this.mapService = mapService;
        this.requiredUpgrades = {
            7: 8,
            8: 8,
            9: 9,
            15: 9,
            25: 10,
            16: 11,
            17: 12,
            2: 2,
            3: 2,
            13: 2,
            26: 5,
            5: 5,
            27: 13,
            28: 13,
            11: 13,
            29: 14,
            18: 14,
            30: 14,
            31: 15,
            20: 15,
            21: 15,
            22: 15
        };
        this.requiredBuildings = {
            4: 'CRACKEDFORGE',
            6: 'STONEFORGE',
            10: 'IRONFORGE',
            12: 'IRONFORGE',
            19: 'GOLDFORGE',
            23: 'LATINUMFORGE',
            24: 'TEMPROUSDISTILLERY'
        };
        this.consumersByResource = {
            1: 16,
            7: 16,
            8: 16,
            9: 16,
            15: 16,
            25: 16,
            16: 17,
            2: 4,
            3: 4,
            5: 6,
            6: 10,
            11: 12,
            10: 19,
            12: 19,
            18: 19,
            19: 23,
            20: 23,
            21: 23,
            22: 23,
            23: 24,
            31: 24
        };
    }
    TooltipService.prototype.getResourceTooltip = function (resource) {
        var worker = this.workersService.getResourceWorker(resource.resourceEnum);
        var tooltip = "" + resource.resourceDescription;
        if (resource.resourceEnum === _objects_resourceData__WEBPACK_IMPORTED_MODULE_5__["ResourceEnum"].Gold) {
            var totalCost = 0;
            for (var _i = 0, _a = this.workersService.getWorkers(); _i < _a.length; _i++) {
                var _worker = _a[_i];
                for (var _b = 0, _c = _worker.getResourceWorkers(); _b < _c.length; _b++) {
                    var rw = _c[_b];
                    if (resource.canHarvest(rw.workerYield) && _worker.canAffordToHarvest(rw.resourceEnum)) {
                        totalCost += rw.recurringCost * rw.workerCount;
                    }
                }
            }
            tooltip += "\n" + totalCost + " spent on workers per second.";
            return tooltip;
        }
        var requiredUpgrade = this.requiredUpgrades[resource.resourceEnum];
        if (requiredUpgrade) {
            var upgrade = this.upgradesService.getUpgrade(requiredUpgrade);
            tooltip += "\nNeeded Upgrade: " + upgrade.name + ".";
        }
        var requiredBuilding = this.requiredBuildings[resource.resourceEnum];
        if (requiredBuilding) {
            var building = this.mapService.buildingTiles[requiredBuilding];
            tooltip += "\nNeeded Building: " + building.name + ".";
        }
        if (resource.resourceConsumes.length) {
            tooltip += '\nResources required:';
            for (var _d = 0, _e = resource.resourceConsumes; _d < _e.length; _d++) {
                var resourceConsume = _e[_d];
                tooltip += " " + this.resourcesService.resources.get(resourceConsume.resourceEnum).name + ": " + resourceConsume.cost + ",";
            }
            tooltip = tooltip.substring(0, tooltip.length - 1);
            tooltip += '.';
        }
        var workerOutput = worker.workerYield * worker.workerCount;
        if (resource.resourceEnum in this.consumersByResource) {
            var consumingResource = this.resourcesService.resources[this.consumersByResource[resource.resourceEnum]];
            var consumingWorker = this.workersService.getResourceWorker[this.consumersByResource[resource.resourceEnum]];
            workerOutput -=
                consumingResource.resourceConsumes.find(function (rc) { return rc.resourceEnum === resource.resourceEnum; }).cost * consumingWorker.workerCount;
        }
        tooltip += "\n" + Math.floor(resource.harvestYield * 1000) / 1000 + " harvested per click " +
            ("(" + Math.floor(resource.harvestMilliseconds) / 1000 + " seconds per harvest).") +
            ("\n" + Math.floor(1000 * workerOutput) / 1000 + " per second from workers.");
        return tooltip;
    };
    TooltipService.prototype.getWorkerTooltip = function (resourceEnum) {
        var resource = this.resourcesService.resources.get(resourceEnum);
        var resourceWorker = this.workersService.getResourceWorker(resourceEnum);
        return resource.workerVerb + " " + Math.floor(resourceWorker.workerYield * 100) / 100 + " " +
            ("" + resource.workerNoun + (resourceWorker.workerYield === 1 ? '' : 's') + " per second.\n") +
            ("Cost: " + resourceWorker.recurringCost + " per worker per second (" + resourceWorker.recurringCost * resourceWorker.workerCount + " total).");
    };
    TooltipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_1__["ResourcesService"],
            _upgrades_upgrades_service__WEBPACK_IMPORTED_MODULE_2__["UpgradesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_3__["WorkersService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
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
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _workers_workers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
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
        this.upgrades = [];
        this.hidePurchasedUpgrades = true;
        this.loadBaseUpgrades();
    }
    UpgradesService.prototype.loadBaseUpgrades = function () {
        for (var _i = 0, baseUpgrades_1 = baseUpgrades; _i < baseUpgrades_1.length; _i++) {
            var baseUpgrade = baseUpgrades_1[_i];
            var upgrade = new _objects_upgrade__WEBPACK_IMPORTED_MODULE_1__["Upgrade"](baseUpgrade.id, baseUpgrade.name, baseUpgrade.description, baseUpgrade.upgradeType, baseUpgrade.upgradeEffects, baseUpgrade.resourceCosts, false, this.resourcesService, this.workersService, this.messagesService);
            this.upgrades.push(upgrade);
        }
    };
    UpgradesService.prototype.getUpgrade = function (id) {
        return this.upgrades.find(function (upgrade) { return upgrade.id === id; });
    };
    UpgradesService.prototype.getUpgrades = function (filterByPurchased, filterByUnpurchased, filterByAccessible, upgradeType, upgradeVariable) {
        var _this = this;
        if (filterByPurchased === void 0) { filterByPurchased = false; }
        if (filterByUnpurchased === void 0) { filterByUnpurchased = false; }
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        var upgrades = this.upgrades;
        if (upgradeType) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.upgradeType === upgradeType; });
        }
        if (upgradeVariable) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.upgradeEffects.some(function (ue) { return ue.upgradeVariable === upgradeVariable; }); });
        }
        if (filterByPurchased) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.purchased; });
        }
        if (filterByUnpurchased) {
            upgrades = upgrades.filter(function (upgrade) { return !upgrade.purchased; });
        }
        if (filterByAccessible) {
            upgrades = upgrades.filter(function (upgrade) { return upgrade.resourceCosts.every(function (rc) { return _this.resourcesService.resources.get(rc.resourceEnum).resourceAccessible; }); });
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
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Upgrades, message);
    };
    UpgradesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _workers_workers_service__WEBPACK_IMPORTED_MODULE_4__["WorkersService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"]])
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
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _objects_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/message */ "./src/app/objects/message.ts");
/* harmony import */ var _resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../objects/worker */ "./src/app/objects/worker.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messages/messages.service */ "./src/app/services/messages/messages.service.ts");
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
    function WorkersService(resourcesService, mapService, messagesService) {
        this.resourcesService = resourcesService;
        this.mapService = mapService;
        this.messagesService = messagesService;
        this.workers = new Map();
        this.workersPaused = false;
        this.workerDelay = 1000;
        this.loadBaseWorkers();
    }
    WorkersService.prototype.loadBaseWorkers = function () {
        for (var resourceTypeString in _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"]) {
            if (Number(resourceTypeString)) {
                continue;
            }
            var resourceType = _objects_resourceData__WEBPACK_IMPORTED_MODULE_1__["ResourceType"][resourceTypeString];
            var baseWorker = baseWorkers[resourceType];
            if (!baseWorker) {
                continue;
            }
            var resourceWorkers = new Map();
            for (var resoruceEnum in baseWorker.resourceWorkers) {
                if (Number(resoruceEnum)) {
                    continue;
                }
                resourceWorkers.set(resoruceEnum, baseWorker.resourceWorkers[resoruceEnum]);
            }
            var worker = new _objects_worker__WEBPACK_IMPORTED_MODULE_4__["Worker"](baseWorker.cost, baseWorker.resourceType, resourceWorkers, this.resourcesService, this.mapService, this.messagesService);
            this.workers.set(resourceType, worker);
        }
    };
    WorkersService.prototype.tick = function (elapsed, deltaTime) {
        if (this.workersPaused || elapsed - this.lastWorkerTime < this.workerDelay) {
            return;
        }
        this.lastWorkerTime = elapsed;
        for (var _i = 0, _a = this.getWorkers(); _i < _a.length; _i++) {
            var worker = _a[_i];
            worker.tick(elapsed, deltaTime);
        }
    };
    WorkersService.prototype.getWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable) {
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        if (filterByWorkable === void 0) { filterByWorkable = false; }
        if (filterByHarvestable === void 0) { filterByHarvestable = false; }
        var workers = Array.from(this.workers.values());
        return workers.filter(function (worker) { return worker.getResourceWorkers(filterByAccessible, filterByWorkable, filterByHarvestable).length; });
    };
    WorkersService.prototype.getWorker = function (resourceEnum) {
        var resoruce = this.resourcesService.resources.get(resourceEnum);
        return this.workers.get(resoruce.resourceType);
    };
    WorkersService.prototype.getResourceWorker = function (resourceEnum) {
        var resource = this.resourcesService.resources.get(resourceEnum);
        var worker = this.workers.get(resource.resourceType);
        if (!resource || !worker) {
            return undefined;
        }
        return worker.resourceWorkers.get(resourceEnum);
    };
    WorkersService.prototype.log = function (message) {
        this.messagesService.add(_objects_message__WEBPACK_IMPORTED_MODULE_2__["MessageSource"].Workers, message);
    };
    WorkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _map_map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"],
            _messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]])
    ], WorkersService);
    return WorkersService;
}());



/***/ }),

/***/ "./src/assets/json/enemies.json":
/*!**************************************!*\
  !*** ./src/assets/json/enemies.json ***!
  \**************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"name":"Base Enemy","health":15,"maxHealth":15,"targetableBuildingTypes":["HOME","CRACKEDFORGE"],"attack":5,"defense":1,"attackRange":2,"resourcesToSteal":["OAK","COPPERORE","TINORE"],"stealMax":25,"resourceCapacity":200}];

/***/ }),

/***/ "./src/assets/json/fighters.json":
/*!***************************************!*\
  !*** ./src/assets/json/fighters.json ***!
  \***************************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = [{"name":"Sentry","description":"A stationary archer, capable of shooting at one target per second.","health":15,"maxHealth":15,"cost":500,"attack":5,"defense":5,"movable":false,"attackRange":3}];

/***/ }),

/***/ "./src/assets/json/resources.json":
/*!****************************************!*\
  !*** ./src/assets/json/resources.json ***!
  \****************************************/
/*! exports provided: GOLD, OAK, PINE, BIRCH, EUCALYPTUS, WILLOW, TEAK, ENTSOUL, REANIMATEDENT, STONE, GRAPHITE, LIMESTONE, MARBLE, QUARTZ, OBSIDIAN, DIAMOND, COPPERORE, TINORE, BRONZEINGOT, IRONORE, IRONINGOT, STEELINGOT, GOLDORE, GOLDINGOT, LATINUMORE, LATINUMINGOT, UNBELIEVIUMORE, LUSTRIALORE, SPECTRUSORE, TEMPROUSINGOT, REFINEDTEMPROUS, default */
/***/ (function(module) {

module.exports = {"GOLD":{"name":"Gold","resourceType":"CURRENCY","resourceEnum":"GOLD","iconPath":"./assets/sprites/coin.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"sellable":false,"autoSellCutoff":0,"resourceDescription":"Shiny and valuable.","workerVerb":"","workerNoun":"","resourceAccessible":true,"resourceTier":0,"harvestYield":0,"harvestMilliseconds":0,"workerYield":0,"resourceBeingStolen":false,"sellsFor":0},"OAK":{"name":"Oak","resourceType":"WOOD","resourceEnum":"OAK","iconPath":"./assets/sprites/oak.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":10,"autoSellCutoff":0,"resourceDescription":"Sturdy oak logs.","workerVerb":"Fells","workerNoun":"oak tree","resourceAccessible":true,"resourceTier":0},"PINE":{"name":"Pine","resourceType":"WOOD","resourceEnum":"PINE","iconPath":"./assets/sprites/pine.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":12,"autoSellCutoff":0,"resourceDescription":"Strong pine logs.","workerVerb":"Fells","workerNoun":"pine tree","resourceAccessible":false,"resourceTier":1},"BIRCH":{"name":"Birch","resourceType":"WOOD","resourceEnum":"BIRCH","iconPath":"./assets/sprites/birch.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":15,"autoSellCutoff":0,"resourceDescription":"Sometimes it feels like it's watching you...","workerVerb":"Fells","workerNoun":"birch tree","resourceAccessible":false,"resourceTier":2},"EUCALYPTUS":{"name":"Eucalyptus","resourceType":"WOOD","resourceEnum":"EUCALYPTUS","iconPath":"./assets/sprites/eucalyptus.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":20,"autoSellCutoff":0,"resourceDescription":"Logs as strong as their name is long.","workerVerb":"Fells","workerNoun":"eucalyptus tree","resourceAccessible":false,"resourceTier":3},"WILLOW":{"name":"Willow","resourceType":"WOOD","resourceEnum":"WILLOW","iconPath":"./assets/sprites/willow.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":35,"autoSellCutoff":0,"resourceDescription":"The saddest tree in the forest (because you chopped down its parents).","workerVerb":"Fells","workerNoun":"willow tree","resourceAccessible":false,"resourceTier":4},"TEAK":{"name":"Teak","resourceType":"WOOD","resourceEnum":"TEAK","iconPath":"./assets/sprites/teak.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":40,"autoSellCutoff":0,"resourceDescription":"Bright, thin logs; surprisingly resillient considering their appearance.","workerVerb":"Fells","workerNoun":"teak tree","resourceAccessible":false,"resourceTier":5},"ENTSOUL":{"name":"Ent Soul","resourceType":"WOOD","resourceEnum":"ENTSOUL","iconPath":"./assets/sprites/ent_soul.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"OAK","cost":10},{"resourceEnum":"PINE","cost":10},{"resourceEnum":"BIRCH","cost":10},{"resourceEnum":"EUCALYPTUS","cost":10},{"resourceEnum":"WILLOW","cost":10},{"resourceEnum":"TEAK","cost":10}],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":false,"resourceBeingStolen":false,"sellsFor":50,"autoSellCutoff":0,"resourceDescription":"The spirit of a long-dead ent, still contained where it last took root.","workerVerb":"Releases","workerNoun":"ent spirit","resourceAccessible":false,"resourceTier":6},"REANIMATEDENT":{"id":17,"name":"reanimated ent","resourceType":"WOOD","resourceEnum":"REANIMATEDENT","iconPath":"./assets/sprites/reanimated_ent.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"ENTSOUL","cost":1}],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":20000,"workerYield":1,"sellable":false,"resourceBeingStolen":false,"sellsFor":100,"autoSellCutoff":0,"resourceDescription":"An ancient ent warrior, given life once more to fight for you.","workerVerb":"Reanimates","workerNoun":"ent","resourceAccessible":false,"resourceTier":7},"STONE":{"name":"Stone","resourceType":"MINERAL","resourceEnum":"STONE","iconPath":"./assets/sprites/stone.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":10,"autoSellCutoff":0,"resourceDescription":"Hard and sturdy, well suitied to basic construction projects.","workerVerb":"Mines","workerNoun":"stone","resourceAccessible":true,"resourceTier":0},"GRAPHITE":{"name":"Graphite","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"GRAPHITE","iconPath":"./assets/sprites/graphite.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":25,"autoSellCutoff":0,"resourceDescription":"A rough mineral with many uses.","workerVerb":"Mines","workerNoun":"graphite","resourceAccessible":false,"resourceTier":1},"LIMESTONE":{"name":"Limestone","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"LIMESTONE","iconPath":"./assets/sprites/limestone.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":35,"autoSellCutoff":0,"resourceDescription":"Hardened stone with a hint of lime.","workerVerb":"Mines","workerNoun":"limestone","resourceAccessible":false,"resourceTier":2},"MARBLE":{"name":"Marble","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"MARBLE","iconPath":"./assets/sprites/marble.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":50,"autoSellCutoff":0,"resourceDescription":"Beautiful, crystalline rock. Highly valued for construction projects.","workerVerb":"Mines","workerNoun":"marble","resourceAccessible":false,"resourceTier":3},"QUARTZ":{"name":"Quartz","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"QUARTZ","iconPath":"./assets/sprites/quartz.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":75,"autoSellCutoff":0,"resourceDescription":"A bright, shiny structure hides under the rock's rough surface.","workerVerb":"Mines","workerNoun":"qaurtz","resourceAccessible":false,"resourceTier":4},"OBSIDIAN":{"name":"Obsidian","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"OBSIDIAN","iconPath":"./assets/sprites/obsidian.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":6500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":125,"autoSellCutoff":0,"resourceDescription":"Hardened rock formed in the heart of a volcano.","workerVerb":"Mines","workerNoun":"obsidian","resourceAccessible":false,"resourceTier":5},"DIAMOND":{"name":"Diamond","resourceType":"MINERAL","amount":0,"amountTravelling":0,"resourceEnum":"DIAMOND","iconPath":"./assets/sprites/diamond.png","resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":7500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":175,"autoSellCutoff":0,"resourceDescription":"An incredibly beautiful and tough resource.","workerVerb":"Mines","workerNoun":"diamond","resourceAccessible":false,"resourceTier":6},"COPPERORE":{"name":"Copper Ore","resourceType":"METAL","resourceEnum":"COPPERORE","iconPath":"./assets/sprites/copper_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":10,"autoSellCutoff":0,"resourceDescription":"Can be forged into bronze along with tin.","workerVerb":"Mines","workerNoun":"copper ore","resourceAccessible":true,"resourceTier":0},"TINORE":{"name":"Tin Ore","resourceType":"METAL","resourceEnum":"TINORE","iconPath":"./assets/sprites/tin_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":10,"autoSellCutoff":0,"resourceDescription":"Can be forged into bronze along with copper.","workerVerb":"Mines","workerNoun":"tin ore","resourceAccessible":true,"resourceTier":0},"BRONZEINGOT":{"name":"Bronze Ingot","resourceType":"METAL","resourceEnum":"BRONZEINGOT","iconPath":"./assets/sprites/bronze_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"COPPERORE","cost":1},{"resourceEnum":"TINORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":15,"autoSellCutoff":0,"resourceDescription":"Somewhat brittle ingots.","workerVerb":"Forges","workerNoun":"bronze ingot","resourceAccessible":false,"resourceTier":1},"IRONORE":{"name":"Iron Ore","resourceType":"METAL","resourceEnum":"IRONORE","iconPath":"./assets/sprites/iron_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":20,"autoSellCutoff":0,"resourceDescription":"Unrefined extracts of iron.","workerVerb":"Mines","workerNoun":"iron ore","resourceAccessible":false,"resourceTier":2},"IRONINGOT":{"name":"Iron Ingot","resourceType":"METAL","resourceEnum":"IRONINGOT","iconPath":"./assets/sprites/iron_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"IRONORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":25,"autoSellCutoff":0,"resourceDescription":"Dim but sturdy ingots.","workerVerb":"Forges","workerNoun":"iron ingot","resourceAccessible":false,"resourceTier":3},"STEELINGOT":{"name":"Steel Ingot","resourceType":"METAL","resourceEnum":"STEELINGOT","iconPath":"./assets/sprites/steel_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"IRONINGOT","cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":40,"autoSellCutoff":0,"resourceDescription":"Refined and purified iron.","workerVerb":"Forges","workerNoun":"steel ingot","resourceAccessible":false,"resourceTier":4},"GOLDORE":{"name":"Gold Ore","resourceType":"METAL","resourceEnum":"GOLDORE","iconPath":"./assets/sprites/gold_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":35,"autoSellCutoff":0,"resourceDescription":"Unrefined extracts of gold.","workerVerb":"Mines","workerNoun":"gold","resourceAccessible":false,"resourceTier":3},"GOLDINGOT":{"id":12,"name":"gold ingot","resourceType":"METAL","resourceEnum":"GOLDINGOT","iconPath":"./assets/sprites/gold_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"GOLDORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":55,"autoSellCutoff":0,"resourceDescription":"Highly valuable and malleable.","workerVerb":"Forges","workerNoun":"gold ingot","resourceAccessible":false,"resourceTier":4},"LATINUMORE":{"name":"Latinum Ore","resourceType":"METAL","resourceEnum":"LATINUMORE","iconPath":"./assets/sprites/latinum_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":4500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":65,"autoSellCutoff":0,"resourceDescription":"Said to be highly valued by indivudals with large ears.","workerVerb":"Mines","workerNoun":"latinum ore","resourceAccessible":false,"resourceTier":4},"LATINUMINGOT":{"name":"Latinum Ingot","resourceType":"METAL","resourceEnum":"LATINUMINGOT","iconPath":"./assets/sprites/latinum_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"STEELINGOT","cost":1},{"resourceEnum":"GOLDINGOT","cost":1},{"resourceEnum":"LATINUMORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":85,"autoSellCutoff":0,"resourceDescription":"QUARK!!!","workerVerb":"Forges","workerNoun":"latinum ingot","resourceAccessible":false,"resourceTier":5},"UNBELIEVIUMORE":{"name":"Unbelievium Ore","resourceType":"METAL","resourceEnum":"UNBELIEVIUMORE","iconPath":"./assets/sprites/unbelievium_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":100,"autoSellCutoff":0,"resourceDescription":"I can't believe it's not unobtainium!","workerVerb":"Mines","workerNoun":"unbelievium ore","resourceAccessible":false,"resourceTier":5},"LUSTRIALORE":{"name":"Lustrial Ore","resourceType":"METAL","resourceEnum":"LUSTRIALORE","iconPath":"./assets/sprites/lustrial_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":100,"autoSellCutoff":0,"resourceDescription":"Even in its unrefined form, it shines as bright as the sun.","workerVerb":"Mines","workerNoun":"lustrial ore","resourceAccessible":false,"resourceTier":5},"SPECTRUSORE":{"name":"Spectrus Ore","resourceType":"METAL","resourceEnum":"SPECTRUSORE","iconPath":"./assets/sprites/spectrus_ore.png","amount":0,"amountTravelling":0,"resourceConsumes":[],"harvestable":false,"pathAvailable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":100,"autoSellCutoff":0,"resourceDescription":"A peculiar energy eminates from the rock...","workerVerb":"Mines","workerNoun":"spectrus ore","resourceAccessible":false,"resourceTier":5},"TEMPROUSINGOT":{"name":"Temprous Ingot","resourceType":"METAL","resourceEnum":"TEMPROUSINGOT","iconPath":"./assets/sprites/temprous_ingot.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"LATINUMINGOT","cost":2},{"resourceEnum":"UNBELIEVIUMORE","cost":2},{"resourceEnum":"LUSTRIALORE","cost":2},{"resourceEnum":"SPECTRUSORE","cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":175,"autoSellCutoff":0,"resourceDescription":"Could this metal hold the secret of time itself?","workerVerb":"Forges","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":6},"REFINEDTEMPROUS":{"name":"Refined Temprous","resourceType":"METAL","resourceEnum":"REFINEDTEMPROUS","iconPath":"./assets/sprites/refined_temprous.png","amount":0,"amountTravelling":0,"resourceConsumes":[{"resourceEnum":"TEMPROUSINGOT","cost":15},{"resourceEnum":"DIAMOND","cost":30}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":15000,"workerYield":1,"sellable":true,"resourceBeingStolen":false,"sellsFor":350,"autoSellCutoff":0,"resourceDescription":"Memories of ages past imbue the metal with seemingly endless power.","workerVerb":"Refines","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":7}};

/***/ }),

/***/ "./src/assets/json/tileTypes.json":
/*!****************************************!*\
  !*** ./src/assets/json/tileTypes.json ***!
  \****************************************/
/*! exports provided: tileTypes, mapTiles, buildingTiles, resourceTiles, default */
/***/ (function(module) {

module.exports = {"tileTypes":{"1":"GRASS","2":"WATER","3":"MOUNTAIN","5":"OAKTREE","6":"PINETREE","7":"BIRCHTREE","8":"EUCALYPTUSTREE","9":"WILLOWTREE","10":"TEAKTREE","11":"DEADENT","12":"STONEMINE","13":"GRAPHITEMINE","14":"LIMESTONEMINE","15":"MARBLEMINE","16":"QUARTZMINE","17":"OBSIDIANMINE","18":"DIAMONDMINE","19":"COPPERMINE","20":"TINMINE","21":"IRONMINE","22":"GOLDMINE","23":"LATINUMMINE","24":"UNBELIEVIUMMINE","25":"LUSTRIALMINE","26":"SPECTRUSMINE","27":"CRACKEDFORGE","28":"STONEFORGE","29":"IRONFORGE","30":"GOLDFORGE","31":"LATINUMFORGE","32":"TEMPROUSDISTILLERY","69":"HOME","70":"WALL","71":"ROAD","72":"BRIDGE","73":"ENEMYPORTAL","74":"WOODMARKET","75":"MINERALMARKET","76":"METALMARKET"},"mapTiles":{"GRASS":{"tileType":"GRASS","name":"Grass","walkable":true},"WATER":{"tileType":"WATER","name":"Water","walkable":false},"MOUNTAIN":{"tileType":"MOUNTAIN","name":"Mountain","walkable":false}},"buildingTiles":{"HOME":{"tileType":"HOME","subType":"MISC","name":"Home","description":"","placeable":false,"maxPlaceable":1,"baseHealth":50,"resourceCosts":[],"buildableSurfaces":[],"resourcePathable":true},"WALL":{"tileType":"WALL","subType":"MISC","name":"Wall","description":"Keeps invaders out.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"OAK","repairCostPerPoint":0.2,"resourceCosts":[{"resourceEnum":"OAK","resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":false},"ROAD":{"tileType":"ROAD","subType":"MISC","name":"Road","description":"Allows access between buildings.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"STONE","repairCostPerPoint":0.2,"resourceCosts":[{"resourceEnum":"STONE","resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":true},"BRIDGE":{"tileType":"BRIDGE","subType":"MISC","name":"Bridge","description":"Allows access between islands.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"PINE","repairCostPerPoint":0.25,"resourceCosts":[{"resourceEnum":"PINE","resourceCost":40}],"buildableSurfaces":["WATER"],"resourcePathable":true},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","subType":"RESOURCE","name":"Cracked Forge","description":"An old, weary forge. Bronze ingots are probably all this thing is capable of producing.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"upgradeBuilding":"STONEFORGE","resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"CRACKEDFORGE","resourcePathable":true},"STONEFORGE":{"tileType":"STONEFORGE","subType":"RESOURCE","name":"Stone Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":false,"maxPlaceable":-1,"baseHealth":75,"repairResourceEnum":"GOLD","repairCostPerPoint":0.3,"upgradeBuilding":"IRONFORGE","resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150},{"resourceEnum":"STONE","resourceCost":50},{"resourceEnum":"PINE","resourceCost":75},{"resourceEnum":"BRONZEINGOT","resourceCost":20}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"STONEFORGE","resourcePathable":true},"IRONFORGE":{"tileType":"IRONFORGE","subType":"RESOURCE","name":"Iron Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":false,"maxPlaceable":-1,"baseHealth":125,"repairResourceEnum":"IRONINGOT","repairCostPerPoint":0.3,"upgradeBuilding":"GOLDFORGE","resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":500},{"resourceEnum":"EUCALYPTUS","resourceCost":700},{"resourceEnum":"MARBLE","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"IRONFORGE","resourcePathable":true},"GOLDFORGE":{"tileType":"GOLDFORGE","subType":"RESOURCE","name":"Gold Forge","description":"For reasons unknown to science, gold forges are particularly effective in forging latinum.","placeable":false,"maxPlaceable":-1,"baseHealth":150,"repairResourceEnum":"GOLDINGOT","repairCostPerPoint":0.35,"upgradeBuilding":"LATINUMFORGE","resourceCosts":[{"resourceEnum":"GOLDINGOT","resourceCost":1200},{"resourceEnum":"WILLOW","resourceCost":1500},{"resourceEnum":"QUARTZ","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"GOLDFORGE","resourcePathable":true},"LATINUMFORGE":{"tileType":"LATINUMFORGE","subType":"RESOURCE","name":"Latinum Forge","description":"A forge that burns hot enough to fuse together the world's most precious and rare metals.","placeable":false,"maxPlaceable":-1,"baseHealth":200,"repairResourceEnum":"LATINUMINGOT","repairCostPerPoint":0.5,"upgradeBuilding":"TEMPROUSDISTILLERY","resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":2500},{"resourceEnum":"TEAK","resourceCost":1500},{"resourceEnum":"OBSIDIAN","resourceCost":700}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"LATINUMFORGE","resourcePathable":true},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","subType":"RESOURCE","name":"Temprous Distillery","description":"With this device, all impurities can be removed from temprous ingots, unlocking their limitless potential.","placeable":false,"maxPlaceable":-1,"baseHealth":350,"repairResourceEnum":"TEMPROUSINGOT","repairCostPerPoint":0.65,"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":5000},{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"DIAMOND","resourceCost":1200}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"TEMPROUSDISTILLERY","resourcePathable":true},"WOODMARKET":{"tileType":"WOODMARKET","subType":"MARKET","name":"Wood Market","description":"A marketstand that automatically collects and sells wood resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"MINERALMARKET":{"tileType":"MINERALMARKET","subType":"MARKET","name":"Mineral Market","description":"A marketstand that automatically collects and sells mineral resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"METALMARKET":{"tileType":"METALMARKET","subType":"MARKET","name":"Metal Market","description":"A marketstand that automatically collects and sells metal resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"ENEMYPORTAL":{"tileType":"ENEMYPORTAL","subType":"MISC","name":"Enemy Portal","baseHealth":50,"description":"","placeable":false,"maxPlaceable":-1,"resourceCosts":[],"buildableSurfaces":[],"resourcePathable":true}},"resourceTiles":{"OAKTREE":{"tileType":"OAKTREE","name":"Oak Tree","placeable":false,"resourceEnums":["OAK"]},"PINETREE":{"tileType":"PINETREE","name":"Pine Tree","placeable":false,"resourceEnums":["PINE"]},"BIRCHTREE":{"tileType":"BIRCHTREE","name":"Birch Tree","placeable":false,"resourceEnums":["BIRCH"]},"EUCALYPTUSTREE":{"tileType":"EUCALYPTUSTREE","name":"Eucalptus Tree","placeable":false,"resourceEnums":["EUCALYPTUS"]},"WILLOWTREE":{"tileType":"WILLOWTREE","name":"Willow Tree","placeable":false,"resourceEnums":["WILLOW"]},"TEAKTREE":{"tileType":"TEAKTREE","name":"Teak Tree","placeable":false,"resourceEnums":["TEAK"]},"DEADENT":{"tileType":"DEADENT","name":"Dead Ent","placeable":false,"resourceEnums":["ENTSOUL","REANIMATEDENT"]},"STONEMINE":{"tileType":"STONEMINE","name":"Stone Mine","placeable":false,"resourceEnums":["STONE"]},"GRAPHITEMINE":{"tileType":"GRAPHITEMINE","name":"Graphite Mine","placeable":false,"resourceEnums":["GRAPHITE"]},"LIMESTONEMINE":{"tileType":"LIMESTONEMINE","name":"Limestone Mine","placeable":false,"resourceEnums":["LIMESTONE"]},"MARBLEMINE":{"tileType":"MARBLEMINE","name":"Marble Mine","placeable":false,"resourceEnums":["MARBLE"]},"QUARTZMINE":{"tileType":"QUARTZMINE","name":"Quartz Mine","placeable":false,"resourceEnums":["QUARTZ"]},"OBSIDIANMINE":{"tileType":"OBSIDIANMINE","name":"Obsidian Mine","placeable":false,"resourceEnums":["OBSIDIAN"]},"DIAMONDMINE":{"tileType":"DIAMONDMINE","name":"Diamond Mine","placeable":false,"resourceEnums":["DIAMOND"]},"COPPERMINE":{"tileType":"COPPERMINE","name":"Copper Mine","placeable":false,"resourceEnums":["COPPERORE"]},"TINMINE":{"tileType":"TINMINE","name":"Tin Mine","placeable":false,"resourceEnums":["TINORE"]},"IRONMINE":{"tileType":"IRONMINE","name":"Iron Mine","placeable":false,"resourceEnums":["IRONORE"]},"GOLDMINE":{"tileType":"GOLDMINE","name":"Gold Mine","placeable":false,"resourceEnums":["GOLDORE"]},"LATINUMMINE":{"tileType":"LATINUMMINE","name":"Latinum Mine","placeable":false,"resourceEnums":["LATINUMORE"]},"UNBELIEVIUMMINE":{"tileType":"UNBELIEVIUMMINE","name":"Unbelievium Mine","placeable":false,"resourceEnums":["UNBELIEVIUMORE"]},"LUSTRIALMINE":{"tileType":"LUSTRIALMINE","name":"Lustrial Mine","placeable":false,"resourceEnums":["LUSTRIALORE"]},"SPECTRUSMINE":{"tileType":"SPECTRUSMINE","name":"Spectrus Mine","placeable":false,"resourceEnums":["SPECTRUSORE"]},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","name":"Cracked Forge","placeable":true,"resourceEnums":["BRONZEINGOT"]},"STONEFORGE":{"tileType":"STONEFORGE","name":"Stone Forge","placeable":true,"resourceEnums":["BRONZEINGOT","IRONINGOT"]},"IRONFORGE":{"tileType":"IRONFORGE","name":"Iron Forge","placeable":true,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT"]},"GOLDFORGE":{"tileType":"GOLDFORGE","name":"Gold Forge","placeable":true,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT"]},"LATINUMFORGE":{"tileType":"LATINUMFORGE","name":"Latinum Forge","placeable":true,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT","TEMPROUSINGOT"]},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","name":"Temprous Distillery","placeable":true,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT","TEMPROUSINGOT","REFINEDTEMPROUS"]}}};

/***/ }),

/***/ "./src/assets/json/upgrades.json":
/*!***************************************!*\
  !*** ./src/assets/json/upgrades.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, default */
/***/ (function(module) {

module.exports = [{"id":0,"upgradeType":"RESOURCE","name":"Refined Iron Axe","description":"A stronger, more durable axe. Harvests 20% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2,"maxTier":"1"}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":10},{"resourceEnum":"IRONINGOT","resourceCost":25}],"purchased":false},{"id":1,"upgradeType":"RESOURCE","name":"Twin Axes","description":"One axe in each hand means double productivity. It makes sense. Reduces wood harvesting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5,"maxTier":"1"}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":15},{"resourceEnum":"IRONINGOT","resourceCost":35}],"purchased":false},{"id":2,"upgradeType":"RESOURCE","name":"Worn Pickaxe","description":"A basic pickaxe. Not much, but it gets the job done. Allows harvesting of basic metals and minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"COPPERORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"TINORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"STONE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":50}],"purchased":false},{"id":3,"upgradeType":"WORKER","name":"Lumberjack's Guild","description":"Form a guild to help your workers hone their skills. Workers harvest 15% more wood.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15,"maxTier":2}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":20}],"purchased":false},{"id":5,"upgradeType":"RESOURCE","name":"Bronze Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"IRONORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":5},{"resourceEnum":"PINE","resourceCost":15}],"purchased":false},{"id":6,"upgradeType":"RESOURCE","name":"Sharpened Pickaxe","description":"A highly sharpened pickaxe. Mines at a much higher rate.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":20},{"resourceEnum":"BIRCH","resourceCost":30}],"purchased":false},{"id":8,"upgradeType":"RESOURCE","name":"Bronze Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":2}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":10},{"resourceEnum":"OAK","resourceCost":30}],"purchased":false},{"id":9,"upgradeType":"RESOURCE","name":"Iron Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":4}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":30},{"resourceEnum":"BIRCH","resourceCost":60}],"purchased":false},{"id":10,"upgradeType":"RESOURCE","name":"Steel Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":5}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":100},{"resourceEnum":"WILLOW","resourceCost":200}],"purchased":false},{"id":11,"upgradeType":"RESOURCE","name":"Latinum Axe","description":"An axe strong enough to free the spirits of ents from the bodies that entomb them.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":6}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":1000},{"resourceEnum":"QUARTZ","resourceCost":250}],"purchased":false},{"id":12,"upgradeType":"RESOURCE","name":"Temprous Staff","description":"Imbued with the power of ages past, this staff can reunite ent spirits with their former bodies, granting them new life.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":1500},{"resourceEnum":"ENTSOUL","resourceCost":10},{"resourceEnum":"DIAMOND","resourceCost":750}],"purchased":false},{"id":13,"upgradeType":"RESOURCE","name":"Iron Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"LIMESTONE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"MARBLE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":30},{"resourceEnum":"EUCALYPTUS","resourceCost":45}],"purchased":false},{"id":14,"upgradeType":"RESOURCE","name":"Steel Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"QUARTZ","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"LATINUMORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":100},{"resourceEnum":"EUCALYPTUS","resourceCost":200}],"purchased":false},{"id":15,"upgradeType":"RESOURCE","name":"Latinum Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"DIAMOND","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"SPECTRUSORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":800},{"resourceEnum":"QUARTZ","resourceCost":250}],"purchased":false},{"id":20,"upgradeType":"RESOURCE","name":"Refined Steel Axe","description":"A stronger, more durable axe. Harvests 45% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":100},{"resourceEnum":"STEELINGOT","resourceCost":80}],"purchased":false},{"id":21,"upgradeType":"RESOURCE","name":"Refined Latinum Axe","description":"A stronger, more durable axe. Harvests 150% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":375},{"resourceEnum":"QUARTZ","resourceCost":200}],"purchased":false},{"id":22,"upgradeType":"RESOURCE","name":"Emblem of the Ents","description":"Imbues revived ents with far greater power. Grants an extra 75% per revived ent.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"REANIMATEDENT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":1000},{"resourceEnum":"TEMPROUSINGOT","resourceCost":600},{"resourceEnum":"DIAMOND","resourceCost":425}],"purchased":false},{"id":23,"upgradeType":"RESOURCE","name":"Refined Iron Pickaxe","description":"A stronger, more durable pickaxe. Harvests 20% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceEnum":"PINE","resourceCost":25},{"resourceEnum":"IRONINGOT","resourceCost":25}],"purchased":false},{"id":24,"upgradeType":"RESOURCE","name":"Refined Steel Pickaxe","description":"A stronger, more durable pickaxe. Harvests 75% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":150},{"resourceEnum":"STEELINGOT","resourceCost":85}],"purchased":false},{"id":25,"upgradeType":"RESOURCE","name":"Refined Latinum Pickaxe","description":"A stronger, more durable pickaxe. Harvests 200% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"QUARTZ","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":550},{"resourceEnum":"LATINUMINGOT","resourceCost":1000},{"resourceEnum":"OBSIDIAN","resourceCost":750}],"purchased":false},{"id":26,"upgradeType":"RESOURCE","name":"Expanded Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceEnum":"BIRCH","resourceCost":25},{"resourceEnum":"IRONINGOT","resourceCost":25}],"purchased":false},{"id":27,"upgradeType":"RESOURCE","name":"Enhanced Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":200},{"resourceEnum":"IRONINGOT","resourceCost":100}],"purchased":false},{"id":28,"upgradeType":"RESOURCE","name":"Refined Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":200},{"resourceEnum":"STEELINGOT","resourceCost":100}],"purchased":false},{"id":29,"upgradeType":"RESOURCE","name":"Lavish Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":350}],"purchased":false},{"id":30,"upgradeType":"RESOURCE","name":"Excessive Burner","description":"Alright, you can't possibly need this much space.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":1500},{"resourceEnum":"TEMPROUSINGOT","resourceCost":600}],"purchased":false},{"id":31,"upgradeType":"RESOURCE","name":"Temprous Purifier","description":"Increases the purity of temprous ingots processed by the temprous distillery.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"TEMPROUSINGOT","resourceCost":800}],"purchased":false},{"id":32,"upgradeType":"RESOURCE","name":"Triplet Axes","description":"I'm not even going try and figure out how this works, okay?","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.35,"maxTier":3}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":55},{"resourceEnum":"STEELINGOT","resourceCost":85}],"purchased":false},{"id":33,"upgradeType":"RESOURCE","name":"Lumber Mill","description":"Processes logs at a rate far beyond what's possible manually.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12,"maxTier":5}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":850},{"resourceEnum":"LATINUMINGOT","resourceCost":650},{"resourceEnum":"OBSIDIAN","resourceCost":200}],"purchased":false},{"id":34,"upgradeType":"RESOURCE","name":"Enchanted Latinum Axe","description":"Enchanted by the spirits of fallen ents allows this axe's wielder to operate at an unnatural speed.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.04,"maxTier":6}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":1000},{"resourceEnum":"DIAMOND","resourceCost":255}],"purchased":false},{"id":35,"upgradeType":"RESOURCE","name":"Temprous Siphon","description":"Using this siphon, ents can regain their full strength much more quickly.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"REANIMATEDENT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":1500},{"resourceEnum":"LATINUMINGOT","resourceCost":1250},{"resourceEnum":"DIAMOND","resourceCost":600}],"purchased":false},{"id":36,"upgradeType":"RESOURCE","name":"Decorated Pickaxe","description":"Technically these pickaxes aren't any better, but they look pretty. And that's pretty nice.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":120},{"resourceEnum":"WILLOW","resourceCost":60},{"resourceEnum":"QUARTZ","resourceCost":110}],"purchased":false},{"id":37,"upgradeType":"RESOURCE","name":"Explosive Mining","description":"Pickaxes laced with a tiny, tiny amount of black powder. The science seems to add up.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"SPECTRUSORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":250},{"resourceEnum":"OBSIDIAN","resourceCost":110}],"purchased":false},{"id":38,"upgradeType":"RESOURCE","name":"Temprous Catalyst","description":"Speeds up the temprous purification process.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"CURRENCY","resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.3}],"resourceCosts":[{"resourceEnum":"REFINEDTEMPROUS","resourceCost":750},{"resourceEnum":"ENTSOUL","resourceCost":350},{"resourceEnum":"DIAMOND","resourceCost":160}],"purchased":false},{"id":39,"upgradeType":"RESOURCE","name":"Limestone Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.6}],"resourceCosts":[{"resourceEnum":"BIRCH","resourceCost":50},{"resourceEnum":"LIMESTONE","resourceCost":80}],"purchased":false},{"id":40,"upgradeType":"RESOURCE","name":"Marble Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.4}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":120},{"resourceEnum":"MARBLE","resourceCost":220}],"purchased":false},{"id":41,"upgradeType":"RESOURCE","name":"Obsidian Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.25}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":350},{"resourceEnum":"OBSIDIAN","resourceCost":475}],"purchased":false},{"id":42,"upgradeType":"RESOURCE","name":"Diamond Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.12}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":750},{"resourceEnum":"OBSIDIAN","resourceCost":200},{"resourceEnum":"DIAMOND","resourceCost":1000}],"purchased":false},{"id":43,"upgradeType":"RESOURCE","name":"Temprous Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.06}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"DIAMOND","resourceCost":350},{"resourceEnum":"TEMPROUSINGOT","resourceCost":1350}],"purchased":false},{"id":44,"upgradeType":"WORKER","name":"Kelley the Deforester","description":"Dammit, Jim! I'm a lumberjack, not a doctor! (Allows you to assign workers for more tree varieties.)","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceEnum":"GOLD","upgradeVariable":"WORKABLE","upgradeFactor":1,"resourceType":"WOOD","maxTier":5}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":3000}],"purchased":false},{"id":45,"upgradeType":"WORKER","name":"Elder Ent","description":"This respected ent elder will offer his services to help guide more of his kin back into this world.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"ENTSOUL","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":60000},{"resourceEnum":"REANIMATEDENT","resourceCost":1}],"purchased":false},{"id":46,"upgradeType":"WORKER","name":"Mineral Enthusiast","description":"Once an officer of the law, this man has put his career aside to pursue his true passion: mining minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"STONE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":4000}],"purchased":false},{"id":47,"upgradeType":"WORKER","name":"Mineral Obsessive","description":"This guy REALLY likes minerals!","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"MARBLE","resourceCost":375},{"resourceEnum":"QUARTZ","resourceCost":300},{"resourceEnum":"OBSIDIAN","resourceCost":30},{"resourceEnum":"DIAMOND","resourceCost":20}],"purchased":false},{"id":48,"upgradeType":"WORKER","name":"Dwarven Miner","description":"Dwarves aren't actually very active miners. This guy just loves his job.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":5}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":4500}],"purchased":false},{"id":49,"upgradeType":"WORKER","name":"Dwarven Champion","description":"Dwarves are naturally inclined to be the best at whatever they do, even things that are totally un-dwarfish like mining.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":7}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":60000},{"resourceEnum":"TEMPROUSINGOT","resourceCost":10}],"purchased":false},{"id":50,"upgradeType":"WORKER","name":"Musical Lumberjacks","description":"This funny little tune helps the lumberjacks stay focused, but you'll NEVER get it out of your head. Increases worker yield by 60%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.6,"maxTier":5}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":300}],"purchased":false},{"id":51,"upgradeType":"WORKER","name":"Entking","description":"With their king at last restored to his former glory, the ents find themselves greatly invigorated.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"WOOD","resourceEnum":"ENTSOUL","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"REFINEDTEMPROUS","resourceCost":150}],"purchased":false},{"id":52,"upgradeType":"WORKER","name":"Miner's Guild","description":"Form a guild to help your workers hone their skills. Miners harvest 15% more material.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"GOLD","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15}],"resourceCosts":[{"resourceEnum":"GOLDINGOT","resourceCost":500}],"purchased":false},{"id":53,"upgradeType":"WORKER","name":"Miner Musical","description":"Those who underperform are \"encouraged\" to sing along.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":6},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"GOLD","upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":5}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":1500}],"purchased":false},{"id":54,"upgradeType":"WORKER","name":"Temprous Master","description":"There is no other with the prowess this master posesses in handling temprous metal. Workers generate 50% more temprous.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceType":"MINERAL","resourceEnum":"TEMPROUSINGOT","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5},{"upgradeIsForWholeType":false,"resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5}],"resourceCosts":[{"resourceEnum":"REFINEDTEMPROUS","resourceCost":250},{"resourceEnum":"ENTSOUL","resourceCost":50}],"purchased":false}];

/***/ }),

/***/ "./src/assets/json/workers.json":
/*!**************************************!*\
  !*** ./src/assets/json/workers.json ***!
  \**************************************/
/*! exports provided: WOOD, MINERAL, METAL, default */
/***/ (function(module) {

module.exports = {"WOOD":{"id":0,"cost":250,"resourceType":"WOOD","workerCount":0,"freeWorkers":0,"resourceWorkers":{"OAK":{"resourceEnum":"OAK","workable":true,"recurringCost":5,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"PINE":{"resourceEnum":"PINE","workable":false,"recurringCost":10,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"BIRCH":{"resourceEnum":"BIRCH","workable":false,"recurringCost":20,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"EUCALYPTUS":{"resourceEnum":"EUCALYPTUS","workable":false,"recurringCost":25,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"WILLOW":{"resourceEnum":"WILLOW","workable":false,"recurringCost":40,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"TEAK":{"resourceEnum":"TEAK","workable":false,"recurringCost":50,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"ENTSOUL":{"resourceEnum":"ENTSOUL","workable":false,"recurringCost":60,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"REANIMATEDENT":{"resourceEnum":"REANIMATEDENT","workable":false,"recurringCost":150,"workerCount":0,"workerYield":1,"sliderSettingValid":true}}},"MINERAL":{"id":2,"cost":650,"resourceType":"MINERAL","workerCount":0,"freeWorkers":0,"resourceWorkers":{"STONE":{"resourceEnum":"STONE","workable":true,"recurringCost":10,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"GRAPHITE":{"resourceEnum":"GRAPHITE","workable":false,"recurringCost":15,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"LIMESTONE":{"resourceEnum":"LIMESTONE","workable":false,"recurringCost":20,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"MARBLE":{"resourceEnum":"MARBLE","workable":false,"recurringCost":30,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"QUARTZ":{"resourceEnum":"QUARTZ","workable":false,"recurringCost":45,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"OBSIDIAN":{"resourceEnum":"OBSIDIAN","workable":false,"recurringCost":55,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"DIAMOND":{"resourceEnum":"DIAMOND","workable":false,"recurringCost":70,"workerCount":0,"workerYield":1,"sliderSettingValid":true}}},"METAL":{"id":1,"cost":1000,"resourceType":"METAL","workerCount":0,"freeWorkers":0,"resourceWorkers":{"COPPERORE":{"resourceEnum":"COPPERORE","workable":false,"recurringCost":5,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"TINORE":{"resourceEnum":"TINORE","workable":false,"recurringCost":5,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"BRONZEINGOT":{"resourceEnum":"BRONZEINGOT","workable":false,"recurringCost":10,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"IRONORE":{"resourceEnum":"IRONORE","workable":false,"recurringCost":15,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"IRONINGOT":{"resourceEnum":"IRONINGOT","workable":false,"recurringCost":25,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"STEELINGOT":{"resourceEnum":"STEELINGOT","workable":false,"recurringCost":40,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"GOLDORE":{"resourceEnum":"GOLDORE","workable":false,"recurringCost":35,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"GOLDINGOT":{"resourceEnum":"GOLDINGOT","workable":false,"recurringCost":60,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"LATINUMORE":{"resourceEnum":"LATINUMORE","workable":false,"recurringCost":75,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"LATINUMINGOT":{"resourceEnum":"LATINUMINGOT","workable":false,"recurringCost":95,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"UNBELIEVIUMORE":{"resourceEnum":"UNBELIEVIUMORE","workable":false,"recurringCost":120,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"LUSTRIALORE":{"resourceEnum":"LUSTRIALORE","workable":false,"recurringCost":120,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"SPECTRUSORE":{"resourceEnum":"SPECTRUSORE","workable":false,"recurringCost":120,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"TEMPROUSINGOT":{"resourceEnum":"TEMPROUSINGOT","workable":false,"recurringCost":200,"workerCount":0,"workerYield":1,"sliderSettingValid":true},"REFINEDTEMPROUS":{"resourceEnum":"REFINEDTEMPROUS","workable":false,"recurringCost":500,"workerCount":0,"workerYield":1,"sliderSettingValid":true}}}};

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