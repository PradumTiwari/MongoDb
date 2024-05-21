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
  
 
    
})