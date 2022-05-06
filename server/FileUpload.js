import multer from "multer";



const storage=multer.diskStorage({
 destination:   (req,files,cb)=>{
    cb(null, '../client/build/imgs/events')
},
    filename :(req,files,cb)=>{

        cb(null, Date().toISOString().replace(/:/g, '-'))
      
    }
})
var fileUpload=multer({storage})

export const multipleUpload = fileUpload.fields([{ name: 'file',maxCount:1 }, { name: 'file2' ,maxCount:15}])
