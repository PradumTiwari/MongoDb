import express from 'express';
import { connect } from './config/database.js';
import apiRoutes from './Routes/index.js' 
import bodyParser from 'body-parser';
import LikeService from './services/like-service.js';
import {UserRepository} from './repository/index.js';
import {TweetRepository} from './repository/index.js';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.listen(3000,async()=>{
    console.log('Server is running on port 3000');
    await connect();
    console.log('MongoDB connected');
    const TweetRepo=await new TweetRepository();
    const tweet=await TweetRepo.getAll(0,10);

    const userRepo=await new UserRepository();
    // const user=await userRepo.create({
    //     email:"satendar@gmail.com",
    //     password:"123456",
    //     name:"Pradum"
    // })


    const likeService=new LikeService();
    
    await likeService.toggleLike('662f448e4225d30a499d44fc','Tweet','6647acbc46c1448712b59fdf');
    
})