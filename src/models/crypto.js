const mongoose=require('mongoose');

const cryptoSchema=new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        required: true,
    },
    userid:{
        type: String,
        required: true,
    },
    expense:{
        type: Boolean,
        required: true,
    },
    iscrypto:{
        type: Boolean,
        default: false,
    },
    description:{
        type: String,
        default: 'Just a note',
    },
    buyorsell:{
        type: Boolean,
        default: false,
    },
    rate:{
        type: Number,
        default: 0,
    },
    quantity:{
        type: Number,
        default: 0,
    },
    amount:{
        type: Number,
        required: true,
    },
    note:{
        type: String,
        default: 'Note Details',
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('Crypto',cryptoSchema);