import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { format } from 'date-fns';
import { Doctor } from "../../types/appointment";
import { DoctorPicker } from "./DoctorPicker";
import { generateTimeSlots } from "../../utils/timeSlots";

export function AppointmentsScreen() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTime, setSelectedTime] = React.useState("");
    const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(null);

    const timeSlots = generateTimeSlots(selectedDate);

    const handleBookAppointment = () => {
        if (!selectedDoctor) return;
        
        alert(`Appointment booked with ${selectedDoctor.displayName} on ${format(selectedDate, 'PP')} at ${selectedTime}`);
    };

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-xl font-bold mb-4">Schedule an Appointment</label>

                <DoctorPicker onDoctorSelect={setSelectedDoctor} />

                <label className="text-lg mb-2">Select Date:</label>
                <datePicker
                    date={selectedDate}
                    onDateChange={(evt) => setSelectedDate(evt.value)}
                    className="mb-4"
                />

                <label className="text-lg mb-2">Select Time:</label>
                <listPicker
                    items={timeSlots.map(slot => slot.time)}
                    selectedIndex={0}
                    onSelectedIndexChange={(evt) => setSelectedTime(timeSlots[evt.value].time)}
                    className="mb-4"
                />

                <button
                    className="text-lg text-white bg-blue-500 p-4 rounded-lg mt-4"
                    onTap={handleBookAppointment}
                    isEnabled={!!selectedDoctor}
                >
                    Book Appointment
                </button>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
    },
});