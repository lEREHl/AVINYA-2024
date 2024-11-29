export interface Message {
    id: number;
    text: string;
    sender: 'doctor' | 'patient';
    timestamp: Date;
}

export interface ChatSession {
    id: string;
    doctorId: string;
    patientId: string;
    messages: Message[];
}