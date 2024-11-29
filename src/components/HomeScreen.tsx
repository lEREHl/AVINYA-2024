import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { supabase } from "../utils/supabase";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) alert(error.message);
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-8 font-bold text-center">
                Welcome to Medical App
            </label>
            
            <button
                className="text-lg text-white bg-blue-500 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Appointments")}
            >
                Schedule Appointment
            </button>

            <button
                className="text-lg text-white bg-green-500 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("HospitalMap")}
            >
                Hospital Navigation
            </button>

            <button
                className="text-lg text-white bg-purple-500 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("VideoConsult")}
            >
                Video Consultation
            </button>

            <button
                className="text-lg text-white bg-orange-500 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Chat")}
            >
                Chat with Doctor
            </button>

            <button
                className="text-lg text-white bg-red-500 p-4 rounded-lg mt-4 w-3/4"
                onTap={handleSignOut}
            >
                Sign Out
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
});