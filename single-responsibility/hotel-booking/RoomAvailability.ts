import { Room } from "./models/types";
import { RoomInventory } from "./RoomInventory";

export class RoomAvailability {

    checkAvailability(roomType: string, checkIn: Date, checkOut: Date, roomInventory: RoomInventory): Room[] {
        const availableRooms = roomInventory.getRoomByType(roomType);
        return availableRooms.filter(room => this.isRoomAvailable(room, checkIn, checkOut));
    }

    private isRoomAvailable(room: Room, checkIn: Date, checkOut: Date): boolean {
        // Placeholder logic for checking room availability
        return room.isAvailable; // Assume the room is available for simplicity
    }

}