import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { supabase } from "../../utils/supabase";

export function LoginScreen() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-8">Medical App Login</label>
            
            <textField
                className="w-full p-4 mb-4 border rounded-lg"
                hint="Email"
                keyboardType="email"
                text={email}
                onTextChange={(evt) => setEmail(evt.value)}
            />

            <textField
                className="w-full p-4 mb-6 border rounded-lg"
                hint="Password"
                secure={true}
                text={password}
                onTextChange={(evt) => setPassword(evt.value)}
            />

            <button
                className="w-full text-lg text-white bg-blue-500 p-4 rounded-lg"
                onTap={handleLogin}
                isEnabled={!loading}
            >
                {loading ? "Loading..." : "Login"}
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
});