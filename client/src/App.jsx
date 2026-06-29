import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Bot, 
  Trash2, 
  Save,
  MessageSquare,
  Layout,
  Settings as SettingsIcon,
  Activity,
  Terminal
} from 'lucide-react';
import EmbedEditor from './components/EmbedEditor';
import Chat from './components/Chat';
import Settings from './components/Settings';
import CommandBuilder from './components/CommandBuilder';
import Casino from './components/Casino';
import { Gamepad2, Hexagon } from 'lucide-react';

const API_BASE = '/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('embed'); // 'embed', 'chat', 'settings', 'command'
  const [token, setToken] = useState(localStorage.getItem('discord_bot_token') || '');
  const [botUser, setBotUser] = useState(null);
  const [guilds, setGuilds] = useState([]);
  const [channels, setChannels] = useState([]);
  const [selectedGuild, setSelectedGuild] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [embeds, setEmbeds] = useState([{
    title: 'New Embed',
    description: 'Hello world!',
    color: '#5865f2',
    author: { name: '', icon_url: '', url: '' },
    footer: { text: '', icon_url: '' },
    image: { url: '' },
    thumbnail: { url: '' },
    fields: []
  }]);
  
  const [components, setComponents] = useState([]);
  const [status, setStatus] = useState('');
  const [templates, setTemplates] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('discord_templates');
    if (saved) setTemplates(JSON.parse(saved));
    
    // Auto connect if token exists
    if (token) {
      connectBot(token);
    }
  }, []);

  const saveTemplate = () => {
    const name = prompt('Template Name:');
    if (!name) return;
    const newTemplates = [...templates, { name, content: messageContent, embeds, components }];
    setTemplates(newTemplates);
    localStorage.setItem('discord_templates', JSON.stringify(newTemplates));
    setStatus('Template saved!');
  };

  const loadTemplate = (tpl) => {
    setMessageContent(tpl.content);
    setEmbeds(tpl.embeds);
    setComponents(tpl.components || []);
    setStatus('Template loaded: ' + tpl.name);
  };

  const deleteTemplate = (index) => {
    const newTemplates = templates.filter((_, i) => i !== index);
    setTemplates(newTemplates);
    localStorage.setItem('discord_templates', JSON.stringify(newTemplates));
  };

  const connectBot = async (providedToken) => {
    const tokenToUse = providedToken || token;
    if (!tokenToUse) return;
    try {
      setIsConnecting(true);
      setStatus('Connecting to Discord...');
      const res = await axios.post(`${API_BASE}/connect`, { token: tokenToUse });
      setBotUser(res.data.user);
      setStatus('Connected successfully!');
      localStorage.setItem('discord_bot_token', tokenToUse);
      fetchGuilds();
    } catch (err) {
      setStatus('Connection Failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setIsConnecting(false);
    }
  };

  const fetchGuilds = async () => {
    try {
      const res = await axios.get(`${API_BASE}/guilds`);
      setGuilds(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchChannels = async (guildId) => {
    try {
      const res = await axios.get(`${API_BASE}/guilds/${guildId}/channels`);
      setChannels(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (selectedGuild) {
      fetchChannels(selectedGuild);
    }
  }, [selectedGuild]);

  const sendMessage = async () => {
    if (!selectedChannel) return alert('Select a channel first');
    try {
      setStatus('Sending...');
      const res = await axios.post(`${API_BASE}/send`, {
        channelId: selectedChannel,
        content: messageContent,
        embeds: embeds,
        components: components
      });
      setStatus('Message sent! ID: ' + res.data.messageId);
    } catch (err) {
      setStatus('Error sending: ' + err.message);
    }
  };

  return (
    <div className="app-container">
      {isConnecting && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(4px)'
        }}>
          <Bot size={64} color="#5865f2" className="animate-pulse" style={{ marginBottom: '24px' }} />
          <h2 style={{ color: 'white', marginBottom: '8px' }}>Syncing with Discord...</h2>
          <p style={{ color: 'var(--text-muted)' }}>Please wait while the bot connects.</p>
        </div>
      )}
      <aside className="sidebar">
        <div className="brand" style={{ fontSize: '28px', fontWeight: '800', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          <img src="https://cdn.discordapp.com/avatars/1308687748219273239/e391241036f619ab82626d52f405d4c5.webp" alt="Nexus Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', filter: 'drop-shadow(0 0 10px rgba(168,85,247,0.5))' }} />
          <span>NEXUS</span>
        </div>

        <nav style={{ marginBottom: '32px' }}>
          <div className={`nav-item ${activeTab === 'embed' ? 'active' : ''}`} onClick={() => setActiveTab('embed')}>
            <Layout size={20} />
            <span>Embedded Messages</span>
          </div>
          <div className={`nav-item ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
            <MessageSquare size={20} />
            <span>Live Chat</span>
          </div>
          <div className={`nav-item ${activeTab === 'command' ? 'active' : ''}`} onClick={() => setActiveTab('command')}>
            <Terminal size={20} />
            <span>Command Builder</span>
          </div>
          <div className={`nav-item ${activeTab === 'casino' ? 'active' : ''}`} onClick={() => setActiveTab('casino')}>
            <Gamepad2 size={20} />
            <span>Casino / Cases</span>
          </div>
          <div className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
            <SettingsIcon size={20} />
            <span>Settings</span>
          </div>
        </nav>

        <div className="input-group">
          <label>Bot Token</label>
          <input 
            type="password" 
            placeholder="MTA2ND..." 
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button className="btn-primary" style={{ width: '100%', marginTop: '12px' }} onClick={() => connectBot()}>
            Connect Bot
          </button>
        </div>

        {botUser && (
          <div className="card" style={{ marginTop: '20px', padding: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={botUser.avatar} style={{ width: '32px', borderRadius: '50%' }} alt="bot" />
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px' }}>{botUser.username}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>ID: {botUser.id}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'embed' && (
          <div style={{ marginTop: '24px', flex: 1, overflowY: 'auto' }}>
            <label>Saved Templates</label>
            {templates.map((tpl, i) => (
              <div key={i} className="card" style={{ padding: '8px 12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ cursor: 'pointer', fontSize: '13px' }} onClick={() => loadTemplate(tpl)}>{tpl.name}</span>
                <Trash2 size={12} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => deleteTemplate(i)} />
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Activity size={12} /> {status || 'Idle'}
          </div>
          {activeTab === 'embed' && (
            <button className="btn-secondary" style={{ width: '100%' }} onClick={saveTemplate}>
              <Save size={16} /> Save Template
            </button>
          )}
        </div>
      </aside>

      <main className="main-content" style={{ 
        gridTemplateColumns: activeTab === 'embed' ? '1fr 1fr' : '1fr',
        display: (activeTab === 'settings' || activeTab === 'command' || activeTab === 'casino') ? 'block' : 'grid'
      }}>
        {activeTab === 'embed' ? (
          <EmbedEditor 
            botUser={botUser}
            guilds={guilds}
            selectedGuild={selectedGuild}
            setSelectedGuild={setSelectedGuild}
            channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
            messageContent={messageContent}
            setMessageContent={setMessageContent}
            embeds={embeds}
            setEmbeds={setEmbeds}
            components={components}
            setComponents={setComponents}
            sendMessage={sendMessage}
            status={status}
          />
        ) : activeTab === 'chat' ? (
          <Chat 
            botUser={botUser}
            guilds={guilds}
            selectedGuild={selectedGuild}
            setSelectedGuild={setSelectedGuild}
            channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
          />
        ) : activeTab === 'command' ? (
          <CommandBuilder setStatus={setStatus} />
        ) : activeTab === 'casino' ? (
          <Casino 
            botUser={botUser}
            guilds={guilds}
            selectedGuild={selectedGuild}
            setSelectedGuild={setSelectedGuild}
            channels={channels}
            selectedChannel={selectedChannel}
            setSelectedChannel={setSelectedChannel}
          />
        ) : (
          <Settings botUser={botUser} setStatus={setStatus} />
        )}
      </main>
    </div>
  );
}

