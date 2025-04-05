const fs = require('fs');


    fs.writeFile('message.txt', "Node.js is Awesome!", (err) =>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("File Created Successfully")
        }
       
    })

    
    fs.readFile('message.txt', "utf-8", (err, data) =>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log(`File Content: ${data}`)
        }
       
    })

    fs.unlink('message.txt', (err) =>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("File Deleted Successfully")
        }
       
    })
    
    
