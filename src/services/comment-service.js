import {CommentRepository,TweetRepository} from '../repository/index.js'

class CommentService{
    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository=new TweetRepository();
    }

    async createComment(modelId,modelType,userId,content){
        console.log(modelId,modelType,userId,content);
        if(modelType=='Tweet'){
    
          var commentable=await this.tweetRepository.get(modelId);
       

        }
        else if(modelType==='Comment'){
           var commentable=this.commentRepository.get(modelId);
        }
        else{
            throw new Error('Unknown Model Type');
        }
   
     //Here Unlike toggleLike we dont have to check in Like if it exist then we pull out from the Likeable and remove the exist
     //Here whenever a Createcomment is made we have to create new Comment
     const comment=await this.commentRepository.create({
        content:content,
        userId:userId,
        onModel:modelType,
        commentable:modelId,
        comments:[]
     })
console.log("comment",comment);
console.log("commentable",commentable);
     commentable.comments.push(comment);
     await commentable.save();
   console.log("Commentable",commentable);
     return comment;


    }

    async getComment(commentId){
       try {
        return this.commentRepository.get(commentId);
       } catch (error) {
        throw new Error('Comment Not Found');
       }

    }

 } 

 export default CommentService;