import TweetService from "../services/tweet-service.js";

import upload from '../config/file-upload-s3-config.js'

const singleUploader=upload.single('image');

const multiuploader=upload.array('images',10);
const tweetService = new TweetService();

export const createTweet = async (req, res) => {
   console.log(req.params.number);

   
        try {
            multiuploader(req,res,async function(err,data){
                if(err){
                    return res.status(500).json({
                        err:err
                    })
                }
                console.log('Image Url is ',req.files);
                const payload=req.body;
                const images=req.files.map(file=>file.location);
                payload.images=images;
                const response = await tweetService.create(payload);
                console.log("response", response);
                return res.status(201).json({
                    success: true,
                    message: 'Successfully created a new tweet',
                    data: response,
                     err: {}
                 });
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'something went wrong',
                data: {},
                err: error
            });
        }
    }
    // else{
    //     try {
    //         singleUploader(req,res,async function(err,data){
    //             if(err){
    //                 return res.status(500).json({
    //                     err:err
    //                 })
    //             }
    //             console.log('Image Url is ',req.file);
    //             const payload=req.body;
    //             payload.images=req.file.location;
    //             const response = await tweetService.create(payload);
    //             console.log("response", response);
    //             return res.status(201).json({
    //                 success: true,
    //                 message: 'Successfully created a new tweet',
    //                 data: response,
    //                  err: {}
    //              });
    //         })
           
    //     } catch (error) {
    //         return res.status(500).json({
    //             success: false,
    //             message: 'something went wrong',
    //             data: {},
    //             err: error
    //         });
    //     }
    // }
   


export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });
    }
}
