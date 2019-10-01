
// Type definitions for productList Test Automation Framwork

declare namespace myLib { 

    
// Our global 'product' type/interface
interface product {
    //must have name
    name: string;
    // must have description
    description: string;
    // must have price
    price: string;

}

    // example one that we're not using in our framework
    interface customerDetails {
        name: string;
        address: string;
        // ? means that the vehicle details are optionl
        vehicleDetails?:  {
            make: string;
            model: string;
            year: number;
        }
    }




}

 