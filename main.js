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

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.active {\n  color: #039be5;\n}\n.resource-list {\n  float: left;\n}\n.tab-group {\n  margin-left: 15px;\n}\n.game-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.game-is-mobile .game-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\nh1.game-app-name {\n  margin-left: 8px;\n}\n.game-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n.game-sidenav-container mat-sidenav {\n  width: 500px;\n  overflow-x: hidden;\n}\n.game-is-mobile .game-sidenav-container mat-sidenav {\n  width: 100%;\n}\n.game-is-mobile .game-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n.sidenav-buttons {\n  position: absolute;\n  right: 0;\n}\n.toolbar-button-text {\n  display: inline-block;\n}\n.main-pane {\n  height: 100%;\n}\napp-clicker-main {\n  overflow: auto;\n  max-height: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\" [class.game-is-mobile]=\"mobileQuery.matches\" [@.disabled]=\"disableAnimations\">\n  <mat-toolbar color=\"primary\" class=\"game-toolbar\">\n    <h1 class=\"game-app-name\">Age of Clicking</h1>\n    <div class=\"sidenav-buttons\">\n      <button mat-flat-button (click)=\"hideResourceList = !hideResourceList\">\n        <mat-icon>map</mat-icon><p class=\"toolbar-button-text\" *ngIf=\"!mobileQuery.matches\">Expand Map</p>\n      </button>\n      <button mat-flat-button (click)=\"snav.toggle()\" [matBadge]=\"affordableUpgradeCount\" [matBadgeHidden]=\"affordableUpgradeCount <= 0\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n        <mat-icon>menu</mat-icon><p class=\"toolbar-button-text\" *ngIf=\"!mobileQuery.matches\">Menu</p>\n      </button>\n    </div>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"game-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [opened]=\"!mobileQuery.matches\" [fixedInViewport]=\"mobileQuery.matches\" position=\"end\"\n      fixedTopGap=\"56\">\n      <mat-nav-list>\n        <mat-tab-group class=\"tab-group\" dynamicHeight>\n          <mat-tab label=\"Workers\">\n            <app-workers></app-workers>\n          </mat-tab>\n          <mat-tab label=\"Store\">\n            <app-store></app-store>\n          </mat-tab>\n          <mat-tab label=\"Upgrades{{affordableUpgradeCount > 0 ? ' (' + affordableUpgradeCount + ')' : ''}}\">\n            <app-upgrades></app-upgrades>\n          </mat-tab>\n          <mat-tab label=\"Log\">\n            <app-messages></app-messages>\n          </mat-tab>\n          <mat-tab label=\"Settings\">\n            <app-settings></app-settings>\n            <app-admin-debug *ngIf=\"debugMode\"></app-admin-debug>\n          </mat-tab>\n        </mat-tab-group>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <div class=\"main-pane\">\n        <app-clicker-main class=\"resource-list\" [style.display]=\"hideResourceList? 'none': ''\"></app-clicker-main>\n        <app-map class=\"map\" [style.display]=\"mobileQuery.matches && !hideResourceList? 'none': ''\"></app-map>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

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
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _pipes_long_number_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/long-number-pipe */ "./src/app/pipes/long-number-pipe.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/clicker-main/clicker-main.component */ "./src/app/components/clicker-main/clicker-main.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/workers/workers.component */ "./src/app/components/workers/workers.component.ts");
/* harmony import */ var _components_store_store_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/store/store.component */ "./src/app/components/store/store.component.ts");
/* harmony import */ var _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/upgrades/upgrades.component */ "./src/app/components/upgrades/upgrades.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-debug/admin-debug.component */ "./src/app/components/admin-debug/admin-debug.component.ts");
/* harmony import */ var _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/about-dialog/about-dialog/about-dialog.component */ "./src/app/components/about-dialog/about-dialog/about-dialog.component.ts");
/* harmony import */ var _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/save-dialog/save-dialog.component */ "./src/app/components/save-dialog/save-dialog.component.ts");
/* harmony import */ var _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/crop/crop.directive */ "./src/app/directives/crop/crop.directive.ts");
/* harmony import */ var _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/map/map.directive */ "./src/app/directives/map/map.directive.ts");
/* harmony import */ var _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/no-scroll/no-scroll.directive */ "./src/app/directives/no-scroll/no-scroll.directive.ts");
/* harmony import */ var _components_enemy_enemy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/enemy/enemy.component */ "./src/app/components/enemy/enemy.component.ts");
/* harmony import */ var _components_fighter_fighter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/fighter/fighter.component */ "./src/app/components/fighter/fighter.component.ts");
/* harmony import */ var _components_buildings_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/buildings/buildings/buildings.component */ "./src/app/components/buildings/buildings/buildings.component.ts");
/* harmony import */ var _components_tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/tile-detail/tile-detail.component */ "./src/app/components/tile-detail/tile-detail.component.ts");
/* harmony import */ var _components_fighter_detail_fighter_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/fighter-detail/fighter-detail.component */ "./src/app/components/fighter-detail/fighter-detail.component.ts");
/* harmony import */ var _directives_snap_snap_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/snap/snap.directive */ "./src/app/directives/snap/snap.directive.ts");
/* harmony import */ var _directives_minimap_minimap_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./directives/minimap/minimap.directive */ "./src/app/directives/minimap/minimap.directive.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _durwella_zoomable_canvas__WEBPACK_IMPORTED_MODULE_4__["ZoomableCanvasComponent"],
                _pipes_long_number_pipe__WEBPACK_IMPORTED_MODULE_7__["LongNumberPipe"],
                _components_clicker_main_clicker_main_component__WEBPACK_IMPORTED_MODULE_10__["ClickerMainComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"],
                _components_workers_workers_component__WEBPACK_IMPORTED_MODULE_12__["WorkersComponent"],
                _components_store_store_component__WEBPACK_IMPORTED_MODULE_13__["StoreComponent"],
                _components_upgrades_upgrades_component__WEBPACK_IMPORTED_MODULE_14__["UpgradesComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _components_admin_debug_admin_debug_component__WEBPACK_IMPORTED_MODULE_17__["AdminDebugComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_15__["MapComponent"],
                _directives_crop_crop_directive__WEBPACK_IMPORTED_MODULE_20__["CropDirective"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SaveDialogComponent"],
                _directives_map_map_directive__WEBPACK_IMPORTED_MODULE_21__["MapDirective"],
                _directives_no_scroll_no_scroll_directive__WEBPACK_IMPORTED_MODULE_22__["NoScrollDirective"],
                _components_enemy_enemy_component__WEBPACK_IMPORTED_MODULE_23__["EnemyComponent"],
                _components_fighter_fighter_component__WEBPACK_IMPORTED_MODULE_24__["FighterComponent"],
                _components_buildings_buildings_buildings_component__WEBPACK_IMPORTED_MODULE_25__["BuildingsComponent"],
                _components_tile_detail_tile_detail_component__WEBPACK_IMPORTED_MODULE_26__["TileDetailComponent"],
                _components_fighter_detail_fighter_detail_component__WEBPACK_IMPORTED_MODULE_27__["FighterDetailComponent"],
                _directives_snap_snap_directive__WEBPACK_IMPORTED_MODULE_28__["SnapDirective"],
                _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AboutDialogComponent"],
                _directives_minimap_minimap_directive__WEBPACK_IMPORTED_MODULE_29__["MinimapDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_import_material_import_module__WEBPACK_IMPORTED_MODULE_5__["MaterialImportModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]
            ],
            entryComponents: [
                _components_about_dialog_about_dialog_about_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AboutDialogComponent"],
                _components_save_dialog_save_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SaveDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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

module.exports = "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\n\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n\n\n* {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n\na {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\n\nnav a:visited, a:link {\n  color: #607d8b;\n}\n\n\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n\n\nnav a.active {\n  color: #039be5;\n}\n"

/***/ }),

/***/ "./src/app/components/about-dialog/about-dialog/about-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/about-dialog/about-dialog/about-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Age Of Clicking - Version Alpha 3.4</h1>\n<br />\n\n<div>\n  An exploration-based incremental game by Ratheronfire.\n  <br />\n  Thanks to the <a href=\"http://reddit.com/r/incremental_games/\" target=\"_blank\">/r/incremental_games</a> community for helping to test the game!\n  <br />\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8DTWKHUT9DYZN\" target=\"_blank\">Donate</a> If you enjoyed the game and want to help support me, feel free to drop a few bucks here! It's not at all required, but it's appreciated.\n\n  <div>\n    <h2>Also Check Out:</h2>\n    <li>\n      <a href=\"http://orteil.dashnet.org/cookieclicker/\" target=\"_blank\">Cookie Clicker</a> The incremental game that started them all!\n    </li>\n    <li>\n      <a href=\"http://scholtek.com/minedefense\" target=\"_blank\">Mine Defense</a> A seemingly simple game with a surprising amount of depth.\n    </li>\n    <li>\n      <a href=\"http://bloodrizer.ru/games/kittens/\" target=\"_blank\">Kittens Game</a> Filled with gradually unfolding systems and resources that all feed off of eachother.\n    </li>\n  </div>\n</div>\n\n<div>\n  <h2>Version History</h2>\n\n  Pre-Alpha 3\n  <li>\n    Complete lack of usable UI\n  </li>\n  <li>\n    Only a few resources & upgrades were added at this point.\n  </li>\n\n  <br />\n  Alpha 3\n  <li>\n    UI Overhaul\n  </li>\n  <li>\n    New map mystem\n  </li>\n  <li>\n    Expanded endgame resources\n  </li>\n  <li>\n    Added enemies, tower defense, and tile upgrading.\n  </li>\n  <li>\n    Added new market resources which automatically sell your stored resources.\n  </li>\n  <li>\n    Added food resources used to keep workers active.\n  </li>\n  <li>\n    Added procedural map generation.\n  </li>\n</div>\n"

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

module.exports = "<h2>Debug</h2>\n\n<mat-checkbox class=\"filterAccessible\" checked=\"true\" [(ngModel)]=\"adminService.filterAccessible\">Hide Inaccessible\n  Upgrades</mat-checkbox>\n<br />\n\n<mat-divider></mat-divider>\n<br />\n\n<div>\n  <mat-select placeholder=\"Resource\" style=\"width: 200px\" [(ngModel)]=\"selectedResource\">\n    <mat-option *ngFor=\"let resource of resourcesService.getResources()\" [value]=\"resource\">\n      {{resource.name | titlecase}}\n    </mat-option>\n  </mat-select>\n\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"amount\">\n  </mat-form-field>\n  <button mat-raised-button (click)=\"addResourceAmount()\">Add to all resources</button>\n  <div *ngIf=\"selectedResource !== undefined\">\n    <button mat-raised-button (click)=\"addResourceAmount(selectedResource)\">Add to {{selectedResource.name |\n      titlecase}}</button>\n  </div>\n</div>\n"

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

module.exports = "/* BuildingsComponent's private CSS styles */\n.buildings {\n  position: absolute;\n  top: 72px;\n  width: 140px;\n  display: -ms-grid;\n  display: grid;\n\n  background: white;\n\n  flex-direction: column;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n.resource-list {\n  text-align: center;\n}\n.resource-list div {\n  display: inline-block;\n}\n.resource-list img {\n  width: 16px;\n  height: 16px;\n}\n"

/***/ }),

/***/ "./src/app/components/buildings/buildings/buildings.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/buildings/buildings/buildings.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"selectedBuilding\"\nclass=\"buildings\">\n<mat-button-toggle *ngFor=\"let buildingTile of getBuildingTileArray(true)\" [value]=\"buildingTile\" class=\"building\"\n  [disabled]=\"!canAffordBuilding(buildingTile.tileType)\" (click)=\"mapService.buildingListVisible = false\">\n  <div class=\"title\" matTooltip=\"{{buildingTile.description}}\" matTooltipPosition=\"above\">\n    {{buildingTile.name}}\n  </div>\n  <div class=\"resource-list\">\n    <div *ngFor=\"let resourceCost of buildingTile.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\n      matTooltipPosition=\"below\">\n      <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\n      {{resourceCost.resourceCost | longNumber}}\n    </div>\n  </div>\n</mat-button-toggle>\n</mat-button-toggle-group>\n"

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
        return this.buildingsService.canAffordBuilding(this.buildingTiles.get(buildingType));
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
        var tiles = Array.from(this.mapService.buildingTiles.values());
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

module.exports = "/* ClickerMainComponent's private CSS styles */\n.resources {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 25em;\n}\n.resources mat-expansion-panel {\n  margin: 0;\n}\n.resources mat-expansion-panel-header {\n  height: 30px !important;\n}\n.resources mat-card-subtitle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n}\n.resources .resource-button {\n  position: relative;\n  cursor: pointer;\n  margin: .5em;\n  padding: .4em 0;\n  height: 3.6em;\n  width: 100%;\n  border-radius: 4px;\n}\n.resources .resource-button.warn {\n  background-color: darkred;\n}\n.resources .resource-button:hover {\n  left: .1em;\n}\n.resources .resource-button.mat-disabled {\n  cursor: default;\n}\n.resources .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: absolute;\n  right: -9px;\n  top: 1px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: center;\n  margin-right: .8em;\n  border-radius: 0 4px 4px 0;\n}\n.button-container {\n  position: relative;\n}\n.travelling-count {\n  position: absolute;\n  top: 22px;\n  right: 3px;\n}\n.resource-button {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n.resources button.resource-button.currency-button {\n  width: 95%;\n  cursor: auto;\n\n  z-index: 2;\n\n  position: -webkit-sticky;\n\n  position: sticky;\n  top: 0;\n  left: 5%;\n\n  background-color: #eee;\n  color: black;\n}\n.currency-button:hover {\n  left: unset;\n}\n.harvest-progress {\n  display: flex;\n  align-content: center;\n  align-items: center;\n\n  height: 100%;\n  top: 0px;\n\n  position: absolute;\n  opacity: 0.5;\n}\n.resource-img {\n  position: absolute;\n\n  top: 0;\n  left: 0;\n}\n.key-container {\n  position: absolute;\n  left: 50px;\n}\n.key-container img {\n  width: 24px;\n  height: 24px;\n}\n.key-container p {\n  z-index: 1;\n  position: absolute;\n\n  top: 9px;\n  right: 5px;\n\n  margin: 0;\n  line-height: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/clicker-main/clicker-main.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/clicker-main/clicker-main.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"resources noselect\">\n  <button mat-raised-button disabled=\"true\" class=\"resource-button currency-button\" [ngClass]=\"{'warn': resourceIsBeingStolen(goldResource)}\">\n    <mat-card-title>{{goldResource.name | titlecase }}</mat-card-title>\n    <mat-card-subtitle>{{goldResource.amount | longNumber}}</mat-card-subtitle>\n\n    <img class=\"resource-img\" src=\"{{goldResource.iconPath}}\" alt=\"{{goldResource.name}}\" *ngIf=\"goldResource.iconPath !== ''\">\n  </button>\n\n  <mat-accordion multi=\"true\" *ngIf=\"organizeLeftPanelByType\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of resourceTypes | enumToArray\">\n      <mat-expansion-panel-header *ngIf=\"resourceType !== 'Currency'\">\n        <mat-panel-title>\n          {{resourceType}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div class='button-container' *ngFor=\"let resource of getResources(resourceType, adminService.filterAccessible)\"\n        matTooltip=\"{{getTooltipMessage(resource)}}\" matTooltipPosition=\"right\">\n        <button mat-raised-button class=\"resource-button\" [ngClass]=\"{'warn': resourceIsBeingStolen(resource)}\"\n          [disabled]=\"!canHarvest(resource, resource.harvestYield)\" (click)='startHarvesting(resource)'\n          *ngIf=\"resource.resourceType != 'CURRENCY'\">\n          <div class=\"key-container\" *ngIf=\"resource.bindIndex >= 0\">\n            <img src=\"./assets/sprites/key.png\">\n            <p>{{resource.bindIndex}}</p>\n          </div>\n\n          <mat-card-title>{{resource.name | titlecase }}</mat-card-title>\n          <mat-card-subtitle>{{resource.amount | longNumber}}</mat-card-subtitle>\n          <mat-progress-bar [class.hidden]=\"!resource.harvesting\" class=\"harvest-progress\" [value]=\"resource.progressBarValue\"></mat-progress-bar>\n\n          <img class=\"resource-img\" src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\" *ngIf=\"resource.iconPath !== ''\">\n          <div class='travelling-count' *ngIf=\"resource.amountTravelling > 0\">{{resource.amountTravelling}}\n            Travelling</div>\n        </button>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <mat-accordion multi=\"true\" *ngIf=\"!organizeLeftPanelByType\">\n      <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceTier of tiers\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Tier {{resourceTier + 1}}\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <div class='button-container' *ngFor=\"let resource of getResources(undefined, [resourceTier], adminService.filterAccessible)\"\n          matTooltip=\"{{getTooltipMessage(resource)}}\" matTooltipPosition=\"right\">\n          <button mat-raised-button class=\"resource-button\" [ngClass]=\"{'warn': resourceIsBeingStolen(resource)}\"\n            [disabled]=\"!canHarvest(resource, resource.harvestYield)\" (click)='startHarvesting(resource)'\n            *ngIf=\"resource.resourceType != 'CURRENCY'\">\n            <div class=\"key-container\" *ngIf=\"resource.bindIndex >= 0\">\n              <img src=\"./assets/sprites/key.png\">\n              <p>{{resource.bindIndex}}</p>\n            </div>\n\n            <mat-card-title>{{resource.name | titlecase }}</mat-card-title>\n            <mat-card-subtitle>{{resource.amount | longNumber}}</mat-card-subtitle>\n            <mat-progress-bar [class.hidden]=\"!resource.harvesting\" class=\"harvest-progress\" [value]=\"resource.progressBarValue\"></mat-progress-bar>\n\n            <img class=\"resource-img\" src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\" *ngIf=\"resource.iconPath !== ''\">\n            <div class='travelling-count' *ngIf=\"resource.amountTravelling > 0\">{{resource.amountTravelling}}\n              Travelling</div>\n          </button>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n</ul>\n"

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
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _objects_resourceData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../objects/resourceData */ "./src/app/objects/resourceData.ts");
/* harmony import */ var _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/workers/workers.service */ "./src/app/services/workers/workers.service.ts");
/* harmony import */ var _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/tooltip/tooltip.service */ "./src/app/services/tooltip/tooltip.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/admin/admin.service */ "./src/app/services/admin/admin.service.ts");
/* harmony import */ var _services_tick_tick_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/tick/tick.service */ "./src/app/services/tick/tick.service.ts");
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
    function ClickerMainComponent(clickerMainService, settingsService, resourcesService, workersService, tooltipService, mapService, enemyService, adminService, tickService) {
        this.clickerMainService = clickerMainService;
        this.settingsService = settingsService;
        this.resourcesService = resourcesService;
        this.workersService = workersService;
        this.tooltipService = tooltipService;
        this.mapService = mapService;
        this.enemyService = enemyService;
        this.adminService = adminService;
        this.tickService = tickService;
        this.resourceTypes = _objects_resourceData__WEBPACK_IMPORTED_MODULE_4__["ResourceType"];
    }
    ClickerMainComponent.prototype.ngOnInit = function () {
    };
    ClickerMainComponent.prototype.getResources = function (resourceType, resourceTiers, filterByAccessible) {
        if (filterByAccessible === void 0) { filterByAccessible = true; }
        return this.resourcesService.getResources(this.resourceTypes[resourceType], resourceTiers, false, filterByAccessible);
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
    Object.defineProperty(ClickerMainComponent.prototype, "goldResource", {
        get: function () {
            return this.resourcesService.resources.get(_objects_resourceData__WEBPACK_IMPORTED_MODULE_4__["ResourceEnum"].Gold);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickerMainComponent.prototype, "tiers", {
        get: function () {
            return this.resourcesService.tiers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClickerMainComponent.prototype, "organizeLeftPanelByType", {
        get: function () {
            return this.settingsService.organizeLeftPanelByType;
        },
        enumerable: true,
        configurable: true
    });
    ClickerMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clicker-main',
            template: __webpack_require__(/*! ./clicker-main.component.html */ "./src/app/components/clicker-main/clicker-main.component.html"),
            styles: [__webpack_require__(/*! ./clicker-main.component.css */ "./src/app/components/clicker-main/clicker-main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_clicker_main_clicker_main_service__WEBPACK_IMPORTED_MODULE_1__["ClickerMainService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _services_workers_workers_service__WEBPACK_IMPORTED_MODULE_5__["WorkersService"],
            _services_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_6__["TooltipService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_7__["MapService"],
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_8__["EnemyService"],
            _services_admin_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"],
            _services_tick_tick_service__WEBPACK_IMPORTED_MODULE_10__["TickService"]])
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

module.exports = "<button (click)=\"enemyService.spawnEnemy()\">Spawn Enemy</button>\n"

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

module.exports = "#fighter-tooltip {\n  top: var(--detail-tooltip-top);\n  left: var(--detail-tooltip-left);\n\n  position: absolute;\n}\n\nmat-card {\n  text-align: center;\n  min-width: 300px;\n  max-width: 400px;\n}\n\n.resource-list div {\n  display: inline-block;\n}\n\n.resource-list img {\n  width: 16px;\n  height: 16px;\n}\n\n.repair-container {\n  display: inline-flex;\n  white-space: pre-wrap;\n}\n\n.repair-container button {\n  position: relative;\n  top: -25%;\n}\n\n.stats-container {\n  width: 100%;\n}\n\n.upgrade-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.upgrade-button mat-icon {\n  position: relative;\n  top: 5px;\n}\n\n.anchor-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 55px;\n  height: 55px;\n}\n\n.anchor-container #center {\n  position: absolute;\n\n  left: 15px;\n  top: 15px;\n}\n\n.anchor-container .corner {\n  display: none;\n}\n\n.anchor-container:hover .corner {\n  display: inherit;\n}\n\n.anchor-container a {\n  cursor: pointer;\n  color: gray;\n}\n\n.anchor-container a:hover {\n  color: black;\n}\n\n.anchor-container #arrow-upper-left {\n  -webkit-transform: rotate(225deg);\n  transform: rotate(225deg);\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.anchor-container #arrow-upper-right {\n  -webkit-transform: rotate(315deg);\n  transform: rotate(315deg);\n\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.anchor-container #arrow-lower-left {\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.anchor-container #arrow-lower-right {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/fighter-detail/fighter-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/fighter-detail/fighter-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card appSnap [snapSetting]=\"snapSetting\" id=\"fighter-tooltip\">\n  <div class=\"anchor-container\">\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-upper-left\" (click)=\"snapSetting = 'upperLeft'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-upper-right\" (click)=\"snapSetting = 'upperRight'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon id=\"center\" (click)=\"snapSetting = 'free'\">all_out</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-lower-left\" (click)=\"snapSetting = 'lowerLeft'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-lower-right\" (click)=\"snapSetting = 'lowerRight'\">arrow_forward</mat-icon>\n    </a>\n  </div>\n  <div *ngIf=\"focusedFighter\">\n    <mat-card-title>{{focusedFighter.name}}</mat-card-title>\n    <mat-card-subtitle>{{focusedFighter.description}}</mat-card-subtitle>\n\n    <div class=\"repair-container\">\n      {{focusedFighter.health}}/{{focusedFighter.maxHealth | longNumber}} Health\n      <div *ngIf=\"focusedFighter.health < focusedFighter.maxHealth\">\n        <button mat-raised-button (click)=\"focusedFighter.heal()\" color=\"accent\" [disabled]=\"!focusedFighter.canHeal()\">\n          Heal\n          <div class=\"resource-list\">\n            <div matTooltip=\"{{focusedFighter.healCost | longNumber}} {{getResource('GOLD').name | titlecase}}\"\n              matTooltipPosition=\"below\">\n              <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n              {{focusedFighter.healCost | longNumber}}\n            </div>\n          </div>\n        </button>\n      </div>\n    </div>\n\n    <mat-card-content>\n      <button mat-raised-button color=\"warn\" (click)=\"removeFighter()\">Remove Fighter</button>\n\n      <h3>Stats</h3>\n      <table class=\"stats-container\">\n        <tbody>\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Max Health: {{focusedFighter.maxHealth | longNumber}}\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['MAXHEALTH']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('MAXHEALTH')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('MAXHEALTH')\" matTooltip=\"Level {{focusedFighter.statLevels['MAXHEALTH'] + 1}}: {{focusedFighter.getUpgradedStat('MAXHEALTH') | longNumber}} Max Health\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['MAXHEALTH'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Attack: {{focusedFighter.attack | longNumber}}\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['ATTACK']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('ATTACK')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('ATTACK')\" matTooltip=\"Level {{focusedFighter.statLevels['ATTACK'] + 1}}: {{focusedFighter.getUpgradedStat('ATTACK') | longNumber}} Attack\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['ATTACK'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Defense: {{focusedFighter.defense | longNumber}}\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['DEFENSE']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('DEFENSE')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('DEFENSE')\" matTooltip=\"Level {{focusedFighter.statLevels['DEFENSE'] + 1}}: {{focusedFighter.getUpgradedStat('DEFENSE') | longNumber}} Defense\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['DEFENSE'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Attack Range: {{focusedFighter.attackRange | longNumber}}\n                Tile{{focusedFighter.attackRange === 1 ? '' : 's'}}\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['RANGE']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('RANGE')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('RANGE')\" matTooltip=\"Level {{focusedFighter.statLevels['RANGE'] + 1}}: {{focusedFighter.getUpgradedStat('RANGE') | longNumber}} Attack Range\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['RANGE'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\" *ngIf=\"focusedFighter.moveable\">\n            <td>\n              <p>\n                Movement Speed: {{focusedFighter.animationSpeed * 100 | longNumber}}\n                Tile{{focusedFighter.animationSpeed === 1 ? '' : 's'}}/second\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['MOVEMENTSPEED']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('MOVEMENTSPEED')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('MOVEMENTSPEED')\" matTooltip=\"Level {{focusedFighter.statLevels['MOVEMENTSPEED'] + 1}}: {{focusedFighter.getUpgradedStat('MOVEMENTSPEED') * 100 | longNumber}} Tiles/Second\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['MOVEMENTSPEED'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Fire Rate: {{1000 / focusedFighter.fireMilliseconds | longNumber}}/Second\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedFighter.statLevels['FIRERATE']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedFighter.upgradeStat('FIRERATE')\"\n                [disabled]=\"!focusedFighter.canUpgradeStat('FIRERATE')\" matTooltip=\"Level {{focusedFighter.statLevels['FIRERATE'] + 1}}: {{1000 / focusedFighter.getUpgradedStat('FIRERATE') | longNumber}}/Second\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedFighter.statCosts['FIRERATE'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </mat-card-content>\n  </div>\n</mat-card>\n"

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

module.exports = "/* FightersComponent's private CSS styles */\n.fighters {\n  position: absolute;\n  top: 72px;\n  left: 392px;\n  width: 134px;\n  display: -ms-grid;\n  display: grid;\n\n  background: white;\n\n  flex-direction: column;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n.resource-list {\n  text-align: center;\n}\n.resource-list div {\n  display: inline-block;\n}\n.resource-list img {\n  width: 16px;\n  height: 16px;\n}\n"

/***/ }),

/***/ "./src/app/components/fighter/fighter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/fighter/fighter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"selectedFighterType\" class=\"fighters\">\n  <mat-button-toggle *ngFor=\"let fighterType of fighterService.fighterTypes\" [value]=\"fighterType\" class=\"fighter\"\n    [disabled]=\"!canAffordFighter(fighterType)\" (click)=\"mapService.fighterListVisible = false\">\n    <div class=\"title\" matTooltip=\"{{fighterType.description}}\" matTooltipPosition=\"above\">\n      {{fighterType.name}}\n    </div>\n    <div class=\"resource-list\">\n      <div matTooltip=\"{{fighterType.cost | longNumber}} {{getResource('GOLD').name | titlecase}}\"\n        matTooltipPosition=\"below\">\n        <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n        {{fighterType.cost | longNumber}}\n      </div>\n    </div>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n"

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

module.exports = "/* MapComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nh3 {\n  font-family: Arial, Helvetica, sans-serif;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.active {\n  color: #039be5;\n}\n#map-canvas-container {\n  display: flex;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n#minimap-canvas-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  width: 375px;\n  height: 375px;\n}\n#minimap-canvas-container canvas {\n  position: absolute;\n\n  background: transparent;\n}\n.cursor-tools {\n  position: absolute;\n  top: 0;\n\n  overflow-x: auto;\n  max-width: 100%;\n\n  background: white;\n}\n.key-container {\n  position: absolute;\n}\n.key-container img {\n  width: 24px;\n  height: 24px;\n}\n.key-container p {\n  z-index: 1;\n  position: absolute;\n\n  top: 10px;\n  right: 3px;\n\n  margin: 0;\n  line-height: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map-canvas-container\" tabindex=\"1\">\n  <canvas id=\"map\" class=\"noselect\" appNoScroll appMap oncontextmenu=\"return false\"></canvas>\n\n  <mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"mapService.cursorTool\" class=\"cursor-tools\"\n    (valueChange)=\"clearFocus()\">\n    <mat-button-toggle value=\"PLACEBUILDINGS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(!mapService.buildingListVisible, false)\">\n      <div class=\"key-container\">\n        <img src=\"./assets/sprites/key.png\">\n        <p>Q</p>\n      </div>\n      <mat-icon color=\"primary\">add_photo_alternate</mat-icon>\n      <br />\n      Place Buildings\n    </mat-button-toggle>\n    <mat-button-toggle value=\"CLEARBUILDINGS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\n      <div class=\"key-container\">\n        <img src=\"./assets/sprites/key.png\">\n        <p>W</p>\n      </div>\n      <mat-icon color=\"primary\">delete</mat-icon>\n      <br />\n      Clear Buildings\n    </mat-button-toggle>\n    <mat-button-toggle value=\"TILEDETAIL\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\n      <div class=\"key-container\">\n        <img src=\"./assets/sprites/key.png\">\n        <p>E</p>\n      </div>\n      <mat-icon color=\"primary\">mode_comment</mat-icon>\n      <br />\n      Tile Details\n    </mat-button-toggle>\n    <mat-button-toggle *ngIf=\"enemyService.enemiesActive\" value=\"PLACEFIGHTERS\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, !this.mapService.fighterListVisible)\">\n      <div class=\"key-container\">\n        <img src=\"./assets/sprites/key.png\">\n        <p>R</p>\n      </div>\n      <mat-icon color=\"primary\">directions_walk</mat-icon>\n      <br />\n      Place Fighters\n    </mat-button-toggle>\n    <mat-button-toggle *ngIf=\"enemyService.enemiesActive\" value=\"FIGHTERDETAIL\" class=\"cursor-tool\" (click)=\"setPlacementGroupVisibility(false, false)\">\n      <div class=\"key-container\">\n        <img src=\"./assets/sprites/key.png\">\n        <p>T</p>\n      </div>\n      <mat-icon color=\"primary\">directions_run</mat-icon>\n      <br />\n      Fighter Details\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n\n  <div id=\"minimap-canvas-container\" class=\"minimap\" appMinimap oncontextmenu=\"return false\">\n      <canvas id=\"minimap_background\" class=\"noselect\"></canvas>\n      <canvas id=\"minimap_foreground\" class=\"noselect\"></canvas>\n  </div>\n\n  <app-buildings *ngIf=\"mapService.buildingListVisible\"></app-buildings>\n  <app-fighter *ngIf=\"mapService.fighterListVisible\"></app-fighter>\n\n  <app-tile-detail [ngClass]=\"{'hidden': !mapService.focusedBuildingTile && !mapService.focusedResourceTile}\"></app-tile-detail>\n  <app-fighter-detail [ngClass]=\"{'hidden': !mapService.focusedFighter}\"></app-fighter-detail>\n</div>\n"

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

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\ntable.message-table {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"messagesService.messagesDataSource\" matSort matSortActive=\"timestamp\" matSortDirection=\"desc\" class=\"message-table mat-elevation-z8\">\n    <ng-container matColumnDef=\"source\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Source </mat-header-cell>\n      <mat-cell *matCellDef=\"let message\"> {{message.source | titlecase}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"timestamp\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Timestamp </mat-header-cell>\n        <mat-cell *matCellDef=\"let message\"> {{message.timestamp | date:'h:mm a'}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Message </mat-header-cell>\n      <mat-cell *matCellDef=\"let message\"> {{message.message}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </table>\n"

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

module.exports = ".full-width {\n  width: 100%;\n}\n"

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

module.exports = "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n\na {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\na:visited, a:link {\n  color: #607d8b;\n}\n\na:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n\na.active {\n  color: #039be5;\n}\n\nmat-panel-title {\n  display: -ms-grid;\n  display: grid;\n}\n\n.color-input {\n    color: rgb(108, 88, 88);\n    font-weight: bolder;\n}\n\n.full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Version {{settingsService.gameVersion}} -\n  <a (click)=\"openAboutDialog()\">About</a>\n</h3>\n\n<mat-accordion multi=\"true\">\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">save</mat-icon>\n        Save/Load\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <mat-form-field class=\"full-width\">\n      <mat-select placeholder=\"Autosave Interval (Minutes)\" [(ngModel)]=\"autosaveInterval\" (valueChange)=\"settingsService.setAutosave()\">\n        <mat-option [value]=\"-1\">Disable</mat-option>\n        <mat-option [value]=\"60000\">1</mat-option>\n        <mat-option [value]=\"900000\">15</mat-option>\n        <mat-option [value]=\"1800000\">30</mat-option>\n        <mat-option [value]=\"3600000\">60</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" (click)=\"saveGame()\">Save</button>\n    <button mat-raised-button color=\"warn\" (click)=\"deleteGame()\">Delete Save</button>\n\n    <button mat-raised-button (click)=\"exportSave()\">Export Save</button>\n    <button mat-raised-button (click)=\"importSave()\">Import Save</button>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">list</mat-icon>\n        Interface\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <!-- <mat-checkbox [(ngModel)]=\"disableAnimations\">Disable Animations</mat-checkbox>\n    <br /> -->\n    <mat-checkbox [(ngModel)]=\"slimInterface\">Slim Mode</mat-checkbox>\n    <br />\n    <mat-checkbox [(ngModel)]=\"organizeLeftPanelByType\">Organize Left Pane By Resource Type</mat-checkbox>\n\n    <mat-form-field class=\"full-width\">\n      <mat-select placeholder=\"Resource Shortcuts\" [formControl]=\"bindSelected\" multiple (selectionChange)=\"resourceBindChange($event)\">\n        <mat-option *ngFor=\"let resource of resourcesService.getResources(false, false, true)\" [(value)]=\"resource.resourceEnum\">\n          {{resource.name | titlecase}}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"bindSelected.hasError('length')\">\n        No more than 10 resource shortcuts allowed.\n      </mat-error>\n    </mat-form-field>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">map</mat-icon>\n        Map\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <mat-checkbox [(ngModel)]=\"mapLowFramerate\">Limit Framerate</mat-checkbox>\n    <br />\n\n    <mat-form-field class=\"full-width\">\n      <input class=\"color-input\" matInput placeholder=\"Player Harvest Color\" [(colorPicker)]=\"resourceAnimationColors['PLAYERSPAWNED']\"\n        [style.background]=\"resourceAnimationColors['PLAYERSPAWNED']\" [value]=\"resourceAnimationColors['PLAYERSPAWNED']\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input class=\"color-input\" matInput placeholder=\"Worker Harvest Color\" [(colorPicker)]=\"resourceAnimationColors['WORKERSPAWNED']\"\n        [style.background]=\"resourceAnimationColors['WORKERSPAWNED']\" [value]=\"resourceAnimationColors['WORKERSPAWNED']\" />\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <input class=\"color-input\" matInput placeholder=\"Sold Resource Color\" [(colorPicker)]=\"resourceAnimationColors['SOLD']\"\n        [style.background]=\"resourceAnimationColors['SOLD']\" [value]=\"resourceAnimationColors['SOLD']\" />\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">assessment</mat-icon>\n        Log\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <button mat-raised-button (click)=\"messagesService.clear()\">Clear</button>\n\n    <br />\n\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"number\" placeholder=\"Log History\" min=\"0\" max=\"10000\" [(ngModel)]=\"messagesService.messageLimit\">\n    </mat-form-field>\n\n    <br />\n\n    <mat-form-field class=\"full-width\">\n      <mat-select placeholder=\"Visible Log Sources\" [(ngModel)]=\"messagesService.visibleSources\" (ngModelChange)=\"messagesService.getFilteredMessages()\"\n        multiple>\n        <mat-option *ngFor=\"let messageSource of messageSources | enumToArray\" [(value)]=\"messageSources[messageSource]\">\n          {{messageSource | titlecase}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel expanded=\"true\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <mat-icon color=\"primary\">bug_report</mat-icon>\n        Debug\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <mat-checkbox [(ngModel)]=\"debugMode\">Debug Mode</mat-checkbox>\n  </mat-expansion-panel>\n</mat-accordion>\n"

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
    Object.defineProperty(SettingsComponent.prototype, "organizeLeftPanelByType", {
        get: function () {
            return this.settingsService.organizeLeftPanelByType;
        },
        set: function (value) {
            this.settingsService.organizeLeftPanelByType = value;
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

module.exports = "/* StoreComponent's private CSS styles */\n.store {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.store mat-expansion-panel {\n  margin: 0;\n}\n.store mat-expansion-panel-header {\n  height: 30px !important;\n}\n.store mat-card-subtitle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.store mat-card {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .4em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.store mat-card:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.store a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.store a:hover {\n  color:#607D8B;\n}\n.store .harvestable {\n  background-color: antiquewhite;\n}\n.store .harvestable:hover {\n  background-color: blanchedalmond;\n}\n.store .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: absolute;\n  right: -9px;\n  top: 1px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: center;\n  margin-right: .8em;\n  border-radius: 0 4px 4px 0;\n}\n.right {\n  position: absolute;\n  right: 3px;\n  top: 3px;\n}\nbutton {\n  min-width: unset;\n  height: 27px;\n  line-height: unset;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.full-width {\n  width: 100%;\n}\n.sell-button {\n  width: 80%;\n}\n.cutoff-input {\n  width: 20%;\n}\n"

/***/ }),

/***/ "./src/app/components/store/store.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/store/store.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Amount to sell:<mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"sellAmount\">\n  <mat-button-toggle value=\"1\" checked=\"true\">\n    1x\n  </mat-button-toggle>\n  <mat-button-toggle value=\"10\">\n    10x\n  </mat-button-toggle>\n  <mat-button-toggle value=\"100\">\n    100x\n  </mat-button-toggle>\n  <mat-button-toggle value=\"1000\">\n    1000x\n  </mat-button-toggle>\n  <mat-button-toggle value=\"-1\">\n    All\n  </mat-button-toggle>\n</mat-button-toggle-group>\n\n<ul class=\"store\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let resourceType of sellableTypes\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{resourceType | titlecase}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <div *ngFor=\"let resource of getResources(resourceType, false, adminService.filterAccessible)\">\n        <button class=\"sell-button\" color=\"accent\" mat-flat-button *ngIf=\"resource.sellable\" (click)=\"sellResource(resource)\"\n          [disabled]=\"!canSellResource(resource)\">\n          {{(sellAmount == -1 ? resource.amount : sellAmount) | longNumber}} {{resource.name | titlecase }} -\n          {{resource.sellsFor * (+sellAmount === -1 ? resource.amount : sellAmount) | longNumber}} Gold\n        </button>\n        <button disabled class=\"sell-button\" color=\"warn\" mat-flat-button *ngIf=\"!resource.sellable\">\n          {{(sellAmount == -1 ? resource.amount : sellAmount) | longNumber}} {{resource.name | titlecase }} -\n          Unsellable\n        </button>\n        <mat-form-field class=\"cutoff-input\">\n          <input matInput placeholder=\"Autosell Cutoff\" type=\"number\" min=\"0\" [disabled]=\"!resource.sellable\" [(ngModel)]=\"resource.autoSellCutoff\" />\n        </mat-form-field>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

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
    StoreComponent.prototype.getResources = function (resourceType, filterBySellable, filterByAccessible) {
        return this.resourcesService.getResources(resourceType, undefined, filterBySellable, filterByAccessible);
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

module.exports = "#tile-tooltip {\n  top: var(--detail-tooltip-top);\n  left: var(--detail-tooltip-left);\n\n  position: absolute;\n}\n\nmat-card {\n  text-align: center;\n  min-width: 300px;\n  max-width: 400px;\n}\n\n.resource-list div {\n  display: inline-block;\n}\n\n.resource-list img {\n  width: 16px;\n  height: 16px;\n}\n\n.repair-container {\n  display: inline-flex;\n  white-space: pre-wrap;\n}\n\n.repair-container button {\n  position: relative;\n  top: -25%;\n}\n\n.stats-container {\n  width: 100%;\n}\n\n.upgrade-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.upgrade-button mat-icon {\n  position: relative;\n  top: 5px;\n}\n\n.anchor-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 55px;\n  height: 55px;\n}\n\n.anchor-container #center {\n  position: absolute;\n\n  left: 15px;\n  top: 15px;\n}\n\n.anchor-container .corner {\n  display: none;\n}\n\n.anchor-container:hover .corner {\n  display: inherit;\n}\n\n.anchor-container a {\n  cursor: pointer;\n  color: gray;\n}\n\n.anchor-container a:hover {\n  color: black;\n}\n\n.anchor-container #arrow-upper-left {\n  -webkit-transform: rotate(225deg);\n  transform: rotate(225deg);\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.anchor-container #arrow-upper-right {\n  -webkit-transform: rotate(315deg);\n  transform: rotate(315deg);\n\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.anchor-container #arrow-lower-left {\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.anchor-container #arrow-lower-right {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/tile-detail/tile-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/tile-detail/tile-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card appSnap [snapSetting]=\"snapSetting\" id=\"tile-tooltip\">\n  <div class=\"anchor-container\">\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-upper-left\" (click)=\"snapSetting = 'upperLeft'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-upper-right\" (click)=\"snapSetting = 'upperRight'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon id=\"center\" (click)=\"snapSetting = 'free'\">all_out</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-lower-left\" (click)=\"snapSetting = 'lowerLeft'\">arrow_forward</mat-icon>\n    </a>\n    <a>\n      <mat-icon class=\"corner\" id=\"arrow-lower-right\" (click)=\"snapSetting = 'lowerRight'\">arrow_forward</mat-icon>\n    </a>\n  </div>\n  <div *ngIf=\"focusedBuildingTile\">\n    <mat-card-title>{{focusedBuildingTile.name}}</mat-card-title>\n    <mat-card-subtitle>{{focusedBuildingTile.description}}</mat-card-subtitle>\n    <div class=\"repair-container\">\n      {{focusedTile.health}}/{{focusedTile.maxHealth}} Health\n      <div *ngIf=\"focusedTile.health < focusedTile.maxHealth\">\n        <button mat-raised-button (click)=\"repairBuilding(focusedTile)\" color=\"accent\" [disabled]=\"!canRepairBuilding(focusedTile)\">\n          Repair\n          <div class=\"resource-list\">\n            <div matTooltip=\"{{focusedBuildingTile.repairCostPerPoint * (focusedTile.maxHealth - focusedTile.health)}} {{getResource(focusedBuildingTile.repairResourceEnum).name | titlecase}}\"\n              matTooltipPosition=\"below\">\n              <img src=\"{{getResource(focusedBuildingTile.repairResourceEnum).iconPath}}\" alt=\"{{getResource(focusedBuildingTile.repairResourceEnum).name}}\">\n              {{focusedBuildingTile.repairCostPerPoint * (focusedTile.maxHealth - focusedTile.health)}}\n            </div>\n          </div>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!focusedBuildingTile && focusedResourceTile\">\n    <mat-card-title>{{focusedResourceTile.name}}</mat-card-title>\n  </div>\n\n  <mat-card-content *ngIf=\"focusedTile\">\n    <div *ngIf=\"focusedResourceTile\" class=\"resource-list\">\n      Travel Time: {{focusedTile.buildingPath.length / this.mapService.tileAnimationSpeed / 1000 | longNumber}}\n      Seconds\n      <br />\n      Produces:\n      <div *ngFor=\"let resource of focusedResources\">\n        <img src=\"{{resource.iconPath}}\" alt=\"{{resource.name}}\"> {{resource.name | titlecase}}\n      </div>\n    </div>\n    <div *ngIf=\"focusedBuildingTile && focusedBuildingTile.upgradeBuilding\">\n      <h3>Upgrade</h3>\n      <button mat-raised-button (click)=\"upgradeBuilding(focusedTile)\" color=\"accent\" [disabled]=\"!canAffordUpgrade(this.mapService.buildingTiles.get(focusedBuildingTile.upgradeBuilding))\">\n        <div class=\"title\" matTooltip=\"{{this.mapService.buildingTiles.get(focusedBuildingTile.upgradeBuilding).description}}\"\n          matTooltipPosition=\"above\">\n          {{this.mapService.buildingTiles.get(focusedBuildingTile.upgradeBuilding).name}}\n        </div>\n        <div class=\"resource-list\">\n          <div *ngFor=\"let resourceCost of mapService.buildingTiles.get(focusedBuildingTile.upgradeBuilding).resourceCosts\"\n            matTooltip=\"{{resourceCost.resourceCost}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\n            matTooltipPosition=\"below\">\n            <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\n            {{resourceCost.resourceCost}}\n          </div>\n        </div>\n      </button>\n    </div>\n\n    <div *ngIf=\"focusedTile.market\">\n      Profit (Average of recent sales): {{focusedTile.market.averageRecentProfit | longNumber}} {{getResource('GOLD').name | titlecase}}/Second\n    </div>\n\n    <h3>Stats</h3>\n      <table class=\"stats-container\">\n        <tbody>\n          <tr class=\"stat-row\">\n            <td>\n              <p>\n                Max Health: {{focusedTile.maxHealth | longNumber}}\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedTile.statLevels['MAXHEALTH']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('MAXHEALTH')\"\n                [disabled]=\"!focusedTile.canUpgradeStat('MAXHEALTH')\" matTooltip=\"Level {{focusedTile.statLevels['MAXHEALTH'] + 1}}: {{focusedTile.getUpgradedStat('MAXHEALTH') | longNumber}} Max Health\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedTile.statCosts['MAXHEALTH'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\" *ngIf=\"focusedTile.market\">\n            <td>\n              <p>\n                Sell Rate: {{1000 / focusedTile.market.sellInterval | longNumber}} Sale{{focusedTile.market.sellInterval === 1000 ? '' : 's'}}/Second\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedTile.statLevels['SELLRATE']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('SELLRATE')\"\n                [disabled]=\"!focusedTile.canUpgradeStat('SELLRATE')\" matTooltip=\"Level {{focusedTile.statLevels['SELLRATE'] + 1}}: {{1000 / focusedTile.getUpgradedStat('SELLRATE') | longNumber}} Sales/Second\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedTile.statCosts['SELLRATE'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n\n          <tr class=\"stat-row\" *ngIf=\"focusedTile.market\">\n            <td>\n              <p>\n                Sell Amount: {{focusedTile.market.sellQuantity | longNumber}} Items/Sale\n              </p>\n            </td>\n            <td>\n              <b>\n                Level {{focusedTile.statLevels['SELLAMOUNT']}}\n              </b>\n            </td>\n            <td>\n              <button class=\"upgrade-button\" color=\"accent\" mat-raised-button (click)=\"focusedTile.upgradeStat('SELLAMOUNT')\"\n                [disabled]=\"!focusedTile.canUpgradeStat('SELLAMOUNT')\" matTooltip=\"Level {{focusedTile.statLevels['SELLAMOUNT'] + 1}}: {{focusedTile.getUpgradedStat('SELLAMOUNT') | longNumber}} Items/Sale\"\n                matTooltipPosition=\"below\">\n                <mat-icon color=\"primary\">arrow_upward</mat-icon>\n                <div class=\"resource-list\">\n                  <div>\n                    <img src=\"{{getResource('GOLD').iconPath}}\" alt=\"{{getResource('GOLD').name}}\">\n                    {{focusedTile.statCosts['SELLAMOUNT'] | longNumber}}\n                  </div>\n                </div>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n  </mat-card-content>\n</mat-card>\n"

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
        var tiles = Array.from(this.mapService.buildingTiles.values());
        if (filterByPlaceable) {
            tiles = tiles.filter(function (tile) { return tile.placeable; });
        }
        return tiles;
    };
    TileDetailComponent.prototype.canAffordBuilding = function (buildingType) {
        return this.buildingsService.canAffordBuilding(this.buildingTiles.get(buildingType));
    };
    TileDetailComponent.prototype.upgradeBuilding = function (tile) {
        var currentBuilding = this.mapService.buildingTiles.get(tile.buildingTileType);
        this.buildingsService.clearBuilding(tile);
        this.buildingsService.createBuilding(tile, currentBuilding.upgradeBuilding);
        this.focusedBuildingTile = this.mapService.buildingTiles.get(tile.buildingTileType);
        this.focusedResourceTile = this.mapService.resourceTiles.get(tile.resourceTileType);
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

module.exports = "/* UpgradesComponent's private CSS styles */\n.upgrades {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  /* width: 25em; */\n}\n.upgrades mat-expansion-panel {\n  margin: 0;\n}\n.upgrades mat-expansion-panel-header {\n  height: 30px !important;\n}\n.upgrades .full .title {\n  white-space: pre-line;\n\n  font-size: 24px;\n  font-weight: 400;\n  margin: 2px;\n}\n.upgrades mat-card-subtitle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-weight: bold;\n}\n.upgrades button {\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 4px;\n}\n.upgrades button:hover {\n  left: .1em;\n}\n.upgrades button.mat-disabled {\n  cursor: default;\n}\n.upgrades .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: absolute;\n  right: -9px;\n  top: 1px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: center;\n  margin-right: .8em;\n  border-radius: 0 4px 4px 0;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n.upgrades {\n  text-align: center;\n}\n.upgrades.slim-interface button {\n  width: auto;\n  height: auto;\n}\n.upgrade {\n  display: inline-block;\n  max-width: 300px;\n  width: 15vw;\n}\n.resource-list {\n  text-align: center;\n}\n.resource-list div {\n  display: inline-block;\n}\n.resource-list img {\n  width: 16px;\n  height: 16px;\n}\n"

/***/ }),

/***/ "./src/app/components/upgrades/upgrades.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/upgrades/upgrades.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-checkbox class=\"hidePurchased\" checked=\"true\" [(ngModel)]=\"hidePurchasedUpgrades\">Hide Purchased Upgrades</mat-checkbox>\n<br />\n<br />\n\n<mat-accordion multi=\"true\" class=\"upgrades\" [ngClass]=\"{'slim-interface': settingsService.slimInterface}\">\n  <mat-expansion-panel expanded=\"true\" *ngFor=\"let upgradeVariable of upgradeVariables | enumToArray\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        {{upgradeVariableNames[upgradeVariable]}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <div *ngIf=\"!settingsService.slimInterface\">\n      <mat-card class=\"upgrade full\" *ngFor=\"let upgrade of getUpgrades(false, hidePurchasedUpgrades, adminService.filterAccessible, undefined, upgradeVariable)\">\n        <button mat-raised-button color=\"accent\" [disabled]='upgrade.purchased || !canAffordUpgrade(upgrade.id)'\n          (click)='purchaseUpgrade(upgrade.id)'>\n          <p class=\"title\">\n            <b>\n              <mat-icon *ngIf=\"upgrade.purchased\" color=\"primary\">check</mat-icon>\n            </b>\n            {{upgrade.name}}\n          </p>\n        </button>\n        <mat-card-subtitle>{{upgradesService.getUpgradeTypeString(upgrade.id)}}</mat-card-subtitle>\n        <mat-card-content>\n          {{upgrade.description}}\n          <div class=\"resource-list\">\n            <div *ngFor=\"let resourceCost of upgrade.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost | longNumber}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\n              matTooltipPosition=\"below\">\n              <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\n              {{resourceCost.resourceCost | longNumber}}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <div *ngIf=\"settingsService.slimInterface\">\n      <button class=\"slim\" mat-raised-button *ngFor=\"let upgrade of getUpgrades(false, hidePurchasedUpgrades, adminService.filterAccessible, undefined, upgradeVariable)\"\n        color=\"accent\" [disabled]='upgrade.purchased || !canAffordUpgrade(upgrade.id)' (click)='purchaseUpgrade(upgrade.id)'>\n        <div class=\"title\" matTooltip=\"{{upgrade.description}}\" matTooltipPosition=\"above\">\n          <b>\n            <mat-icon *ngIf=\"upgrade.purchased\" color=\"primary\">check</mat-icon>\n          </b>\n          {{upgrade.name}}\n        </div>\n        <div class=\"resource-list\">\n          <div *ngFor=\"let resourceCost of upgrade.resourceCosts\" matTooltip=\"{{resourceCost.resourceCost | longNumber}} {{getResource(resourceCost.resourceEnum).name | titlecase}}\"\n            matTooltipPosition=\"below\">\n            <img src=\"{{getResource(resourceCost.resourceEnum).iconPath}}\" alt=\"{{getResource(resourceCost.resourceEnum).name}}\">\n            {{resourceCost.resourceCost | longNumber}}\n          </div>\n        </div>\n      </button>\n    </div>\n  </mat-expansion-panel>\n</mat-accordion>\n"

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
        this.upgradeVariables = _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"];
        this.upgradeVariableNames = _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["Upgrade"].UpgradeVariableNames;
    }
    UpgradesComponent.prototype.ngOnInit = function () {
    };
    UpgradesComponent.prototype.canAffordUpgrade = function (id) {
        return this.upgradesService.getUpgrade(id).canAfford();
    };
    UpgradesComponent.prototype.getUpgrades = function (filterByPurchased, filterByUnpurchased, filterByAccessible, upgradeType, upgradeVariable) {
        return this.upgradesService.getUpgrades(filterByPurchased, filterByUnpurchased, filterByAccessible, _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeType"][upgradeType], _objects_upgrade__WEBPACK_IMPORTED_MODULE_2__["UpgradeVariable"][upgradeVariable]);
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

module.exports = "/* WorkersComponent's private CSS styles */\n.workers {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.workers mat-expansion-panel {\n  margin: 0;\n}\n.workers mat-expansion-panel-header {\n  height: 30px !important;\n}\n.workers mat-card-title {\n  text-align: left;\n}\n.workers mat-card-subtitle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.workers mat-slider {\n  width: 100%;\n  top: -22px;\n}\n.workers mat-card {\n  position: relative;\n  margin: .5em;\n  padding: .4em 0;\n  height: 3.6em;\n  width: 100%;\n  border-radius: 4px;\n  background: antiquewhite;\n}\n.workers mat-card.hunger-card {\n  height: 1.3em;\n  width: 95%;\n}\n.hunger-card mat-card-title {\n  font-size: 18px;\n}\n.hunger-card mat-progress-bar {\n  position: absolute;\n  top: 0;\n\n  height: 100%;\n  opacity: 0.5;\n}\n.workers button {\n  position: relative;\n  cursor: pointer;\n  margin: .5em;\n  padding: .4em 0;\n  height: 3.6em;\n  width: 100%;\n  border-radius: 4px;\n}\n.workers button:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.workers a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.workers a:hover {\n  color:#607D8B;\n}\n.workers .harvestable {\n  background-color: antiquewhite;\n}\n.worker-input {\n  width: 50px;\n  border: none;\n}\n.mat-card-subtitle {\n  z-index: 1;\n}\n.workers .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: absolute;\n  right: -9px;\n  top: 1px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: center;\n  margin-right: .8em;\n  border-radius: 0 4px 4px 0;\n}\n.path-broken-warn {\n  position: absolute;\n  top: 5px;\n  right: 125px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/components/workers/workers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/workers/workers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"workers\">\n  <mat-checkbox [(ngModel)]=\"workersPaused\" color=\"accent\">Pause Workers</mat-checkbox>\n\n  <mat-card class=\"hunger-card\">\n    <mat-card-title>\n      Food Supply - {{foodStockpile | longNumber}}/{{foodCapacity | longNumber}}\n    </mat-card-title>\n    <mat-progress-bar mode=\"determinate\" [value]=\"foodPercentage\" [color]=\"foodPercentage < 20 ? 'warn' : 'accent'\"></mat-progress-bar>\n  </mat-card>\n\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel expanded=\"true\" *ngFor=\"let worker of getWorkers(true, true, true)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{worker.resourceType | titlecase}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <button mat-raised-button [color]=\"worker.canAffordToHire() ? 'accent' : 'disabled'\" (click)=\"worker.hireWorker()\">\n        <mat-card-title>{{worker.workerCount}} Workers ({{worker.freeWorkers}} Idle)</mat-card-title>\n        <mat-card-subtitle>{{worker.cost | longNumber}} Gold</mat-card-subtitle>\n      </button>\n\n      <div *ngFor=\"let resourceWorker of getAccessibleResourceWorkers(worker)\">\n        <mat-card [ngClass]=\"{'resource-disabled': !canHarvest(resourceWorker.resourceEnum)}\"\n        *ngIf=\"shouldShowResource(resourceWorker.resourceEnum)\" matTooltip=\"{{getTooltipMessage(resourceWorker.resourceEnum)}}\" matTooltipPosition=\"right\">\n          <mat-card-title [style.color]=\"canHarvest(resourceWorker.resourceEnum) ? 'black' : 'red'\">\n            {{getResource(resourceWorker.resourceEnum).name | titlecase}}\n          </mat-card-title>\n          <div class=\"path-broken-warn\" *ngIf=\"!pathAvailable(resourceWorker.resourceEnum)\">(Path Broken)</div>\n          <mat-card-subtitle>\n            Workers: <input class=\"worker-input\" type=\"number\" min=\"0\" [max]=\"worker.workerCount\"\n              [(ngModel)]=\"resourceWorker.sliderSetting\" (input)=\"checkSliderValue(resourceWorker.resourceEnum)\" (change)=\"updateResourceWorker(resourceWorker.resourceEnum, resourceWorker.sliderSetting)\"/>\n          </mat-card-subtitle>\n          <mat-slider [color]=\"resourceWorker.sliderSettingValid ? 'accent' : 'warn'\" [id]=\"resourceWorker.resourceEnum\" [max]=\"worker.workerCount\"\n              [tickInterval]=\"1\" [(ngModel)]=\"resourceWorker.sliderSetting\" (input)=\"checkSliderValue($event)\" (change)=\"updateResourceWorker($event)\">\n          </mat-slider>\n        </mat-card>\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ul>\n"

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
    Object.defineProperty(WorkersComponent.prototype, "foodStockpile", {
        get: function () {
            return this.workersService.foodStockpile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkersComponent.prototype, "foodCapacity", {
        get: function () {
            return this.workersService.foodCapacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkersComponent.prototype, "foodPercentage", {
        get: function () {
            return Math.floor(this.workersService.foodStockpile / this.workersService.foodCapacity * 100);
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
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _objects_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/vector */ "./src/app/objects/vector.ts");
/* harmony import */ var _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/resources/resources.service */ "./src/app/services/resources/resources.service.ts");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/settings/settings.service */ "./src/app/services/settings/settings.service.ts");
/* harmony import */ var _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/enemy/enemy.service */ "./src/app/services/enemy/enemy.service.ts");
/* harmony import */ var _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/fighter/fighter.service */ "./src/app/services/fighter/fighter.service.ts");
/* harmony import */ var _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/buildings/buildings.service */ "./src/app/services/buildings/buildings.service.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/map/map.service */ "./src/app/services/map/map.service.ts");
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
        this.lowFramerateActive = false;
    }
    MapDirective.prototype.ngAfterViewInit = function () {
        this.canvas = d3.select('canvas#map');
        this.context = this.canvas.node().getContext('2d');
        this.canvasContainer = document.getElementById('map-canvas-container');
        this.tileTooltip = document.getElementById('tile-tooltip');
        this.fighterTooltip = document.getElementById('fighter-tooltip');
        this.context.font = 'bold 4px Arial';
        this.resizeCanvas();
        this.canvas.call(d3.zoom()
            .filter(this.scrollFilter(this))
            .scaleExtent([1, 5])
            .translateExtent([[0, 0], [this.mapService.chunkWidth * this.mapService.tilePixelSize * this.mapService.totalChunkX,
                this.mapService.chunkHeight * this.mapService.tilePixelSize * this.mapService.totalChunkY]])
            .on('zoom', this.zoomed(this)));
        this.canvas.on('mousedown mousemove mouseup', this.clickTile(this));
        this.refreshTimer = d3.interval(this.refreshCanvas(this), 25);
        var homeTile = this.mapService.tileMap.find(function (tile) { return tile && tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_1__["BuildingTileType"].Home; });
        this.mapService.setCameraCenter(homeTile.position.multiply(-1));
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
                            tile = self.mapService.getTile(coordinates[0], coordinates[1]);
                            shouldUpdateEnemies = false;
                            if (d3.event.type === 'mousedown' && self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].TileDetail) {
                                self.updateTileTooltip(coordinates);
                            }
                            else if (d3.event.type === 'mousedown' && self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].FighterDetail) {
                                self.updateFighterTooltip(coordinates);
                            }
                            else if (self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].PlaceBuildings && self.buildingsService.selectedBuilding) {
                                buildingCreated = self.buildingsService.createBuilding(tile, self.buildingsService.selectedBuilding.tileType);
                                shouldUpdateEnemies = d3.event.type === 'mouseup' && buildingCreated;
                            }
                            else if (self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].ClearBuildings) {
                                buildingCleared = self.buildingsService.clearBuilding(tile);
                                shouldUpdateEnemies = d3.event.type === 'mouseup' && buildingCleared;
                            }
                            else if (d3.event.type === 'mousedown' &&
                                self.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].PlaceFighters && self.fighterService.selectedFighterType) {
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
        var focusedTile = this.mapService.getTile(coordinates[0], coordinates[1]);
        if (focusedTile.buildingTileType || focusedTile.resourceTileType) {
            this.mapService.focusedTile = focusedTile;
            this.mapService.focusedBuildingTile = this.mapService.buildingTiles.get(focusedTile.buildingTileType);
            this.mapService.focusedResourceTile = this.mapService.resourceTiles.get(focusedTile.resourceTileType);
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
        var focusedTile = this.mapService.getTile(coordinates[0], coordinates[1]);
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
        this.canvasPixelWidth = this.canvasContainer.clientWidth;
        this.canvasPixelHeight = window.innerHeight - this.headerPixels;
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
            self.context.clearRect(0, 0, self.canvasPixelWidth, self.canvasPixelHeight);
            self.context.translate(self.transform.x, self.transform.y);
            self.context.scale(self.transform.k, self.transform.k);
            self.drawCanvas();
            self.context.restore();
        };
    };
    MapDirective.prototype.drawCanvas = function () {
        var cameraBounds = this.mapService.getMapCameraBounds(5);
        var upperLeftTile = [Math.max(0, Math.floor(cameraBounds[0].x / this.mapService.tilePixelSize)),
            Math.max(0, Math.floor(cameraBounds[0].y / this.mapService.tilePixelSize))];
        var lowerRightTile = [Math.floor(cameraBounds[1].x / this.mapService.tilePixelSize),
            Math.floor(cameraBounds[1].y / this.mapService.tilePixelSize)];
        for (var y = upperLeftTile[1]; y <= lowerRightTile[1]; y++) {
            for (var x = upperLeftTile[0]; x <= lowerRightTile[0]; x++) {
                var tile = this.mapService.getTile(x, y);
                if (!tile) {
                    continue;
                }
                var mapTileName = tile.mapTileType.toLowerCase();
                this.drawTile(tile.position, mapTileName);
                if (tile.buildingTileType) {
                    var buildingTileName = tile.buildingTileType.toLowerCase();
                    this.drawTile(tile.position, buildingTileName);
                }
                if (tile.resourceTileType) {
                    var resourceTileName = tile.resourceTileType.toLowerCase().replace(' ', '-');
                    this.drawTile(tile.position, resourceTileName, 1, tile.health / tile.maxHealth);
                }
                if (tile.health === 0) {
                    this.context.globalAlpha = 0.5;
                    this.drawTile(tile.position, 'disabled');
                    this.context.globalAlpha = 1;
                }
                else if (tile.buildingTileType && !tile.buildingRemovable && this.mapService.cursorTool === _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["CursorTool"].ClearBuildings) {
                    this.context.globalAlpha = 0.5;
                    this.drawTile(tile.position, 'locked');
                    this.context.globalAlpha = 1;
                }
            }
        }
        for (var _i = 0, _a = this.mapService.resourceAnimations; _i < _a.length; _i++) {
            var resourceAnimation = _a[_i];
            var resourceTileName = this.resourcesService.resources.get(resourceAnimation.resourceEnum).name.toLowerCase().replace(/ /g, '-');
            this.drawTile(resourceAnimation.position, resourceTileName, 0.5);
            this.context.fillStyle = this.settingsService.resourceAnimationColors[resourceAnimation.animationType];
            this.context.fillText(Math.floor(resourceAnimation.multiplier).toString(), resourceAnimation.x + this.mapService.tilePixelSize / 2, resourceAnimation.y + this.mapService.tilePixelSize / 2);
        }
        for (var _b = 0, _c = this.enemyService.enemies; _b < _c.length; _b++) {
            var enemy = _c[_b];
            var enemyTileName = enemy.name.toLowerCase().replace(' ', '-');
            this.drawTile(enemy.position, enemyTileName, 1, enemy.health / enemy.maxHealth);
        }
        for (var _d = 0, _e = this.fighterService.fighters; _d < _e.length; _d++) {
            var fighter = _e[_d];
            var fighterTileName = fighter.name.toLowerCase().replace(' ', '-');
            this.drawTile(fighter.position, fighterTileName, 1, fighter.health / fighter.maxHealth);
        }
        for (var _f = 0, _g = this.mapService.projectiles; _f < _g.length; _f++) {
            var projectile = _g[_f];
            var projectileTileName = projectile.name.toLowerCase().replace(' ', '-');
            this.context.translate(projectile.x, projectile.y);
            this.context.rotate(projectile.rotation);
            this.drawTile(new _objects_vector__WEBPACK_IMPORTED_MODULE_2__["Vector"](-this.mapService.tilePixelSize / 2, -this.mapService.tilePixelSize / 2), projectileTileName);
            this.context.rotate(-projectile.rotation);
            this.context.translate(-projectile.x, -projectile.y);
        }
        if (this.mapService.focusedTile) {
            var tooltipPosition = this.getTooltipPosition(this.mapService.focusedTile.position);
            this.tileTooltip.style.setProperty('--detail-tooltip-left', tooltipPosition.x + 'px');
            this.tileTooltip.style.setProperty('--detail-tooltip-top', tooltipPosition.y + 'px');
            this.context.globalAlpha = 0.5;
            this.context.fillStyle = 'cyan';
            for (var _h = 0, _j = this.mapService.focusedTile.buildingPath; _h < _j.length; _h++) {
                var pathTile = _j[_h];
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
        return new _objects_vector__WEBPACK_IMPORTED_MODULE_2__["Vector"]((targetPosition.x + this.mapService.tilePixelSize) * this.transform.k + this.transform.x, targetPosition.y * this.transform.k + this.transform.y - this.tileTooltip.clientHeight);
    };
    MapDirective.prototype.drawTile = function (position, imageName, scale, healthRatio) {
        if (scale === void 0) { scale = 1; }
        if (healthRatio === void 0) { healthRatio = 1; }
        var imageElements = this.mapService.imageElements;
        var image = imageElements[imageName] ? imageElements[imageName] : imageElements['placeholder'];
        this.context.drawImage(image, position.x, position.y, this.mapService.tilePixelSize * scale, this.mapService.tilePixelSize * scale);
        if (healthRatio > 0 && healthRatio < 1) {
            this.context.fillStyle = 'red';
            this.context.fillRect(position.x, position.y + this.mapService.tilePixelSize, this.mapService.tilePixelSize * healthRatio, -2);
            this.context.fillStyle = 'black';
            this.context.strokeRect(position.x, position.y + this.mapService.tilePixelSize, this.mapService.tilePixelSize, -2);
        }
    };
    Object.defineProperty(MapDirective.prototype, "transform", {
        get: function () {
            return this.mapService.transform;
        },
        set: function (value) {
            this.mapService.transform = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapDirective.prototype, "canvasPixelWidth", {
        get: function () {
            return this.mapService.canvasPixelWidth;
        },
        set: function (value) {
            this.mapService.canvasPixelWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapDirective.prototype, "canvasPixelHeight", {
        get: function () {
            return this.mapService.canvasPixelHeight;
        },
        set: function (value) {
            this.mapService.canvasPixelHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    MapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_resources_resources_service__WEBPACK_IMPORTED_MODULE_3__["ResourcesService"],
            _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _services_enemy_enemy_service__WEBPACK_IMPORTED_MODULE_5__["EnemyService"],
            _services_fighter_fighter_service__WEBPACK_IMPORTED_MODULE_6__["FighterService"],
            _services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_7__["BuildingsService"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_8__["MapService"]])
    ], MapDirective);
    return MapDirective;
}());



/***/ }),

/***/ "./src/app/directives/minimap/minimap.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/minimap/minimap.directive.ts ***!
  \*********************************************************/
/*! exports provided: MinimapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimapDirective", function() { return MinimapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/tile */ "./src/app/objects/tile.ts");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var src_app_objects_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/objects/vector */ "./src/app/objects/vector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MinimapDirective = /** @class */ (function () {
    function MinimapDirective(element, renderer, mapService) {
        this.element = element;
        this.renderer = renderer;
        this.mapService = mapService;
    }
    MinimapDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.backgroundCanvas = d3.select('canvas#minimap_background');
        this.foregroundCanvas = d3.select('canvas#minimap_foreground');
        this.backgroundContext = this.backgroundCanvas.node().getContext('2d');
        this.foregroundContext = this.foregroundCanvas.node().getContext('2d');
        this.canvasContainer = document.getElementById('minimap-canvas-container');
        this.renderMinimapBackground();
        this.mapService.onMapUpdate.subscribe(function (_) { return _this.renderMinimapBackground(); });
        this.foregroundCanvas.call(d3.zoom()
            .filter(this.scrollFilter(this))
            .scaleExtent([1, 5])
            .translateExtent([[0, 0], [this.mapService.chunkWidth * this.mapService.tilePixelSize * this.mapService.totalChunkX,
                this.mapService.chunkHeight * this.mapService.tilePixelSize * this.mapService.totalChunkY]])
            .on('zoom', this.zoomed(this)));
        this.foregroundCanvas.on('mousedown mousemove', this.clickTile(this));
        this.refreshTimer = d3.interval(this.renderMinimapForeground(this), 25);
    };
    MinimapDirective.prototype.scrollFilter = function (self) {
        return function (elapsed) {
            return d3.event.type !== 'dblclick' && (d3.event.type !== 'mousedown' || d3.event.button === 2);
        };
    };
    MinimapDirective.prototype.zoomed = function (self) {
        return function (elapsed) {
        };
    };
    MinimapDirective.prototype.clickTile = function (self) {
        return function (elapsed) {
            if (!d3.event.buttons) {
                return;
            }
            var coordinates = d3.mouse(this);
            coordinates[0] *= -self.mapService.tilePixelSize * self.transform.k;
            coordinates[1] *= -self.mapService.tilePixelSize * self.transform.k;
            self.mapService.setCameraCenter(new src_app_objects_vector__WEBPACK_IMPORTED_MODULE_3__["Vector"](coordinates[0], coordinates[1]));
        };
    };
    MinimapDirective.prototype.renderMinimapBackground = function () {
        if (!this.backgroundCanvas) {
            return;
        }
        this.backgroundCanvas.attr('width', this.canvasContainer.clientWidth);
        this.backgroundCanvas.attr('height', this.canvasContainer.clientHeight);
        for (var _i = 0, _a = this.mapService.tileMap; _i < _a.length; _i++) {
            var tile = _a[_i];
            if (!tile) {
                continue;
            }
            var biome = this.mapService.getBiome(tile.noiseValue);
            switch (biome) {
                case _objects_tile__WEBPACK_IMPORTED_MODULE_1__["MapTileType"].Water: {
                    this.backgroundContext.fillStyle = 'aqua';
                    break;
                }
                case _objects_tile__WEBPACK_IMPORTED_MODULE_1__["MapTileType"].Grass: {
                    this.backgroundContext.fillStyle = "rgb(" + 200 * tile.noiseValue + ", 255, " + 200 * tile.noiseValue + ")";
                    break;
                }
                case _objects_tile__WEBPACK_IMPORTED_MODULE_1__["MapTileType"].Mountain: {
                    this.backgroundContext.fillStyle = "rgb(" + 100 * tile.noiseValue + ", " + 100 * tile.noiseValue + ", " + 100 * tile.noiseValue + ")";
                }
            }
            this.backgroundContext.fillRect(tile.x / this.mapService.tilePixelSize, tile.y / this.mapService.tilePixelSize, 1, 1);
        }
    };
    MinimapDirective.prototype.renderMinimapForeground = function (self) {
        return function (elapsed) {
            if (!self.foregroundCanvas) {
                return;
            }
            self.foregroundCanvas.attr('width', self.canvasContainer.clientWidth);
            self.foregroundCanvas.attr('height', self.canvasContainer.clientHeight);
            var homeTile = self.mapService.tileMap.find(function (tile) { return tile && tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_1__["BuildingTileType"].Home; });
            self.foregroundContext.clearRect(0, 0, self.element.nativeElement.width, self.element.nativeElement.height);
            if (homeTile) {
                var homeImage = self.mapService.imageElements['home'];
                self.foregroundContext.drawImage(homeImage, homeTile.x / self.mapService.tilePixelSize - 8, homeTile.y / self.mapService.tilePixelSize - 8, 16, 16);
            }
            var mapCameraBounds = self.mapService.getMapCameraBounds();
            self.foregroundContext.fillStyle = 'gray';
            self.foregroundContext.globalAlpha = 0.5;
            self.foregroundContext.strokeRect(mapCameraBounds[0].x / self.mapService.tilePixelSize, mapCameraBounds[0].y / self.mapService.tilePixelSize, (mapCameraBounds[1].x - mapCameraBounds[0].x) / self.mapService.tilePixelSize, (mapCameraBounds[1].y - mapCameraBounds[0].y) / self.mapService.tilePixelSize);
            self.foregroundContext.fillStyle = 'violet';
            self.foregroundContext.fillRect(mapCameraBounds[0].x / self.mapService.tilePixelSize, mapCameraBounds[0].y / self.mapService.tilePixelSize, (mapCameraBounds[1].x - mapCameraBounds[0].x) / self.mapService.tilePixelSize, (mapCameraBounds[1].y - mapCameraBounds[0].y) / self.mapService.tilePixelSize);
        };
    };
    Object.defineProperty(MinimapDirective.prototype, "transform", {
        get: function () {
            return this.mapService.transform;
        },
        set: function (value) {
            this.mapService.transform = value;
        },
        enumerable: true,
        configurable: true
    });
    MinimapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMinimap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _services_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], MinimapDirective);
    return MinimapDirective;
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
    SnapDirective.prototype.onMouseMove = function () {
        if (this.snapSetting !== 'free') {
            return;
        }
        var nativeElement = this.element.nativeElement;
        var containerElement = this.element.nativeElement.parentElement.parentElement;
        if (nativeElement.offsetTop < 0) {
            nativeElement.style.top = 0;
        }
        else if (nativeElement.offsetTop + nativeElement.clientHeight > containerElement.clientHeight) {
            nativeElement.style.top = containerElement.clientHeight - nativeElement.clientHeight;
        }
        else {
            nativeElement.style.top = 'var(--detail-tooltip-top)';
        }
        if (nativeElement.offsetLeft < 0) {
            nativeElement.style.left = 0;
        }
        else if (nativeElement.offsetLeft + nativeElement.clientWidth > containerElement.clientWidth) {
            nativeElement.style.left = containerElement.clientWidth - nativeElement.clientWidth;
        }
        else {
            nativeElement.style.left = 'var(--detail-tooltip-left)';
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SnapDirective.prototype, "onMouseMove", null);
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
        _this.timeSinceSpawn = 0;
        _this.lifeSpan = 5000;
        _this.owner = owner;
        _this.target = target;
        return _this;
    }
    Projectile.prototype.tick = function (elapsed, deltaTime) {
        this.timeSinceSpawn += deltaTime;
        if (this.timeSinceSpawn > this.lifeSpan || !this.target || !this.target.health) {
            this.hitTarget = true;
            return;
        }
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
    function Resource(name, resourceType, resourceEnum, iconPath, resourceConsumes, harvestable, harvestYield, harvestMilliseconds, sellable, sellsFor, resourceDescription, workerVerb, workerNoun, resourceTier, edible, foodMultiplier, resourcesService) {
        if (harvestYield === void 0) { harvestYield = 1; }
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
        this.edible = false;
        this.foodMultiplier = 1;
        this.resourceBeingStolen = false;
        this.name = name;
        this.resourceType = resourceType;
        this.resourceEnum = resourceEnum;
        this.iconPath = iconPath;
        this.resourceConsumes = resourceConsumes;
        this.harvestable = harvestable;
        this.harvestYield = harvestYield;
        this.harvestMilliseconds = harvestMilliseconds;
        this.pathAvailable = false;
        this.sellable = sellable;
        this.sellsFor = sellsFor;
        this.resourceDescription = resourceDescription;
        this.workerVerb = workerVerb;
        this.workerNoun = workerNoun;
        this.resourceTier = resourceTier;
        this.edible = edible;
        this.foodMultiplier = foodMultiplier;
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
    ResourceType["Food"] = "FOOD";
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
    ResourceEnum["Wheat"] = "WHEAT";
    ResourceEnum["Bread"] = "BREAD";
    ResourceEnum["RawPotato"] = "RAWPOTATO";
    ResourceEnum["Potato"] = "POTATO";
    ResourceEnum["Rice"] = "RICE";
    ResourceEnum["JellyDonut"] = "JELLYDONUT";
    ResourceEnum["RawHerring"] = "RAWHERRING";
    ResourceEnum["Herring"] = "HERRING";
    ResourceEnum["RawBass"] = "RAWBASS";
    ResourceEnum["Bass"] = "BASS";
    ResourceEnum["RawShark"] = "RAWSHARK";
    ResourceEnum["Shark"] = "SHARK";
    ResourceEnum["RawChicken"] = "RAWCHICKEN";
    ResourceEnum["Chicken"] = "CHICKEN";
    ResourceEnum["RawSteak"] = "RAWSTEAK";
    ResourceEnum["Steak"] = "STEAK";
    ResourceEnum["RawDragonMeat"] = "RAWDRAGONMEAT";
    ResourceEnum["DragonMeat"] = "DRAGONMEAT";
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
    ResourceTileType["WheatFarm"] = "WHEATFARM";
    ResourceTileType["RawPotatoFarm"] = "RAWPOTATOFARM";
    ResourceTileType["RiceFarm"] = "RICEFARM";
    ResourceTileType["FishingSpot"] = "FISHINGSPOT";
    ResourceTileType["OakOven"] = "OAKOVEN";
    ResourceTileType["StoneOven"] = "STONEOVEN";
    ResourceTileType["MarbleOven"] = "MARBLEOVEN";
    ResourceTileType["TemprousOven"] = "TEMPROUSOVEN";
    ResourceTileType["ChickenFarm"] = "CHICKENFARM";
    ResourceTileType["CowFarm"] = "COWFARM";
    ResourceTileType["DragonFarm"] = "DRAGONFARM";
})(ResourceTileType || (ResourceTileType = {}));
var BuildingTileType;
(function (BuildingTileType) {
    BuildingTileType["Wall"] = "WALL";
    BuildingTileType["Road"] = "ROAD";
    BuildingTileType["Home"] = "HOME";
    BuildingTileType["Bridge"] = "BRIDGE";
    BuildingTileType["Tunnel"] = "TUNNEL";
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
    BuildingTileType["OakOven"] = "OAKOVEN";
    BuildingTileType["StoneOven"] = "STONEOVEN";
    BuildingTileType["MarbleOven"] = "MARBLEOVEN";
    BuildingTileType["TemprousOven"] = "TEMPROUSOVEN";
    BuildingTileType["ChickenFarm"] = "CHICKENFARM";
    BuildingTileType["CowFarm"] = "COWFARM";
    BuildingTileType["DragonFarm"] = "DRAGONFARM";
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
    function Tile(id, mapTileType, resourceTileType, buildingTileType, buildingRemovable, position, tileCropDetail, health, noiseValue, resourcesService) {
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
        this.noiseValue = noiseValue;
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
        this.homeTile = mapService.tileMap.filter(function (tile) { return tile.buildingTileType === BuildingTileType.Home; })[0];
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
    Upgrade.prototype.applyUpgrade = function (applySilently) {
        var _this = this;
        if (applySilently === void 0) { applySilently = false; }
        var _loop_1 = function (upgradeEffect) {
            if (upgradeEffect.upgradeVariable === UpgradeVariable.WorkerCost) {
                this_1.workersService.workers.get(upgradeEffect.resourceType).cost *= upgradeEffect.upgradeFactor;
                return "continue";
            }
            var resourcesToUpgrade = [];
            var workersToUpgrade = [];
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
            else {
                resourcesToUpgrade.push(this_1.resourcesService.resources.get(upgradeEffect.resourceEnum));
                workersToUpgrade.push(this_1.workersService.getResourceWorker(upgradeEffect.resourceEnum));
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
        if (!applySilently) {
            this.log('Purchased upgrade: ' + this.name);
        }
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
    Upgrade.UpgradeVariableNames = {
        'HARVESTABILITY': 'Harvestability',
        'HARVEST_YIELD': 'Harvest Yield',
        'HARVEST_MILLISECONDS': 'Harvest Time',
        'WORKABLE': 'Workability',
        'WORKER_YIELD': 'Worker Yield',
        'WORKER_COST': 'Worker Cost',
        'Harvestability': 'Harvestability',
        'HarvestYield': 'Harvest Yield',
        'HarvestMilliseconds': 'Harvest Time',
        'Workable': 'Workability',
        'WorkerYield': 'Worker Yield',
        'WorkerCost': 'Worker Cost'
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
    Vector.prototype.multiply = function (scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
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
    function Worker(cost, resourceType, resourceWorkers, priorityOrder, workersService, resourcesService, mapService, messagesService) {
        if (priorityOrder === void 0) { priorityOrder = 0; }
        this.workerCount = 0;
        this.freeWorkers = 0;
        this.minimumInterval = 1000;
        this.priorityOrder = 0;
        this.cost = cost;
        this.resourceType = resourceType;
        this.resourceWorkers = resourceWorkers;
        this.priorityOrder = priorityOrder;
        this.workersService = workersService;
        this.resourcesService = resourcesService;
        this.mapService = mapService;
        this.messagesService = messagesService;
    }
    Worker.prototype.tick = function (elapsed, deltaTime) {
        for (var _i = 0, _a = this.getResourceWorkers(); _i < _a.length; _i++) {
            var resourceWorker = _a[_i];
            var resource = this.resourcesService.resources.get(resourceWorker.resourceEnum);
            if (resourceWorker.workerCount === 0 || elapsed - resourceWorker.lastHarvestTime < this.getWorkInterval(resource) ||
                !this.canAffordToHarvest(resource.resourceEnum)) {
                continue;
            }
            var workerOutput = resourceWorker.workerYield * resourceWorker.workerCount;
            if (resource.harvestMilliseconds < this.minimumInterval) {
                workerOutput *= this.minimumInterval / resource.harvestMilliseconds;
            }
            var amountToConsume = resourceWorker.recurringCost * resourceWorker.workerCount;
            this.workersService.foodStockpile -= amountToConsume;
            if (this.workersService.foodStockpile < 0) {
                var foodConsumed = amountToConsume + this.workersService.foodStockpile;
                workerOutput *= (foodConsumed / amountToConsume);
                this.workersService.foodStockpile = 0;
            }
            if (!this.canAffordToHarvest(resource.resourceEnum)) {
                this.log("No more food available for " + resource.name + ".");
            }
            this.mapService.spawnHarvestedResourceAnimation(resource, workerOutput, false);
            resourceWorker.lastHarvestTime = elapsed;
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
        return this.resourceWorkers.get(resourceEnum).recurringCost <= this.workersService.foodStockpile;
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
    Worker.prototype.getWorkInterval = function (resource) {
        return Math.max(resource.harvestMilliseconds, this.minimumInterval);
    };
    Worker.prototype.log = function (message) {
        this.messagesService.add(_message__WEBPACK_IMPORTED_MODULE_1__["MessageSource"].Workers, message);
    };
    return Worker;
}());



/***/ }),

/***/ "./src/app/pipes/enumtoarraypipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/enumtoarraypipe.ts ***!
  \******************************************/
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

/***/ "./src/app/pipes/long-number-pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/long-number-pipe.ts ***!
  \*******************************************/
/*! exports provided: LongNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongNumberPipe", function() { return LongNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LongNumberPipe = /** @class */ (function () {
    function LongNumberPipe() {
        this.shortScaleNames = ['Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion',
            'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quattuordecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion',
            'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Centillion'];
    }
    LongNumberPipe.prototype.transform = function (data, decimalsShown) {
        if (decimalsShown === void 0) { decimalsShown = 0; }
        if (data < 1000000) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(data, 'en-US', "1.0-" + decimalsShown);
        }
        var nameIndex = -2;
        while (Math.abs(data) > 1000) {
            data /= 1000;
            nameIndex++;
        }
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatNumber"])(data, 'en-US', '1.0-3') + " " + this.shortScaleNames[nameIndex];
    };
    LongNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'longNumber'
        })
    ], LongNumberPipe);
    return LongNumberPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enumtoarraypipe */ "./src/app/pipes/enumtoarraypipe.ts");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__["EnumToPipe"]],
            exports: [_enumtoarraypipe__WEBPACK_IMPORTED_MODULE_2__["EnumToPipe"]]
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
        this.totalBuildingsPlaced = new Map();
    }
    BuildingsService.prototype.createBuilding = function (tile, buildingType) {
        var buildingTile = this.mapService.buildingTiles.get(buildingType);
        if (tile.buildingTileType !== undefined ||
            tile.resourceTileType !== undefined ||
            !buildingTile.buildableSurfaces.some(function (bs) { return bs === tile.mapTileType; }) ||
            !this.canAffordBuilding(buildingTile)) {
            return false;
        }
        if (!this.totalBuildingsPlaced.has(buildingType)) {
            this.totalBuildingsPlaced.set(buildingType, 1);
        }
        else {
            this.totalBuildingsPlaced.set(buildingType, this.totalBuildingsPlaced.get(buildingType) + 1);
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
        this.mapService.updatePaths(tile, true);
        return true;
    };
    BuildingsService.prototype.canAffordBuilding = function (buildingTile) {
        if (buildingTile.maxPlaceable > 0 && this.totalBuildingsPlaced.get(buildingTile.tileType) >= buildingTile.maxPlaceable) {
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
        if (!this.totalBuildingsPlaced.has(tile.buildingTileType)) {
            this.totalBuildingsPlaced.set(tile.buildingTileType, 0);
        }
        else {
            this.totalBuildingsPlaced.set(tile.buildingTileType, this.totalBuildingsPlaced.get(tile.buildingTileType) - 1);
        }
        var buildingTile = this.mapService.buildingTiles.get(tile.buildingTileType);
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
        this.mapService.updatePaths(tile, true);
        return true;
    };
    BuildingsService.prototype.canRepairBuilding = function (tile) {
        var buildingTile = this.mapService.buildingTiles.get(tile.buildingTileType);
        var repairResource = this.resourcesService.resources.get(buildingTile.repairResourceEnum);
        return repairResource.amount >= buildingTile.repairCostPerPoint * (tile.maxHealth - tile.health);
    };
    BuildingsService.prototype.repairBuilding = function (tile) {
        if (!this.canRepairBuilding(tile)) {
            return;
        }
        var buildingTile = this.mapService.buildingTiles.get(tile.buildingTileType);
        var healAmount = tile.maxHealth - tile.health;
        var repairResource = this.resourcesService.resources.get(buildingTile.repairResourceEnum);
        repairResource.addAmount(-buildingTile.repairCostPerPoint * healAmount);
        tile.health = tile.maxHealth;
        this.mapService.updatePaths(tile, true);
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
        this.openPortal();
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
        this.mapService.findPath(enemy.currentTile, enemy.targets[enemy.targetIndex].tile, false, true).subscribe(function (tilePath) {
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
    EnemyService.prototype.openPortal = function () {
        for (var _i = 0, _a = this.mapService.tileMap.filter(function (_tile) { return _tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].EnemyPortal; }); _i < _a.length; _i++) {
            var existingTile = _a[_i];
            existingTile.buildingTileType = undefined;
        }
        var tile = this.mapService.getRandomTile([_objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass]);
        tile.buildingTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].EnemyPortal;
        this.activePortalTile = tile;
    };
    EnemyService.prototype.getTilePosition = function (enemy) {
        var x = Math.floor(enemy.x / this.mapService.tilePixelSize);
        var y = Math.floor(enemy.y / this.mapService.tilePixelSize);
        return this.mapService.getTile(x, y);
    };
    EnemyService.prototype.spawnEnemy = function () {
        if (Math.random() > 0.2) {
            this.openPortal();
        }
        if (this.enemies.length >= this.maxEnemyCount || !this.enemiesActive) {
            return;
        }
        var enemyIndex = Math.floor(Math.random() * this.enemyTypes.length);
        var spawnPoint = this.activePortalTile;
        var enemyType = this.enemyTypes[enemyIndex];
        var cappedScore = Math.min(3000, this.resourcesService.playerScore / 50000);
        var difficultyModifier = Math.max(1, Math.random() * cappedScore);
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
            for (var _i = 0, _a = this_1.mapService.tileMap.filter(function (_tile) { return _tile.buildingTileType === buildingType; }); _i < _a.length; _i++) {
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
            enemy.tilePath.some(function (tile) { return !tile.buildingTileType || !_this.mapService.mapTiles.get(tile.mapTileType).walkable; })) {
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
        var mapTile = this.mapService.mapTiles.get(tile.mapTileType);
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
/* harmony import */ var prng_parkmiller_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prng-parkmiller-js */ "./node_modules/prng-parkmiller-js/pm_prng.js");
/* harmony import */ var prng_parkmiller_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prng_parkmiller_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simplex_noise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
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
        this.mapTiles = new Map();
        this.buildingTiles = new Map();
        this.resourceTiles = new Map();
        this.buildingListVisible = false;
        this.fighterListVisible = false;
        this.chunkWidth = 75;
        this.chunkHeight = 75;
        this.totalChunkX = 5;
        this.totalChunkY = 5;
        this.elevationMap = [];
        this.tileMap = [];
        this.resourceAnimations = [];
        this.projectiles = [];
        this.deleteMode = false;
        this.tileAnimationSpeed = 0.003;
        this.enemyAnimationSpeed = 0.003;
        this.projectileAnimationSpeed = 0.003;
        this.highFramerate = 25;
        this.lowFramerate = 125;
        this.tilePixelSize = 16;
        // Shared canvas elements
        this.onMapUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transform = d3_zoom__WEBPACK_IMPORTED_MODULE_9__["zoomIdentity"];
        this.imageElements = {};
        this.seedRng(Math.random());
        for (var tileTypeString in _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"]) {
            if (typeof tileTypeString === 'string') {
                var tileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"][tileTypeString];
                this.mapTiles.set(tileType, baseTiles.mapTiles[tileType]);
            }
        }
        for (var tileTypeString in _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"]) {
            if (typeof tileTypeString === 'string') {
                var tileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"][tileTypeString];
                this.buildingTiles.set(tileType, baseTiles.buildingTiles[tileType]);
            }
        }
        for (var tileTypeString in _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"]) {
            if (typeof tileTypeString === 'string') {
                var tileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"][tileTypeString];
                this.resourceTiles.set(tileType, baseTiles.resourceTiles[tileType]);
            }
        }
        var imageElementContainer = document.getElementById('tile-images');
        for (var i = 0; i < imageElementContainer.children.length; i++) {
            var imageElement = imageElementContainer.children[i];
            this.imageElements[imageElement.id] = imageElement;
        }
    }
    MapService.prototype.seedRng = function (seed) {
        this.prngSeed = seed;
        this.rng = prng_parkmiller_js__WEBPACK_IMPORTED_MODULE_7__["create"](seed);
        this.mapSeed = this.rng.nextInt();
        this.resourceSeed = this.rng.nextInt();
    };
    MapService.prototype.initializeMap = function () {
        var _this = this;
        this.tileMap = [];
        for (var y = 0; y < this.totalChunkY; y++) {
            for (var x = 0; x < this.totalChunkX; x++) {
                this.generateChunk(x, y);
            }
        }
        // Placing home (unless one already exists)
        // We want to place the home closer to the center of the map.
        var homeTile = this.getRandomTile([_objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass], true, this.totalChunkX * 0.4 * this.chunkWidth, this.totalChunkX * 0.6 * this.chunkWidth, this.totalChunkY * 0.4 * this.chunkHeight, this.totalChunkY * 0.6 * this.chunkHeight);
        homeTile.buildingTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home;
        homeTile.buildingRemovable = false;
        // Placing an oak tree & stone mine near the home, to ensure they're always available.
        // We want to vary up their positions a bit to feel more natural.
        var grassTiles = [], mountainTiles = [];
        var placedRoads = [];
        var oakTile, stoneTile;
        var currentTile = homeTile;
        for (var i = 0; i < this.rng.nextIntRange(7, 16); i++) {
            var neighbors = this.getNeighborTiles(currentTile);
            var existingOakTile = neighbors.find(function (tile) { return tile.resourceTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"].OakTree; });
            if (existingOakTile) {
                oakTile = existingOakTile;
            }
            var existingStoneTile = neighbors.find(function (tile) { return tile.resourceTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"].StoneMine; });
            if (existingStoneTile) {
                stoneTile = existingStoneTile;
            }
            grassTiles = grassTiles.concat(neighbors.filter(function (tile) { return tile.mapTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass; }));
            mountainTiles = mountainTiles.concat(neighbors.filter(function (tile) { return tile.mapTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Mountain; }));
            neighbors = neighbors.filter(function (tile) { return !tile.buildingTileType && !tile.resourceTileType && tile.mapTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass; });
            if (!neighbors.length) {
                currentTile = grassTiles[this.rng.nextIntRange(0, grassTiles.length - 1)];
            }
            else {
                currentTile = neighbors[this.rng.nextIntRange(0, neighbors.length - 1)];
            }
            currentTile.buildingTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Road;
            placedRoads.push(currentTile);
        }
        grassTiles = grassTiles.filter(function (tile) { return !tile.buildingTileType && !tile.resourceTileType; });
        mountainTiles = mountainTiles.filter(function (tile) { return !tile.buildingTileType && !tile.resourceTileType; });
        if (!oakTile) {
            oakTile = grassTiles[this.rng.nextIntRange(0, grassTiles.length - 1)];
            grassTiles = grassTiles.filter(function (tile) { return tile !== oakTile; });
        }
        if (!stoneTile) {
            stoneTile = mountainTiles.length ? mountainTiles[this.rng.nextIntRange(0, mountainTiles.length - 1)] :
                grassTiles[this.rng.nextIntRange(0, grassTiles.length - 1)];
        }
        oakTile.resourceTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"].OakTree;
        stoneTile.resourceTileType = _objects_tile__WEBPACK_IMPORTED_MODULE_4__["ResourceTileType"].StoneMine;
        this.updatePaths(homeTile, true);
        for (var _i = 0, placedRoads_1 = placedRoads; _i < placedRoads_1.length; _i++) {
            var roadTile = placedRoads_1[_i];
            if (!oakTile.buildingPath.includes(roadTile) && !stoneTile.buildingPath.includes(roadTile)) {
                roadTile.buildingTileType = undefined;
            }
            else {
                roadTile.buildingRemovable = false;
            }
        }
        // Final sweep to make sure all spawnable resources exist at least once.
        var naturalResources = Array.from(this.resourceTiles.values());
        naturalResources = naturalResources.filter(function (resource) { return resource.isNaturalResource; });
        naturalResources = naturalResources.filter(function (resource) { return !_this.tileMap.some(function (tile) { return tile.resourceTileType === resource.tileType; }); });
        for (var _a = 0, naturalResources_1 = naturalResources; _a < naturalResources_1.length; _a++) {
            var missingResource = naturalResources_1[_a];
            var resourceTile = this.getRandomTile(missingResource.spawnsOn, true);
            resourceTile.resourceTileType = missingResource.tileType;
        }
        this.calculateResourceConnections();
        this.onMapUpdate.emit();
    };
    MapService.prototype.generateChunk = function (chunkX, chunkY) {
        var _this = this;
        var mapGen = new simplex_noise__WEBPACK_IMPORTED_MODULE_8__(this.mapSeed.toString());
        var resourceGen = new simplex_noise__WEBPACK_IMPORTED_MODULE_8__(this.resourceSeed.toString());
        var chunkTopLeft = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](chunkX * this.chunkWidth, chunkY * this.chunkHeight);
        var chunkBottomRight = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](chunkTopLeft.x + this.chunkWidth, chunkTopLeft.y + this.chunkHeight);
        // Creating the map itself
        for (var y = chunkTopLeft.y; y < chunkBottomRight.y; y++) {
            for (var x = chunkTopLeft.x; x < chunkBottomRight.x; x++) {
                var noiseValue = this.adjustedNoise(x, y, mapGen);
                var tileId = this.getChunkOffset(x, y) + y * this.chunkWidth + x;
                var tile = new _objects_tile__WEBPACK_IMPORTED_MODULE_4__["Tile"](tileId, this.getBiome(noiseValue), undefined, undefined, true, new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](16 * x, 16 * y), undefined, 50, noiseValue, this.resourcesService);
                this.setTile(x, y, tile);
            }
        }
        var centerVector = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](this.totalChunkX * this.chunkWidth * this.tilePixelSize / 2, this.totalChunkY * this.chunkHeight * this.tilePixelSize / 2);
        var maxTier = Math.max.apply(Math, this.resourcesService.getResources().map(function (resource) { return resource.resourceTier; }));
        var tierRingSize = centerVector.magnitude / maxTier;
        // Placing resources
        for (var y = chunkTopLeft.y; y < chunkBottomRight.y; y++) {
            var _loop_1 = function (x) {
                var adjustX = x / this_1.chunkWidth - 0.5, adjustY = y / this_1.chunkHeight - 0.5;
                var noiseValue = this_1.noise(adjustX, adjustY, resourceGen);
                var maxNoise = 0;
                var scanRange = 2;
                // Check nearby tiles to see if this tile is higher than all of them
                for (var ny = y - scanRange; ny < y + scanRange; ny++) {
                    for (var nx = x - scanRange; nx < x + scanRange; nx++) {
                        var neighborTile = this_1.getTile(nx, ny);
                        if (neighborTile && neighborTile.noiseValue > maxNoise) {
                            maxNoise = neighborTile.noiseValue;
                        }
                    }
                }
                var tile = this_1.getTile(x, y);
                if (tile.noiseValue === maxNoise) {
                    var distanceToCenter = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](Math.abs(tile.x - centerVector.x), Math.abs(tile.y - centerVector.y)).magnitude;
                    var tierValue_1 = Math.floor(distanceToCenter / tierRingSize);
                    var naturalResources = Array.from(this_1.resourceTiles.values());
                    naturalResources = naturalResources.filter(function (resource) { return resource.spawnsOn.includes(tile.mapTileType); });
                    naturalResources = naturalResources.filter(function (resource) {
                        var resourceTiers = resource.resourceEnums.map(function (resourceEnum) {
                            return _this.resourcesService.resources.get(resourceEnum).resourceTier;
                        });
                        return resourceTiers.some(function (tier) { return tierValue_1 - tier <= 3; });
                    });
                    if (!naturalResources.length) {
                        return "continue";
                    }
                    var rollRange = naturalResources.map(function (resource) { return resource.spawnRate; }).reduce(function (total, rate) { return total += rate; });
                    var resourceDiceRoll = this_1.rng.nextDouble() * rollRange;
                    for (var _i = 0, naturalResources_2 = naturalResources; _i < naturalResources_2.length; _i++) {
                        var resource = naturalResources_2[_i];
                        resourceDiceRoll -= resource.spawnRate;
                        if (resourceDiceRoll <= 0) {
                            tile.resourceTileType = resource.tileType;
                            break;
                        }
                    }
                }
            };
            var this_1 = this;
            for (var x = chunkTopLeft.x; x < chunkBottomRight.x; x++) {
                _loop_1(x);
            }
        }
    };
    MapService.prototype.clearChunk = function (chunkX, chunkY) {
        var chunkTopLeft = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](chunkX * this.chunkWidth, chunkY * this.chunkHeight);
        var chunkBottomRight = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](chunkTopLeft.x + this.chunkWidth, chunkTopLeft.y + this.chunkHeight);
        // TODO: Store building data outside of tile map, simulate offscreen production
        for (var y = chunkTopLeft.y; y < chunkBottomRight.y; y++) {
            for (var x = chunkTopLeft.x; x < chunkBottomRight.x; x++) {
                this.setTile(x, y, undefined);
            }
        }
    };
    MapService.prototype.tick = function (elapsed, deltaTime) {
        for (var _i = 0, _a = this.resourceAnimations; _i < _a.length; _i++) {
            var resourceAnimation = _a[_i];
            resourceAnimation.tick(elapsed, deltaTime);
            if (resourceAnimation.pathingDone) {
                resourceAnimation.finishAnimation();
            }
        }
        for (var _b = 0, _c = this.tileMap.filter(function (_tile) { return _tile.market; }); _b < _c.length; _b++) {
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
    MapService.prototype.adjustedNoise = function (x, y, generator) {
        var nx = x / this.chunkWidth - 0.5, ny = y / this.chunkHeight - 0.5;
        var noiseValue = this.noise(1 * nx, 1 * ny, generator) +
            0.25 * this.noise(4 * nx, 4 * ny, generator) +
            0.125 * this.noise(8 * nx, 8 * ny, generator);
        return Math.pow(noiseValue, 6);
    };
    MapService.prototype.noise = function (x, y, generator) {
        return generator.noise2D(x, y) / 2 + 0.5;
    };
    MapService.prototype.getBiome = function (noiseValue) {
        if (noiseValue <= 0.25) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Water;
        }
        else if (noiseValue < 0.9999999) {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Grass;
        }
        else {
            return _objects_tile__WEBPACK_IMPORTED_MODULE_4__["MapTileType"].Mountain;
        }
    };
    MapService.prototype.updatePaths = function (updatedTile, onlyPathable) {
        var _this = this;
        var visitedTiles = [];
        var tileQueue = [];
        var currentTile;
        tileQueue.push(updatedTile);
        var homeTile = this.tileMap.filter(function (tile) { return tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home; })[0];
        while (tileQueue.length) {
            currentTile = tileQueue.pop();
            var neighborTiles = this.getNeighborTiles(currentTile);
            visitedTiles.push(currentTile);
            for (var _i = 0, neighborTiles_1 = neighborTiles; _i < neighborTiles_1.length; _i++) {
                var neighbor = neighborTiles_1[_i];
                var buildingTile = this.buildingTiles.get(neighbor.buildingTileType);
                if (!visitedTiles.includes(neighbor) &&
                    (!onlyPathable || ((buildingTile && buildingTile.resourcePathable)) || neighbor.resourceTileType)) {
                    tileQueue.push(neighbor);
                }
            }
            if (!currentTile.resourceTileType) {
                continue;
            }
            this.findPath(currentTile, homeTile, true, true).subscribe(function (tilePath) {
                currentTile.buildingPath = tilePath;
                var pathAvailable = currentTile.buildingPath.length && !currentTile.buildingPath.some(function (tile) { return tile.health <= 0; });
                var resources = _this.resourceTiles.get(currentTile.resourceTileType).resourceEnums
                    .map(function (resourceEnum) { return _this.resourcesService.resources.get(resourceEnum); });
                for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                    var resource = resources_1[_i];
                    resource.pathAvailable = pathAvailable;
                }
            });
        }
    };
    MapService.prototype.calculateResourceConnections = function () {
        var _this = this;
        var resourceTiles = this.getResourceTiles();
        for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
            var resource = _a[_i];
            resource.pathAvailable = false;
        }
        var homeTile = this.tileMap.filter(function (tile) { return tile.buildingTileType === _objects_tile__WEBPACK_IMPORTED_MODULE_4__["BuildingTileType"].Home; })[0];
        var _loop_2 = function (resourceTile) {
            if (resourceTile.health <= 0) {
                return "continue";
            }
            this_2.findPath(resourceTile, homeTile, true, true).subscribe(function (tilePath) {
                resourceTile.buildingPath = tilePath;
                if (resourceTile.buildingPath.length && !resourceTile.buildingPath.some(function (tile) { return tile.health <= 0; })) {
                    var resources = _this.resourceTiles.get(resourceTile.resourceTileType).resourceEnums
                        .map(function (resourceEnum) { return _this.resourcesService.resources.get(resourceEnum); });
                    for (var _i = 0, resources_2 = resources; _i < resources_2.length; _i++) {
                        var resource = resources_2[_i];
                        resource.pathAvailable = true;
                    }
                }
            });
        };
        var this_2 = this;
        for (var _b = 0, resourceTiles_1 = resourceTiles; _b < resourceTiles_1.length; _b++) {
            var resourceTile = resourceTiles_1[_b];
            _loop_2(resourceTile);
        }
        for (var _c = 0, _d = this.tileMap.filter(function (tile) { return tile.market; }); _c < _d.length; _c++) {
            var marketTile = _d[_c];
            marketTile.market.calculateConnection();
        }
    };
    MapService.prototype.findPath = function (startTile, targetTile, onlyPathable, onlyWalkable, maxAttempts) {
        if (maxAttempts === void 0) { maxAttempts = Infinity; }
        var visitedTiles = [];
        var tileQueue = [];
        var tileDistances = this.tileMap.map(function (_) { return Infinity; });
        var tileHeuristicDistances = this.tileMap.map(function (_) { return Infinity; });
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
            tileQueue = tileQueue.sort(function (a, b) { return tileHeuristicDistances[a.id] - tileHeuristicDistances[b.id]; });
            currentNode = tileQueue.pop();
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
                var pathable = neighbor.buildingTileType && this.buildingTiles.get(neighbor.buildingTileType).resourcePathable;
                var walkable = this.mapTiles.get(neighbor.mapTileType).walkable || pathable;
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
    MapService.prototype.spawnHarvestedResourceAnimation = function (resource, multiplier, spawnedByPlayer) {
        if (multiplier === void 0) { multiplier = 1; }
        var matchingTiles = this.getResourceTiles(resource.resourceEnum).filter(function (_tile) { return _tile.buildingPath.length > 0; });
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
    MapService.prototype.getRandomTile = function (tileTypes, avoidResources, minX, maxX, minY, maxY) {
        var _this = this;
        if (avoidResources === void 0) { avoidResources = false; }
        if (minX === void 0) { minX = 0; }
        if (maxX === void 0) { maxX = Infinity; }
        if (minY === void 0) { minY = 0; }
        if (maxY === void 0) { maxY = Infinity; }
        var tiles = this.tileMap;
        if (minX > 0 || minY > 0 || maxX < Infinity || maxY < Infinity) {
            tiles = tiles.filter(function (_tile) { return _tile.x / _this.tilePixelSize >= minX && _tile.x / _this.tilePixelSize <= maxX &&
                _tile.y / _this.tilePixelSize >= minY && _tile.y / _this.tilePixelSize <= maxY; });
        }
        var tile;
        do {
            tile = tiles[Math.floor(this.rng.nextDouble() * tiles.length)];
        } while (!tile || !(!tileTypes || tileTypes.includes(tile.mapTileType)) || (avoidResources && tile.resourceTileType));
        return tile;
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
            if (position.x >= 0 && position.x < this.totalChunkX * this.chunkWidth &&
                position.y >= 0 && position.y < this.totalChunkY * this.chunkHeight) {
                tiles.push(this.getTile(position.x, position.y));
            }
        }
        return tiles;
    };
    MapService.prototype.getTileCoordinates = function (tile) {
        return {
            x: Math.floor(tile.x / this.tilePixelSize),
            y: Math.floor(tile.y / this.tilePixelSize)
        };
    };
    MapService.prototype.getChunkOffset = function (x, y) {
        var chunkIndex = Math.floor(x / this.chunkWidth) + this.totalChunkX * Math.floor(y / this.chunkHeight);
        return chunkIndex * this.chunkWidth * this.chunkHeight;
    };
    MapService.prototype.getTile = function (x, y) {
        return this.tileMap[this.getChunkOffset(x, y) + y * this.chunkWidth + x];
    };
    MapService.prototype.setTile = function (x, y, tile) {
        this.tileMap[this.getChunkOffset(x, y) + y * this.chunkWidth + x] = tile;
    };
    MapService.prototype.setCameraCenter = function (center) {
        var bounds = this.getMapCameraBounds();
        var oldCenter = bounds[1].add(bounds[0]).multiply(0.5);
        var centerOffset = oldCenter.subtract(bounds[0]);
        this.transform.x = center.x + centerOffset.x;
        this.transform.y = center.y + centerOffset.y;
        var newBounds = this.getMapCameraBounds();
        var upperLeftBorder = [0, 0];
        var bottomRightBorder = [-this.totalChunkX * this.chunkWidth * this.tilePixelSize,
            -this.totalChunkY * this.chunkHeight * this.tilePixelSize];
        // Adjust the camera to stay in-bounds
        if (this.transform.x > upperLeftBorder[0]) {
            this.transform.x = upperLeftBorder[0];
        }
        else if (-newBounds[1].x < bottomRightBorder[0]) {
            this.transform.x = (bottomRightBorder[0] + centerOffset.x * 2) * this.transform.k;
        }
        if (this.transform.y > upperLeftBorder[1]) {
            this.transform.y = upperLeftBorder[1];
        }
        else if (-newBounds[1].y < bottomRightBorder[1]) {
            this.transform.y = (bottomRightBorder[1] + centerOffset.y * 2) * this.transform.k;
        }
    };
    MapService.prototype.clampTileCoordinates = function (x, y) {
        return [Math.floor(x / this.tilePixelSize), Math.floor(y / this.tilePixelSize)];
    };
    MapService.prototype.getResourceTiles = function (resourceEnum) {
        var tiles = this.tileMap.filter(function (tile) { return tile.resourceTileType; });
        if (resourceEnum) {
            var matchingTypes_1 = Array.from(this.resourceTiles.values()).filter(function (tile) { return tile.resourceEnums.includes(resourceEnum); }).map(function (tile) { return tile.tileType; });
            tiles = tiles.filter(function (tile) { return matchingTypes_1.includes(tile.resourceTileType); });
        }
        return tiles;
    };
    MapService.prototype.getMapCameraBounds = function (extendedBorder) {
        if (extendedBorder === void 0) { extendedBorder = 0; }
        var upperLeftPixel = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"]((-this.transform.x - this.tilePixelSize * extendedBorder) / this.transform.k, (-this.transform.y - this.tilePixelSize * extendedBorder) / this.transform.k);
        var lowerRightPixel = new _objects_vector__WEBPACK_IMPORTED_MODULE_6__["Vector"](upperLeftPixel.x + (this.canvasPixelWidth + this.tilePixelSize * extendedBorder) / this.transform.k, upperLeftPixel.y + (this.canvasPixelHeight + this.tilePixelSize * extendedBorder) / this.transform.k);
        return [upperLeftPixel, lowerRightPixel];
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
        this.resources.clear();
        for (var resourceName in _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"]) {
            if (Number(resourceName)) {
                continue;
            }
            var resourceEnum = _objects_resourceData__WEBPACK_IMPORTED_MODULE_2__["ResourceEnum"][resourceName];
            var baseResource = baseResources[resourceEnum];
            var harvestYield = baseResource.harvestYield ? baseResource.harvestYield : 1;
            var edible = baseResource.edible ? baseResource.edible : false;
            var foodMultiplier = baseResource.foodMultiplier ? baseResource.foodMultiplier : 1;
            var resource = new _objects_resource__WEBPACK_IMPORTED_MODULE_1__["Resource"](baseResource.name, baseResource.resourceType, baseResource.resourceEnum, baseResource.iconPath, baseResource.resourceConsumes, baseResource.harvestable, harvestYield, baseResource.harvestMilliseconds, baseResource.sellable, baseResource.sellsFor, baseResource.resourceDescription, baseResource.workerVerb, baseResource.workerNoun, baseResource.resourceTier, edible, foodMultiplier, this);
            this.resources.set(resourceEnum, resource);
        }
    };
    ResourcesService.prototype.getResources = function (resourceType, resourceTiers, filterBySellable, filterByAccessible, filterByHarvestable, filterByEdible) {
        if (filterBySellable === void 0) { filterBySellable = false; }
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        if (filterByHarvestable === void 0) { filterByHarvestable = false; }
        if (filterByEdible === void 0) { filterByEdible = false; }
        var resources = Array.from(this.resources.values());
        if (resourceType) {
            resources = resources.filter(function (resource) { return resource.resourceType === resourceType; });
        }
        if (resourceTiers && resourceTiers.length) {
            resources = resources.filter(function (resource) { return resourceTiers.includes(resource.resourceTier); });
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
        if (filterByEdible) {
            resources = resources.filter(function (resource) { return resource.edible; });
        }
        return resources;
    };
    ResourcesService.prototype.takeFood = function (maxAmount) {
        var edibleResources = this.getResources(undefined, undefined, false, false, false, true)
            .sort(function (a, b) { return b.foodMultiplier - a.foodMultiplier; });
        var totalAmountTaken = 0;
        var currentResource = 0;
        while (totalAmountTaken < maxAmount && currentResource < edibleResources.length &&
            edibleResources.some(function (resource) { return resource.amount > 0; })) {
            var amountTaken = Math.min(maxAmount - totalAmountTaken, edibleResources[currentResource].amount * edibleResources[currentResource].foodMultiplier);
            edibleResources[currentResource].addAmount(-amountTaken / edibleResources[currentResource].foodMultiplier);
            totalAmountTaken += amountTaken;
            currentResource++;
        }
        return totalAmountTaken;
    };
    Object.defineProperty(ResourcesService.prototype, "totalFoodAmount", {
        get: function () {
            var edibleResources = this.getResources(undefined, undefined, false, false, false, true);
            return edibleResources.map(function (resource) { return resource.amount * resource.foodMultiplier; }).reduce(function (total, amount) { return total += amount; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourcesService.prototype, "playerScore", {
        get: function () {
            var resources = Array.from(this.resources.values());
            return resources.map(function (resource) { return resource.amount * resource.resourceTier; }).reduce(function (total, amount) { return total += amount; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourcesService.prototype, "tiers", {
        get: function () {
            var _this = this;
            var tiersByResource = this.getResources().map(function (resource) { return resource.resourceTier; }).sort();
            var tiers = [];
            tiersByResource.map(function (tier) {
                if (!tiers.includes(tier) && _this.highestTierReached >= tier - 1) {
                    tiers.push(tier);
                }
            });
            return tiers;
        },
        enumerable: true,
        configurable: true
    });
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
        this.versionHistory = ['1.2', 'Alpha 3', 'Alpha 3.1', 'Alpha 3.2', 'Alpha 3.3', 'Alpha 3.4'];
        this.gameVersion = 'Alpha 3.4';
        this.bindSelected = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
        this.autosaveInterval = 60000;
        this.lastAutosave = this.autosaveInterval;
        this.debugMode = false;
        this.resourceBinds = defaultResourceBinds;
        this.disableAnimations = false;
        this.slimInterface = false;
        this.organizeLeftPanelByType = true;
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
        this.mapService.seedRng(Math.random());
        this.mapService.initializeMap();
        this.enemyService.enemies = [];
        this.fighterService.fighters = [];
        this.mapService.resourceAnimations = [];
        this.mapService.projectiles = [];
        this.workersService.foodStockpile = 0;
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
        this.organizeLeftPanelByType = true;
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
            purchasedUpgrades: [],
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
                organizeLeftPanelByType: this.organizeLeftPanelByType,
                mapLowFramerate: this.mapLowFramerate,
                resourceAnimationColors: this.resourceAnimationColors,
                prngSeed: this.mapService.prngSeed
            },
            foodStockpile: this.workersService.foodStockpile,
            gameVersion: this.gameVersion
        };
        for (var _i = 0, _a = this.resourcesService.getResources(); _i < _a.length; _i++) {
            var resource = _a[_i];
            saveData.resources.push({
                resourceEnum: resource.resourceEnum,
                amount: resource.amount,
                autoSellCutoff: resource.autoSellCutoff
            });
        }
        saveData.purchasedUpgrades = this.upgradesService.getUpgrades(true).map(function (upgrade) { return upgrade.id; });
        for (var _b = 0, _c = this.workersService.getWorkers(); _b < _c.length; _b++) {
            var worker = _c[_b];
            var workerData = {
                resourceType: worker.resourceType,
                cost: worker.cost,
                workerCount: worker.workerCount,
                workersByResource: []
            };
            for (var _d = 0, _e = worker.getResourceWorkers(); _d < _e.length; _d++) {
                var resourceWorker = _e[_d];
                workerData.workersByResource.push({
                    resourceEnum: resourceWorker.resourceEnum,
                    workable: resourceWorker.workable,
                    workerCount: resourceWorker.workerCount
                });
            }
            saveData.workers.push(workerData);
        }
        for (var _f = 0, _g = this.mapService.tileMap; _f < _g.length; _f++) {
            var tile = _g[_f];
            if (!tile || tile.buildingTileType === undefined && tile.buildingTileType !== _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].EnemyPortal) {
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
        for (var _h = 0, _j = this.enemyService.enemies; _h < _j.length; _h++) {
            var enemy = _j[_h];
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
        for (var _k = 0, _l = this.fighterService.fighters; _k < _l.length; _k++) {
            var fighter = _l[_k];
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
            this.deleteSave();
            var saveData = JSON.parse(atob(saveDataString));
            saveData = this.processVersionDifferences(saveData);
            if (!saveData.gameVersion) {
                throw new Error('Save data is incompatible with the current version.');
            }
            if (saveData.settings !== undefined) {
                this.autosaveInterval = saveData.settings.autosaveInterval ? saveData.settings.autosaveInterval : 900000;
                this.debugMode = saveData.settings.debugMode ? saveData.settings.debugMode : false;
                this.resourcesService.highestTierReached = saveData.settings.highestTierReached ? saveData.settings.highestTierReached : 0;
                this.workersService.workersPaused = saveData.settings.workersPaused ? saveData.settings.workersPaused : false;
                this.upgradesService.hidePurchasedUpgrades =
                    saveData.settings.hidePurchasedUpgrades ? saveData.settings.hidePurchasedUpgrades : false;
                this.resourceBinds = saveData.settings.resourceBinds ? saveData.settings.resourceBinds : defaultResourceBinds;
                this.bindSelected.setValue(this.resourceBinds);
                this.resourceBindChange({ 'source': null, 'value': this.resourceBinds });
                this.messagesService.visibleSources = saveData.settings.visibleSources ? saveData.settings.visibleSources :
                    [_objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Admin, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Buildings, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Main, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Enemy,
                        _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Fighter, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Map, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Resources, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Settings,
                        _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Store, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Upgrades, _objects_message__WEBPACK_IMPORTED_MODULE_15__["MessageSource"].Workers];
                this.enemyService.enemiesActive = saveData.settings.enemiesActive ? saveData.settings.enemiesActive : false;
                this.slimInterface = saveData.settings.slimInterface ? saveData.settings.slimInterface : false;
                this.organizeLeftPanelByType = saveData.settings.organizeLeftPanelByType ? saveData.settings.organizeLeftPanelByType : true;
                this.mapLowFramerate = saveData.settings.mapLowFramerate ? saveData.settings.mapLowFramerate : false;
                this.harvestDetailColor = saveData.settings.harvestDetailColor ? saveData.settings.harvestDetailColor : '#a4ff89';
                this.workerDetailColor = saveData.settings.workerDetailColor ? saveData.settings.workerDetailColor : '#ae89ff';
                if (saveData.settings.resourceAnimationColors) {
                    this.resourceAnimationColors = saveData.settings.resourceAnimationColors;
                }
                if (saveData.settings.prngSeed) {
                    this.mapService.seedRng(saveData.settings.prngSeed);
                    this.mapService.initializeMap();
                }
            }
            if (saveData.resources !== undefined) {
                for (var _i = 0, _a = saveData.resources; _i < _a.length; _i++) {
                    var resourceData = _a[_i];
                    var resource = this.resourcesService.resources.get(resourceData.resourceEnum);
                    if (resource === undefined) {
                        continue;
                    }
                    resource.amount = resourceData.amount ? resourceData.amount : 0;
                    resource.autoSellCutoff = resourceData.autoSellCutoff ? resourceData.autoSellCutoff : 0;
                }
            }
            if (saveData.purchasedUpgrades !== undefined) {
                for (var _b = 0, _c = saveData.purchasedUpgrades; _b < _c.length; _b++) {
                    var upgradeId = _c[_b];
                    var upgrade = this.upgradesService.getUpgrade(upgradeId);
                    if (upgrade) {
                        upgrade.applyUpgrade(true);
                        upgrade.purchased = true;
                    }
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
                    var tile = this_1.mapService.tileMap.find(function (_tile) { return _tile && _tile.id === tileData.id; });
                    if (!tile || [_objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].Home, _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingTileType"].EnemyPortal].includes(tileData.buildingTileType)) {
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
                var marketTiles = saveData.tiles.filter(function (tile) { return tile.buildingTileType && _this.mapService.buildingTiles.get(tile.buildingTileType).subType === _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingSubType"].Market; });
                for (var _k = 0, marketTiles_1 = marketTiles; _k < marketTiles_1.length; _k++) {
                    var tileData = marketTiles_1[_k];
                    var tile = this.mapService.tileMap[tileData.id];
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
            this.workersService.foodStockpile = saveData.foodStockpile ? saveData.foodStockpile : 0;
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
                var isMarket = _this.mapService.buildingTiles.get(tileData.buildingTileType).subType === _objects_tile__WEBPACK_IMPORTED_MODULE_13__["BuildingSubType"].Market;
                tileData.statLevels = isMarket ? { 'MAXHEALTH': 1, 'SELLAMOUNT': 1, 'SELLRATE': 1 } : { 'MAXHEALTH': 1 };
                tileData.statCosts = isMarket ? { 'MAXHEALTH': 1500, 'SELLAMOUNT': 1500, 'SELLRATE': 1500 } : { 'MAXHEALTH': 1500 };
            });
        }
        if (oldVersionIndex <= this.versionHistory.indexOf('Alpha 3.1')) {
            saveData.purchasedUpgrades = saveData.upgrades.map(function (upgrade) { return upgrade.id; });
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
            if (saveData.settings.resourceBinds) {
                saveData.settings.resourceBinds = saveData.settings.resourceBinds.map(function (resourceId) { return legacyResourceIds[resourceId]; });
            }
            var accessedTiers = saveData.resources.filter(function (resource) { return resource.amount; }).map(function (resource) {
                return _this.resourcesService.resources.get(resource.resourceEnum).resourceTier;
            });
            saveData.settings.highestTierReached = accessedTiers.sort()[accessedTiers.length - 1];
        }
        if (oldVersionIndex <= this.versionHistory.indexOf('Alpha 3.3')) {
            saveData.tiles = [];
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
            var building = this.mapService.buildingTiles.get(requiredBuilding);
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
        this.upgrades = [];
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
        this.foodStockpile = 0;
        this.foodCollectAmount = 1000;
        this.foodCollectInterval = 100;
        this.lastFoodCollectTime = 0;
        this.loadBaseWorkers();
    }
    WorkersService.prototype.loadBaseWorkers = function () {
        this.workers.clear();
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
                var workerYield = baseWorker.resourceWorkers[resoruceEnum].workerYield ? baseWorker.resourceWorkers[resoruceEnum].workerYield : 1;
                var resourceWorker = {
                    resourceEnum: baseWorker.resourceWorkers[resoruceEnum].resourceEnum,
                    workable: baseWorker.resourceWorkers[resoruceEnum].workable,
                    recurringCost: baseWorker.resourceWorkers[resoruceEnum].recurringCost,
                    workerCount: 0,
                    workerYield: workerYield,
                    lastHarvestTime: 0,
                    sliderSetting: 0,
                    sliderSettingValid: true
                };
                resourceWorkers.set(resoruceEnum, resourceWorker);
            }
            var worker = new _objects_worker__WEBPACK_IMPORTED_MODULE_4__["Worker"](baseWorker.cost, baseWorker.resourceType, resourceWorkers, baseWorker.priorityOrder, this, this.resourcesService, this.mapService, this.messagesService);
            this.workers.set(resourceType, worker);
        }
    };
    WorkersService.prototype.tick = function (elapsed, deltaTime) {
        if (elapsed - this.lastFoodCollectTime > this.foodCollectInterval) {
            var foodAmount = Math.min(this.foodCollectAmount, this.foodCapacity - this.foodStockpile);
            this.foodStockpile += this.resourcesService.takeFood(foodAmount);
            this.lastFoodCollectTime = elapsed;
        }
        if (this.workersPaused) {
            return;
        }
        for (var _i = 0, _a = this.getWorkers(false, false, false, true); _i < _a.length; _i++) {
            var worker = _a[_i];
            worker.tick(elapsed, deltaTime);
        }
    };
    WorkersService.prototype.getWorkers = function (filterByAccessible, filterByWorkable, filterByHarvestable, orderByPriority) {
        if (filterByAccessible === void 0) { filterByAccessible = false; }
        if (filterByWorkable === void 0) { filterByWorkable = false; }
        if (filterByHarvestable === void 0) { filterByHarvestable = false; }
        if (orderByPriority === void 0) { orderByPriority = false; }
        var workers = Array.from(this.workers.values());
        if (orderByPriority) {
            workers = workers.sort(function (a, b) { return a.priorityOrder - b.priorityOrder; });
        }
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
    Object.defineProperty(WorkersService.prototype, "foodCapacity", {
        get: function () {
            return (this.resourcesService.highestTierReached + 1) * 10000;
        },
        enumerable: true,
        configurable: true
    });
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
/*! exports provided: GOLD, OAK, PINE, BIRCH, EUCALYPTUS, WILLOW, TEAK, ENTSOUL, REANIMATEDENT, STONE, GRAPHITE, LIMESTONE, MARBLE, QUARTZ, OBSIDIAN, DIAMOND, COPPERORE, TINORE, BRONZEINGOT, IRONORE, IRONINGOT, STEELINGOT, GOLDORE, GOLDINGOT, LATINUMORE, LATINUMINGOT, UNBELIEVIUMORE, LUSTRIALORE, SPECTRUSORE, TEMPROUSINGOT, REFINEDTEMPROUS, WHEAT, BREAD, RAWPOTATO, POTATO, RICE, JELLYDONUT, RAWHERRING, HERRING, RAWBASS, BASS, RAWSHARK, SHARK, RAWCHICKEN, CHICKEN, RAWSTEAK, STEAK, RAWDRAGONMEAT, DRAGONMEAT, default */
/***/ (function(module) {

module.exports = {"GOLD":{"name":"Gold","resourceType":"CURRENCY","resourceEnum":"GOLD","iconPath":"./assets/sprites/coin.png","resourceConsumes":[],"harvestable":false,"sellable":false,"resourceDescription":"Shiny and valuable.","workerVerb":"","workerNoun":"","resourceAccessible":true,"resourceTier":0,"harvestYield":0,"harvestMilliseconds":0,"workerYield":0,"sellsFor":0},"OAK":{"name":"Oak","resourceType":"WOOD","resourceEnum":"OAK","iconPath":"./assets/sprites/oak.png","resourceConsumes":[],"harvestable":true,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Sturdy oak logs.","workerVerb":"Fells","workerNoun":"oak tree","resourceAccessible":true,"resourceTier":0},"PINE":{"name":"Pine","resourceType":"WOOD","resourceEnum":"PINE","iconPath":"./assets/sprites/pine.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":12,"resourceDescription":"Strong pine logs.","workerVerb":"Fells","workerNoun":"pine tree","resourceAccessible":false,"resourceTier":1},"BIRCH":{"name":"Birch","resourceType":"WOOD","resourceEnum":"BIRCH","iconPath":"./assets/sprites/birch.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Sometimes it feels like it's watching you...","workerVerb":"Fells","workerNoun":"birch tree","resourceAccessible":false,"resourceTier":2},"EUCALYPTUS":{"name":"Eucalyptus","resourceType":"WOOD","resourceEnum":"EUCALYPTUS","iconPath":"./assets/sprites/eucalyptus.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":20,"resourceDescription":"Logs as strong as their name is long.","workerVerb":"Fells","workerNoun":"eucalyptus tree","resourceAccessible":false,"resourceTier":3},"WILLOW":{"name":"Willow","resourceType":"WOOD","resourceEnum":"WILLOW","iconPath":"./assets/sprites/willow.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":35,"resourceDescription":"The saddest tree in the forest (because you chopped down its parents).","workerVerb":"Fells","workerNoun":"willow tree","resourceAccessible":false,"resourceTier":4},"TEAK":{"name":"Teak","resourceType":"WOOD","resourceEnum":"TEAK","iconPath":"./assets/sprites/teak.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"Bright, thin logs; surprisingly resillient considering their appearance.","workerVerb":"Fells","workerNoun":"teak tree","resourceAccessible":false,"resourceTier":5},"ENTSOUL":{"name":"Ent Soul","resourceType":"WOOD","resourceEnum":"ENTSOUL","iconPath":"./assets/sprites/ent_soul.png","resourceConsumes":[{"resourceEnum":"OAK","cost":10},{"resourceEnum":"PINE","cost":10},{"resourceEnum":"BIRCH","cost":10},{"resourceEnum":"EUCALYPTUS","cost":10},{"resourceEnum":"WILLOW","cost":10},{"resourceEnum":"TEAK","cost":10}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":false,"sellsFor":50,"resourceDescription":"The spirit of a long-dead ent, still contained where it last took root.","workerVerb":"Releases","workerNoun":"ent spirit","resourceAccessible":false,"resourceTier":6},"REANIMATEDENT":{"id":17,"name":"reanimated ent","resourceType":"WOOD","resourceEnum":"REANIMATEDENT","iconPath":"./assets/sprites/reanimated_ent.png","resourceConsumes":[{"resourceEnum":"ENTSOUL","cost":1}],"harvestable":false,"harvestYield":1,"harvestMilliseconds":20000,"workerYield":1,"sellable":false,"sellsFor":100,"resourceDescription":"An ancient ent warrior, given life once more to fight for you.","workerVerb":"Reanimates","workerNoun":"ent","resourceAccessible":false,"resourceTier":7},"STONE":{"name":"Stone","resourceType":"MINERAL","resourceEnum":"STONE","iconPath":"./assets/sprites/stone.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Hard and sturdy, well suitied to basic construction projects.","workerVerb":"Mines","workerNoun":"stone","resourceAccessible":true,"resourceTier":0},"GRAPHITE":{"name":"Graphite","resourceType":"MINERAL","resourceEnum":"GRAPHITE","iconPath":"./assets/sprites/graphite.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"A rough mineral with many uses.","workerVerb":"Mines","workerNoun":"graphite","resourceAccessible":false,"resourceTier":1},"LIMESTONE":{"name":"Limestone","resourceType":"MINERAL","resourceEnum":"LIMESTONE","iconPath":"./assets/sprites/limestone.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":35,"resourceDescription":"Hardened stone with a hint of lime.","workerVerb":"Mines","workerNoun":"limestone","resourceAccessible":false,"resourceTier":2},"MARBLE":{"name":"Marble","resourceType":"MINERAL","resourceEnum":"MARBLE","iconPath":"./assets/sprites/marble.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":50,"resourceDescription":"Beautiful, crystalline rock. Highly valued for construction projects.","workerVerb":"Mines","workerNoun":"marble","resourceAccessible":false,"resourceTier":3},"QUARTZ":{"name":"Quartz","resourceType":"MINERAL","resourceEnum":"QUARTZ","iconPath":"./assets/sprites/quartz.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"sellsFor":75,"resourceDescription":"A bright, shiny structure hides under the rock's rough surface.","workerVerb":"Mines","workerNoun":"qaurtz","resourceAccessible":false,"resourceTier":4},"OBSIDIAN":{"name":"Obsidian","resourceType":"MINERAL","resourceEnum":"OBSIDIAN","iconPath":"./assets/sprites/obsidian.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":6500,"workerYield":1,"sellable":true,"sellsFor":125,"resourceDescription":"Hardened rock formed in the heart of a volcano.","workerVerb":"Mines","workerNoun":"obsidian","resourceAccessible":false,"resourceTier":5},"DIAMOND":{"name":"Diamond","resourceType":"MINERAL","resourceEnum":"DIAMOND","iconPath":"./assets/sprites/diamond.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":7500,"workerYield":1,"sellable":true,"sellsFor":175,"resourceDescription":"An incredibly beautiful and tough resource.","workerVerb":"Mines","workerNoun":"diamond","resourceAccessible":false,"resourceTier":6},"COPPERORE":{"name":"Copper Ore","resourceType":"METAL","resourceEnum":"COPPERORE","iconPath":"./assets/sprites/copper_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Can be forged into bronze along with tin.","workerVerb":"Mines","workerNoun":"copper ore","resourceAccessible":true,"resourceTier":0},"TINORE":{"name":"Tin Ore","resourceType":"METAL","resourceEnum":"TINORE","iconPath":"./assets/sprites/tin_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Can be forged into bronze along with copper.","workerVerb":"Mines","workerNoun":"tin ore","resourceAccessible":true,"resourceTier":0},"BRONZEINGOT":{"name":"Bronze Ingot","resourceType":"METAL","resourceEnum":"BRONZEINGOT","iconPath":"./assets/sprites/bronze_ingot.png","resourceConsumes":[{"resourceEnum":"COPPERORE","cost":1},{"resourceEnum":"TINORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"Somewhat brittle ingots.","workerVerb":"Forges","workerNoun":"bronze ingot","resourceAccessible":false,"resourceTier":1},"IRONORE":{"name":"Iron Ore","resourceType":"METAL","resourceEnum":"IRONORE","iconPath":"./assets/sprites/iron_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":20,"resourceDescription":"Unrefined extracts of iron.","workerVerb":"Mines","workerNoun":"iron ore","resourceAccessible":false,"resourceTier":2},"IRONINGOT":{"name":"Iron Ingot","resourceType":"METAL","resourceEnum":"IRONINGOT","iconPath":"./assets/sprites/iron_ingot.png","resourceConsumes":[{"resourceEnum":"IRONORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Dim but sturdy ingots.","workerVerb":"Forges","workerNoun":"iron ingot","resourceAccessible":false,"resourceTier":3},"STEELINGOT":{"name":"Steel Ingot","resourceType":"METAL","resourceEnum":"STEELINGOT","iconPath":"./assets/sprites/steel_ingot.png","resourceConsumes":[{"resourceEnum":"IRONINGOT","cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"Refined and purified iron.","workerVerb":"Forges","workerNoun":"steel ingot","resourceAccessible":false,"resourceTier":4},"GOLDORE":{"name":"Gold Ore","resourceType":"METAL","resourceEnum":"GOLDORE","iconPath":"./assets/sprites/gold_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":35,"resourceDescription":"Unrefined extracts of gold.","workerVerb":"Mines","workerNoun":"gold","resourceAccessible":false,"resourceTier":3},"GOLDINGOT":{"id":12,"name":"gold ingot","resourceType":"METAL","resourceEnum":"GOLDINGOT","iconPath":"./assets/sprites/gold_ingot.png","resourceConsumes":[{"resourceEnum":"GOLDORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":55,"resourceDescription":"Highly valuable and malleable.","workerVerb":"Forges","workerNoun":"gold ingot","resourceAccessible":false,"resourceTier":4},"LATINUMORE":{"name":"Latinum Ore","resourceType":"METAL","resourceEnum":"LATINUMORE","iconPath":"./assets/sprites/latinum_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":4500,"workerYield":1,"sellable":true,"sellsFor":65,"resourceDescription":"Said to be highly valued by indivudals with large ears.","workerVerb":"Mines","workerNoun":"latinum ore","resourceAccessible":false,"resourceTier":4},"LATINUMINGOT":{"name":"Latinum Ingot","resourceType":"METAL","resourceEnum":"LATINUMINGOT","iconPath":"./assets/sprites/latinum_ingot.png","resourceConsumes":[{"resourceEnum":"STEELINGOT","cost":1},{"resourceEnum":"GOLDINGOT","cost":1},{"resourceEnum":"LATINUMORE","cost":1}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"sellsFor":85,"resourceDescription":"QUARK!!!","workerVerb":"Forges","workerNoun":"latinum ingot","resourceAccessible":false,"resourceTier":5},"UNBELIEVIUMORE":{"name":"Unbelievium Ore","resourceType":"METAL","resourceEnum":"UNBELIEVIUMORE","iconPath":"./assets/sprites/unbelievium_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":100,"resourceDescription":"I can't believe it's not unobtainium!","workerVerb":"Mines","workerNoun":"unbelievium ore","resourceAccessible":false,"resourceTier":5},"LUSTRIALORE":{"name":"Lustrial Ore","resourceType":"METAL","resourceEnum":"LUSTRIALORE","iconPath":"./assets/sprites/lustrial_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":100,"resourceDescription":"Even in its unrefined form, it shines as bright as the sun.","workerVerb":"Mines","workerNoun":"lustrial ore","resourceAccessible":false,"resourceTier":5},"SPECTRUSORE":{"name":"Spectrus Ore","resourceType":"METAL","resourceEnum":"SPECTRUSORE","iconPath":"./assets/sprites/spectrus_ore.png","resourceConsumes":[],"harvestable":false,"harvestYield":1,"harvestMilliseconds":5500,"workerYield":1,"sellable":true,"sellsFor":100,"resourceDescription":"A peculiar energy eminates from the rock...","workerVerb":"Mines","workerNoun":"spectrus ore","resourceAccessible":false,"resourceTier":5},"TEMPROUSINGOT":{"name":"Temprous Ingot","resourceType":"METAL","resourceEnum":"TEMPROUSINGOT","iconPath":"./assets/sprites/temprous_ingot.png","resourceConsumes":[{"resourceEnum":"LATINUMINGOT","cost":2},{"resourceEnum":"UNBELIEVIUMORE","cost":2},{"resourceEnum":"LUSTRIALORE","cost":2},{"resourceEnum":"SPECTRUSORE","cost":2}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":8000,"workerYield":1,"sellable":true,"sellsFor":175,"resourceDescription":"Could this metal hold the secret of time itself?","workerVerb":"Forges","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":6},"REFINEDTEMPROUS":{"name":"Refined Temprous","resourceType":"METAL","resourceEnum":"REFINEDTEMPROUS","iconPath":"./assets/sprites/refined_temprous.png","resourceConsumes":[{"resourceEnum":"TEMPROUSINGOT","cost":15},{"resourceEnum":"DIAMOND","cost":30}],"harvestable":true,"harvestYield":1,"harvestMilliseconds":15000,"workerYield":1,"sellable":true,"sellsFor":350,"resourceDescription":"Memories of ages past imbue the metal with seemingly endless power.","workerVerb":"Refines","workerNoun":"temprous ingot","resourceAccessible":false,"resourceTier":7},"WHEAT":{"name":"Wheat","resourceType":"FOOD","resourceEnum":"WHEAT","iconPath":"./assets/sprites/wheat.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1000,"workerYield":1,"sellable":true,"sellsFor":10,"resourceDescription":"Edible grass with endless purposes!","workerVerb":"Farms","workerNoun":"wheat","resourceAccessible":true,"resourceTier":0},"BREAD":{"name":"Bread","resourceType":"FOOD","resourceEnum":"BREAD","iconPath":"./assets/sprites/bread.png","resourceConsumes":[{"resourceEnum":"WHEAT","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":25,"edible":true,"foodMultiplier":1,"resourceDescription":"Gluten baked into a loaf.","workerVerb":"Bakes","workerNoun":"bread","resourceAccessible":true,"resourceTier":1},"RAWPOTATO":{"name":"Raw Potato","resourceType":"FOOD","resourceEnum":"RAWPOTATO","iconPath":"./assets/sprites/raw_potato.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1250,"workerYield":1,"sellable":true,"sellsFor":15,"resourceDescription":"","workerVerb":"Farms","workerNoun":"raw potato","resourceAccessible":true,"resourceTier":1},"POTATO":{"name":"Potato","resourceType":"FOOD","resourceEnum":"POTATO","iconPath":"./assets/sprites/potato.png","resourceConsumes":[{"resourceEnum":"RAWPOTATO","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":20,"edible":true,"foodMultiplier":2,"resourceDescription":"","workerVerb":"Bakes","workerNoun":"potato","resourceAccessible":true,"resourceTier":2},"RICE":{"name":"Rice","resourceType":"FOOD","resourceEnum":"RICE","iconPath":"./assets/sprites/rice.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"","workerVerb":"Farms","workerNoun":"rice","resourceAccessible":true,"resourceTier":2},"JELLYDONUT":{"name":"Jelly Donut","resourceType":"FOOD","resourceEnum":"JELLYDONUT","iconPath":"./assets/sprites/jelly_donut.png","resourceConsumes":[{"resourceEnum":"RICE","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":30,"edible":true,"foodMultiplier":3,"resourceDescription":"Blame 4Kids.","workerVerb":"Bakes","workerNoun":"\"jelly donut\"","resourceAccessible":true,"resourceTier":3},"RAWHERRING":{"name":"Raw Herring","resourceType":"FOOD","resourceEnum":"RAWHERRING","iconPath":"./assets/sprites/raw_herring.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1500,"workerYield":1,"sellable":true,"sellsFor":25,"resourceDescription":"Oddly enough, not a single one is red.","workerVerb":"Fishes","workerNoun":"herring","resourceAccessible":true,"resourceTier":2},"HERRING":{"name":"Herring","resourceType":"FOOD","resourceEnum":"HERRING","iconPath":"./assets/sprites/herring.png","resourceConsumes":[{"resourceEnum":"RAWHERRING","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":1750,"workerYield":1,"sellable":true,"sellsFor":30,"edible":true,"foodMultiplier":4,"resourceDescription":"Nope, still not red. (Maybe if we cook it again...?)","workerVerb":"Cooks","workerNoun":"herring","resourceAccessible":true,"resourceTier":3},"RAWBASS":{"name":"Raw Bass","resourceType":"FOOD","resourceEnum":"RAWBASS","iconPath":"./assets/sprites/raw_bass.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":2000,"workerYield":1,"sellable":true,"sellsFor":40,"resourceDescription":"","workerVerb":"Fishes","workerNoun":"bass","resourceAccessible":true,"resourceTier":3},"BASS":{"name":"Bass","resourceType":"FOOD","resourceEnum":"BASS","iconPath":"./assets/sprites/bass.png","resourceConsumes":[{"resourceEnum":"RAWBASS","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":2500,"workerYield":1,"sellable":true,"sellsFor":45,"edible":true,"foodMultiplier":5,"resourceDescription":"","workerVerb":"Cooks","workerNoun":"bass","resourceAccessible":true,"resourceTier":4},"RAWSHARK":{"name":"Raw Shark","resourceType":"FOOD","resourceEnum":"RAWSHARK","iconPath":"./assets/sprites/raw_shark.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":3000,"workerYield":1,"sellable":true,"sellsFor":60,"resourceDescription":"","workerVerb":"Fishes","workerNoun":"shark","resourceAccessible":true,"resourceTier":4},"SHARK":{"name":"Shark","resourceType":"FOOD","resourceEnum":"SHARK","iconPath":"./assets/sprites/shark.png","resourceConsumes":[{"resourceEnum":"RAWSHARK","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":3250,"workerYield":1,"sellable":true,"sellsFor":70,"edible":true,"foodMultiplier":6,"resourceDescription":"","workerVerb":"Cooks","workerNoun":"shark","resourceAccessible":true,"resourceTier":5},"RAWCHICKEN":{"name":"Raw Chicken","resourceType":"FOOD","resourceEnum":"RAWCHICKEN","iconPath":"./assets/sprites/raw_chicken.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":3500,"workerYield":1,"sellable":true,"sellsFor":75,"resourceDescription":"","workerVerb":"Hunts","workerNoun":"chicken","resourceAccessible":true,"resourceTier":4},"CHICKEN":{"name":"Chicken","resourceType":"FOOD","resourceEnum":"CHICKEN","iconPath":"./assets/sprites/chicken.png","resourceConsumes":[{"resourceEnum":"RAWCHICKEN","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":3750,"workerYield":1,"sellable":true,"sellsFor":80,"edible":true,"foodMultiplier":7,"resourceDescription":"","workerVerb":"Cooks","workerNoun":"chicken","resourceAccessible":true,"resourceTier":5},"RAWSTEAK":{"name":"Raw Steak","resourceType":"FOOD","resourceEnum":"RAWSTEAK","iconPath":"./assets/sprites/raw_steak.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":4000,"workerYield":1,"sellable":true,"sellsFor":85,"resourceDescription":"Tough, chewy meat harvested from cows. I'd recommend not eating it yet.","workerVerb":"Hunts","workerNoun":"steak","resourceAccessible":true,"resourceTier":5},"STEAK":{"name":"Steak","resourceType":"FOOD","resourceEnum":"STEAK","iconPath":"./assets/sprites/steak.png","resourceConsumes":[{"resourceEnum":"RAWSTEAK","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":4500,"workerYield":1,"sellable":true,"sellsFor":90,"edible":true,"foodMultiplier":8,"resourceDescription":"Okay, now it's probably safe.","workerVerb":"Cooks","workerNoun":"steak","resourceAccessible":true,"resourceTier":6},"RAWDRAGONMEAT":{"name":"Raw Dragon Meat","resourceType":"FOOD","resourceEnum":"RAWDRAGONMEAT","iconPath":"./assets/sprites/raw_dragon_meat.png","resourceConsumes":[],"harvestable":true,"harvestYield":5,"harvestMilliseconds":5000,"workerYield":1,"sellable":true,"sellsFor":125,"resourceDescription":"Some say hunting down dragons for food is overkill, but have you tasted them?","workerVerb":"Hunts","workerNoun":"dragon meat","resourceAccessible":true,"resourceTier":6},"DRAGONMEAT":{"name":"Dragon Meat","resourceType":"FOOD","resourceEnum":"DRAGONMEAT","iconPath":"./assets/sprites/dragon_meat.png","resourceConsumes":[{"resourceEnum":"RAWDRAGONMEAT","cost":1}],"harvestable":true,"harvestYield":5,"harvestMilliseconds":6500,"workerYield":1,"sellable":true,"sellsFor":150,"edible":true,"foodMultiplier":50,"resourceDescription":"Just like grandma used to make!","workerVerb":"Cooks","workerNoun":"dragon meat","resourceAccessible":true,"resourceTier":7}};

/***/ }),

/***/ "./src/assets/json/tileTypes.json":
/*!****************************************!*\
  !*** ./src/assets/json/tileTypes.json ***!
  \****************************************/
/*! exports provided: mapTiles, buildingTiles, resourceTiles, default */
/***/ (function(module) {

module.exports = {"mapTiles":{"GRASS":{"tileType":"GRASS","name":"Grass","walkable":true},"WATER":{"tileType":"WATER","name":"Water","walkable":false},"MOUNTAIN":{"tileType":"MOUNTAIN","name":"Mountain","walkable":false}},"buildingTiles":{"HOME":{"tileType":"HOME","subType":"MISC","name":"Home","description":"","placeable":false,"maxPlaceable":1,"baseHealth":50,"resourceCosts":[],"buildableSurfaces":[],"resourcePathable":true},"WALL":{"tileType":"WALL","subType":"MISC","name":"Wall","description":"Keeps invaders out.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"OAK","repairCostPerPoint":0.2,"resourceCosts":[{"resourceEnum":"OAK","resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":false},"ROAD":{"tileType":"ROAD","subType":"MISC","name":"Road","description":"Allows access between buildings.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"STONE","repairCostPerPoint":0.2,"resourceCosts":[{"resourceEnum":"STONE","resourceCost":20}],"buildableSurfaces":["GRASS"],"resourcePathable":true},"TUNNEL":{"tileType":"TUNNEL","subType":"MISC","name":"Tunnel","description":"Allows access to resources buried within rock.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"STONE","repairCostPerPoint":0.2,"resourceCosts":[{"resourceEnum":"STONE","resourceCost":35}],"buildableSurfaces":["MOUNTAIN"],"resourcePathable":true},"BRIDGE":{"tileType":"BRIDGE","subType":"MISC","name":"Bridge","description":"Allows access between islands.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"OAK","repairCostPerPoint":0.25,"resourceCosts":[{"resourceEnum":"OAK","resourceCost":40}],"buildableSurfaces":["WATER"],"resourcePathable":true},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","subType":"RESOURCE","name":"Cracked Forge","description":"An old, weary forge. Bronze ingots are probably all this thing is capable of producing.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"upgradeBuilding":"STONEFORGE","resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"CRACKEDFORGE","resourcePathable":true},"STONEFORGE":{"tileType":"STONEFORGE","subType":"RESOURCE","name":"Stone Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":false,"maxPlaceable":-1,"baseHealth":75,"repairResourceEnum":"GOLD","repairCostPerPoint":0.3,"upgradeBuilding":"IRONFORGE","resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":20},{"resourceEnum":"STONE","resourceCost":50},{"resourceEnum":"PINE","resourceCost":75}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"STONEFORGE","resourcePathable":true},"IRONFORGE":{"tileType":"IRONFORGE","subType":"RESOURCE","name":"Iron Forge","description":"This forge burns hotter, allowing you to create more precious ingots.","placeable":false,"maxPlaceable":-1,"baseHealth":125,"repairResourceEnum":"IRONINGOT","repairCostPerPoint":0.3,"upgradeBuilding":"GOLDFORGE","resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":500},{"resourceEnum":"EUCALYPTUS","resourceCost":700},{"resourceEnum":"MARBLE","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"IRONFORGE","resourcePathable":true},"GOLDFORGE":{"tileType":"GOLDFORGE","subType":"RESOURCE","name":"Gold Forge","description":"For reasons unknown to science, gold forges are particularly effective in forging latinum.","placeable":false,"maxPlaceable":-1,"baseHealth":150,"repairResourceEnum":"GOLDINGOT","repairCostPerPoint":0.35,"upgradeBuilding":"LATINUMFORGE","resourceCosts":[{"resourceEnum":"GOLDINGOT","resourceCost":1200},{"resourceEnum":"WILLOW","resourceCost":1500},{"resourceEnum":"QUARTZ","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"GOLDFORGE","resourcePathable":true},"LATINUMFORGE":{"tileType":"LATINUMFORGE","subType":"RESOURCE","name":"Latinum Forge","description":"A forge that burns hot enough to fuse together the world's most precious and rare metals.","placeable":false,"maxPlaceable":-1,"baseHealth":200,"repairResourceEnum":"LATINUMINGOT","repairCostPerPoint":0.5,"upgradeBuilding":"TEMPROUSDISTILLERY","resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":2500},{"resourceEnum":"TEAK","resourceCost":1500},{"resourceEnum":"OBSIDIAN","resourceCost":700}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"LATINUMFORGE","resourcePathable":true},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","subType":"RESOURCE","name":"Temprous Distillery","description":"With this device, all impurities can be removed from temprous ingots, unlocking their limitless potential.","placeable":false,"maxPlaceable":-1,"baseHealth":350,"repairResourceEnum":"TEMPROUSINGOT","repairCostPerPoint":0.65,"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":5000},{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"DIAMOND","resourceCost":1200}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"TEMPROUSDISTILLERY","resourcePathable":true},"WOODMARKET":{"tileType":"WOODMARKET","subType":"MARKET","name":"Wood Market","description":"A marketstand that automatically collects and sells wood resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"MINERALMARKET":{"tileType":"MINERALMARKET","subType":"MARKET","name":"Mineral Market","description":"A marketstand that automatically collects and sells mineral resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"METALMARKET":{"tileType":"METALMARKET","subType":"MARKET","name":"Metal Market","description":"A marketstand that automatically collects and sells metal resources. (Only one may be placed at a time.)","placeable":true,"maxPlaceable":1,"baseHealth":50,"repairResourceEnum":"GOLD","repairCostPerPoint":1,"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":false,"resourcePathable":true},"ENEMYPORTAL":{"tileType":"ENEMYPORTAL","subType":"MISC","name":"Enemy Portal","baseHealth":50,"description":"","placeable":false,"maxPlaceable":-1,"resourceCosts":[],"buildableSurfaces":[],"resourcePathable":true},"OAKOVEN":{"tileType":"OAKOVEN","subType":"RESOURCE","name":"Oak Oven","description":"Capable of heating up some basic kinds of food.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"OAK","repairCostPerPoint":2,"upgradeBuilding":"STONEOVEN","resourceCosts":[{"resourceEnum":"OAK","resourceCost":50},{"resourceEnum":"STONE","resourceCost":25}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"OAKOVEN","resourcePathable":true},"STONEOVEN":{"tileType":"STONEOVEN","subType":"RESOURCE","name":"Stone Oven","description":"Its hardened stone structure allows you to cook more filling and nutritious meals.","placeable":false,"maxPlaceable":-1,"baseHealth":75,"repairResourceEnum":"STONE","repairCostPerPoint":3,"upgradeBuilding":"MARBLEOVEN","resourceCosts":[{"resourceEnum":"PINE","resourceCost":75},{"resourceEnum":"STONE","resourceCost":150}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"STONEOVEN","resourcePathable":true},"MARBLEOVEN":{"tileType":"MARBLEOVEN","subType":"RESOURCE","name":"Marble Oven","description":"Some would say that marble ovens are needlessly lavish. I say they have no imagination.","placeable":false,"maxPlaceable":-1,"baseHealth":75,"repairResourceEnum":"MARBLE","repairCostPerPoint":3,"upgradeBuilding":"TEMPROUSOVEN","resourceCosts":[{"resourceEnum":"MARBLE","resourceCost":600},{"resourceEnum":"GOLDINGOT","resourceCost":200},{"resourceEnum":"WILLOW","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"MARBLEOVEN","resourcePathable":true},"TEMPROUSOVEN":{"tileType":"TEMPROUSOVEN","subType":"RESOURCE","name":"Temprous Oven","description":"Utilizes the power of time itself to cook your food before you even find it!","placeable":false,"maxPlaceable":-1,"baseHealth":150,"repairResourceEnum":"TEMPROUSINGOT","repairCostPerPoint":5,"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":2350},{"resourceEnum":"ENTSOUL","resourceCost":60},{"resourceEnum":"DIAMOND","resourceCost":250}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"TEMPROUSOVEN","resourcePathable":true},"CHICKENFARM":{"tileType":"CHICKENFARM","subType":"RESOURCE","name":"Chicken Farm","description":"A small farm to provide a source of food for your workers.","placeable":true,"maxPlaceable":-1,"baseHealth":50,"repairResourceEnum":"EUCALYPTUS","repairCostPerPoint":3,"upgradeBuilding":"COWFARM","resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":350},{"resourceEnum":"IRONINGOT","resourceCost":100}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"CHICKENFARM","resourcePathable":true},"COWFARM":{"tileType":"COWFARM","subType":"RESOURCE","name":"Cow Farm","description":"A larger farm that can feed more workers.","placeable":false,"maxPlaceable":-1,"baseHealth":100,"repairResourceEnum":"WILLOW","repairCostPerPoint":4,"upgradeBuilding":"DRAGONFARM","resourceCosts":[{"resourceEnum":"RAWCHICKEN","resourceCost":20},{"resourceEnum":"STEELINGOT","resourceCost":600},{"resourceEnum":"WILLOW","resourceCost":425}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"COWFARM","resourcePathable":true},"DRAGONFARM":{"tileType":"DRAGONFARM","subType":"RESOURCE","name":"Dragon Farm","description":"Fun for the whole family!","placeable":false,"maxPlaceable":-1,"baseHealth":150,"repairResourceEnum":"TEMPROUSINGOT","repairCostPerPoint":5,"resourceCosts":[{"resourceEnum":"RAWSTEAK","resourceCost":30},{"resourceEnum":"TEMPROUSINGOT","resourceCost":1200},{"resourceEnum":"DIAMOND","resourceCost":500}],"buildableSurfaces":["GRASS"],"placesResourceTile":true,"resourceTileType":"DRAGONFARM","resourcePathable":true}},"resourceTiles":{"OAKTREE":{"tileType":"OAKTREE","name":"Oak Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.65,"resourceEnums":["OAK"]},"PINETREE":{"tileType":"PINETREE","name":"Pine Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.45,"resourceEnums":["PINE"]},"BIRCHTREE":{"tileType":"BIRCHTREE","name":"Birch Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.2,"resourceEnums":["BIRCH"]},"EUCALYPTUSTREE":{"tileType":"EUCALYPTUSTREE","name":"Eucalptus Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.15,"resourceEnums":["EUCALYPTUS"]},"WILLOWTREE":{"tileType":"WILLOWTREE","name":"Willow Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["WILLOW"]},"TEAKTREE":{"tileType":"TEAKTREE","name":"Teak Tree","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.05,"resourceEnums":["TEAK"]},"DEADENT":{"tileType":"DEADENT","name":"Dead Ent","placeable":false,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.01,"resourceEnums":["ENTSOUL","REANIMATEDENT"]},"STONEMINE":{"tileType":"STONEMINE","name":"Stone Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.8,"resourceEnums":["STONE"]},"GRAPHITEMINE":{"tileType":"GRAPHITEMINE","name":"Graphite Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.15,"resourceEnums":["GRAPHITE"]},"LIMESTONEMINE":{"tileType":"LIMESTONEMINE","name":"Limestone Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["LIMESTONE"]},"MARBLEMINE":{"tileType":"MARBLEMINE","name":"Marble Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.05,"resourceEnums":["MARBLE"]},"QUARTZMINE":{"tileType":"QUARTZMINE","name":"Quartz Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.03,"resourceEnums":["QUARTZ"]},"OBSIDIANMINE":{"tileType":"OBSIDIANMINE","name":"Obsidian Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.02,"resourceEnums":["OBSIDIAN"]},"DIAMONDMINE":{"tileType":"DIAMONDMINE","name":"Diamond Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.01,"resourceEnums":["DIAMOND"]},"COPPERMINE":{"tileType":"COPPERMINE","name":"Copper Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.25,"resourceEnums":["COPPERORE"]},"TINMINE":{"tileType":"TINMINE","name":"Tin Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.25,"resourceEnums":["TINORE"]},"IRONMINE":{"tileType":"IRONMINE","name":"Iron Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.15,"resourceEnums":["IRONORE"]},"GOLDMINE":{"tileType":"GOLDMINE","name":"Gold Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["GOLDORE"]},"LATINUMMINE":{"tileType":"LATINUMMINE","name":"Latinum Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.05,"resourceEnums":["LATINUMORE"]},"UNBELIEVIUMMINE":{"tileType":"UNBELIEVIUMMINE","name":"Unbelievium Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.03,"resourceEnums":["UNBELIEVIUMORE"]},"LUSTRIALMINE":{"tileType":"LUSTRIALMINE","name":"Lustrial Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.03,"resourceEnums":["LUSTRIALORE"]},"SPECTRUSMINE":{"tileType":"SPECTRUSMINE","name":"Spectrus Mine","placeable":false,"spawnsOn":["MOUNTAIN"],"isNaturalResource":true,"spawnRate":0.03,"resourceEnums":["SPECTRUSORE"]},"CRACKEDFORGE":{"tileType":"CRACKEDFORGE","name":"Cracked Forge","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT"]},"STONEFORGE":{"tileType":"STONEFORGE","name":"Stone Forge","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT","IRONINGOT"]},"IRONFORGE":{"tileType":"IRONFORGE","name":"Iron Forge","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT"]},"GOLDFORGE":{"tileType":"GOLDFORGE","name":"Gold Forge","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT"]},"LATINUMFORGE":{"tileType":"LATINUMFORGE","name":"Latinum Forge","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT","TEMPROUSINGOT"]},"TEMPROUSDISTILLERY":{"tileType":"TEMPROUSDISTILLERY","name":"Temprous Distillery","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BRONZEINGOT","IRONINGOT","STEELINGOT","GOLDINGOT","LATINUMINGOT","TEMPROUSINGOT","REFINEDTEMPROUS"]},"FISHINGSPOT":{"tileType":"FISHINGSPOT","name":"Fishing Spot","placeable":false,"spawnsOn":["WATER"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["RAWHERRING","RAWBASS","RAWSHARK"]},"WHEATFARM":{"tileType":"WHEATFARM","name":"Wheat Farm","placeable":true,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["WHEAT"]},"RAWPOTATOFARM":{"tileType":"RAWPOTATOFARM","name":"Raw Potato Farm","placeable":true,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["RAWPOTATO"]},"RICEFARM":{"tileType":"RICEFARM","name":"Rice Farm","placeable":true,"spawnsOn":["GRASS"],"isNaturalResource":true,"spawnRate":0.1,"resourceEnums":["RICE"]},"OAKOVEN":{"tileType":"OAKOVEN","name":"Oak Oven","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BREAD","POTATO","HERRING"]},"STONEOVEN":{"tileType":"STONEOVEN","name":"Stone Oven","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BREAD","POTATO","HERRING","JELLYDONUT","HERRING","BASS"]},"MARBLEOVEN":{"tileType":"MARBLEOVEN","name":"Marble Oven","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BREAD","POTATO","HERRING","JELLYDONUT","HERRING","BASS","SHARK"]},"TEMPROUSOVEN":{"tileType":"TEMPROUSOVEN","name":"Temprous Oven","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["BREAD","POTATO","HERRING","JELLYDONUT","HERRING","BASS","SHARK","CHICKEN","STEAK","DRAGONMEAT"]},"CHICKENFARM":{"tileType":"CHICKENFARM","name":"Chicken Farm","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["RAWCHICKEN"]},"COWFARM":{"tileType":"COWFARM","name":"Cow Farm","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["RAWCHICKEN","RAWSTEAK"]},"DRAGONFARM":{"tileType":"DRAGONFARM","name":"Dragon Farm","placeable":true,"spawnsOn":[],"isNaturalResource":false,"spawnRate":0,"resourceEnums":["RAWCHICKEN","RAWSTEAK","RAWDRAGONMEAT"]}}};

/***/ }),

/***/ "./src/assets/json/upgrades.json":
/*!***************************************!*\
  !*** ./src/assets/json/upgrades.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, default */
/***/ (function(module) {

module.exports = [{"id":0,"upgradeType":"RESOURCE","name":"Refined Iron Axe","description":"A stronger, more durable axe. Harvests 20% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2,"maxTier":"1"}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":10},{"resourceEnum":"IRONINGOT","resourceCost":25}]},{"id":1,"upgradeType":"RESOURCE","name":"Twin Axes","description":"One axe in each hand means double productivity. It makes sense. Reduces wood harvesting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9,"maxTier":"1"}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":15},{"resourceEnum":"IRONINGOT","resourceCost":35}]},{"id":2,"upgradeType":"RESOURCE","name":"Worn Pickaxe","description":"A basic pickaxe. Not much, but it gets the job done. Allows harvesting of basic metals and minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":50}],"purchased":false},{"id":3,"upgradeType":"WORKER","name":"Lumberjack's Guild","description":"Form a guild to help your workers hone their skills. Workers harvest 15% more wood.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15,"maxTier":2}],"resourceCosts":[{"resourceEnum":"OAK","resourceCost":20}],"purchased":false},{"id":5,"upgradeType":"RESOURCE","name":"Bronze Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":5},{"resourceEnum":"PINE","resourceCost":15}]},{"id":6,"upgradeType":"RESOURCE","name":"Sharpened Pickaxe","description":"A highly sharpened pickaxe. Mines at a much higher rate.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":20},{"resourceEnum":"BIRCH","resourceCost":30}]},{"id":8,"upgradeType":"RESOURCE","name":"Bronze Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":2}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":10},{"resourceEnum":"OAK","resourceCost":30}]},{"id":9,"upgradeType":"RESOURCE","name":"Iron Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":4}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":30},{"resourceEnum":"BIRCH","resourceCost":60}]},{"id":10,"upgradeType":"RESOURCE","name":"Steel Axe","description":"With this, you can bring down stronger and taller trees.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":5}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":100},{"resourceEnum":"WILLOW","resourceCost":200}]},{"id":11,"upgradeType":"RESOURCE","name":"Latinum Axe","description":"An axe strong enough to free the spirits of ents from the bodies that entomb them.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1,"maxTier":6}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":1000},{"resourceEnum":"QUARTZ","resourceCost":250}]},{"id":12,"upgradeType":"RESOURCE","name":"Temprous Staff","description":"Imbued with the power of ages past, this staff can reunite ent spirits with their former bodies, granting them new life.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"GRAPHITE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":1500},{"resourceEnum":"ENTSOUL","resourceCost":10},{"resourceEnum":"DIAMOND","resourceCost":750}]},{"id":13,"upgradeType":"RESOURCE","name":"Iron Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":30},{"resourceEnum":"EUCALYPTUS","resourceCost":45}]},{"id":14,"upgradeType":"RESOURCE","name":"Steel Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":100},{"resourceEnum":"EUCALYPTUS","resourceCost":200}]},{"id":15,"upgradeType":"RESOURCE","name":"Latinum Pickaxe","description":"A stronger and more durable pickaxe, capable of mining more valuable metals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"SPECTRUSORE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":800},{"resourceEnum":"QUARTZ","resourceCost":250}]},{"id":20,"upgradeType":"RESOURCE","name":"Refined Steel Axe","description":"A stronger, more durable axe. Harvests 45% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":100},{"resourceEnum":"STEELINGOT","resourceCost":80}]},{"id":21,"upgradeType":"RESOURCE","name":"Refined Latinum Axe","description":"A stronger, more durable axe. Harvests 150% more wood per task.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":375},{"resourceEnum":"QUARTZ","resourceCost":200}]},{"id":22,"upgradeType":"RESOURCE","name":"Emblem of the Ents","description":"Imbues revived ents with far greater power. Grants an extra 75% per revived ent.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":1000},{"resourceEnum":"TEMPROUSINGOT","resourceCost":600},{"resourceEnum":"DIAMOND","resourceCost":425}]},{"id":23,"upgradeType":"RESOURCE","name":"Refined Iron Pickaxe","description":"A stronger, more durable pickaxe. Harvests 20% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceEnum":"PINE","resourceCost":25},{"resourceEnum":"IRONINGOT","resourceCost":25}]},{"id":24,"upgradeType":"RESOURCE","name":"Refined Steel Pickaxe","description":"A stronger, more durable pickaxe. Harvests 75% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.75}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":150},{"resourceEnum":"STEELINGOT","resourceCost":85}]},{"id":25,"upgradeType":"RESOURCE","name":"Refined Latinum Pickaxe","description":"A stronger, more durable pickaxe. Harvests 200% more material per task.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":550},{"resourceEnum":"LATINUMINGOT","resourceCost":1000},{"resourceEnum":"OBSIDIAN","resourceCost":750}]},{"id":26,"upgradeType":"RESOURCE","name":"Expanded Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceEnum":"BIRCH","resourceCost":25},{"resourceEnum":"IRONINGOT","resourceCost":25}]},{"id":27,"upgradeType":"RESOURCE","name":"Enhanced Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":200},{"resourceEnum":"IRONINGOT","resourceCost":100}]},{"id":28,"upgradeType":"RESOURCE","name":"Refined Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":200},{"resourceEnum":"STEELINGOT","resourceCost":100}]},{"id":29,"upgradeType":"RESOURCE","name":"Lavish Burner","description":"A larger burner for your forge, capable of smelting ores faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.8}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":350}]},{"id":30,"upgradeType":"RESOURCE","name":"Excessive Burner","description":"Alright, you can't possibly need this much space.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3.2}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":1500},{"resourceEnum":"TEMPROUSINGOT","resourceCost":600}]},{"id":31,"upgradeType":"RESOURCE","name":"Temprous Purifier","description":"Increases the purity of temprous ingots processed by the temprous distillery.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"TEMPROUSINGOT","resourceCost":800}]},{"id":32,"upgradeType":"RESOURCE","name":"Triplet Axes","description":"I'm not even going try and figure out how this works, okay?","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.86,"maxTier":3}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":55},{"resourceEnum":"STEELINGOT","resourceCost":85}]},{"id":33,"upgradeType":"RESOURCE","name":"Lumber Mill","description":"Processes logs at a rate far beyond what's possible manually.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8,"maxTier":5}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":850},{"resourceEnum":"LATINUMINGOT","resourceCost":650},{"resourceEnum":"OBSIDIAN","resourceCost":200}]},{"id":34,"upgradeType":"RESOURCE","name":"Enchanted Latinum Axe","description":"Enchanted by the spirits of fallen ents allows this axe's wielder to operate at an unnatural speed.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75,"maxTier":6}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"LATINUMINGOT","resourceCost":1000},{"resourceEnum":"DIAMOND","resourceCost":255}]},{"id":35,"upgradeType":"RESOURCE","name":"Temprous Siphon","description":"Using this siphon, ents can regain their full strength much more quickly.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.7}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":1500},{"resourceEnum":"LATINUMINGOT","resourceCost":1250},{"resourceEnum":"DIAMOND","resourceCost":600}]},{"id":36,"upgradeType":"RESOURCE","name":"Decorated Pickaxe","description":"Technically these pickaxes aren't any better, but they look pretty. And that's pretty nice.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":120},{"resourceEnum":"WILLOW","resourceCost":60},{"resourceEnum":"QUARTZ","resourceCost":110}]},{"id":37,"upgradeType":"RESOURCE","name":"Explosive Mining","description":"Pickaxes laced with a tiny, tiny amount of black powder. The science seems to add up.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"COPPERORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"TINORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"IRONORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"UNBELIEVIUMORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"LUSTRIALORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"SPECTRUSORE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":250},{"resourceEnum":"OBSIDIAN","resourceCost":110}]},{"id":38,"upgradeType":"RESOURCE","name":"Temprous Catalyst","description":"Speeds up the temprous purification process.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"REFINEDTEMPROUS","resourceCost":750},{"resourceEnum":"ENTSOUL","resourceCost":350},{"resourceEnum":"DIAMOND","resourceCost":160}]},{"id":39,"upgradeType":"RESOURCE","name":"Limestone Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9}],"resourceCosts":[{"resourceEnum":"BIRCH","resourceCost":50},{"resourceEnum":"LIMESTONE","resourceCost":80}]},{"id":40,"upgradeType":"RESOURCE","name":"Marble Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.88}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":120},{"resourceEnum":"MARBLE","resourceCost":220}]},{"id":41,"upgradeType":"RESOURCE","name":"Obsidian Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":350},{"resourceEnum":"OBSIDIAN","resourceCost":475}]},{"id":42,"upgradeType":"RESOURCE","name":"Diamond Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":750},{"resourceEnum":"OBSIDIAN","resourceCost":200},{"resourceEnum":"DIAMOND","resourceCost":1000}]},{"id":43,"upgradeType":"RESOURCE","name":"Temprous Burner","description":"This reinforced burner can withstand much higher temperatures, allowing you to produce ingots much faster.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BRONZEINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"IRONINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"STEELINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"GOLDINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"LATINUMINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"DIAMOND","resourceCost":350},{"resourceEnum":"TEMPROUSINGOT","resourceCost":1350}]},{"id":44,"upgradeType":"WORKER","name":"Kelley the Deforester","description":"Dammit, Jim! I'm a lumberjack, not a doctor! (Allows you to assign workers for more tree varieties.)","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceEnum":"GOLD","upgradeVariable":"WORKABLE","upgradeFactor":1,"resourceType":"WOOD","maxTier":5}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":3000}],"purchased":false},{"id":45,"upgradeType":"WORKER","name":"Elder Ent","description":"This respected ent elder will offer his services to help guide more of his kin back into this world.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"ENTSOUL","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":60000},{"resourceEnum":"REANIMATEDENT","resourceCost":1}]},{"id":46,"upgradeType":"WORKER","name":"Mineral Enthusiast","description":"Once an officer of the law, this man has put his career aside to pursue his true passion: mining minerals.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"STONE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"GRAPHITE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"LIMESTONE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"MARBLE","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"QUARTZ","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":4000}]},{"id":47,"upgradeType":"WORKER","name":"Mineral Obsessive","description":"This guy REALLY likes minerals!","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"DIAMOND","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"MARBLE","resourceCost":375},{"resourceEnum":"QUARTZ","resourceCost":300},{"resourceEnum":"OBSIDIAN","resourceCost":30},{"resourceEnum":"DIAMOND","resourceCost":20}]},{"id":48,"upgradeType":"WORKER","name":"Dwarven Miner","description":"Dwarves aren't actually very active miners. This guy just loves his job.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":5}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":4500}]},{"id":49,"upgradeType":"WORKER","name":"Dwarven Champion","description":"Dwarves are naturally inclined to be the best at whatever they do, even things that are totally un-dwarfish like mining.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"OBSIDIAN","upgradeVariable":"WORKABLE","upgradeFactor":1,"maxTier":7}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":60000},{"resourceEnum":"TEMPROUSINGOT","resourceCost":10}]},{"id":50,"upgradeType":"WORKER","name":"Musical Lumberjacks","description":"This funny little tune helps the lumberjacks stay focused, but you'll NEVER get it out of your head. Increases worker yield by 60%.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"WOOD","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.6,"maxTier":5}],"resourceCosts":[{"resourceEnum":"EUCALYPTUS","resourceCost":300}]},{"id":51,"upgradeType":"WORKER","name":"Entking","description":"With their king at last restored to his former glory, the ents find themselves greatly invigorated.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"ENTSOUL","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"REANIMATEDENT","upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"ENTSOUL","resourceCost":500},{"resourceEnum":"REFINEDTEMPROUS","resourceCost":150}]},{"id":52,"upgradeType":"WORKER","name":"Miner's Guild","description":"Form a guild to help your workers hone their skills. Miners harvest 15% more material.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"GOLD","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.15}],"resourceCosts":[{"resourceEnum":"GOLDINGOT","resourceCost":500}]},{"id":53,"upgradeType":"WORKER","name":"Miner Musical","description":"Those who underperform are \"encouraged\" to sing along.","upgradeEffects":[{"upgradeIsForWholeType":true,"resourceType":"MINERAL","resourceEnum":"OAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":6},{"upgradeIsForWholeType":true,"resourceType":"METAL","resourceEnum":"GOLD","upgradeVariable":"WORKER_YIELD","upgradeFactor":2,"maxTier":5}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":1500}]},{"id":54,"upgradeType":"WORKER","name":"Temprous Master","description":"There is no other with the prowess this master posesses in handling temprous metal. Workers generate 50% more temprous.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"TEMPROUSINGOT","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5},{"upgradeIsForWholeType":false,"resourceEnum":"REFINEDTEMPROUS","upgradeVariable":"WORKER_YIELD","upgradeFactor":1.5}],"resourceCosts":[{"resourceEnum":"REFINEDTEMPROUS","resourceCost":250},{"resourceEnum":"ENTSOUL","resourceCost":50}]},{"id":55,"upgradeType":"RESOURCE","name":"Bronze Hoe","description":"Allows you to harvest more crop varieties.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"WHEAT","resourceCost":10},{"resourceEnum":"BRONZEINGOT","resourceCost":5},{"resourceEnum":"PINE","resourceCost":10}]},{"id":57,"upgradeType":"RESOURCE","name":"Iron Hoe","description":"Allows you to harvest more crop varieties.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"RAWPOTATO","resourceCost":15},{"resourceEnum":"IRONINGOT","resourceCost":30},{"resourceEnum":"BIRCH","resourceCost":45}]},{"id":58,"upgradeType":"RESOURCE","name":"Fishing Rod","description":"With this, you can catch some small fish.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWHERRING","upgradeVariable":"HARVESTABILITY","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"RAWBASS","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":50},{"resourceEnum":"BIRCH","resourceCost":80}]},{"id":59,"upgradeType":"RESOURCE","name":"Gold-tipped Rod","description":"The bright metallic tip can attract some highly dangerous, and highly lucrative, fish.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWSHARK","upgradeVariable":"HARVESTABILITY","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"RAWHERRING","resourceCost":20},{"resourceEnum":"GOLDINGOT","resourceCost":120},{"resourceEnum":"EUCALYPTUS","resourceCost":80}]},{"id":60,"upgradeType":"RESOURCE","name":"Expanded Plots","description":"Gains 200% more crops per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"WHEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"WHEAT","resourceCost":50}]},{"id":61,"upgradeType":"RESOURCE","name":"Scarecrow","description":"Gains 300% more crops per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"WHEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4}],"resourceCosts":[{"resourceEnum":"WHEAT","resourceCost":250},{"resourceEnum":"BIRCH","resourceCost":120}]},{"id":62,"upgradeType":"RESOURCE","name":"Fishing Net","description":"Gains 200% more fish per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWHERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWBASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"RAWHERRING","resourceCost":400}]},{"id":63,"upgradeType":"RESOURCE","name":"Sign That Says \"Please Swim Into This Net\"","description":"Gains 300% more fish per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWHERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RAWBASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4}],"resourceCosts":[{"resourceEnum":"RAWBASS","resourceCost":650},{"resourceEnum":"EUCALYPTUS","resourceCost":300}]},{"id":64,"upgradeType":"RESOURCE","name":"Expanded Farm","description":"Gains 200% more creatures per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"WILLOW","resourceCost":1200},{"resourceEnum":"MARBLE","resourceCost":650}]},{"id":65,"upgradeType":"RESOURCE","name":"Massive Farm","description":"Gains 300% more creatures per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":4}],"resourceCosts":[{"resourceEnum":"TEAK","resourceCost":2000},{"resourceEnum":"LATINUMINGOT","resourceCost":800}]},{"id":66,"upgradeType":"RESOURCE","name":"Sharpened Tools","description":"Reduces farming time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"WHEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"STONE","resourceCost":50},{"resourceEnum":"OAK","resourceCost":20}]},{"id":67,"upgradeType":"RESOURCE","name":"Automated Harvesting","description":"Reduces farming time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"WHEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":150},{"resourceEnum":"PINE","resourceCost":60}]},{"id":68,"upgradeType":"RESOURCE","name":"Decent Rod","description":"Reduces fishing time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWHERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWBASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"RAWHERRING","resourceCost":60},{"resourceEnum":"BIRCH","resourceCost":200}]},{"id":69,"upgradeType":"RESOURCE","name":"Not-too-shabby Rod","description":"Reduces fishing time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWHERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWBASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"RAWBASS","resourceCost":70},{"resourceEnum":"MARBLE","resourceCost":250}]},{"id":70,"upgradeType":"RESOURCE","name":"Marble Walls","description":"Reduces creature hunting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"MARBLE","resourceCost":400},{"resourceEnum":"EUCALYPTUS","resourceCost":250}]},{"id":71,"upgradeType":"RESOURCE","name":"Obsidian Walls","description":"Reduces creature hunting time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"OBSIDIAN","resourceCost":650},{"resourceEnum":"TEAK","resourceCost":325},{"resourceEnum":"LATINUMINGOT","resourceCost":120}]},{"id":72,"upgradeType":"RESOURCE","name":"Stone Oven Frame","description":"Reduces oven harvest time by 10%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.9}],"resourceCosts":[{"resourceEnum":"STONE","resourceCost":60},{"resourceEnum":"OAK","resourceCost":45}]},{"id":73,"upgradeType":"RESOURCE","name":"Iron Oven Frame","description":"Reduces oven harvest time by 15%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":100},{"resourceEnum":"BIRCH","resourceCost":65}]},{"id":74,"upgradeType":"RESOURCE","name":"Steel Oven Frame","description":"Reduces oven harvest time by 15%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.85}],"resourceCosts":[{"resourceEnum":"STEELINGOT","resourceCost":225},{"resourceEnum":"WILLOW","resourceCost":100}]},{"id":75,"upgradeType":"RESOURCE","name":"Obsidian Oven Frame","description":"Reduces oven harvest time by 20%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.8}],"resourceCosts":[{"resourceEnum":"OBSIDIAN","resourceCost":330},{"resourceEnum":"TEAK","resourceCost":150}]},{"id":76,"upgradeType":"RESOURCE","name":"Diamond Oven Frame","description":"Reduces oven harvest time by 25%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.75}],"resourceCosts":[{"resourceEnum":"DIAMOND","resourceCost":450},{"resourceEnum":"TEAK","resourceCost":250}]},{"id":77,"upgradeType":"RESOURCE","name":"Temprous Oven Frame","description":"Reduces oven harvest time by 50%.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"HARVEST_MILLISECONDS","upgradeFactor":0.5}],"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":675},{"resourceEnum":"DIAMOND","resourceCost":500},{"resourceEnum":"TEAK","resourceCost":300}]},{"id":78,"upgradeType":"WORKER","name":"Monster Pocketer","description":"Allows workers to be assigned to hunting creatures.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":15000}]},{"id":79,"upgradeType":"WORKER","name":"Personal Chef","description":"Allows workers to be assigned to some cooking tasks.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":1250}]},{"id":80,"upgradeType":"WORKER","name":"Noseless Chef","description":"Allows workers to be assigned to cooking fish.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":15000}]},{"id":81,"upgradeType":"WORKER","name":"Five-star Restaurant","description":"Allows workers to be assigned to cooking creatures.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"CHICKEN","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"STEAK","upgradeVariable":"WORKABLE","upgradeFactor":1},{"upgradeIsForWholeType":false,"resourceEnum":"DRAGONMEAT","upgradeVariable":"WORKABLE","upgradeFactor":1}],"resourceCosts":[{"resourceEnum":"GOLD","resourceCost":30000},{"resourceEnum":"RAWCHICKEN","resourceCost":50},{"resourceEnum":"RAWSTEAK","resourceCost":20},{"resourceEnum":"RAWDRAGONMEAT","resourceCost":10}]},{"id":82,"upgradeType":"WORKER","name":"Farmer Dating App","description":"Workers gain 200% more crops per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"WHEAT","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWPOTATO","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RICE","upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"WHEAT","resourceCost":60}]},{"id":83,"upgradeType":"WORKER","name":"Hunting Season","description":"Workers gain 200% more fish/animals per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"RAWHERRING","resourceCost":100},{"resourceEnum":"RAWBASS","resourceCost":40}]},{"id":84,"upgradeType":"WORKER","name":"Food Critic","description":"Workers cook 200% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"WORKER_YIELD","upgradeFactor":3},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":3}],"resourceCosts":[{"resourceEnum":"HERRING","resourceCost":80},{"resourceEnum":"BASS","resourceCost":60}]},{"id":85,"upgradeType":"WORKER","name":"Temporal Cooking","description":"Workers cook 500% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"WORKER_YIELD","upgradeFactor":6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"WORKER_YIELD","upgradeFactor":6}],"resourceCosts":[{"resourceEnum":"REFINEDTEMPROUS","resourceCost":300},{"resourceEnum":"TEAK","resourceCost":85}]},{"id":86,"upgradeType":"RESOURCE","name":"Reinforced Oven","description":"Cooks 20% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.2}],"resourceCosts":[{"resourceEnum":"BRONZEINGOT","resourceCost":60},{"resourceEnum":"PINE","resourceCost":20}]},{"id":87,"upgradeType":"RESOURCE","name":"Cleaned Oven","description":"Cooks 45% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.45}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":60},{"resourceEnum":"LIMESTONE","resourceCost":125}]},{"id":88,"upgradeType":"RESOURCE","name":"Fortified Oven","description":"Cooks 60% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.6}],"resourceCosts":[{"resourceEnum":"IRONINGOT","resourceCost":200},{"resourceEnum":"EUCALYPTUS","resourceCost":100}]},{"id":89,"upgradeType":"RESOURCE","name":"Artisan Oven","description":"Cooks 80% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":1.8}],"resourceCosts":[{"resourceEnum":"GOLDINGOT","resourceCost":600},{"resourceEnum":"QUARTZ","resourceCost":250}]},{"id":90,"upgradeType":"RESOURCE","name":"Semi-Perfect Oven","description":"Cooks 100% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2}],"resourceCosts":[{"resourceEnum":"LATINUMINGOT","resourceCost":800},{"resourceEnum":"OBSIDIAN","resourceCost":550}]},{"id":91,"upgradeType":"RESOURCE","name":"Perfect Oven","description":"Cooks 250% more food per harvest.","upgradeEffects":[{"upgradeIsForWholeType":false,"resourceEnum":"BREAD","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"POTATO","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"JELLYDONUT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"HERRING","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"BASS","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"SHARK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWCHICKEN","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWSTEAK","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5},{"upgradeIsForWholeType":false,"resourceEnum":"RAWDRAGONMEAT","upgradeVariable":"HARVEST_YIELD","upgradeFactor":2.5}],"resourceCosts":[{"resourceEnum":"TEMPROUSINGOT","resourceCost":1200},{"resourceEnum":"DIAMOND","resourceCost":800},{"resourceEnum":"RAWDRAGONMEAT","resourceCost":250}]}];

/***/ }),

/***/ "./src/assets/json/workers.json":
/*!**************************************!*\
  !*** ./src/assets/json/workers.json ***!
  \**************************************/
/*! exports provided: WOOD, FOOD, MINERAL, METAL, default */
/***/ (function(module) {

module.exports = {"WOOD":{"id":0,"cost":250,"resourceType":"WOOD","priorityOrder":1,"resourceWorkers":{"OAK":{"resourceEnum":"OAK","workable":true,"recurringCost":5},"PINE":{"resourceEnum":"PINE","workable":false,"recurringCost":5},"BIRCH":{"resourceEnum":"BIRCH","workable":false,"recurringCost":6},"EUCALYPTUS":{"resourceEnum":"EUCALYPTUS","workable":false,"recurringCost":7},"WILLOW":{"resourceEnum":"WILLOW","workable":false,"recurringCost":8},"TEAK":{"resourceEnum":"TEAK","workable":false,"recurringCost":9},"ENTSOUL":{"resourceEnum":"ENTSOUL","workable":false,"recurringCost":10},"REANIMATEDENT":{"resourceEnum":"REANIMATEDENT","workable":false,"recurringCost":15}}},"FOOD":{"id":3,"cost":500,"resourceType":"FOOD","priorityOrder":0,"resourceWorkers":{"WHEAT":{"resourceEnum":"WHEAT","workable":true,"workerYield":25,"recurringCost":1},"RAWPOTATO":{"resourceEnum":"RAWPOTATO","workable":true,"workerYield":20,"recurringCost":1},"RICE":{"resourceEnum":"RICE","workable":true,"workerYield":20,"recurringCost":1},"BREAD":{"resourceEnum":"BREAD","workable":true,"workerYield":25,"recurringCost":1},"POTATO":{"resourceEnum":"POTATO","workable":false,"workerYield":20,"recurringCost":1},"JELLYDONUT":{"resourceEnum":"JELLYDONUT","workable":false,"workerYield":20,"recurringCost":1},"RAWHERRING":{"resourceEnum":"RAWHERRING","workable":false,"workerYield":20,"recurringCost":2},"RAWBASS":{"resourceEnum":"RAWBASS","workable":false,"workerYield":15,"recurringCost":2},"RAWSHARK":{"resourceEnum":"RAWSHARK","workable":false,"workerYield":10,"recurringCost":2},"HERRING":{"resourceEnum":"HERRING","workable":false,"workerYield":20,"recurringCost":2},"BASS":{"resourceEnum":"BASS","workable":false,"workerYield":15,"recurringCost":2},"SHARK":{"resourceEnum":"SHARK","workable":false,"workerYield":10,"recurringCost":2},"RAWCHICKEN":{"resourceEnum":"RAWCHICKEN","workable":false,"workerYield":12,"recurringCost":3},"RAWSTEAK":{"resourceEnum":"RAWSTEAK","workable":false,"workerYield":10,"recurringCost":3},"RAWDRAGONMEAT":{"resourceEnum":"RAWDRAGONMEAT","workable":false,"workerYield":5,"recurringCost":3},"CHICKEN":{"resourceEnum":"CHICKEN","workable":false,"workerYield":12,"recurringCost":3},"STEAK":{"resourceEnum":"STEAK","workable":false,"workerYield":10,"recurringCost":3},"DRAGONMEAT":{"resourceEnum":"DRAGONMEAT","workable":false,"workerYield":5,"recurringCost":3}}},"MINERAL":{"id":2,"cost":650,"priorityOrder":1,"resourceType":"MINERAL","resourceWorkers":{"STONE":{"resourceEnum":"STONE","workable":true,"recurringCost":5},"GRAPHITE":{"resourceEnum":"GRAPHITE","workable":false,"recurringCost":6},"LIMESTONE":{"resourceEnum":"LIMESTONE","workable":false,"recurringCost":7},"MARBLE":{"resourceEnum":"MARBLE","workable":false,"recurringCost":8},"QUARTZ":{"resourceEnum":"QUARTZ","workable":false,"recurringCost":9},"OBSIDIAN":{"resourceEnum":"OBSIDIAN","workable":false,"recurringCost":10},"DIAMOND":{"resourceEnum":"DIAMOND","workable":false,"recurringCost":10}}},"METAL":{"id":1,"cost":1000,"resourceType":"METAL","priorityOrder":1,"resourceWorkers":{"COPPERORE":{"resourceEnum":"COPPERORE","workable":false,"recurringCost":7},"TINORE":{"resourceEnum":"TINORE","workable":false,"recurringCost":7},"BRONZEINGOT":{"resourceEnum":"BRONZEINGOT","workable":false,"recurringCost":8},"IRONORE":{"resourceEnum":"IRONORE","workable":false,"recurringCost":8},"IRONINGOT":{"resourceEnum":"IRONINGOT","workable":false,"recurringCost":9},"STEELINGOT":{"resourceEnum":"STEELINGOT","workable":false,"recurringCost":10},"GOLDORE":{"resourceEnum":"GOLDORE","workable":false,"recurringCost":11},"GOLDINGOT":{"resourceEnum":"GOLDINGOT","workable":false,"recurringCost":12},"LATINUMORE":{"resourceEnum":"LATINUMORE","workable":false,"recurringCost":13},"LATINUMINGOT":{"resourceEnum":"LATINUMINGOT","workable":false,"recurringCost":15},"UNBELIEVIUMORE":{"resourceEnum":"UNBELIEVIUMORE","workable":false,"recurringCost":17},"LUSTRIALORE":{"resourceEnum":"LUSTRIALORE","workable":false,"recurringCost":17},"SPECTRUSORE":{"resourceEnum":"SPECTRUSORE","workable":false,"recurringCost":17},"TEMPROUSINGOT":{"resourceEnum":"TEMPROUSINGOT","workable":false,"recurringCost":20},"REFINEDTEMPROUS":{"resourceEnum":"REFINEDTEMPROUS","workable":false,"recurringCost":25}}}};

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

module.exports = __webpack_require__(/*! /home/david/clickergame/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map