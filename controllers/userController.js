const { redirect } = require('express/lib/response')
const User = require('../models/User')

module.exports.create_user = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Empty!!!'})
        return
    }
     const user = new User({
         username : req.body.username,
         email : req.body.email,
         gender : req.body.gender,
         status: req.body.status
     })

    user
      .save(user)
      .then(data=>{
          //res.send(data)
          res.redirect('/create-user')
      }) 
      .catch(err=>{
          res.status(500).send({
              message: err.message || 'Error Occurred while Creating user'
          })
      })




}

module.exports.find = (req,res)=>{
    if(req.query.id){
        const id=req.query.id
         User.findById(id)
         .then(data=>{
             if(!data){
                res.status(404).send({message:'user not found'})

             }else{
                res.send(data)
             }
            
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || 'Error Occurred while retriving user information'
            })
        })


    }else{
    User.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || 'Error Occurred while retriving users information'
        })
    })
}

}
module.exports.update_user = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:'Empty!!!'})
        return
    }
    const id = req.params.id
    User.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
       .then(data=>{
           if(!data){
            res.status(404).send({message:`Cannot Update user ${id}`})
           }else{
               res.send(data)
              
           }
       })
       .catch(err=>{
        res.status(500).send({message:'Error Update user'})
       })

}
module.exports.delete_user = (req,res)=>{

    const id = req.params.id
    User.findByIdAndDelete(id)
       .then(data=>{
           if(!data){
               res.status(404).send({message:`Cannot delete user ${id}`})
           }
           else{
               res.send({message: 'user was deleted Successfully' })

           }
       })
       .catch (err=>{
           res.status(500).send({message:'could not delete user'})
       })
}