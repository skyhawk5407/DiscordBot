
// acquire required classes 
const webLinks = require('./web.json');
const commando = require('discord.js-commando');

class devotion extends commando.Command {
    constructor(client) {
        
        // passing in client, + object with properties
        super(client, {
            name: 'devotion',
            group: 'basic',
            memberName: 'devotion',
            description: 'gets the link to dT',
        });
    }

    // this code runs everytime class is called
    async run(message) {
       message.reply(" here is your link:\n" + webLinks.dT);
    }
}

// ensure command is exported/imported by bot properly
module.exports = devotion;