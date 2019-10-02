import { $, by, element} from "protractor";
export class HomePage {
  static findProductInTable(arg0: any) {
    throw new Error("Method not implemented.");
  }
public addProductButton = $("a.mat-flat-button.mat-primary");

public findProductInTable = (product: myLib.Product) => {
    return element(by.cssContainingText(".mat-cell", product.name));
}

}
