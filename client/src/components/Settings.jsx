import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Save, Monitor, Gamepad2, Tv, Music, Trophy } from 'lucide-react';

const API_BASE = '/api';

export default function Settings({ botUser, setStatus }) {
  const [presence, setPresence] = useState({
    status: 'online',
    activityType: '0',
    activityName: ''
  });

  const [recentActivities, setRecentActivities] = useState(() => {
    const saved = localStorage.getItem('recentActivities');
    return saved ? JSON.parse(saved) : [];
  });

  const updatePresence = async () => {
    try {
      setStatus('Updating status...');
      await axios.post(`${API_BASE}/status`, presence);
      setStatus('Status updated!');

      if (presence.activityName.trim()) {
        const name = presence.activityName.trim();
        const updatedRecent = [name, ...recentActivities.filter(n => n !== name)].slice(0, 10);
        setRecentActivities(updatedRecent);
        localStorage.setItem('recentActivities', JSON.stringify(updatedRecent));
      }
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  return (
    <div className="settings-container" style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '24px' }}>Bot Settings</h2>
      
      <div className="card">
        <h3 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Monitor size={20} color="#5865f2" />
          Presence & Activity
        </h3>
        
        <div className="input-group">
          <label>Status</label>
          <select value={presence.status} onChange={(e) => setPresence({...presence, status: e.target.value})}>
            <option value="online">Online</option>
            <option value="idle">Idle</option>
            <option value="dnd">Do Not Disturb</option>
            <option value="invisible">Invisible</option>
          </select>
        </div>

        <div className="input-group">
          <label>Activity Type</label>
          <select value={presence.activityType} onChange={(e) => setPresence({...presence, activityType: e.target.value})}>
            <option value="0">Playing</option>
            <option value="1">Streaming</option>
            <option value="2">Listening to</option>
            <option value="3">Watching</option>
            <option value="5">Competing in</option>
          </select>
        </div>

        <div className="input-group">
          <label>Activity Name</label>
          <input 
            type="text" 
            list="recent-activities"
            placeholder="Valorant, Spotify, etc." 
            value={presence.activityName} 
            onChange={(e) => setPresence({...presence, activityName: e.target.value})} 
          />
          <datalist id="recent-activities">
            {recentActivities.map((activity, idx) => (
              <option key={idx} value={activity} />
            ))}
          </datalist>
        </div>

        <button className="btn-primary" onClick={updatePresence} style={{ width: '100%', marginTop: '12px' }}>
          <Save size={16} /> Update Presence
        </button>
      </div>

      <div className="card" style={{ opacity: 0.5 }}>
        <h3 style={{ marginBottom: '16px' }}>Advanced Settings</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>More settings coming soon (Intents, Sharding, Cache management)...</p>
      </div>
    </div>
  );
}
