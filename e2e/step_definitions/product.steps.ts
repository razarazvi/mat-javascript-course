import { Given, setDefaultTimeout, Then, When } from "cucumber";
import { AddProductPage } from "../page_object/add-product.page";
import { HomePage } from "../page_object/home.page";
import { ViewProductPage } from "../page_object/view-product.page";

setDefaultTimeout(60 * 1000);

const homepage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

// Import chai and the 'expect' command.
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('a product doesn\'t exist', function (dataTable) {

  const arrayOfProducts = dataTable.hashes();
  this.product = arrayOfProducts[0];

  homepage.findProductInTable(this.product).click();
  viewProductPage.deleteButton.click();

  return expect(homepage.findProductInTable(this.product).isPresent())
  .to.eventually.be.false;
});

When('I add the product', function () {
  homepage.addProductButton.click();

  addProductPage.productNameField.sendKeys(this.product.name);
  addProductPage.productDescriptionField.sendKeys(this.product.description);
  addProductPage.productPriceField.sendKeys(this.product.price);

  return addProductPage.submitButtonField.click();
  
    // Write code here that turns the phrase above into concrete actions

  });

Then('the product is created', function () {
    // Write code here that turns the phrase above into concrete actions
    return expect(viewProductPage.productName(this.product).isPresent())
    .to.eventually.be.true;

  });
