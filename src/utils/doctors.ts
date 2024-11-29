import { Doctor } from '../types/appointment';

export const doctors: Doctor[] = [
    {
        id: '1',
        name: 'Smith',
        specialty: 'Cardiologist',
        displayName: 'Dr. Smith - Cardiologist'
    },
    {
        id: '2',
        name: 'Johnson',
        specialty: 'Pediatrician',
        displayName: 'Dr. Johnson - Pediatrician'
    },
    {
        id: '3',
        name: 'Williams',
        specialty: 'Dermatologist',
        displayName: 'Dr. Williams - Dermatologist'
    }
];

export const getDoctorById = (id: string): Doctor | undefined => {
    return doctors.find(doctor => doctor.id === id);
};