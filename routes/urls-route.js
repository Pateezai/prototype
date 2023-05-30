import express from "express"
import { createUrl, deleteUrl, getUrl, getUrls, redirectUrl, updateUrl } from "../controllers/url-ctrl.js";


const router  = express.Router();

//CREATE
router.post("/create/", createUrl)
//REDIRECT TO OG URL
router.get("/:messege", redirectUrl)
//UPDATE by ID
router.put("/update/id/:id", updateUrl)
//GET by ID
router.get("/id/:id", getUrl)
//GET_ALL
router.get("/", getUrls)
//DELETE
router.delete("/del/id/:id", deleteUrl)

export default router