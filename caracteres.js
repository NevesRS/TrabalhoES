const caracteresEsp = ['!','@','#','$','%','¨','&','*','(',')','_','+','¹','²','³','£','¢','¬','§','=','-','`','{','ª','^','~','}',']','º',':',';','?','/','°','>','.','<',',','|','º',]
// TESTAR TODAS AS LETRAS
// SE CONTER QUALQUER LETRA RODA A OUTRA POSSIBILIDADE
let descricao = "Essa descriç@@"

for(let i = 0; i <= caracteresEsp.length; i++){
    if(descricao.includes(caracteresEsp[i])){
        if(caracteresEsp[i])
        console.log(caracteresEsp[i] + " Invalido")
    }
}
// percorre todo o array
// verifica se 