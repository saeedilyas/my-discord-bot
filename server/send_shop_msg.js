const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./bot_data.json', 'utf8'));
const token = data.token;
const channelId = "1525799220760805477";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const channel = await client.channels.fetch(channelId).catch(console.error);
    if (channel) {
        const embed = new EmbedBuilder()
            .setDescription([
                '***1. Jailcards***',
                '',
                '• *Used to skip jail time instantly.*',
                '• *Stock: 100*',
                '• *Value: $150,000 each*',
                '',
                '***2. Donation Points***',
                '',
                '• *Premium currency for VIP perks.*',
                '• *Stock: 50*',
                '• *Value: $200,000 each*',
                '',
                '***3. Houses***',
                '',
                '• *Exclusive properties around San Andreas.*',
                '• *Stock: 2 (Vinewood, Richman)*',
                '• *Value: Bidding starts at $5,000,000*',
                '',
                '***4. Duelcards***',
                '',
                '• *Special cards to challenge players without losing gear.*',
                '• *Stock: 200*',
                '• *Value: $50,000 each*',
                '',
                '---',
                '',
                '🛒 **Actions**',
                '',
                '---',
                '',
                '• *Make sure you have the required funds before placing a bid or creating an order.*',
                '',
                `*Updated: ${new Date().toUTCString()}*`
            ].join('\n'))
            .setColor('#2B2D31')
            .setFooter({ text: 'Nexus', iconURL: client.user.displayAvatarURL() });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('shop_create_order').setLabel('Create Order').setStyle(ButtonStyle.Primary).setEmoji('🛒'),
            new ButtonBuilder().setCustomId('shop_place_bid').setLabel('Place Bid').setStyle(ButtonStyle.Secondary).setEmoji('⚖️')
        );

        await channel.send({ embeds: [embed], components: [row] });
        console.log("Shop message sent successfully!");
    } else {
        console.log("Channel not found.");
    }
    process.exit(0);
});

client.login(token);
