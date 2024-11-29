import { useState, useEffect } from 'react';
import { getMessages, sendMessage } from '../api/chatApi';
import type { Message } from '../../types/chat';

export function useChat(sessionId: string) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const subscription = supabase
            .channel(`chat_${sessionId}`)
            .on('postgres_changes', { 
                event: 'INSERT', 
                schema: 'public', 
                table: 'messages',
                filter: `chatSessionId=eq.${sessionId}`
            }, payload => {
                setMessages(prev => [...prev, payload.new as Message]);
            })
            .subscribe();

        // Initial fetch
        getMessages(sessionId)
            .then(data => setMessages(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));

        return () => {
            subscription.unsubscribe();
        };
    }, [sessionId]);

    const sendNewMessage = async (content: string, sender: 'doctor' | 'patient') => {
        try {
            await sendMessage(sessionId, {
                text: content,
                sender,
                timestamp: new Date(),
            });
        } catch (err) {
            setError(err as Error);
            throw err;
        }
    };

    return { messages, loading, error, sendMessage: sendNewMessage };
}