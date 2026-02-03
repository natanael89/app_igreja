import express from 'express'
import { database } from './database'
import cors from 'cors'
import { router } from './routes'
import { ensureUploadDir } from './utils/ensureUploadDir'
import { adminJs, adminJsRouter } from './admin'
import path from 'path'
import "dotenv/config"

const app = express()

app.use(cors())

app.use(express.static('uploads'))
app.use("/uploads", express.static(path.resolve("/daily-posts")))

app.use(express.json())

ensureUploadDir()

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = 4000

app.listen(PORT, () => {
    database.authenticate().then(() => {
        console.log('DB connection successfull.')
    })
    console.log(`Server started successfuly at port http://localhost:${PORT}/admin`)
})