import express from "express"
import { signup } from "../controller/auth.controller.js"

const router = express.Router()

router.post("/signup", signup)

router.get("/login", (req, res) => {
    res.json("login")
})

router.get("/logout", (req, res) => {
    res.json("logout")
})
export default router