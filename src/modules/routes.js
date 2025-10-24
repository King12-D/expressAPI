import { Router } from 'express';
import { postRoutes } from "./posts/post-routes.js";

const router = Router();

router.use('/posts', postRoutes);

export const appRouter = router;

