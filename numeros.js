const numeros = [
    '1', '2', '3', '4',
    '5', '6', '7', '8',
    '9', '0'
  ]// TESTAR TODAS AS LETRAS
// SE CONTER QUALQUER LETRA RODA A OUTRA POSSIBILIDADE
let nome = "Essa 1"

for(let i = 0; i <= numeros.length; i++){
    if(nome.includes(numeros[i])){
        console.log("Invalido")
    }
}
