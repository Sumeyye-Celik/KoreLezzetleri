const express = require('express');
const req = require('express/lib/request');
const router = express.Router()
const User =require('../models/userModels')


router.get('/signin', (req, res) => {
    res.render('site/signin', {
        style:'/signin_css.css'
    });
});

router.post('/signin', (req, res) => {
    User.create(req.body, (error, user)=>{
        // res.redirect('/')
        console.log("email: "+req.body.email); 
        if(req.body.password== req.body.passwordcontrol){
            console.log("Password Match");
            res.redirect('/users/login');
        }else{
            console.log("Password Mismatch");
            res.redirect('/');
        }
    })
});

router.get('/login', (req, res) => {
    res.render('site/login', {
        style:'/login_css.css'
    });
});

router.post('/login', (req, res) => {
   const{username, password} = req.body

   User.findOne({username}, (error, user) =>{
       if(user){
           if(user.password == password){
               req.session.userId = user._id
               res.redirect('/')
           } else{
               res.redirect('/users/login')
           }
       } else{
           res.redirect('/users/signin')
       }
   })
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
    /* res.render('site/login', {
        style:'/login_css.css'
    }); */
});

module.exports = router