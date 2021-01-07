var express = require('express');
var router = express.Router();

var orderDb=require('../../db/order');
let orderDbConnect;



const orderRouter = DBConnect => {
    orderDbConnect=orderDb(DBConnect);
    return router;
  };

router.post('/place',(req,res)=>{
    //  res.status(200).send("Hi");
    //  return ;
     orderDbConnect.
       addOrder(item_id,req.body.feedback,req.body.rating)
       .then(data=>res.status(200).send(data))
       .catch(err=>res.status(500).send(err));
  });

module.exports = orderRouter;