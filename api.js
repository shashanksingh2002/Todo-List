const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const fs = require('fs');
const {readFile} = require(__dirname+'/readFile.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

app.post('/postTodos',(req,res)=>{
    const todoData = req.body;
    readFile((dbData)=>{
        const jsonData = JSON.parse(dbData);
        jsonData.push(todoData)
        fs.writeFile(__dirname+'/backend/todos.json', JSON.stringify(jsonData), err => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        res.json(jsonData);
    })
    
});

app.get('/todos',(req,res)=>{
    readFile(dbData => {
        const jsonData = JSON.parse(dbData);
        res.json(jsonData);
    })
});

app.delete('/delete',(req,res)=>{
    const todoToDelete = req.body;
    readFile((dbData)=>{
        let jsonData = JSON.parse(dbData);
        jsonData = jsonData.filter(data => data.description !== todoToDelete.delete);
        fs.writeFile(__dirname+'/backend/todos.json', JSON.stringify(jsonData), err => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(jsonData);
        });
        
    })
})

app.listen(port,()=>{
    console.log("App is running successfully at port:",port);
});