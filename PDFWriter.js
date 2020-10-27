var pdf =require("html-pdf");


//para gerar o pdf a partir do html importe
//npm intall html-pdf --save


class PDFWriter{

    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{});
    }


}



module.exports = PDFWriter;