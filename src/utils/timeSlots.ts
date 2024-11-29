import { TimeSlot } from '../types/appointment';

export const generateTimeSlots = (date: Date): TimeSlot[] => {
    return [
        { id: '1', time: '09:00 AM', available: true },
        { id: '2', time: '10:00 AM', available: true },
        { id: '3', time: '11:00 AM', available: true },
        { id: '4', time: '02:00 PM', available: true },
        { id: '5', time: '03:00 PM', available: true },
        { id: '6', time: '04:00 PM', available: true }
    ];
};