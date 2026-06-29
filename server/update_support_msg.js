const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const fs = require('fs');

const botData = JSON.parse(fs.readFileSync('./bot_data.json', 'utf8'));
const token = botData.token;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    try {
        const channelId = '1504993339055935548';
        const messageId = '1504994938356502558';
        
        const channel = await client.channels.fetch(channelId);
        const message = await channel.messages.fetch(messageId);
        const guild = channel.guild;

        const staffRoles = botData.caseSystem.staffRoles.map(id => `<@&${id}>`).join(' ');

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Support System - Nexus', iconURL: 'https://cdn.discordapp.com/emojis/1503526408079802488.png' })
            .setTitle('<:fsupport:1503526408079802488> How can we help you today?')
            .setDescription([
                '**How to reach us?**',
                `<:dot:1502761998599979130> *Just select an option from the dropdown menu below to start a conversation. Our ${staffRoles} will be ready to assist you with any questions or issues you may have.*`,
                '',
                '**How long does it take to get a response?**',
                `<:dot:1502761998599979130> *${staffRoles} usually reply within 24 hours, but most of the time you’ll hear back even sooner.*`,
                '',
                '**What should I include in my Support?**',
                `<:dot:1502761998599979130> *Try to add as much detail as you can, like screenshots or a clear explanation of the issue. It helps us help you faster.*`,
                '',
                '**Anything else I should know?**',
                `<:dot:1502761998599979130> *Just be patient while we check things out — we’ll get back to you as soon as possible!*`
            ].join('\n'))
            .setColor('#5865F2')
            .setThumbnail('https://cdn.discordapp.com/emojis/1503526408079802488.png')
            .setFooter({ text: 'Nexus', iconURL: guild ? guild.iconURL() : undefined });

        const select = new StringSelectMenuBuilder()
            .setCustomId('support_category_select')
            .setPlaceholder('Select a support category...')
            .addOptions([
                { label: 'General Inquiries', description: 'Ask questions about the server or bot', value: 'support_general', emoji: '❓' },
                { label: 'Withdrawals', description: 'Request or report issues with withdrawals', value: 'support_withdrawals', emoji: '💰' },
                { label: 'Cases Purchases', description: 'Help with case buying or missing items', value: 'support_cases', emoji: '1505782769408807014' },
                { label: 'Claim giveaway prize', description: 'Claim your giveaway reward here', value: 'support_giveaway', emoji: '🎉' }
            ]);

        await message.edit({ embeds: [embed], components: [new ActionRowBuilder().addComponents(select)] });
        console.log('Support message updated successfully.');
    } catch (e) {
        console.error('Error updating support message:', e);
    }
    process.exit(0);
});

client.login(token);
