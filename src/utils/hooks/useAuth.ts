import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import type { AuthState, User } from '../../types/auth';

export function useAuth() {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        session: null,
        loading: true
    });

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setAuthState(prev => ({
                ...prev,
                session,
                user: session?.user as User,
                loading: false
            }));
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setAuthState(prev => ({
                ...prev,
                session,
                user: session?.user as User,
                loading: false
            }));
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return authState;
}