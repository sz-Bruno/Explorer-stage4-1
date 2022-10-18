 
let num1= Number(window.prompt('digite um número'))
let num2= Number(window.prompt('digite outro número'))
const soma= (` ${num1+num2}`)
const sub= (` ${num1-num2}`)
const mult= (` ${num1* num2}`)
const div=( ` ${num1/num2}`)
const res1= (` ${num1%num2}`)

window.alert("A soma dos números é:" + soma)
window.alert("A subtração dos dois números é:" + sub)
window.alert("A multiplicação dos dois números é:"+ mult)
window.alert("A divisão dos dois números é:"+ div)
window.alert("O resto da divisão dos dois números é:" + res1)

function ParImpar(soma){
    if (soma%2==0 ){
        window.alert(`A soma dos números é par`)
    }else{
        window.alert('A soma dos números é ímpar')
    }
}

function Igual(num1, num2){
  if (num1=== num2){
    window.alert(` À propósito,os números são iguais!`)
  }else{
    window.alert(`À propósito, os números são diferentes!`)
  }
}

ParImpar(soma)
Igual(num1,num2)
