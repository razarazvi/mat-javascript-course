"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddProductPage {
    constructor() {
        this.productNameField = protractor_1.$("#mat-input-0");
        this.productDescriptionField = protractor_1.$("#mat-input-1");
        this.productPriceField = protractor_1.$("#mat-input-2");
        this.submitButtonField = protractor_1.$("[type=submit]");
    }
}
exports.AddProductPage = AddProductPage;
