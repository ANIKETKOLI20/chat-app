import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import { Container, Box } from "@mui/material";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import { simulateMessageReception } from "./redux/chatSlice";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const dispatch = useDispatch();

  // Simulate receiving a message after component mounts
  useEffect(() => {
    simulateMessageReception(dispatch);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </Button>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Box
          sx={{
            border: "2px solid #1976d2",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          <ChatWindow />
          <MessageInput />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
