import LikeService from "../services/like-service.js";

const likeService=new LikeService();

export const toggleLike=async(req,res)=>{
    try {
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            message:"Like Toggled Successfully",
            sucess:true,
            err:{},
            data:response
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something Went Wrong",error:error,sucess:false})
    }
}