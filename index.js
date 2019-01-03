/* const Discord = require('discord.js'); // Discord Client
const bot = new Discord.Client();
*/

const botconfig = require("./botconfig.json");

const commando = require('discord.js-commando');
const bot = new commando.Client({
    author: "#7005"
});
 
bot.registry
// every command neds to be registered in a group
.registerGroups([
['random', 'Random'],
['basic', 'Basic']
]);
// register default commands like help.
bot.registry.registerDefaults();

// to Load the commands
bot.registry.registerCommandsIn(__dirname + "/commands");

// display on start
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Ready to Serve!");
});

bot.login(botconfig.token);