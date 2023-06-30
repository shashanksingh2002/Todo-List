const fs = require('fs');
const readFile = (callback => {
    fs.readFile(__dirname+'/backend/todos.json','utf-8',(err,data)=>{
        if(err) throw err;
        callback(data);
    })
})

module.exports = {
    readFile
}