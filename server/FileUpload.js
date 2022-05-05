import multer from "multer";



const storage=multer.diskStorage({
 destination:   (req,files,cb)=>{
    cb(null, 'public/imgs/events')
},
    filename :(req,files,cb)=>{

        cb(null, files.originalname)
      
    }
})
var fileUpload=multer({storage})

export const multipleUpload = fileUpload.fields([{ name: 'file',maxCount:1 }, { name: 'file2' ,maxCount:15}])
