var express = require('express');
var router = express.Router();

var itemDb=require('../../../db/item');
const {randomId}=require('../../../util/random');
let itemDbConnect;

const adminItemRouter = DBConnect => {
    itemDbConnect=itemDb(DBConnect);
    return router;
  };
  
  router.post('/',(req,res)=>{
      const {name,price,description}=req.body;
      const id=randomId(12);
      itemDbConnect.
        addAllItems(id,name,price,description)
        .then(()=>res.status(200).send({id}))
        .catch(err=>res.status(500).send(err));
    });
     
  module.exports = adminItemRouter;