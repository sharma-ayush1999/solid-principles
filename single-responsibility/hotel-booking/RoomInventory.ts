import { Room } from "./models/types";

export class RoomInventory {
    private rooms: Room[] = [];

    addRoom(roomNumber: number, type: string, pricePerNight: number): void {
        const newRoom: Room = {
            roomNumber,
            type,
            isAvailable: true,
            pricePerNight
        };

        this.rooms.push(newRoom);
        console.log(`Room ${roomNumber} added to inventory.`);
    }

    removeRoom(roomNumber: number): void {
        this.rooms = this.rooms.filter(room => room.roomNumber !== roomNumber);
        console.log(`Room ${roomNumber} removed from inventory.`);
    }

    getRoomByNumber(roomNumber: number): Room | undefined {
        return this.rooms.find(room => room.roomNumber === roomNumber);
    }

    getRoomByType(type: string): Room[] {
        return this.rooms.filter(room => room.type === type);
    }

    listAllRooms(): Room[] {
        return this.rooms;
    }

}