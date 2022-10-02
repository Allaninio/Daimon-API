const { API } = require('easy-api.ts');
const colors = require('colors/safe');
const pkg = require('./node_modules/easy-api.ts/package.json')

const api = new API({
    port: 3000,
    database: {
        enabled: true,
        type: 'replit'
    }
});
///Online
api.on('ready', () => {
  console.log(colors.green('API started!'))
});
//ERROR
api.on('error', err => {
    console.log(colors.red('APIerror:', err)).catch(console.log)
});
//Route loader
api.routes.load('./routes').then(() => {
    console.log(colors.yellow('Endoints loaded!'))
    console.log(colors.green('Current version:'), colors.blue('easy-api.ts', pkg.version))
  api.connect();
}).catch(console.log);