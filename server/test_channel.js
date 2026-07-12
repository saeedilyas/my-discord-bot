const { Client, GatewayIntentBits } = require('discord.js');
const botData = require('./bot_data.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channelId = '1522182795278028860';
    try {
        const channel = await client.channels.fetch(channelId);
        console.log(`Channel found: ${channel.name} (${channel.id}) in guild ${channel.guild.name}`);
    } catch (e) {
        console.error('Failed to fetch channel:', e.message);
    }
    client.destroy();
});

client.login(botData.token);
