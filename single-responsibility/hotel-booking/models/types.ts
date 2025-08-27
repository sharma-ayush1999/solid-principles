export interface Room {
    roomNumber: number;
    type: string;
    isAvailable: boolean;
    pricePerNight: number;
}

export interface Customer {
    id: number;
    name: string;
    contactInfo?: {
        email: string;
        phoneNumber: string;
    }
}

export interface Booking {
    bookingId: string;
    customerId: Customer['id'];
    roomNumber: Room['roomNumber'];
    checkInDate: Date;
    checkOutDate: Date;
    totalAmount: number;
    status: 'pending' | 'confirmed' | 'checked-in' | 'checked-out' | 'canceled';
}

export interface Payment {
    bookingId: Booking['bookingId'];
    amount: number;
    paymentDate: Date;
    paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
    status: 'pending' | 'completed' | 'failed' | 'refunded';
}

export interface Feedback {
    customerId: Customer['id'];
    bookingId: Booking['bookingId'];
    rating: number; // 1 to 5
    comments?: string;
    feedbackDate: Date;
}