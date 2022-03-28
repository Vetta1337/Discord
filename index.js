const Discord = require("discord.js")
require("dotenv").config()

// const generateWelcome = require("./generateWelcome")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
let bot = {
    client, 
    prefix: "",
    owners: ["257107960331763716"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection
client.buttons = new Discord.Collection

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashcommands(bot, false)
client.loadButtons(bot, false)



module.exports = bot

client.login(process.env.TOKEN)