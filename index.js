const fs = require("fs");

var conteudo;
// ler o arquivo
fs.readFile("./jooj.peep",{encoding: 'utf-8'},(erro, dados)=>{

    if(erro){
        console.log("Ocorreu uma falha durante a leitura do arquivo");
    }else{
        conteudo = dados;
    }

});


console.log(conteudo);