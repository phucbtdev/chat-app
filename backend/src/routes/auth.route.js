import express from "express"

const router = express.Router()

router.get("/register", (req, res) => {
    res.json("register")
})

router.get("/login", (req, res) => {
    res.json("login")
})

router.get("/logout", (req, res) => {
    res.json("logout")
})
export default router