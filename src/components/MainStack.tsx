import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { AppointmentsScreen } from "./appointments/AppointmentsScreen";
import { HospitalMapScreen } from "./navigation/HospitalMapScreen";
import { VideoConsultScreen } from "./video/VideoConsultScreen";
import { ChatScreen } from "./chat/ChatScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./auth/LoginScreen";
import { RegisterScreen } from "./auth/RegisterScreen";
import { supabase } from "../utils/supabase";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
    const [session, setSession] = React.useState(null);

    React.useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <BaseNavigationContainer>
            <StackNavigator.Navigator
                initialRouteName={session ? "Home" : "Login"}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#4A90E2",
                    },
                    headerTintColor: "#fff",
                    headerShown: true,
                }}
            >
                {!session ? (
                    <>
                        <StackNavigator.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <StackNavigator.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                ) : (
                    <>
                        <StackNavigator.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ title: "Medical App" }}
                        />
                        <StackNavigator.Screen
                            name="Appointments"
                            component={AppointmentsScreen}
                            options={{ title: "Schedule Appointment" }}
                        />
                        <StackNavigator.Screen
                            name="HospitalMap"
                            component={HospitalMapScreen}
                            options={{ title: "Hospital Navigation" }}
                        />
                        <StackNavigator.Screen
                            name="VideoConsult"
                            component={VideoConsultScreen}
                            options={{ title: "Video Consultation" }}
                        />
                        <StackNavigator.Screen
                            name="Chat"
                            component={ChatScreen}
                            options={{ title: "Chat with Doctor" }}
                        />
                    </>
                )}
            </StackNavigator.Navigator>
        </BaseNavigationContainer>
    );
};