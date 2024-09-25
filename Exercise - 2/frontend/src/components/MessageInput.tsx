import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface MessageInputProps {
    sendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message);
            setMessage('');
        }
    };

    return (
        <div style={{ display: 'flex', marginTop: '10px' }}>
            <TextField
                variant="outlined"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <Button variant="contained" color="primary" onClick={handleSendMessage} style={{ marginLeft: '10px' }}>
                Send
            </Button>
        </div>
    );
};

export default MessageInput;
