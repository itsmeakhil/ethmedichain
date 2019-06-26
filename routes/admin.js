const express = require('express')
var router = express.Router();

 
router.get("/admindashboard", function(req, res, next) {
   res.render("admin");
});
router.get("/addhospital", function(req, res, next) {
    res.render("aaddhospital");

  
});
router.get("/search", function(req, res, next) {
  res.render("asearch");
});

router.get("/searchpatient", function(req, res, next) {
  res.render("asearchpatient");
});
router.get("/searchdoctor", function(req, res, next) {
  res.render("asearchdoctor");
});


//Get Hospital
  router.get('/gethospital', function (req, res, next) {
    data = req.query;
    console.log(data);

  Medichain.methods.getHospital(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Phone = web3.utils.toBN(val._Phone).toString();
            res.render("agethospital", {myData : val});
        })

});

//get Doctor
router.get("/getdoctor", function(req, res, next) {

  data = req.query;
  console.log(data);

Medichain.methods.getDoctor(data.Id)
      .call({ from: coinbase }).then((val) => {
          console.log(val);
          val._Age = web3.utils.toBN(val._Age).toString();
          res.render("agetdoctor", {myData : val});
      })


});

//get Patient
router.get("/getpatient", function(req, res, next) {

  data = req.query;
  console.log(data);

Medichain.methods.getPatient(data.Id)
      .call({ from: coinbase }).then((val) => {
          console.log(val);
          val._Age = web3.utils.toBN(val._Age).toString();
          res.render("agetpatient", {myData : val});
      })


});


//Add Hospital 
router.post("/add_hospital",  function(req, res, next) {
  data = req.body;
  address =data.Key
  // console.log(data);
  Medichain.methods
    .setHospital(
      data.Key,
      data.Id,
      data.Name,
      data.Email,
      data.Phone,
      data.Address
    )
    .send({ from: coinbase, gas: 6000000 }).catch((error)=>{
      console.log(error)
    });
    console.log("Hospital Address is : ",address)
    res.redirect('/admin/admindashboard')
});

module.exports = router;



