const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix

module.exports = (msg) => {
    if (msg.content.startsWith(prefix + 'help')) {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setColor('#ff0000')
            .setAuthor('Umbradge')
            .addField('Kick', `${prefix}kick @user reason`)
            .addField('Ban', `${prefix}ban @user reason`)
            .addField('Unban', `${prefix}unban @user`)
            .addField('Mute', `~~${prefix}mute @user time(s, m, or h)~~ ne marche pas encore`)
            .addField('Clear', `${prefix}clear numberOfMessage`)
            .setTimestamp()

        msg.channel.send(helpEmbed)
    }
}
