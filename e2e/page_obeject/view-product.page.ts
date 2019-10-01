import {$, by, element} from "protractor";

export class ViewProductPage {

/**
 * Used to create the locator for the product name (it's parameterised as we don't know what product we've created)
 *
 * @param product that we've created using the test data
 * @returns the ElementFinder for the 'name' of the product on the view Product Page
 */
 public productName = (product: myLib.Product) => {
     return element(by.cssContainingTest("h2", product.name))
 }

}
