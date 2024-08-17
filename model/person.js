const mongoose=require('mongoose')

//metodos para salvar e ler
const Person=mongoose.model('Person',{
    name:String,
    salary:Number,
    aproved:Boolean,
})

module.exports=Person