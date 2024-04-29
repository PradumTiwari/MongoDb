const express=require('express');
const connect=require('./config/database');
const app=express();

const TweetService=require('./services/tweet-service')


app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await connect();
    console.log('MongoDB connected');
    const tweetService=new TweetService();
    // const tweet=await tweetService.create({content:'This is  #Pradum New #React Main'});
    // console.log(tweet);
})