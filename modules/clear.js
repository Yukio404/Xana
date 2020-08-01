const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix
const fs = require('fs')

module.exports = (msg) => {

    if (msg.content.startsWith(prefix + "clear")) {
        if (!msg.member.hasPermission('ADMINISTRATOR')) {

            const clearEmbed = new Discord.MessageEmbed()
                .setTitle('Clear')
                .setColor('#ff0000')
                .setDescription('You don\'t have the permission to do that !')
                .setTimestamp()
            msg.channel.send(clearEmbed)
            console.log(`${msg.author.username} want to clear but failed`)
            fs.appendFile('logs/ClearLogs.txt', `\n${msg.author.username} want to clear but failed`, function (erreur) {
                if (erreur) {
                    console.log(erreur)
                }
            })

        } else {
            const args = msg.content.slice(prefix.length).trim().split(' ')
            const amount = args[1]

            if (!amount) {
                const clearEmbed = new Discord.MessageEmbed()
                    .setTitle('Clear')
                    .setColor('#ff0000')
                    .setDescription('You didn\'t provide an amount of message to clear !')
                    .setTimestamp()
                msg.channel.send(clearEmbed)
                console.log(`${msg.author.username} want to clear but didn't provide a number of messages to delete`)
                fs.appendFile('logs/ClearLogs.txt', `\n${msg.author.username} want to clear but didn't provided a number of messages to delete`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            } else if (amount > 100) {
                const muteEmbed = new Discord.MessageEmbed()
                    .setTitle('Clear')
                    .setColor('#ff0000')
                    .setDescription('You cannot clear more than 100 messages at once !')
                    .setTimestamp()
                msg.channel.send(muteEmbed)
                console.log(`${msg.author.username} want to clear but provide more than 100 messages`)
                fs.appendFile('logs/ClearLogs.txt', `\n${msg.author.username} want to clear but provided more than 100 messages`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            } else if (amount < 1) {
                const muteEmbed = new Discord.MessageEmbed()
                    .setTitle('Clear')
                    .setColor('#ff0000')
                    .setDescription('You need to delete at least one message !')
                    .setTimestamp()
                msg.channel.send(muteEmbed)
                console.log(`${msg.author.username} want to clear but didn't provide at least one message`)
                fs.appendFile('logs/ClearLogs.txt', `\n${msg.author.username} want to clear but didn't provided at least one message`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            } else {
                msg.delete()
                msg.channel.messages.fetch({
                    limit: amount
                }).then(messages => {
                    msg.channel.bulkDelete(messages)
                });
                console.log(`${msg.author.username} clear`, `${amount}`.red, `messages`)
                fs.appendFile('logs/ClearLogs.txt', `\n${msg.author.username} clear ${amount} messages`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            }


        }


    }
}