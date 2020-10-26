const fs = require("fs");
const { encode } = require("punycode");


// ler o arquivo
/*
fs.readFile("./jooj.peep",{encoding: 'utf-8'},(erro, dados)=>{

    if(erro){
        console.log("Ocorreu uma falha durante a leitura do arquivo");
    }else{
        conteudo = dados;
    }

});
*/


// escrever em arquivos
/*
fs.writeFile("./jooj.peep","Um novo conteudo de arquivo",(err)=>{
    if(err){
     console.log("Erro durante o salvamento");
}
});
*/

//ler arquivos json
/*
modUsuario("joao", "C", "carro");

function modUsuario(nome,curso,cat){
fs.readFile("./usuario.json",{encoding: 'utf-8'},(erro,dados)=>{
    if(erro){
        console.log("Um erro aconteceu");
    }else{
       //console.log(dados);
       var conteudo = JSON.parse(dados);

        conteudo.nome = nome;
        conteudo.curso = curso;
        conteudo.cat = cat;

        fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
            
            if(erro){
                console.log("Um erro aconteceu durante a escrita");
              }  
        });

       //console.log(conteudo);
    }
});
}
*/




