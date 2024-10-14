import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Import Send icon
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice'; // Use the correct action

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim() === '') {
      setError('Message cannot be empty');
      return;
    }
    dispatch(sendMessage(message)); // Dispatch the sendMessage action
    setMessage(''); // Clear the input field
    setError(''); // Clear any error messages
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {error && <span style={{ color: 'red', marginRight: '10px' }}>{error}</span>}
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Type your message"
        fullWidth
        variant="outlined"
        // Add more styling if needed
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSendMessage} color="primary">
              <SendIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default MessageInput;
