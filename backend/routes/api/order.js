var express = require('express');
var router = express.Router();

var itemDb=require('../../db/item');
let itemDbConnect;

const itemRouter = DBConnect => {
  itemDbConnect=itemDb(DBConnect);
  return router;
};

router.post('/place',(req,res)=>{
    //  res.status(200).send("Hi");
    //  return ;
     itemDbConnect.
       addOrder(item_id,req.body.feedback,req.body.rating)
       .then(data=>res.status(200).send(data))
       .catch(err=>res.status(500).send(err));
  });

module.exports = itemRouter;