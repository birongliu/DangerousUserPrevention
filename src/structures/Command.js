class Command {
    /**
     * Creates a command
     * @param {object} bot Main bot object
     * @param {string} category The command's category, inherited from it's folder
     * @param {string} id The command's name, inherited from it's filename
     * @param {object} params The command's paramaters
     */

    constructor(bot, category, id, params) {
        this.bot = bot;
        this.category = category;
        this.id = id;

        if (params) {
            this.aliases = params.aliases ? params.aliases : [];
            this.usage = params.usage;
            this.description = params.description;
            this.nsfwOnly = params.nsfwOnly ? params.nsfwOnly : false;
            this.ownerOnly = params.ownerOnly ? params.ownerOnly : false;
            this.examples = params.examples ? params.examples : [];
            this.botPermissions = params.botPermissions || '';
            this.userPermissions = params.userPermissions || '';
        }
    }
}

module.exports = Command;