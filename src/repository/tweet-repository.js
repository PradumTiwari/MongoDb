import Tweet from './../models/tweet.js'

class TweetRepository{
    async create(data){
           try {
            const tweet=await Tweet.create(data);
            return tweet;
           } catch (error) {
            console.log(error);
           }
    }
    async get(id){
      
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate('comments');
        } catch (error) {
            console.log(error);
        }
    }


    async destroy(){
       const tweet=await Tweet.findByIdAndDelete(id);
         return tweet;
    }

    async getAll(skip,limit){
        try {
            const tweet=await Tweet.find().skip(skip).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;