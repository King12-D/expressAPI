import { Router } from 'express';
import { getPost, getPosts, createPost, updatePost, deletePost } from './post-controllers.js';
import {asyncWrapper} from "../../utils/asyncWrapper.js";

const router = Router();

//Using asyncWrapper to catch all errors
router.get('/', asyncWrapper(getPosts));
router.get('/:id', asyncWrapper(getPost));
router.post('/', asyncWrapper(createPost));
router.put('/:id', asyncWrapper(updatePost));

router.delete('/:id', deletePost);

export const postRoutes = router;