const express=require('express')
const router=express.Router()
const sqlConnect=require('./sqlConnect')
const url=require('url')


router.get('/abc',(req,res)=>{
    const info = url.parse(req.url, true).query
    const sql='select * from blogContent'
    sqlConnect(sql,null,result=>{
        if(result.length>0){
            res.send({
                status:200,
                result,
                info
            })
        }else{
            res.send({
                status:500,
                msg:"查询失败"
            })
        }
    })
})

module.exports = router;