webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Bachelorarbeit - Tamer Karatekin\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="/assets/img/systems.jpg" />\n  <ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n        Bachelorarbeit\n      </ion-card-title>\n      Das ist die Beispielapplikation, die die Funktionalitäten des Frameworks testen wird.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Person */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());

var DbTestPage = (function () {
    function DbTestPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.queryList = [];
        this.historyCommands = [];
        this.personList = [];
        //querys for sql database
        this.queryList.push("Create table BachelorIonic(name Varchar(32),address Varchar(32), birth int)");
        this.queryList.push("Insert into BachelorIonic(Tamer, Subbelratherstraße 489 Köln, 26.06.1993)");
        this.queryList.push("Insert into BachelorIonic(Steffen, Wiener Platz Köln, 01.03.1995)");
        this.queryList.push("Update BachelorIonic set name = Manfred, address = Neumarkt Köln, birth = 10.09.1994 where name=steffen");
        this.queryList.push("Select * from BachelorIonic");
        this.queryList.push("Drop table BachelorIonic");
        var tamer = {
            name: "Tamer",
            age: "24"
        };
        var steffen = {
            name: "Steffen",
            age: "22"
        };
        var manfred = {
            name: "Manfred",
            age: "23"
        };
        this.personList.push(tamer);
        this.personList.push(steffen);
        this.personList.push(manfred);
    }
    DbTestPage.prototype.executeSql = function (query) {
        this.historyCommands.push(query);
        // this.sqlite.create({
        //   name: this.dbname,
        //   location: "default"
        // }).then((db: SQLiteObject) => {
        //   db.executeSql(query, {}).then(() => {
        //     console.log("Sql query succesfull executed");
        //   })
        // }).catch(err => {
        //   console.log(err);
        // });
    };
    DbTestPage.prototype.executeNOSQL = function (person) {
        var _this = this;
        console.log(person);
        //console.log(this.personObject.getName());
        console.log(JSON.stringify(person));
        this.historyCommands.push("Set json object: " + JSON.stringify(person));
        this.storage.ready().then(function () {
            _this.storage.set(person.name, person).then(function (result) {
                console.log(result);
            });
            _this.storage.get(person.name).then(function (val) {
                _this.result = val;
            });
        }).catch(function (e) { return console.log(e); });
    };
    ;
    return DbTestPage;
}());
DbTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/dbTest/dbTest.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Datenbank Test\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class="card">\n        <ion-card-content>\n            <ion-card-title>\n                SQL Befehle\n            </ion-card-title>\n            <ion-item>\n                <ion-select cancelText="Abbrechen" okText="SQL Befehl ausführen!" interface="action-sheet">\n                    <ion-option *ngFor="let item of queryList" value="{{item}}" (ionSelect)="executeSql($event)">\n                        <ion-item>{{item}}</ion-item>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class="card">\n        <ion-card-content>\n            <ion-card-title>\n                NoSQL JSON Objekte\n            </ion-card-title>\n            <ion-item>\n                <ion-select cancelText="Abbrechen" okText="JSON Objekt speichern!" interface="action-sheet">\n                    <ion-option *ngFor="let person of personList" (ionSelect)="executeNOSQL(person)">\n                        <ion-item>Name:{{person.name}} Alter: {{person.age}}</ion-item>\n                    </ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-label>\n        History\n    </ion-label>\n    <ion-list *ngFor="let cmd of historyCommands">\n        <ion-item text-wrap>{{cmd}}\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/dbTest/dbTest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], DbTestPage);

//# sourceMappingURL=dbTest.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USBTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var USBTestPage = (function () {
    function USBTestPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.devices = [];
    }
    USBTestPage.prototype.getUsbDevices = function () {
        try {
            this.usbPlugin = cordova.chrome.usb;
            console.log(this.usbPlugin);
            this.usbPlugin.getDevices({}, function (found_devices) {
                console.log(found_devices);
                if (found_devices) {
                    for (var _i = 0, found_devices_1 = found_devices; _i < found_devices_1.length; _i++) {
                        var device = found_devices_1[_i];
                        console.log(device);
                        this.devices.push(device);
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
        catch (err) {
            console.log(err);
        }
        ;
    };
    return USBTestPage;
}());
USBTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/usbTest/usbTest.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      USB Test\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="/assets/img/systems.jpg" />\n\n\n\n  <button ion-button (click)="getUsbDevices()"> USB Devices anzeigen </button>\n\n\n\n  {{devices}}\n\n</ion-content>\n\n'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/usbTest/usbTest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], USBTestPage);

//# sourceMappingURL=usbTest.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkTestPage = (function () {
    function NetworkTestPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.small = [];
        this.medium = [];
        this.large = [];
    }
    NetworkTestPage.prototype.downloadSmall = function () {
        var _this = this;
        this.http.get('http://bachelor-bachelor.193b.starter-ca-central-1.openshiftapps.com/small').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.small = data.data.children;
        });
    };
    ;
    NetworkTestPage.prototype.downloadMedium = function () {
        var _this = this;
        this.http.get('http://bachelor-bachelor.193b.starter-ca-central-1.openshiftapps.com/medium').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.medium = data.data.children;
        });
    };
    ;
    NetworkTestPage.prototype.downloadLarge = function () {
        var _this = this;
        this.http.get('http://bachelor-bachelor.193b.starter-ca-central-1.openshiftapps.com/large').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.large = data.data.children;
        });
    };
    ;
    return NetworkTestPage;
}());
NetworkTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/networkTest/networkTest.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Network Test\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <img src="/assets/img/systems.jpg" />\n\n    <ion-list>\n        <ion-item> <button ion-button (click)="downloadSmall()"> Small JSON file</button></ion-item>\n        <ion-item> <button ion-button (click)="downloadMedium()"> Merdium JSON file</button></ion-item>\n        <ion-item> <button ion-button (click)="downloadLarge()"> Large JSON file</button></ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/networkTest/networkTest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], NetworkTestPage);

//# sourceMappingURL=networkTest.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NativeTestPage = (function () {
    function NativeTestPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    NativeTestPage.prototype.pushNot = function () {
        Notification.requestPermission(function (status) {
            console.log('Notification permission status:', status);
            if (status == 'granted') {
                navigator.serviceWorker.getRegistration().then(function (reg) {
                    var options = {
                        body: 'Lokale Pushbenachrichtigungen!',
                        icon: '../assets/img/systems.jpg',
                        vibrate: [100, 50, 100],
                        data: {
                            dateOfArrival: Date.now(),
                            primaryKey: 1
                        }
                    };
                    reg.showNotification('Lokale Pushbenachrichtigungen', options);
                });
            }
        });
    };
    return NativeTestPage;
}());
NativeTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/nativeTest/nativeTest.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Native Test\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="/assets/img/systems.jpg" />\n  <button ion-button (click)="pushNot()"> Erhalte eine lokale Pushbenachrichtigung! </button>\n\n</ion-content>\n<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js"></script>\n<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-auth.js"></script>\n<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-database.js"></script>\n<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js"></script>\n\n<!-- Leave out Storage -->\n<!-- <script src="https://www.gstatic.com/firebasejs/4.2.0/firebase-storage.js"></script> -->\n\n<script>\nvar config = {\n   apiKey: "AIzaSyBl2GElLuuCSgwIWBUNRBDz21jl7X-zglw",\n   authDomain: "bachelorarbeit-e3eba.firebaseapp.com",\n   databaseURL: "https://bachelorarbeit-e3eba.firebaseio.com",\n   projectId: "bachelorarbeit-e3eba",\n   storageBucket: "bachelorarbeit-e3eba.appspot.com",\n   messagingSenderId: "360244316212"\n };\n firebase.initializeApp(config);\n </script>\n'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/nativeTest/nativeTest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], NativeTestPage);

//# sourceMappingURL=nativeTest.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerformanceTestPage = (function () {
    function PerformanceTestPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rows = [
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
            'row 1',
            'row 2',
        ];
        this.show = false;
    }
    PerformanceTestPage.prototype.showRows = function () {
        if (this.show) {
            this.show = false;
        }
        else {
            this.show = true;
        }
    };
    return PerformanceTestPage;
}());
PerformanceTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/pages/performanceTest/performanceTest.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Performance Test\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="/assets/img/systems.jpg" />\n  <button ion-button (click)="showRows()"> Test infinty List</button>\n  <div *ngIf="show">\n    <ion-list no-lines>\n      <button ion-item *ngFor="let row of rows" >\n    {{ row }}\n  </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/pages/performanceTest/performanceTest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], PerformanceTestPage);

//# sourceMappingURL=performanceTest.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dbTest_dbTest__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usbTest_usbTest__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_networkTest_networkTest__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nativeTest_nativeTest__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_performanceTest_performanceTest__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Pages










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dbTest_dbTest__["a" /* DbTestPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_usbTest_usbTest__["a" /* USBTestPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_networkTest_networkTest__["a" /* NetworkTestPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_nativeTest_nativeTest__["a" /* NativeTestPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_performanceTest_performanceTest__["a" /* PerformanceTestPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dbTest_dbTest__["a" /* DbTestPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_usbTest_usbTest__["a" /* USBTestPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_networkTest_networkTest__["a" /* NetworkTestPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_nativeTest_nativeTest__["a" /* NativeTestPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_performanceTest_performanceTest__["a" /* PerformanceTestPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dbTest_dbTest__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usbTest_usbTest__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_networkTest_networkTest__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nativeTest_nativeTest__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_performanceTest_performanceTest__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Pages






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Datenbank', component: __WEBPACK_IMPORTED_MODULE_5__pages_dbTest_dbTest__["a" /* DbTestPage */] },
            { title: 'Usb', component: __WEBPACK_IMPORTED_MODULE_6__pages_usbTest_usbTest__["a" /* USBTestPage */] },
            { title: 'Netzwerk', component: __WEBPACK_IMPORTED_MODULE_7__pages_networkTest_networkTest__["a" /* NetworkTestPage */] },
            { title: 'Native Komponenten', component: __WEBPACK_IMPORTED_MODULE_8__pages_nativeTest_nativeTest__["a" /* NativeTestPage */] },
            { title: 'Performance', component: __WEBPACK_IMPORTED_MODULE_9__pages_performanceTest_performanceTest__["a" /* PerformanceTestPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/tamer/workspace/bachelor_pwa/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/tamer/workspace/bachelor_pwa/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map