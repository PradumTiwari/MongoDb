import TweetService from '../services/tweet-service.js';
const tweetService=new TweetService();

export const createTweet=async(req,res)=>{
    try {
       
        const tweet=await tweetService.create(req.body);
        return res.status(201).json({
            sucess:true,
            data:tweet,
            err:{},
            message:"Sucessfully Created a new Tweet"
        })
    
    } catch (error) {
     return res.status(500).json({
        sucess:false,
        data:{},
        message:'Something Went Wrong While Creating The Tweet',
        err:error,
     })
    }
}

export const getTweet=async(req,res)=>{
    try {
        const response=await tweetService.get(req.params.id);
        return res.status(200).json({
            sucess:true,
            message:'Sucessfully Fetched The Tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            data:{},
            message:'Something Went Wrong While Fetching The Tweet',
            err:error,
        })
    }
}





