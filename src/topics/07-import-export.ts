import {Product, taxtCalculation , TaxCalculationOptions } from './06-functions-destructurig'

const shoppingCart: Product[] = [
    {  
            description: 'Nokia', 
            price: 100
    },
    {  
        description: 'iPad', 
        price: 150
    },

];

const taxCalculationOptions:TaxCalculationOptions = {
    tax: 0.15,
    products: shoppingCart
}
const [total, tax] = taxtCalculation(taxCalculationOptions);

/*tambien se puede hacer el llamado directamente a la función del objeto

const [total, tax] = taxtCalculation({
    tax: 0.15,
    products: shoppingCart
});*/



console.log ({total, tax});
