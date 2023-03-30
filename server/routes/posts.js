import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// http://localhost:5000/posts porque en 'index.js' le agrege el prefijo /posts al postRouter

router.get('/', getPosts)
router.post('/', createPost)

export default router;