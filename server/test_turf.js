const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const botData = require('./bot_data.json');
const axios = require('axios');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channelId = '1522182795278028860';
    try {
        const channel = await client.channels.fetch(channelId);
        if (!channel) return;

        console.log('Fetching API...');
        const res = await axios.get('https://acp-api.ls-rcr.com/api/group/turf_stats/weekly/current', { timeout: 10000 });
        let data = res.data;
        if (!Array.isArray(data)) {
            data = data.data || [];
        }

        let sortedGroups = data.map(e => ({
            name: e.name || e.groupName || 'Unknown',
            captures: e.turfStats?.captures || 0,
            defenses: e.turfStats?.defenses || 0,
            kills: e.turfStats?.kills || 0,
        }));

        sortedGroups.sort((a, b) => {
            const scoreA = 3 * a.captures + 2 * a.defenses + 1 * a.kills;
            const scoreB = 3 * b.captures + 2 * b.defenses + 1 * b.kills;
            return scoreB - scoreA;
        });

        const topGroups = sortedGroups.slice(0, 6);
        if (topGroups.length === 0) {
            topGroups.push({ name: 'No Data', captures: 0, defenses: 0, kills: 0 });
        }

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Hooligans Turf War — Top 6', iconURL: 'https://cdn.discordapp.com/emojis/1507349291243536414.png' })
            .setColor('#111317')
            .setThumbnail(client.user.displayAvatarURL());

        const descriptionLines = [];
        const medals = ['🏆', '🥈', '🥉', '<:4_:1522182795278028860>', '<:5_:1522182795278028861>', '<:6_:1522182795278028862>'];
        
        topGroups.forEach((group, index) => {
            const rankIcon = index < 3 ? medals[index] : `${index + 1}`;
            descriptionLines.push(`**${rankIcon} ${group.name}**`);
            descriptionLines.push(`» Captures: ${group.captures} | 🛡️ Defenses: ${group.defenses} | ⚔️ Kills: ${group.kills}`);
            descriptionLines.push('');
        });

        embed.setDescription(descriptionLines.join('\n'));
        embed.setFooter({ text: 'Turf Stats • Updates automatically • Prize resets in 7 days', iconURL: client.user.displayAvatarURL() });
        embed.setTimestamp();

        console.log('Sending message...');
        const newMsg = await channel.send({ embeds: [embed] });
        console.log('Message sent with ID:', newMsg.id);

    } catch (e) {
        console.error('Error updating turf stats:', e);
    }
    client.destroy();
});

client.login(botData.token);
