const express = require('express');
const app = express();
const cors = require('cors');
const crud = require('./crud.js')
const port = 3000;

console.log(crud)
app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server online on port:${port}`);
})


app.post('/getInpc', async (req, res) => {
    let {monthAdq, yearAdq, monthDisp, yearDisp}=req.body.data
    
    try {
        let response = await crud.consulta(monthAdq,yearAdq,monthDisp,yearDisp);
        res.status(200).send({ message: "inpc recibido", data: response })
    } catch (error) {
        res.status(400).send({message:"Indice", data: 1})
    }

})
