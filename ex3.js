let assinatura = prompt("Digite seu tipo de assinatura:")

switch (assinatura) {
    case "basic":
        console.log("Acesso a filmes e séries em qualidade padrão")
        break;
    case "premium":
        console.log("Acesso a filmes e séries em HD e 2 telas simultâneas")
        break;
    case "gold":
        console.log("Acesso a filmes e séries em 4K, 4 telas e contúdo exclusivo")
        break;
    default:
        console.log("Tipo de assinatura não reconhecida")
        break;
}