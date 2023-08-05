// import express
const express = require('express')

const router = express.Router()

// import usercontroller
const usercontroller = require('../controller/userController')

// import company controller
const companycontroller = require('../controller/companycontroller')

// import jobs controller
const jobscontroller = require('../controller/jobController')

// import application controller
const applicationcontroller = require('../controller/applicationController')

const upload = require('../multerConfig/storageConfig')
// user registration
router.post('/user/register',upload.single('user-resume'),usercontroller.userRegistration)

// user login
router.post('/user/login',upload.none(),usercontroller.userLogin)

// company register
router.post('/company/register',upload.single('company-image'),companycontroller.companyRegister)

// company Login
router.post('/company/login',upload.none(),companycontroller.companyLogin)

// add job vaccencies
router.post('/job/vaccency/:id',upload.none(),jobscontroller.addjobVaccencies)

// get job vaccencies
router.get('/jobs',jobscontroller.getjobs)

// get company details
router.get('/company/details/:id',upload.none(),companycontroller.getcompanydetails)

// get job details
router.get('/job/details/:id',upload.none(),jobscontroller.jobdetails)

// add applications
router.post('/application',upload.none(),applicationcontroller.storeapplications)

// view applications
router.get('/application/view/:id',applicationcontroller.viewapplications)

// export router
module.exports = router  