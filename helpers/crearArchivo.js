const fs = require ('fs');
require('colors');

const crearArchivo =async(base=5,flag=false,limite)=>{
    try{
        let consola =`==========tabla del ${base}===============\n`.bgCyan;
        let salida =`===========tabla del ${base}===============\n`;
        for (let i=1;i <=limite;i++){
            salida +=`${base} x ${i} = ${(base*i)} \n`;
            consola +=`${base} x ${i} ${'='.red} ${(base*i)} \n`
        }
        //con esta linea se crea un archivo en una ruta
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        let nombre=`tabla-${base}.txt creado`;
        if (flag) console.log(consola);
        return nombre;

    }catch(error){
        throw error;
    }
}
module.exports={crearArchivo};