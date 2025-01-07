import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import bcrypt from "bcrypt";
import { JWT_PASSWORD } from "./config";

const app = express()

app.use(express.json())

app.post("/api/v1/signup", async (req, res)=>{
    // TODO: zod validation , hash the password
    const {username, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        await UserModel.create({
            username,
            password: hashedPassword,
        })

        res.json({
            status: "success",
            message: "User created successfully",
        })
    } catch (error) {
        res.status(411).json({
            status: "error",
            message: "User already exists",
        })
    }
})

app.post("/api/v1/signin", async(req, res)=>{
    const {username, password} = req.body
    
    try {
        const existingUser = await UserModel.findOne({
            username
        })
        if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
            const token = jwt.sign({
                id: existingUser._id
            }, JWT_PASSWORD)
    
            res.json({
                token
            })
        } else {
            res.status(403).json({
                message: "Incorrrect credentials"
            })
        }
    } catch (error) {
        
    }
})

app.post("/api/v1/content", async(req, res)=>{
    const {type, link, title, tags} = req.body
})

app.get("/api/v1/content", async(req, res)=>{

})

app.delete("/api/v1/content", async(req, res)=>{
    const {id} = req.body
})

app.post("/api/v1/brain/share", async(req, res)=>{
    const {id, link} = req.body
})

app.get("/api/v1/brain/:shareLink", async(req, res)=>{
    const {shareLink} = req.params
})

app.listen(3000, )