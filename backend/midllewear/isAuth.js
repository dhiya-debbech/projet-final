const jwt = require("jsonwebtoken");
const client = require("../models/client");

exports.isAuth = async(req ,res , next)=>{
    const token = req.header("token");
    try {
        if(!token){
            return res.status(400).send("you are not authorized");
        }else{
        const decode = jwt.verify(token , "hello");
        const clients = await client.findById(decode.id);
        req.user = clients;
        next();
        }
        
    } catch (error) {
        console.log(error);
    }
}