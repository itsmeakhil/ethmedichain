var express = require('express');
var router = express.Router();





router.get('/hospitaldashboard', function (req, res, next) {
    res.render('hospital');
});
 

router.get('/add_doctors', function (req, res, next) {
    res.render('hadddoctor');
});


router.get('/searchdoctor', function (req, res, next) {
    res.render('hsearch');
});
router.get('/searchpatient', function (req, res, next) {
    res.render('hsearchpatient');
});

router.get('/hospitals', function (req, res, next) {
    res.render('dhospitals');
});


//add Doctor
router.post('/add_doctors',  function (req, res, next) {
    data = req.body;
  console.log(data);
  address = data.Key
  Medichain.methods
    .setDoctor(
      data.Key,
      data.Id,
      data.Name,
      data.Age,
      data.MyGender,
      data.Email,
      data.HospitalId,
      data.Qualification
    )
    .send({ from: data.HospitalKey, gas: 6000000 }).catch((error)=>{
      console.log(error)
    });
    console.log("Doctor address : ",address)
    res.redirect("/hospital/hospitaldashboard")
    
});

//get Doctor
router.get("/getdoctor", function(req, res, next) {

    data = req.query;
    console.log(data);
  
  Medichain.methods.getDoctor(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Age = web3.utils.toBN(val._Age).toString();
            res.render("hgetdoctor", {myData : val});
        }).catch((error)=>{
          console.log(error);
        });
      
  
  
  });


//get Patient
router.get("/getpatient", function(req, res, next) {

    data = req.query;
    console.log(data);
  
  Medichain.methods.getPatient(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Age = web3.utils.toBN(val._Age).toString();
            res.render("hgetpatient", {myData : val});
        })
  
  
  });

module.exports = router;
