const fs = require('fs');

function encontrarPalabrasMasComunes(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            const palabras = data
                .toLowerCase()
                .split(/[\s,.!?]+/)
                .filter((palabra) => palabra.length > 0);

            const frecuenciaPalabras = {};
            for (const palabra of palabras) {
                if (frecuenciaPalabras[palabra]) {
                    frecuenciaPalabras[palabra]++;
                } else {
                    frecuenciaPalabras[palabra] = 1;
                }
            }

            let palabrasMasComunes = [];
            let frecuenciaMasComun = 0;
            for (const palabra in frecuenciaPalabras) {
                if (frecuenciaPalabras[palabra] > frecuenciaMasComun) {
                    palabrasMasComunes = [palabra];
                    frecuenciaMasComun = frecuenciaPalabras[palabra];
                } else if (frecuenciaPalabras[palabra] === frecuenciaMasComun) {
                    palabrasMasComunes.push(palabra);
                }
            }

            resolve(palabrasMasComunes);
        });
    });
}

encontrarPalabrasMasComunes('documento.txt')
    .then((palabraMasComun) => {
        console.log(`La palabra más común es: ${palabraMasComun}`);
    })
    .catch((error) => {
        console.error(error);
    });