const letras = [
    'a', 'b', 'c','d','ç', 'd', 'e', 'f', 'g',
    'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'x', 'y',
    'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'ã', 'Ã', 'õ', 'Õ', 'É',
    'é', 'É', 'é', 'Í', 'í', 'Ó', 'ó','Á', 
    'á' 
]

function testar(param){

let descricao = param;
let verificador;

for(let i = 0; i <= letras.length; i++){
    if(descricao.includes(letras[i])){
        verificador = true;
    }
}
    if(verificador == true){
        console.log(param + ": é valida\n")
    }
    else{
        console.log(param +": é invalida\n")
    }
}

testar("@#!@#")
testar("1234")
testar("Oi deu certo! :D:D")
testar("EU TE AMO BB")
testar("3U T3 4M0 BB")
testar("&U T& AM@ $$")