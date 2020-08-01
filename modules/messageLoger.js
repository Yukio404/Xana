const fs = require('fs')
const message = require('discordjs-logger')

module.exports = (message) => {
    if (message.author.id == '718536431601057802') {
        console.log('Message from bot')
        fs.appendFile('logs/msgLogs.txt', `\nMessage from bot`, function (erreur) {
            if (erreur) {
                console.log(erreur)
            }
        })
    } else {
        console.log(`${message.author.username}`.blue, `from`, `${message.guild.name}`.red, `: ${message}`)
        fs.appendFile('logs/msgLogs.txt', `\n${message.author.username} from ${message.guild.name}: ${message}`, function (erreur) {
            if (erreur) {
                console.log(erreur)
            }
        })

    }
}