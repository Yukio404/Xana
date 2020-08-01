const Discord = require('discord.js')
const config = require('../config.json')
var prefix = config.prefix
const fs = require('fs')

module.exports = (msg) => {
    if (msg.content.startsWith(prefix + 'unban')) {

        if (!msg.member.hasPermission('ADMINISTRATOR')) {
            const unbanEmbed = new Discord.MessageEmbed()
                .setTitle('Unban')
                .setColor('#ff0000')
                .setDescription('You don\'t have the permission to do that !')
                .setTimestamp()
            msg.channel.send(unbanEmbed)
            console.log(`${msg.author.username} want to unban but failed`)
            fs.appendFile('logs/UnbanLogs.txt', `\n${msg.author.username} want to unban but failed`, function (erreur) {
                if (erreur) {
                    console.log(erreur)
                }
            })
        } else {
            const args = msg.content.slice(prefix.length).trim().split(' ')
            let userID = args[1]
            if (!args[1]) {
                const unbanEmbed = new Discord.MessageEmbed()
                    .setTitle('Unban')
                    .setColor('#ff0000')
                    .setDescription('You didn\'t provide an id to unban !')
                    .setTimestamp()
                msg.channel.send(unbanEmbed)
                console.log(`${msg.author.username} want to unban but username not provided`)
                fs.appendFile('logs/UnbanLogs.txt', `\n${msg.author.username} want to unban but username not provided`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            } else {

                msg.guild.fetchBans().then(bans => {
                    if (bans.size == 0) {
                        const unbanEmbed = new Discord.MessageEmbed()
                            .setTitle('Unban')
                            .setColor('#ff0000')
                            .setDescription(`No user has been banned !`)
                            .setTimestamp()
                        msg.channel.send(unbanEmbed)
                        console.log(`${msg.author.username} try to unban but no user has been banned !`)
                        fs.appendFile('logs/UnbanLogs.txt', `\n${msg.author.username} try to unban but no user has been banned !`, function (erreur) {
                            if (erreur) {
                                console.log(erreur)
                            }
                        })

                    }
                    let bUser = bans.find(b => b.user.id == userID)
                    if (!bUser) {
                        const unbanEmbed = new Discord.MessageEmbed()
                            .setTitle('Unban')
                            .setColor('#ff0000')
                            .setDescription(`I can't find ${userID} in the list of bans !`)
                            .setTimestamp()
                        msg.channel.send(unbanEmbed)
                        console.log(`${msg.author.username} try to unban but`, `${userID}`.red, `was not found in the list of bans !`)
                        fs.appendFile('logs/UnbanLogs.txt', `\n${msg.author.username} try to unban but ${userID} was not found in the list of bans !`, function (erreur) {
                            if (erreur) {
                                console.log(erreur)
                            }
                        })

                    }
                    msg.guild.members.unban(bUser.user)
                })

                const unbanEmbed = new Discord.MessageEmbed()
                    .setTitle('Unban')
                    .setColor('#ff0000')
                    .setDescription(`${userID} Has been unbaned :white_check_mark:`)
                    .setTimestamp()
                msg.channel.send(unbanEmbed)
                console.log(`${msg.author.username} unban`, `${userID}`.red)
                fs.appendFile('logs/UnbanLogs.txt', `\n${msg.author.username} unban ${userID}`, function (erreur) {
                    if (erreur) {
                        console.log(erreur)
                    }
                })

            }
        }

    }

}
