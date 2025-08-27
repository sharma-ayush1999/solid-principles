import { Invoice } from "./Invoice";
import { Order } from "./Order";
import { PaymentProcessor } from "./PaymentProcessor";
import { PricingCalculator } from "./PricingCalculator";
import { Product } from "./product";




const product1 = new Product('1', 'Laptop', 1200);
const product2 = new Product('2', 'Headphones', 800);
const product3 = new Product('3', 'Mobile', 500);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

const products = order.getProducts();

const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculateTotal(order);

const invoice = new Invoice();
invoice.generateInvoice(products, total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);