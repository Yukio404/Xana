const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix
const ms = require("ms")
const fs = require('fs')

module.exports = async (msg) => {
    if (msg.content.startsWith(prefix + 'mute')) {
        if (!msg.member.hasPermission('ADMINISTRATOR')) {

            const clearEmbed = new Discord.MessageEmbed()
                .setTitle('Mute')
                .setColor('#ff0000')
                .setDescription('You don\'t have the permission to do that !')
                .setTimestamp()
            msg.channel.send(clearEmbed)
            console.log(`${msg.author.username} want to mute but failed`)
            fs.appendFile('logs/MuteLogs.txt', `\n${msg.author.username} want to mute but failed`, function (erreur) {
                if (erreur) {
                    console.log(erreur)
                }
            })

        } else {

            /*
            const args = msg.content.slice(prefix.length).trim().split(' ')
            var tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

            if (!args[1]) {
                const muteEmbed = new Discord.MessageEmbed()
                    .setTitle('Mute')
                    .setColor('#ff0000')
                    .setDescription('You didn\'t provide a username to mute !')
                    .setTimestamp()
                msg.channel.send(muteEmbed)
                console.log(`${msg.author.username} want to mute but provide a username to mute`)
                fs.appendFile('logs/MuteLogs.txt', `\n${msg.author.username} want to mute but provide a username to mute`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            } else if (!args[2]) {
                const muteEmbed = new Discord.MessageEmbed()
                    .setTitle('Mute')
                    .setColor('#ff0000')
                    .setDescription('You didn\'t specify a time !')
                    .setTimestamp()
                msg.channel.send(muteEmbed)
                console.log(`${msg.author.username} want to mute but didn't specify a time`)
                fs.appendFile('logs/MuteLogs.txt', `\n${msg.author.username} want to mute but didn't specify a time`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            }


            let muterole = msg.guild.roles.cache.find(muterole => muterole.name === "muted")

            if (!muterole) {
                try {
                    muterole = await msg.guild.roles.create({
                        data: {
                            name: "muted",
                            color: "#ff0000",
                            permissions: "NONE"
                        }
                    })

                } catch (e) {
                    console.log(e.stack)
                }
            }

            let mutetime = args[2]

            await (tomute.roles.add(muterole))
            const muteEmbed = new Discord.MessageEmbed()
                .setTitle('Mute')
                .setColor('#ff0000')
                .setDescription(`${tomute.user.tag} has been muted for ${ms(ms(mutetime))} !`)
                .setTimestamp()
            msg.channel.send(muteEmbed)

            console.log(`${tomute.user.tag} has been muted for ${ms(ms(mutetime))}`)
            fs.appendFile('logs/MuteLogs.txt', `\n${tomute.user.tag} has been muted for ${ms(ms(mutetime))}`, function (erreur) {
                if (erreur) {
                    console.log(erreur)
                }
            })

            setTimeout(function () {
                tomute.roles.remove(muterole)
                msg.channel.send(`${tomute} has been unmuted!`)
            }, ms(mutetime))

            console.log(`${tomute} has been unmuted`)
            fs.appendFile('logs/MuteLogs.txt', `\n${tomute} has been unmuted`, function (erreur) {
                if (erreur) {
                    console.log(erreur)
                }
            })

        } */

    }
}
