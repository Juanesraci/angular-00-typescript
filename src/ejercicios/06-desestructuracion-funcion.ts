/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    descripcion: string;
    precio: number;
}

/*
const telefono: Producto = {
    descripcion: 'Motorola G8 Plus',
    precio: 200,
}

const tableta: Producto = {
    descripcion: 'Lenovo RX',
    precio: 350,
}
*/

export function calcularISV(productos: Producto[]): [number, number] {

    let total = 0;

    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

/*
const articulos = [telefono, tableta];

const [total, isv] = calcularISV(articulos);

console.log('Total: ', total)
console.log('ISV: ', isv)
*/