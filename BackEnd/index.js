import express from 'express'
import { join } from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

import homeRouter from './routes/home.routes.js'
import itemsRouter from './routes/items.routes.js'
import aboutRouter from './routes/about.routes.js'
import contactRouter from './routes/contact.routes.js'
import authRouter from './routes/auth.routes.js'

app.set('view engine', 'ejs')

app.use('/src', express.static(join(process.cwd(), "src")));
app.use(express.static(join(process.cwd(), "views/pages")));

app.use('/', homeRouter)
app.use('/', itemsRouter)
app.use('/', aboutRouter)
app.use('/', contactRouter)
app.use('/', authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}: 
        http://localhost:${process.env.PORT}
    `)
})