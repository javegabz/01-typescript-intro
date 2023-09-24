export interface Product {
    description:string;
    price:number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0

}

const tablet: Product = {
    description: 'Ipod Air',
    price: 250.0
}

export interface TaxCalculationOptions {
    tax:number;
    products:Product[];
}


//se puede aplicar la destructuracion en option
export function taxtCalculation(options:TaxCalculationOptions): number[] {
    let total=0;
    //se opuede hacer destructurcion en producto, dado que solo se requiere un argumento
    options.products.forEach ( product => {
        total += product.price;
    });
    //queda asi:
/*
    options.products.forEach ( ({price}) => {
        total += product.price;
    });
  */ 
    return [total, total * options.tax];
}


//queda de la siguiente manera: 
/*
function taxtCalculation({tax, products}:TaxCalculationOptions): [ number, number] {
    let total=0;
    products.forEach ( product => {
        total += product.price;
    });
    return [total, total * options.tax];
}
*/

//se pude hacer la destructuracion en el result
/*
const result = taxtCalculation ({
    products: shoppingCart,
    tax, // no es necesario colocar tax = tax,
});*/
const shoppingCart = [phone,tablet];
const tax = 0.15; //se usa par confundir
const [products,tax2] = taxtCalculation ({
    products: shoppingCart,
    tax, // no es necesario colocar tax = tax,
});
/*
console.log ('Total', result[0]);
console.log('tax', result[1]);
*/

console.log ('Total', products);
console.log('tax', tax2);