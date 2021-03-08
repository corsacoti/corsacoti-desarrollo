const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, hasta = 10, listar = false) => {



    let salida = '', consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {

        console.log('===================='.green)
        console.log('    Tabla del:  ', colors.yellow(base))
        console.log('===================='.green)
        console.log(consola);

    }
    /*
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`tabla-${base}.txt creado`);
    })*/

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.rainbow;


}


module.exports = {
    crearArchivo
}