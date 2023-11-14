const { Telegraf } = require('telegraf')

const bot = new Telegraf('6543223713:AAEiML8gobVwGsoA2xsqcZczO68smNv4USk')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()