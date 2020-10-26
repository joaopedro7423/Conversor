var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./table");

var leitor = new Reader();

 

async function main(){
    var dados = await leitor.Read("./teste.csv");
   
   
  var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

        console.log(usuarios.rows);

}


main();