import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Terminal, 
  Plus, 
  Trash2, 
  Save, 
  Send, 
  AlertCircle, 
  MessageSquare, 
  Smile, 
  Trash, 
  Type, 
  Zap,
  ChevronRight,
  GripVertical,
  Pin,
  Layout
} from 'lucide-react';

const API_BASE = '/api';

const BLOCK_TYPES = [
  { id: 'SEND_MESSAGE', label: 'Send Text Message', icon: <MessageSquare size={16} />, color: '#5865f2', description: 'Bot replies with a text message' },
  { id: 'EMBED_REPLY', label: 'Send Embedded Reply', icon: <Layout size={16} />, color: '#7289da', description: 'Bot replies with an embed' },
  { id: 'REACT', label: 'React to a Message', icon: <Smile size={16} />, color: '#3ba55c', description: 'Add an emoji reaction' },
  { id: 'DELETE', label: 'Delete a Message', icon: <Trash size={16} />, color: '#ed4245', description: 'Delete the interaction reply' },
  { id: 'PIN', label: 'Pin a Message', icon: <Pin size={16} />, color: '#faa61a', description: 'Pin the interaction reply' },
];

export default function CommandBuilder({ setStatus }) {
  const [commands, setCommands] = useState([]);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);

  useEffect(() => {
    fetchCommands();
  }, []);

  const fetchCommands = async () => {
    try {
      const res = await axios.get(`${API_BASE}/commands`);
      setCommands(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addCommand = () => {
    const newCmd = { 
      name: 'new-command', 
      description: 'Command description', 
      actions: [{ type: 'SEND_MESSAGE', content: 'Hello!', ephemeral: false }] 
    };
    setCommands([...commands, newCmd]);
    setSelectedCommandIndex(commands.length);
  };

  const addAction = (type) => {
    if (selectedCommandIndex === null) return;
    const next = [...commands];
    const newAction = { type, content: '', ephemeral: false, emoji: '👋', embeds: [] };
    if (type === 'EMBED_REPLY') {
      newAction.embeds = [{ title: 'Title', description: 'Description', color: '#5865f2', fields: [] }];
    }
    next[selectedCommandIndex].actions.push(newAction);
    setCommands(next);
  };

  const removeAction = (cmdIdx, actionIdx) => {
    const next = [...commands];
    next[cmdIdx].actions.splice(actionIdx, 1);
    setCommands(next);
  };

  const updateAction = (cmdIdx, actionIdx, field, value) => {
    const next = [...commands];
    const action = next[cmdIdx].actions[actionIdx];
    
    if (field.includes('.')) {
      const parts = field.split('.');
      let current = action;
      for (let i = 0; i < parts.length - 1; i++) {
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = value;
    } else {
      action[field] = value;
    }
    setCommands(next);
  };

  const updateEmbed = (cmdIdx, actionIdx, embedIdx, field, value) => {
    const next = [...commands];
    const embed = next[cmdIdx].actions[actionIdx].embeds[embedIdx];
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (!embed[parent]) embed[parent] = {};
      embed[parent][child] = value;
    } else {
      embed[field] = value;
    }
    setCommands(next);
  };

  const saveCommands = async () => {
    try {
      setStatus('Saving commands...');
      const token = localStorage.getItem('discord_bot_token');
      await axios.post(`${API_BASE}/commands`, { commands, token });
      setStatus('Commands saved and registered!');
    } catch (err) {
      setStatus('Error: ' + err.message);
    }
  };

  const currentCommand = commands[selectedCommandIndex];

  return (
    <div className="command-builder-v2" style={{ display: 'flex', height: 'calc(100vh - 64px)', background: '#0f0f0f' }}>
      {/* Left Sidebar: Blocks */}
      <div className="blocks-sidebar" style={{ width: '300px', borderRight: '1px solid #1e1f22', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '1px' }}>Blocks</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>Click to add actions to your command flow.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {BLOCK_TYPES.map(block => (
              <div 
                key={block.id} 
                className="block-item" 
                onClick={() => addAction(block.id)}
                style={{ 
                  padding: '12px', 
                  background: '#1e1f22', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'transform 0.2s, background 0.2s'
                }}
              >
                <div style={{ padding: '8px', background: block.color, borderRadius: '6px' }}>{block.icon}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600' }}>{block.label}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{block.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button className="btn-primary" onClick={saveCommands} style={{ width: '100%' }}>
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      {/* Middle: Commands List */}
      <div className="commands-list" style={{ width: '250px', background: '#111214', borderRight: '1px solid #1e1f22', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>COMMANDS</span>
          <Plus size={16} style={{ cursor: 'pointer' }} onClick={addCommand} />
        </div>
        {commands.map((cmd, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedCommandIndex(i)}
            style={{ 
              padding: '10px 12px', 
              borderRadius: '6px', 
              background: selectedCommandIndex === i ? 'rgba(88, 101, 242, 0.1)' : 'transparent',
              color: selectedCommandIndex === i ? '#5865f2' : 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              marginBottom: '4px'
            }}
          >
            <Terminal size={14} />
            <span>/{cmd.name}</span>
          </div>
        ))}
      </div>

      {/* Right: Flow Builder Canvas */}
      <div className="builder-canvas" style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {currentCommand ? (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '40px' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <input 
                    style={{ background: 'transparent', border: 'none', fontSize: '32px', fontWeight: 'bold', padding: 0, color: 'white' }} 
                    value={currentCommand.name}
                    onChange={(e) => {
                      const next = [...commands];
                      next[selectedCommandIndex].name = e.target.value.toLowerCase().replace(/\s+/g, '-');
                      setCommands(next);
                    }}
                  />
                  <Trash2 
                    size={20} 
                    style={{ cursor: 'pointer', color: '#ff4444' }} 
                    onClick={() => {
                      setCommands(commands.filter((_, i) => i !== selectedCommandIndex));
                      setSelectedCommandIndex(0);
                    }} 
                  />
               </div>
               <input 
                 style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '16px', width: '100%' }}
                 value={currentCommand.description}
                 placeholder="Enter command description..."
                 onChange={(e) => {
                   const next = [...commands];
                   next[selectedCommandIndex].description = e.target.value;
                   setCommands(next);
                 }}
               />
            </div>

            <div className="flow-sequence" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
               <div className="flow-node trigger" style={{ 
                 background: '#1e1f22', 
                 padding: '20px 40px', 
                 borderRadius: '12px', 
                 border: '2px solid #5865f2',
                 textAlign: 'center',
                 minWidth: '200px'
               }}>
                 <Zap size={24} color="#5865f2" style={{ marginBottom: '8px' }} />
                 <div style={{ fontWeight: 'bold' }}>Trigger: /{currentCommand.name}</div>
               </div>
               
               {currentCommand.actions.map((action, ai) => (
                 <React.Fragment key={ai}>
                   <div style={{ width: '2px', height: '40px', background: '#313338' }}></div>
                   <div className="flow-node action" style={{ 
                     background: '#1e1f22', 
                     padding: '24px', 
                     borderRadius: '12px', 
                     width: '100%',
                     border: '1px solid #313338',
                     position: 'relative'
                   }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <div style={{ 
                             padding: '6px', 
                             background: BLOCK_TYPES.find(b => b.id === action.type)?.color, 
                             borderRadius: '4px' 
                           }}>
                             {BLOCK_TYPES.find(b => b.id === action.type)?.icon}
                           </div>
                           <span style={{ fontWeight: '600' }}>{BLOCK_TYPES.find(b => b.id === action.type)?.label}</span>
                        </div>
                        <Trash2 size={16} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => removeAction(selectedCommandIndex, ai)} />
                     </div>

                     {action.type === 'SEND_MESSAGE' && (
                       <div className="input-group">
                         <textarea 
                           placeholder="What should the bot say?" 
                           value={action.content}
                           onChange={(e) => updateAction(selectedCommandIndex, ai, 'content', e.target.value)}
                         />
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                           <input 
                             type="checkbox" 
                             checked={action.ephemeral} 
                             onChange={(e) => updateAction(selectedCommandIndex, ai, 'ephemeral', e.target.checked)} 
                             style={{ width: 'auto' }}
                           />
                           <label style={{ margin: 0, fontSize: '12px' }}>Ephemeral (Only user can see)</label>
                         </div>
                       </div>
                     )}

                     {action.type === 'EMBED_REPLY' && action.embeds.map((embed, ei) => (
                       <div key={ei} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                         <div className="input-group">
                           <label>Title</label>
                           <input value={embed.title} onChange={(e) => updateEmbed(selectedCommandIndex, ai, ei, 'title', e.target.value)} />
                         </div>
                         <div className="input-group">
                           <label>Description</label>
                           <textarea rows="3" value={embed.description} onChange={(e) => updateEmbed(selectedCommandIndex, ai, ei, 'description', e.target.value)} />
                         </div>
                         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <div className="input-group">
                              <label>Author Name</label>
                              <input value={embed.author?.name || ''} onChange={(e) => updateEmbed(selectedCommandIndex, ai, ei, 'author.name', e.target.value)} />
                            </div>
                            <div className="input-group">
                              <label>Color</label>
                              <input type="color" value={embed.color} onChange={(e) => updateEmbed(selectedCommandIndex, ai, ei, 'color', e.target.value)} style={{ padding: 0, height: '38px' }} />
                            </div>
                         </div>
                         <div className="input-group">
                            <label>Image URL</label>
                            <input value={embed.image?.url || ''} onChange={(e) => updateEmbed(selectedCommandIndex, ai, ei, 'image.url', e.target.value)} />
                         </div>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                           <input 
                             type="checkbox" 
                             checked={action.ephemeral} 
                             onChange={(e) => updateAction(selectedCommandIndex, ai, 'ephemeral', e.target.checked)} 
                             style={{ width: 'auto' }}
                           />
                           <label style={{ margin: 0, fontSize: '12px' }}>Ephemeral (Only user can see)</label>
                         </div>
                       </div>
                     ))}

                     {action.type === 'REACT' && (
                       <div className="input-group">
                         <label>Reaction Emoji</label>
                         <input 
                           placeholder="👋, 🔥, etc." 
                           value={action.emoji}
                           onChange={(e) => updateAction(selectedCommandIndex, ai, 'emoji', e.target.value)}
                         />
                       </div>
                     )}
                   </div>
                 </React.Fragment>
               ))}

               <div style={{ width: '2px', height: '40px', background: '#313338' }}></div>
               <div 
                 onClick={() => addAction('SEND_MESSAGE')}
                 style={{ 
                   background: 'rgba(255,255,255,0.02)', 
                   border: '2px dashed #313338', 
                   padding: '16px', 
                   borderRadius: '12px',
                   cursor: 'pointer',
                   color: 'var(--text-muted)',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '8px'
                 }}
               >
                 <Plus size={16} /> Add another action
               </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '100px', color: 'var(--text-muted)' }}>
            Select a command to start building.
          </div>
        )}
      </div>
    </div>
  );
}

