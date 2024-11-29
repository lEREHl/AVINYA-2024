import * as React from "react";
import { Doctor } from "../../types/appointment";
import { doctors } from "../../utils/doctors";

interface DoctorPickerProps {
    onDoctorSelect: (doctor: Doctor) => void;
}

export function DoctorPicker({ onDoctorSelect }: DoctorPickerProps) {
    return (
        <>
            <label className="text-lg mb-2">Select Doctor:</label>
            <listPicker
                items={doctors.map(d => d.displayName)}
                selectedIndex={0}
                onSelectedIndexChange={(evt) => onDoctorSelect(doctors[evt.value])}
                className="mb-4"
            />
        </>
    );
}