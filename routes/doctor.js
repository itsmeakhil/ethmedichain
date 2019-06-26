var express = require('express');
var router = express.Router();



/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('doctorlogin');
// });

router.get('/addpatient', function (req, res, next) {
  res.render('daddpatient');
});


router.get('/doctordashboard', function (req, res, next) {
    res.render('doctor');
});
  

router.get('/addtreatment', function (req, res, next) {
    res.render('daddtreatment');
});

router.get('/searchtreatment', function (req, res, next) {
  res.render('dtreatmentsearch');
});
router.get('/searchhospital', function (req, res, next) {
    res.render('dhospitalsearch');
});
router.get('/searchdoctor', function (req, res, next) {
    res.render('ddoctorsearch');
});
router.get('/searchpatient', function (req, res, next) {
    res.render('dpatientsearch');
});
router.get('/patienttreatment', function (req, res, next) {
    res.render('dpatientsearch');
});


router.post('/settreatment',  function (req, res, next) {
    data = req.body;
  console.log(data);
 Medichain.methods
    .setTreatmentDetails(
      data.Id,
      data.DocId,
      data.HospitalId,
      data.Observation,
      data.Disease,
      data.Medicine,
    )
    .send({ from: data.DocKey, gas: 6000000 }).catch((error)=>{
      console.log(error);
    });
    console.log("Records added successfully")
    res.redirect("/doctor/addtreatment")
    
});


//get Hospitals
router.get("/getdoctor", function(req, res, next) {

    data = req.query;
    console.log(data);
  
  Medichain.methods.getDoctor(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Age = web3.utils.toBN(val._Age).toString();
            res.render("dgetdoctor", {myData : val});
        })
 
  });

//Get Hospital
  router.get('/gethospital', function (req, res, next) {
    data = req.query;
    console.log(data);

  Medichain.methods.getHospital(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Phone = web3.utils.toBN(val._Phone).toString();
            res.render("dgethospital", {myData : val});
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
            res.render("dgetpatient", {myData : val});
        })
  
  
  });

//Register Patient
router.post('/register', function (req, res, next) {
    data = req.body;
    address = data.Key;
  // console.log(data);
    Medichain.methods
    .setPatient(
      data.Key,
      data.Id,
      data.Name,
      data.Age,
      data.MyGender,
      data.Phone,
      data.Email,
      data.Address,
  
    )
    .send({ from: data.DocKey, gas: 6000000 }).catch((err)=>{
      console.log(error)
    });
    console.log("Patient Address is : ",address)
    res.redirect('/doctor/doctordashboard');
    
  });
  router.get('/gettreatment', function (req, res, next) {
    data = req.query;
    console.log(data);
  
  Medichain.methods.getTreament(data.Id)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            val._Id1 = web3.utils.toBN(val._Id1).toString();
            val._DoctorId = web3.utils.toBN(val._DoctorId).toString();
            val._Hospital = web3.utils.toBN(val._Hospital).toString();
  
            res.render("dgettreatment", {myData : val});
        })
  
  });


module.exports = router;
