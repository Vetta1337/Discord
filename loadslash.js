const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
let bot = {
    client, 
    prefix: "n.",
    owners: ["257107960331763716"]
}

const guildId = "826520555405574185"

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection

client.loadSlashcommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)

client.loadSlashcommands(bot, false)

client.on("ready", async () => {
    const guild = client.guilds.cache.get(guildId)
    if (!guild)
        return console.error("Target guild not found")

        await guild.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size} slashcommand(s)`)
        process.exit(0)
})

module.exports = bot


client.login(process.env.TOKEN)