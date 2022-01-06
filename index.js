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
*/
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