const express=require('express');
const multer=require('multer');
const app=express();
const fs=require('fs');

var upload=multer({
    dest:'upload'
});

app.use(upload.any());
app.post('/',(req,res)=>{
    fs.rename(req.files[0].path,'upload/'+req.files[0].originalname,(err)=>err?console.err(err):console.log(`upload  ${req.files[0].originalname} success`))
res.send('上传成功')
  })
  
app.use(express.static('../uploadDemo'));



app.listen(8080);