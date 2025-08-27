import { Booking } from "./models/types";
import { RoomAvailability } from "./RoomAvailability";

export class RoomBooking {
    constructor(private roomAvailability: RoomAvailability) { }


    createBooking(customerId: number, roomType: string, checkInDate: Date, checkOutDate: Date): Booking {
        // Logic to create a booking
        return {
            bookingId: Math.random().toString(36).substring(2, 15),
            customerId,
            roomNumber: Math.floor(Math.random() * 100) + 1,
            checkInDate,
            checkOutDate,
            totalAmount: 200, // Placeholder amount
            status: 'pending'
        }
    }


}