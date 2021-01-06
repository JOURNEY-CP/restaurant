var express = require('express');
var router = express.Router();

var sampleDb=require('../../db/sample');
let sampleDbConnect;

const sampleRouter = DBConnect => {
  sampleDbConnect=sampleDb(DBConnect);
  return router;
};

router.post('/',(req,res)=>{
    sampleDbConnect.
        createNewAccount(req.body.id,req.body.user_id,req.body.pin)
        .then(()=>res.send("created"))
        .catch(err=>res.status(500).send(err));
});
   
module.exports = sampleRouter;