const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        
        // passing in client, + object with properties
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die',
        });
    }

    // this code runs everytime class is called
    async run(message, args) {
        var roll = Math.floor(Math.random() * 6 ) + 1;
        message.reply("You rolled a " + roll);
    }
}

// ensure command is exported/imported by bot properly
module.exports = DiceRollCommand;