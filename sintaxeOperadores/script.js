function comparaNumero(num1,num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase=criaSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';

    if (num1 !==num2)
        saoIguais ='não';
    }

    return `Os números ${num1} e ${num2} $${saoIguais} são iguais.`

//Criando a segunda frase do desafio:
function criaSegundaFrase (num1,num2){
    const soma = num1 + num2;

    let Resultado10 = 'menor';
    let Resultado20 = 'menor';


    const compara10 = soma > 10;
    const compara20 = soma >20;

    if(compara10){
        Resultado10 = "maior"
    }

    if(compara20){
        Resultado20 = "maior";
    }

    return `sua soma é ${soma}, que é ${Resultado10} que 10 e ${Resultado20} que 20.`

}

console.log(comparaNumero(20, 20));



















    //if(!saoIguais){
      //  return "São iguais";
    //}

    //return "Não são iguais";


// Pode escrever também assim:
//retun saoIguais ? "São Iguais" : "Não são iguais";
//é um if ternário, equivalente a escrita do "if ..."