import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import contactInfo from "./src/routes/contactInfo";

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000


app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173', 'http://softdetroits.com', 'https://softdetroits.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Directing to the routes
app.use('/contact', contactInfo)


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}...`)
})


