const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        min:[5,"Tweet cannot be less than 5 characters"],
        max:[255,"Tweet cannot more than 255 characters"]
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }
    ]
},{timestamps:true})


const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet;