import mongoose, { Schema } from "mongoose";

const UserSchmea = new mongoose.Schema({
    name : {
        type: String,
        Required : true
    },
    email : {
        type: String,
        Required : true,
        unique: true
    },
    password: {
        type: String,
        Required : true
    },
    isAdmin : {
        type: Boolean,
        Required: true,
        default: false
    },
    pic: {
        type: String,
        Required: true,
        default : 'https://th.bing.com/th/id/OIP.tQYFfqM9HEki3rZPgBodgQHaHa?pid=ImgDet&rs=1'
    }
},{timestamps: true})

const User = mongoose.model('User', UserSchmea)
export default User;