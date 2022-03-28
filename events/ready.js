const { client } = require("../index");

module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
        const newActivity = "Falsk VIPPS Bot";
        bot.client.user.setActivity(newActivity,{type: `PLAYING`});
        
    }
}