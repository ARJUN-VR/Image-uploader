const express=require('express')
const app=express()
const dotenv=require('dotenv').config()

const path=require('path')
const port=process.env.PORT||5000


app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'uploads')));

const upload=require('./multer/multer')




app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/upload',upload.array('imageUpload',5),(req,res)=>{
    if(!req.files || req.files.length===0){
        return res.status(400).send('no files found')
    }else{
        res.send('file send successfully')
    }

})



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})


