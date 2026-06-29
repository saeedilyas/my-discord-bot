import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import { Send, Reply, User, Bot as BotIcon, Hash } from 'lucide-react';

const API_BASE = '/api';
const socket = io('');

export default function Chat({ botUser, guilds, selectedGuild, setSelectedGuild, channels, selectedChannel, setSelectedChannel }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (selectedChannel) {
      fetchMessages(selectedChannel);
    }
    
    const handleNewMessage = (msg) => {
      if (msg.channelId === selectedChannel) {
        setMessages(prev => [...prev, msg]);
      }
    };

    socket.on('new_message', handleNewMessage);
    return () => socket.off('new_message', handleNewMessage);
  }, [selectedChannel]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchMessages = async (channelId) => {
    try {
      const res = await axios.get(`${API_BASE}/channels/${channelId}/messages`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedChannel) return;

    try {
      await axios.post(`${API_BASE}/send`, {
        channelId: selectedChannel,
        content: inputText,
        replyTo: replyTo ? replyTo.id : null
      });
      setInputText('');
      setReplyTo(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <select value={selectedGuild} onChange={(e) => setSelectedGuild(e.target.value)}>
            <option value="">Select Server</option>
            {guilds.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
          </select>
          <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
            <option value="">Select Channel</option>
            {channels.map(c => <option key={c.id} value={c.id}>#{c.name}</option>)}
          </select>
        </div>
      </header>

      <div className="messages-list" ref={scrollRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`message-item ${msg.author.id === botUser?.id ? 'own-message' : ''}`}>
            {msg.referencedMessage && (
              <div className="reply-context">
                <Reply size={12} />
                <span>{msg.referencedMessage.author.username}: {msg.referencedMessage.content.substring(0, 50)}...</span>
              </div>
            )}
            <div className="message-header">
              <img src={msg.author.avatar} alt="" className="avatar-small" />
              <span className="username">{msg.author.username}</span>
              {msg.author.bot && <span className="bot-tag-small">BOT</span>}
              <span className="timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
              <button className="reply-btn" onClick={() => setReplyTo(msg)}>
                <Reply size={14} />
              </button>
            </div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
      </div>

      <footer className="chat-footer">
        {replyTo && (
          <div className="reply-bar">
            <span>Replying to {replyTo.author.username}</span>
            <button onClick={() => setReplyTo(null)}>×</button>
          </div>
        )}
        <form onSubmit={sendMessage} className="input-area">
          <input 
            type="text" 
            placeholder={selectedChannel ? "Type a message..." : "Select a channel to chat"} 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={!selectedChannel}
          />
          <button type="submit" disabled={!selectedChannel || !inputText.trim()}>
            <Send size={18} />
          </button>
        </form>
      </footer>
    </div>
  );
}
