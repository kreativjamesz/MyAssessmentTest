const express = requrie('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message: 'Handling Get requests to /transactions'
  })
})

router.post('/',(req,res,next)=>{
  res.status(201).json({
    message: 'Handling Post requests to /transactions'
  })
})

router.get('/:transactionId',(req,res,next)=>{
  console.log(req.params);
});