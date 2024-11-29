import * as React from "react";

interface ErrorMessageProps {
    message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <label className="text-red-500 p-4 text-center">
            {message}
        </label>
    );
}