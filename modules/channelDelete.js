const message = require('discordjs-logger')
const fs = require('fs')

module.exports = (channel) => {
    console.log(`Channel ${channel.name} Delete`)
    fs.appendFile('logs/channelLogs.txt', `\nChannel ${channel.name} Delete`, function (erreur) {
        if (erreur) {
            console.log(erreur)
        }
    })
}