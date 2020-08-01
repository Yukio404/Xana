const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')
const kick = require('./modules/kick.js')
const help = require('./modules/help.js')
const ban = require('./modules/ban.js')
const unban = require('./modules/unban.js')
const mute = require('./modules/mute.js')
const clear = require('./modules/clear.js')
const msgLogger = require('./modules/messageLoger.js')
const channelCreate = require('./modules/channelCreate.js')
const channelDelete = require('./modules/channelDelete.js')

require('colors')

let prefix = config.prefix

bot.on("ready", () => {
    console.log(`╔ Hey, I'm ${bot.user.username}`.rainbow)
    console.log(`╠ My Prefix is ${prefix}`.rainbow)
    console.log(`╠ Creator: Yukio`.rainbow)
    console.log(`╚ I'm on ${bot.guilds.cache.size} servers \n`.rainbow)
})

bot.on('channelCreate', channelCreate)

bot.on('channelDelete', channelDelete)

bot.on('message', msgLogger)


bot.on('message', clear)

bot.on('message', ban)

bot.on('message', unban)

bot.on('message', help)

bot.on('message', kick)

bot.on('message', mute)

bot.login(config.token)