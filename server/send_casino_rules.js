const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    try {
        const channel = await client.channels.fetch('1507211823596961913');
        const message = await channel.messages.fetch('1507212392256376852');

        const rulesEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Casino Rules', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
            .setDescription(`# Casino Rules\n*Welcome to Nexus Casino & Case System. Please read and follow the rules below to ensure a fair and enjoyable experience for everyone.*\n\n<:dot:1502761998599979130> **1. All Purchases are Final**\n*Once you purchase a case or place a bet, the transaction cannot be reversed. No refunds will be provided.*\n\n<:dot:1502761998599979130> **2. No Exploiting or Bug Abuse**\n*Any attempt to exploit bugs, glitches, or loop-holes in the casino/case system will result in an immediate and permanent ban.*\n\n<:dot:1502761998599979130> **3. Fixed Probabilities**\n*Case opening probabilities are hardcoded and transparent. Staff cannot alter odds, so please do not ask for "better luck."*\n\n<:dot:1502761998599979130> **4. No Scamming**\n*Deceiving or scamming other players for case rewards or casino funds is strictly prohibited and will result in a ban.*\n\n<:dot:1502761998599979130> **5. Play Responsibly**\n*Please manage your in-game currency wisely. Do not spam or beg other players for money if you run out of funds.*\n\n<:dot:1502761998599979130> **6. Report Issues Promptly**\n*If you encounter a transaction error or missing items, open a support ticket immediately with evidence (screenshots/videos).*`)
            .setColor('#FFD700')
            .setThumbnail('https://cdn.discordapp.com/emojis/1505782769408807014.png')
            .setFooter({ text: 'Nexus', iconURL: client.user.displayAvatarURL() });

        await message.edit({ embeds: [rulesEmbed] });
        console.log('Casino rules updated successfully.');
    } catch (e) {
        console.error(e);
    }
    process.exit(0);
});

const token = process.env.TOKEN || require('./bot_data.json').token;
client.login(token);
