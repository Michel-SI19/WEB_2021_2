//importando o mongoose(FRONT-END para o mongoDB)
var mongoose = require('mongoose');

//updating
//mongoose.set('useFindAndModify',false);           //evitando depreciações

//conexão local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/crud';          
mongoose.connect(mongoDB_URI,{useNewUrlParser:true});         //conexão com o banco local. O db deve ser criado antes.       

//armazena a conexão em uma variável
var db = mongoose.connection;

//listeners
db.on('connected',()=>{
    console.log('Mongoose Connected to: '+mongoDB_URI);
});
db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to: '+mongoDB_URI);
});
db.on('error',(err)=>{
    console.log('Mongoose Error: '+ err);
});