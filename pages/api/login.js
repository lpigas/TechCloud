import jwt from 'jsonwebtoken'
const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
const bcode = require('bcryptjs')




export default async function(req,res){
    if(!req.body){
        return res.status(400).json({message:"No enter login or password"})

    }
const {email, password} = req.body
let { db } = await connectToDatabase();

const isRegistred = await db.collection('users').findOne({email:email});

if(!isRegistred){
    return res.status(400).json({message: 'You are not registred'})
}
const newPassword = bcode

res.json({
    message: [isRegistred,],
    token: jwt.sign({
        email,
        admin: email==='q@mail.ua' && password==='1',
    }, process.env.SECRET_KEY)
})
}