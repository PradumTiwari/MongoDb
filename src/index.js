const express=require('express');
const connect=require('./config/database');
const app=express();

const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment');


app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await connect();
    console.log("MongoDB connected successfully");
    
    // const tweet=await Tweet.create({
    //  content:"This is my first tweet",
    // });
//    console.log(tweet);
//    tweet.comments.push({content:"First tweet"});
//     await tweet.save();
//     console.log(tweet);

   const tweetRepo=new TweetRepository();
//    const tweet=await tweetRepo.create({content:'Tweet With Comment Schema'});
//    const comment=await Comment.create({content:'New Comment'});
//    tweet.comments.push(comment);/
  const tweet=await tweetRepo.getAll(0,4);

   console.log(tweet[0].EmailId);
})