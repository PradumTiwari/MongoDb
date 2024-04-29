const express=require('express');
const TweetController=require('../../controllers/tweet-controllers')
const router=express.Router();

router.post('/create',TweetController.createTweet);

module.exports=router;