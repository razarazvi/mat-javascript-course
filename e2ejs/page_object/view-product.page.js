"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ViewProductPage {
    constructor() {
        this.deleteButton = protractor_1.$(".mat-flat-button.mat-warn");
        /**
         * Used to create the locator for the product name (it's parameterised as we don't know what product we've created)
         *
         * @param product that we've created using the test data
         * @returns the ElementFinder for the 'name' of the product on the view Product Page
         */
        this.productName = (product) => {
            return protractor_1.element(protractor_1.by.cssContainingText("h2", product.name));
        };
    }
}
exports.ViewProductPage = ViewProductPage;
