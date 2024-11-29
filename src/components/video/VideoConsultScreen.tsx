import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function VideoConsultScreen() {
    const [isConnected, setIsConnected] = React.useState(false);

    const handleStartCall = () => {
        setIsConnected(true);
        // Initialize video call logic here
    };

    const handleEndCall = () => {
        setIsConnected(false);
        // End video call logic here
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl font-bold mb-4">Video Consultation</label>

            {/* Video stream placeholder */}
            <contentView className="bg-gray-200 h-96 w-full mb-4">
                <label className="text-center p-4">
                    {isConnected ? "Connected to Dr. Smith" : "Waiting to connect..."}
                </label>
            </contentView>

            <flexboxLayout className="flex-row justify-center space-x-4">
                {!isConnected ? (
                    <button
                        className="text-lg text-white bg-green-500 p-4 rounded-lg"
                        onTap={handleStartCall}
                    >
                        Start Call
                    </button>
                ) : (
                    <button
                        className="text-lg text-white bg-red-500 p-4 rounded-lg"
                        onTap={handleEndCall}
                    >
                        End Call
                    </button>
                )}
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
    },
});