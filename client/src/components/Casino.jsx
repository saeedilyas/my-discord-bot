import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Casino.css';
import { PackageOpen, Coins, Diamond, Star, X } from 'lucide-react';

const CASE_CONFIG = {
  classic: {
      name: 'Classic Case',
      cost: '200,000 Cash',
      icon: <img src="https://cdn.discordapp.com/emojis/1505769014813786234.png" alt="Classic Case" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      rewards: {
          basic: { name: 'Nothing', rarity: 'basic' },
          epic: { name: '$400,000', rarity: 'epic' },
          legendary: { name: '$800,000', rarity: 'legendary' },
          mythic: { name: '$1,600,000', rarity: 'mythic' }
      }
  },
  golden: {
      name: 'Diamond Case',
      cost: '2 JCS',
      icon: <img src="https://cdn.discordapp.com/emojis/1505769092072734830.png" alt="Diamond Case" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      rewards: {
          basic: { name: 'Nothing', rarity: 'basic' },
          epic: { name: '4 Jailcards', rarity: 'epic' },
          legendary: { name: '8 Jailcards', rarity: 'legendary' },
          mythic: { name: '16 Jailcards', rarity: 'mythic' }
      }
  },
  majestic: {
      name: 'Majestic Case',
      cost: '2 DPS',
      icon: <img src="https://i.ibb.co/mVMp2KZN/majestic.png" alt="Majestic Case" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
      rewards: {
          basic: { name: 'Nothing', rarity: 'basic' },
          epic: { name: '4 Donation Points', rarity: 'epic' },
          legendary: { name: '8 Donation Points', rarity: 'legendary' },
          mythic: { name: '16 Donation Points', rarity: 'mythic' }
      }
  }
};

// Map rarity to random generic icons for display
const rarityIcons = {
  basic: '💩',
  epic: '💜',
  legendary: '🔮',
  mythic: '👑'
};

export default function Casino({ 
  botUser, guilds, selectedGuild, setSelectedGuild, 
  channels, selectedChannel, setSelectedChannel 
}) {
  const [opening, setOpening] = useState(false);
  const [activeCase, setActiveCase] = useState(null);
  const [stripItems, setStripItems] = useState([]);
  const [winner, setWinner] = useState(null);
  const [showWinner, setShowWinner] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  
  const spinnerRef = useRef(null);

  const startOpening = (caseKey) => {
    const config = CASE_CONFIG[caseKey];
    setActiveCase(config);
    setOpening(true);
    setShowWinner(false);
    setTranslateX(0);

    // Generate strip items
    // We want about 80 items. The winner will be at index 70.
    const items = [];
    for (let i = 0; i < 85; i++) {
      // Randomly pick a rarity based on approximate odds just for visual flair
      let rarity = 'basic';
      const roll = Math.random() * 100;
      if (roll < 5) rarity = 'mythic';
      else if (roll < 15) rarity = 'legendary';
      else if (roll < 40) rarity = 'epic';

      items.push({
        id: i,
        ...config.rewards[rarity]
      });
    }

    // Force the actual winner logic (simplified here)
    // 64.75% Basic, 25% Epic, 9.75% Legendary, 0.5% Mythic
    const actualRoll = Math.random() * 100;
    let actualRarity = 'basic';
    if (actualRoll < 0.5) actualRarity = 'mythic';
    else if (actualRoll < 10.25) actualRarity = 'legendary';
    else if (actualRoll < 35.25) actualRarity = 'epic';

    const winningItem = { id: 70, ...config.rewards[actualRarity] };
    items[70] = winningItem;

    setStripItems(items);
    setWinner(winningItem);

    // Start animation after a tiny delay to allow render
    setTimeout(() => {
      // Calculate transform. 
      // Window is 900px wide. Marker is at center (450px).
      // Item width is 150px.
      // Winner is at index 70. Center of winner is (70 * 150) + 75.
      // We want this center to align with the marker (450px from left of window).
      // So strip must be translated by: -(Center of winner) + 450
      
      const itemWidth = 150;
      const winnerCenter = (70 * itemWidth) + (itemWidth / 2);
      // Add a slight random offset so it doesn't land perfectly dead center every time
      const randomOffset = (Math.random() * 100) - 50; 
      const finalTranslate = -(winnerCenter - 450 + randomOffset);

      setTranslateX(finalTranslate);

      // Animation takes 6 seconds
      setTimeout(async () => {
        setShowWinner(true);
        
        // Notify Discord!
        if (selectedChannel) {
          const win = actualRarity !== 'basic';
          const rollStr = actualRoll.toFixed(2);
          const hexColor = win ? (actualRarity === 'mythic' ? '#FFA500' : (actualRarity === 'legendary' ? '#800080' : '#FF0000')) : '#FFD700';
          
          const embed = {
            author: { 
              name: `${config.name} Opened`, 
              icon_url: config.icon.props.src || '' 
            },
            description: `<:dot:1502761998599979130> **Website Admin** *opened a ${config.name.toLowerCase()} and ${win ? 'won' : 'lost'}.*\n<:dot:1502761998599979130> *Roll: ${rollStr}%*\n<:dot:1502761998599979130> *ID: ${Math.random().toString(36).substring(2, 10)}*\n<:dot:1502761998599979130> *Date: ${new Date().toUTCString()}*`,
            color: hexColor,
            footer: { 
              text: 'Nexus | Web Casino System', 
              icon_url: botUser?.avatar || '' 
            },
            fields: win ? [{ name: '💎 Reward', value: `\`${winningItem.name}\` (${actualRarity.toUpperCase()})`, inline: false }] : []
          };

          try {
            await axios.post('/api/send', {
              channelId: selectedChannel,
              content: '',
              embeds: [embed],
              components: []
            });
          } catch (err) {
            console.error("Failed to notify discord:", err);
            alert("Failed to send broadcast to discord: " + (err.response?.data?.message || err.message));
          }
        }

        // Send to Case Opening Logs channel (1504960442005721108)
        const logEmbed = {
          author: { 
            name: 'Case Opening Log', 
            icon_url: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' 
          },
          fields: [
            { name: 'User', value: `Website Admin`, inline: true },
            { name: 'Case Type', value: `${config.name}`, inline: true },
            { name: 'Outcome', value: win ? `🏆 Won (${actualRarity.toUpperCase()})` : '❌ Lost', inline: true },
            { name: 'Reward', value: win ? `\`${winningItem.name}\`` : 'None', inline: true },
            { name: 'Roll', value: `\`${rollStr}%\``, inline: true }
          ],
          color: win ? '#43B581' : '#F04747',
          footer: {
            text: 'Opening Audit System',
            icon_url: botUser?.avatar || ''
          }
        };

        try {
          await axios.post('/api/send', {
            channelId: '1504960442005721108',
            content: '',
            embeds: [logEmbed],
            components: []
          });
        } catch (err) {
          console.error("Failed to send log:", err);
          alert("Failed to send logs to discord: " + (err.response?.data?.message || err.message));
        }

      }, 6500); // Wait for transition + a little buffer
    }, 100);
  };

  const closeSpinner = () => {
    setOpening(false);
    setShowWinner(false);
    setActiveCase(null);
  };

  return (
    <div className="casino-container">
      <div className="casino-header">
        <h1>Nexus Casino</h1>
        <p>Premium cases, exclusive rewards. Try your luck today.</p>
      </div>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
        <select value={selectedGuild} onChange={(e) => setSelectedGuild(e.target.value)} className="select-mock" style={{ width: '250px' }}>
          <option value="">-- Select Discord Server --</option>
          {guilds?.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
        </select>
        <select value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)} className="select-mock" style={{ width: '250px' }} disabled={!selectedGuild}>
          <option value="">-- Select Channel to Broadcast --</option>
          {channels?.map(c => <option key={c.id} value={c.id}>#{c.name}</option>)}
        </select>
      </div>

      <div className="cases-grid">
        {Object.entries(CASE_CONFIG).map(([key, config]) => (
          <div key={key} className="case-card">
            <div className="case-image">
              {config.icon}
            </div>
            <div className="case-title">{config.name}</div>
            <div className="case-price">
              <Coins size={16} />
              {config.cost}
            </div>
            <button className="open-btn" onClick={() => startOpening(key)}>
              Open Case
            </button>
          </div>
        ))}
      </div>

      {opening && (
        <div className="spinner-modal">
          {!showWinner ? (
            <h2 className="spinner-title">Opening {activeCase?.name}...</h2>
          ) : (
            <div style={{ height: '40px' }}></div> // Spacer
          )}

          <div className="spinner-window">
            <div className="spinner-marker"></div>
            <div 
              className="spinner-strip"
              ref={spinnerRef}
              style={{ 
                transform: `translateX(${translateX}px)`,
                transition: translateX === 0 ? 'none' : 'transform 6s cubic-bezier(0.15, 0.9, 0.1, 1)'
              }}
            >
              {stripItems.map((item, i) => (
                <div key={item.id} className={`spinner-item ${item.rarity}`}>
                  <div className="item-icon">{rarityIcons[item.rarity]}</div>
                  <div className="item-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {showWinner && winner && (
            <div className={`winner-display ${winner.rarity}`}>
              <div style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '5px' }}>You Won:</div>
              <h2>{winner.name}</h2>
              <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', opacity: 0.8 }}>
                {winner.rarity}
              </div>
              <button className="close-btn" onClick={closeSpinner}>
                Collect Reward
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
