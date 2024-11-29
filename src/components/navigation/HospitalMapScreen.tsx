import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HospitalMapScreen() {
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [destination, setDestination] = React.useState("");

    const departments = [
        "Emergency Room",
        "Cardiology",
        "Pediatrics",
        "Radiology",
        "Laboratory"
    ];

    const handleNavigate = () => {
        // Handle navigation logic
        alert(`Navigating to ${destination}`);
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl font-bold mb-4">Hospital Navigation</label>

            <label className="text-lg mb-2">Select Destination:</label>
            <listPicker
                items={departments}
                selectedIndex={0}
                onSelectedIndexChange={(evt) => setDestination(departments[evt.value])}
                className="mb-4"
            />

            {/* Map placeholder - would be replaced with actual map implementation */}
            <contentView className="bg-gray-200 h-96 w-full mb-4">
                <label className="text-center p-4">Map View</label>
            </contentView>

            <button
                className="text-lg text-white bg-green-500 p-4 rounded-lg"
                onTap={handleNavigate}
            >
                Start Navigation
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
    },
});