var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();
 

async function main(){
    var dados = await leitor.Read("./teste.csv");
   
   
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
 
    var html = await HtmlParser.Parse(usuarios);

    //console.log(html);

    //salva em html
    escritor.Write(Date.now()+".html",html);


    //jogar no pdf
    PDFWriter.WritePDF(Date.now()+".PDF",html);

    //usuarios.rows.push(["jooj","php","php","32"]);

    //console.log(usuarios.RowCont);   
    //console.log(usuarios.ColumnCount);  
    //console.log(usuarios.rows);

}


main();