import React from 'react'
import Bot from './component/Bot'

function App() {

  // 1. Create a state to hold the list of chat messages
  const [messages, setMessages] = React.useState([
    { text: "Hello! How can I help you?", sender: "bot" }
  ]);

  // 2. Create a state to track what the user is typing
  const [input, setInput] = React.useState("");

  // 3. Function to handle sending a message
  const sendMessage = () => {
    if (input.trim() === "") return; // Don't send empty text

    // Add user message to the list
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput(""); // Clear input box

    // Simulate a bot reply after 1 second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I am your AI assistant!", sender: "bot" }
      ]);
    }, 1000);
  };

  return (
    <div><Bot/></div>
  )
}

export default App
