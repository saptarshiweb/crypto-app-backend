//importing packages

const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

//Database Connection
const database='mongodb+srv://saptarshi:hellocrypto123@cluster0.rdser.mongodb.net/?retryWrites=true&w=majority';


//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));//No nested objects in the body of the request
app.use(bodyParser.json());

//Middleware for CORS
app.use(cors());


//call the crypto model
const CryptoNote=require('./models/crypto');


//Connecting to the database

mongoose.connect(database).then(()=>{

    console.log('Database Connected');

    //Just to check if the database is connected
    app.get('/',(req,res)=>{
        res.send('Crypto Database Connected');
    });

    app.get('/api',(req,res)=>{
        res.send('Crypto Details here ');
    });
    //Get all Transactions list of a Particular user with respect to the user id

    app.get('/api/list/:userid',async (req,res)=>{
        var value=await CryptoNote.find({userid: req.params.userid});
        res.json(value);

    });


    //Create or Update a Transaction

    app.post('/api/create', async (req,res)=>{

        await CryptoNote.deleteOne({id:req.params.id});

        var newval=new CryptoNote({
            id:req.body.id, //id of the transaction
            userid:req.body.userid, //userid of the user
            expense:req.body.expense, //whether it is an expense or a income
            iscrypto:req.body.iscrypto, //whether it is a crypto or a Simple Transaction
            description:req.body.description, //description of the transaction
            buyorsell:req.body.buyorsell, //whether it is a buy or a sell
            rate:req.body.rate, //rate of the transaction
            quantity:req.body.quantity, //quantity of the transaction
            amount:req.body.amount, //amount of the transaction
            note:req.body.note, //note of the transaction
            date:req.body.date, //date of the transaction
        });
        await newval.save();
    });

    //Delete a Transaction

    app.delete('/api/delete/:id',async (req,res)=>{
        await CryptoNote.deleteOne({id:req.params.id});
        res.json({message:'Transaction Deleted for the UserID with ID :'+req.params.id});
    });





});


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('Crypto Server is running on port '+PORT);
});
//--------End---------------------