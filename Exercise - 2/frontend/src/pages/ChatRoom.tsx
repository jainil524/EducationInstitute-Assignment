import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActiveUsers from '../components/ActiveUsers';
import MessageInput from '../components/MessageInput';
import ChatBox from '../components/ChatBox';
import ChatRoomService from '../services/ChatRoomService';

import { Message } from '../models/Message.model';
const ChatRoom: React.FC = () => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const [prevRoomUserID, setPrevRoomUserID] = useState('');

  const [isJoined, setIsJoined] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  useEffect(() => {
    const chatService = new ChatRoomService();

    chatService.onReceiveMessage((msg) => {
      console.log(msg);
      
      setMessages((prev) => [...prev, msg.message]);
    });

    chatService.onActiveUsers((users) => {
      setActiveUsers(users);
    });

    chatService.personLeaved((user) => {
      toast.info(`${user} has left the chat`, { position: 'bottom-right', autoClose: 3000 });
    });

    chatService.getUserId((userid) => {
      setPrevRoomUserID(userid);
    });

    return () => {
      chatService.onReceiveMessage(() => { });
      chatService.onActiveUsers(() => { });
      chatService.personLeaved(() => { });
      chatService.getUserId(() => { });
    };
  }, []);

  const sendMessage = (message: string) => {
    if (message) {
      const chatService = new ChatRoomService();
      chatService.sendMessage({ user: username, message, id: prevRoomUserID });
    }
  };

  const joinRoom = () => {
    if (roomId) {

      if(!username && prevRoomUserID == null){
        alert('Please enter Username.');
        return;
      }

      if ((roomId === " " || username === " " || prevRoomUserID === " ") ) {
        alert('Please enter both Room ID, Username and previous room user id, Only spaces are not allowed.');
        return;
      }

      console.log("prevRoomUserID", prevRoomUserID);
      

      const chatService = new ChatRoomService();
      if (prevRoomUserID) {
        chatService.joinPreviousRoom(roomId, prevRoomUserID);
        setIsJoined(true);
      } else {
        chatService.joinRoom(roomId, username);
        setIsJoined(true);
      }

      chatService.messageHistory((msgs) => {
        setMessages(msgs);
      });
    } else {
      alert('Please enter both Room ID and Username.');
    }
  };

  const leaveRoom = () => {
    const chatService = new ChatRoomService();
    chatService.leaveRoom(roomId, username);
    setIsJoined(false);
    toast.info('You have left the room', { position: 'bottom-right' });
  };

  return (
    <Container style={{width: "800px", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

      <ToastContainer />

      {!isJoined ? (
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4">Join Chat Room</Typography>
          <Typography variant="caption" color='blue'>If Room ID already exist then you will join that room or else it will be created ( Room ID and username is case sensitive )</Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={prevRoomUserID}
            onChange={(e) => setPrevRoomUserID(e.target.value)}
            placeholder="Enter your previous room user ID ( optional )"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <Button variant="contained" color="primary" onClick={joinRoom} style={{ marginTop: '10px' }}>
            Join Room
          </Button>
        </div>
      ) : (
        <div>
          <Typography variant="h5">
            Room: {roomId} | You: {username}
          </Typography>
          <Typography variant="caption" color='blue'>UserId: {prevRoomUserID}</Typography>
          <ActiveUsers activeUsers={activeUsers} />
          <ChatBox messages={messages} username={username} id={prevRoomUserID} />
          <MessageInput sendMessage={sendMessage} />
          <Button variant="contained" color="secondary" onClick={leaveRoom} style={{ marginTop: '10px' }}>
            Leave Room
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ChatRoom;
