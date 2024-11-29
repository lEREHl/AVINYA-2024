import * as React from "react";
import { ActivityIndicator } from "@nativescript/core";

interface LoadingSpinnerProps {
    size?: number;
    color?: string;
}

export function LoadingSpinner({ size = 32, color = "#4A90E2" }: LoadingSpinnerProps) {
    return (
        <activityIndicator
            busy={true}
            width={size}
            height={size}
            color={color}
        />
    );
}