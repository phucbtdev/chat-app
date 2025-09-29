import express from "express"
import dotenv from "dotenv"
import path from "path"
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express()
const __dirname = path.resolve()


const PORT = process.env.PORT || 3000

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
})