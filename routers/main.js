const express = require('express');
const req = require('express/lib/request');
const router = express.Router()


router.get('/', (req, res) => {
    console.log(req.session)
    res.render('site/index', {
        style:'/index_css.css'
    });
});

router.get('/tarif', (req, res) => {
    res.render('site/tarif',{
        style:'/tarif_css.css'
    });
});

/* router.get('/signin', (req, res) => {
    res.render('site/signin', {
        style:'/signin_css.css'
    });
}); */

/* router.get('/login', (req, res) => {
    res.render('site/login', {
        style:'/login_css.css'
    });
}); */


/* router.post('/signincontrol', (req, res) => {
   /*  console.log(req.body)
   // res.send("POST METHOD WORKS")
    console.log('-----------')
    console.log("email: "+req.body.email); 
    if(req.body.password== req.body.passwordcontrol){
        console.log("Password Match");
    }else{
        console.log("Password Mismatch");
        res.redirect('/');
    } */

/*     sigIn.create(req.body)
    res.redirect('/login')
    console.log(req.body)
}); */


module.exports = router
