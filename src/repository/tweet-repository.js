import Tweet from './../models/tweet.js'
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    async create(data){
        console.log("Pradum Repo",data);
           try {
            const tweet=await Tweet.create(data);
           
            return tweet;
           } catch (error) {
            console.log(error);
           }
    }

    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({
                path:'comments',
                populate:{
                    path:'comments',
                }
            });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }



    async getAll(skip,limit){
        try {
            const tweet=await Tweet.find().skip(skip).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'likes'});
            console.log(tweet);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;