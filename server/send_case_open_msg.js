const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');

const botData = JSON.parse(fs.readFileSync('./bot_data.json', 'utf8'));
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    try {
        const channel = await client.channels.fetch('1504960442005721108');
        
        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Case Unboxing - Nexus', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
            .setTitle('<:classicase:1505769014813786234> Ready to test your luck?')
            .setDescription([
                '*Welcome to the Case Unboxing area! If you have purchased cases from the shop, you can open them right here.*',
                '',
                '<:dot:1502761998599979130> **How it works:**',
                'Click one of the buttons below to open a case from your inventory. The reward will be automatically added to your balance!',
                '',
                '*Use `/inventory` to check how many cases you currently own.*'
            ].join('\n'))
            .setColor('#5865F2')
            .setFooter({ text: 'Nexus | Unboxing System', iconURL: client.user.displayAvatarURL() });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('open_case_classic').setLabel('Open Classic').setStyle(ButtonStyle.Secondary).setEmoji('1505769014813786234'),
            new ButtonBuilder().setCustomId('open_case_golden').setLabel('Open Diamond').setStyle(ButtonStyle.Primary).setEmoji('1505769092072734830'),
            new ButtonBuilder().setCustomId('open_case_emerald').setLabel('Open Emerald').setStyle(ButtonStyle.Success).setEmoji('1504973609830060062')
        );

        await channel.send({ embeds: [embed], components: [row] });
        console.log('Case unboxing message sent successfully.');
    } catch (e) {
        console.error('Error sending message:', e);
    }
    process.exit(0);
});

client.login(botData.token);
