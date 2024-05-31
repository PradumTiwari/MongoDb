import passport from "passport";

//Somewhat like a middleware only

export const authenticate=(req,res,next)=>{
    console.log('inside authenticate');
    console.log(req.body);
    passport.authenticate('jwt',(err,user,data)=>{

        if(err){
            next(err);
        }
        if(!user){
            return res.status(401).json({
                message:'unauthorized access'
            })
        }
          req.user=user;
          
          next(); //other wise call ht next middleware
       
    })(req,res,next)
}