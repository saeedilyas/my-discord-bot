const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    Partials,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    REST,
    Routes,
    PermissionFlagsBits,
    ChannelType
} = require('discord.js');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const query = require('samp-query');

const CURRENT_VERSION = '1.6.11';
const UPDATE_LOGS = [
    'Adjusted update title text size and capitalization for a cleaner look.'
];

// Global Error Handlers
process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

const DATA_FILE = path.join(__dirname, 'bot_data.json');

let discordClient = null;
const componentActions = new Map(); // Store custom_id -> action mapping

// Persistent Store
let botData = {
    token: '',
    slashCommands: [],
    presence: {
        status: 'online',
        activityType: '0',
        activityName: ''
    },
    sampMonitor: {
        messageId: null,
        channelId: '1460823311511720142',
        host: 'play.ls-rcr.com',
        port: 7777
    },
    auditLog: {
        channelId: '1456633547031973929'
    },
    lastAnnouncedVersion: '1.0.0',
    suggestionSystem: {
        channelId: '1503145319171359011',
        rulesChannelId: '1502842217792798913',
        staffRoles: ['1503148052209209414', '1456634173321384007']
    },
    complaintSystem: {
        channelId: '1503497775214497852',
        categoryId: '1503498256099971092',
        staffRoles: ['1503148052209209414', '1456634173321384007'],
        nextId: 1
    },
    caseSystem: {
        channelId: '1504960398091354252',
        logOpenChannelId: '1504960442005721108',
        logPurchaseChannelId: '1504990351826489394',
        staffRoles: ['1503148052209209414', '1456634173321384007'],
        inventories: {} // userId -> { cash: 0, jcs: 0, dps: 0, cases: { classic: 0, golden: 0, emerald: 0 } }
    },
    recentlyAcceptedSystem: {
        channelId: '1525804799595905024',
        messageId: null,
        droppedTags: []
    }
};

const CASE_CONFIG = {
    classic: {
        name: 'Classic Case',
        cost: 200000,
        currency: 'cash',
        emoji: '<:classicase:1505769014813786234>',
        image: 'https://cdn.discordapp.com/emojis/1505769014813786234.png',
        rewards: {
            basic: { name: 'Nothing', value: 0, odds: 64.75 },
            epic: { name: '<:spdollar:1506171626591490048> $400,000', value: 400000, odds: 25 },
            legendary: { name: '<:spdollar:1506171626591490048> $800,000', value: 800000, odds: 9.75 },
            mythic: { name: '<:spdollar:1506171626591490048> $1,600,000', value: 1600000, odds: 0.5 }
        }
    },
    golden: {
        name: 'Diamond Case',
        cost: 2,
        currency: 'jcs',
        emoji: '<:diamondcase:1505769092072734830>',
        image: 'https://cdn.discordapp.com/emojis/1505769092072734830.png',
        rewards: {
            basic: { name: 'Nothing', value: 0, odds: 64.75 },
            epic: { name: '4 Jailcards', value: 4, odds: 25 },
            legendary: { name: '8 Jailcards', value: 8, odds: 9.75 },
            mythic: { name: '16 Jailcards', value: 16, odds: 0.5 }
        }
    },
    emerald: {
        name: 'Emerald Case',
        cost: 2,
        currency: 'dps',
        emoji: '<:femeraldcase:1525845628586954793>',
        image: 'https://i.ibb.co/8L8Ct9T9/image-2026-06-20-044215410.png', // Provided by user
        rewards: {
            basic: { name: 'Nothing', value: 0, odds: 64.75 },
            epic: { name: '4 Donation Points', value: 4, odds: 25 },
            legendary: { name: '8 Donation Points', value: 8, odds: 9.75 },
            mythic: { name: '16 Donation Points', value: 16, odds: 0.5 }
        }
    }
};

const BUILTIN_COMMANDS = [
    {
        name: 'avatar',
        description: "Displays a user's avatar",
        options: [
            {
                name: 'user',
                type: 6, // USER type
                description: 'The user to show the avatar of',
                required: false
            }
        ]
    },
    {
        name: 'Inventory Manager',
        type: 2
    },
    {
        name: 'Give/Take Cases',
        type: 2
    },
    {
        name: 'Clear Inventory',
        type: 2
    },
    {
        name: 'stats',
        description: "Shows player statistics from LS-RCR",
        options: [
            {
                name: 'username',
                type: 3, // STRING
                description: 'The username to look up',
                required: true
            }
        ]
    },
    {
        name: 'uptime',
        description: "Shows the bot's current uptime"
    },
    {
        name: 'cmds',
        description: "Displays a list of all available bot commands"
    },
    {
        name: 'blackjack',
        description: "Play a game of blackjack with your bot cash",
        options: [
            {
                name: 'bet',
                type: 4, // INTEGER
                description: 'The amount of cash to bet',
                required: true,
                min_value: 10000
            }
        ]
    },
    {
        name: 'crash',
        description: "Play a game of crash with your bot cash",
        options: [
            {
                name: 'bet',
                type: 4, // INTEGER
                description: 'The amount of cash to bet',
                required: true,
                min_value: 10000
            }
        ]
    },
    {
        name: 'mines',
        description: "Play a game of Mines with your bot cash",
        options: [
            {
                name: 'bet',
                type: 4, // INTEGER
                description: 'The amount of cash to bet',
                required: true,
                min_value: 10000
            },
            {
                name: 'bombs',
                type: 4, // INTEGER
                description: 'Number of bombs (1-19, default 3)',
                required: false,
                min_value: 1,
                max_value: 19
            }
        ]
    },
    {
        name: 'hilo',
        description: "Play a game of Higher or Lower",
        options: [
            {
                name: 'bet',
                type: 4, // INTEGER
                description: 'The amount of cash to bet',
                required: true,
                min_value: 10000
            }
        ]
    },
    {
        name: 'cstats',
        description: "View your casino and gambling statistics"
    },
    {
        name: 'setup-suggestions',
        description: "Sends the initial suggestion prompt to the configured channel"
    },
    {
        name: 'setup-rules',
        description: "Sends the server rules embed to the configured channel"
    },
    {
        name: 'setup-update',
        description: "Sends the Casino V2 Update log embed to the current channel"
    },
    {
        name: 'setup-complaints',
        description: "Sends the complaint system prompt to the configured channel"
    },
    {
        name: 'giveaway',
        description: "Starts a professional giveaway",
        options: [
            {
                name: 'prize',
                type: 3, // STRING
                description: 'The prize for the giveaway',
                required: true
            },
            {
                name: 'duration',
                type: 4, // INTEGER
                description: 'Duration in minutes',
                required: true
            },
            {
                name: 'winners',
                type: 4, // INTEGER
                description: 'Number of winners',
                required: true
            }
        ]
    },
    {
        name: 'inventory',
        description: "Shows your current case system inventory"
    },
    {
        name: 'setup-cases',
        description: "Sends the case system information and opening prompts"
    },
    {
        name: 'givecases',
        description: "Admin: Give cases to a user",
        options: [
            { name: 'user', type: 6, description: 'The user to give cases to', required: true },
            { name: 'type', type: 3, description: 'Case type', required: true, choices: [{ name: 'Classic', value: 'classic' }, { name: 'Diamond', value: 'golden' }, { name: 'Emerald', value: 'emerald' }] },
            { name: 'amount', type: 4, description: 'Amount of cases', required: true }
        ]
    },
    {
        name: 'removecases',
        description: "Admin: Remove cases from a user",
        options: [
            { name: 'user', type: 6, description: 'The user to remove cases from', required: true },
            { name: 'type', type: 3, description: 'Case type', required: true, choices: [{ name: 'Classic', value: 'classic' }, { name: 'Diamond', value: 'golden' }, { name: 'Emerald', value: 'emerald' }] },
            { name: 'amount', type: 4, description: 'Amount of cases', required: true }
        ]
    },
    {
        name: 'setjcs',
        description: "Admin: Set a user's Jailcards amount",
        options: [
            { name: 'user', type: 6, description: 'The user', required: true },
            { name: 'amount', type: 4, description: 'New amount', required: true }
        ]
    },
    {
        name: 'setdps',
        description: "Admin: Set a user's Donation Points amount",
        options: [
            { name: 'user', type: 6, description: 'The user', required: true },
            { name: 'amount', type: 4, description: 'New amount', required: true }
        ]
    },
    {
        name: 'setcash',
        description: "Admin: Set a user's Cash amount",
        options: [
            { name: 'user', type: 6, description: 'The user', required: true },
            { name: 'amount', type: 4, description: 'New amount', required: true }
        ]
    },
    {
        name: 'givecash',
        description: "Admin: Give cash to a user",
        options: [
            { name: 'user', type: 6, description: 'The user', required: true },
            { name: 'amount', type: 4, description: 'Amount to give', required: true }
        ]
    },
    {
        name: 'clear',
        description: "Clear a specific number of messages from the channel",
        options: [
            {
                name: 'amount',
                type: 4, // INTEGER
                description: 'Number of messages to clear (1-100)',
                required: true
            }
        ]
    },
    {
        name: 'setup-support',
        description: "Sends the support system information and ticket dropdown"
    },
    {
        name: 'setup-groups',
        description: "Sends the interactive LS-RCR Groups viewer"
    },
    {
        name: 'setup-shop',
        description: "Sends the player shop embed with bid/order buttons"
    }
];

// Casino Games State
const activeBlackjackGames = new Map();
const activeCrashGames = new Map();
const activeMinesGames = new Map();
const activeHiloGames = new Map();

const bjSuits = ['♠', '♥', '♦', '♣'];
const bjRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    let deck = [];
    for (let suit of bjSuits) {
        for (let rank of bjRanks) {
            deck.push({ suit, rank });
        }
    }
    return deck.sort(() => Math.random() - 0.5);
}

function calculateHand(hand) {
    let value = 0;
    let aces = 0;
    for (let card of hand) {
        if (card.rank === 'A') {
            aces += 1;
            value += 11;
        } else if (['K', 'Q', 'J'].includes(card.rank)) {
            value += 10;
        } else {
            value += parseInt(card.rank);
        }
    }
    while (value > 21 && aces > 0) {
        value -= 10;
        aces -= 1;
    }
    return value;
}

function formatHand(hand, hideFirst = false) {
    if (hideFirst) {
        return `[ ? ] ` + hand.slice(1).map(c => `[${c.rank}${c.suit}]`).join(' ');
    }
    return hand.map(c => `[${c.rank}${c.suit}]`).join(' ');
}

function getMinesMultiplier(bombs, picks, total = 20) {
    if (picks === 0) return 1.0;
    let prob = 1.0;
    for (let i = 0; i < picks; i++) {
        prob *= (total - bombs - i) / (total - i);
    }
    return prob === 0 ? 0 : 0.95 / prob;
}

function generateMinesGrid(game, disabled = false, explodedIndex = -1) {
    const rows = [];
    for (let r = 0; r < 4; r++) {
        const row = new ActionRowBuilder();
        for (let c = 0; c < 5; c++) {
            const idx = r * 5 + c;
            const btn = new ButtonBuilder().setCustomId(`mine_${idx}`);
            if (game.revealed[idx]) {
                if (game.grid[idx]) {
                    btn.setStyle(ButtonStyle.Danger).setEmoji('💣').setDisabled(true);
                } else {
                    btn.setStyle(ButtonStyle.Success).setEmoji('💎').setDisabled(true);
                }
            } else {
                if (disabled) {
                    if (game.grid[idx]) {
                        btn.setStyle(explodedIndex === idx ? ButtonStyle.Danger : ButtonStyle.Secondary)
                            .setEmoji(explodedIndex === idx ? '💥' : '💣')
                            .setDisabled(true);
                    } else {
                        btn.setStyle(ButtonStyle.Secondary).setEmoji('🔲').setDisabled(true);
                    }
                } else {
                    btn.setStyle(ButtonStyle.Secondary).setEmoji('🔲');
                }
            }
            row.addComponents(btn);
        }
        rows.push(row);
    }

    // 5th row for cashout
    if (!disabled) {
        const cashoutRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('mine_cashout')
                .setLabel(`Cash Out (${game.multiplier.toFixed(2)}x)`)
                .setStyle(ButtonStyle.Primary)
                .setDisabled(game.picks === 0)
        );
        rows.push(cashoutRow);
    }
    return rows;
}

function getCardImageUrl(card) {
    let rank = card.rank;
    if (rank === '10') rank = '0';
    const suit = card.suit === '♠' ? 'S' : card.suit === '♥' ? 'H' : card.suit === '♦' ? 'D' : 'C';
    return `https://deckofcardsapi.com/static/img/${rank}${suit}.png`;
}

function getCardValue(card) {
    if (card.rank === 'A') return 14;
    if (card.rank === 'K') return 13;
    if (card.rank === 'Q') return 12;
    if (card.rank === 'J') return 11;
    return parseInt(card.rank);
}

function getHiloMultiplier(cardValue, guess) {
    let prob = 0;
    if (guess === 'higher') prob = (14 - cardValue) / 13;
    if (guess === 'lower') prob = (cardValue - 2) / 13;
    if (prob <= 0) return 0;
    return 0.95 / prob;
}

const getInventory = (userId) => {
    if (!botData.caseSystem.inventories[userId]) {
        botData.caseSystem.inventories[userId] = {
            cash: 0,
            jcs: 0,
            dps: 0,
            cases: { classic: 0, golden: 0, emerald: 0 }
        };
    } else if (botData.caseSystem.inventories[userId].cases && botData.caseSystem.inventories[userId].cases.emerald === undefined) {
        botData.caseSystem.inventories[userId].cases.emerald = 0;
    }

    if (!botData.caseSystem.inventories[userId].stats) {
        botData.caseSystem.inventories[userId].stats = {
            blackjack: { gambled: 0, won: 0, played: 0 },
            crash: { gambled: 0, won: 0, played: 0 },
            mines: { gambled: 0, won: 0, played: 0 },
            hilo: { gambled: 0, won: 0, played: 0 },
            casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 }
        };
    } else {
        if (!botData.caseSystem.inventories[userId].stats.mines) {
            botData.caseSystem.inventories[userId].stats.mines = { gambled: 0, won: 0, played: 0 };
        }
        if (!botData.caseSystem.inventories[userId].stats.hilo) {
            botData.caseSystem.inventories[userId].stats.hilo = { gambled: 0, won: 0, played: 0 };
        }
    }

    return botData.caseSystem.inventories[userId];
};

const loadData = () => {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
            botData = {
                ...botData,
                ...data,
                presence: { ...botData.presence, ...(data.presence || {}) },
                sampMonitor: { ...botData.sampMonitor, ...(data.sampMonitor || {}) },
                caseSystem: { ...botData.caseSystem, ...(data.caseSystem || {}) }
            };
            console.log('Loaded bot data from file.');
        }
    } catch (err) {
        console.error('Error loading data:', err);
    }
};

const saveData = () => {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(botData, null, 2));
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

const logAction = async (client, channelId, embed) => {
    try {
        const channel = await client.channels.fetch(channelId).catch(() => null);
        if (channel) await channel.send({ embeds: [embed] });
    } catch (err) {
        console.error('Logging failed:', err);
    }
};

loadData();
let slashCommandsStore = botData.slashCommands;

const registerCommands = async (token, clientId, commands, client) => {
    if (!clientId) {
        console.error('Cannot register commands: Client ID is missing.');
        return;
    }
    const rest = new REST({ version: '10' }).setToken(token);
    try {
        const body = [
            ...BUILTIN_COMMANDS,
            ...(commands || []).map(cmd => ({
                name: cmd.name,
                description: cmd.description,
                options: cmd.options || []
            }))
        ];

        console.log(`Refreshing ${body.length} global application (/) commands...`);
        await rest.put(Routes.applicationCommands(clientId), { body });
        console.log('Successfully reloaded global application (/) commands.');

        if (client) {
            const guilds = await client.guilds.fetch();
            for (const [guildId] of guilds) {
                try {
                    await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] });
                    console.log(`Cleared guild-specific commands for: ${guildId} to remove duplicates`);
                } catch (gErr) {
                    console.error(`Failed to clear guild commands for ${guildId}:`, gErr.message);
                }
            }
        }
    } catch (error) {
        console.error('CRITICAL: Error registering commands:', error.stack);
    }
};

function getTurfResetTime() {
    const now = new Date();
    let d = new Date();
    d.setUTCHours(23, 59, 59, 999);
    let day = d.getUTCDay();
    let diff = (7 - day) % 7;
    d.setUTCDate(d.getUTCDate() + diff);

    let timeDiff = d.getTime() - now.getTime();
    if (timeDiff <= 0) {
        d.setUTCDate(d.getUTCDate() + 7);
        timeDiff = d.getTime() - now.getTime();
    }

    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

    let parts = [];
    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);

    return parts.length > 0 ? parts.join(' and ') : '< 1 hour';
}

const updateTurfStats = async (client) => {
    const channelId = botData.turfSystem?.channelId || '1522182795278028860';
    console.log('[TurfStats] Attempting to update turf stats for channel:', channelId);
    try {
        const channel = await client.channels.fetch(channelId).catch((e) => {
            console.error('[TurfStats] Failed to fetch channel:', e.message);
            return null;
        });
        if (!channel) {
            console.log('[TurfStats] Channel not found. Aborting.');
            return;
        }

        const axios = require('axios');
        // Fetch from LS-RCR internal API based on frontend logic
        const res = await axios.get('https://acp-api.ls-rcr.com/api/group/turf_stats/weekly/current', { timeout: 10000 });
        let data = res.data;
        if (!Array.isArray(data)) {
            // Data might be wrapped, attempt to extract
            data = data.data || [];
        }

        // Map data according to the frontend's mapping
        let sortedGroups = data.map(e => ({
            name: e.name || e.groupName || 'Unknown',
            captures: e.turfStats?.captures || 0,
            defenses: e.turfStats?.defenses || 0,
            kills: e.turfStats?.kills || 0,
        }));

        // Sort using the frontend formula
        sortedGroups.sort((a, b) => {
            const scoreA = 3 * a.captures + 2 * a.defenses + 1 * a.kills;
            const scoreB = 3 * b.captures + 2 * b.defenses + 1 * b.kills;
            return scoreB - scoreA;
        });

        // Get Top 6
        const topGroups = sortedGroups.slice(0, 6);

        if (topGroups.length === 0) {
            topGroups.push({ name: 'No Data', captures: 0, defenses: 0, kills: 0 });
        }

        const embed = new EmbedBuilder()
            .setAuthor({ name: 'Ls-rcr Turf War Statistics', iconURL: 'https://cdn.discordapp.com/emojis/1507349291243536414.png' })
            .setColor('#111317')
            .setThumbnail(client.user.displayAvatarURL());

        const descriptionLines = [];
        const medals = ['🏆', '🥈', '🥉', '<:4_:1522182795278028860>', '<:5_:1522182795278028861>', '<:6_:1522182795278028862>']; // Use standard emojis if custom ones fail

        topGroups.forEach((group, index) => {
            const rankIcon = index < 3 ? medals[index] : `${index + 1}`; // fallback for 4, 5, 6
            descriptionLines.push(`**${rankIcon} ${group.name}**`);
            descriptionLines.push(`» Captures: ${group.captures} | 🛡️ Defenses: ${group.defenses} | ⚔️ Kills: ${group.kills}`);
            descriptionLines.push(''); // empty line
        });

        embed.setDescription(descriptionLines.join('\n'));
        embed.setFooter({ text: `Turf Stats • Updates automatically • Prize resets in ${getTurfResetTime()}`, iconURL: client.user.displayAvatarURL() });
        embed.setTimestamp();

        // Auto-recover message ID if it was lost from bot_data.json
        if (!botData.turfSystem?.messageId) {
            const recentMessages = await channel.messages.fetch({ limit: 20 }).catch(() => null);
            if (recentMessages) {
                const existing = recentMessages.find(m => m.author.id === client.user.id && m.embeds[0]?.author?.name?.includes('Turf War'));
                if (existing) {
                    if (!botData.turfSystem) botData.turfSystem = {};
                    botData.turfSystem.messageId = existing.id;
                    botData.turfSystem.channelId = channelId;
                    saveData();
                    console.log('[TurfStats] Recovered lost message ID:', existing.id);
                }
            }
        }

        if (botData.turfSystem?.messageId) {
            const msg = await channel.messages.fetch(botData.turfSystem.messageId).catch(() => null);
            if (msg) {
                await msg.edit({ embeds: [embed] });
                return;
            }
        }

        const newMsg = await channel.send({ embeds: [embed] });
        if (!botData.turfSystem) botData.turfSystem = {};
        botData.turfSystem.messageId = newMsg.id;
        botData.turfSystem.channelId = channelId;
        saveData();

    } catch (e) {
        console.error('Error updating turf stats:', e.message);
    }
};

const updateRecentlyAccepted = async (client) => {
    try {
        const fs = require('fs');
        const axios = require('axios');
        const cheerio = require('cheerio');

        let data = { recentlyAcceptedSystem: { channelId: '1525804799595905024', messageId: null, droppedTags: [] } };
        try {
            data = JSON.parse(fs.readFileSync('./bot_data.json', 'utf8'));
        } catch (e) { }

        if (!data.recentlyAcceptedSystem) {
            data.recentlyAcceptedSystem = { channelId: '1525804799595905024', messageId: null, droppedTags: [] };
        }

        const sys = data.recentlyAcceptedSystem;
        const channel = await client.channels.fetch(sys.channelId).catch(() => null);
        if (!channel) return;

        const res = await axios.get('https://ls-rcr.com/community/?p=recently_accepted', { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 });
        const $ = cheerio.load(res.data);
        const players = [];
        $('table tr').each((i, row) => {
            if (i === 0) return; // skip header
            const cols = $(row).find('td');
            if (cols.length >= 2) {
                players.push({
                    name: $(cols[0]).text().trim(),
                    tag: $(cols[1]).text().trim(),
                    date: $(cols[2]).text().trim()
                });
            }
        });

        const activePlayers = players; // Removed the flawed tag drop detection because name changes break it.

        const listText = activePlayers.map(p => `<:dot:1502761998599979130> **${p.name}** - *${p.date}*`).join('\n');
        const mainEmbed = new EmbedBuilder()
            .setTitle('## Recent Lsrcr tagged Members')
            .setDescription(listText || '*No recent members found.*')
            .setColor('#2B2D31')
            .setFooter({ text: 'Nexus', iconURL: client.user.displayAvatarURL() })
            .setTimestamp();

        if (sys.messageId) {
            const msg = await channel.messages.fetch(sys.messageId).catch(() => null);
            if (msg) {
                await msg.edit({ embeds: [mainEmbed] });
            } else {
                const newMsg = await channel.send({ embeds: [mainEmbed] });
                sys.messageId = newMsg.id;
                fs.writeFileSync('./bot_data.json', JSON.stringify(data, null, 2));
            }
        } else {
            const newMsg = await channel.send({ embeds: [mainEmbed] });
            sys.messageId = newMsg.id;
            fs.writeFileSync('./bot_data.json', JSON.stringify(data, null, 2));
        }

    } catch (e) {
        console.error('Error fetching recently accepted:', e.message);
    }
};

const updateSAMPStatus = async (client) => {
    const { host, port, channelId, messageId } = botData.sampMonitor;
    if (!channelId) return;

    try {
        const axios = require('axios');
        const dns = require('dns').promises;

        // Resolve host to IP if it's a domain
        let targetIp = host;
        if (!/^(?:\d{1,3}\.){3}\d{1,3}$/.test(host)) {
            try {
                const result = await dns.resolve4(host);
                targetIp = result[0];
            } catch (dnsErr) {
                console.error('DNS Resolution failed for SAMP host:', host);
            }
        }

        const API_URL = `http://sam.markski.ar/api/GetServerByIP?ip_addr=${targetIp}:${port}`;
        const res = await axios.get(API_URL);
        const data = res.data;

        const channel = await client.channels.fetch(channelId);
        if (!channel) return;

        const embed = new EmbedBuilder()
            .setTimestamp()
            .setFooter({ text: 'Nexus | Server & Players Monitoring', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

        if (data && data.success) {
            let displayPlayers = data.playersOnline;
            let playersText = '';
            let playerFields = [];

            try {
                // Use the verified SAMonitor IP for player data
                const playersRes = await axios.get(`http://sam.markski.ar/api/GetServerPlayers?ip_addr=37.187.77.206:7777`, { timeout: 8000 });
                if (playersRes.data && Array.isArray(playersRes.data)) {
                    displayPlayers = playersRes.data.length;
                    const sortedPlayers = playersRes.data.sort((a, b) => b.score - a.score);

                    const totalPlayers = sortedPlayers.length;
                    const maxColumns = 2; // Switched to 2 columns to prevent text wrapping/scuffed look
                    const playersPerColumn = Math.ceil(totalPlayers / maxColumns);

                    for (let i = 0; i < maxColumns; i++) {
                        const start = i * playersPerColumn;
                        const chunk = sortedPlayers.slice(start, start + playersPerColumn);

                        if (chunk.length > 0) {
                            const columnContent = chunk.map((p) => {
                                return `<:dot:1502761998599979130> *${p.name} | ${p.score}*`;
                            }).join('\n');

                            playerFields.push({
                                name: i === 0 ? '<:fcommunity:1502770043354742835> *Players*' : '\u200B',
                                value: columnContent.length > 1024 ? columnContent.substring(0, 1021) + '...' : columnContent,
                                inline: true
                            });
                        }
                    }
                } else {
                    playersText = '*No players online.*';
                }
            } catch (pErr) {
                console.error('Failed to fetch players for embed:', pErr.message);
                playersText = '*Error loading player list.*';
            }

            embed.setColor('#5865f2')
                .setTitle(data.name)
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription([
                    `<:finfo:1502759510106968085> *Server Ip: ${host}:${port}*`,
                    `<a:serverstatus:1502760893061267597> *Status: Online*`,
                    `<:fcommunity:1502770043354742835> *Players Online: ${displayPlayers}/${data.maxPlayers}*`,
                    playersText ? `\n${playersText}` : '',
                    `\u200B`,
                ].filter(Boolean).join('\n'));

            if (playerFields.length > 0) {
                embed.addFields(playerFields);
            }

            // Developer Credit at the absolute bottom
            embed.addFields({ name: '\u200B', value: `<:fdeveloper:1502757380486598779>  *Developed by: 5hadowblade*`, inline: false });

        } else {
            embed.setColor('#ff4444')
                .setTitle('🎮 SA-MP Server Status')
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription([
                    `<:finfo:1502759510106968085> *Server Ip: ${host}:${port}*`,
                    `<a:serverstatus:1502760893061267597> *Status: Offline*`,
                    `\u200B`,
                    `❌ **Server Offline or Unreachable**`,
                    `\u200B`,
                ].join('\n'))
                .addFields({ name: '\u200B', value: `<:fdeveloper:1502757380486598779> *developed by: 5hadowblade*`, inline: false });
        }
        // Action Row with Buttons
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('LS-RCR Forums')
                    .setURL('https://ls-rcr.com/forum')
                    .setStyle(ButtonStyle.Link)
                    .setEmoji('🌐'),
                new ButtonBuilder()
                    .setCustomId('open_stats_modal')
                    .setLabel('Player Stats')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('1502759510106968085'),
                new ButtonBuilder()
                    .setCustomId('army_members_online')
                    .setLabel('Army Members')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('1507361339109281883'),
                new ButtonBuilder()
                    .setCustomId('swat_members_online')
                    .setLabel('SWAT Members')
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('980178869925580832')
            );

        const lastMessage = await channel.messages.fetch(botData.sampMonitor.messageId).catch(() => null);
        if (lastMessage) {
            await lastMessage.edit({ embeds: [embed], components: [row] });
        } else {
            const sentMessage = await channel.send({ embeds: [embed], components: [row] });
            botData.sampMonitor.messageId = sentMessage.id;
            saveData();
        }
    } catch (error) {
        console.error('Error in SAMP monitor API:', error.message);
        // Fallback for network error
        try {
            const channel = await client.channels.fetch(channelId);
            if (channel && messageId) {
                const embed = new EmbedBuilder()
                    .setColor('#faa61a')
                    .setTitle('🎮 SA-MP Server Status')
                    .setDescription(`⚠️ **Status Unknown**\n\`${host}:${port}\``)
                    .addFields({ name: 'Notice', value: 'Unable to reach status API. Server might be under protection.' });

                const msg = await channel.messages.fetch(messageId);
                await msg.edit({ embeds: [embed] });
            }
        } catch (innerErr) { }
    }
};

const createClient = (token) => {
    return new Promise((resolve, reject) => {
        const client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessageReactions
            ],
            partials: [Partials.Message, Partials.Channel, Partials.Reaction],
        });

        client.once('ready', async () => {
            console.log(`Logged in as ${client.user.tag}`);

            // Apply stored presence
            if (botData.presence) {
                const activity = {
                    name: botData.presence.activityName,
                    type: parseInt(botData.presence.activityType) || 0
                };
                if (activity.type === 1) {
                    activity.url = 'https://www.twitch.tv/discord';
                }
                client.user.setPresence({
                    status: botData.presence.status,
                    activities: [activity]
                });
            }

            // Always register commands to sync built-ins and clear duplicates
            registerCommands(token, client.user.id, slashCommandsStore, client).catch(console.error);

            // Start SAMP Status Monitor
            updateSAMPStatus(client);
            setInterval(() => updateSAMPStatus(client), 30000);

            // Start Turf Stats Monitor
            updateTurfStats(client);
            setInterval(() => updateTurfStats(client), 60000);

            // Start Recently Accepted Monitor
            updateRecentlyAccepted(client);
            setInterval(() => updateRecentlyAccepted(client), 3600000);

            // Automatic Update Announcement
            if (botData.lastAnnouncedVersion !== CURRENT_VERSION) {
                const updateChannel = await client.channels.fetch('1504995777716555797').catch(() => null);
                if (updateChannel) {
                    const updateEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Bot Updates', iconURL: 'https://cdn.discordapp.com/emojis/1507349291243536414.png' })
                        .setDescription([
                            `### v${CURRENT_VERSION} Update`,
                            '',
                            ...UPDATE_LOGS.map(log => `<:dot:1502761998599979130> *${log}*`)
                        ].join('\n'))
                        .setColor('#5865F2')
                        .setThumbnail('https://cdn.discordapp.com/emojis/1507349291243536414.png')
                        .setFooter({ text: 'The Lost Legends | Bot Updates', iconURL: client.user.displayAvatarURL() });

                    await updateChannel.send({ embeds: [updateEmbed] }).catch(console.error);
                    botData.lastAnnouncedVersion = CURRENT_VERSION;
                    saveData();
                }
            }

            // Update Suggestion prompt
            if (botData.suggestionSystem?.channelId) {
                try {
                    const sugChannel = await client.channels.fetch(botData.suggestionSystem.channelId);
                    if (sugChannel) {
                        const messages = await sugChannel.messages.fetch({ limit: 50 });
                        const promptMsg = messages.find(m => m.author.id === client.user.id && m.embeds[0] && m.embeds[0].title === '💡 Server Suggestions & Feedback');
                        if (promptMsg) {
                            const newEmbed = EmbedBuilder.from(promptMsg.embeds[0])
                                .setDescription([
                                    'We value your input! To help us maintain a high-quality environment, please follow these guidelines when submitting a suggestion:',
                                    '',
                                    '**Rules & Guidelines:**',
                                    '1. Be clear and concise with your request.',
                                    '2. Ensure your suggestion is realistic and beneficial for the community.',
                                    '3. Check if your idea has already been suggested.',
                                    '4. Avoid spamming or submitting offensive content.',
                                    '',
                                    '**How to suggest:**',
                                    'When you type in this channel, it acts like a suggestion automatically! Once submitted, it will have an Accept/Deny button for staff and voting reactions for players.',
                                    '',
                                    '*Please note that all submissions are reviewed by our staff team within 24-48 hours.*'
                                ].join('\n'));
                            await promptMsg.edit({ embeds: [newEmbed], components: [] });
                        }
                    }
                } catch (e) {
                    console.error('Failed to update suggestion prompt', e);
                }
            }

            resolve(client);
        });

        client.on('messageCreate', async (message) => {
            if (message.author.bot && message.author.id !== client.user.id) return;

            // Suggestion System interception
            if (message.channelId === botData.suggestionSystem.channelId && !message.author.bot) {
                const text = message.content;

                await message.delete().catch(() => { });

                if (text.length < 10) {
                    return message.author.send({ content: 'Your suggestion must be at least 10 characters long.' }).catch(() => { });
                }

                const embed = new EmbedBuilder()
                    .setAuthor({ name: 'New Suggestion', iconURL: message.author.displayAvatarURL() })
                    .setDescription([
                        '**User:**',
                        `<:dot:1502761998599979130> ${message.author} (${message.author.username})`,
                        '',
                        '**Suggestion:**',
                        `<:dot:1502761998599979130> ${text}`,
                        '',
                        '**Votes:**',
                        '<:dot:1502761998599979130> <:fup:1502758861751455945> **0** - -',
                        '<:dot:1502761998599979130> <:fdown:1502758895561609247> **0** - -'
                    ].join('\n'))
                    .addFields({ name: 'Status', value: '🕒 Pending' })
                    .setColor('#2B2D31')
                    .setFooter({ text: 'Nexus', iconURL: message.client.user.displayAvatarURL() })
                    .setTimestamp();

                const row = new ActionRowBuilder().addComponents(
                    new ButtonBuilder().setCustomId('accept_suggestion').setLabel('Accept').setStyle(ButtonStyle.Success).setEmoji('1503512920250650745'),
                    new ButtonBuilder().setCustomId('deny_suggestion').setLabel('Deny').setStyle(ButtonStyle.Danger).setEmoji('1507464614797901904')
                );

                const msg = await message.channel.send({ embeds: [embed], components: [row] });

                await msg.react('1502758861751455945');
                await msg.react('1502758895561609247');

                const dmEmbed = new EmbedBuilder()
                    .setAuthor({ name: 'Suggestion Submitted', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' })
                    .setDescription(`> <:dot:1502761998599979130> *Your suggestion has been submitted*\n<:dot:1502761998599979130> **ID:** [${msg.id}](https://discord.com/channels/${msg.guildId}/${msg.channelId}/${msg.id})`)
                    .setColor('#2B2D31')
                    .setFooter({ text: 'Status: Pending' })
                    .setTimestamp();
                await message.author.send({ embeds: [dmEmbed] }).catch(() => { });
                return;
            }

            // Prefix Commands
            const prefix = '?';
            if (message.content.toLowerCase() === `${prefix}ip`) {
                const embed = new EmbedBuilder()
                    .setColor('#5865F2')
                    .setDescription(`<:finfo:1502759510106968085> *Server IP: play.ls-rcr.com:7777*`)
                    .setFooter({ text: 'The Lost Legends | Official Server', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                message.reply({ embeds: [embed] });
                return;
            }

            io.emit('new_message', {
                id: message.id,
                content: message.content,
                author: {
                    id: message.author.id,
                    username: message.author.username,
                    avatar: message.author.displayAvatarURL(),
                    bot: message.author.bot
                },
                channelId: message.channelId,
                guildId: message.guildId,
                timestamp: message.createdAt,
                referencedMessage: message.referencedMessage ? {
                    id: message.referencedMessage.id,
                    content: message.referencedMessage.content,
                    author: {
                        username: message.referencedMessage.author.username
                    }
                } : null
            });
        });

        client.on('interactionCreate', async (interaction) => {
            const interactionId = interaction.customId || (interaction.isChatInputCommand() ? interaction.commandName : (interaction.isUserContextMenuCommand() ? interaction.commandName : 'N/A'));
            console.log(`> Interaction Received: ${interaction.type} | ID: ${interactionId} | User: ${interaction.user.tag}`);

            const sendBalanceDM = async (targetUserId, staffUser, itemStr, oldBal, newBal, itemEmoji) => {
                try {
                    const diff = newBal - oldBal;
                    if (diff === 0) return;
                    const diffAbs = Math.abs(diff);
                    const actionEmoji = diff > 0 ? '<:fplus:1525905315676160180>' : '<:fminus:1525987679924388001>';
                    const user = await interaction.client.users.fetch(targetUserId);
                    if (!user) return;
                    const embed = new EmbedBuilder()
                        .setDescription([
                            `> **Information**`,
                            `> 🔨 | Staff: ${staffUser} (${staffUser.username})`,
                            `> 🎯 | Target: ${user} (${user.username})`,
                            `> 🔹 | Item: ${itemStr}`,
                            `> 🔍 | Amount: ${actionEmoji} ${diffAbs}`,
                            `> `,
                            `> **Updated Balance**`,
                            `> ${itemEmoji} | ${itemStr} - ${oldBal} ➔ ${newBal}`
                        ].join('\n'))
                        .setColor('#2B2D31');
                    await user.send({ embeds: [embed] }).catch(() => { });
                } catch (err) {
                    console.error('Failed to send balance DM:', err);
                }
            };

            if (interaction.isUserContextMenuCommand()) {
                if (interaction.user.id !== '518679063062118402' && !interaction.member.roles.cache.has(botData.caseSystem.staffRoleId)) {
                    return interaction.reply({ content: '❌ You do not have permission to use this command.', ephemeral: true });
                }

                if (interaction.commandName === 'Inventory Manager') {
                    const targetUser = interaction.targetUser;
                    const inv = getInventory(targetUser.id);

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${targetUser.username}'s Inventory`, iconURL: targetUser.displayAvatarURL() })
                        .setDescription([
                            '**Main:**',
                            '',
                            `<:spdollar:1506171626591490048> \u200B | \u200B Cash: **${inv.cash.toLocaleString()}**`,
                            `<:points:1506171332532895915> \u200B | \u200B G-Points: **0**`,
                            `<:fjcard:1504987238088573000> \u200B | \u200B Jailcards: **${inv.jcs}**`,
                            `<:flegendary:1505776122779009205> \u200B | \u200B Donation Points: **${inv.dps}**`,
                            '',
                            '━━━━━━━━━━━━━━━━━━━━━━━━━━',
                            '',
                            '**Cases:**',
                            '',
                            `<:classicase:1505769014813786234> \u200B | \u200B Classic: **${inv.cases.classic}**`,
                            `<:diamondcase:1505769092072734830> \u200B | \u200B Diamond: **${inv.cases.golden}**`,
                            `<:femeraldcase:1525845628586954793> \u200B | \u200B Emerald: **${(inv.cases.emerald || 0)}**`
                        ].join('\n'))
                        .setColor('#1a1a1a')
                        .setThumbnail(targetUser.displayAvatarURL())
                        .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    return interaction.reply({ embeds: [embed], ephemeral: true });
                }

                if (interaction.commandName === 'Clear Inventory') {
                    const targetUser = interaction.targetUser;
                    botData.caseSystem.inventories[targetUser.id] = {
                        cash: 0,
                        jcs: 0,
                        dps: 0,
                        cases: { classic: 0, golden: 0, emerald: 0 }
                    };
                    saveData();

                    const embed = new EmbedBuilder()
                        .setDescription(`✅ **Successfully cleared ${targetUser}'s inventory.**`)
                        .setColor('#43B581');

                    const logEmbed = new EmbedBuilder()
                        .setTitle('Casino Manager Action')
                        .setDescription([
                            `<:dot:1502761998599979130> **Staff:** ${interaction.user}`,
                            `<:dot:1502761998599979130> **Action:** Cleared Inventory`,
                            `<:dot:1502761998599979130> **Target:** ${targetUser}`,
                            `<:dot:1502761998599979130> **Balance:** All 0`
                        ].join('\n'))
                        .setColor('#F04747')
                        .setTimestamp();
                    logAction(interaction.client, '1505755536874803260', logEmbed);

                    return interaction.reply({ embeds: [embed], ephemeral: true });
                }

                if (interaction.commandName === 'Give/Take Cases') {
                    const targetUser = interaction.targetUser;

                    const modal = new ModalBuilder()
                        .setCustomId(`givetake_cases_${targetUser.id}`)
                        .setTitle(`Manage Cases: ${targetUser.username}`);

                    const actionInput = new TextInputBuilder()
                        .setCustomId('action_type')
                        .setLabel('Action (give or take)')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('give')
                        .setRequired(true);

                    const caseInput = new TextInputBuilder()
                        .setCustomId('case_type')
                        .setLabel('Case Type (classic/diamond/emerald)')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('diamond')
                        .setRequired(true);

                    const amountInput = new TextInputBuilder()
                        .setCustomId('amount')
                        .setLabel('Amount')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('1')
                        .setRequired(true);

                    modal.addComponents(
                        new ActionRowBuilder().addComponents(actionInput),
                        new ActionRowBuilder().addComponents(caseInput),
                        new ActionRowBuilder().addComponents(amountInput)
                    );

                    return interaction.showModal(modal);
                }
            }

            if (interaction.isChatInputCommand()) {
                if (interaction.commandName === 'avatar') {
                    const user = interaction.options.getUser('user') || interaction.user;
                    const embed = new EmbedBuilder()
                        .setTitle(`${user.username}'s Avatar`)
                        .setImage(user.displayAvatarURL({ size: 1024 }))
                        .setColor('#5865F2');

                    await interaction.reply({ embeds: [embed] });
                    return;
                }

                if (interaction.commandName === 'stats') {
                    await interaction.deferReply();
                    const usernameInput = interaction.options.getString('username');

                    try {
                        const url = `https://ls-rcr.com/user/${encodeURIComponent(usernameInput)}`;
                        const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 });
                        const $ = cheerio.load(data);

                        const titleText = $('title').text();
                        if (titleText.includes('Login') || titleText.includes('404') || !$('td:contains("Score")').length) {
                            return interaction.editReply(`Player **${usernameInput}** not found or profile is private.`);
                        }

                        const realUsername = $('h2').first().text().trim() || usernameInput;
                        const stats = await getStatsFromPage($, realUsername, url);
                        const embed = createStatsEmbed(realUsername, stats, url, interaction.client);

                        const row = new ActionRowBuilder()
                            .addComponents(
                                new ButtonBuilder()
                                    .setLabel(`${realUsername}'s UCP`)
                                    .setURL(url)
                                    .setStyle(ButtonStyle.Link)
                            );

                        await interaction.editReply({ embeds: [embed], components: [row] });
                    } catch (err) {
                        console.error('Stats fetch error:', err);
                        await interaction.editReply('Failed to fetch player stats. The website might be down or the username is invalid.');
                    }
                    return;
                }

                if (interaction.commandName === 'uptime') {
                    const uptime = interaction.client.uptime;
                    const seconds = Math.floor((uptime / 1000) % 60);
                    const minutes = Math.floor((uptime / (1000 * 60)) % 60);
                    const hours = Math.floor((uptime / (1000 * 60 * 60)) % 24);
                    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));

                    const uptimeString = `${days} *Days*, ${hours} *Hours*, ${minutes} *Minutes*, ${seconds} *Seconds*`;

                    const embed = new EmbedBuilder()
                        .setColor('#5865F2')
                        .setDescription(`<:dot:1502761998599979130> **Bot Uptime: -** ${uptimeString}`);

                    await interaction.reply({ embeds: [embed] });
                    return;
                }

                if (interaction.commandName === 'blackjack') {
                    if (interaction.channelId !== '1525836717876187197') {
                        return interaction.reply({ content: 'You can only play blackjack in <#1525836717876187197>!', ephemeral: true });
                    }

                    if (activeBlackjackGames.has(interaction.user.id)) {
                        return interaction.reply({ content: 'You already have an active Blackjack game! Please finish it by clicking Hit or Stand on your previous message.', ephemeral: true });
                    }

                    const bet = interaction.options.getInteger('bet');

                    if (bet < 10000) {
                        return interaction.reply({ content: 'The minimum bet is **$10,000**.', ephemeral: true });
                    }

                    const inv = getInventory(interaction.user.id);

                    if (inv.cash < bet) {
                        const errEmbed = new EmbedBuilder()
                            .setDescription(`> <:fclose:1503526660014604370> *You don't have enough cash to play Blackjack. You only have **$${inv.cash.toLocaleString()}***\n*Please contact staff to top up your balance.*`)
                            .setColor('#F04747');
                        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                    }

                    // Deduct bet
                    inv.cash -= bet;
                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    inv.stats.blackjack.gambled += bet;
                    inv.stats.blackjack.played += 1;
                    saveData();

                    let deck = createDeck();
                    let playerHand = [deck.pop(), deck.pop()];
                    let dealerHand = [deck.pop(), deck.pop()];

                    let playerVal = calculateHand(playerHand);

                    // Check for immediate player blackjack
                    if (playerVal === 21) {
                        const winAmount = Math.floor(bet * 2.5);
                        inv.cash += winAmount;
                        if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                        inv.stats.blackjack.won += winAmount;
                        saveData();

                        const embed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Blackjack Game`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `**Dealer's Hand:**`,
                                `> ${formatHand(dealerHand, false)} (Value: ${calculateHand(dealerHand)})`,
                                ``,
                                `**Your Hand:**`,
                                `> ${formatHand(playerHand, false)} (Value: ${playerVal})`,
                                ``,
                                `> <a:Fgiveaway:1503549273349034065> | You won the blackjack game`,
                                `> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`
                            ].join('\n'))
                            .setColor('#43B581');
                        await interaction.reply({ embeds: [embed] });
                        const replyMsg = await interaction.fetchReply();
                        await replyMsg.react('1517510428022935764');
                        await replyMsg.react('1503549273349034065');
                        return;
                    }

                    // Store game state
                    activeBlackjackGames.set(interaction.user.id, {
                        bet: bet,
                        playerHand: playerHand,
                        dealerHand: dealerHand,
                        deck: deck
                    });

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Blackjack Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `**Dealer's Hand:**`,
                            `> ${formatHand(dealerHand, true)}`,
                            ``,
                            `**Your Hand:**`,
                            `> ${formatHand(playerHand, false)} (Value: ${playerVal})`,
                            ``,
                            `> <:fmoney:1525896126849482752> | *Bet:* **$${bet.toLocaleString()}**`
                        ].join('\n'))
                        .setColor('#2B2D31');

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('bj_hit').setLabel('Hit').setStyle(ButtonStyle.Success),
                        new ButtonBuilder().setCustomId('bj_stand').setLabel('Stand').setStyle(ButtonStyle.Danger),
                        new ButtonBuilder().setCustomId('bj_double').setLabel('Double Down').setStyle(ButtonStyle.Primary)
                    );

                    await interaction.reply({ embeds: [embed], components: [row] });
                    return;
                }

                if (interaction.commandName === 'crash') {
                    if (interaction.channelId !== '1525836717876187197') {
                        return interaction.reply({ content: 'You can only play crash in <#1525836717876187197>!', ephemeral: true });
                    }

                    if (activeCrashGames.has(interaction.user.id)) {
                        return interaction.reply({ content: 'You already have an active Crash game!', ephemeral: true });
                    }

                    const bet = interaction.options.getInteger('bet');

                    if (bet < 10000) {
                        return interaction.reply({ content: 'The minimum bet is **$10,000**.', ephemeral: true });
                    }

                    const inv = getInventory(interaction.user.id);

                    if (inv.cash < bet) {
                        const errEmbed = new EmbedBuilder()
                            .setDescription(`> <:fclose:1503526660014604370> *You don't have enough cash to play Crash. You only have **$${inv.cash.toLocaleString()}***\n*Please contact staff to top up your balance.*`)
                            .setColor('#F04747');
                        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                    }

                    // Deduct bet
                    inv.cash -= bet;
                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    inv.stats.crash.gambled += bet;
                    inv.stats.crash.played += 1;
                    saveData();

                    // Generate crash point (1% house edge roughly, 5% instant crash at 1.0x)
                    const e = 100;
                    const h = Math.random() * 100;
                    let crashPoint = 1.00;
                    if (h >= 5) {
                        crashPoint = Math.floor((100 / (100 - h)) * 95) / 100;
                    }
                    if (crashPoint < 1.0) crashPoint = 1.0;

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Crash Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <:dot:1502761998599979130> | **Multiplier:** 1.00x`,
                            `> <:fmoney:1525896126849482752> | *Bet:* **$${bet.toLocaleString()}**`
                        ].join('\n'))
                        .setColor('#FAA61A');

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('crash_cashout').setLabel('Cash Out').setStyle(ButtonStyle.Success)
                    );

                    await interaction.reply({ embeds: [embed], components: [row] });
                    const replyMsg = await interaction.fetchReply();

                    const game = {
                        bet: bet,
                        crashPoint: crashPoint,
                        multiplier: 1.0,
                        cashedOut: false,
                        message: replyMsg,
                        startTime: Date.now()
                    };

                    const interval = setInterval(async () => {
                        const currentGame = activeCrashGames.get(interaction.user.id);
                        if (!currentGame || currentGame.cashedOut) {
                            clearInterval(interval);
                            return;
                        }

                        // Calculate current multiplier based on time elapsed
                        const elapsed = Date.now() - currentGame.startTime;
                        // Multiplier grows exponentially over time
                        currentGame.multiplier = Math.pow(Math.E, 0.00018 * elapsed);

                        if (currentGame.multiplier >= currentGame.crashPoint) {
                            currentGame.multiplier = currentGame.crashPoint;
                            clearInterval(interval);
                            activeCrashGames.delete(interaction.user.id);

                            const loseEmbed = new EmbedBuilder()
                                .setAuthor({ name: `${interaction.user.username}'s Crash Game`, iconURL: interaction.user.displayAvatarURL() })
                                .setDescription([
                                    `> <:fclose:1503526660014604370> | **CRASHED!**`,
                                    `> <:dot:1502761998599979130> | **Multiplier:** ${currentGame.multiplier.toFixed(2)}x`,
                                    `> <:fmoney:1525896126849482752> | You lost **$${currentGame.bet.toLocaleString()}**.`
                                ].join('\n'))
                                .setColor('#F04747');

                            try {
                                await interaction.editReply({ embeds: [loseEmbed], components: [] });
                            } catch (e) { console.error('Crash edit error:', e); }
                        } else {
                            const updateEmbed = new EmbedBuilder()
                                .setAuthor({ name: `${interaction.user.username}'s Crash Game`, iconURL: interaction.user.displayAvatarURL() })
                                .setDescription([
                                    `> <:dot:1502761998599979130> | **Multiplier:** ${currentGame.multiplier.toFixed(2)}x`,
                                    `> <:fmoney:1525896126849482752> | *Bet:* **$${currentGame.bet.toLocaleString()}**`
                                ].join('\n'))
                                .setColor('#FAA61A');

                            try {
                                await interaction.editReply({ embeds: [updateEmbed] });
                            } catch (e) { console.error('Crash update error:', e); }
                        }
                    }, 1500);

                    game.interval = interval;
                    activeCrashGames.set(interaction.user.id, game);
                    return;
                }

                if (interaction.commandName === 'mines') {
                    if (interaction.channelId !== '1525836717876187197') {
                        return interaction.reply({ content: 'You can only play mines in <#1525836717876187197>!', ephemeral: true });
                    }

                    if (activeMinesGames.has(interaction.user.id)) {
                        return interaction.reply({ content: 'You already have an active Mines game! Please finish it.', ephemeral: true });
                    }

                    const bet = interaction.options.getInteger('bet');
                    const bombs = interaction.options.getInteger('bombs') || 3;

                    if (bet < 10000) {
                        return interaction.reply({ content: 'The minimum bet is **$10,000**.', ephemeral: true });
                    }

                    const inv = getInventory(interaction.user.id);
                    if (inv.cash < bet) {
                        const errEmbed = new EmbedBuilder()
                            .setDescription(`> <:fclose:1503526660014604370> *You don't have enough cash to play Mines. You only have **$${inv.cash.toLocaleString()}***\n*Please contact staff to top up your balance.*`)
                            .setColor('#F04747');
                        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                    }

                    // Deduct bet and track stats
                    inv.cash -= bet;
                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, mines: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    if (!inv.stats.mines) inv.stats.mines = { gambled: 0, won: 0, played: 0 };
                    inv.stats.mines.gambled += bet;
                    inv.stats.mines.played += 1;
                    saveData();

                    // Generate grid
                    const grid = Array(20).fill(false);
                    let placed = 0;
                    while (placed < bombs) {
                        const idx = Math.floor(Math.random() * 20);
                        if (!grid[idx]) {
                            grid[idx] = true;
                            placed++;
                        }
                    }

                    const game = {
                        bet,
                        bombs,
                        grid,
                        revealed: Array(20).fill(false),
                        picks: 0,
                        multiplier: 1.0,
                        cashedOut: false
                    };

                    activeMinesGames.set(interaction.user.id, game);

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Mines Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <:dot:1502761998599979130> | **Mines:** ${bombs}`,
                            `> <:dot:1502761998599979130> | **Multiplier:** 1.00x  (Next: ${getMinesMultiplier(bombs, 1).toFixed(2)}x)`,
                            `> <:fmoney:1525896126849482752> | **Bet:** $${bet.toLocaleString()}`
                        ].join('\n'))
                        .setColor('#FAA61A');

                    const rows = generateMinesGrid(game);
                    return interaction.reply({ embeds: [embed], components: rows });
                }

                if (interaction.commandName === 'setup-update') {
                    if (!interaction.member.permissions.has('Administrator')) {
                        return interaction.reply({ content: 'You need Administrator permissions to use this.', ephemeral: true });
                    }

                    const updateEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Bot Updates - Overhaul V2 [Beta-Release]', iconURL: interaction.client.user.displayAvatarURL() })
                        .setDescription([
                            `We have just deployed a massive update to the bot's gambling system! You can now risk your hard-earned cash in three brand-new, high-stakes games. All games require a minimum bet of **$10,000**. Do you have what it takes to break the bank?`,
                            ``,
                            ``,
                            `<:fplus:1525905315676160180> **Game #1: Mines** (\`/mines [bet] [bombs]\`)`,
                            `> <:dot:1502761998599979130> Navigate a 5x5 minefield to multiply your cash!`,
                            `> <:dot:1502761998599979130> Pick anywhere between 1 to 19 bombs. The more bombs you add, the faster your multiplier skyrockets.`,
                            `> <:dot:1502761998599979130> Cash out at any time... but hit a bomb, and you lose it all!`,
                            ``,
                            ``,
                            `<:fplus:1525905315676160180> **Game #2: Crash** (\`/crash [bet]\`)`,
                            `> <:dot:1502761998599979130> Watch the multiplier rapidly climb in real-time.`,
                            `> <:dot:1502761998599979130> The longer you wait, the more you win... but the chart can CRASH at any second!`,
                            `> <:dot:1502761998599979130> Can you cash out before it crashes?`,
                            ``,
                            ``,
                            `<:fplus:1525905315676160180> **Game #3: HiLo** (\`/hilo [bet]\`)`,
                            `> <:dot:1502761998599979130> A classic game of Higher or Lower using a standard deck of cards.`,
                            `> <:dot:1502761998599979130> We show you a card, and you guess if the next card drawn will be higher or lower.`,
                            `> <:dot:1502761998599979130> Multipliers scale dynamically based on probability!`,
                            ``,
                            ``,
                            `<:fplus:1525905315676160180> **Casino UI Overhaul & Stats Tracker**`,
                            `> <:dot:1502761998599979130> We added \`/cstats\` to track your total gambled amount, winnings, and times played across all games.`,
                            `> <:dot:1502761998599979130> Every casino embed has been completely redesigned with perfectly aligned custom emojis and high-quality thumbnails for a premium betting experience!`
                        ].join('\n'))
                        .setColor('#FAA61A');

                    await interaction.channel.send({ embeds: [updateEmbed] });
                    return interaction.reply({ content: 'Update log sent!', ephemeral: true });
                }

                if (interaction.commandName === 'hilo') {
                    if (activeHiloGames.has(interaction.user.id)) {
                        return interaction.reply({ content: 'You already have an active HiLo game!', ephemeral: true });
                    }

                    const bet = interaction.options.getInteger('bet');
                    const inv = getInventory(interaction.user.id);

                    if (inv.cash < bet) {
                        const errEmbed = new EmbedBuilder()
                            .setDescription(`> <:fclose:1503526660014604370> *You don't have enough cash to play HiLo. You only have **$${inv.cash.toLocaleString()}***\n*Please contact staff to top up your balance.*`)
                            .setColor('#F04747');
                        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                    }

                    inv.cash -= bet;
                    if (!inv.stats.hilo) inv.stats.hilo = { gambled: 0, won: 0, played: 0 };
                    inv.stats.hilo.gambled += bet;
                    inv.stats.hilo.played += 1;
                    saveData();

                    const deck = createDeck();
                    const startingCard = deck.pop();

                    const game = {
                        bet,
                        deck,
                        currentCard: startingCard,
                        multiplier: 1.0,
                        cashedOut: false
                    };

                    activeHiloGames.set(interaction.user.id, game);

                    const cardValue = getCardValue(startingCard);
                    const higherMult = getHiloMultiplier(cardValue, 'higher');
                    const lowerMult = getHiloMultiplier(cardValue, 'lower');

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Higher or Lower`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <:dot:1502761998599979130> | **Card Drawn:** ${startingCard.rank}${startingCard.suit}`,
                            `> <:dot:1502761998599979130> | **Current Multiplier:** ${game.multiplier.toFixed(2)}x`,
                            `> <:fmoney:1525896126849482752> | **Bet:** $${bet.toLocaleString()}`
                        ].join('\n'))
                        .setThumbnail(getCardImageUrl(startingCard))
                        .setColor('#FAA61A');

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('hilo_higher').setLabel(`Higher (${higherMult.toFixed(2)}x)`).setStyle(ButtonStyle.Primary).setDisabled(higherMult === 0),
                        new ButtonBuilder().setCustomId('hilo_lower').setLabel(`Lower (${lowerMult.toFixed(2)}x)`).setStyle(ButtonStyle.Primary).setDisabled(lowerMult === 0),
                        new ButtonBuilder().setCustomId('hilo_cashout').setLabel('Cash Out').setStyle(ButtonStyle.Success).setDisabled(true) // Disabled on first draw
                    );

                    return interaction.reply({ embeds: [embed], components: [row] });
                }

                if (interaction.commandName === 'cstats') {
                    const inv = getInventory(interaction.user.id);
                    const stats = inv.stats || { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Casino Stats`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            '## BlackJack Stats:',
                            `> <:fmoney:1525896126849482752> | Gambled Amount: **$${stats.blackjack.gambled.toLocaleString()}**`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${stats.blackjack.won.toLocaleString()}**`,
                            `> <:dot:1502761998599979130> | Times played: **${stats.blackjack.played}**\n`,
                            '## Crash Stats:',
                            `> <:fmoney:1525896126849482752> | Gambled Amount: **$${stats.crash.gambled.toLocaleString()}**`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${stats.crash.won.toLocaleString()}**`,
                            `> <:dot:1502761998599979130> | Times Played: **${stats.crash.played}**\n`,
                            '## Mines Stats:',
                            `> <:fmoney:1525896126849482752> | Gambled Amount: **$${(stats.mines?.gambled || 0).toLocaleString()}**`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${(stats.mines?.won || 0).toLocaleString()}**`,
                            `> <:dot:1502761998599979130> | Times Played: **${(stats.mines?.played || 0)}**\n`,
                            '## HiLo Stats:',
                            `> <:fmoney:1525896126849482752> | Gambled Amount: **$${(stats.hilo?.gambled || 0).toLocaleString()}**`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${(stats.hilo?.won || 0).toLocaleString()}**`,
                            `> <:dot:1502761998599979130> | Times Played: **${(stats.hilo?.played || 0)}**\n`,
                            '### Case Stats:',
                            `> <:dot:1502761998599979130> | Total Cases Opened: **${stats.casesOpened.total}**`,
                            `> <:diamondcase:1505769092072734830> | Diamond: **${stats.casesOpened.golden}**`,
                            `> <:femeraldcase:1525845628586954793> | Emerald: **${stats.casesOpened.emerald}**`,
                            `> <:classicase:1505769014813786234> | Classic: **${stats.casesOpened.classic}**`
                        ].join('\n'))
                        .setColor('#1a1a1a')
                        .setThumbnail(interaction.user.displayAvatarURL());

                    return interaction.reply({ embeds: [embed] });
                }

                if (interaction.commandName === 'cmds') {
                    const embed = new EmbedBuilder()
                        .setTitle('<:fsupport:1503526408079802488> Bot Command List')
                        .setDescription('*Explore all available commands for The Lost Legends bot.*')
                        .addFields(
                            {
                                name: '<:finfo:1502759510106968085> General Commands',
                                value: [
                                    '`/avatar` - View any user\'s avatar',
                                    '`/stats` - Look up SA-MP player statistics',
                                    '`/uptime` - See how long the bot has been online',
                                    '`/cmds` - Show this list',
                                    '`/inventory` - View your case inventory',
                                    '`?ip` - Show the server IP address'
                                ].join('\n'),
                                inline: false
                            },
                            {
                                name: '<:fdeveloper:1502757380486598779> Management Commands',
                                value: [
                                    '`/setup-suggestions` - Initialize the suggestion system',
                                    '`/setup-complaints` - Initialize the complaint system',
                                    '`/setup-rules` - Send the professional rules embed',
                                    '`/setup-cases` - Send the case system prompts',
                                    '`/setup-support` - Initialize the support system',
                                    '`/clear` - Delete a specified number of messages'
                                ].join('\n'),
                                inline: false
                            }
                        )
                        .setColor('#5865F2')
                        .setThumbnail(interaction.client.user.displayAvatarURL())
                        .setTimestamp()
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await interaction.reply({ embeds: [embed] });
                    return;
                }

                if (interaction.commandName === 'setup-suggestions') {
                    const channelId = botData.suggestionSystem.channelId;
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);

                    if (!channel) return interaction.reply({ content: `Suggestion channel not found.`, ephemeral: true });

                    const embed = new EmbedBuilder()
                        .setTitle('💡 Server Suggestions & Feedback')
                        .setDescription([
                            'We value your input! To help us maintain a high-quality environment, please follow these guidelines when submitting a suggestion:',
                            '',
                            '**Rules & Guidelines:**',
                            '1. Be clear and concise with your request.',
                            '2. Ensure your suggestion is realistic and beneficial for the community.',
                            '3. Check if your idea has already been suggested.',
                            '4. Avoid spamming or submitting offensive content.',
                            '',
                            '**How to suggest:**',
                            'When you type in this channel, it acts like a suggestion automatically! Once submitted, it will have an Accept/Deny button for staff and voting reactions for players.',
                            '',
                            '*Please note that all submissions are reviewed by our staff team within 24-48 hours.*'
                        ].join('\n'))
                        .setColor('#5865F2')
                        .setThumbnail(interaction.client.user.displayAvatarURL())
                        .setFooter({ text: 'Your feedback helps us grow!', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await channel.send({ embeds: [embed] });
                    await interaction.reply({ content: `Suggestion prompt sent to <#${channelId}>!`, ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'setup-complaints') {
                    const channelId = botData.complaintSystem.channelId;
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);

                    if (!channel) return interaction.reply({ content: `Complaint channel not found.`, ephemeral: true });

                    const embed = new EmbedBuilder()
                        .setTitle('<:fsupport:1503526408079802488> Community Complaint System')
                        .setDescription([
                            '*If you have witnessed a player breaking server rules, please use this system to report it.*',
                            '',
                            '**How it works:**',
                            '1. Click the **"Submit A Complaint"** button below.',
                            '2. Fill out the form with necessary details.',
                            '3. A private ticket will be created for staff review.'
                        ].join('\n'))
                        .setColor('#5865F2')
                        .setThumbnail(interaction.client.user.displayAvatarURL())
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('open_complaint_modal').setLabel('Submit A Complaint').setStyle(ButtonStyle.Primary).setEmoji('📑')
                    );

                    const sentMessage = await channel.send({ embeds: [embed], components: [row] });
                    botData.complaintSystem.messageId = sentMessage.id;
                    saveData();

                    await interaction.reply({ content: 'Complaint prompt sent!', ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'clear') {
                    const amount = interaction.options.getInteger('amount');
                    if (amount < 1 || amount > 100) return interaction.reply({ content: 'Please provide a number between 1 and 100.', ephemeral: true });

                    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
                        return interaction.reply({ content: 'You do not have permission to clear messages.', ephemeral: true });
                    }

                    try {
                        const deleted = await interaction.channel.bulkDelete(amount, true);
                        const embed = new EmbedBuilder()
                            .setDescription(`<:fcheck:1503512920250650745> Successfully cleared **${deleted.size}** messages.`)
                            .setColor('#43B581');

                        await interaction.reply({ embeds: [embed] });
                        setTimeout(() => interaction.deleteReply().catch(() => { }), 5000);
                    } catch (err) {
                        console.error('Clear command error:', err);
                        await interaction.reply({ content: 'Failed to delete messages. They might be older than 14 days.', ephemeral: true });
                    }
                    return;
                }

                if (interaction.commandName === 'giveaway') {
                    const prize = interaction.options.getString('prize');
                    const duration = interaction.options.getInteger('duration');
                    const winnersCount = interaction.options.getInteger('winners');
                    const channelId = botData.giveawaySystem?.channelId;
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);

                    if (!channel) return interaction.reply({ content: 'Giveaway channel not found.', ephemeral: true });

                    const endTime = Date.now() + duration * 60000;
                    const giveawayEmoji = '<a:Fgiveaway:1503549273349034065>';

                    const embed = new EmbedBuilder()
                        .setDescription([
                            `## Giveaway Started`,
                            ``,
                            `<:member:1507347275100192811> *Host:* ${interaction.user}`,
                            `<:fcommunity:1502770043354742835> *Winners:* ${winnersCount}`,
                            `<:fcheck:1503512920250650745> *Entries:* 0`,
                            `<:confetti:1507347787384361090> *Ends:* <t:${Math.floor(endTime / 1000)}:R> • <t:${Math.floor(endTime / 1000)}:f>`,
                            ``,
                            `**Prize:**`,
                            ``,
                            `💎 - *${prize}*`,
                            ``,
                            `*React with ${giveawayEmoji} below to enter! Good luck with winning!*`
                        ].join('\n'))
                        .setThumbnail('https://i.ibb.co/ZpjKk44D/image-2026-05-18-072818336.png')
                        .setColor('#2B2D31')
                        .setFooter({ text: 'The Gang Of Lsrcr Streets', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() })
                        .setTimestamp();

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('cancel_giveaway').setLabel('Cancel').setStyle(ButtonStyle.Danger).setEmoji('🗑️'),
                        new ButtonBuilder().setCustomId('view_entries').setLabel('View Entries').setStyle(ButtonStyle.Secondary).setEmoji('👥')
                    );

                    const sentMsg = await channel.send({ content: '@everyone', embeds: [embed], components: [row] });
                    await sentMsg.react('1503549273349034065'); // using ID for custom emoji react

                    botData.giveawaySystem.giveaways.push({
                        messageId: sentMsg.id, channelId: channel.id, endTime, winnersCount, prize, ended: false, hostId: interaction.user.id
                    });
                    saveData();

                    const replyEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Giveaway System', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' })
                        .setDescription(`*Giveaway started successfully in ${channel}!*`)
                        .setColor('#2B2D31');

                    await interaction.reply({ embeds: [replyEmbed], ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'setup-rules') {
                    const channelId = botData.suggestionSystem.rulesChannelId;
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);
                    if (!channel) return interaction.reply({ content: `Rules channel not found.`, ephemeral: true });

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
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await channel.send({ embeds: [embed] });
                    await interaction.reply({ content: `Rules embed sent!`, ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'inventory') {
                    const inv = getInventory(interaction.user.id);
                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Inventory`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            '**Main:**',
                            '',
                            `<:spdollar:1506171626591490048> \u200B | \u200B Cash: **${inv.cash.toLocaleString()}**`,
                            `<:points:1506171332532895915> \u200B | \u200B G-Points: **0**`,
                            `<:fjcard:1504987238088573000> \u200B | \u200B Jailcards: **${inv.jcs}**`,
                            `<:flegendary:1505776122779009205> \u200B | \u200B Donation Points: **${inv.dps}**`,
                            '',
                            '━━━━━━━━━━━━━━━━━━━━━━━━━━',
                            '',
                            '**Cases:**',
                            '',
                            `<:classicase:1505769014813786234> \u200B | \u200B Classic: **${inv.cases.classic}**`,
                            `<:diamondcase:1505769092072734830> \u200B | \u200B Diamond: **${inv.cases.golden}**`,
                            `<:femeraldcase:1525845628586954793> \u200B | \u200B Emerald: **${inv.cases.emerald || 0}**`
                        ].join('\n'))
                        .setColor('#1a1a1a')
                        .setThumbnail(interaction.user.displayAvatarURL())
                        .setFooter({ text: `Requested by ${interaction.user.username}`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('open_case_classic').setLabel('Open Classic').setStyle(ButtonStyle.Secondary).setEmoji('1505769014813786234').setDisabled(inv.cases.classic <= 0),
                        new ButtonBuilder().setCustomId('open_case_golden').setLabel('Open Diamond').setStyle(ButtonStyle.Primary).setEmoji('1505769092072734830').setDisabled(inv.cases.golden <= 0),
                        new ButtonBuilder().setCustomId('open_case_emerald').setLabel('Open Emerald').setStyle(ButtonStyle.Success).setEmoji('1525845628586954793').setDisabled((inv.cases.emerald || 0) <= 0)
                    );

                    await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'setup-cases') {
                    const channelId = botData.caseSystem.channelId;
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);

                    if (!channel) return interaction.reply({ content: `Case shop channel not found.`, ephemeral: true });

                    const infoEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Case Shop - The Lost Legends', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
                        .setDescription('*Welcome to the official Case Shop! Here you can purchase various cases using your in-game resources. Once purchased, use `/inventory` to open them.*')
                        .addFields(
                            { name: '**How it works:**', value: '• Select a case below to purchase.\n• Costs are deducted from your `/inventory` balances.\n• Check your inventory to view and open your cases.' },
                            { name: '**Available Cases:**', value: '<:classicase:1505769014813786234> **Classic** | <:diamondcase:1505769092072734830> **Diamond** | <:femeraldcase:1525845628586954793> **Emerald**' }
                        )
                        .setColor('#5865F2')
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    const classicEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Classic Case', iconURL: 'https://cdn.discordapp.com/emojis/1505769014813786234.png' })
                        .setDescription(`<:dot:1502761998599979130> *Lost Legends Cases*`)
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
                        .setDescription(`<:dot:1502761998599979130> *Lost Legends Cases*`)
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
                        .setDescription(`<:dot:1502761998599979130> *Lost Legends Cases*`)
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
                        new ButtonBuilder().setCustomId('open_case_classic').setLabel('Open Classic').setStyle(ButtonStyle.Secondary).setEmoji('1505769014813786234'),
                        new ButtonBuilder().setCustomId('open_case_golden').setLabel('Open Diamond').setStyle(ButtonStyle.Primary).setEmoji('1505769092072734830'),
                        new ButtonBuilder().setCustomId('open_case_emerald').setLabel('Open Emerald').setStyle(ButtonStyle.Success).setEmoji('1525845628586954793')
                    );

                    await channel.send({ embeds: [infoEmbed, classicEmbed, goldenEmbed, emeraldEmbed], components: [row] });
                    await interaction.reply({ content: `Shop setup complete in <#${channelId}>!`, ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'setup-support') {
                    const channelId = '1504993339055935548';
                    const channel = await interaction.client.channels.fetch(channelId).catch(() => null);
                    if (!channel) return interaction.reply({ content: `Support channel not found.`, ephemeral: true });

                    const staffRoles = botData.caseSystem.staffRoles.map(id => `<@&${id}>`).join(' ');
                    const embed = new EmbedBuilder()
                        .setAuthor({ name: 'Support System - The Lost Legends', iconURL: 'https://cdn.discordapp.com/emojis/1503526408079802488.png' })
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
                        .setThumbnail('https://cdn.discordapp.com/emojis/1503526408079802488.png') // Placeholder, user image had a reaper/skulls logo
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    const select = new StringSelectMenuBuilder()
                        .setCustomId('support_category_select')
                        .setPlaceholder('Select a support category...')
                        .addOptions([
                            { label: 'General Inquiries', description: 'Ask questions about the server or bot', value: 'support_general', emoji: '❓' },
                            { label: 'Withdrawals', description: 'Request or report issues with withdrawals', value: 'support_withdrawals', emoji: '💰' },
                            { label: 'Cases Purchases', description: 'Help with case buying or missing items', value: 'support_cases', emoji: '1505782769408807014' },
                            { label: 'Claim giveaway prize', description: 'Claim your giveaway reward here', value: 'support_giveaway', emoji: '🎉' }
                        ]);

                    await channel.send({ embeds: [embed], components: [new ActionRowBuilder().addComponents(select)] });
                    await interaction.reply({ content: `Support system initialized in <#${channelId}>!`, ephemeral: true });
                    return;
                }

                if (interaction.commandName === 'setup-groups') {
                    await interaction.deferReply({ ephemeral: true });
                    try {
                        const axios = require('axios');
                        const res = await axios.get('https://ls-rcr.com/top/?p=groups', { timeout: 8000 });
                        const match = res.data.match(/var groupstats = (\[.*?\]);/s);
                        if (!match) return interaction.editReply("Could not fetch groups from LS-RCR.");

                        const groups = JSON.parse(match[1]).map(g => g.name);
                        groups.sort((a, b) => a.localeCompare(b));

                        const row1 = new ActionRowBuilder();
                        const row2 = new ActionRowBuilder();

                        const options1 = groups.slice(0, 25).map(g => new StringSelectMenuOptionBuilder().setLabel(g).setValue(g));
                        const select1 = new StringSelectMenuBuilder()
                            .setCustomId('lsrcr_group_select_1')
                            .setPlaceholder('Select a Group (A-S)')
                            .addOptions(options1);
                        row1.addComponents(select1);

                        let components = [row1];
                        if (groups.length > 25) {
                            const options2 = groups.slice(25).map(g => new StringSelectMenuOptionBuilder().setLabel(g).setValue(g));
                            const select2 = new StringSelectMenuBuilder()
                                .setCustomId('lsrcr_group_select_2')
                                .setPlaceholder('Select a Group (T-Z)')
                                .addOptions(options2);
                            row2.addComponents(select2);
                            components.push(row2);
                        }

                        const embed = new EmbedBuilder()
                            .setAuthor({ name: 'LS-RCR Groups Database', iconURL: 'https://cdn.discordapp.com/emojis/1502770043354742835.png' })
                            .setTitle('Server Groups Directory')
                            .setDescription([
                                'Welcome to the **Official LS-RCR Groups Directory**.',
                                '',
                                '<:dot:1502761998599979130> **Live Data:** Synchronized in real-time with the main website.',
                                '<:dot:1502761998599979130> **Organized:** Alphabetically sorted for convenience.',
                                '<:dot:1502761998599979130> **Private Viewing:** Rosters are displayed ephemerally to avoid chat clutter.',
                                '',
                                '**<a:fstats:1502790793352577184> How to Use:**',
                                '*Select a group from the dropdown menus below to view its complete member list and rank structure.*'
                            ].join('\n'))
                            .setColor('#2B2D31')
                            .setThumbnail(interaction.guild?.iconURL() || interaction.client.user.displayAvatarURL())
                            .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                        await interaction.channel.send({ embeds: [embed], components });
                        return interaction.editReply("Groups viewer sent successfully.");
                    } catch (err) {
                        console.error(err);
                        return interaction.editReply("An error occurred while setting up the groups viewer.");
                    }
                }

                if (interaction.commandName === 'setup-shop') {
                    // Send the shop embed to the current channel
                    const channel = interaction.channel;

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
                        .setFooter({ text: 'Nexus', iconURL: interaction.client.user.displayAvatarURL() });

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('shop_create_order').setLabel('Create Order').setStyle(ButtonStyle.Primary).setEmoji('🛒'),
                        new ButtonBuilder().setCustomId('shop_place_bid').setLabel('Place Bid').setStyle(ButtonStyle.Secondary).setEmoji('⚖️')
                    );

                    await channel.send({ embeds: [embed], components: [row] });
                    await interaction.reply({ content: `Shop setup complete!`, ephemeral: true });
                    return;
                }

                if (['givecases', 'removecases', 'setjcs', 'setdps', 'setcash', 'givecash'].includes(interaction.commandName)) {
                    if (interaction.channelId !== '1525839512838869113') {
                        return interaction.reply({ content: 'This command can only be used in <#1525839512838869113>.', ephemeral: true });
                    }
                    const staffRoles = botData.caseSystem.staffRoles || ['1503148052209209414', '1456634173321384007'];
                    if (interaction.user.id !== '518679063062118402' && !interaction.member.roles.cache.some(r => staffRoles.includes(r.id))) {
                        return interaction.reply({ content: 'Unauthorized.', ephemeral: true });
                    }

                    const targetUser = interaction.options.getUser('user');
                    const inv = getInventory(targetUser.id);

                    const sendCasinoManagerLog = (action, amountStr, balanceStr) => {
                        const embed = new EmbedBuilder()
                            .setDescription([
                                `## **Casino Manager Action**`,
                                `> <:dot:1502761998599979130> **Staff:** ${interaction.user}`,
                                `> <:dot:1502761998599979130> **Action:** ${action}`,
                                `> <:dot:1502761998599979130> **Amount:** ${amountStr}`,
                                `> <:dot:1502761998599979130> **Target:** ${targetUser}`,
                                `> <:dot:1502761998599979130> **Balance:** ${balanceStr}`
                            ].join('\n'))
                            .setColor('#2B2D31')
                            .setTimestamp();
                        logAction(interaction.client, '1505755536874803260', embed);
                    };

                    const sendReplyEmbed = (actionText, balanceText) => {
                        const embed = new EmbedBuilder()
                            .setDescription([
                                `**Cash Transferred**`,
                                ``,
                                `> <:dot:1502761998599979130> ${actionText}`,
                                `> <:dot:1502761998599979130> Updated balance -> ${balanceText}`
                            ].join('\n'))
                            .setColor('#2B2D31');
                        return interaction.reply({ embeds: [embed], ephemeral: false });
                    };

                    if (interaction.commandName === 'givecases') {
                        const type = interaction.options.getString('type');
                        const amount = interaction.options.getInteger('amount');
                        const oldBal = inv.cases[type];
                        inv.cases[type] += amount;
                        saveData();
                        sendCasinoManagerLog('Given', `${amount} ${type} cases`, `${inv.cases[type]} ${type} cases`);
                        const caseEmoji = type === 'classic' ? '<:classicase:1505769014813786234>' : (type === 'golden' ? '<:diamondcase:1505769092072734830>' : '<:femeraldcase:1525845628586954793>');
                        sendBalanceDM(targetUser.id, interaction.user, `${type.charAt(0).toUpperCase() + type.slice(1)} Cases`, oldBal, inv.cases[type], caseEmoji);
                        return sendReplyEmbed(`Given ${amount} ${type} cases to ${targetUser}.`, `${type} cases: ${inv.cases[type]}`);
                    }
                    if (interaction.commandName === 'removecases') {
                        const type = interaction.options.getString('type');
                        const amount = interaction.options.getInteger('amount');
                        const oldBal = inv.cases[type];
                        inv.cases[type] = Math.max(0, inv.cases[type] - amount);
                        saveData();
                        sendCasinoManagerLog('Removed', `${amount} ${type} cases`, `${inv.cases[type]} ${type} cases`);
                        const caseEmoji = type === 'classic' ? '<:classicase:1505769014813786234>' : (type === 'golden' ? '<:diamondcase:1505769092072734830>' : '<:femeraldcase:1525845628586954793>');
                        sendBalanceDM(targetUser.id, interaction.user, `${type.charAt(0).toUpperCase() + type.slice(1)} Cases`, oldBal, inv.cases[type], caseEmoji);
                        return sendReplyEmbed(`Removed ${amount} ${type} cases from ${targetUser}.`, `${type} cases: ${inv.cases[type]}`);
                    }
                    if (interaction.commandName === 'setjcs') {
                        const amount = interaction.options.getInteger('amount');
                        const oldBal = inv.jcs;
                        inv.jcs = amount;
                        saveData();
                        sendCasinoManagerLog('Set', `${amount} Jailcards`, `${inv.jcs} Jailcards`);
                        sendBalanceDM(targetUser.id, interaction.user, 'Jailcards', oldBal, inv.jcs, '<:fjcard:1504987238088573000>');
                        return sendReplyEmbed(`Set ${targetUser}'s Jailcards to ${inv.jcs}.`, `Jailcards: ${inv.jcs}`);
                    }
                    if (interaction.commandName === 'setdps') {
                        const amount = interaction.options.getInteger('amount');
                        const oldBal = inv.dps;
                        inv.dps = amount;
                        saveData();
                        sendCasinoManagerLog('Set', `${amount} Donation Points`, `${inv.dps} Donation Points`);
                        sendBalanceDM(targetUser.id, interaction.user, 'Donation Points', oldBal, inv.dps, '<:flegendary:1505776122779009205>');
                        return sendReplyEmbed(`Set ${targetUser}'s Donation Points to ${inv.dps}.`, `Donation Points: ${inv.dps}`);
                    }
                    if (interaction.commandName === 'setcash') {
                        const amount = interaction.options.getInteger('amount');
                        inv.cash = amount;
                        saveData();
                        sendCasinoManagerLog('Set', `$${amount.toLocaleString()} Cash`, `$${inv.cash.toLocaleString()} Cash`);
                        return sendReplyEmbed(`Set ${targetUser}'s Cash to $${inv.cash.toLocaleString()}.`, `Cash: $${inv.cash.toLocaleString()}`);
                    }
                    if (interaction.commandName === 'givecash') {
                        const amount = interaction.options.getInteger('amount');
                        inv.cash += amount;
                        saveData();
                        sendCasinoManagerLog('Given', `$${amount.toLocaleString()} Cash`, `$${inv.cash.toLocaleString()} Cash`);
                        return sendReplyEmbed(`Given $${amount.toLocaleString()} Cash to ${targetUser}.`, `Cash: $${inv.cash.toLocaleString()}`);
                    }
                }

                // Custom slash commands from dashboard
                const cmd = slashCommandsStore.find(c => c.name === interaction.commandName);
                if (cmd && cmd.actions) {
                    let first = true;
                    for (const action of cmd.actions) {
                        const response = { content: action.content || null, ephemeral: action.ephemeral };
                        if (action.embeds?.length) {
                            response.embeds = action.embeds.map(e => new EmbedBuilder().setTitle(e.title || null).setDescription(e.description || null).setColor(e.color || '#5865F2'));
                        }
                        if (first) { await interaction.reply(response); first = false; }
                        else { await interaction.followUp(response); }
                    }
                }
                return;
            }

            // Button & Modal Handlers
            if (interaction.isMessageComponent() || interaction.isModalSubmit()) {
                if (interaction.isStringSelectMenu() && interaction.customId.startsWith('lsrcr_group_select_')) {
                    await interaction.deferReply({ ephemeral: true });
                    const selectedGroup = interaction.values[0];
                    try {
                        const axios = require('axios');
                        const res = await axios.get('https://ls-rcr.com/top/?p=groups', { timeout: 8000 });
                        const match = res.data.match(/var groupdetailsstats = (\[.*?\]);/s);
                        if (!match) return interaction.editReply("Could not fetch groups from LS-RCR.");

                        const details = JSON.parse(match[1]);
                        const members = details.filter(row => row.name === selectedGroup);

                        if (members.length === 0) {
                            return interaction.editReply(`No members found for group **${selectedGroup}**.`);
                        }

                        let lines = members.map(m => {
                            const hours = Math.floor(parseInt(m.playtime || 0) / 60);
                            return `<:dot:1502761998599979130> **${m.username}** ➔ \`${m.rank}\` *(⏱️ ${hours.toLocaleString()}h)*`;
                        });
                        let chunks = [];
                        let currentChunk = "";
                        for (const line of lines) {
                            if (currentChunk.length + line.length + 5 > 4000) {
                                chunks.push(currentChunk);
                                currentChunk = line + "\n";
                            } else {
                                currentChunk += line + "\n";
                            }
                        }
                        if (currentChunk) chunks.push(currentChunk.trim());

                        let first = true;
                        for (let i = 0; i < chunks.length; i++) {
                            const embed = new EmbedBuilder()
                                .setAuthor({ name: `${selectedGroup} - Group Roster`, iconURL: 'https://cdn.discordapp.com/emojis/1502770043354742835.png' })
                                .setTitle(i === 0 ? `<a:fstats:1502790793352577184> Total Members: ${members.length}` : `Roster Continued (Part ${i + 1})`)
                                .setDescription(chunks[i])
                                .setColor('#2B2D31')
                                .setFooter({ text: 'Lost Legends Cases | Live Data', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                            if (first) {
                                await interaction.editReply({ embeds: [embed] });
                                first = false;
                            } else {
                                await interaction.followUp({ embeds: [embed], ephemeral: true });
                            }
                        }
                    } catch (err) {
                        console.error(err);
                        return interaction.editReply("An error occurred while fetching the group details.");
                    }
                    return;
                }

                if (interaction.customId === 'army_members_online' || interaction.customId === 'swat_members_online') {
                    await interaction.deferReply({ ephemeral: true });
                    try {
                        const axios = require('axios');
                        const cheerio = require('cheerio');

                        const isArmy = interaction.customId === 'army_members_online';
                        const url = isArmy ? 'https://ls-rcr.com/army/' : 'https://ls-rcr.com/swat/';
                        const title = isArmy ? 'Army Members Online' : 'SWAT Members Online';
                        const emojiUrl = isArmy ? 'https://cdn.discordapp.com/emojis/1507361339109281883.png' : 'https://cdn.discordapp.com/emojis/980178869925580832.png';
                        const footerText = isArmy ? 'The Lost Legends | LS-RCR Army' : 'The Lost Legends | LS-RCR SWAT';
                        const embedColor = isArmy ? '#433b3b' : '#32363C';

                        // Fetch roster list
                        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 });
                        const $ = cheerio.load(res.data);

                        const membersList = [];
                        $('.card').each((i, card) => {
                            const titleEl = $(card).find('.card-title').clone();
                            titleEl.find('span').remove();
                            const rank = titleEl.text().trim();

                            $(card).find('.list-group-item').each((j, item) => {
                                const name = $(item).text().trim();
                                if (name && rank) {
                                    membersList.push({
                                        originalName: name,
                                        rank: rank,
                                        core: name.toLowerCase().replace(/\[.*?\]/g, '').replace(/^(lsrcr_|lsrcr\.)/, '')
                                    });
                                }
                            });
                        });

                        // Fetch online players
                        let players = [];
                        try {
                            const playersRes = await axios.get('http://sam.markski.ar/api/GetServerPlayers?ip_addr=37.187.77.206:7777', { timeout: 8000 });
                            players = playersRes.data || [];
                        } catch (e) {
                            console.error('Error fetching players:', e.message);
                            return interaction.editReply(`❌ *Could not fetch online players right now. Please try again later.*`);
                        }

                        const onlineMembers = [];
                        for (const p of players) {
                            if (!p || !p.name) continue;
                            const pNameLower = p.name.toLowerCase();
                            const pCore = pNameLower.replace(/\[.*?\]/g, '').replace(/^(lsrcr_|lsrcr\.)/, '');

                            const match = membersList.find(a =>
                                a.originalName.toLowerCase() === pNameLower ||
                                a.core === pCore ||
                                (a.core.length >= 3 && pNameLower.includes(a.core))
                            );

                            if (match) {
                                onlineMembers.push({ name: p.name, rank: match.rank });
                            }
                        }

                        if (onlineMembers.length === 0) {
                            return interaction.editReply(`❌ *No ${isArmy ? 'Army' : 'SWAT'} members are currently online.*`);
                        }

                        const embed = new EmbedBuilder()
                            .setAuthor({ name: title, iconURL: emojiUrl })
                            .setDescription(onlineMembers.map(m => `<:dot:1502761998599979130> **${m.name}** - *${m.rank}*`).join('\n'))
                            .setColor(embedColor)
                            .setFooter({ text: footerText, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() })
                            .setTimestamp();

                        if (isArmy) {
                            embed.setThumbnail('https://i.ibb.co/60YWbFxY/image-2026-05-22-175056696.png');
                        } else {
                            embed.setThumbnail(emojiUrl);
                        }

                        await interaction.editReply({ embeds: [embed] });
                    } catch (err) {
                        console.error(err);
                        await interaction.editReply('Error fetching members online.');
                    }
                    return;
                }

                if (interaction.customId === 'open_stats_modal') {
                    await interaction.deferReply({ ephemeral: true });
                    try {
                        const response = await axios.get('http://sam.markski.ar/api/GetServerPlayers?ip_addr=37.187.77.206:7777', { timeout: 8000 });
                        const players = (response.data || []).sort((a, b) => b.score - a.score).slice(0, 25);
                        if (players.length === 0) return interaction.editReply('No players online.');

                        const select = new StringSelectMenuBuilder().setCustomId('stats_player_select').setPlaceholder('Select a player...')
                            .addOptions(players.map(p => ({ label: p.name, description: `Score: ${p.score}`, value: p.name })));

                        await interaction.editReply({ content: 'Select a player:', components: [new ActionRowBuilder().addComponents(select)] });
                    } catch (err) { await interaction.editReply('Error fetching players.'); }
                    return;
                }

                if (interaction.customId === 'crash_cashout') {
                    const game = activeCrashGames.get(interaction.user.id);
                    if (!game) {
                        return interaction.reply({ content: 'Your crash game has already ended or you do not have one!', ephemeral: true });
                    }

                    if (game.cashedOut) {
                        return interaction.reply({ content: 'You already cashed out!', ephemeral: true });
                    }

                    game.cashedOut = true;
                    clearInterval(game.interval);
                    activeCrashGames.delete(interaction.user.id);

                    const winAmount = Math.floor(game.bet * game.multiplier);
                    const inv = getInventory(interaction.user.id);
                    inv.cash += winAmount;
                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    inv.stats.crash.won += winAmount;
                    saveData();

                    const winEmbed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Crash Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <a:Fgiveaway:1503549273349034065> | You cashed out at **${game.multiplier.toFixed(2)}x**!`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`
                        ].join('\n'))
                        .setColor('#43B581');

                    await interaction.update({ embeds: [winEmbed], components: [] });

                    try {
                        await interaction.message.react('1517510428022935764');
                        await interaction.message.react('1503549273349034065');
                    } catch (e) {
                        console.error('Error reacting to crash win:', e);
                    }
                    return;
                }

                if (interaction.customId === 'mine_cashout') {
                    const game = activeMinesGames.get(interaction.user.id);
                    if (!game || game.cashedOut) {
                        return interaction.reply({ content: 'You do not have an active Mines game!', ephemeral: true });
                    }

                    game.cashedOut = true;
                    activeMinesGames.delete(interaction.user.id);

                    const winAmount = Math.floor(game.bet * game.multiplier);
                    const inv = getInventory(interaction.user.id);
                    inv.cash += winAmount;
                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, mines: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    if (!inv.stats.mines) inv.stats.mines = { gambled: 0, won: 0, played: 0 };
                    inv.stats.mines.won += winAmount;
                    saveData();

                    const winEmbed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Mines Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <a:Fgiveaway:1503549273349034065> | You safely revealed **${game.picks}** tiles!`,
                            `> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`
                        ].join('\n'))
                        .setColor('#43B581');

                    const rows = generateMinesGrid(game, true); // disable grid
                    await interaction.update({ embeds: [winEmbed], components: rows });

                    try {
                        await interaction.message.react('1517510428022935764');
                        await interaction.message.react('1503549273349034065');
                    } catch (e) {
                        console.error('Error reacting to mines win:', e);
                    }
                    return;
                }

                if (interaction.customId.startsWith('mine_') && interaction.customId !== 'mine_cashout') {
                    const game = activeMinesGames.get(interaction.user.id);
                    if (!game || game.cashedOut) {
                        return interaction.reply({ content: 'You do not have an active Mines game!', ephemeral: true });
                    }

                    const idxStr = interaction.customId.split('_')[1];
                    const idx = parseInt(idxStr, 10);

                    if (game.revealed[idx]) {
                        return interaction.reply({ content: 'You already revealed this tile!', ephemeral: true });
                    }

                    game.revealed[idx] = true;

                    if (game.grid[idx]) {
                        // HIT A BOMB!
                        activeMinesGames.delete(interaction.user.id);

                        const loseEmbed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Mines Game`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `> <:fclose:1503526660014604370> | **BOOM! You hit a mine!**`,
                                `> <:fmoney:1525896126849482752> | You lost **$${game.bet.toLocaleString()}**.`
                            ].join('\n'))
                            .setColor('#F04747');

                        const rows = generateMinesGrid(game, true, idx);
                        await interaction.update({ embeds: [loseEmbed], components: rows });
                        return;
                    }

                    // SAFE PICK!
                    game.picks += 1;
                    game.multiplier = getMinesMultiplier(game.bombs, game.picks);

                    const updateEmbed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Mines Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <:dot:1502761998599979130> | **Mines:** ${game.bombs}`,
                            `> <:dot:1502761998599979130> | **Multiplier:** ${game.multiplier.toFixed(2)}x  (Next: ${getMinesMultiplier(game.bombs, game.picks + 1).toFixed(2)}x)`,
                            `> <:fmoney:1525896126849482752> | **Bet:** $${game.bet.toLocaleString()}`
                        ].join('\n'))
                        .setColor('#FAA61A');

                    const rows = generateMinesGrid(game);
                    await interaction.update({ embeds: [updateEmbed], components: rows });

                    // Auto cash out if they cleared all safe tiles
                    if (game.picks === (20 - game.bombs)) {
                        activeMinesGames.delete(interaction.user.id);

                        const winAmount = Math.floor(game.bet * game.multiplier);
                        const inv = getInventory(interaction.user.id);
                        inv.cash += winAmount;
                        if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, mines: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                        if (!inv.stats.mines) inv.stats.mines = { gambled: 0, won: 0, played: 0 };
                        inv.stats.mines.won += winAmount;
                        saveData();

                        const winEmbed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Mines Game`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `> <a:Fgiveaway:1503549273349034065> | You safely revealed all **${game.picks}** tiles!`,
                                `> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`
                            ].join('\n'))
                            .setColor('#43B581');

                        const rowsFinal = generateMinesGrid(game, true);
                        await interaction.editReply({ embeds: [winEmbed], components: rowsFinal });

                        try {
                            const replyMsg = await interaction.message.fetch();
                            await replyMsg.react('1517510428022935764');
                            await replyMsg.react('1503549273349034065');
                        } catch (e) {
                            console.error('Error reacting to mines win:', e);
                        }
                    }
                    return;
                }

                if (interaction.customId.startsWith('hilo_')) {
                    const game = activeHiloGames.get(interaction.user.id);
                    if (!game || game.cashedOut) {
                        return interaction.reply({ content: 'You do not have an active HiLo game!', ephemeral: true });
                    }

                    if (interaction.customId === 'hilo_cashout') {
                        game.cashedOut = true;
                        activeHiloGames.delete(interaction.user.id);

                        const winAmount = Math.floor(game.bet * game.multiplier);
                        const inv = getInventory(interaction.user.id);
                        inv.cash += winAmount;
                        if (!inv.stats.hilo) inv.stats.hilo = { gambled: 0, won: 0, played: 0 };
                        inv.stats.hilo.won += winAmount;
                        saveData();

                        const winEmbed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Higher or Lower`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `> <a:Fgiveaway:1503549273349034065> | You cashed out at **${game.multiplier.toFixed(2)}x**!`,
                                `> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`
                            ].join('\n'))
                            .setThumbnail(getCardImageUrl(game.currentCard))
                            .setColor('#43B581');

                        await interaction.update({ embeds: [winEmbed], components: [] });
                        try {
                            await interaction.message.react('1517510428022935764');
                            await interaction.message.react('1503549273349034065');
                        } catch (e) {
                            console.error('Error reacting to hilo win:', e);
                        }
                        return;
                    }

                    const guess = interaction.customId.split('_')[1]; // 'higher' or 'lower'
                    const oldCardValue = getCardValue(game.currentCard);
                    const newCard = game.deck.pop();
                    const newCardValue = getCardValue(newCard);

                    let won = false;
                    if (guess === 'higher' && newCardValue > oldCardValue) won = true;
                    if (guess === 'lower' && newCardValue < oldCardValue) won = true;

                    if (!won) {
                        activeHiloGames.delete(interaction.user.id);
                        const loseEmbed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Higher or Lower`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `> <:fclose:1503526660014604370> | **WRONG! You drew ${newCard.rank}${newCard.suit}**`,
                                `> <:fmoney:1525896126849482752> | You lost **$${game.bet.toLocaleString()}**.`
                            ].join('\n'))
                            .setThumbnail(getCardImageUrl(newCard))
                            .setColor('#F04747');

                        return interaction.update({ embeds: [loseEmbed], components: [] });
                    }

                    // They won the round
                    game.multiplier *= getHiloMultiplier(oldCardValue, guess);
                    game.currentCard = newCard;

                    const higherMult = getHiloMultiplier(newCardValue, 'higher');
                    const lowerMult = getHiloMultiplier(newCardValue, 'lower');

                    const updateEmbed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Higher or Lower`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `> <:dot:1502761998599979130> | **Card Drawn:** ${newCard.rank}${newCard.suit}`,
                            `> <:dot:1502761998599979130> | **Current Multiplier:** ${game.multiplier.toFixed(2)}x`,
                            `> <:fmoney:1525896126849482752> | **Bet:** $${game.bet.toLocaleString()}`
                        ].join('\n'))
                        .setThumbnail(getCardImageUrl(newCard))
                        .setColor('#FAA61A');

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('hilo_higher').setLabel(`Higher (${higherMult.toFixed(2)}x)`).setStyle(ButtonStyle.Primary).setDisabled(higherMult === 0),
                        new ButtonBuilder().setCustomId('hilo_lower').setLabel(`Lower (${lowerMult.toFixed(2)}x)`).setStyle(ButtonStyle.Primary).setDisabled(lowerMult === 0),
                        new ButtonBuilder().setCustomId('hilo_cashout').setLabel('Cash Out').setStyle(ButtonStyle.Success)
                    );

                    return interaction.update({ embeds: [updateEmbed], components: [row] });
                }

                if (interaction.customId.startsWith('bj_')) {
                    const game = activeBlackjackGames.get(interaction.user.id);
                    if (!game) {
                        return interaction.reply({ content: 'You do not have an active Blackjack game!', ephemeral: true });
                    }

                    const inv = getInventory(interaction.user.id);

                    if (interaction.customId === 'bj_double') {
                        if (inv.cash < game.bet) {
                            const errEmbed = new EmbedBuilder()
                                .setDescription(`> <:fclose:1503526660014604370> *You don't have enough cash to double down. You only have **$${inv.cash.toLocaleString()}***\n*Please contact staff to top up your balance.*`)
                                .setColor('#F04747');
                            return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                        }
                        inv.cash -= game.bet;
                        if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                        inv.stats.blackjack.gambled += game.bet;
                        game.bet *= 2;
                        game.playerHand.push(game.deck.pop());
                    } else if (interaction.customId === 'bj_hit') {
                        game.playerHand.push(game.deck.pop());
                    }

                    let playerVal = calculateHand(game.playerHand);

                    if (playerVal > 21) {
                        // Bust
                        activeBlackjackGames.delete(interaction.user.id);
                        saveData();
                        const embed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Blackjack Game`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `**Dealer's Hand:**`,
                                `> ${formatHand(game.dealerHand, false)} (Value: ${calculateHand(game.dealerHand)})`,
                                ``,
                                `**Your Hand:**`,
                                `> ${formatHand(game.playerHand, false)} (Value: ${playerVal})`,
                                ``,
                                `> <:fclose:1503526660014604370> | **BUST!**\n> <:fmoney:1525896126849482752> | You lost **$${game.bet.toLocaleString()}**.`
                            ].join('\n'))
                            .setColor('#F04747');
                        return interaction.update({ embeds: [embed], components: [] });
                    }

                    if (interaction.customId === 'bj_stand' || interaction.customId === 'bj_double') {
                        // Dealer's turn
                        let dealerVal = calculateHand(game.dealerHand);
                        while (dealerVal < 17) {
                            game.dealerHand.push(game.deck.pop());
                            dealerVal = calculateHand(game.dealerHand);
                        }

                        let resultText = '';
                        let color = '';

                        if (dealerVal > 21 || playerVal > dealerVal) {
                            const winAmount = game.bet * 2;
                            inv.cash += winAmount;
                            inv.stats.blackjack.won += winAmount;
                            resultText = `> <a:Fgiveaway:1503549273349034065> | You won the blackjack game\n> <:fmoney:1525896126849482752> | Winning Amount: **$${winAmount.toLocaleString()}**`;
                            color = '#43B581';
                        } else if (dealerVal === playerVal) {
                            inv.cash += game.bet;
                            inv.stats.blackjack.won += game.bet;
                            resultText = `> <:dot:1502761998599979130> | **PUSH!**\n> <:fmoney:1525896126849482752> | Your bet of **$${game.bet.toLocaleString()}** was returned.`;
                            color = '#FAA61A';
                        } else {
                            resultText = `> <:fclose:1503526660014604370> | **YOU LOSE!**\n> <:fmoney:1525896126849482752> | You lost **$${game.bet.toLocaleString()}**.`;
                            color = '#F04747';
                        }

                        activeBlackjackGames.delete(interaction.user.id);
                        saveData();
                        const embed = new EmbedBuilder()
                            .setAuthor({ name: `${interaction.user.username}'s Blackjack Game`, iconURL: interaction.user.displayAvatarURL() })
                            .setDescription([
                                `**Dealer's Hand:**`,
                                `> ${formatHand(game.dealerHand, false)} (Value: ${dealerVal})`,
                                ``,
                                `**Your Hand:**`,
                                `> ${formatHand(game.playerHand, false)} (Value: ${playerVal})`,
                                ``,
                                resultText
                            ].join('\n'))
                            .setColor(color);

                        await interaction.update({ embeds: [embed], components: [] });

                        if (dealerVal > 21 || playerVal > dealerVal) {
                            try {
                                await interaction.message.react('1517510428022935764');
                                await interaction.message.react('1503549273349034065');
                            } catch (e) {
                                console.error('Error reacting to bj win:', e);
                            }
                        }
                        return;
                    }

                    // Continue game (Hit)
                    const embed = new EmbedBuilder()
                        .setAuthor({ name: `${interaction.user.username}'s Blackjack Game`, iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            `**Dealer's Hand:**`,
                            `> ${formatHand(game.dealerHand, true)}`,
                            ``,
                            `**Your Hand:**`,
                            `> ${formatHand(game.playerHand, false)} (Value: ${playerVal})`,
                            ``,
                            `> <:fmoney:1525896126849482752> | *Bet:* **$${game.bet.toLocaleString()}**`
                        ].join('\n'))
                        .setColor('#2B2D31');

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('bj_hit').setLabel('Hit').setStyle(ButtonStyle.Success),
                        new ButtonBuilder().setCustomId('bj_stand').setLabel('Stand').setStyle(ButtonStyle.Danger)
                    );

                    return interaction.update({ embeds: [embed], components: [row] });
                }

                if (interaction.customId.startsWith('buy_case_')) {
                    const caseType = interaction.customId.replace('buy_case_', '');
                    const config = CASE_CONFIG[caseType];
                    const inv = getInventory(interaction.user.id);

                    if (inv[config.currency] < config.cost) {
                        const currencyName = config.currency === 'cash' ? 'cash' : (config.currency === 'jcs' ? 'jailcards' : 'donation points');
                        const adminRole = botData.caseSystem.staffRoles[0] || '1456634173321384007';
                        const errEmbed = new EmbedBuilder()
                            .setDescription(`❌ *You don't have sufficient ${currencyName} to purchase. Contact <@&${adminRole}> for topping up your balance.*`)
                            .setColor('#F04747');
                        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                    }

                    inv[config.currency] -= config.cost;
                    inv.cases[caseType]++;
                    saveData();

                    const transactionId = Math.random().toString(36).substring(2, 11).toUpperCase();
                    const embed = new EmbedBuilder()
                        .setTitle(`${config.emoji} Case Purchased`)
                        .setDescription([
                            `<:dot:1502761998599979130> *You have successfully purchased a **${config.name}**.*`,
                            `<:dot:1502761998599979130> **Transaction ID:** \`${transactionId}\``,
                            `<:dot:1502761998599979130> **Cost:** ${config.cost.toLocaleString()} ${config.currency.toUpperCase()}`,
                            `<:dot:1502761998599979130> **New Balance:** ${inv[config.currency].toLocaleString()} ${config.currency.toUpperCase()}`,
                            '',
                            '*Use `/inventory` to open your cases.*'
                        ].join('\n'))
                        .setColor('#43B581')
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await interaction.reply({ embeds: [embed], ephemeral: true });

                    // Log Purchase
                    const logEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Case Purchase Log', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
                        .setDescription([
                            `> **Information**`,
                            `> 👤 | **User:** ${interaction.user} (\`${interaction.user.id}\`)`,
                            `> 🔹 | **Case Type:** ${config.name}`,
                            `> 🔍 | **Transaction ID:** \`${transactionId}\``,
                            `> `,
                            `> **Transaction Details**`,
                            `> 🏷️ | **Cost:** ${config.cost.toLocaleString()} ${config.currency.toUpperCase()}`,
                            `> 💳 | **New Balance:** ${inv[config.currency].toLocaleString()} ${config.currency.toUpperCase()}`
                        ].join('\n'))
                        .setColor('#43B581')
                        .setTimestamp()
                        .setFooter({ text: 'Purchase Audit System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    logAction(interaction.client, botData.caseSystem.logPurchaseChannelId, logEmbed);
                    return;
                }

                if (interaction.customId.startsWith('open_case_')) {
                    const caseType = interaction.customId.replace('open_case_', '');
                    const config = CASE_CONFIG[caseType];
                    const inv = getInventory(interaction.user.id);

                    if (inv.cases[caseType] <= 0) {
                        // Check if they have enough balance to buy instantly
                        if (inv[config.currency] < config.cost) {
                            const currencyName = config.currency === 'cash' ? 'cash' : (config.currency === 'jcs' ? 'jailcards' : 'donation points');
                            const errEmbed = new EmbedBuilder()
                                .setDescription(`> <:dot:1502761998599979130> **insufficient balance to open ${config.name}! contact staff to top-up your balance.**`)
                                .setColor('#F04747');
                            return interaction.reply({ embeds: [errEmbed], ephemeral: true });
                        }

                        // Deduct money
                        inv[config.currency] -= config.cost;
                        saveData();

                        // Log purchase since they bought it instantly
                        const transactionId = Math.random().toString(36).substring(2, 11).toUpperCase();
                        const logPurchaseEmbed = new EmbedBuilder()
                            .setAuthor({ name: 'Case Purchase Log (Instant)', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
                            .setDescription([
                                `> **Information**`,
                                `> 👤 | **User:** ${interaction.user} (\`${interaction.user.id}\`)`,
                                `> 🔹 | **Case Type:** ${config.name}`,
                                `> 🔍 | **Transaction ID:** \`${transactionId}\``,
                                `> `,
                                `> **Transaction Details**`,
                                `> 🏷️ | **Cost:** ${config.cost.toLocaleString()} ${config.currency.toUpperCase()}`,
                                `> 💳 | **New Balance:** ${inv[config.currency].toLocaleString()} ${config.currency.toUpperCase()}`
                            ].join('\n'))
                            .setColor('#43B581')
                            .setTimestamp()
                            .setFooter({ text: 'Purchase Audit System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });
                        logAction(interaction.client, botData.caseSystem.logPurchaseChannelId, logPurchaseEmbed);
                    } else {
                        inv.cases[caseType]--;
                    }

                    if (!inv.stats) inv.stats = { blackjack: { gambled: 0, won: 0, played: 0 }, crash: { gambled: 0, won: 0, played: 0 }, casesOpened: { classic: 0, golden: 0, emerald: 0, total: 0 } };
                    inv.stats.casesOpened[caseType] = (inv.stats.casesOpened[caseType] || 0) + 1;
                    inv.stats.casesOpened.total = (inv.stats.casesOpened.total || 0) + 1;
                    saveData();

                    const openingEmbed = new EmbedBuilder()
                        .setAuthor({ name: `Opening ${config.name}...`, iconURL: config.image })
                        .setDescription(`⏳ *Unlocking your case, please wait...*`)
                        .setColor('#FFA500');

                    await interaction.reply({ embeds: [openingEmbed], ephemeral: true });

                    setTimeout(async () => {
                        const roll = Math.random() * 100;
                        let rarity = 'basic';
                        if (roll < 0.5) rarity = 'mythic';
                        else if (roll < 10.25) rarity = 'legendary';
                        else if (roll < 35.25) rarity = 'epic';

                        const reward = config.rewards[rarity];
                        if (reward.value > 0) inv[config.currency] += reward.value;
                        saveData();

                        const win = rarity !== 'basic';
                        const resultEmbed = new EmbedBuilder()
                            .setAuthor({ name: `${config.name} Opened`, iconURL: config.image })
                            .setDescription([
                                `<:dot:1502761998599979130> ${interaction.user} *opened a ${config.name.toLowerCase()} and ${win ? 'won' : 'lost'}.*`,
                                `<:dot:1502761998599979130> *Roll: ${roll.toFixed(2)}%*`,
                                `<:dot:1502761998599979130> *ID: ${Math.random().toString(36).substring(2, 10)}*`,
                                `<:dot:1502761998599979130> *Date: ${new Date().toUTCString()}*`
                            ].join('\n'))
                            .setColor(win ? (rarity === 'mythic' ? '#FFA500' : (rarity === 'legendary' ? '#800080' : '#FF0000')) : '#FFD700')
                            .setFooter({ text: `User: ${interaction.user.username} | The Lost Legends`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                        if (win) resultEmbed.addFields({ name: '🎁 Reward', value: `\`${reward.name}\` (${rarity.toUpperCase()})` });

                        await interaction.editReply({ embeds: [resultEmbed] });

                        // Log Opening
                        const logEmbed = new EmbedBuilder()
                            .setAuthor({ name: 'Case Opening Log', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
                            .addFields(
                                { name: 'User', value: `${interaction.user} (\`${interaction.user.id}\`)`, inline: true },
                                { name: 'Case Type', value: `${config.name}`, inline: true },
                                { name: 'Outcome', value: win ? `✅ Won (${rarity.toUpperCase()})` : '❌ Lost', inline: true },
                                { name: 'Reward', value: win ? `\`${reward.name}\`` : 'None', inline: true },
                                { name: 'Roll', value: `\`${roll.toFixed(2)}%\``, inline: true }
                            )
                            .setColor(win ? '#43B581' : '#F04747')
                            .setTimestamp()
                            .setFooter({ text: 'Opening Audit System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                        logAction(interaction.client, '1504960442005721108', logEmbed);
                    }, 3000);
                    return;
                }

                if (interaction.customId === 'open_suggestion_modal') {
                    const modal = new ModalBuilder().setCustomId('suggestion_modal').setTitle('Submit a Suggestion');
                    const input = new TextInputBuilder().setCustomId('suggestion_input').setLabel('Your Suggestion').setStyle(TextInputStyle.Paragraph).setPlaceholder('Type here...').setRequired(true).setMinLength(10);
                    modal.addComponents(new ActionRowBuilder().addComponents(input));
                    await interaction.showModal(modal);
                    return;
                }

                if (interaction.customId === 'open_complaint_modal') {
                    const modal = new ModalBuilder().setCustomId('complaint_modal').setTitle('Submit a Complaint');
                    const reportedName = new TextInputBuilder().setCustomId('complaint_reported_name').setLabel('Reported Person Name').setStyle(TextInputStyle.Short).setRequired(true);
                    const reason = new TextInputBuilder().setCustomId('complaint_reason').setLabel('Reason / Description').setStyle(TextInputStyle.Paragraph).setRequired(true);
                    modal.addComponents(new ActionRowBuilder().addComponents(reportedName), new ActionRowBuilder().addComponents(reason));
                    await interaction.showModal(modal);
                    return;
                }

                if (['close_complaint', 'deny_complaint', 'hold_complaint'].includes(interaction.customId)) {
                    const staffRoles = botData.complaintSystem.staffRoles || [];
                    const isStaff = interaction.user.id === '518679063062118402' || interaction.member.roles.cache.some(role => staffRoles.includes(role.id));
                    const isReporter = interaction.channel.name.includes(interaction.user.username.toLowerCase());

                    if (interaction.customId === 'close_complaint' && !isStaff && !isReporter) return interaction.reply({ content: 'Unauthorized.', ephemeral: true });
                    if (interaction.customId !== 'close_complaint' && !isStaff) return interaction.reply({ content: 'Unauthorized.', ephemeral: true });

                    const oldEmbed = interaction.message.embeds[0];
                    let status = interaction.customId === 'close_complaint' ? '🔒 Closed' : (interaction.customId === 'deny_complaint' ? '❌ Denied' : '🕒 On Hold');
                    let color = interaction.customId === 'close_complaint' ? '#43B581' : (interaction.customId === 'deny_complaint' ? '#F04747' : '#FAA61A');

                    const newEmbed = EmbedBuilder.from(oldEmbed).setColor(color).addFields({ name: '<:dot:1502761998599979130> Status Update', value: `*${status} by ${interaction.user.username}*` });
                    if (interaction.customId === 'hold_complaint') { await interaction.update({ embeds: [newEmbed] }); }
                    else {
                        await interaction.update({ embeds: [newEmbed], components: [] });
                        if (interaction.customId === 'close_complaint') {
                            setTimeout(() => interaction.channel.delete().catch(() => { }), 10000);
                            await interaction.followUp({ embeds: [new EmbedBuilder().setDescription('Deleting in 10s...').setColor('#F04747')] });
                        }
                    }
                    return;
                }

                if (['accept_suggestion', 'deny_suggestion'].includes(interaction.customId)) {
                    if (interaction.user.id !== '518679063062118402' && !interaction.member.roles.cache.some(r => botData.suggestionSystem.staffRoles.includes(r.id))) {
                        return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *You do not have permission to accept or deny suggestions.*').setColor('#F04747')], ephemeral: true });
                    }
                    const action = interaction.customId === 'accept_suggestion' ? 'accept' : 'deny';
                    const modal = new ModalBuilder()
                        .setCustomId(`reply_suggestion_${action}_${interaction.message.id}`)
                        .setTitle(action === 'accept' ? 'Accept Suggestion' : 'Deny Suggestion');

                    const responseInput = new TextInputBuilder()
                        .setCustomId('response_text')
                        .setLabel('Response / Reason')
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder('Type your response here...')
                        .setRequired(true)
                        .setMaxLength(1000);

                    modal.addComponents(new ActionRowBuilder().addComponents(responseInput));
                    await interaction.showModal(modal);
                    return;
                }

                if (interaction.customId.startsWith('reply_suggestion_')) {
                    const parts = interaction.customId.split('_');
                    const action = parts[2];
                    const messageId = parts[3];

                    const reason = interaction.fields.getTextInputValue('response_text');

                    const channel = interaction.channel;
                    const message = await channel.messages.fetch(messageId).catch(() => null);
                    if (!message) return interaction.reply({ content: 'Suggestion message not found.', ephemeral: true });

                    const status = action === 'accept' ? '<:fcheck:1503512920250650745> Accepted' : '<:fcancel:1507464614797901904> Denied';
                    const newEmbed = EmbedBuilder.from(message.embeds[0])
                        .setColor(action === 'accept' ? '#43B581' : '#F04747')
                        .spliceFields(0, 1, { name: 'Status', value: status })
                        .addFields(
                            { name: 'Staff Response', value: `<:dot:1502761998599979130> *${reason}*`, inline: false }
                        )
                        .setFooter({ text: `${action === 'accept' ? 'Approved' : 'Denied'} by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() });

                    const btnStyle = action === 'accept' ? ButtonStyle.Success : ButtonStyle.Secondary;
                    const btnLabel = action === 'accept' ? 'Suggestion Accepted' : 'Suggestion Denied';
                    const btnEmoji = action === 'accept' ? '1503512920250650745' : '1507464614797901904';
                    const newRow = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('dummy_disabled').setLabel(btnLabel).setStyle(btnStyle).setEmoji(btnEmoji).setDisabled(true)
                    );

                    await message.edit({ embeds: [newEmbed], components: [newRow] });

                    const actionPast = action === 'accept' ? 'accepted' : 'denied';
                    const replyEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Success', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' })
                        .setDescription(`*Suggestion successfully ${actionPast}.*`)
                        .setColor('#2B2D31');
                    await interaction.reply({ embeds: [replyEmbed], ephemeral: true });

                    // Update the user's DM
                    try {
                        const match = message.embeds[0].description.match(/<@!?(\d+)>/);
                        if (match) {
                            const userId = match[1];
                            const user = await interaction.client.users.fetch(userId).catch(() => null);
                            if (user) {
                                const dmChannel = await user.createDM();
                                const dmMessages = await dmChannel.messages.fetch({ limit: 20 });
                                const targetDm = dmMessages.find(m => m.embeds[0]?.description?.includes(message.id));

                                const dmEmbed = new EmbedBuilder()
                                    .setAuthor({ name: action === 'accept' ? 'Suggestion Accepted' : 'Suggestion Denied', iconURL: action === 'accept' ? 'https://cdn.discordapp.com/emojis/1503512920250650745.png' : 'https://cdn.discordapp.com/emojis/1507464614797901904.png' })
                                    .setDescription(`> <:dot:1502761998599979130> *Your suggestion has been ${actionPast}.*\n<:dot:1502761998599979130> **ID:** [${message.id}](https://discord.com/channels/${message.guildId}/${message.channelId}/${message.id})`)
                                    .addFields({ name: 'Staff Response', value: `<:dot:1502761998599979130> *${reason}*` })
                                    .setColor('#2B2D31')
                                    .setFooter({ text: `${action === 'accept' ? 'Approved' : 'Denied'} by ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                                    .setTimestamp();

                                if (targetDm) {
                                    await targetDm.edit({ embeds: [dmEmbed] }).catch(() => { });
                                } else {
                                    await user.send({ embeds: [dmEmbed] }).catch(() => { });
                                }
                            }
                        }
                    } catch (e) {
                        console.error('Failed to update suggestion DM', e);
                    }

                    return;
                }

                if (interaction.customId === 'cancel_giveaway' || interaction.customId === 'view_entries') {
                    const giveaway = botData.giveawaySystem?.giveaways.find(g => g.messageId === interaction.message.id && !g.ended);
                    if (!giveaway) return interaction.reply({ content: 'This giveaway has ended or does not exist.', ephemeral: true });

                    if (interaction.customId === 'cancel_giveaway') {
                        const adminRole = botData.caseSystem.staffRoles[0] || '1456634173321384007';
                        if (interaction.user.id !== '518679063062118402' && !interaction.member.roles.cache.has(adminRole)) {
                            return interaction.reply({
                                embeds: [new EmbedBuilder().setAuthor({ name: 'System Notification', iconURL: 'https://cdn.discordapp.com/emojis/1507464614797901904.png' }).setDescription('*Only staff can cancel giveaways.*').setColor('#F04747')],
                                ephemeral: true
                            });
                        }

                        giveaway.ended = true;
                        saveData();

                        const embed = EmbedBuilder.from(interaction.message.embeds[0])
                            .setDescription('*This giveaway has been cancelled.*')
                            .setColor('#F04747');

                        await interaction.message.edit({ embeds: [embed], components: [] });

                        return interaction.reply({
                            embeds: [new EmbedBuilder().setAuthor({ name: 'Success', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' }).setDescription('*Giveaway cancelled successfully.*').setColor('#2B2D31')],
                            ephemeral: true
                        });
                    }

                    if (interaction.customId === 'view_entries') {
                        const msg = await interaction.channel.messages.fetch(interaction.message.id).catch(() => null);
                        if (!msg) {
                            return interaction.reply({
                                embeds: [new EmbedBuilder().setAuthor({ name: 'Error', iconURL: 'https://cdn.discordapp.com/emojis/1507464614797901904.png' }).setDescription('*Message not found.*').setColor('#F04747')],
                                ephemeral: true
                            });
                        }

                        const reaction = msg.reactions.cache.get('1503549273349034065');
                        let participants = [];

                        if (reaction) {
                            await reaction.users.fetch();
                            participants = reaction.users.cache.filter(u => !u.bot).map(u => u.username);
                        }

                        if (participants.length === 0) {
                            return interaction.reply({
                                embeds: [new EmbedBuilder().setAuthor({ name: 'Giveaway Entries (0)', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' }).setDescription('*No entries yet!*').setColor('#2B2D31')],
                                ephemeral: true
                            });
                        }

                        const entriesList = participants.map(p => `<:dot:1502761998599979130> **${p}**`).join('\n').substring(0, 4000);
                        const listEmbed = new EmbedBuilder()
                            .setAuthor({ name: `Giveaway Entries (${participants.length})`, iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' })
                            .setDescription(entriesList)
                            .setColor('#2B2D31');

                        return interaction.reply({ embeds: [listEmbed], ephemeral: true });
                    }
                }
            }

            if (interaction.isStringSelectMenu() && interaction.customId === 'support_category_select') {
                const categoryId = '1504994342752882789';
                const type = interaction.values[0];
                const label = type === 'support_general' ? 'General Inquiries' : (type === 'support_withdrawals' ? 'Withdrawals' : (type === 'support_giveaway' ? 'Claim giveaway prize' : 'Cases Purchases'));

                await interaction.deferReply({ ephemeral: true });

                try {
                    const ticketId = Math.floor(1000 + Math.random() * 9000);
                    const channelName = `support-${interaction.user.username}-${ticketId}`.toLowerCase().replace(/[^a-z0-9-]/g, '');

                    const channel = await interaction.guild.channels.create({
                        name: channelName,
                        parent: categoryId,
                        permissionOverwrites: [
                            { id: interaction.guild.id, deny: [PermissionFlagsBits.ViewChannel] },
                            { id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.AttachFiles, PermissionFlagsBits.EmbedLinks] },
                            ...botData.caseSystem.staffRoles.map(rid => ({ id: rid, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }))
                        ]
                    });

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: 'Support Ticket', iconURL: interaction.user.displayAvatarURL() })
                        .setTitle(`Support Type: ${label}`)
                        .setDescription([
                            '*Hello! A staff member will be with you shortly. Please describe your issue in detail while you wait.*',
                            '',
                            `<:dot:1502761998599979130> **User:** ${interaction.user}`,
                            `<:dot:1502761998599979130> **Ticket ID:** \`#${ticketId}\``
                        ].join('\n'))
                        .setColor('#5865F2')
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    const row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder().setCustomId('close_complaint').setLabel('Close Ticket').setStyle(ButtonStyle.Danger).setEmoji('🔒')
                    );

                    const successEmbed = new EmbedBuilder()
                        .setTitle('🎫 Ticket Created')
                        .setDescription([
                            `<:dot:1502761998599979130> *Your support ticket has been successfully initialized.*`,
                            `<:dot:1502761998599979130> **Channel:** ${channel}`,
                            '',
                            '*Please head over to the channel to discuss your request.*'
                        ].join('\n'))
                        .setColor('#43B581')
                        .setFooter({ text: 'The Lost Legends | Global Support', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await interaction.editReply({ content: '', embeds: [successEmbed] });
                } catch (err) {
                    console.error('Support ticket error:', err);
                    await interaction.editReply({ content: '❌ Failed to create ticket. Please contact staff manually.' });
                }
                return;
            }

            if (interaction.isStringSelectMenu() && interaction.customId === 'stats_player_select') {
                const username = interaction.values[0];
                await interaction.deferUpdate();
                try {
                    const url = `https://ls-rcr.com/user/${encodeURIComponent(username)}`;
                    const { data } = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 });
                    const $ = cheerio.load(data);
                    const embed = createStatsEmbed($('h2').first().text().trim() || username, await getStatsFromPage($, username, url), url, interaction.client);
                    await interaction.editReply({ content: '', embeds: [embed], components: [] });
                } catch (err) { await interaction.editReply({ content: 'Error fetching stats.', components: [] }); }
                return;
            }

            if (interaction.isModalSubmit()) {
                if (interaction.customId.startsWith('givetake_cases_')) {
                    if (interaction.user.id !== '518679063062118402' && !interaction.member.roles.cache.has(botData.caseSystem.staffRoleId)) {
                        return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *You do not have permission to use this.*').setColor('#F04747')], ephemeral: true });
                    }
                    const targetUserId = interaction.customId.replace('givetake_cases_', '');
                    const action = interaction.fields.getTextInputValue('action_type').toLowerCase().trim();
                    const rawCaseType = interaction.fields.getTextInputValue('case_type').toLowerCase().trim();
                    const amountStr = interaction.fields.getTextInputValue('amount').trim();
                    const amount = parseInt(amountStr, 10);

                    if (isNaN(amount) || amount <= 0) {
                        return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *Invalid amount.*').setColor('#F04747')], ephemeral: true });
                    }
                    if (action !== 'give' && action !== 'take') {
                        return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *Invalid action. Must be "give" or "take".*').setColor('#F04747')], ephemeral: true });
                    }

                    let caseType = null;
                    if (rawCaseType === 'classic') caseType = 'classic';
                    else if (rawCaseType === 'diamond' || rawCaseType === 'golden') caseType = 'golden';
                    else if (rawCaseType === 'emerald') caseType = 'emerald';
                    else {
                        return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *Invalid case type. Must be "classic", "diamond", or "emerald".*').setColor('#F04747')], ephemeral: true });
                    }

                    const inv = getInventory(targetUserId);
                    const oldBal = inv.cases[caseType];
                    if (action === 'give') {
                        inv.cases[caseType] += amount;
                    } else {
                        if (inv.cases[caseType] < amount) {
                            return interaction.reply({ embeds: [new EmbedBuilder().setDescription(`❌ *User only has **${inv.cases[caseType]}** of that case. Cannot take ${amount}.*`).setColor('#F04747')], ephemeral: true });
                        }
                        inv.cases[caseType] -= amount;
                    }
                    saveData();

                    const caseEmoji = caseType === 'classic' ? '<:classicase:1505769014813786234>' : (caseType === 'golden' ? '<:diamondcase:1505769092072734830>' : '<:femeraldcase:1525845628586954793>');
                    sendBalanceDM(targetUserId, interaction.user, `${caseType.charAt(0).toUpperCase() + caseType.slice(1)} Cases`, oldBal, inv.cases[caseType], caseEmoji);

                    const caseConfig = CASE_CONFIG[caseType];
                    const embed = new EmbedBuilder()
                        .setAuthor({ name: 'Cases Updated', iconURL: caseConfig.image })
                        .setDescription(`Successfully **${action === 'give' ? 'gave' : 'took'} ${amount} ${caseConfig.name}s** ${action === 'give' ? 'to' : 'from'} <@${targetUserId}>.`)
                        .addFields(
                            { name: 'User New Balance', value: `${inv.cases[caseType]} ${caseConfig.name}s`, inline: true }
                        )
                        .setColor('#43B581')
                        .setFooter({ text: 'The Lost Legends | Admin System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                    await interaction.reply({ embeds: [embed], ephemeral: true });

                    // Log it
                    const logEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Admin Action Log', iconURL: 'https://cdn.discordapp.com/emojis/1505782769408807014.png' })
                        .setDescription(`**Admin:** ${interaction.user}\n**Action:** ${action === 'give' ? 'Gave' : 'Removed'} ${amount} ${caseConfig.name}s\n**Target User:** <@${targetUserId}>`)
                        .setColor(action === 'give' ? '#43B581' : '#F04747')
                        .setTimestamp()
                        .setFooter({ text: 'Admin Audit System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });
                    logAction(interaction.client, botData.caseSystem.logGiveChannelId, logEmbed);
                    return;
                }

                if (interaction.customId === 'suggestion_modal') {
                    const text = interaction.fields.getTextInputValue('suggestion_input');
                    const channel = await interaction.client.channels.fetch(botData.suggestionSystem.channelId).catch(() => null);
                    if (!channel) return interaction.reply({ embeds: [new EmbedBuilder().setDescription('❌ *Error.*').setColor('#F04747')], ephemeral: true });

                    const embed = new EmbedBuilder()
                        .setAuthor({ name: 'New Suggestion', iconURL: interaction.user.displayAvatarURL() })
                        .setDescription([
                            '**User:**',
                            `<:dot:1502761998599979130> ${interaction.user} (${interaction.user.username})`,
                            '',
                            '**Suggestion:**',
                            `<:dot:1502761998599979130> ${text}`,
                            '',
                            '**Votes:**',
                            '<:dot:1502761998599979130> <:fup:1502758861751455945> **0** - -',
                            '<:dot:1502761998599979130> <:fdown:1502758895561609247> **0** - -'
                        ].join('\n'))
                        .addFields({ name: 'Status', value: '🕒 Pending' })
                        .setColor('#2B2D31')
                        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() })
                        .setTimestamp();

                    const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('accept_suggestion').setLabel('Accept').setStyle(ButtonStyle.Success).setEmoji('1503512920250650745'), new ButtonBuilder().setCustomId('deny_suggestion').setLabel('Deny').setStyle(ButtonStyle.Danger).setEmoji('1507464614797901904'));
                    const msg = await channel.send({ embeds: [embed], components: [row] });

                    await msg.react('1502758861751455945');
                    await msg.react('1502758895561609247');

                    const replyEmbed = new EmbedBuilder()
                        .setAuthor({ name: 'Suggestion Submitted', iconURL: 'https://cdn.discordapp.com/emojis/1503512920250650745.png' })
                        .setDescription(`> <:dot:1502761998599979130> *Your suggestion has been submitted*\n<:dot:1502761998599979130> **ID:** [${msg.id}](https://discord.com/channels/${msg.guildId}/${msg.channelId}/${msg.id})`)
                        .setColor('#2B2D31')
                        .setFooter({ text: 'Status: Pending' })
                        .setTimestamp();

                    await interaction.reply({ embeds: [replyEmbed], ephemeral: true });
                    return;
                }
                if (interaction.customId === 'complaint_modal') {
                    await interaction.deferReply({ ephemeral: true });
                    try {
                        const reported = interaction.fields.getTextInputValue('complaint_reported_name');
                        const reason = interaction.fields.getTextInputValue('complaint_reason');
                        const id = botData.complaintSystem.nextId++;
                        saveData();
                        const channel = await interaction.guild.channels.create({
                            name: `ticket-${id}`, parent: botData.complaintSystem.categoryId,
                            permissionOverwrites: [{ id: interaction.guild.id, deny: [PermissionFlagsBits.ViewChannel] }, { id: interaction.user.id, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] },
                            ...botData.complaintSystem.staffRoles.map(rid => ({ id: rid, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }))]
                        });
                        const embed = new EmbedBuilder().setTitle('Complaint Ticket').addFields({ name: 'Reporter', value: `${interaction.user}` }, { name: 'Reported', value: reported }, { name: 'Reason', value: reason }).setColor('#5865F2');
                        const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('close_complaint').setLabel('Close').setStyle(ButtonStyle.Success).setEmoji('🔒'));
                        await channel.send({ content: `${interaction.user} ${botData.complaintSystem.staffRoles.map(rid => `<@&${rid}>`).join(' ')}`, embeds: [embed], components: [row] });
                        await interaction.editReply({ embeds: [new EmbedBuilder().setDescription(`Ticket created: ${channel}`).setColor('#43B581')] });
                    } catch (err) { await interaction.editReply('Error.'); }
                    return;
                }
            }
        });

        const timeout = setTimeout(() => {
            reject(new Error('Discord connection timed out.'));
            client.destroy();
        }, 15000);

        // --- WELCOME SYSTEM ---
        client.on('guildMemberAdd', async (member) => {
            const welcomeChannelId = botData.welcomeChannelId;
            if (!welcomeChannelId) return;

            const channel = member.guild.channels.cache.get(welcomeChannelId) || await member.guild.channels.fetch(welcomeChannelId).catch(() => null);
            if (!channel) return;

            const welcomeEmbed = new EmbedBuilder()
                .setTitle('Welcome!')
                .setDescription([
                    `<:dot:1502761998599979130> **User:** ${member} (${member.user.username})`,
                    '',
                    `<:dot:1502761998599979130> **ID:** ${member.id}`,
                    '',
                    `<:dot:1502761998599979130> **Members:** ${member.guild.memberCount}`,
                    '',
                    `<:dot:1502761998599979130> **Date:** ${new Date().toUTCString()}`
                ].join('\n'))
                .setColor('#2B2D31') // Dark Discord color
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
                .setFooter({ text: `${member.guild.name} | Membership Tracking`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

            await channel.send({ embeds: [welcomeEmbed] });
        });

        // --- AUDIT LOGGING SYSTEM ---
        client.on('messageDelete', async (message) => {
            if (message.partial || message.author?.bot) return;

            const logChannelId = botData.auditLog?.channelId;
            if (!logChannelId) return;

            const logChannel = message.guild.channels.cache.get(logChannelId) || await message.guild.channels.fetch(logChannelId).catch(() => null);
            if (!logChannel) return;

            const embed = new EmbedBuilder()
                .setAuthor({ name: 'Message Deleted', iconURL: 'https://cdn.discordapp.com/emojis/1506170323773423646.png' })
                .addFields(
                    { name: '<:dot:1502761998599979130> Sender', value: `${message.author} (${message.author.tag})`, inline: true },
                    { name: '<:dot:1502761998599979130> Channel', value: `${message.channel}`, inline: true },
                    { name: '<:dot:1502761998599979130> Content', value: message.content ? `\`\`\`${message.content.substring(0, 1000)}\`\`\`` : '*No text content (likely an embed or attachment)*' }
                )
                .setColor('#F04747')
                .setTimestamp()
                .setFooter({ text: `User ID: ${message.author.id}`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

            await logChannel.send({ embeds: [embed] });
        });

        client.on('messageUpdate', async (oldMessage, newMessage) => {
            if (oldMessage.partial || oldMessage.author?.bot || oldMessage.content === newMessage.content) return;

            const logChannelId = botData.auditLog?.channelId;
            if (!logChannelId) return;

            const logChannel = oldMessage.guild.channels.cache.get(logChannelId) || await oldMessage.guild.channels.fetch(logChannelId).catch(() => null);
            if (!logChannel) return;

            const embed = new EmbedBuilder()
                .setTitle('📝 Message Edited')
                .addFields(
                    { name: '<:dot:1502761998599979130> Sender', value: `${oldMessage.author} (${oldMessage.author.tag})`, inline: true },
                    { name: '<:dot:1502761998599979130> Channel', value: `${oldMessage.channel}`, inline: true },
                    { name: '<:dot:1502761998599979130> Before', value: `\`\`\`${oldMessage.content.substring(0, 1000)}\`\`\`` },
                    { name: '<:dot:1502761998599979130> After', value: `\`\`\`${newMessage.content.substring(0, 1000)}\`\`\`` }
                )
                .setColor('#FAA61A')
                .setTimestamp()
                .setFooter({ text: `User ID: ${oldMessage.author.id}`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

            await logChannel.send({ embeds: [embed] });
        });

        client.on('guildMemberRemove', async (member) => {
            const logChannelId = botData.auditLog?.channelId;
            if (!logChannelId) return;

            const logChannel = member.guild.channels.cache.get(logChannelId) || await member.guild.channels.fetch(logChannelId).catch(() => null);
            if (!logChannel) return;

            const embed = new EmbedBuilder()
                .setTitle('👋 Member Left')
                .addFields(
                    { name: '<:dot:1502761998599979130> Member', value: `${member.user} (${member.user.tag})`, inline: true },
                    { name: '<:dot:1502761998599979130> Final Member Count', value: `${member.guild.memberCount}`, inline: true }
                )
                .setColor('#2B2D31')
                .setTimestamp()
                .setFooter({ text: `User ID: ${member.id}`, iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

            await logChannel.send({ embeds: [embed] });
        });

        client.on('guildMemberUpdate', async (oldMember, newMember) => {
            const logChannelId = botData.auditLog?.channelId;
            if (!logChannelId) return;

            const logChannel = oldMember.guild.channels.cache.get(logChannelId) || await oldMember.guild.channels.fetch(logChannelId).catch(() => null);
            if (!logChannel) return;

            const embeds = [];

            // Nickname change
            if (oldMember.nickname !== newMember.nickname) {
                embeds.push(new EmbedBuilder()
                    .setTitle('🏷️ Nickname Updated')
                    .addFields(
                        { name: '<:dot:1502761998599979130> Member', value: `${newMember.user}`, inline: true },
                        { name: '<:dot:1502761998599979130> Before', value: `\`${oldMember.nickname || 'None'}\``, inline: true },
                        { name: '<:dot:1502761998599979130> After', value: `\`${newMember.nickname || 'None'}\``, inline: true }
                    )
                    .setColor('#5865F2')
                    .setTimestamp());
            }

            // Role change
            const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
            const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));

            if (addedRoles.size > 0 || removedRoles.size > 0) {
                const desc = [];
                if (addedRoles.size > 0) desc.push(`<:dot:1502761998599979130> **Added:** ${addedRoles.map(r => r).join(', ')}`);
                if (removedRoles.size > 0) desc.push(`<:dot:1502761998599979130> **Removed:** ${removedRoles.map(r => r).join(', ')}`);

                embeds.push(new EmbedBuilder()
                    .setTitle('🛡️ Roles Updated')
                    .setDescription(desc.join('\n'))
                    .addFields({ name: 'Member', value: `${newMember.user}` })
                    .setColor('#5865F2')
                    .setTimestamp());
            }

            for (const embed of embeds) {
                await logChannel.send({ embeds: [embed] });
            }
        });

        client.on('voiceStateUpdate', async (oldState, newState) => {
            const logChannelId = botData.auditLog?.channelId;
            if (!logChannelId) return;

            const logChannel = oldState.guild.channels.cache.get(logChannelId) || await oldState.guild.channels.fetch(logChannelId).catch(() => null);
            if (!logChannel) return;

            // Join
            if (!oldState.channelId && newState.channelId) {
                const embed = new EmbedBuilder()
                    .setTitle('🔊 Voice Join')
                    .addFields(
                        { name: '<:dot:1502761998599979130> Member', value: `${newState.member.user}`, inline: true },
                        { name: '<:dot:1502761998599979130> Channel', value: `${newState.channel}`, inline: true }
                    )
                    .setColor('#43B581')
                    .setTimestamp();
                await logChannel.send({ embeds: [embed] });
            }
            // Leave
            else if (oldState.channelId && !newState.channelId) {
                const embed = new EmbedBuilder()
                    .setTitle('🔇 Voice Leave')
                    .addFields(
                        { name: '<:dot:1502761998599979130> Member', value: `${oldState.member.user}`, inline: true },
                        { name: '<:dot:1502761998599979130> Channel', value: `${oldState.channel}`, inline: true }
                    )
                    .setColor('#F04747')
                    .setTimestamp();
                await logChannel.send({ embeds: [embed] });
            }
        });

        // --- REACTION HANDLERS ---
        async function updateSuggestionVotes(message) {
            if (message.partial) await message.fetch();
            if (message.channelId !== botData.suggestionSystem?.channelId) return;
            if (!message.embeds || message.embeds.length === 0) return;

            const embed = EmbedBuilder.from(message.embeds[0]);
            if (!embed.data.description || !embed.data.description.includes('**Votes:**')) return;

            const fupReaction = message.reactions.cache.get('1502758861751455945');
            const fdownReaction = message.reactions.cache.get('1502758895561609247');

            let fupUsers = [];
            let fdownUsers = [];

            if (fupReaction) {
                await fupReaction.users.fetch();
                fupUsers = fupReaction.users.cache.filter(u => !u.bot).map(u => `<@${u.id}>`);
            }
            if (fdownReaction) {
                await fdownReaction.users.fetch();
                fdownUsers = fdownReaction.users.cache.filter(u => !u.bot).map(u => `<@${u.id}>`);
            }

            const upText = fupUsers.length > 0 ? fupUsers.join(', ') : '-';
            const downText = fdownUsers.length > 0 ? fdownUsers.join(', ') : '-';

            const parts = embed.data.description.split('**Votes:**');
            if (parts.length === 2) {
                const newDesc = parts[0] + '**Votes:**\n' +
                    `<:dot:1502761998599979130> <:fup:1502758861751455945> **${fupUsers.length}** - ${upText}\n` +
                    `<:dot:1502761998599979130> <:fdown:1502758895561609247> **${fdownUsers.length}** - ${downText}`;
                embed.setDescription(newDesc);
                await message.edit({ embeds: [embed] }).catch(console.error);
            }
        }

        async function updateGiveawayEntries(message) {
            if (message.partial) await message.fetch();
            if (!message.embeds || message.embeds.length === 0) return;
            const embed = EmbedBuilder.from(message.embeds[0]);

            const reaction = message.reactions.cache.get('1503549273349034065');
            let count = 0;
            if (reaction) {
                await reaction.users.fetch();
                count = reaction.users.cache.filter(u => !u.bot).size;
            }

            const desc = embed.data.description;
            if (desc) {
                let newDesc = desc;
                if (desc.includes('🌎 *Entries:*')) {
                    newDesc = desc.replace(/🌎 \*Entries:\* \d+/, `🌎 *Entries:* ${count}`);
                } else if (desc.includes('<:fcheck:1503512920250650745> *Entries:*')) {
                    newDesc = desc.replace(/<:fcheck:1503512920250650745> \*Entries:\* \d+/, `<:fcheck:1503512920250650745> *Entries:* ${count}`);
                }
                if (newDesc !== desc) {
                    embed.setDescription(newDesc);
                    await message.edit({ embeds: [embed] }).catch(() => { });
                }
            }
        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (user.bot) return;
            if (reaction.partial) await reaction.fetch();

            // Giveaway Logic
            if (reaction.emoji.id === '1503549273349034065') {
                const giveaway = botData.giveawaySystem?.giveaways.find(g => g.messageId === reaction.message.id && !g.ended);
                if (giveaway) {
                    try {
                        const entryEmbed = new EmbedBuilder()
                            .setTitle('<a:Fgiveaway:1503549273349034065> Entry Approved')
                            .setDescription(`Your entry has been approved for the giveaway: **${giveaway.prize}**!\n\n*Good luck, we hope you win!*`)
                            .setColor('#5865F2')
                            .setTimestamp()
                            .setFooter({ text: 'Nexus | Give-Away System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });
                        await user.send({ embeds: [entryEmbed] });
                    } catch (err) {
                        console.log(`Could not send DM to ${user.tag} for giveaway entry.`);
                    }
                    await updateGiveawayEntries(reaction.message);
                }
            }

            // Suggestion Logic
            if (reaction.emoji.id === '1502758861751455945' || reaction.emoji.id === '1502758895561609247') {
                if (reaction.message.channelId === botData.suggestionSystem?.channelId) {
                    await updateSuggestionVotes(reaction.message);
                }
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (user.bot) return;
            if (reaction.partial) await reaction.fetch();

            if (reaction.emoji.id === '1502758861751455945' || reaction.emoji.id === '1502758895561609247') {
                if (reaction.message.channelId === botData.suggestionSystem?.channelId) {
                    await updateSuggestionVotes(reaction.message);
                }
            }

            if (reaction.emoji.id === '1503549273349034065') {
                const giveaway = botData.giveawaySystem?.giveaways.find(g => g.messageId === reaction.message.id && !g.ended);
                if (giveaway) {
                    await updateGiveawayEntries(reaction.message);
                }
            }
        });

        // --- GIVEAWAY TICKER ---
        setInterval(async () => {
            const now = Date.now();
            const giveaways = botData.giveawaySystem?.giveaways || [];

            for (const g of giveaways) {
                if (!g.ended && now >= g.endTime) {
                    g.ended = true;
                    saveData();

                    try {
                        const guild = client.guilds.cache.get('1318293692532002837'); // Primary guild or find from channel
                        const channel = await client.channels.fetch(g.channelId);
                        const message = await channel.messages.fetch(g.messageId);
                        const reaction = message.reactions.cache.get('1503549273349034065');

                        let participants = [];
                        if (reaction) {
                            await reaction.users.fetch();
                            participants = reaction.users.cache.filter(u => !u.bot).map(u => u);
                        }

                        if (participants.length === 0) {
                            const failEmbed = new EmbedBuilder()
                                .setDescription([
                                    `## Giveaway Ended`,
                                    ``,
                                    `<:member:1507347275100192811> *Host:* ${g.hostId ? `<@${g.hostId}>` : 'Unknown'}`,
                                    `<:fcommunity:1502770043354742835> *Winners:* 0`,
                                    `<:fcheck:1503512920250650745> *Entries:* 0`,
                                    ``,
                                    `**Prize:**`,
                                    ``,
                                    `💎 - *${g.prize}*`,
                                    ``,
                                    `*Unfortunately, no one participated.* 😢`
                                ].join('\n'))
                                .setColor('#2B2D31')
                                .setThumbnail('https://i.ibb.co/ZpjKk44D/image-2026-05-18-072818336.png')
                                .setFooter({ text: 'The Gang Of Lsrcr Streets', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() })
                                .setTimestamp();
                            await channel.send({ embeds: [failEmbed] });
                        } else {
                            const winners = [];
                            for (let i = 0; i < Math.min(g.winnersCount, participants.length); i++) {
                                const index = Math.floor(Math.random() * participants.length);
                                winners.push(participants.splice(index, 1)[0]);
                            }

                            const winnerMentions = winners.map(w => w.toString()).join('\n<:dot:1502761998599979130> ');
                            const endEmbed = new EmbedBuilder()
                                .setColor('#2B2D31')
                                .setDescription([
                                    `## Giveaway Ended`,
                                    ``,
                                    `<:member:1507347275100192811> *Host:* ${g.hostId ? `<@${g.hostId}>` : 'Unknown'}`,
                                    `<:fcommunity:1502770043354742835> *Winners:* ${winners.length}`,
                                    `<:fcheck:1503512920250650745> *Entries:* ${participants.length}`,
                                    ``,
                                    `**Prize:**`,
                                    ``,
                                    `💎 - *${g.prize}*`,
                                    ``,
                                    `**Winners:**`,
                                    ``,
                                    `<:dot:1502761998599979130> ${winnerMentions || 'None'}`
                                ].join('\n'))
                                .setThumbnail('https://i.ibb.co/ZpjKk44D/image-2026-05-18-072818336.png')
                                .setFooter({ text: 'The Gang Of Lsrcr Streets', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() })
                                .setTimestamp();

                            await message.edit({ embeds: [endEmbed] });

                            const winEmbed = new EmbedBuilder()
                                .setTitle('<a:Fgiveaway:1503549273349034065> Congratulations!')
                                .setDescription([
                                    `<:dot:1502761998599979130> *Congratulations ${winnerMentions}! You have won the **${g.prize}**!*`,
                                    `<:dot:1502761998599979130> *Please open a support ticket to claim your reward.*`
                                ].join('\n'))
                                .setColor('#43B581')
                                .setThumbnail('https://cdn.discordapp.com/emojis/1503549273349034065.gif')
                                .setFooter({ text: 'Nexus | Give-Away System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                            await channel.send({ embeds: [winEmbed] });

                            // Send DMs to winners
                            for (const winner of winners) {
                                try {
                                    const dmEmbed = new EmbedBuilder()
                                        .setAuthor({ name: 'You Won a Giveaway!', iconURL: 'https://cdn.discordapp.com/emojis/1503549273349034065.gif' })
                                        .setDescription([
                                            `*Hello **${winner.username}**!*`,
                                            '',
                                            `<:dot:1502761998599979130> *You are a lucky winner of the giveaway for:* **${g.prize}**`,
                                            `<:dot:1502761998599979130> *Server:* **Nexus**`,
                                            '',
                                            `*Please open a support ticket in the server to claim your prize!*`
                                        ].join('\n'))
                                        .setColor('#43B581')
                                        .setThumbnail(guild.iconURL())
                                        .setFooter({ text: 'Nexus | Give-Away System', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });

                                    await winner.send({ embeds: [dmEmbed] }).catch(() => console.log(`Could not DM winner: ${winner.tag}`));
                                } catch (dmErr) {
                                    console.error('Failed to send DM to winner:', dmErr);
                                }
                            }
                        }
                    } catch (err) {
                        console.error('Error ending giveaway:', err);
                    }
                }
            }
        }, 30000); // Check every 30 seconds

        client.login(token).then(() => clearTimeout(timeout)).catch(err => {
            clearTimeout(timeout);
            reject(err);
        });
    });
};

app.post('/api/connect', async (req, res) => {
    const { token } = req.body;
    try {
        if (discordClient) {
            await discordClient.destroy();
        }
        discordClient = await createClient(token);

        // Save token for auto-connect on server restart
        botData.token = token;
        saveData();

        res.json({
            success: true,
            user: {
                username: discordClient.user.username,
                avatar: discordClient.user.displayAvatarURL(),
                id: discordClient.user.id
            }
        });
    } catch (error) {
        console.error('Connection failed:', error);
        res.status(400).json({ success: false, message: 'Invalid token or connection failed' });
    }
});

app.get('/api/commands', (req, res) => {
    res.json(slashCommandsStore);
});

app.post('/api/commands', async (req, res) => {
    const { commands, token } = req.body;
    console.log('Received /api/commands request:', { commandCount: commands?.length, hasToken: !!token });

    slashCommandsStore = commands;
    botData.slashCommands = commands;
    saveData();

    if (discordClient && token) {
        await registerCommands(token, discordClient.user.id, slashCommandsStore, discordClient);
    }
    res.json({ success: true });
});

app.get('/api/guilds', async (req, res) => {
    if (!discordClient) return res.status(401).json({ message: 'Bot not connected' });
    try {
        const guilds = discordClient.guilds.cache.map(g => ({
            id: g.id,
            name: g.name,
            icon: g.iconURL()
        }));
        res.json(guilds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/guilds/:guildId/channels', async (req, res) => {
    if (!discordClient) return res.status(401).json({ message: 'Bot not connected' });
    try {
        const guild = await discordClient.guilds.fetch(req.params.guildId);
        const channels = (await guild.channels.fetch())
            .filter(c => c.type === 0) // Text channels
            .map(c => ({
                id: c.id,
                name: c.name
            }));
        res.json(channels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/channels/:channelId/messages', async (req, res) => {
    if (!discordClient) return res.status(401).json({ message: 'Bot not connected' });
    try {
        const channel = await discordClient.channels.fetch(req.params.channelId);
        const messages = await channel.messages.fetch({ limit: 50 });
        const result = messages.map(m => ({
            id: m.id,
            content: m.content,
            author: {
                id: m.author.id,
                username: m.author.username,
                avatar: m.author.displayAvatarURL(),
                bot: m.author.bot
            },
            timestamp: m.createdAt,
            referencedMessage: m.referencedMessage ? {
                id: m.referencedMessage.id,
                content: m.referencedMessage.content,
                author: {
                    username: m.referencedMessage.author.username
                }
            } : null
        }));
        res.json(result.reverse());
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/send', async (req, res) => {
    if (!discordClient) return res.status(401).json({ message: 'Bot not connected' });
    const { channelId, content, embeds, components, replyTo } = req.body;
    console.log(`Attempting to send message to channel ${channelId}`);

    try {
        const channel = await discordClient.channels.fetch(channelId);
        if (!channel) throw new Error('Channel not found');

        let options = { content: content || null, embeds: [], components: [] };

        if (embeds && embeds.length > 0) {
            options.embeds = embeds.map(e => {
                const embed = new EmbedBuilder()
                    .setTitle(e.title || null)
                    .setDescription(e.description || null)
                    .setColor(e.color || '#5865F2')
                    .setTimestamp(e.timestamp ? new Date() : null);

                if (e.url && typeof e.url === 'string' && e.url.trim() !== '') embed.setURL(e.url);

                if (e.author && e.author.name && typeof e.author.name === 'string' && e.author.name.trim() !== '') {
                    embed.setAuthor({
                        name: e.author.name.trim(),
                        iconURL: (e.author.icon_url && typeof e.author.icon_url === 'string' && e.author.icon_url.startsWith('http')) ? e.author.icon_url : null,
                        url: (e.author.url && typeof e.author.url === 'string' && e.author.url.startsWith('http')) ? e.author.url : null
                    });
                }

                if (e.footer && e.footer.text && typeof e.footer.text === 'string' && e.footer.text.trim() !== '') {
                    embed.setFooter({ text: e.footer.text.trim(), iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });
                }

                if (e.image?.url && typeof e.image.url === 'string' && e.image.url.trim() !== '') embed.setImage(e.image.url);
                if (e.thumbnail?.url && typeof e.thumbnail.url === 'string' && e.thumbnail.url.trim() !== '') embed.setThumbnail(e.thumbnail.url);

                if (e.fields?.length) {
                    const validFields = e.fields.filter(f => f.name && f.value);
                    if (validFields.length > 0) {
                        embed.addFields(validFields.map(f => ({ name: f.name, value: f.value, inline: f.inline })));
                    }
                }
                return embed;
            });
        }

        if (components && components.length > 0) {
            const rows = [];
            for (const rowData of components) {
                const row = new ActionRowBuilder();
                if (rowData.type === 'buttons') {
                    rowData.items.forEach(btnData => {
                        const btn = new ButtonBuilder()
                            .setLabel(btnData.label)
                            .setStyle(ButtonStyle[btnData.style] || ButtonStyle.Primary);

                        if (btnData.emoji) btn.setEmoji(btnData.emoji);

                        if (btnData.style === 'Link') {
                            btn.setURL(btnData.url);
                        } else {
                            const customId = `btn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                            btn.setCustomId(customId);
                            componentActions.set(customId, btnData.action);
                        }
                        row.addComponents(btn);
                    });
                } else if (rowData.type === 'select') {
                    const select = new StringSelectMenuBuilder()
                        .setCustomId(`select_${Date.now()}`)
                        .setPlaceholder(rowData.placeholder || 'Select an option');

                    rowData.options.forEach(optData => {
                        const value = `opt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                        const opt = new StringSelectMenuOptionBuilder()
                            .setLabel(optData.label)
                            .setValue(value)
                            .setDescription(optData.description || '');
                        if (optData.emoji) opt.setEmoji(optData.emoji);
                        select.addOptions(opt);
                        componentActions.set(value, optData.action);
                    });
                    row.addComponents(select);
                }
                rows.push(row);
            }
            options.components = rows;
        }

        if (replyTo) {
            options.reply = { messageReference: replyTo };
        }

        const message = await channel.send(options);
        res.json({ success: true, messageId: message.id, url: message.url });
    } catch (error) {
        console.error('FAILED to send message:', error);
        res.status(500).json({ message: error.message });
    }
});


app.post('/api/status', async (req, res) => {
    if (!discordClient) return res.status(401).json({ message: 'Bot not connected' });
    const { status, activityType, activityName } = req.body;
    try {
        botData.presence = { status, activityType, activityName };
        saveData();

        const activity = {
            name: activityName,
            type: parseInt(activityType) || 0
        };

        if (activity.type === 1) { // Streaming
            activity.url = 'https://www.twitch.tv/discord';
        }

        discordClient.user.setPresence({
            status: status || 'online',
            activities: [activity]
        });
        res.json({ success: true });
    } catch (error) {
        console.error('Failed to update status:', error);
        res.status(500).json({ message: error.message });
    }
});

// Catch-all to send the React index.html for unknown routes
app.use((req, res, next) => {
    if (req.path.startsWith('/api/') || req.path.startsWith('/socket.io/')) {
        return next();
    }
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    // Auto-connect on server restart if token exists
    if (botData.token) {
        console.log('Attempting server-side auto-connect...');
        try {
            discordClient = await createClient(botData.token);
            console.log('Server-side auto-connect successful.');
        } catch (err) {
            console.error('Server-side auto-connect failed:', err.message);
        }
    }
});

/**
 * Helper function to extract stats from LS-RCR profile page
 */
async function getStatsFromPage($, realUsername, url) {
    const getVal = (label) => $(`td:contains("${label}")`).next().text().trim();

    // Avatar URL extraction
    let avatarUrl = null;
    const imgAvatar = $('.avatar img').attr('src') || $('img.img-rounded').attr('src') || $('img.img-fluid').attr('src');
    const divAvatar = $('.avatar-container').attr('style');

    if (imgAvatar) {
        if (imgAvatar.startsWith('http')) {
            avatarUrl = imgAvatar;
        } else if (imgAvatar.startsWith('//')) {
            avatarUrl = 'https:' + imgAvatar;
        } else {
            avatarUrl = `https://ls-rcr.com${imgAvatar.startsWith('/') ? '' : '/'}${imgAvatar}`;
        }
    } else if (divAvatar && divAvatar.includes('url(')) {
        const match = divAvatar.match(/url\(['"]?(.*?)['"]?\)/i);
        if (match && match[1]) {
            const bgUrl = match[1];
            if (bgUrl.startsWith('http')) {
                avatarUrl = bgUrl;
            } else if (bgUrl.startsWith('//')) {
                avatarUrl = 'https:' + bgUrl;
            } else {
                avatarUrl = `https://ls-rcr.com${bgUrl.startsWith('/') ? '' : '/'}${bgUrl}`;
            }
        }
    }

    if (!avatarUrl) {
        avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(realUsername)}&background=2B2D31&color=fff&size=256`;
    }

    // Factions (Server Groups)
    const factions = [];
    const serverGroupsHeader = $('h2, h3, h4, h5').filter((i, el) => $(el).text().includes('Server Groups'));
    if (serverGroupsHeader.length) {
        serverGroupsHeader.nextAll('p, div').first().find('img, .badge, .label').each((i, el) => {
            const name = $(el).attr('title') || $(el).attr('alt') || $(el).text().trim();
            if (name && name.length > 1 && name !== 'None' && !factions.includes(name)) factions.push(name);
        });
    }

    // Groups (Group Memberships)
    const groups = [];
    const groupMembershipsHeader = $('h2, h3, h4, h5').filter((i, el) => $(el).text().includes('Group Memberships'));
    if (groupMembershipsHeader.length) {
        groupMembershipsHeader.nextAll('p, div').first().find('img, .badge, .label, a').each((i, el) => {
            const text = $(el).attr('title') || $(el).attr('alt') || $(el).text().trim();
            if (text && text.length > 1 && text !== 'None' && !text.includes('Statistics') && !groups.includes(text)) {
                groups.push(text);
            }
        });
    }

    // Activity Percentages
    let policePct = '0%';
    let criminalPct = '0%';
    $('script').each((i, el) => {
        const content = $(el).html();
        if (content && content.includes('Police') && content.includes('Criminal') && content.includes('data:')) {
            const labelsMatch = content.match(/labels:\s*\[(.*?)\]/);
            const dataMatch = content.match(/data:\s*\[([\d,\s]+)\]/);
            if (labelsMatch && dataMatch) {
                const labels = labelsMatch[1].split(',').map(s => s.replace(/['"]/g, '').trim());
                const data = dataMatch[1].split(',').map(s => parseFloat(s.trim()) || 0);
                const total = data.reduce((sum, val) => sum + val, 0);
                if (total > 0) {
                    const polIdx = labels.findIndex(l => l.toLowerCase() === 'police');
                    const crimIdx = labels.findIndex(l => l.toLowerCase() === 'criminal');
                    if (polIdx !== -1) policePct = ((data[polIdx] / total) * 100).toFixed(1) + '%';
                    if (crimIdx !== -1) criminalPct = ((data[crimIdx] / total) * 100).toFixed(1) + '%';
                }
            }
        }
    });

    return {
        score: getVal('Score'),
        lastSeen: getVal('Last seen'),
        activity: getVal('Activity'),
        joined: getVal('Joined'),
        robberies: getVal('Robberies') || '0',
        hitContracts: getVal('Hit contracts') || '0',
        factions,
        groups,
        policePct,
        criminalPct,
        avatarUrl
    };
}

/**
 * Helper function to create the stats embed
 */
function createStatsEmbed(username, stats, url, client) {
    return new EmbedBuilder()
        .setTitle(`<:dot:1502761998599979130> ${username}'s Profile`)
        .setThumbnail(stats.avatarUrl)
        .setColor('#1a1a1a')
        .setDescription([
            `<a:fstats:1502790793352577184> **Stats:**`,
            `*   Score: ${stats.score}`,
            `*   Last Seen: ${stats.lastSeen}`,
            `*   Activity: ${stats.activity}`,
            `*   Joined: ${stats.joined}`,
            `\n<:fcommunity:1502770043354742835> **Factions:**`,
            `*   ${stats.factions.join(', ') || 'None'}`,
            `\n**Groups:**`,
            `*   ${stats.groups.join(', ') || 'None'}`,
            `\n**Stats:**`,
            `*   Police: ${stats.policePct}`,
            `*   Criminal: ${stats.criminalPct}`,
            `\n**Crime:**`,
            `*   Robberies: ${stats.robberies}`,
            `*   Hit Contracts: ${stats.hitContracts}`
        ].join('\n'))
        .setFooter({ text: 'Nexus', iconURL: (typeof client !== 'undefined' ? client : discordClient).user.displayAvatarURL() });
}

// Bot auto-connects in server.listen using the stored token.


