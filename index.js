function estruturaHeroi(nome, idade, tipo) {
    this.nome   = nome;
    this.idade  = idade;
    this.tipo   = tipo;
}

function tipoHeroi() {

    // Dentro de () digite nome, idade, tipo
    // Exemplo de tipo: mago, guereiro, monge, ninja
    var tipoHeroi = new estruturaHeroi('Arthur', "22", "mago"); 

    if (tipoHeroi.tipo === "mago" || tipoHeroi.tipo === "Mago") {
        console.log(
            `${tipoHeroi.nome} da idade: ${tipoHeroi.idade}, do tipo: ${tipoHeroi.tipo}, atacou usando: margia`
            );
    }
    else if (tipoHeroi.tipo === "guerreiro" || tipoHeroi.tipo === "Guerreiro") {
        console.log(
            `${tipoHeroi.nome} da idade: ${tipoHeroi.idade}, do tipo: ${tipoHeroi.tipo}, atacou usando: espada`
        );
    }
    else if (tipoHeroi.tipo === "monge" || tipoHeroi.tipo === "Monge") {
        console.log(
            `${tipoHeroi.nome}, da idade: ${tipoHeroi.idade}, do tipo: ${tipoHeroi.tipo}, atacou usando: artes marciais`
        );
    }
    else if (tipoHeroi.tipo === "ninja" || tipoHeroi.tipo === "Ninja") {
        console.log(
            `${tipoHeroi.nome}, da idade: ${tipoHeroi.idade}, do tipo: ${tipoHeroi.tipo}, atacou usando: shuriken`
        );
    }
    else {
        console.log("Não encontrei o tipo desejado(a), temos disponíveis: mago, guerreiro, monge ou ninja");
    }
}

tipoHeroi();