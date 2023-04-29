const argv =require('./config/configyargs.js');

const {crearArchivo}=require('./helpers/crearArchivo.js')
console.clear();
crearArchivo(argv.b,argv.l,argv.h)
    .then(console.log)
    .catch(console.log.warn);