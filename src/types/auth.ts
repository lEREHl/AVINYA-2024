export interface User {
    id: string;
    email: string;
    role: 'patient' | 'doctor';
}

export interface AuthState {
    user: User | null;
    session: any | null;
    loading: boolean;
}