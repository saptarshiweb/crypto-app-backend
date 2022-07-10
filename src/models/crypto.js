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
        default: false
    },
    iscrypto:{
        type: Boolean,
        required: true,
        default: false,
    },
    description:{
        type: String,
        required: true,
        default: 'Just a note',
    },
    buyorsell:{
        type: Boolean,
        default: false,
        required: true,
    },
    rate:{
        type: Number,
        default: 0,
        required: true,
    },
    quantity:{
        type: Number,
        default: 0,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
        default: 0
    },
    note:{
        type: String,
        default: 'Note Details',
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports=mongoose.model('Crypto',cryptoSchema);