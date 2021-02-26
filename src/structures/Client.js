const load = require("./Util");
const { Client } = require("eris-additions")(require("eris"))

class DUPClient extends Client {
    constructor(bot) {
        super(bot);

        this.commands = [];
        this.events = [];

        this.connect();

        load.all(this)
    }
}

module.exports = DUPClient;