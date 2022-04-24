'use strict';

const hallarMenor = document.getElementById('smaller');
const iguales = document.getElementById('equals');
const intercambiar = document.getElementById('interchange');
const sumar = document.getElementById('add');

const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');

const resultado = document.querySelector('.results p');

hallarMenor.addEventListener('click', function(){
  const num1 = Number(numero1.value) || 0;
  const num2 = Number(numero2.value) || 0;

  if(num1 > num2){
    resultado.textContent = `El 1er Número es mayor: ${num1}`
  }else if(num1 < num2){
    resultado.textContent = `El 2do Número es mayor: ${num2}`
  }else{
    resultado.textContent = `Los números son iguales`
  }
});

iguales.addEventListener('click', ()=>{
  const num1 = Number(numero1.value) || 0;
  const num2 = Number(numero2.value) || 0;

  if(num1 === num2){
    resultado.textContent = `Los números son iguales`
  }else{
    resultado.textContent = `Los números son diferentes`
  }
});

intercambiar.addEventListener('click', ()=>{
  const temporal = numero1.value;
  numero1.value = numero2.value;
  numero2.value = temporal
});

sumar.addEventListener('click',()=>{
  const num1 = Number(numero1.value) || 0;
  const num2 = Number(numero2.value) || 0;

  resultado.textContent = `La suma es ${num1 + num2}`;
})