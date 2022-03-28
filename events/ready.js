const { client } = require("../index");

module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        const newActivity = "FALSK VIPPS BOT";
        bot.client.user.setActivity(newActivity,{type: `PLAYING`});
    }
}