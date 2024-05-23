import express from 'express';
import { createTweet } from '../../controllers/tweet-controllers.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { getTweet } from '../../controllers/tweet-controllers.js';
import { signUp } from '../../controllers/auth-controller.js';
import {login} from '../../controllers/auth-controller.js'
const router=express.Router();

router.post('/tweets',createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comment',createComment);
router.get('/tweets/:id',getTweet);
router.post('/auth/signup',signUp);
router.post('/login',login);
export default router;