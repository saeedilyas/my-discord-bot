const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./bot_data.json', 'utf8'));
const token = data.token;
const channelId = "1502842217792798913"; // the channel ID from the discord link
const messageId = "1503162162208706713"; // the message ID

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = await client.channels.fetch(channelId).catch(console.error);
    if (channel) {
        try {
            const msg = await channel.messages.fetch(messageId);
            const specificStaff = ['1503148052209209414', '1456634173321384007'].map(id => `<@&${id}>`).join(' ');
            
            const embed = new EmbedBuilder()
                .setDescription([
                    '***Server Rules & Regulations***',
                    '*Welcome to our community! Please adhere to the following rules:*',
                    '---',
                    '***1. SA-MP Server Rules***',
                    '> *1. No Cheating, Hacking, or Exploiting.*',
                    '> *2. No DM without a valid roleplay reason.*',
                    '> *3. Do not abuse bugs or glitches.*',
                    '> *4. Respect all players and staff members.*',
                    '---',
                    '***2. Discord Rules***',
                    '> *1. No Spamming or flooding the chat.*',
                    '> *2. No Advertising other servers or services.*',
                    '> *3. Strictly follow Discord Terms of Service.*',
                    '> *4. Keep conversations in appropriate channels.*',
                    '---',
                    `*Staff Team:* ${specificStaff}`
                ].join('\n'))
                .setColor('#2B2D31')
                .setFooter({ text: 'Nexus', iconURL: client.user.displayAvatarURL() });

            await msg.edit({ embeds: [embed] });
            console.log("Rules message updated successfully!");
        } catch (e) {
            console.error("Failed to fetch/edit message:", e.message);
        }
    } else {
        console.log("Channel not found.");
    }
    process.exit(0);
});

client.login(token);
