/* const Discord = require('discord.js'); // Discord Client
const bot = new Discord.Client();
*/

const botconfig = require("./botconfig.json");
const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '290724754308988928'
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

bot.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
    console.log("Finished Loading Bot and Servers");
})

bot.on('message', message => {
    let voiceChannel = message.member.voiceChannel;
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Ready to Serve!");
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    console.log(message.content);
    if (message.content === '/join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (voiceChannel) {
            voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    message.reply('I have successfully connected to the channel!');
                    // console.log(connection);
                })
                .catch(console.log);
        } else {
            message.reply('You need to join a voice channel first!');
        }
    }
    else if (message.content === '/play') {
        message.channel.send('My Message')
    }
    // else if (message.content === '/play') {
    //     // Only try to join the sender's voice channel if they are in one themselves
    //     if (voiceChannel) {
    //         voiceChannel.join()
    //             .then(connection => { // Connection is an instance of VoiceConnection
    //                 var file = './P1.mp3';
    //                 // connection.playArbitraryInput(file, { volume: 0.5 });
    //                 const dispatcher = connection.playFile(file);
    //                 dispatcher.on('end', () => {
    //                     // The song has finished
    //                 });
    //                 dispatcher.on('error', e => {
    //                     // Catch any errors that may arise
    //                     console.log(e);
    //                 });
    //                 dispatcher.setVolume(0.5); // Set the volume to 50%
    //                 dispatcher.setVolume(1); // Set the volume back to 100%
    //                 console.log(dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for
    //                 dispatcher.pause(); // Pause the stream
    //                 dispatcher.resume(); // Carry on playing
    //                 dispatcher.end(); // End the dispatcher, emits 'end' event
    //             })
    //             .catch(console.log);
    //     }
    // }
});

bot.login(botconfig.token);