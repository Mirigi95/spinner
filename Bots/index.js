const { Telegraf } = require('telegraf');

const bot = new Telegraf('1035528724:AAF1ILtn7rWyeeTiLmb9DaPROeZMooFVXOU');

bot.start((ctx) => {
    ctx.reply('Welcome to your Telegram bot! Use /help to see available commands.');
});

bot.help((ctx) => {
    ctx.reply('Available commands:\n/start - Start the bot\n/help - Show this message');
});

bot.command('start', (ctx) => {
    ctx.reply('Bot has been started!');
});

bot.hears('hello', (ctx) => {
    ctx.reply('Hello! How can I assist you today?');
});

bot.launch();
