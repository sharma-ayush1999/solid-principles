import { Customer } from "./models/types";

export class ManageCustomer {
    private customers: Customer[] = []
    createCustomer(name: string, contactInfo?: { email: string; phoneNumber: string }) {
        // Logic to create a customer
        const customer: Customer = {
            id: Math.floor(Math.random() * 10000),
            name,
            contactInfo
        }
        this.customers.push(customer)
        return customer
    }

    getCustomer(customerId: number): Customer | undefined {
        return this.customers.find(c => c.id === customerId)
    }
}