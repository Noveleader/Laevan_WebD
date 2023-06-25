import React, { useState } from 'react';
import env from "react-dotenv";
import './home.css';


function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleChatToggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleUserMessageChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleChatSubmit = async (event) => {
    event.preventDefault();

    setChatMessages((prevMessages) => [...prevMessages, { role: 'user', content: userMessage }]);
    setUserMessage('');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are a qualified lawyer.' },
          { role: 'user', content: userMessage },
        ],
      }),
    });

    const data = await response.json();

    const chatResponse = data.choices[0].message.content;
    setChatMessages((prevMessages) => [...prevMessages, { role: 'bot', content: chatResponse }]);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <title>Website Title</title>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="createpost">Create-post</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </header>
      <main>
        {/* Add your page content here */}
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </main>

      {/* Chat Button */}
      <button className={`chat-button ${chatOpen ? 'active' : ''}`} onClick={handleChatToggle}>
        Chat with Lawyer
      </button>

      {/* Chat Popup */}
      {chatOpen && (
        <div className="chat-popup">
          <div className="chat-popup-content">
            <div className="chat-header">
              <span className="close" onClick={handleChatToggle}>
                &times;
              </span>
              <h3>Chat with Lawyer</h3>
            </div>
            <div className="chat-body">
              {chatMessages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  {message.content}
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <form onSubmit={handleChatSubmit}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userMessage}
                  onChange={handleUserMessageChange}
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
