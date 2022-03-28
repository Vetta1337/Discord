module.exports = {
    name: "pong",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({bot, message, args}) => {
        message.reply("Ping")
    }
}