const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    try {
        const channel = await client.channels.fetch('1504960398091354252');
        const infoEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Case Shop - Nexus', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
            .setDescription('*Welcome to the official Case Shop! Here you can purchase various cases using your in-game resources. Once purchased, use `/inventory` to open them.*')
            .addFields(
                { name: '**How it works:**', value: '• Select a case below to purchase.\n• Costs are deducted from your `/inventory` balances.\n• Check your inventory to view and open your cases.' },
                { name: '**Available Cases:**', value: '<:classicase:1505769014813786234> **Classic** | <:diamondcase:1505769092072734830> **Diamond** | <:femerald:1507462059325915188> **Emerald**' }
            )
            .setColor('#5865F2')
            .setFooter({ text: 'Nexus', iconURL: client.user.displayAvatarURL() });

        const classicEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Classic Case', iconURL: 'https://cdn.discordapp.com/emojis/1505769014813786234.png' })
            .setDescription(`<:dot:1502761998599979130> *Nexus*`)
            .addFields(
                { name: '<:finfo:1502759510106968085> 64.75% Normal', value: `*Nothing*`, inline: true },
                { name: '<a:fgems:1502758574261145813> 25% Epic', value: `*<:spdollar:1506171626591490048> $400,000*`, inline: true },
                { name: '<a:5055goldendiamond:1505787726639923320> 9.75% Legendary', value: `*<:spdollar:1506171626591490048> $800,000*`, inline: true },
                { name: '<a:blackdiamond:1505786924097470484> 0.5% Mythic', value: `*<:spdollar:1506171626591490048> $1,600,000*`, inline: true },
                { name: '<a:pricetag:1505789990095949935> Cost', value: `*<:spdollar:1506171626591490048> $200,000*`, inline: true }
            )
            .setColor('#000000')
            .setThumbnail('https://cdn.discordapp.com/emojis/1505769014813786234.png');

        const goldenEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Diamond Case', iconURL: 'https://cdn.discordapp.com/emojis/1505769092072734830.png' })
            .setDescription(`<:dot:1502761998599979130> *Nexus*`)
            .addFields(
                { name: '<:finfo:1502759510106968085> 64.75% Normal', value: `*Nothing*`, inline: true },
                { name: '<a:fgems:1502758574261145813> 25% Epic', value: `*4 JCs*`, inline: true },
                { name: '<a:5055goldendiamond:1505787726639923320> 9.75% Legendary', value: `*8 JCs*`, inline: true },
                { name: '<a:blackdiamond:1505786924097470484> 0.5% Mythic', value: `*16 JCs*`, inline: true },
                { name: '<a:pricetag:1505789990095949935> Cost', value: `*2 JCs*`, inline: true }
            )
            .setColor('#00FFFF')
            .setThumbnail('https://cdn.discordapp.com/emojis/1505769092072734830.png');

        const emeraldEmbed = new EmbedBuilder()
            .setAuthor({ name: 'Emerald Case', iconURL: 'https://i.ibb.co/8L8Ct9T9/image-2026-06-20-044215410.png' })
            .setDescription(`<:dot:1502761998599979130> *Nexus*`)
            .addFields(
                { name: '<:finfo:1502759510106968085> 64.75% Normal', value: `*Nothing*`, inline: true },
                { name: '<a:fgems:1502758574261145813> 25% Epic', value: `*4 DPs*`, inline: true },
                { name: '<a:5055goldendiamond:1505787726639923320> 9.75% Legendary', value: `*8 DPs*`, inline: true },
                { name: '<a:blackdiamond:1505786924097470484> 0.5% Mythic', value: `*16 DPs*`, inline: true },
                { name: '<a:pricetag:1505789990095949935> Cost', value: `*2 DPs*`, inline: true }
            )
            .setColor('#FF00FF')
            .setThumbnail('https://i.ibb.co/8L8Ct9T9/image-2026-06-20-044215410.png');

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('buy_case_classic').setLabel('Buy Classic').setStyle(ButtonStyle.Secondary).setEmoji('1505769014813786234'),
            new ButtonBuilder().setCustomId('buy_case_golden').setLabel('Buy Diamond').setStyle(ButtonStyle.Primary).setEmoji('1505769092072734830'),
            new ButtonBuilder().setCustomId('buy_case_emerald').setLabel('Buy Emerald').setStyle(ButtonStyle.Success).setEmoji('1504973609830060062')
        );

        const sentMessage = await channel.send({ embeds: [infoEmbed, classicEmbed, goldenEmbed, emeraldEmbed], components: [row] });
        console.log('Message updated successfully. New ID: ' + sentMessage.id);
    } catch (e) {
        console.error(e);
    }
    process.exit(0);
});
const token = process.env.TOKEN || require('./bot_data.json').token;
client.login(token);
