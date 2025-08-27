import { CustomerFeedback } from "./CustomerFeedback";
import { ManageCustomer } from "./ManageCustomer";
import { PaymentProcessor } from "./paymentProcessor";
import { RoomAvailability } from "./RoomAvailability";
import { RoomBooking } from "./RoomBooking";
import { RoomInventory } from "./RoomInventory";


const roomInventory = new RoomInventory();
const roomAvailability = new RoomAvailability();
const roomBooking = new RoomBooking(roomAvailability);
const manageCustomer = new ManageCustomer();
const paymentProcessor = new PaymentProcessor();
const customerFeedback = new CustomerFeedback();


async function main() {
    roomInventory.addRoom(101, 'single', 100);
    roomInventory.addRoom(102, 'double', 150);
    roomInventory.addRoom(201, 'suite', 300);

    const customer = manageCustomer.createCustomer('John Doe', {
        email: 'test',
        phoneNumber: '1234567890'
    })

    const booking = roomBooking.createBooking(customer.id, 'Deluxe', new Date('2025-10-01'), new Date('2025-10-05'));
    console.log('Booking Created:', booking);

    const payment = await paymentProcessor.processPayment(booking.bookingId, booking.totalAmount, 'credit_card');
    console.log('Payment Processed:', payment);

    await paymentProcessor.validatePayment(payment);
    console.log('Payment Confirmed for booking:', booking.bookingId);

    const feedback = customerFeedback.submitFeedback(customer.id, booking.bookingId, 5, 'Great stay!');
    console.log('Feedback Submitted:', feedback);
}

main().catch(err => console.error(err));
