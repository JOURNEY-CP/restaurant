var express = require('express');
var router = express.Router();

var itemDb=require('../../../db/item');
var random=require('../../../util/random');
let itemDbConnect;

const adminItemRouter = DBConnect => {
    itemDbConnect=itemDb(DBConnect);
    return router;
  };
  
  router.post('/',(req,res)=>{
      const {name,price,description}=req.body;
      const id=random.randomId;
      itemDbConnect.
        addAllItems(id,name,price,description)
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(500).send(err));
    });
     
  module.exports = adminItemRouter;