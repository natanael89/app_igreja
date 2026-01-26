import fs from "fs";
import path from "path";


export function ensureUploadDir(){
    const uploadPath = path.resolve("uploads")

    if(!fs.existsSync(uploadPath)){
        fs.mkdirSync(uploadPath, { recursive: true})
    }
}