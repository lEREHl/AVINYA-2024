import { supabase } from '../supabase';
import type { Message, ChatSession } from '../../types/chat';

export async function createChatSession(doctorId: string, patientId: string): Promise<ChatSession> {
    const { data, error } = await supabase
        .from('chat_sessions')
        .insert([{ doctorId, patientId }])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function sendMessage(sessionId: string, message: Omit<Message, 'id'>): Promise<Message> {
    const { data, error } = await supabase
        .from('messages')
        .insert([{ ...message, chatSessionId: sessionId }])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function getMessages(sessionId: string): Promise<Message[]> {
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('chatSessionId', sessionId)
        .order('timestamp', { ascending: true });

    if (error) throw error;
    return data;
}