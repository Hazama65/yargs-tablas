const yargs = require('yargs');
const { demandOption } = require('yargs');

const argv = require('yargs')
                .options('b',{
                    alias : 'base',
                    demandOption : true,
                    type :'number',
                    describe :'base de la multiplicacion'
                })
                .option('l',{
                    alias :'listar',
                    demandOption:false,
                    type :'boolean',
                    describe:'lista de la multiplicacion',
                    default : false
                })
                .option('h',{
                    alias:'limite',
                    demandOption:false,
                    type:'number',
                    describe:'numero hasta el cual se va a multiplicar',
                    default:10
                })
                .check((argv,options)=>{
                    console.log('yargs',argv);
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                })
                .argv;
module.exports=argv;
