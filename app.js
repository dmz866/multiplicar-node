//const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');
const comando = argv._[0];

//node app listar -b 3
//node app listar --base 3

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log("Archivo creado " + archivo);
        }).catch((error) => {
            console.log(error);
        });
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('No existe ese comando');
}