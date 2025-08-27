import { Feedback } from "./models/types";

export class CustomerFeedback {
    private feedbacks: Feedback[] = [];

    submitFeedback(customerId: number, bookingId: string, rating: number, comments?: string): Feedback {
        const feedback: Feedback = {
            customerId,
            bookingId,
            rating,
            comments,
            feedbackDate: new Date()
        };
        this.feedbacks.push(feedback);
        return feedback;
    }

    getFeedbackForBooking(bookingId: string): Feedback[] {
        return this.feedbacks.filter(fb => fb.bookingId === bookingId);
    }
}