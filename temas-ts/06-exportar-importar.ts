


import { Producto, calcularIVA2} from "./05-desestructurar-funciones";


const productosN:Producto[]=[
    {
        desc:'Telefono1',
        precio:8738
    },
    {
        desc:'Telefono2',
        precio:927
    },
    {
        desc:'Telefono3',
        precio:87
    },
]
const [Total3, iva3]=calcularIVA2(productosN);
console.log(`Total ${Total3}`);
console.log(`IVA:${iva3}`)