//configuracao inical
const express= require('express')
const app=express()

//ler o json atraves do express
app.use(
    express.urlencoded({
        extended:true
    }
    )
)

app.use(express.json())

//endpoint/rota inical

app.get('/',(req,res)=>{

    //mostrar req

    res.json({message:'mashallaaaaaah'})
});


//entregar a porta
app.listen(3000)