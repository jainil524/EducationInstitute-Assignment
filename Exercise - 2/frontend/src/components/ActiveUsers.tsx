import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const ActiveUsers: React.FC<any> = ({ activeUsers }) => {
    return (
        <div>
            <Typography variant="h6">Active Users</Typography>
            <List>
                {activeUsers.map((user: any, index: number) => (
                    <ListItem key={index}>
                        <ListItemText primary={user.username} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default ActiveUsers;
