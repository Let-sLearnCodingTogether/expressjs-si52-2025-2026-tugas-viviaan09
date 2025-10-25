import express from "express"
import api from "./route/api.js"
import database from "./config/database.js"

import passport from "passport"
import "./config/passport.js"

const app = express()
app.use(express.json())
app.use(passport.initialize())

app.use('/api', api) 

app.listen(3000, () => {
    database()
    console.log('Aplikasi berjalan di http://localhost:3000')
})