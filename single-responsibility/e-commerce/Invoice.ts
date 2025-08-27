import { Product } from "./product";


export class Invoice {
    generateInvoice(products: Product[], amount: number): void {
        console.log('Generating invoice...');
        console.log(`
Invoice Date: ${new Date().toLocaleDateString()}
-----------------------------
product Name: Price
            `);
        products.forEach(product => {
            console.log(`${product.name} $${product.price.toFixed(2)}`);
        });
        console.log('-----------------------------');
        console.log(`Total: $${amount.toFixed(2)}`);
    }
}