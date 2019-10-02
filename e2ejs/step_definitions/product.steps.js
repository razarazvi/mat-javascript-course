"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const add_product_page_1 = require("../page_object/add-product.page");
const home_page_1 = require("../page_object/home.page");
const view_product_page_1 = require("../page_object/view-product.page");
cucumber_1.setDefaultTimeout(60 * 1000);
const homepage = new home_page_1.HomePage();
const addProductPage = new add_product_page_1.AddProductPage();
const viewProductPage = new view_product_page_1.ViewProductPage();
// Import chai and the 'expect' command.
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
cucumber_1.Given('a product doesn\'t exist', function (dataTable) {
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];
    homepage.findProductInTable(this.product).click();
    viewProductPage.deleteButton.click();
    return expect(homepage.findProductInTable(this.product).isPresent())
        .to.eventually.be.false;
});
cucumber_1.When('I add the product', function () {
    homepage.addProductButton.click();
    addProductPage.productNameField.sendKeys(this.product.name);
    addProductPage.productDescriptionField.sendKeys(this.product.description);
    addProductPage.productPriceField.sendKeys(this.product.price);
    return addProductPage.submitButtonField.click();
    // Write code here that turns the phrase above into concrete actions
});
cucumber_1.Then('the product is created', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(viewProductPage.productName(this.product).isPresent())
        .to.eventually.be.true;
});
