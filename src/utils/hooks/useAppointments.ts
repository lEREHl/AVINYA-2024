import { useState, useEffect } from 'react';
import { getAppointments } from '../api/appointmentApi';
import type { Appointment } from '../../types/appointment';

export function useAppointments(userId: string) {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchAppointments() {
            try {
                const data = await getAppointments(userId);
                setAppointments(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchAppointments();
    }, [userId]);

    return { appointments, loading, error };
}