const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', {users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
   
})

router.get('/update-user', (req,res)=>{
    axios.get('http://localhost:3000/api/users/',{params:{id: req.query.id}})
    .then(function(userdata){
        res.render('update-user', {user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/create-user', (req,res)=>{
    res.render('create_User')
})

module.exports = router