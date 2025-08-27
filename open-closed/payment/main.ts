
import { PaymentProcessor } from "./PaymentProcessor";
import { CreditCard } from "./processors/CreditCard";
import { Paytm } from "./processors/Paytm";


const paytm = new Paytm();
const creditCard = new CreditCard();


function main() {
    const paytmProcessor = new PaymentProcessor(paytm)
    paytmProcessor.processPayment(12345);

    const creditCardProcessor = new PaymentProcessor(creditCard)
    creditCardProcessor.processPayment(43234);
}

main()