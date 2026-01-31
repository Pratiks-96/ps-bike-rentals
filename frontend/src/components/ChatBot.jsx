import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Welcome to PS Bike Rentals 🚲 How can I help you?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: 'Thanks! Our team will assist you shortly 😊' }]);
    setInput('');
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, background: '#0f172a', padding: '15px', borderRadius: '16px', width: '280px', boxShadow: '0 0 20px #38bdf8' }}>
      <h4>PS Assistant 🤖</h4>
      <div style={{ height: '150px', overflowY: 'auto', fontSize: '0.9rem' }}>
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.from === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        style={{ width: '100%', padding: '6px', borderRadius: '8px', border: 'none', marginTop: '5px' }}
      />
      <button style={{ width: '100%', marginTop: '6px' }} onClick={sendMessage}>Send</button>
    </div>
  );
}
