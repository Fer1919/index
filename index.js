/*
-------------------------------------------------//17-11-2021



--------------------------------------------------------1)
function BigUser() {

    this.name = "John";
  
    //return {
      //     name: "Godzilla"
         //  };  // <-- devuelve este objeto
  }
  
  alert( new BigUser().name );  // Godzilla, recibió ese objeto
  
--------------------------------------------------------2)

  function SmallUser() {

    this.name = prompt('ingrese su nombre');
  
   // return; // <-- devuelve this
  }
  
  alert( new SmallUser().name );  // John
  
//-----------------------------------------------------3)
  function Persona() {
      this.nombre='fer';
      this.apellido='espinosa';
      this.edad=39;

      this.nombre_completo=function () {
          return this.nombre+' '+this.apellido;
      }
  }
let fer=new Persona();
console.log(fer);
console.log(fer.edad);
console.log(fer.nombre_completo());

//---------------------------------------------------22-11-2021
//---------1)


let a,b;
a=10;b=5;
resultado=a+b;
alert(`la suma es: ${resultado}`)

//----------2)


let a,b;
a=10; b=5;
resultado=a*b;
alert(`la variable a contiene  ${a}`)
alert(`la variable b contiene  ${b}`)
alert(`la multi es: ${resultado}`)

//-----------------3)
let dato, resultado;
dato=window.prompt(' ingrese su nombre')
resultado= ('su nombre es: '+ `${dato}`)
alert(resultado)
*/
//-------------------------23/Dic/2021
//------------------01)
// let dato, resultado;
// dato=prompt('ingrese su nombre')
// resultado=('su nombre es: '+`${dato}`)
// alert(resultado)

// let dato, resultado;
// dato=prompt('ingrese su nombre')
// resultado=('el chico del skaters es: '+ `${dato}`)
// alert(resultado)
//---------------------02)
// let a, b;
// a= window.prompt("Introduce número ?", "0");
// num1 = parseInt(a);
// b= window.prompt("Introduce número ?", "0");
// num2 = parseInt(b);
// num=num1+num2;

// document.write('el resultado de la suma es: '+` ${num} `);

// let a,b;

// a=prompt('ingrese su numero')
// num1=parseInt(a);

// b=prompt('ingrese su numero')
// num2=parseInt(b);

// num=num1*num2;

// alert('el producto es: '+`${num}`)

//---------------------03)
// a=5;
// b=10
// resultado=a+b;
// alert(`${resultado}`)
/*
----------------------04-01-2022

--------------------1)

let a, b;
a=5;
b=10;
resultado=a*b;
alert(`${resultado}`)


let a, b;
a=prompt('cifra uno');
a1=parseInt(a);
b=prompt('cifra dos');
b1=parseInt(b)
resultado=a1*b1;
alert(`${resultado}`)


let dato, resultado
dato=prompt('ingrese su nombre')
resultado=(`su nombre es: ${dato} ffffffffff`)
alert(`${resultado}`)



let dato, valor;

dato=prompt('ingrese un valor')
valor=parseInt(dato);

resultado=valor*2;


document.getElementById('lego').innerHTML=(`el doble de valor es: ${resultado}`)



  let contador=1;
  let dato, num;
  //let num;
  while (contador<5)
  {
   dato=prompt('Introduce número del 1 al 10:','');
   num=parseInt(dato);
  document.write(` <br> El numero introducido es ${num}</br> `);
  document.write(` <br> El contador es ${contador} </br> `);
  contador = contador +1 ;
  }
  document.write( ` </br><h2>
  Fin del programa
  contador ya NO es menor que 5.
  </h2>
  `);
  document.write (`</br> Ultimo numero introducido es ${num}`)
  document.write (`</br> Ultimo numero actual ${dato}`)
  document.write (`</br> contador actual ${contador}`)
  


  let dato1, dato2, num1,num2, resultado;
  dato1=prompt('ingrese su primer numero');
  num1=parseInt(dato1);

  dato2=prompt('ingrese segundo numero ');
  num2=parseInt(dato2);

  if (num1>num2){
    resultado=('el primero el mayor es:')
  }
  else{
    resultado=(' el segundo el mayor es:')
  }
  if(num1==num2)
  {
    resultado=('son iguales')
  }

  document.write(` ${resultado}`)
  

  let dato1, dato2, dato3;
  let nota1, nota2, nota3;

  dato1=prompt('primer nota');
  nota1=parseInt(dato1);

  dato2=prompt('segunda nota');
  nota2=parseInt(dato2);

  dato3=prompt('ingrese nota 3');
  nota3=parseInt(dato3);

  promedio=(nota1+nota2+nota3)/3;

  if(promedio<5)
  {
    resultado='reprobaste'
  }
  else
  {
    resultado=' aprobaste'
  }

document.write(`${resultado}`)



let suerte = (Math.random() * 10);
let dado = parseInt(suerte) ;
let obj1=document.getElementById("lego")
if (dado>3)
{
obj1.innerHTML= `Has ganado, ha salido el numero ${dado} `;
}
else
{
obj1.innerHTML=`Lo siento, ha salido el numero ${dado} `;
}


let suerte=(Math.random()*10);
let dado=parseInt(suerte)
let obj1=document.getElementById('lego')

if (dado>5) {
  obj1.innerHTML=`has ganado, ha salido el numero ${dado}`
}
else{
  obj1.innerHTML=`has perdido, salio el numero ${dado}`
}

let aux
let marca,modelo,descuento = 0;
marca = prompt("Marca?", "0");
modelo = prompt("Modelo?", "0");
//Si la marca ==ford Y el modelo== fiesta
if ((marca=="ford") && (modelo =="fiesta"))
{
descuento = 5;
}
if ((marca=="ford") && (modelo =="focus"))
{
descuento = 10;
}
document.write(`<h3>Su descuento es ${descuento} </h3>`);


function hi(nombre) {

  document.write(`hola ${nombre}`)
}


function calculo(numero=1) {
  let calculo=numero*numero;
}

let num=1; let dato;

while (num<10) {
  dato=prompt('ingrese el numero')
  num=parseInt(dato)
document.write(`Numero actual: ${num}`)
}

document.write('Fin del Programa')

-----------------------------------------09-01-2022

--------------------------------01)

let num=1, dato;
while (num<10) {
  dato=prompt('Ingrese un número')
  num=parseInt(dato);
  document.write(`El numero ingresado es: ${num}<br>`)
}
document.write(`fin del programa, el ultimo numero ingresado es: ${num}`)

--------------------------------02

let edad, final;
edad=prompt('Ingrese su edad')
if (isNaN(edad)) {
  final='el valor es invalido'
}
else{
  final=(edad<18) ?'ud, es menor de edad': 'ud. es mayor de edad';
}
document.write(`${final}`)


let mes;

mes=prompt('ingrese mes')
mes=parseInt(mes)

if (mes==1||mes==3||mes==5||mes==7||mes==8||mes==12) {
  document.write('este mes tiene 31 días')
}

else if(isNaN(mes)){
  document.write('este es un valor invalido')
}

else if (mes>12) {
  document.write('sorry, but a no valid mes')
}

else {
  mes=(mes==2)?'este mes tiene 28 días':'este mes tiene 30 días'
}
document.write(`${mes}`)


let mes;

mes=prompt('ingrese mes');
mes=parseInt(mes);

if (mes==1||mes==3||mes==5||mes==8||mes==7||mes==12) {
  document.write('El mes que ud. escogió, es de 31 días')
}

else if (mes>12) {
  document.write('este mes no existe')
}

else if (isNaN(mes)) {
  document.write('ingreso valor invalido')
}


else{
  mes=(mes==2)?'este mes tiene 28 días':'este mes tiene 30 días'
}
document.write(`${mes}`)

|--------------------------------------------03)
let mes;
mes=prompt('Ingrese mes')
mes=parseInt(mes)

if (mes==1||mes==3||mes==5||mes==8||mes==12) {
  document.write(`el mes contiene 31 días`)
}
else if (mes>12) {
  document.write('El mes no existe')
}
else if (isNaN(mes)) {
  document.write('Valor ingresado es invalido')
}
else {
  mes=(mes==2)?'Febrero tiene 28 días':'El mes tiene 30 días'
}
document.write(`${mes}`)

//1-3-5-7-8-12


let mes;
mes=prompt('ingrese el mes')
mes=parseInt(mes)

if (mes==1||mes==3||mes==5||mes==7||mes==8||mes==12) {
  document.write('este mes tiene 31 días')
}
else if (mes>12) {
  document.write('este mes no existe')

  
}

else if (mes<=0) {
  document.write('este mes tampoco existe')
}

else if (isNaN(mes)) {
  document.write('el valor ingresado es invalido')
}
else{
  mes=(mes==2)?'Ferbrero tiene 28 días':'el mes tiene 30 dias'
  document.write(`${mes}`)
}


// function suma(n1,n2) {
//   return n1+n2;
// }

-------------------------------------------------------10-01-2022
----------------------------------------------04)


let mult=function(x,y){
  return x*y
}

let expon=function(x,y){
  return Math.pow(x,y);
}



let suma=(x,y)=>{return x+y};

var resultado=mult(5,2);
alert(resultado);

resultado=suma(3,4);
alert(resultado);

resultado= expon(2,5);
alert(resultado);

---------------------------------------------05)

let mult=function(x,y) {
  return x*y
}
let expon=function(x,y) {
  return Math.pow(x,y)
}

let suma=(x,y)=>{
  return x+y};

 resultado=mult(5,2);
alert(resultado)

resultado=suma(3,4);
alert(resultado)

resultado=expon(2,5);
alert(resultado);


-------------------------------------------------06)





x=prompt('ingrese primer valor para multiplicar, sumar y exponer')
x=parseInt(x)

y=prompt('ingrese segundo valor para multiplicar, sumar y exponer')
y=parseInt(y)

  mult= function (x,y) {
  return x*y
  }

    expon=function (x,y) {
    return Math.pow(x,y)
    }

    suma=(x,y)=>{
    return x+y;
    }

    resultado=mult(x,y);
    alert(`El valor de la multiplicacion es: ${resultado}`);

    resultado=suma(x,y);
    alert(`El valor de la suma es: ${resultado}`);


    resultado=expon(x,y);
    alert(`El valor de la potencia es: ${resultado}`);



let mes;
mes=prompt('ingrese el mes')
mes=parseInt(mes)

if (mes==1||mes==3||mes==5||mes==7||mes==8||mes==12) {
  document.write('este mes tiene 31 días')
}
else if (mes>12) {
  document.write('este mes no existe')

  
}

else if (mes<=0) {
  document.write('este mes tampoco existe')
}

else if (isNaN(mes)) {
  document.write('el valor ingresado es invalido')
}
else{
  mes=(mes==2)?'Ferbrero tiene 28 días':'el mes tiene 30 dias'
  document.write(`${mes}`)
}
1-3-5-7-8-12





let mes = prompt ("ingrese un numero de 1 al 12 correspondiente al mes", "");

if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)
{
  resultado= "el mes tiene 31 dias"
}

else if (mes==4 || mes==6 || mes==9 || mes==11)
{
  resultado= "el mes tiene 30 dias"  
}

else if (mes==2)
{
  resultado= "el mes tiene 28 dias"
}

else if (mes==null || mes=="")
{
  resultado= "No ha ingresado ningun valor"
}

else
{
  resultado= "el valor es incorrecto"
}

alert (`${resultado}`);




let mes
mes=prompt('Ingrese el mes')
mes=parseInt(mes)

if (mes==1||mes==03||mes==5||mes==7||mes==8||mes==12) {
  alert('este mes tiene 31 días')
}

else if (mes<=0) {
  alert('Este mes no existe')
}
else if (mes>12) {
  alert('Este mes tampoco existe')
}


else if (mes==' ') {
  alert('Ud no ingreso ningun valor')
}

else if (isNaN(mes)) {
  alert('El valor no es valido')
}

else{
  mes=(mes==2)?'Este mes es febrero y tiene 28 días':'Este mes tiene 30 días'
  alert(`${mes}`)
}


let cadena='',i;
for(i=0;i<5;i++)//donde esta, hasta donde llego, que hago
{
cadena=cadena+ `el numero es ${i}<br/>`;
}

document.getElementById('central').innerHTML=cadena;




let cadena='',i;

for(i=1;i<6;i++)
{
  cadena=cadena+`El numeroe es ${i} </br>`
}

document.getElementById('central').innerHTML=cadena;

*/

let cadena ='';
for(let i=0;i<6;i++){
  cadena=cadena+`${i}`
}
document.getElementById('central').innerHTML=cadena;













































