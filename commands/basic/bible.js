
// acquire required classes 
const webLinks = require('./web.json');
const commando = require('discord.js-commando');

class bible extends commando.Command {
    constructor(client) {
        
        // passing in client, + object with properties
        super(client, {
            name: 'bible',
            group: 'basic',
            memberName: 'bible',
            description: 'looks up and retrives bible verse from biblegateway.',
        });
    }

    // this code runs everytime class is called
    async run(message) {
        

    }
}

// ensure command is exported/imported by bot properly
module.exports = bible;