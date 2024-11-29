import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { supabase } from "../../utils/supabase";

export function RegisterScreen() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("patient");
    const [loading, setLoading] = React.useState(false);

    const handleRegister = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role,
                    },
                },
            });

            if (error) throw error;
            alert("Check your email for the confirmation link!");
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold mb-8">Create Account</label>
            
            <textField
                className="w-full p-4 mb-4 border rounded-lg"
                hint="Email"
                keyboardType="email"
                text={email}
                onTextChange={(evt) => setEmail(evt.value)}
            />

            <textField
                className="w-full p-4 mb-4 border rounded-lg"
                hint="Password"
                secure={true}
                text={password}
                onTextChange={(evt) => setPassword(evt.value)}
            />

            <listPicker
                className="w-full mb-6"
                items={["Patient", "Doctor"]}
                selectedIndex={role === "patient" ? 0 : 1}
                onSelectedIndexChange={(evt) => setRole(evt.value === 0 ? "patient" : "doctor")}
            />

            <button
                className="w-full text-lg text-white bg-green-500 p-4 rounded-lg"
                onTap={handleRegister}
                isEnabled={!loading}
            >
                {loading ? "Loading..." : "Register"}
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