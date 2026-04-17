import { Router } from "express";
import { createPost, getPosts, updatePost, deletePost } from "../controllers/post.controller.js";

const router = Router();  // create a router

router.route("/create").post(createPost);  // define the create post route
router.route("/getPosts").get(getPosts);  // define the get posts route
router.route("/update/:id").patch(updatePost);  // define the update post route
router.route("/delete/:id").delete(deletePost);  // define the delete post route


export default router;