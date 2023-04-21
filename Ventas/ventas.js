const fs = require("fs");

fs.readFile("ventas.txt", "utf8", (error, datos) => {
    if (error) {
        console.error("Se ha generado un error al leer el archivo");
    } else {
        const compradores = datos.split("\n");
        let total = 0; // variable para almacenar el total de venta
        console.log("- - - - - - - - - - - - - - -");
        console.log("VENTAS DEL DÍA");
        console.log("- - - - - - - - - - - - - - -");
        console.log(`Vendedor: Vicente`);
        console.log("- - - - - - - - - - - - - - -");

        compradores.forEach((comprador) => {
            const compra = comprador.split(",");
            const cantidad = parseInt(compra[0]);
            const precio = parseFloat(compra[2]);
            const producto = compra[1];
            const subtotal = cantidad * precio;
            total += subtotal;

            console.log(`${cantidad}  ${producto} ... $${precio.toFixed(2)}`);
        });

        console.log("- - - - - - - - - - - - - - -");
        console.log(`VENTA TOTAL  $${total.toFixed(2)}`);
        console.log("- - - - - - - - - - - - - - -");
    }
});





