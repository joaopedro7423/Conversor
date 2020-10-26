const fs = require("fs");
const util = require("util");


class Reader{
    constructor(){ // colocando esse construtor com essas biblioteca "util"
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepatch){ 
        try{
            return await this.reader(filepatch,"utf8")
        
        }catch(err){
            return undefined;
        }

        // nao se precisa disso
       /* 
        fs.readFile(filepatch,"utf8",(err,data) =>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        });
        */
    }

}

module.exports = Reader;