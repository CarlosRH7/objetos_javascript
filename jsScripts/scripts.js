var numero = 1;
var decimal = 2.3;
var nombre = 'carlos';
var listas = [];
var objeto = {};

var nombres = ['Carlos', 'David', 'Alejandro', 'Chazz'];
var numeros = [23, 2, 4, 8, 9, 8, 1, 3]

// console.log(nombres[2]);
// console.log(nombres.length);

// for (let index = 0; index < numeros.length; index++) {
//     console.log(numeros[index]);
// }
// var numero = 1;
// var edad = '1';

// if(numero === edad){
//     console.log('si son iguales');
// }else{
//     console.log('no son iguales');
// }

// numeros.forEach(element => {
//     // console.log(element);
//     if(element%2 === 0){
//         console.log('El número: ' + element + ', es par');
//     }

// });

// const uno = 3;
// uno = 6;
// // const dos = 56;
// console.log(uno);

var persona = {
    edad:25,
    nombre:'carlos',
    correo:'c.ramirez@aqtiva.mx',
    telefono:'1234567890',
    peliculas:['peli uno', 'peli 2', 'peli 3', 'peli 4']
};

// console.log(persona['peliculas'][3]);
// console.log(persona.peliculas[3]);

var factura = {
    emisor:{
        nombre:'casa campesino',
        direccion:'colonia centro',
        telefono:'123456789',
        rs:'Moral'
    },
    receptor:{
        nombre:'Carlos',
        direccion:'colonia Ramos',
        telefono:'09876543',
        rs:'Fisica'
    },
    concepto:[
        {descripcion:'pala', cantidad:2, precio:200},
        {descripcion:'Lampara', cantidad:1, precio:90},
        {descripcion:'tornillos', cantidad:20, precio:1},
        {descripcion:'caguamas', cantidad:24, precio:190},
    ],
    datos:{
        iva:16,
        pago:'efectivo'
    }
};

// console.log(factura.concepto.length);
let total = 0;

for (let index = 0; index < factura.concepto.length; index++) {
    var precios = factura.concepto[index].precio;
    var cantidades = factura.concepto[index].cantidad;
    var totalConcepto = precios * cantidades;
    // console.log(totalConcepto);
    total += totalConcepto;
    // console.log(total);
    // console.log(factura.concepto[index].descripcion);
}

let iva = factura.datos.iva;
let totalIva = total*iva/100;

console.log("total sin iva: "+total);
console.log("iva: "+totalIva);
console.log("Total con iva: "+ (total+totalIva));
// console.log(factura);
// console.log(factura.concepto[2].descripcion);



