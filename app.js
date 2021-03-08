//const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const  argv  = require('./config/yargs')

console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base:yargs', argv.base);
//const [, , arg3 = 'base=5'] = process.argv;
//const[, base] = arg3.split('=');
//const base = 7;

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));