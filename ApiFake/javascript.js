const json = '{"nome": "Harry Styles", "idade": "29", "profissao": "Cantor/Ator/Modelo/Compositor", "nacionalidade": "Britânico"}';

const ficha = JSON.parse(json);

console.log(ficha)

function myFunction(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha.nome;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha.idade;
    document.getElementById("profissao").innerHTML = `Profissão: ` + ficha.profissao;
    document.getElementById("nacionalidade").innerHTML = `Nacionalidade: ` + ficha.nacionalidade;
}

const json2 = '{"Nome": "The Weeknd", "Idade": "32", "Profissao": "Cantor/Ator/Compositor/Produtor", "Nacionalidade": "Canadense"}';

const ficha2 = JSON.parse(json2);

console.log(ficha2)

function myFunction1(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha2.Nome;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha2.Idade;
    document.getElementById("profissao").innerHTML = `Profissão: ` + ficha2.Profissao;
    document.getElementById("nacionalidade").innerHTML = `Nacionalidade: ` + ficha2.Nacionalidade;
}


const json3 = '{"NOME": "Taylor Swift", "IDADE": "33","PROFISSAO": "Cantor/Compositor/Modelo/Empresária", "NACIONALIDADE": "Estadunidense"}';

const ficha3 = JSON.parse(json3);

console.log(ficha3)

function myFunction2(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha3.NOME;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha3.IDADE;
    document.getElementById("profissao").innerHTML = `Profissão: ` + ficha3.PROFISSAO;
    document.getElementById("nacionalidade").innerHTML = `Nacionalidade: ` + ficha3.NACIONALIDADE; 
}