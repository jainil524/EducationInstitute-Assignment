import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Message } from '../models/Message.model';

interface ChatBoxProps {
  messages: Message[];
  username: string;
  id: string
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, username, id }) => {
  return (
    <div style={{ width: "500px", maxHeight: '400px', overflowY: 'auto', padding: '10px', border: "1px solid #333" }}>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index} style={{ textAlign: msg.id === id ? 'right' : 'left' }}>
            <ListItemText
              primary={<Typography color={msg.user === username ? 'primary' : 'textSecondary'}>{msg.user}</Typography>}
              secondary={msg.message}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatBox;
