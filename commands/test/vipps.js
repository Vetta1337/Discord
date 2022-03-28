const {
    Discord
} = require("discord.js")
const generateVipps = require("../../generateVipps")

module.exports = {
    name: "vipps",
    category: "test",
    permissions: [],
    devOnly: false,
    run: async ({
        bot,
        message,
        args
    }) => {




        const img = await generateVipps(args[0], args[1], args[2], args[3], args[4])
        let tall = Math.floor(Math.random() * 10)
        console.log("Tall: " + tall)
        if (tall === 8) {
            message.channel.send({
                content: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
                files: [img]
            })
        } else {
            message.channel.send({
                content: `Made by <@257107960331763716>`,
                files: [img]
            })
        }
    }



}