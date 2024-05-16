import express from 'express'
import itemsRoute from './routes/items.routes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()
dotenv.config()

// DB connection
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION, {
            dbName: "KBS"
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log(`Error connecting to db: ${error}`);
    }
}

connectToDatabase();

app.use(cors())
app.use('/items', itemsRoute)

app.get('/', (req, res) => {
    res.send("Hello, world")
})

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}: 
        http://localhost:${process.env.PORT}
    `)
})


// async function disconnectDatabase() {
//     await mongoose.disconnect()
// }

// disconnectDatabase()