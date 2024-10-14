import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ message }) => (
  <Box sx={{ marginBottom: '10px' }}>
    <Typography variant="body2" color="text.secondary">
      {message.user} ({message.timestamp}):
    </Typography>
    <Typography variant="body1">{message.text}</Typography>
  </Box>
);

export default Message;
