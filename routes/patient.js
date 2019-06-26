var express = require('express');
var router = express.Router();



// router.get('/login', function (req, res, next) {
//   res.render('patientlogin');
// });

// //loin validation
// router.post('/login', function(req, res, next) {
 
//   data = req.body;
//   Medichain.methods.patientLogin(data.Key)
//       .call({ from: coinbase }).then((val) => {
         
//         val= web3.utils.toBN(val).toString();
//         if(val == 1){
//           web3.eth.personal.unlockAccount(data.Key, data.Password, 1000)
//           .then((response) => {
//               if(response){
//                   res.redirect('/patient/patientdashboard')
//                   console.log("Login info full")
//               }    
//               // console.log(response);
//           }).catch((error) => {

//               res.redirect('/patient/login')
//               console.log("Password You Entered is wrong")

//               // console.log(error);
//           });
//         }else{
//             res.redirect('/patient/login')
//           console.log("Address not found")
//         }
          
//       }).catch((error) => {
//                 console.log(error);
//             });

  
// });
// router.get('/register', function (req, res, next) {
//   res.render('patientregister');
// });
router.get('/searchpatient', function (req, res, next) {
  res.render('psearchpatient');
});
router.get('/searchdoctor', function (req, res, next) {
  res.render('psearchdoctor');
});
router.get('/searchtreatment', function (req, res, next) {
  res.render('psearchtreatment');
});
router.get('/searchhospital', function (req, res, next) {
  res.render('psearchhospital');
});
router.get('/patientdashboard', function (req, res, next) {
    res.render('patient');
});

//patient register



//get Patient
router.get("/getpatient", function(req, res, next) {

  data = req.query;
  console.log(data);

Medichain.methods.getPatient(data.Id)
      .call({ from: coinbase }).then((val) => {
          console.log(val);
          val._Age = web3.utils.toBN(val._Age).toString();
          res.render("pgetpatient", {myData : val});
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
          res.render("pgetdoctor", {myData : val});
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
          res.render("pgethospital", {myData : val});
      })

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

          res.render("pgettreatment", {myData : val});
      })

});
  
module.exports = router;
