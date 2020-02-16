const { Command, flags } = require('@oclif/command');
var server = require('../server')
class TheCommand extends Command {
    async run() {
        server();
    }
}
TheCommand.args = [
    { name: 'prefix' },
];

TheCommand.description = `Writes the app actions, saga
...
Extra documentation goes here
`;

TheCommand.flags = {
    name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = TheCommand;
