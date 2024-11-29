import { supabase } from '../supabase';
import type { Appointment } from '../../types/appointment';

export async function createAppointment(appointment: Omit<Appointment, 'id'>): Promise<Appointment> {
    const { data, error } = await supabase
        .from('appointments')
        .insert([appointment])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getAppointments(userId: string): Promise<Appointment[]> {
    const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .or(`patientId.eq.${userId},doctorId.eq.${userId}`);

    if (error) throw error;
    return data;
}