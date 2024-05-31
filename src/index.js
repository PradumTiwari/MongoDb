import express from 'express';
import { connect } from './config/database.js';
import apiRoutes from './Routes/index.js' 
import bodyParser from 'body-parser';
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js'
import TweetService from './services/tweet-service.js';



const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.use(passport.initialize());// it will setup all the edge functionality required for  passport

passportAuth(passport);





app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await connect();
    console.log('MongoDB connected');
//    const tweetService = new TweetService();
//     const tweet = await tweetService.create({
//          content:'Hello world using service layer'
//     })
})