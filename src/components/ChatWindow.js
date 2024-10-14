import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatRef = useRef(null);

  // Automatically scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box
      sx={{
        height: '400px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        padding: '10px',
      }}
      ref={chatRef}
    >
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </Box>
  );
};

export default ChatWindow;
