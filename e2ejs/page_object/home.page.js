"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.addProductButton = protractor_1.$("a.mat-flat-button.mat-primary");
        this.findProductInTable = (product) => {
            return protractor_1.element(protractor_1.by.cssContainingText(".mat-cell", product.name));
        };
    }
    static findProductInTable(arg0) {
        throw new Error("Method not implemented.");
    }
}
exports.HomePage = HomePage;
