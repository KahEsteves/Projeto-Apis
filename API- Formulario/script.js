//função para button

function confirmacao() {

    var formsCliente = new Object();

    formsCliente.nome = document.getElementById("nome").value;
    formsCliente.email = document.getElementById("email").value;
    formsCliente.cpf = document.getElementById("cpf").value;
    formsCliente.cep = document.getElementById("cep").value;
    formsCliente.cidade = document.getElementById("cidade").value;
    formsCliente.estado = document.getElementById("estado").value;
    formsCliente.rua = document.getElementById("rua").value;
    formsCliente.numero = document.getElementById("numero").value;
    formsCliente.profissao = document.getElementById("profissao").value;
    formsCliente.sexo = document.getElementById("sexo").value;

    var jsonForm = JSON.stringify(formsCliente);

    console.log(formsCliente.valueOf());



    document.getElementById("nomePrint").innerHTML = 'Nome: ' + formsCliente.nome;
    document.getElementById("cpfPrint").innerHTML = 'CPF: ' + formsCliente.cpf;
    document.getElementById("emailPrint").innerHTML = 'Email: ' + formsCliente.email;
    document.getElementById("cepPrint").innerHTML = 'CEP: ' + formsCliente.email;
    document.getElementById("ruaPrint").innerHTML = 'Rua: ' + formsCliente.rua;
    document.getElementById("numeroPrint").innerHTML = 'Nº: ' + formsCliente.numero;
    document.getElementById("cidadePrint").innerHTML = 'Cidade: ' + formsCliente.cidade;
    document.getElementById("estadoPrint").innerHTML = 'Estado: ' + formsCliente.estado;
    document.getElementById("profissaoPrint").innerHTML = 'Profissão: ' + formsCliente.profissao;
    document.getElementById("sexoPrint").innerHTML = 'Sexo: ' + formsCliente.sexo;

    window.print();
}