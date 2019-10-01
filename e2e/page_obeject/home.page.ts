import { $, by, element} from "protractor";
export class HomePage {
public addProductButton = $(".mat-glat-button.mat-primary");

public findProductInTable = (product: myLib.Product) => {
    return element(by.cssContainingTest(".mat-cell", product.name));
}

}
