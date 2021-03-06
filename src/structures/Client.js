const load = require("./Util");
const { Client } = require("eris-additions")(require("eris"))

class DUPClient extends Client {
    constructor(bot, options) {
        super(bot, options);

        this.commands = [];
        this.events = [];

        this.connect();

        load.all(this)

        this.editStatus('online', {
            type: 3,
            name: 'discord.riverside.rocks',
            url: 'https://discord.riverside.rocks'
        })
    }
}

module.exports = DUPClient;
