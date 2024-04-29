const {TweetService} =require('../services/index')



const createTweet=async(req,res)=>{
    try {
        const tweetService=new TweetService();
        const tweet=await tweetService.create(req.body);
        return res.status(200).json({
            sucess:true,
            data:tweet,
            err:{},
            message:"Sucessfully Created Tweet"
        })
    
    } catch (error) {
     console.log(error);
    }
}


module.exports={createTweet}