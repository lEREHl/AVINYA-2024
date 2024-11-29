import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function ChatScreen() {
    const [message, setMessage] = React.useState("");
    const [messages, setMessages] = React.useState([
        { id: 1, text: "Hello! How can I help you today?", sender: "doctor" },
        { id: 2, text: "I have a question about my prescription.", sender: "patient" },
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                { id: messages.length + 1, text: message, sender: "patient" }
            ]);
            setMessage("");
        }
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl font-bold mb-4">Chat with Dr. Smith</label>

            <scrollView className="flex-grow mb-4 bg-gray-100">
                <stackLayout>
                    {messages.map((msg) => (
                        <label
                            key={msg.id}
                            className={`p-2 m-2 rounded-lg ${
                                msg.sender === "doctor"
                                    ? "bg-blue-200 self-start"
                                    : "bg-green-200 self-end"
                            }`}
                        >
                            {msg.text}
                        </label>
                    ))}
                </stackLayout>
            </scrollView>

            <flexboxLayout className="flex-row space-x-2">
                <textField
                    className="flex-grow p-2 border rounded-lg"
                    hint="Type your message..."
                    text={message}
                    onTextChange={(evt) => setMessage(evt.value)}
                />
                <button
                    className="text-white bg-blue-500 p-2 rounded-lg"
                    onTap={handleSendMessage}
                >
                    Send
                </button>
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
        height: "100%",
    },
});