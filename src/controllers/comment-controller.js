import CommentService from '../services/comment-service.js';

const commentService=new CommentService();

export const createComment=async(req,res)=>{
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new comment',
            data: response,
            err: {}
        });
    } catch (error) {
        
        res.status(500).json({message:"Something Went Wrong",error:error,sucess:false})
  
    }
}