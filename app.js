var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./table");
var HtmlParser = require("./HtmlParser");

var leitor = new Reader();

 

async function main(){
    var dados = await leitor.Read("./teste.csv");
   
   
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
 
    var html = await HtmlParser.Parse(usuarios);

    console.log(html);

    //usuarios.rows.push(["jooj","php","php","32"]);

    //console.log(usuarios.RowCont);   
    //console.log(usuarios.ColumnCount);  
    //console.log(usuarios.rows);

}


main();