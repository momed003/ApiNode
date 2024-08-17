const express = require('express');
const app = express();
const mongoose = require('mongoose');

//instancia da classe person
const Person=require('./model/person')

// Configurar o Express para usar URL encoding e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas da API
app.post('/Person',async(req,res)=>{

    //req.body
    const{name,salary,aproved}=req.body

    //criar objecto
    const Person={
        name,
        slary,
        aproved
    }

    //metodo create do mongoose
    try{
        await Person.create(Person)
        res.status(201).json({message:'cadastro de pessoa efectuado com sucesso'})
    }catch(error){
        res.status(500).json({error:error})
    }
})

// Rota inicial
app.get('/', (req, res) => {
    res.json({ message: 'first api' });
});

// Configurações do MongoDB
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@servidor1.cmcqf.mongodb.net/?retryWrites=true&w=majority&appName=Servidor1`;

// Conectar ao MongoDB e iniciar o servidor Express
mongoose.connect(DB_URI)
    .then(() => {
        console.log("Primeira conexão a DB efetuada");
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch(err => console.log('Erro ao conectar ao DB:', err));
