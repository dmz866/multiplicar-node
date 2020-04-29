const options = {
    base: { demand: true, alias: 'b' },
    limite: { default: 10, alias: 'l' }
};

const argv = require('yargs')
    .command('listar', 'Imprimir la tabla de multiplicar', options)
    .command('crear', 'Crear la tabla de multiplicar', options)
    .help()
    .argv;

//node app listar -b 3
//node app listar --base 3

module.exports = {
    argv
};