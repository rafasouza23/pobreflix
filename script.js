// sorveteria Qcalor
//let sabor = Number(prompt("Digite o código do sabor escolhido"))

//condicional
// if(sabor === 1){
//     console.log("chocolate")
// } else if(sabor === 2){
//     console.log("morango")
// } else{
//     console.log("código inválido")
// }

// testando grandes condicionais
// switch (sabor) {
//     case 1:
//         console.log("chocolate")
//         break;
//     case 2:
//         console.log("morango")
//         break;
//     case 3:
//         console.log("baunilha")
//         break;
//     case 4:
//         console.log("chocomenta")
//         break;
//     case 5:
//         console.log("goiaba")
//         break;
//     default:
//         console.log("codigo inválido")
//         break;
// }

//vários case - um resultado
let dia = prompt("Que dia é hoje?")
switch (dia) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("tem aula")
        break;
    case "sabado":
    case "domingo":
    console.log("não tem aula")
        break;
    default:
        console.log("dia inválido")
        break;
}