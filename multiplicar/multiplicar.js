const fs = require('fs');
const colors = require('colors');

function listarTabla(base, limite) {
    if (!Number(base) || !Number(limite)) {
        console.log('valores no permitidos');
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`.green);
    }
}

function crearArchivo(base, limite = 10) {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
            if (error) {
                reject(error);
            }

            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};