export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    displayName: string;
}

export interface TimeSlot {
    id: string;
    time: string;
    available: boolean;
}

export interface Appointment {
    id: string;
    doctorId: string;
    date: Date;
    timeSlot: string;
    patientId: string;
}