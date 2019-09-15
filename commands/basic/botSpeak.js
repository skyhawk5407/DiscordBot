
// acquire required classes 
const { MessageAttachment } = require('discord.js');
const commando = require('discord.js-commando');

class bot extends commando.Command {
    constructor(client) {
        
        // passing in client, + object with properties
        super(client, {
            name: 'bot',
            group: 'basic',
            memberName: 'bot',
            description: 'basic chat commands with bot',
            examples: ['bot message'],
            args: [
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });
    }

    // this code runs everytime class is called
    async run(message, {content}) {
       var user = message.author;
       message.reply("Hi, " + user + ".\nYou said: " + content);
    }
}

// ensure command is exported/imported by bot properly
module.exports = bot;