const message = require('discordjs-logger')
const fs = require('fs')

module.exports = (channel, message) => {
    console.log(`Channel ${channel.name} Create`)
    fs.appendFile('logs/channelLogs.txt', `\nChannel ${channel.name} Create`, function (erreur) {
        if (erreur) {
            console.log(erreur)
        }
    })
}