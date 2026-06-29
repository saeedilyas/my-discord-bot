import React, { useState } from 'react';
import { Send, Plus, Trash2, User, Type, Hash, Image as ImageIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Accordion = ({ title, icon, children, isOpen, onToggle }) => (
  <div className="accordion">
    <div className="accordion-header" onClick={onToggle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {icon}
        {title}
      </div>
      {isOpen ? <Plus size={16} style={{ transform: 'rotate(45deg)' }} /> : <Plus size={16} />}
    </div>
    {isOpen && <div className="accordion-body">{children}</div>}
  </div>
);

export default function EmbedEditor({ 
  botUser, 
  guilds, 
  selectedGuild, 
  setSelectedGuild, 
  channels, 
  selectedChannel, 
  setSelectedChannel,
  messageContent,
  setMessageContent,
  embeds,
  setEmbeds,
  components,
  setComponents,
  sendMessage,
  status
}) {
  const [activeAccordion, setActiveAccordion] = useState('body-0');

  const updateEmbed = (index, field, value) => {
    const newEmbeds = [...embeds];
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      newEmbeds[index][parent][child] = value;
    } else {
      newEmbeds[index][field] = value;
    }
    setEmbeds(newEmbeds);
  };

  const addField = (embedIndex) => {
    const newEmbeds = [...embeds];
    newEmbeds[embedIndex].fields.push({ name: 'Field Name', value: 'Field Value', inline: false });
    setEmbeds(newEmbeds);
  };

  const removeField = (embedIndex, fieldIndex) => {
    const newEmbeds = [...embeds];
    newEmbeds[embedIndex].fields.splice(fieldIndex, 1);
    setEmbeds(newEmbeds);
  };

  const updateField = (embedIndex, fieldIndex, key, value) => {
    const newEmbeds = [...embeds];
    newEmbeds[embedIndex].fields[fieldIndex][key] = value;
    setEmbeds(newEmbeds);
  };

  // Component Helpers
  const addActionRow = (type) => {
    if (type === 'buttons') {
      setComponents([...components, { type: 'buttons', items: [] }]);
    } else {
      setComponents([...components, { type: 'select', placeholder: 'Select an option', options: [] }]);
    }
  };

  const addButton = (rowIndex) => {
    const newComponents = [...components];
    if (newComponents[rowIndex].items.length >= 5) return alert('Max 5 buttons per row');
    newComponents[rowIndex].items.push({ 
      label: 'New Button', 
      style: 'Primary', 
      emoji: '', 
      action: { content: 'Button clicked!', ephemeral: true } 
    });
    setComponents(newComponents);
  };

  const addSelectOption = (rowIndex) => {
    const newComponents = [...components];
    newComponents[rowIndex].options.push({ 
      label: 'Option Label', 
      description: 'Option Description', 
      emoji: '', 
      action: { content: 'Option selected!', ephemeral: true } 
    });
    setComponents(newComponents);
  };

  return (
    <>
      <section className="editor-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2>Message Editor</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select style={{ width: '160px' }} value={selectedGuild} onChange={(e) => setSelectedGuild(e.target.value)}>
              <option value="">Select Server</option>
              {guilds.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
            <select style={{ width: '160px' }} value={selectedChannel} onChange={(e) => setSelectedChannel(e.target.value)}>
              <option value="">Select Channel</option>
              {channels.map(c => <option key={c.id} value={c.id}>#{c.name}</option>)}
            </select>
            <button className="btn-primary" onClick={sendMessage}>
              <Send size={16} /> Send
            </button>
          </div>
        </div>

        <div className="card">
          <label>Message Content</label>
          <textarea rows="3" placeholder="Above the embed..." value={messageContent} onChange={(e) => setMessageContent(e.target.value)} />
        </div>

        {embeds.map((embed, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '16px', color: 'var(--text-muted)' }}>Embed {i + 1}</h3>
            
            <Accordion title="Author" icon={<User size={16} />} isOpen={activeAccordion === `author-${i}`} onToggle={() => setActiveAccordion(activeAccordion === `author-${i}` ? '' : `author-${i}`)}>
              <div className="input-group">
                <label>Name</label>
                <input value={embed.author?.name || ''} onChange={(e) => updateEmbed(i, 'author.name', e.target.value)} />
              </div>
              <div className="input-group">
                <label>URL</label>
                <input value={embed.author?.url || ''} onChange={(e) => updateEmbed(i, 'author.url', e.target.value)} />
              </div>
              <div className="input-group">
                <label>Icon URL</label>
                <input value={embed.author?.icon_url || ''} onChange={(e) => updateEmbed(i, 'author.icon_url', e.target.value)} />
              </div>
            </Accordion>

            <Accordion title="Body" icon={<Type size={16} />} isOpen={activeAccordion === `body-${i}`} onToggle={() => setActiveAccordion(activeAccordion === `body-${i}` ? '' : `body-${i}`)}>
              <div className="input-group">
                <label>Title</label>
                <input value={embed.title} onChange={(e) => updateEmbed(i, 'title', e.target.value)} />
              </div>
              <div className="input-group">
                <label>Description</label>
                <textarea rows="4" value={embed.description} onChange={(e) => updateEmbed(i, 'description', e.target.value)} />
              </div>
              <div className="input-group">
                <label>Color</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input type="color" style={{ width: '40px', padding: '0' }} value={embed.color} onChange={(e) => updateEmbed(i, 'color', e.target.value)} />
                  <input type="text" value={embed.color} onChange={(e) => updateEmbed(i, 'color', e.target.value)} />
                </div>
              </div>
            </Accordion>

            <Accordion title="Fields" icon={<Hash size={16} />} isOpen={activeAccordion === `fields-${i}`} onToggle={() => setActiveAccordion(activeAccordion === `fields-${i}` ? '' : `fields-${i}`)}>
              {embed.fields.map((f, fi) => (
                <div key={fi} className="card" style={{ background: 'rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label>Field {fi + 1}</label>
                    <Trash2 size={14} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => removeField(i, fi)} />
                  </div>
                  <input placeholder="Name" value={f.name} onChange={(e) => updateField(i, fi, 'name', e.target.value)} style={{ marginBottom: '8px' }} />
                  <textarea placeholder="Value" value={f.value} onChange={(e) => updateField(i, fi, 'value', e.target.value)} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                    <input type="checkbox" checked={f.inline} onChange={(e) => updateField(i, fi, 'inline', e.target.checked)} style={{ width: 'auto' }} />
                    <label style={{ margin: 0 }}>Inline</label>
                  </div>
                </div>
              ))}
              <button className="btn-secondary" onClick={() => addField(i)} style={{ width: '100%' }}>
                <Plus size={16} /> Add Field
              </button>
            </Accordion>

            <Accordion title="Images" icon={<ImageIcon size={16} />} isOpen={activeAccordion === `images-${i}`} onToggle={() => setActiveAccordion(activeAccordion === `images-${i}` ? '' : `images-${i}`)}>
              <div className="input-group">
                <label>Main Image URL</label>
                <input value={embed.image?.url || ''} onChange={(e) => updateEmbed(i, 'image.url', e.target.value)} />
              </div>
              <div className="input-group">
                <label>Thumbnail URL</label>
                <input value={embed.thumbnail?.url || ''} onChange={(e) => updateEmbed(i, 'thumbnail.url', e.target.value)} />
              </div>
            </Accordion>
          </div>
        ))}

        <div style={{ margin: '32px 0' }}>
          <h2 style={{ marginBottom: '16px' }}>Message Components</h2>
          {components.map((row, ri) => (
            <div key={ri} className="card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <label>Action Row {ri + 1} ({row.type})</label>
                <Trash2 size={16} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => setComponents(components.filter((_, idx) => idx !== ri))} />
              </div>

              {row.type === 'buttons' ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {row.items.map((btn, bi) => (
                    <div key={bi} className="card" style={{ flex: '1 1 250px', background: 'rgba(0,0,0,0.2)', marginBottom: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                         <label>Button {bi + 1}</label>
                         <Trash2 size={12} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => {
                           const next = [...components];
                           next[ri].items.splice(bi, 1);
                           setComponents(next);
                         }} />
                      </div>
                      <div className="input-group" style={{ marginBottom: '8px' }}>
                        <input placeholder="Label" value={btn.label} onChange={(e) => {
                          const next = [...components];
                          next[ri].items[bi].label = e.target.value;
                          setComponents(next);
                        }} />
                      </div>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                        <input placeholder="Emoji" style={{ width: '60px' }} value={btn.emoji} onChange={(e) => {
                          const next = [...components];
                          next[ri].items[bi].emoji = e.target.value;
                          setComponents(next);
                        }} />
                        <select value={btn.style} onChange={(e) => {
                          const next = [...components];
                          next[ri].items[bi].style = e.target.value;
                          setComponents(next);
                        }}>
                          <option>Primary</option>
                          <option>Secondary</option>
                          <option>Success</option>
                          <option>Danger</option>
                          <option>Link</option>
                        </select>
                      </div>
                      {btn.style === 'Link' ? (
                        <input placeholder="URL" value={btn.url} onChange={(e) => {
                          const next = [...components];
                          next[ri].items[bi].url = e.target.value;
                          setComponents(next);
                        }} />
                      ) : (
                        <div className="card" style={{ padding: '8px', margin: 0, background: 'rgba(0,0,0,0.1)' }}>
                           <label style={{ fontSize: '10px' }}>Action Response</label>
                           <textarea rows="2" style={{ fontSize: '12px' }} placeholder="Bot reply text..." value={btn.action.content} onChange={(e) => {
                             const next = [...components];
                             next[ri].items[bi].action.content = e.target.value;
                             setComponents(next);
                           }} />
                           <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                              <input type="checkbox" checked={btn.action.ephemeral} onChange={(e) => {
                                const next = [...components];
                                next[ri].items[bi].action.ephemeral = e.target.checked;
                                setComponents(next);
                              }} style={{ width: 'auto' }} />
                              <label style={{ margin: 0, fontSize: '10px' }}>Only I can see</label>
                           </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {row.items.length < 5 && (
                    <button className="btn-secondary" onClick={() => addButton(ri)} style={{ height: 'fit-content' }}>
                      <Plus size={14} /> Button
                    </button>
                  )}
                </div>
              ) : (
                <div>
                   <div className="input-group">
                     <input placeholder="Select Placeholder" value={row.placeholder} onChange={(e) => {
                        const next = [...components];
                        next[ri].placeholder = e.target.value;
                        setComponents(next);
                     }} />
                   </div>
                   {row.options.map((opt, oi) => (
                     <div key={oi} className="card" style={{ background: 'rgba(0,0,0,0.2)', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                           <label>Option {oi + 1}</label>
                           <Trash2 size={12} style={{ cursor: 'pointer', color: '#ff4444' }} onClick={() => {
                             const next = [...components];
                             next[ri].options.splice(oi, 1);
                             setComponents(next);
                           }} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                          <input placeholder="Emoji" style={{ width: '60px' }} value={opt.emoji} onChange={(e) => {
                            const next = [...components];
                            next[ri].options[oi].emoji = e.target.value;
                            setComponents(next);
                          }} />
                          <input placeholder="Label" value={opt.label} onChange={(e) => {
                            const next = [...components];
                            next[ri].options[oi].label = e.target.value;
                            setComponents(next);
                          }} />
                        </div>
                        <input placeholder="Description" value={opt.description} onChange={(e) => {
                           const next = [...components];
                           next[ri].options[oi].description = e.target.value;
                           setComponents(next);
                        }} style={{ marginBottom: '8px' }} />
                        <div className="card" style={{ padding: '8px', margin: 0, background: 'rgba(0,0,0,0.1)' }}>
                           <label style={{ fontSize: '10px' }}>Action Response</label>
                           <textarea rows="2" style={{ fontSize: '12px' }} placeholder="Bot reply text..." value={opt.action.content} onChange={(e) => {
                             const next = [...components];
                             next[ri].options[oi].action.content = e.target.value;
                             setComponents(next);
                           }} />
                        </div>
                     </div>
                   ))}
                   <button className="btn-secondary" onClick={() => addSelectOption(ri)}>
                     <Plus size={14} /> Add Option
                   </button>
                </div>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary" style={{ flex: 1 }} onClick={() => addActionRow('buttons')}>
              <Plus size={16} /> Add Button Row
            </button>
            <button className="btn-secondary" style={{ flex: 1 }} onClick={() => addActionRow('select')}>
              <Plus size={16} /> Add Select Menu
            </button>
          </div>
        </div>
        
        <button className="btn-secondary" style={{ width: '100%' }} onClick={() => setEmbeds([...embeds, { title: 'Embed', description: '', color: '#5865f2', author: {}, footer: {}, image: {}, thumbnail: {}, fields: [] }])}>
          <Plus size={16} /> Add Another Embed
        </button>
      </section>

      <section className="preview-panel">
        <div style={{ width: '100%', maxWidth: '520px' }}>
          <h2 style={{ marginBottom: '24px' }}>Live Preview</h2>
          <div className="discord-embed-preview" style={{ flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div className="avatar-mock" style={{ backgroundImage: botUser ? `url(${botUser.avatar})` : 'none', backgroundSize: 'cover' }}></div>
              <div className="message-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: 'white' }}>{botUser ? botUser.username : 'Discord Bot'}</span>
                  <span className="bot-tag">Bot</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '4px' }}>Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                
                {messageContent && (
                  <div className="markdown-content" style={{ marginBottom: '8px' }}>
                    <ReactMarkdown>{messageContent}</ReactMarkdown>
                  </div>
                )}

                {embeds.map((e, idx) => (
                  <div key={idx} className="embed-card" style={{ borderColor: e.color }}>
                    {e.author?.name && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        {e.author.icon_url && <img src={e.author.icon_url} style={{ width: '24px', height: '24px', borderRadius: '50%' }} alt="" />}
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>{e.author.name}</span>
                      </div>
                    )}
                    {e.title && <div className="embed-title">{e.title}</div>}
                    {e.description && (
                      <div className="embed-description markdown-content">
                        <ReactMarkdown>{e.description}</ReactMarkdown>
                      </div>
                    )}
                    {e.fields?.length > 0 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '12px' }}>
                        {e.fields.map((f, fi) => (
                          <div key={fi} style={{ gridColumn: f.inline ? 'span 1' : 'span 3' }}>
                            <div style={{ fontWeight: '700', fontSize: '14px' }}>{f.name}</div>
                            <div className="markdown-content" style={{ fontSize: '14px' }}>
                              <ReactMarkdown>{f.value}</ReactMarkdown>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {e.image?.url && <img src={e.image.url} style={{ width: '100%', borderRadius: '4px', marginTop: '12px' }} alt="" />}
                    {e.thumbnail?.url && <img src={e.thumbnail.url} style={{ position: 'absolute', top: '12px', right: '12px', width: '80px', height: '80px', borderRadius: '4px' }} alt="" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Components Preview */}
            <div style={{ marginLeft: '56px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
               {components.map((row, ri) => (
                 <div key={ri} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                   {row.type === 'buttons' ? (
                     row.items.map((btn, bi) => (
                       <div key={bi} className={`btn-mock btn-${btn.style.toLowerCase()}`}>
                         {btn.emoji} {btn.label} {btn.style === 'Link' && '↗'}
                       </div>
                     ))
                   ) : (
                     <div className="select-mock">
                        {row.placeholder}
                        <Plus size={14} />
                     </div>
                   )}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

